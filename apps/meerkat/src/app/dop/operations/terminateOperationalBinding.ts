import type { Context } from "@wildboar/meerkat-types";
import type DOPAssociation from "../DOPConnection";
import * as errors from "@wildboar/meerkat-types";
import type {
    TerminateOperationalBindingArgument,
} from "@wildboar/x500/src/lib/modules/OperationalBindingManagement/TerminateOperationalBindingArgument.ta";
import type {
    TerminateOperationalBindingArgumentData,
} from "@wildboar/x500/src/lib/modules/OperationalBindingManagement/TerminateOperationalBindingArgumentData.ta";
import type {
    TerminateOperationalBindingResult,
} from "@wildboar/x500/src/lib/modules/OperationalBindingManagement/TerminateOperationalBindingResult.ta";
import {
    id_op_binding_hierarchical,
} from "@wildboar/x500/src/lib/modules/DirectoryOperationalBindingTypes/id-op-binding-hierarchical.va";
import {
    OpBindingErrorParam,
} from "@wildboar/x500/src/lib/modules/OperationalBindingManagement/OpBindingErrorParam.ta";
import {
    OpBindingErrorParam_problem_unsupportedBindingType,
    OpBindingErrorParam_problem_invalidID,
} from "@wildboar/x500/src/lib/modules/OperationalBindingManagement/OpBindingErrorParam-problem.ta";
import {
    _decode_PresentationAddress,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/PresentationAddress.ta";
import { BERElement } from "asn1-ts";
import { differenceInMilliseconds } from "date-fns";
import compareSocketToNSAP from "@wildboar/x500/src/lib/distributed/compareSocketToNSAP";
import terminate from "../terminateByID";
import getOptionallyProtectedValue from "@wildboar/x500/src/lib/utils/getOptionallyProtectedValue";
import createSecurityParameters from "../../x500/createSecurityParameters";
import {
    id_err_operationalBindingError,
} from "@wildboar/x500/src/lib/modules/CommonProtocolSpecification/id-err-operationalBindingError.va";
import { setTimeout as safeSetTimeout } from "safe-timers";
import { getDateFromOBTime } from "../getDateFromOBTime";

/**
 * @summary Terminates an operational binding, as described in ITU Recommendation X.501.
 * @description
 *
 * This function implements the `terminateOperationalBinding` operation
 * described in ITU Recommendation X.501 (2016), Section 28.4.
 *
 * @param ctx The context object
 * @param assn The client association
 * @param arg The `TerminateOperationalBindingArgument` argument
 * @returns The `TerminateOperationalBindingResult` result
 *
 * @function
 * @async
 */
export
async function terminateOperationalBinding (
    ctx: Context,
    assn: DOPAssociation,
    arg: TerminateOperationalBindingArgument,
): Promise<TerminateOperationalBindingResult> {
    const data: TerminateOperationalBindingArgumentData = getOptionallyProtectedValue(arg);
    const NOT_SUPPORTED_ERROR = new errors.OperationalBindingError(
        `Operational binding type ${data.bindingType.toString()} not understood.`,
        {
            unsigned: new OpBindingErrorParam(
                OpBindingErrorParam_problem_unsupportedBindingType,
                data.bindingType,
                undefined,
                undefined,
                [],
                createSecurityParameters(
                    ctx,
                    undefined,
                    undefined,
                    id_err_operationalBindingError,
                ),
                ctx.dsa.accessPoint.ae_title.rdnSequence,
                undefined,
                undefined,
            ),
        },
    );

    const now = new Date();

    const obs = (await ctx.db.operationalBinding.findMany({
        where: {
            accepted: true,
            binding_type: data.bindingType.toString(),
            binding_identifier: Number(data.bindingID.identifier),
            terminated_time: null,
            validity_start: {
                lte: now,
            },
            OR: [
                {
                    validity_end: null,
                },
                {
                    validity_end: {
                        gte: now,
                    },
                },
            ],
        },
        select: {
            id: true,
            access_point: {
                select: {
                    ber: true,
                },
            },
        },
    }))
        .filter((ob) => {
            if (!ob.access_point) {
                return false;
            }
            const el = new BERElement();
            el.fromBytes(ob.access_point.ber);
            // This is a simpler way to get the address out of the AP type.
            const address = el.set.find((component) => (component.tagNumber === 1));
            if (!address) {
                return false;
            }
            const pa = _decode_PresentationAddress(address.inner);
            return pa.nAddresses.some((naddr) => compareSocketToNSAP(assn.idm.s, naddr));
        });

    if (obs.length === 0) {
        throw new errors.OperationalBindingError(
            ctx.i18n.t("err:no_ob_with_id", {
                id: data.bindingID.identifier,
            }),
            {
                unsigned: new OpBindingErrorParam(
                    OpBindingErrorParam_problem_invalidID,
                    data.bindingType,
                    undefined,
                    undefined,
                    [],
                    createSecurityParameters(
                        ctx,
                        assn.boundNameAndUID?.dn,
                        undefined,
                        id_err_operationalBindingError,
                    ),
                    ctx.dsa.accessPoint.ae_title.rdnSequence,
                    undefined,
                    undefined,
                ),
            },
        );
    }

    const terminationTime: Date = data.terminateAt
        ? getDateFromOBTime(data.terminateAt)
        : now;

    switch (data.bindingType.toString()) {
        case (id_op_binding_hierarchical.toString()): {
            for (const ob of obs) {
                safeSetTimeout(
                    () => terminate(ctx, ob.id),
                    Math.max(differenceInMilliseconds(terminationTime, now), 1000),
                );
            }
            await ctx.db.operationalBinding.updateMany({
                where: {
                    id: {
                        in: obs.map((ob) => ob.id),
                    },
                },
                data: {
                    terminated_time: terminationTime,
                },
            });
            return {
                null_: null,
            };
        }
        default: {
            throw NOT_SUPPORTED_ERROR;
        }
    }
}

export default terminateOperationalBinding;
