import type { Context, Vertex, ClientAssociation, OperationReturn } from "@wildboar/meerkat-types";
import { ObjectIdentifier, unpackBits } from "asn1-ts";
import * as errors from "@wildboar/meerkat-types";
import { DER } from "asn1-ts/dist/node/functional";
import {
    ChangePasswordArgument,
    _decode_ChangePasswordArgument,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ChangePasswordArgument.ta";
import {
    ChangePasswordResult,
    _encode_ChangePasswordResult,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ChangePasswordResult.ta";
import {
    ChangePasswordResultData,
    _encode_ChangePasswordResultData,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ChangePasswordResultData.ta";
import {
    Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1 as ChainedResult,
} from "@wildboar/x500/src/lib/modules/DistributedOperations/Chained-ResultType-OPTIONALLY-PROTECTED-Parameter1.ta";
import {
    ChainingResults,
} from "@wildboar/x500/src/lib/modules/DistributedOperations/ChainingResults.ta";
import getOptionallyProtectedValue from "@wildboar/x500/src/lib/utils/getOptionallyProtectedValue";
import setEntryPassword from "../database/setEntryPassword";
import attemptPassword from "../authn/attemptPassword";
import { SecurityErrorData } from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/SecurityErrorData.ta";
import {
    SecurityProblem_invalidCredentials,
    SecurityProblem_insufficientAccessRights,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/SecurityProblem.ta";
import getRelevantSubentries from "../dit/getRelevantSubentries";
import getDistinguishedName from "../x500/getDistinguishedName";
import type ACDFTuple from "@wildboar/x500/src/lib/types/ACDFTuple";
import type ACDFTupleExtended from "@wildboar/x500/src/lib/types/ACDFTupleExtended";
import bacACDF, {
    PERMISSION_CATEGORY_ADD,
    PERMISSION_CATEGORY_REMOVE,
    PERMISSION_CATEGORY_MODIFY,
} from "@wildboar/x500/src/lib/bac/bacACDF";
import getACDFTuplesFromACIItem from "@wildboar/x500/src/lib/bac/getACDFTuplesFromACIItem";
import getIsGroupMember from "../authz/getIsGroupMember";
import {
    userPassword,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/userPassword.oa";
import {
    userPwd,
} from "@wildboar/x500/src/lib/modules/PasswordPolicy/userPwd.oa";
import createSecurityParameters from "../x500/createSecurityParameters";
import {
    id_opcode_changePassword,
} from "@wildboar/x500/src/lib/modules/CommonProtocolSpecification/id-opcode-changePassword.va";
import {
    securityError,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/securityError.oa";
import type { OperationDispatcherState } from "./OperationDispatcher";
import getACIItems from "../authz/getACIItems";
import accessControlSchemesThatUseACIItems from "../authz/accessControlSchemesThatUseACIItems";
import getNamingMatcherGetter from "../x500/getNamingMatcherGetter";
import bacSettings from "../authz/bacSettings";
import {
    NameAndOptionalUID,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/NameAndOptionalUID.ta";
import preprocessTuples from "../authz/preprocessTuples";
import { printInvokeId } from "../utils/printInvokeId";
import { generateSignature } from "../pki/generateSignature";
import { SIGNED } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNED.ta";
import { UNTRUSTED_REQ_AUTH_LEVEL } from "../constants";
import type {
    DistinguishedName,
} from "@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta";
import {
    ProtectionRequest_signed,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ProtectionRequest.ta";

const USER_PASSWORD_OID: string = userPassword["&id"].toString();
const USER_PWD_OID: string = userPwd["&id"].toString();
import {
    pwdChangeAllowed,
} from "@wildboar/x500/src/lib/modules/PasswordPolicy/pwdChangeAllowed.oa";
import {
    id_ar_pwdAdminSpecificArea,
} from "@wildboar/x500/src/lib/modules/InformationFramework/id-ar-pwdAdminSpecificArea.va";
import {
    pwdAdminSubentry,
} from "@wildboar/x500/src/lib/modules/InformationFramework/pwdAdminSubentry.oa";

/**
 * @summary The changePassword operation, as specified in ITU Recommendation X.511.
 * @description
 *
 * The `changePassword` operation, as specified in ITU Recommendation X.511 (2016),
 * Section 12.5. per the recommended implementation in ITU Recommendation X.518
 * (2016), Section 19.1.3.
 *
 * @param ctx The context object
 * @param assn The client association
 * @param state The operation dispatcher state
 *
 * @function
 * @async
 */
export
async function changePassword (
    ctx: Context,
    assn: ClientAssociation,
    state: OperationDispatcherState,
): Promise<OperationReturn> {
    const target = state.foundDSE;
    const signErrors: boolean = false; // TODO: Make this configurable.
    const passwordIsPermittedOnThisEntry: boolean = Array.from(target.dse.objectClass.values())
        .some((oid) => {
            const spec = ctx.objectClasses.get(oid);
            if (!spec) {
                return false;
            }
            return (
                spec.mandatoryAttributes.has(USER_PASSWORD_OID)
                || spec.mandatoryAttributes.has(USER_PWD_OID)
                || spec.optionalAttributes.has(USER_PASSWORD_OID)
                || spec.optionalAttributes.has(USER_PWD_OID)
            );
        });
    if (!passwordIsPermittedOnThisEntry) {
        throw new errors.SecurityError(
            ctx.i18n.t("err:not_authz_cpw", { context: "pwd_admin" }),
            new SecurityErrorData(
                SecurityProblem_insufficientAccessRights,
                undefined,
                undefined,
                [],
                createSecurityParameters(
                    ctx,
                    signErrors,
                    assn.boundNameAndUID?.dn,
                    undefined,
                    securityError["&errorCode"],
                ),
                ctx.dsa.accessPoint.ae_title.rdnSequence,
                state.chainingArguments.aliasDereferenced,
                undefined,
            ),
            signErrors,
        );
    }

    const relevantSubentries: Vertex[] = (await Promise.all(
        state.admPoints.map((ap) => getRelevantSubentries(ctx, target, targetDN, ap)),
    )).flat();

    // TODO: Password policy applies _per password attribute_. This is something I'll
    // have to change when I re-write Meerkat DSA entirely.
    const pwdAdminPoint = state.admPoints
        .find((ap) => ap.dse.admPoint?.administrativeRole.has(id_ar_pwdAdminSpecificArea.toString()));
    if (pwdAdminPoint) {
        const pwdAdminSubentries = relevantSubentries
            .filter((s) => s.dse.objectClass.has(pwdAdminSubentry["&id"].toString()));
        /**
         * Technically, there is supposed to be only one password admin subentry per
         * password attribute, but we just check that all of them permit password
         * changes via modifyEntry. In Meerkat DSA, there is one hard-coded password
         * attribute.
         */
        const allowed: boolean = pwdAdminSubentries
            .some((pas) => pas.dse.subentry?.pwdModifyEntryAllowed);
        if (!allowed) {
            throw new errors.SecurityError(
                ctx.i18n.t("err:not_authz_cpw"),
                new SecurityErrorData(
                    SecurityProblem_insufficientAccessRights,
                    undefined,
                    undefined,
                    [],
                    createSecurityParameters(
                        ctx,
                        signErrors,
                        assn.boundNameAndUID?.dn,
                        undefined,
                        securityError["&errorCode"],
                    ),
                    ctx.dsa.accessPoint.ae_title.rdnSequence,
                    state.chainingArguments.aliasDereferenced,
                    undefined,
                ),
                signErrors,
            );
        }
    } // If there is no password admin point defined, you can do whatever you want.

    const argument: ChangePasswordArgument = _decode_ChangePasswordArgument(state.operationArgument);
    // #region Signature validation
    /**
     * Integrity of the signature SHOULD be evaluated at operation evaluation,
     * not before. Because the operation could get chained to a DSA that has a
     * different configuration of trust anchors. To be clear, this is not a
     * requirement of the X.500 specifications--just my personal assessment.
     */
     if ("signed" in argument) {
        /*
         No signature verification takes place for the changePassword operation,
         because it does not have a `SecurityParameters` field, and therefore
         does not relay a certification-path.
         */
    }
    // #endregion Signature validation
    const data = getOptionallyProtectedValue(argument);
    const targetDN = getDistinguishedName(target);
    const requestor: DistinguishedName | undefined = state.chainingArguments.originator
        ?? assn.boundNameAndUID?.dn;
    const user = requestor
        ? new NameAndOptionalUID(
            requestor,
            state.chainingArguments.uniqueIdentifier,
        )
        : undefined;

    const accessControlScheme = [ ...state.admPoints ] // Array.reverse() works in-place, so we create a new array.
        .reverse()
        .find((ap) => ap.dse.admPoint!.accessControlScheme)?.dse.admPoint!.accessControlScheme;
    if (
        accessControlScheme
        && accessControlSchemesThatUseACIItems.has(accessControlScheme.toString())
    ) {
        const relevantACIItems = getACIItems(
            accessControlScheme,
            target.immediateSuperior,
            target,
            relevantSubentries,
            Boolean(target.dse.subentry),
        );
        const acdfTuples: ACDFTuple[] = (relevantACIItems ?? [])
            .flatMap((aci) => getACDFTuplesFromACIItem(aci));
        const NAMING_MATCHER = getNamingMatcherGetter(ctx);
        const isMemberOfGroup = getIsGroupMember(ctx, NAMING_MATCHER);
        const relevantTuples: ACDFTupleExtended[] = await preprocessTuples(
            accessControlScheme,
            acdfTuples,
            user,
            state.chainingArguments.authenticationLevel ?? UNTRUSTED_REQ_AUTH_LEVEL,
            targetDN,
            isMemberOfGroup,
            NAMING_MATCHER,
        );
        const { authorized: authorizedToModifyEntry } = bacACDF(
            relevantTuples,
            user,
            {
                entry: Array.from(target.dse.objectClass).map(ObjectIdentifier.fromString),
            },
            [
                PERMISSION_CATEGORY_MODIFY,
            ],
            bacSettings,
            true,
        );
        const { authorized: authorizedToModifyUserPassword } = bacACDF(
            relevantTuples,
            user,
            {
                attributeType: userPassword["&id"],
                operational: false,
            },
            [
                PERMISSION_CATEGORY_ADD,
                PERMISSION_CATEGORY_REMOVE,
                PERMISSION_CATEGORY_MODIFY,
            ],
            bacSettings,
            true,
        );
        const { authorized: authorizedToModifyUserPwd } = bacACDF(
            relevantTuples,
            user,
            {
                attributeType: userPwd["&id"],
                operational: false,
            },
            [
                PERMISSION_CATEGORY_ADD,
                PERMISSION_CATEGORY_REMOVE,
                PERMISSION_CATEGORY_MODIFY,
            ],
            bacSettings,
            true,
        );
        if (
            !authorizedToModifyEntry
            || !authorizedToModifyUserPassword
            || !authorizedToModifyUserPwd
        ) {
            throw new errors.SecurityError(
                ctx.i18n.t("err:not_authz_cpw"),
                new SecurityErrorData(
                    SecurityProblem_insufficientAccessRights,
                    undefined,
                    undefined,
                    [],
                    createSecurityParameters(
                        ctx,
                        signErrors,
                        assn.boundNameAndUID?.dn,
                        undefined,
                        securityError["&errorCode"],
                    ),
                    ctx.dsa.accessPoint.ae_title.rdnSequence,
                    state.chainingArguments.aliasDereferenced,
                    undefined,
                ),
                signErrors,
            );
        }
    }
    const oldPasswordIsCorrect: boolean | undefined = await attemptPassword(ctx, target, {
        userPwd: data.oldPwd,
    });
    if (!oldPasswordIsCorrect) {
        ctx.log.warn(ctx.i18n.t("log:change_password_incorrect", {
            cid: assn.id,
            uuid: target.dse.uuid,
        }), {
            remoteFamily: assn.socket.remoteFamily,
            remoteAddress: assn.socket.remoteAddress,
            remotePort: assn.socket.remotePort,
            association_id: assn.id,
            invokeID: printInvokeId(state.invokeId),
        });
        throw new errors.SecurityError(
            ctx.i18n.t("err:old_password_incorrect"),
            new SecurityErrorData(
                SecurityProblem_invalidCredentials,
                undefined,
                undefined,
                [],
                createSecurityParameters(
                    ctx,
                    signErrors,
                    assn.boundNameAndUID?.dn,
                    undefined,
                    securityError["&errorCode"],
                ),
                ctx.dsa.accessPoint.ae_title.rdnSequence,
                state.chainingArguments.aliasDereferenced,
                undefined,
            ),
            signErrors,
        );
    }
    const promises = await setEntryPassword(ctx, assn, target, data.newPwd);
    await ctx.db.$transaction(promises);
    /* Note that the specification says that we should update hierarchical
    operational bindings, but really, no other DSA should have the passwords for
    entries in this DSA. Meerkat DSA will take a principled stance and refuse
    to update HOBs when a password changes. */
    /**
     * There are no security parameters in the request data, so a user cannot
     * specify that they want the results to be signed. In the face of this
     * ambiguity, Meerkat DSA will not sign any `administerPassword` and
     * `changePassword` results.
     */
    const resultData: ChangePasswordResultData = new ChangePasswordResultData(
        [],
        undefined,
        ctx.dsa.accessPoint.ae_title.rdnSequence,
        state.chainingArguments.aliasDereferenced,
        undefined,
    );
    const result: ChangePasswordResult = {
        information: (() => {
            const resultDataBytes = _encode_ChangePasswordResultData(resultData, DER).toBytes();
            const key = ctx.config.signing?.key;
            if (!key) { // Signing is permitted to fail, per ITU Recommendation X.511 (2019), Section 7.10.
                return {
                    unsigned: resultData,
                };
            }
            const signingResult = generateSignature(key, resultDataBytes);
            if (!signingResult) {
                return {
                    unsigned: resultData,
                };
            }
            const [ sigAlg, sigValue ] = signingResult;
            return {
                signed: new SIGNED(
                    resultData,
                    sigAlg,
                    unpackBits(sigValue),
                    undefined,
                    undefined,
                ),
            };
        })(),
    };
    const signDSPResult: boolean = (
        (state.chainingArguments.securityParameters?.target === ProtectionRequest_signed)
        && assn.authorizedForSignedResults
    );
    return {
        result: {
            unsigned: new ChainedResult(
                new ChainingResults(
                    undefined,
                    undefined,
                    createSecurityParameters(
                        ctx,
                        signDSPResult,
                        assn.boundNameAndUID?.dn,
                        id_opcode_changePassword,
                    ),
                    undefined,
                ),
                _encode_ChangePasswordResult(result, DER),
            ),
        },
        stats: {},
    };
}

export default changePassword;
