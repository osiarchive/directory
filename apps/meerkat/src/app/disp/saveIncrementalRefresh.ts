import type { Context, Vertex } from "@wildboar/meerkat-types";
import {
    IncrementalStepRefresh,
} from "@wildboar/x500/src/lib/modules/DirectoryShadowAbstractService/IncrementalStepRefresh.ta";
import {
    SubordinateChanges, _encode_IncrementalStepRefresh,
} from "@wildboar/x500/src/lib/modules/DirectoryShadowAbstractService/SubordinateChanges.ta";
import { BER } from "asn1-ts/dist/node/functional";
import { ShadowIncrementType } from "@prisma/client";

// IncrementalStepRefresh ::= SEQUENCE {
//     sDSEChanges
//       CHOICE {add     [0]  SDSEContent,
//               remove  NULL,
//               modify  [1]  ContentChange,
//               ...} OPTIONAL,
//     subordinateUpdates  SEQUENCE SIZE (1..MAX) OF SubordinateChanges OPTIONAL }

//   ContentChange ::= SEQUENCE {
//     rename
//       CHOICE {newRDN  RelativeDistinguishedName,
//               newDN   DistinguishedName} OPTIONAL,
//     attributeChanges
//       CHOICE {replace  [0]  SET SIZE (1..MAX) OF Attribute{{SupportedAttributes}},
//               changes  [1]  SEQUENCE SIZE (1..MAX) OF EntryModification} OPTIONAL,
//     sDSEType          SDSEType,
//     subComplete       [2]  BOOLEAN DEFAULT FALSE,
//     attComplete       [3]  BOOLEAN OPTIONAL,
//     attValIncomplete  SET OF AttributeType DEFAULT {},
//     ... }

//   SubordinateChanges ::= SEQUENCE {
//     subordinate  RelativeDistinguishedName,
//     changes      IncrementalStepRefresh,
//     ... }

export
async function saveIncrementalRefresh (
    ctx: Context,
    binding_id: number,
    immediate_superior: Vertex,
    actual_change: SubordinateChanges,
): Promise<void> {
    let ret: SubordinateChanges = actual_change;
    let current: Vertex | undefined = immediate_superior;
    while (current) {
        ret = new SubordinateChanges(
            current.dse.rdn,
            new IncrementalStepRefresh(
                undefined,
                [ret],
            ),
        );
        current = current.immediateSuperior;
    }
    const toSave = ret.changes;
    let change_type: ShadowIncrementType = ShadowIncrementType.OTHER;
    if (actual_change.changes.sDSEChanges) {
        if ("add" in actual_change.changes.sDSEChanges) {
            change_type = ShadowIncrementType.ADD;
        }
        else if ("remove" in actual_change.changes.sDSEChanges) {
            change_type = ShadowIncrementType.REMOVE;
        }
        else if ("modify" in actual_change.changes.sDSEChanges) {
            change_type = ShadowIncrementType.MODIFY;
        }
    }
    const bytes = _encode_IncrementalStepRefresh(toSave, BER).toBytes();
    await ctx.db.pendingShadowIncrementalStepRefresh.create({
        data: {
            ber: Buffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength),
            binding_identifier: binding_id,
            rename: !!(
                actual_change.changes.sDSEChanges
                && ("modify" in actual_change.changes.sDSEChanges)
                && actual_change.changes.sDSEChanges.modify.rename
            ),
            type: change_type,
        },
    });
}
