import {
    Context,
    ClientAssociation,
    OperationStatistics,
    AbandonError,
    AbandonFailedError,
    AttributeError,
    NameError,
    ReferralError,
    SecurityError,
    ServiceError,
    UpdateError,
    UnknownOperationError,
    MistypedPDUError,
    DSABindError,
    BindReturn,
} from "@wildboar/meerkat-types";
import * as errors from "@wildboar/meerkat-types";
import { ASN1Element } from "asn1-ts";
import { DER } from "asn1-ts/dist/node/functional";
import {
    IDMConnection,
    IDMStatus,
} from "@wildboar/idm";
import {
    DSABindArgument,
    _decode_DSABindArgument,
} from "@wildboar/x500/src/lib/modules/DistributedOperations/DSABindArgument.ta";
import {
    _encode_DSABindResult,
} from "@wildboar/x500/src/lib/modules/DistributedOperations/DSABindResult.ta";
import type { Request } from "@wildboar/x500/src/lib/modules/IDMProtocolSpecification/Request.ta";
import { dop_ip } from "@wildboar/x500/src/lib/modules/DirectoryIDMProtocols/dop-ip.oa";
import {
    _encode_Code,
} from "@wildboar/x500/src/lib/modules/CommonProtocolSpecification/Code.ta";
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
    IdmReject_reason_duplicateInvokeIDRequest,
    IdmReject_reason_unsupportedOperationRequest,
    IdmReject_reason_unknownOperationRequest,
    IdmReject_reason_mistypedPDU,
    IdmReject_reason_mistypedArgumentRequest,
    IdmReject_reason_resourceLimitationRequest,
    IdmReject_reason_unknownError,
} from "@wildboar/x500/src/lib/modules/IDMProtocolSpecification/IdmReject-reason.ta";
import {
    Abort_unboundRequest,
    Abort_invalidProtocol,
    Abort_reasonNotSpecified,
    Abort_invalidPDU,
} from "@wildboar/x500/src/lib/modules/IDMProtocolSpecification/Abort.ta";
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
    directoryBindError,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/directoryBindError.oa";
