import { Context, Vertex, ClientConnection } from "../types";
import { OBJECT_IDENTIFIER, ObjectIdentifier } from "asn1-ts";
import * as errors from "../errors";
import { DER } from "asn1-ts/dist/node/functional";
import readChildren from "../dit/readChildren";
import {
    Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1 as ChainedArgument,
} from "@wildboar/x500/src/lib/modules/DistributedOperations/Chained-ArgumentType-OPTIONALLY-PROTECTED-Parameter1.ta";
import { ChainingArguments } from "@wildboar/x500/src/lib/modules/DistributedOperations/ChainingArguments.ta";
import { ServiceErrorData } from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ServiceErrorData.ta";
import {
    ServiceProblem_invalidReference,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ServiceErrorData.ta";
import {
    ListResult,
    _encode_ListResult,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ListResult.ta";
import {
    ListResultData_listInfo,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ListResultData-listInfo.ta";
import {
    ListResultData_listInfo_subordinates_Item as ListItem,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ListResultData-listInfo-subordinates-Item.ta";
import getDistinguishedName from "../x500/getDistinguishedName";
import {
    Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1 as ChainedResult,
} from "@wildboar/x500/src/lib/modules/DistributedOperations/Chained-ResultType-OPTIONALLY-PROTECTED-Parameter1.ta";
import {
    ChainingResults,
} from "@wildboar/x500/src/lib/modules/DistributedOperations/ChainingResults.ta";
import { SecurityErrorData } from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/SecurityErrorData.ta";
import {
    SecurityProblem_noInformation,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/SecurityProblem.ta";
import getRelevantSubentries from "../dit/getRelevantSubentries";
import accessControlSchemesThatUseEntryACI from "../authz/accessControlSchemesThatUseEntryACI";
import accessControlSchemesThatUsePrescriptiveACI from "../authz/accessControlSchemesThatUsePrescriptiveACI";
import type ACDFTuple from "@wildboar/x500/src/lib/types/ACDFTuple";
import type ACDFTupleExtended from "@wildboar/x500/src/lib/types/ACDFTupleExtended";
import bacACDF, {
    PERMISSION_CATEGORY_ADD,
    PERMISSION_CATEGORY_REMOVE,
    PERMISSION_CATEGORY_MODIFY,
} from "@wildboar/x500/src/lib/bac/bacACDF";
import getACDFTuplesFromACIItem from "@wildboar/x500/src/lib/bac/getACDFTuplesFromACIItem";
import type EqualityMatcher from "@wildboar/x500/src/lib/types/EqualityMatcher";
import getIsGroupMember from "../bac/getIsGroupMember";
import userWithinACIUserClass from "@wildboar/x500/src/lib/bac/userWithinACIUserClass";

export
async function list_ii (
    ctx: Context,
    conn: ClientConnection,
    admPoints: Vertex[],
    target: Vertex,
    request: ChainedArgument,
    fromDAP: boolean,
): Promise<ChainedResult> {
    const targetDN = getDistinguishedName(target);
    const subordinates = await readChildren(ctx, target);
    const excludeShadows: boolean = request.chainedArgument.excludeShadows
        ?? ChainingArguments._default_value_for_excludeShadows;
    const listItems: ListItem[] = [];
    for (const subordinate of subordinates) {
        // TODO: Check limits
        if (!(subordinate.dse.entry) && !(subordinate.dse.alias)) {
            continue;
        }
        if (
            excludeShadows
            && (subordinate.dse.shadow) // TODO: Ignore if writeableCopy
            // writableCopy has been deprecated, but it still constitutes a "copy"
        ) {
            continue;
        }
        // TODO: Check ACI
        listItems.push(new ListItem(
            subordinate.dse.rdn,
            Boolean(subordinate.dse.alias),
            Boolean(subordinate.dse.shadow),
        ));
    }
    if (fromDAP && (listItems.length === 0)) {
        throw new errors.ServiceError(
            "Null result from DAP list operation",
            new ServiceErrorData(
                ServiceProblem_invalidReference,
                [],
                undefined,
                undefined,
                undefined,
                undefined,
            ),
        );
    }
    const result: ListResult = {
        unsigned: {
            listInfo: new ListResultData_listInfo(
                // {
                //     rdnSequence: targetDN,
                // },
                undefined,
                listItems,
                undefined,
                [],
                undefined,
                undefined,
                undefined,
                undefined,
            ),
        },
    };
    return new ChainedResult(
        new ChainingResults(
            undefined,
            undefined,
            undefined,
            undefined,
        ),
        _encode_ListResult(result, DER),
    );
}

export default list_ii;

