import {
    Context,
    ClientConnection,
    AbandonError,
    AbandonFailedError,
    AttributeError,
    NameError,
    ReferralError,
    SecurityError,
    ServiceError,
    UpdateError,
    UnknownOperationError,
} from "@wildboar/meerkat-types";
import { DER } from "asn1-ts/dist/node/functional";
import { IDMConnection } from "@wildboar/idm";
import {
    DSABindArgument,
} from "@wildboar/x500/src/lib/modules/DistributedOperations/DSABindArgument.ta";
import {
    _encode_DSABindResult,
} from "@wildboar/x500/src/lib/modules/DistributedOperations/DSABindResult.ta";
import type { Request } from "@wildboar/x500/src/lib/modules/IDMProtocolSpecification/Request.ta";
import { dop_ip } from "@wildboar/x500/src/lib/modules/DirectoryIDMProtocols/dop-ip.oa";
import {
    _encode_Code,
} from "@wildboar/x500/src/lib/modules/CommonProtocolSpecification/Code.ta";
import { TRUE_BIT } from "asn1-ts";
import { _encode_AbandonedData } from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/AbandonedData.ta";
import { _encode_AbandonFailedData } from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/AbandonFailedData.ta";
import { _encode_AttributeErrorData } from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/AttributeErrorData.ta";
import { _encode_NameErrorData } from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/NameErrorData.ta";
import { _encode_ReferralData } from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ReferralData.ta";
import {
    SecurityErrorData,
    _encode_SecurityErrorData,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/SecurityErrorData.ta";
import { _encode_ServiceErrorData } from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ServiceErrorData.ta";
import { _encode_UpdateErrorData } from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/UpdateErrorData.ta";
import {
    IdmReject_reason_unknownOperationRequest,
} from "@wildboar/x500/src/lib/modules/IDMProtocolSpecification/IdmReject-reason.ta";
import { Abort_reasonNotSpecified } from "@wildboar/x500/src/lib/modules/IDMProtocolSpecification/Abort.ta";
import {
    Versions_v1,
    Versions_v2,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/Versions.ta";
import establishOperationalBinding from "./operations/establishOperationalBinding";
import modifyOperationalBinding from "./operations/modifyOperationalBinding";
import terminateOperationalBinding from "./operations/terminateOperationalBinding";
import {
    _decode_EstablishOperationalBindingArgument,
} from "@wildboar/x500/src/lib/modules/OperationalBindingManagement/EstablishOperationalBindingArgument.ta";
import {
    _encode_EstablishOperationalBindingResult,
} from "@wildboar/x500/src/lib/modules/OperationalBindingManagement/EstablishOperationalBindingResult.ta";
import {
    _decode_ModifyOperationalBindingArgument,
} from "@wildboar/x500/src/lib/modules/OperationalBindingManagement/ModifyOperationalBindingArgument.ta";
import {
    _encode_ModifyOperationalBindingResult,
} from "@wildboar/x500/src/lib/modules/OperationalBindingManagement/ModifyOperationalBindingResult.ta";
import {
    _decode_TerminateOperationalBindingArgument,
} from "@wildboar/x500/src/lib/modules/OperationalBindingManagement/TerminateOperationalBindingArgument.ta";
import {
    _encode_TerminateOperationalBindingResult,
} from "@wildboar/x500/src/lib/modules/OperationalBindingManagement/TerminateOperationalBindingResult.ta";
import versions from "./versions";
import { bind as doBind } from "../authn/dsaBind";
import {
    dSABind,
} from "@wildboar/x500/src/lib/modules/DistributedOperations/dSABind.oa";
import {
    directoryBindError,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/directoryBindError.oa";
import {
    DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/DirectoryBindError-OPTIONALLY-PROTECTED-Parameter1.ta";
import {
    SecurityProblem_noInformation,
    SecurityProblem_inappropriateAuthentication,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/SecurityProblem.ta";
import {
    AuthenticationLevel_basicLevels_level_none,
} from "@wildboar/x500/src/lib/modules/BasicAccessControl/AuthenticationLevel-basicLevels-level.ta";
import { differenceInMilliseconds } from "date-fns";
import * as crypto from "crypto";
import sleep from "../utils/sleep";
import createSecurityParameters from "../x500/createSecurityParameters";
import {
    securityError,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/securityError.oa";

async function handleRequest (
    ctx: Context,
    conn: DOPConnection, // eslint-disable-line
    request: Request,
): Promise<void> {
    if (!("local" in request.opcode)) {
        throw new Error();
    }
    switch (request.opcode.local) {
    case (100): { // establish
        const arg = _decode_EstablishOperationalBindingArgument(request.argument);
        const result = await establishOperationalBinding(ctx, conn, request.invokeID, arg);
        await conn.idm.writeResult(
            request.invokeID,
            request.opcode,
            _encode_EstablishOperationalBindingResult(result, DER),
        );
        break;
    }
    case (102): { // modify
        const arg = _decode_ModifyOperationalBindingArgument(request.argument);
        const result = await modifyOperationalBinding(ctx, conn, arg);
        await conn.idm.writeResult(
            request.invokeID,
            request.opcode,
            _encode_ModifyOperationalBindingResult(result, DER),
        );
        break;
    }
    case (101): { // terminate
        const arg = _decode_TerminateOperationalBindingArgument(request.argument);
        const result = await terminateOperationalBinding(ctx, this, arg);
        await conn.idm.writeResult(
            request.invokeID,
            request.opcode,
            _encode_TerminateOperationalBindingResult(result, DER),
        );
        break;
    }
    default: {
        throw new UnknownOperationError();
    }
    }
}

async function handleRequestAndErrors (
    ctx: Context,
    dop: DOPConnection, // eslint-disable-line
    request: Request,
): Promise<void> {
    try {
        /**
         * We block DOP requests that do not meet some configured minimum of
         * authentication, because requests--accepted or not--take up database
         * storage, so we need to enforce a modicum of authentication so
         * nefarious users cannot initiate a storage-exhaustion-based denial of
         * service attack.
         */
        if (
            !("basicLevels" in dop.authLevel)
            || (dop.authLevel.basicLevels.level < ctx.config.minAuthLevelForOperationalBinding)
            || ((dop.authLevel.basicLevels.localQualifier ?? 0) < ctx.config.minAuthLocalQualifierForOperationalBinding)
        ) {
            throw new SecurityError(
                ctx.i18n.t("err:not_authorized_ob"),
                new SecurityErrorData(
                    SecurityProblem_inappropriateAuthentication,
                    undefined,
                    undefined,
                    [],
                    createSecurityParameters(
                        ctx,
                        dop.boundNameAndUID?.dn,
                        undefined,
                        securityError["&errorCode"],
                    ),
                    ctx.dsa.accessPoint.ae_title.rdnSequence,
                    false,
                    undefined,
                ),
            );
        }
        await handleRequest(ctx, dop, request);
    } catch (e) {
        ctx.log.error(e);
        if (e instanceof AbandonError) {
            const code = _encode_Code(AbandonError.errcode, DER);
            const data = _encode_AbandonedData(e.data, DER);
            await dop.idm.writeError(request.invokeID, code, data);
        } else if (e instanceof AbandonFailedError) {
            const code = _encode_Code(AbandonFailedError.errcode, DER);
            const data = _encode_AbandonFailedData(e.data, DER);
            await dop.idm.writeError(request.invokeID, code, data);
        } else if (e instanceof AttributeError) {
            const code = _encode_Code(AttributeError.errcode, DER);
            const data = _encode_AttributeErrorData(e.data, DER);
            await dop.idm.writeError(request.invokeID, code, data);
        } else if (e instanceof NameError) {
            const code = _encode_Code(NameError.errcode, DER);
            const data = _encode_NameErrorData(e.data, DER);
            await dop.idm.writeError(request.invokeID, code, data);
        } else if (e instanceof ReferralError) {
            const code = _encode_Code(ReferralError.errcode, DER);
            const data = _encode_ReferralData(e.data, DER);
            await dop.idm.writeError(request.invokeID, code, data);
        } else if (e instanceof SecurityError) {
            const code = _encode_Code(SecurityError.errcode, DER);
            const data = _encode_SecurityErrorData(e.data, DER);
            await dop.idm.writeError(request.invokeID, code, data);
        } else if (e instanceof ServiceError) {
            const code = _encode_Code(ServiceError.errcode, DER);
            const data = _encode_ServiceErrorData(e.data, DER);
            await dop.idm.writeError(request.invokeID, code, data);
        } else if (e instanceof UpdateError) {
            const code = _encode_Code(UpdateError.errcode, DER);
            const data = _encode_UpdateErrorData(e.data, DER);
            await dop.idm.writeError(request.invokeID, code, data);
        } else if (e instanceof UnknownOperationError) {
            await dop.idm.writeReject(request.invokeID, IdmReject_reason_unknownOperationRequest);
        } else {
            await dop.idm.writeAbort(Abort_reasonNotSpecified).then(() => dop.idm.close());
        }
    }
}


export default
class DOPConnection extends ClientConnection {
    public get v1 (): boolean {
        return (this.bind.versions?.[Versions_v1] === TRUE_BIT);
    }
    public get v2 (): boolean {
        return (this.bind.versions?.[Versions_v2] === TRUE_BIT);
    }

    private async handleRequest (request: Request): Promise<void> {
        await handleRequestAndErrors(this.ctx, this, request);
    }

    private async handleUnbind (): Promise<void> {
        // FIXME: Make this like DAPConnection.
        this.ctx.log.info(this.ctx.i18n.t("log:connection_unbound", {
            ctype: "",
            cid: "",
            protocol: "DOP",
        }));
    }

    constructor (
        readonly ctx: Context,
        readonly idm: IDMConnection,
        readonly bind: DSABindArgument,
    ) {
        super();
        this.socket = idm.s;
        const remoteHostIdentifier = `${idm.s.remoteFamily}://${idm.s.remoteAddress}/${idm.s.remotePort}`;
        const startBindTime = new Date();
        doBind(ctx, idm.s, bind)
            .then(async (outcome) => {
                const endBindTime = new Date();
                const bindTime: number = Math.abs(differenceInMilliseconds(startBindTime, endBindTime));
                const totalTimeInMilliseconds: number = ctx.config.bindMinSleepInMilliseconds
                    + crypto.randomInt(ctx.config.bindSleepRangeInMilliseconds);
                const sleepTime: number = Math.abs(totalTimeInMilliseconds - bindTime);
                await sleep(sleepTime);
                this.boundEntry = outcome.boundVertex;
                this.boundNameAndUID = outcome.boundNameAndUID;
                this.authLevel = outcome.authLevel;
                if (outcome.failedAuthentication) {
                    const err: typeof directoryBindError["&ParameterType"] = {
                        unsigned: new DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1(
                            versions,
                            {
                                securityError: SecurityProblem_noInformation,
                            },
                            undefined, // Failed authentication will not yield any security parameters.
                        ),
                    };
                    const error = dSABind.encoderFor["&ParameterType"]!(err, DER);
                    idm
                        .writeBindError(dop_ip["&id"]!, error)
                        .then(() => {
                            this.handleUnbind()
                                .then(() => {
                                    ctx.log.info(`${DOPConnection.name} ${this.id}: Disconnected ${remoteHostIdentifier} due to authentication failure.`);
                                })
                                .catch((e) => {
                                    ctx.log.error(`${DOPConnection.name} ${this.id}: Error disconnecting from ${remoteHostIdentifier}: `, e);
                                });
                        })
                        .catch((e) => {
                            ctx.log.error(`${DOPConnection.name} ${this.id}: Error writing bind error: ${remoteHostIdentifier}: `, e);
                        });
                    ctx.log.info(`${DOPConnection.name} ${this.id}: Invalid credentials from ${remoteHostIdentifier}.`);
                    return;
                }
                const bindResult = new DSABindArgument( // DSABindResult === DSABindArgument
                    undefined,
                    versions,
                );
                idm.writeBindResult(dop_ip["&id"]!, _encode_DSABindResult(bindResult, DER));
                if (
                    ("basicLevels" in outcome.authLevel)
                    && (outcome.authLevel.basicLevels.level === AuthenticationLevel_basicLevels_level_none)
                ) {
                    ctx.log.info(`${DOPConnection.name} ${this.id}: Anonymous DSP connection bound from ${remoteHostIdentifier}.`);
                } else {
                    ctx.log.info(`${DOPConnection.name} ${this.id}: Authenticated DSP connection bound from ${remoteHostIdentifier}.`);
                }
            })
            .catch((e) => {
                ctx.log.error(`${DOPConnection.name} ${this.id}: Error during DSP bind operation from ${remoteHostIdentifier}: `, e);
            });

        idm.events.on("request", this.handleRequest.bind(this));
        idm.events.on("unbind", this.handleUnbind.bind(this));
    }
}
