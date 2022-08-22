import type { Connection, Context } from "../../types";
import { ObjectIdentifier, TRUE_BIT } from "asn1-ts";
import { DER } from "asn1-ts/dist/node/functional";
import {
    list,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/list.oa";
import {
    ListArgument,
    _encode_ListArgument,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ListArgument.ta";
import {
    ListArgumentData,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ListArgumentData.ta";
import {
    ListResult,
    _decode_ListResult,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ListResult.ta";
import type {
    DistinguishedName,
} from "@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta";
import {
    ServiceControls,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ServiceControls.ta";
import getOptionallyProtectedValue from "@wildboar/x500/src/lib/utils/getOptionallyProtectedValue";
import destringifyDN from "../../utils/destringifyDN";
import stringifyDN from "../../utils/stringifyDN";
import printError from "../../printers/Error_";
import {
    PagedResultsRequest,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/PagedResultsRequest.ta";
import {
    PagedResultsRequest_newRequest,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/PagedResultsRequest-newRequest.ta";
import * as sco from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ServiceControlOptions.ta";
import {
    ServiceControls_priority_low,
    ServiceControls_priority_medium,
    ServiceControls_priority_high,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ServiceControls-priority.ta";
import {
    ServiceControls_scopeOfReferral_country,
    ServiceControls_scopeOfReferral_dmd,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ServiceControls-scopeOfReferral.ta";
import {
    ProtectionRequest_signed,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ProtectionRequest.ta";
import {
    SecurityParameters,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/SecurityParameters.ta";
import {
    LimitProblem,
    LimitProblem_administrativeLimitExceeded,
    LimitProblem_sizeLimitExceeded,
    LimitProblem_timeLimitExceeded,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/LimitProblem.ta";
import type {
    PartialOutcomeQualifier,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/PartialOutcomeQualifier.ta";
import type {
    ContinuationReference,
} from "@wildboar/x500/src/lib/modules/DistributedOperations/ContinuationReference.ta";
import naddrToURI from "@wildboar/x500/src/lib/distributed/naddrToURI";

function priorityFromString (str: string): ServiceControls["priority"] {
    switch (str.trim().toLowerCase()) {
        case ("low"): return ServiceControls_priority_low;
        case ("medium"): return ServiceControls_priority_medium;
        case ("high"): return ServiceControls_priority_high;
        default: return ServiceControls_priority_medium;
    }
}

function scopeOfReferralFromString (str: string): ServiceControls["scopeOfReferral"] {
    switch (str.trim().toLowerCase()) {
        case ("dmd"): return ServiceControls_scopeOfReferral_dmd;
        case ("country"): return ServiceControls_scopeOfReferral_country;
        default: return undefined;
    }
}

function limitProblemToString (lp: LimitProblem): string {
    return {
        [Number(LimitProblem_administrativeLimitExceeded)]: "Administrative Limit Exceeded",
        [Number(LimitProblem_sizeLimitExceeded)]: "Size Limit Exceeded",
        [Number(LimitProblem_timeLimitExceeded)]: "Time Limit Exceeded",
    }[Number(lp)] ?? "Unknown";
}

function printContinuationReference (ctx: Context, cr: ContinuationReference): void {
    console.info("Continuation Reference:");
    for (const ap of cr.accessPoints) {
        console.info(`Access Point AE-Title: ${stringifyDN(ctx, ap.ae_title.rdnSequence)}`);
        for (const naddr of ap.address.nAddresses) {
            console.info(`URL: ${naddrToURI(naddr)}`);
        }
    } 
}

function printPOQ (ctx: Context, poq: PartialOutcomeQualifier): void {
    ctx.log.info("This result set was incomplete.");
    if (poq.limitProblem !== undefined) {
        ctx.log.info(`The limiting problem encountered was: ${limitProblemToString(poq.limitProblem)}`);
    }
    if (poq.entryCount !== undefined) {
        if ("exact" in poq.entryCount) {
            ctx.log.info(`The exact number of entries in the total result set is ${poq.entryCount.exact}`);
        } else if ("lowEstimate" in poq.entryCount) {
            ctx.log.info(`The low estimate of the number of entries in the total result set is ${poq.entryCount.lowEstimate}`);
        } else if ("bestEstimate" in poq.entryCount) {
            ctx.log.info(`The best estimate of the number of entries in the total result set is ${poq.entryCount.bestEstimate}`);
        }
    }
    for (const unx of poq.unexplored ?? []) {
        printContinuationReference(ctx, unx);
    }
}

export
async function do_list (
    ctx: Context,
    conn: Connection,
    argv: any,
): Promise<void> {
    const objectName: DistinguishedName = destringifyDN(ctx, argv.object);
    const prr: PagedResultsRequest | undefined = argv.pageSize
        ? {
            newRequest: new PagedResultsRequest_newRequest(
                argv.pageSize,
                argv.sortKey
                    ? argv.sortKey.map(ObjectIdentifier.fromString)
                    : undefined,
                argv.reverse,
                argv.unmerged,
                argv.pageNumber,
            ),
        }
        : undefined;

    const serviceControlOptions: sco.ServiceControlOptions = new Uint8ClampedArray(15);
    if (argv.preferChaining) {
        serviceControlOptions[sco.ServiceControlOptions_preferChaining] = TRUE_BIT;
    }
    if (argv.chainingProhibited) {
        serviceControlOptions[sco.ServiceControlOptions_chainingProhibited] = TRUE_BIT;
    }
    if (argv.localScope) {
        serviceControlOptions[sco.ServiceControlOptions_localScope] = TRUE_BIT;
    }
    if (argv.dontDereferenceAliases) {
        serviceControlOptions[sco.ServiceControlOptions_dontDereferenceAliases] = TRUE_BIT;
    }
    if (argv.subentries) {
        serviceControlOptions[sco.ServiceControlOptions_subentries] = TRUE_BIT;
    }
    if (argv.copyShallDo) {
        serviceControlOptions[sco.ServiceControlOptions_copyShallDo] = TRUE_BIT;
    }
    if (argv.partialNameResolution) {
        serviceControlOptions[sco.ServiceControlOptions_partialNameResolution] = TRUE_BIT;
    }
    if (argv.manageDSAIT) {
        serviceControlOptions[sco.ServiceControlOptions_manageDSAIT] = TRUE_BIT;
    }
    if (argv.countFamily) {
        serviceControlOptions[sco.ServiceControlOptions_countFamily] = TRUE_BIT;
    }

    const serviceControls = new ServiceControls(
        serviceControlOptions,
        argv.priority
            ? priorityFromString(argv.priority)
            : undefined,
        argv.timeLimit,
        argv.sizeLimit,
        argv.scopeOfReferral
            ? scopeOfReferralFromString(argv.scopeOfReferral)
            : undefined,
    );

    const reqData: ListArgumentData = new ListArgumentData(
        {
            rdnSequence: objectName,
        },
        prr,
        argv.listFamily,
        [],
        serviceControls,
        new SecurityParameters(
            undefined,
            undefined,
            undefined,
            undefined,
            ProtectionRequest_signed,
        ), // TODO: Options
        undefined,
    );
    const arg: ListArgument = {
        unsigned: reqData,
    };
    const outcome = await conn.writeOperation({
        opCode: list["&operationCode"]!,
        argument: _encode_ListArgument(arg, DER),
    });
    if ("error" in outcome) {
        printError(ctx, outcome);
        return;
    }
    if (!outcome.result) {
        ctx.log.error("Invalid server response: no result data.");
        return;
    }
    const result: ListResult = _decode_ListResult(outcome.result);
    const resData = getOptionallyProtectedValue(result);
    if ("signed" in result) {
        ctx.log.info("This response was signed.");
    }
    if ("listInfo" in resData) {
        resData.listInfo.subordinates
            .map((sub) => stringifyDN(ctx, [ sub.rdn ]))
            .forEach((str, i) => console.log(`#${(i + 1).toString().padStart(4, "0")}: ${str}`));
        if (resData.listInfo.partialOutcomeQualifier) {
            const poq = resData.listInfo.partialOutcomeQualifier;
            printPOQ(ctx, poq);
        }
        ctx.log.info("End of list.");
    } else if ("uncorrelatedListInfo" in resData) {
        ctx.log.warn("Uncorrelated info."); // FIXME:
    } else {
        ctx.log.warn("Unrecognized result set format.");
    }
}

export default do_list;