import {
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
import encodeLDAPDN from "../ldap/encodeLDAPDN";
import getServerStatistics from "../telemetry/getServerStatistics";
import getConnectionStatistics from "../telemetry/getConnectionStatistics";
import codeToString from "@wildboar/x500/src/lib/stringifiers/codeToString";
import isDebugging from "is-debugging";
import { strict as assert } from "assert";

async function handleRequest (
    ctx: Context,
    assn: DOPAssociation, // eslint-disable-line
    request: Request,
): Promise<void> {
    if (!("local" in request.opcode)) {
        throw new MistypedPDUError();
    }
    switch (request.opcode.local) {
    case (100): { // establish
        const arg = _decode_EstablishOperationalBindingArgument(request.argument);
        const result = await establishOperationalBinding(ctx, assn, request.invokeID, arg);
        await assn.idm.writeResult(
            request.invokeID,
            request.opcode,
            _encode_EstablishOperationalBindingResult(result, DER),
        );
        break;
    }
    case (102): { // modify
        const arg = _decode_ModifyOperationalBindingArgument(request.argument);
        const result = await modifyOperationalBinding(ctx, assn, {
            present: request.invokeID,
        }, arg);
        await assn.idm.writeResult(
            request.invokeID,
            request.opcode,
            _encode_ModifyOperationalBindingResult(result, DER),
        );
        break;
    }
    case (101): { // terminate
        const arg = _decode_TerminateOperationalBindingArgument(request.argument);
        const result = await terminateOperationalBinding(ctx, this, arg);
        await assn.idm.writeResult(
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
    assn: DOPAssociation, // eslint-disable-line
    request: Request,
): Promise<void> {
    if ((request.invokeID < 0) || (request.invokeID > Number.MAX_SAFE_INTEGER)) {
        ctx.log.warn(ctx.i18n.t("log:unusual_invoke_id", {
            host: assn.socket.remoteAddress,
            cid: assn.id,
        }), {
            remoteFamily: assn.socket.remoteFamily,
            remoteAddress: assn.socket.remoteAddress,
            remotePort: assn.socket.remotePort,
            association_id: assn.id,
        });
        assn.idm.writeAbort(Abort_invalidPDU);
        return;
    }
    if (assn.invocations.has(Number(request.invokeID))) {
        ctx.log.warn(ctx.i18n.t("log:dup_invoke_id", {
            host: assn.socket.remoteAddress,
            iid: request.invokeID.toString(),
            cid: assn.id,
        }), {
            remoteFamily: assn.socket.remoteFamily,
            remoteAddress: assn.socket.remoteAddress,
            remotePort: assn.socket.remotePort,
            association_id: assn.id,
        });
        assn.idm.writeReject(request.invokeID, IdmReject_reason_duplicateInvokeIDRequest).catch();
        return;
    }
    if (assn.invocations.size >= ctx.config.maxConcurrentOperationsPerConnection) {
        ctx.log.warn(ctx.i18n.t("log:max_concurrent_op", {
            host: assn.socket.remoteAddress,
            cid: assn.id,
            iid: request.invokeID.toString(),
        }), {
            remoteFamily: assn.socket.remoteFamily,
            remoteAddress: assn.socket.remoteAddress,
            remotePort: assn.socket.remotePort,
            association_id: assn.id,
        });
        assn.idm.writeReject(request.invokeID, IdmReject_reason_resourceLimitationRequest).catch();
        return;
    }
    try {
        /**
         * We block DOP requests that do not meet some configured minimum of
         * authentication, because requests--accepted or not--take up database
         * storage, so we need to enforce a modicum of authentication so
         * nefarious users cannot initiate a storage-exhaustion-based denial of
         * service attack.
         */
        if (
            !("basicLevels" in assn.authLevel)
            || (assn.authLevel.basicLevels.level < ctx.config.minAuthLevelForOperationalBinding)
            || ((assn.authLevel.basicLevels.localQualifier ?? 0) < ctx.config.minAuthLocalQualifierForOperationalBinding)
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
                        assn.boundNameAndUID?.dn,
                        undefined,
                        securityError["&errorCode"],
                    ),
                    ctx.dsa.accessPoint.ae_title.rdnSequence,
                    false,
                    undefined,
                ),
            );
        }
        await handleRequest(ctx, assn, request);
    } catch (e) {
        if (isDebugging) {
            console.error(e);
        } else {
            ctx.log.error(e.message, {
                remoteFamily: assn.socket.remoteFamily,
                remoteAddress: assn.socket.remoteAddress,
                remotePort: assn.socket.remotePort,
                association_id: assn.id,
            });
        }
        if (e instanceof AbandonError) {
            const code = _encode_Code(AbandonError.errcode, DER);
            const data = _encode_AbandonedData(e.data, DER);
            await assn.idm.writeError(request.invokeID, code, data);
        } else if (e instanceof AbandonFailedError) {
            const code = _encode_Code(AbandonFailedError.errcode, DER);
            const data = _encode_AbandonFailedData(e.data, DER);
            await assn.idm.writeError(request.invokeID, code, data);
        } else if (e instanceof AttributeError) {
            const code = _encode_Code(AttributeError.errcode, DER);
            const data = _encode_AttributeErrorData(e.data, DER);
            await assn.idm.writeError(request.invokeID, code, data);
        } else if (e instanceof NameError) {
            const code = _encode_Code(NameError.errcode, DER);
            const data = _encode_NameErrorData(e.data, DER);
            await assn.idm.writeError(request.invokeID, code, data);
        } else if (e instanceof ReferralError) {
            const code = _encode_Code(ReferralError.errcode, DER);
            const data = _encode_ReferralData(e.data, DER);
            await assn.idm.writeError(request.invokeID, code, data);
        } else if (e instanceof SecurityError) {
            const code = _encode_Code(SecurityError.errcode, DER);
            const data = _encode_SecurityErrorData(e.data, DER);
            await assn.idm.writeError(request.invokeID, code, data);
        } else if (e instanceof ServiceError) {
            const code = _encode_Code(ServiceError.errcode, DER);
            const data = _encode_ServiceErrorData(e.data, DER);
            await assn.idm.writeError(request.invokeID, code, data);
        } else if (e instanceof UpdateError) {
            const code = _encode_Code(UpdateError.errcode, DER);
            const data = _encode_UpdateErrorData(e.data, DER);
            await assn.idm.writeError(request.invokeID, code, data);
        } else if (e instanceof UnknownOperationError) {
            await assn.idm.writeReject(request.invokeID, IdmReject_reason_unknownOperationRequest);
        } else if (e instanceof errors.DuplicateInvokeIdError) {
            await assn.idm.writeReject(request.invokeID, IdmReject_reason_duplicateInvokeIDRequest);
        } else if (e instanceof errors.UnsupportedOperationError) {
            await assn.idm.writeReject(request.invokeID, IdmReject_reason_unsupportedOperationRequest);
        } else if (e instanceof errors.UnknownOperationError) {
            await assn.idm.writeReject(request.invokeID, IdmReject_reason_unknownOperationRequest);
        } else if (e instanceof errors.MistypedPDUError) {
            await assn.idm.writeReject(request.invokeID, IdmReject_reason_mistypedPDU);
        } else if (e instanceof errors.MistypedArgumentError) {
            await assn.idm.writeReject(request.invokeID, IdmReject_reason_mistypedArgumentRequest);
        } else if (e instanceof errors.ResourceLimitationError) {
            await assn.idm.writeReject(request.invokeID, IdmReject_reason_resourceLimitationRequest);
        } else if (e instanceof errors.UnknownError) {
            await assn.idm.writeReject(request.invokeID, IdmReject_reason_unknownError);
        } else if (e instanceof errors.UnboundRequestError) {
            await assn.idm.writeAbort(Abort_unboundRequest).then(() => assn.idm.events.emit("unbind", null));
        } else if (e instanceof errors.InvalidProtocolError) {
            await assn.idm.writeAbort(Abort_invalidProtocol).then(() => assn.idm.events.emit("unbind", null));
        } else if (e instanceof errors.ReasonNotSpecifiedError) {
            await assn.idm.writeAbort(Abort_reasonNotSpecified).then(() => assn.idm.events.emit("unbind", null));
        } else {
            const stats: OperationStatistics = {
                type: "op",
                inbound: true,
                server: getServerStatistics(),
                connection: getConnectionStatistics(assn),
                bind: {
                    protocol: dop_ip["&id"]!.toString(),
                },
                request: {
                    operationCode: codeToString(request.opcode),
                },
            };
            ctx.telemetry.sendEvent({
                ...stats,
                unusualError: e,
            });
            await assn.idm.writeAbort(Abort_reasonNotSpecified).then(() => assn.idm.events.emit("unbind", null));
        }
    }
}


export default
class DOPAssociation extends ClientAssociation {

    /**
     * This exists because ITU Recommendation X.519 states that requests may
     * be sent before the bind is complete, as long as they are sent after the
     * bind request. This means that we need to enqueue requests, then execute
     * them once the bind is complete, if it completes. This array stores the
     * requests that have come in before the association was bound.
     */
    public readonly prebindRequests: Request[] = [];
    public bind: DSABindArgument | undefined;

    public async attemptBind (arg: ASN1Element): Promise<void> {
        const arg_ = _decode_DSABindArgument(arg);
        const ctx = this.ctx;
        const idm = this.idm;
        const remoteHostIdentifier = `${idm.s.remoteFamily}://${idm.s.remoteAddress}/${idm.s.remotePort}`;
        const startBindTime = new Date();
        let outcome!: BindReturn;
        try {
            outcome = await doBind(ctx, this.idm.socket, arg_);
        } catch (e) {
            if (e instanceof DSABindError) {
                ctx.log.warn(e.message);
                const endBindTime = new Date();
                const bindTime: number = Math.abs(differenceInMilliseconds(startBindTime, endBindTime));
                const totalTimeInMilliseconds: number = this.ctx.config.bindMinSleepInMilliseconds
                    + crypto.randomInt(ctx.config.bindSleepRangeInMilliseconds);
                const sleepTime: number = Math.abs(totalTimeInMilliseconds - bindTime);
                await sleep(sleepTime);
                const err: typeof directoryBindError["&ParameterType"] = {
                    unsigned: e.data,
                };
                const error = directoryBindError.encoderFor["&ParameterType"]!(err, DER);
                await idm.writeBindError(dop_ip["&id"]!, error);
                return;
            } else {
                ctx.log.warn(e?.message);
                await idm.writeAbort(Abort_reasonNotSpecified);
                return;
            }
        }
        this.bind = arg_;
        this.boundEntry = outcome.boundVertex;
        this.boundNameAndUID = outcome.boundNameAndUID;
        this.authLevel = outcome.authLevel;
        if (
            ("basicLevels" in outcome.authLevel)
            && (outcome.authLevel.basicLevels.level === AuthenticationLevel_basicLevels_level_none)
        ) {
            assert(!ctx.config.forbidAnonymousBind, "Somehow a DSA bound anonymously when anonymous binds are forbidden.");
            ctx.log.info(ctx.i18n.t("log:connection_bound_anon", {
                source: remoteHostIdentifier,
                protocol: "DOP",
            }), {
                remoteFamily: this.socket.remoteFamily,
                remoteAddress: this.socket.remoteAddress,
                remotePort: this.socket.remotePort,
                association_id: this.id,
            });
        } else {
            ctx.log.info(ctx.i18n.t("log:connection_bound_auth", {
                source: remoteHostIdentifier,
                protocol: "DOP",
                dn: this.boundNameAndUID?.dn
                    ? encodeLDAPDN(ctx, this.boundNameAndUID.dn)
                    : "",
            }), {
                remoteFamily: this.socket.remoteFamily,
                remoteAddress: this.socket.remoteAddress,
                remotePort: this.socket.remotePort,
                association_id: this.id,
            });
        }
        const bindResult = new DSABindArgument(
            undefined, // TODO: Supply return credentials. NOTE that the specification says that this must be the same CHOICE that the user supplied.
            versions,
        );
        await idm.writeBindResult(dop_ip["&id"]!, _encode_DSABindResult(bindResult, DER));
        idm.events.removeAllListeners("request");
        idm.events.on("request", this.handleRequest.bind(this));
        for (const req of this.prebindRequests) {
            // We process these requests serially, just because there could be
            // many of them backed up prior to binding.
            await handleRequestAndErrors(this.ctx, this, req).catch();
        }
    }

    private async handleRequest (request: Request): Promise<void> {
        await handleRequestAndErrors(this.ctx, this, request);
    }

    private async handleUnbind (): Promise<void> {
        if (this.idm.remoteStatus !== IDMStatus.BOUND) {
            return; // We don't want users to be able to spam unbinds.
        }
        this.ctx.log.warn(this.ctx.i18n.t("log:connection_unbound", {
            ctype: DOPAssociation.name,
            cid: this.id,
            protocol: "DOP",
        }), {
            remoteFamily: this.socket.remoteFamily,
            remoteAddress: this.socket.remoteAddress,
            remotePort: this.socket.remotePort,
            association_id: this.id,
        });
    }

    constructor (
        readonly ctx: Context,
        readonly idm: IDMConnection,
    ) {
        super();
        this.socket = idm.s;
        assert(ctx.config.dop.enabled, "User somehow bound via DOP when it was disabled.");
        idm.events.on("unbind", this.handleUnbind.bind(this));
        idm.events.removeAllListeners("request");
        idm.events.on("request", (request: Request) => {
            if (this.prebindRequests.length >= ctx.config.maxPreBindRequests) {
                idm.writeReject(request.invokeID, IdmReject_reason_resourceLimitationRequest)
                    .catch(() => this.idm.close());
                return;
            }
            this.prebindRequests.push(request);
        });
    }
}
