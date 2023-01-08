import type { Context, Vertex } from "@wildboar/meerkat-types";
import {
    id_sc_subentry,
} from "@wildboar/x500/src/lib/modules/InformationFramework/id-sc-subentry.va";
import dnWithinSubtreeSpecification from "@wildboar/x500/src/lib/utils/dnWithinSubtreeSpecification";
import getDistinguishedName from "../x500/getDistinguishedName";
import { OBJECT_IDENTIFIER, ObjectIdentifier, BERElement } from "asn1-ts";
import type { DistinguishedName } from "@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta";
import readSubordinates from "./readSubordinates";
import getNamingMatcherGetter from "../x500/getNamingMatcherGetter";
import { subtreeSpecification } from "@wildboar/x500/src/lib/collections/attributes";
import { _decode_SubtreeSpecification } from "@wildboar/x500/src/lib/modules/InformationFramework/SubtreeSpecification.ta";

const SUBENTRY: string = id_sc_subentry.toString();

/**
 * @summary Get the subentries whose subtree specification select for an entry
 * @description
 *
 * This function returns the subentries whose subtree specifications select an
 * entry of interest. This takes into account the object classes of the entry,
 * chop, and so on.
 *
 * @param ctx The context object
 * @param entry The DSE whose relevant subentries are to be returned, or just an
 *  array of object identifiers of the object classes the entry has.
 * @param entryDN The distinguished name of the DSE given by the `entry` parameter
 * @param admPoint The autonomous administrative point
 * @returns An array of vertices, which are the subentries whose subtree
 *  specification selected for the specified entry
 *
 * @function
 * @async
 */
export
async function getRelevantSubentries (
    ctx: Context,
    entry: Vertex | OBJECT_IDENTIFIER[],
    entryDN: DistinguishedName,
    admPoint: Vertex,
    // TODO: Add parameter to only select subentries having a specific object class.
): Promise<Vertex[]> {
    const NAMING_MATCHER = getNamingMatcherGetter(ctx);
    const subentries = await readSubordinates(ctx, admPoint, undefined, undefined, undefined, {
        subentry: true,
    });
    const objectClasses = Array.isArray(entry)
        ? entry
        : Array.from(entry.dse.objectClass.values()).map(ObjectIdentifier.fromString);
    const subtree_rows = await ctx.db.attributeValue.findMany({
        where: {
            entry_id: {
                in: subentries.map((c) => c.dse.id),
            },
            type: subtreeSpecification["&id"].toString(),
        },
        select: {
            entry_id: true,
            ber: true,
        },
    });
    const relevant_sub_ids: Set<number> = new Set();
    for (const { entry_id, ber } of subtree_rows) {
        const el = new BERElement();
        el.fromBytes(ber);
        const subtree = _decode_SubtreeSpecification(el);
        if (dnWithinSubtreeSpecification(
            entryDN,
            objectClasses,
            subtree,
            getDistinguishedName(admPoint),
            NAMING_MATCHER,
        )) {
            relevant_sub_ids.add(entry_id);
        }
    }
    const ret: Vertex[] = [];
    for (const subentry of subentries) {
        if (relevant_sub_ids.has(subentry.dse.id)) {
            ret.push(subentry);
            relevant_sub_ids.delete(subentry.dse.id);
        }
    }
    return ret;
}

export default getRelevantSubentries;
