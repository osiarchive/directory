import { Vertex, ServiceError } from "@wildboar/meerkat-types";
import type { MeerkatContext } from "../ctx";
import type {
    AccessPoint,
} from "@wildboar/x500/src/lib/modules/DistributedOperations/AccessPoint.ta";
import { bindForOBM } from "../net/bindToOtherDSA";
import {
    RelativeDistinguishedName as RDN,
} from "@wildboar/x500/src/lib/modules/InformationFramework/RelativeDistinguishedName.ta";
import {
    modifyOperationalBinding,
} from "@wildboar/x500/src/lib/modules/OperationalBindingManagement/modifyOperationalBinding.oa";
import {
    OperationalBindingID,
} from "@wildboar/x500/src/lib/modules/OperationalBindingManagement/OperationalBindingID.ta";
import {
    SuperiorToSubordinate as SuperiorToSubordinateModification,
} from "@wildboar/x500/src/lib/modules/HierarchicalOperationalBindings/SuperiorToSubordinate.ta";
import {
    HierarchicalAgreement,
} from "@wildboar/x500/src/lib/modules/HierarchicalOperationalBindings/HierarchicalAgreement.ta";
import {
    Attribute,
} from "@wildboar/x500/src/lib/modules/InformationFramework/Attribute.ta";
import {
    MasterAndShadowAccessPoints,
    Vertex as X500Vertex,
} from "@wildboar/x500/src/lib/modules/HierarchicalOperationalBindings/Vertex.ta";
import {
    SubentryInfo,
} from "@wildboar/x500/src/lib/modules/HierarchicalOperationalBindings/SubentryInfo.ta";
import getDistinguishedName from "../x500/getDistinguishedName";
import readSubordinates from "../dit/readSubordinates";
import readAttributes from "../database/entry/readAttributes";
import admPointEIS from "./admPointEIS";
import subentryEIS from "./subentryEIS";
import { addMilliseconds } from "date-fns";
import createSecurityParameters from "../x500/createSecurityParameters";
import {
    ServiceErrorData,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ServiceErrorData.ta";
import {
    ServiceProblem_unavailable,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ServiceProblem.ta";
import {
    serviceError,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/serviceError.oa";
import { OperationOutcome } from "@wildboar/rose-transport";
import { dSAProblem } from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/dSAProblem.oa";
import {
    id_pr_targetDsaUnavailable,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/id-pr-targetDsaUnavailable.va";
import { DER } from "asn1-ts/dist/node/functional";

// dSAOperationalBindingManagementBind OPERATION ::= dSABind

// dSABind OPERATION ::= {
//     ARGUMENT     DSABindArgument
//     RESULT       DSABindResult
//     ERRORS       { directoryBindError } }

//   DSABindArgument  ::=  SET  {
//     credentials  [0]  DSACredentials OPTIONAL,
//     versions     [1]  Versions DEFAULT {v1},
//     ... }

//   DSACredentials  ::=  CHOICE  {
//     simple             [0]  SimpleCredentials,
//     strong             [1]  StrongCredentials,
//     externalProcedure  [2]  EXTERNAL,
//     spkm               [3]  SpkmCredentials,
//     ... }

//   DSABindResult  ::=  DSABindArgument

// modifyOperationalBinding OPERATION ::= {
//     ARGUMENT  ModifyOperationalBindingArgument
//     RESULT    ModifyOperationalBindingResult
//     ERRORS    {operationalBindingError | securityError}
//     CODE      id-op-modifyOperationalBinding }

//   ModifyOperationalBindingArgument ::=
//     OPTIONALLY-PROTECTED-SEQ { ModifyOperationalBindingArgumentData }

//   ModifyOperationalBindingArgumentData ::= SEQUENCE {
//     bindingType       [0]  OPERATIONAL-BINDING.&id({OpBindingSet}),
//     bindingID         [1]  OperationalBindingID,
//     accessPoint       [2]  AccessPoint OPTIONAL,
//     -- symmetric, Role A initiates, or Role B initiates
//     initiator              CHOICE {
//       symmetric         [3]  OPERATIONAL-BINDING.&both.&ModifyParam
//                             ({OpBindingSet}{@bindingType}),
//       roleA-initiates   [4]  OPERATIONAL-BINDING.&roleA.&ModifyParam
//                             ({OpBindingSet}{@bindingType}),
//       roleB-initiates   [5]  OPERATIONAL-BINDING.&roleB.&ModifyParam
//                             ({OpBindingSet}{@bindingType})} OPTIONAL,
//     newBindingID      [6]  OperationalBindingID,
//     newAgreement      [7]  OPERATIONAL-BINDING.&Agreement
//                          ({OpBindingSet}{@bindingType}) OPTIONAL,
//     valid               [8]  ModifiedValidity OPTIONAL,
//     securityParameters  [9]  SecurityParameters OPTIONAL,
//     ...}

//   ModifiedValidity ::= SEQUENCE {
//     validFrom            [0]  CHOICE {
//       now                  [0]  NULL,
//       time                 [1]  Time,
//       ...} DEFAULT now:NULL,
//     validUntil           [1]  CHOICE {
//       explicitTermination  [0]  NULL,
//       time                 [1]  Time,
//       unchanged            [2]  NULL,
//       ... } DEFAULT unchanged:NULL,
//     ... }

//   ModifyOperationalBindingResult ::= CHOICE {
//     null            NULL,
//     protected  [1]  OPTIONALLY-PROTECTED-SEQ{ ModifyOperationalBindingResultData },
//     ... }

//   ModifyOperationalBindingResultData ::= SEQUENCE {
//       newBindingID    OperationalBindingID,
//       bindingType     OPERATIONAL-BINDING.&id({OpBindingSet}),
//       newAgreement    OPERATIONAL-BINDING.&Agreement ({OpBindingSet}{@.bindingType}),
//       valid           Validity OPTIONAL,
//       ...,
//       ...,
//       COMPONENTS OF   CommonResultsSeq
//       }


//   OpBindingSet OPERATIONAL-BINDING ::= {
//     shadowOperationalBinding |
//     hierarchicalOperationalBinding |
//     nonSpecificHierarchicalOperationalBinding }

// hierarchicalOperationalBinding OPERATIONAL-BINDING ::= {
//     AGREEMENT             HierarchicalAgreement
//     APPLICATION CONTEXTS  {{directorySystemAC}}
//     ASYMMETRIC
//       ROLE-A { -- superior DSA
//         ESTABLISHMENT-INITIATOR  TRUE
//         ESTABLISHMENT-PARAMETER  SuperiorToSubordinate
//         MODIFICATION-INITIATOR   TRUE
//         MODIFICATION-PARAMETER   SuperiorToSubordinateModification
//         TERMINATION-INITIATOR    TRUE }
//       ROLE-B { -- subordinate DSA
//         ESTABLISHMENT-INITIATOR  TRUE
//         ESTABLISHMENT-PARAMETER  SubordinateToSuperior
//         MODIFICATION-INITIATOR   TRUE
//         MODIFICATION-PARAMETER   SubordinateToSuperior
//         TERMINATION-INITIATOR    TRUE }
//     ID                    id-op-binding-hierarchical }

// HierarchicalAgreement ::= SEQUENCE {
//     rdn                [0]  RelativeDistinguishedName,
//     immediateSuperior  [1]  DistinguishedName,
//     ... }

//   SuperiorToSubordinate ::= SEQUENCE {
//     contextPrefixInfo     [0]  DITcontext,
//     entryInfo             [1]  SET SIZE (1..MAX) OF
//                                  Attribute{{SupportedAttributes}} OPTIONAL,
//     immediateSuperiorInfo [2]  SET SIZE (1..MAX) OF
//                                  Attribute{{SupportedAttributes}} OPTIONAL,
//     ... }

// SuperiorToSubordinateModification ::= SuperiorToSubordinate (
//     WITH COMPONENTS {..., entryInfo  ABSENT } )

// DITcontext ::= SEQUENCE OF Vertex

// Vertex ::= SEQUENCE {
//     rdn [0] RelativeDistinguishedName,
//     admPointInfo [1] SET SIZE (1..MAX) OF Attribute{{SupportedAttributes}} OPTIONAL,
//     subentries [2] SET SIZE (1..MAX) OF SubentryInfo OPTIONAL,
//     accessPoints [3] MasterAndShadowAccessPoints OPTIONAL,
//     ... }

// SubentryInfo ::= SEQUENCE {
//     rdn [0] RelativeDistinguishedName,
//     info [1] SET OF Attribute{{SupportedAttributes}},
//     ... }

export
interface UpdateSubordinateOptions {
    timeLimitInMilliseconds?: number;
    endTime?: Date;
}

/**
 * @summary Updates a subordinate DSA of changes that may affect a hierarchical operational binding
 * @description
 *
 * This function sends an update to a subordinate DSA whose agreement with this
 * DSA may be impacted by recent changes to a local DSE.
 *
 * @param ctx The context object
 * @param currentBindingID The most binding ID whereby the subordinate is updated
 * @param immediateSuperior The immediate superior vertex
 * @param immediateSuperiorInfo Attributes of the immediate superior that are to
 *  be disclosed to the subordinate
 * @param subordinateRDN The subordinate entry's RDN
 * @param targetSystem The remote DSA that is being updated
 * @param aliasDereferenced Whether an alias was dereferenced leading up to this
 * @param options Options
 * @returns A result or error
 *
 * @function
 * @async
 */
export
async function updateSubordinateDSA (
    ctx: MeerkatContext,
    currentBindingID: OperationalBindingID,
    immediateSuperior: Vertex,
    immediateSuperiorInfo: Attribute[] | undefined,
    subordinateRDN: RDN,
    targetSystem: AccessPoint,
    aliasDereferenced?: boolean,
    options?: UpdateSubordinateOptions,
    signErrors: boolean = false,
): Promise<OperationOutcome<typeof modifyOperationalBinding["&ResultType"]>> {
    const connectionTimeout: number | undefined = options?.timeLimitInMilliseconds;
    const startTime = new Date();
    const timeoutTime: Date | undefined = connectionTimeout // TODO: Fix non-use
        ? addMilliseconds(startTime, connectionTimeout)
        : undefined;
    const assn = await bindForOBM(ctx, undefined, undefined, targetSystem, aliasDereferenced, signErrors);
    // const assn: Connection | null = await connect(ctx, targetSystem, dop_ip["&id"]!, {
    //     timeLimitInMilliseconds: options?.timeLimitInMilliseconds,
    //     tlsOptional: ctx.config.chaining.tlsOptional,
    //     signErrors,
    // });
    if (!assn) {
        throw new ServiceError(
            ctx.i18n.t("err:could_not_connect"),
            new ServiceErrorData(
                ServiceProblem_unavailable,
                [],
                createSecurityParameters(
                    ctx,
                    signErrors,
                    undefined,
                    undefined,
                    serviceError["&errorCode"]
                ),
                ctx.dsa.accessPoint.ae_title.rdnSequence,
                aliasDereferenced,
                [
                    new Attribute(
                        dSAProblem["&id"],
                        [dSAProblem.encoderFor["&Type"]!(id_pr_targetDsaUnavailable, DER)],
                    ),
                ],
            ),
            signErrors,
        );
    }
    const ditContext: X500Vertex[] = []; // To be reversed.
    let cpEncountered: boolean = false;
    let current: Vertex | undefined = immediateSuperior;
    while (current && current.immediateSuperior) {
        const admPointAttributes: Attribute[] = [];
        const subentryInfos: SubentryInfo[] = [];
        const accessPoints: MasterAndShadowAccessPoints = [];
        if (!cpEncountered && current.dse.cp) {
            cpEncountered = true;
        }

        if (current.dse.admPoint) {
            const {
                userAttributes,
                operationalAttributes,
            } = await readAttributes(ctx, current, {
                selection: admPointEIS,
            });
            admPointAttributes.push(
                ...userAttributes,
                ...operationalAttributes,
            );

            const subordinates = await readSubordinates(ctx, current, undefined, undefined, undefined, {
                subentry: true,
            });
            subentryInfos.push(
                ...await Promise.all(
                    subordinates
                        .filter((sub) => sub.dse.subentry)
                        .map(async (sub): Promise<SubentryInfo> => {
                            const {
                                userAttributes,
                                operationalAttributes,
                            } = await readAttributes(ctx, sub, {
                                selection: subentryEIS,
                            });
                            return new SubentryInfo(
                                sub.dse.rdn,
                                [
                                    ...userAttributes,
                                    ...operationalAttributes,
                                ],
                            );
                        }),
                ),
            );
        }

        ditContext.push(new X500Vertex(
            current.dse.rdn,
            (admPointAttributes.length > 0)
                ? admPointAttributes
                : undefined,
            (subentryInfos.length > 0)
                ? subentryInfos
                : undefined,
            (accessPoints.length > 0)
                ? accessPoints
                : undefined,
        ));
        current = current.immediateSuperior;
    }
    const sup2sub = new SuperiorToSubordinateModification(
        ditContext.reverse(),
        undefined, // entryInfo is ABSENT in SuperiorToSubordinateModification
        immediateSuperiorInfo,
    );
    const agreement = new HierarchicalAgreement(
        subordinateRDN,
        getDistinguishedName(immediateSuperior),
    );

    return assn.modifyHOBWithSubordinate({
        bindingID: currentBindingID,
        accessPoint: ctx.dsa.accessPoint,
        initiator: sup2sub,
        securityParameters: createSecurityParameters(
            ctx,
            true,
            targetSystem.ae_title.rdnSequence,
            modifyOperationalBinding["&operationCode"],
        ),
        newAgreement: agreement,
        cert_path: ctx.config.signing.certPath,
        key: ctx.config.signing.key,
    });
    // const timeRemainingForOperation: number | undefined = timeoutTime
    //     ? differenceInMilliseconds(timeoutTime, new Date())
    //     : undefined;
}

export default updateSubordinateDSA;
