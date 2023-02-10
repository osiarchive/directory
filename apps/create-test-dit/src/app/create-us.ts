import type { Connection, Context } from "./types";
import {
    FALSE_BIT,
    OBJECT_IDENTIFIER,
    ObjectIdentifier,
    TRUE_BIT,
} from "asn1-ts";
import { randomInt } from "crypto";
import {
    addEntry,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/addEntry.oa";
import {
    AddEntryArgument,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/AddEntryArgument.ta";
import {
    AddEntryArgumentData,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/AddEntryArgumentData.ta";
import {
    DistinguishedName, _encode_DistinguishedName,
} from "@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta";
import {
    Attribute,
} from "@wildboar/x500/src/lib/modules/InformationFramework/Attribute.ta";
import {
    AttributeTypeAndValue,
} from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeTypeAndValue.ta";
import * as selat from "@wildboar/x500/src/lib/collections/attributes";
import * as seloc from "@wildboar/x500/src/lib/collections/objectClasses";
import {
    ServiceControls,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ServiceControls.ta";
import {
    ServiceControlOptions,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ServiceControlOptions.ta";
import { SecurityParameters } from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/SecurityParameters.ta";
import {
    ProtectionRequest_none,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ProtectionRequest.ta";
import {
    ErrorProtectionRequest_none,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/ErrorProtectionRequest.ta";
import {
    DER,
    _encodeObjectIdentifier,
    _encodePrintableString,
    _encodeUTF8String,
} from "asn1-ts/dist/node/functional";
import { idempotentAddEntry } from "./utils";
import {
    createMockCertificate,
    createMockCRL,
    createMockPersonAttributes,
    createMockUsername,
    createMockEmail,
} from "./mock-entries";
import { RelativeDistinguishedName } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/RelativeDistinguishedName.ta";
import {
    _encode_Certificate,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificate.ta";
import {
    CertificatePair,
    _encode_CertificatePair,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/CertificatePair.ta";
import {
    _encode_CertificateList,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/CertificateList.ta";
import {
    PolicySyntax,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/PolicySyntax.ta";
import {
    InfoSyntax,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/InfoSyntax.ta";
import {
    InfoSyntax_pointer,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/InfoSyntax-pointer.ta";
import {
    AlgorithmIdentifier,
} from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/AlgorithmIdentifier.ta";
import {
    sha256WithRSAEncryption,
} from "@wildboar/x500/src/lib/modules/AlgorithmObjectIdentifiers/sha256WithRSAEncryption.va";
import {
    SupportedAlgorithm,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/SupportedAlgorithm.ta";
import {
    PolicyInformation,
} from "@wildboar/x500/src/lib/modules/CertificateExtensions/PolicyInformation.ta";
import {
    dynamicObject,
} from "@wildboar/parity-schema/src/lib/modules/RFC2589DynamicDirectory/dynamicObject.oa";
import {
    eduPerson,
} from "@wildboar/parity-schema/src/lib/modules/EduPersonSchema/eduPerson.oa";
import {
    eduPersonAffiliation,
} from "@wildboar/parity-schema/src/lib/modules/EduPersonSchema/eduPersonAffiliation.oa";
import {
    gidNumber,
    homeDirectory,
    loginShell,
    posixAccount,
    uidNumber,
} from "@wildboar/parity-schema/src/lib/modules/NIS/posixAccount.oa";
import {
    uid,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uid.oa";
import {
    shadowAccount, shadowLastChange, shadowMax, shadowMin,
} from "@wildboar/parity-schema/src/lib/modules/NIS/shadowAccount.oa";
import {
    openLDAPdisplayableObject,
} from "@wildboar/parity-schema/src/lib/modules/OpenLDAP/openLDAPdisplayableObject.oa";
import {
    mailQuotaSize, qmailUser,
} from "@wildboar/parity-schema/src/lib/modules/QMailSchema/qmailUser.oa";
import {
    displayName,
    kickoffTime,
    rid,
    sambaAccount,
} from "@wildboar/parity-schema/src/lib/modules/SambaSchema/sambaAccount.oa";
import {
    sambaDomainName,
    sambaProfilePath,
    sambaSamAccount, sambaSID,
} from "@wildboar/parity-schema/src/lib/modules/SambaV3Schema/sambaSamAccount.oa";
import {
    mhs_user,
} from "@wildboar/x400/src/lib/modules/MHSDirectoryObjectsAndAttributes/mhs-user.oa";
// import {
//     edi_name,
//     edi_user,
// } from "@wildboar/x400/src/lib/modules/EDIMUseOfDirectory/edi-user.oa";
import {
    entryTtl,
} from "@wildboar/parity-schema/src/lib/modules/RFC2589DynamicDirectory/entryTtl.oa";
import { mail } from "@wildboar/parity-schema/src/lib/modules/Cosine/mail.oa";
import {
    naturalPerson,
} from "@wildboar/pkcs/src/lib/modules/PKCS-9/naturalPerson.oa";
import {
    emailAddress,
} from "@wildboar/pkcs/src/lib/modules/PKCS-9/emailAddress.oa";
import {
    unstructuredName,
} from "@wildboar/pkcs/src/lib/modules/PKCS-9/unstructuredName.oa";
import {
    unstructuredAddress,
} from "@wildboar/pkcs/src/lib/modules/PKCS-9/unstructuredAddress.oa";
import {
    dateOfBirth,
} from "@wildboar/pkcs/src/lib/modules/PKCS-9/dateOfBirth.oa";
import {
    placeOfBirth,
} from "@wildboar/pkcs/src/lib/modules/PKCS-9/placeOfBirth.oa";
import {
    gender,
} from "@wildboar/pkcs/src/lib/modules/PKCS-9/gender.oa";
import {
    countryOfCitizenship,
} from "@wildboar/pkcs/src/lib/modules/PKCS-9/countryOfCitizenship.oa";
import {
    countryOfResidence,
} from "@wildboar/pkcs/src/lib/modules/PKCS-9/countryOfResidence.oa";
import {
    pseudonym,
} from "@wildboar/pkcs/src/lib/modules/PKCS-9/pseudonym.oa";
import {
    mhs_or_addresses,
} from "@wildboar/x400/src/lib/modules/MHSDirectoryObjectsAndAttributes/mhs-or-addresses.oa";
import {
    ORAddress,
} from "@wildboar/x400/src/lib/modules/MTSAbstractService/ORAddress.ta";
import {
    BuiltInStandardAttributes,
} from "@wildboar/x400/src/lib/modules/MTSAbstractService/BuiltInStandardAttributes.ta";
import {
    PersonalName,
} from "@wildboar/x400/src/lib/modules/MTSAbstractService/PersonalName.ta";
import {
    BuiltInDomainDefinedAttribute,
} from "@wildboar/x400/src/lib/modules/MTSAbstractService/BuiltInDomainDefinedAttribute.ta";
import {
    ExtensionAttribute,
} from "@wildboar/x400/src/lib/modules/MTSAbstractService/ExtensionAttribute.ta";
import { Promise as bPromise } from "bluebird";


const serviceControlOptions: ServiceControlOptions = new Uint8ClampedArray(
    Array(9).fill(FALSE_BIT));
// Necessary to make countries administrative points.
// serviceControlOptions[ServiceControlOptions_manageDSAIT] = TRUE_BIT;
const serviceControls = new ServiceControls(
    serviceControlOptions,
    undefined,
    60,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
);

function securityParameters (): SecurityParameters {
    return new SecurityParameters(
        undefined,
        undefined, // DSA name
        undefined,
        undefined,
        ProtectionRequest_none,
        addEntry["&operationCode"]!,
        ErrorProtectionRequest_none,
        undefined,
    );
}

function createAddEntryArgument (
    dn: DistinguishedName,
    attributes: Attribute[],
): AddEntryArgument {
    return {
        unsigned: new AddEntryArgumentData(
            {
                rdnSequence: dn,
            },
            attributes,
            undefined,
            [],
            serviceControls,
            securityParameters(),
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
        ),
    };
}

const baseObject: DistinguishedName = [
    [
        new AttributeTypeAndValue(
            selat.countryName["&id"],
            _encodePrintableString("US", DER),
        ),
    ],
];

function cn_rdn (cn: string): RelativeDistinguishedName {
    return [
        new AttributeTypeAndValue(
            selat.commonName["&id"]!,
            _encodeUTF8String(cn, DER),
        ),
    ];
}

function get_child_device (parent: DistinguishedName, name: string): AddEntryArgument {
    return createAddEntryArgument([
        ...parent,
        [
            new AttributeTypeAndValue(
                selat.commonName["&id"]!,
                _encodeUTF8String(name, DER),
            ),
        ],
    ], [
        new Attribute(
            selat.objectClass["&id"],
            [
                _encodeObjectIdentifier(seloc.device["&id"]!, DER),
                _encodeObjectIdentifier(seloc.child["&id"]!, DER),
            ],
            undefined,
        ),
        new Attribute(
            selat.commonName["&id"]!,
            [_encodeUTF8String(name, DER)],
            undefined,
        ),
    ]);
}

function get_child_ap (parent: DistinguishedName, name: string): AddEntryArgument {
    return createAddEntryArgument([
        ...parent,
        [
            new AttributeTypeAndValue(
                selat.commonName["&id"]!,
                _encodeUTF8String(name, DER),
            ),
        ],
    ], [
        new Attribute(
            selat.objectClass["&id"],
            [
                _encodeObjectIdentifier(seloc.applicationProcess["&id"]!, DER),
                _encodeObjectIdentifier(seloc.child["&id"]!, DER),
            ],
            undefined,
        ),
        new Attribute(
            selat.commonName["&id"]!,
            [_encodeUTF8String(name, DER)],
            undefined,
        ),
    ]);
}

export
async function seedUS (
    ctx: Context,
    conn: Connection,
): Promise<void> {

    const deepDN: DistinguishedName = [ ...baseObject ];

    { // C=US,ST=FL
        const name: string = "FL";
        const rdn: RelativeDistinguishedName = [
            new AttributeTypeAndValue(
                selat.stateOrProvinceName["&id"]!,
                _encodeUTF8String(name, DER),
            ),
        ];
        deepDN.push(rdn);
        const attributes: Attribute[] = [
            new Attribute(
                selat.objectClass["&id"],
                [_encodeObjectIdentifier(seloc.locality["&id"], DER)],
            ),
            new Attribute(
                selat.stateOrProvinceName["&id"],
                [_encodeUTF8String(name, DER)],
            ),
        ];
        const arg = createAddEntryArgument(deepDN, attributes);
        await idempotentAddEntry(ctx, conn, "C=US,ST=FL", arg);
    }

    { // C=US,ST=FL,L=HIL
        const name: string = "HIL";
        const rdn: RelativeDistinguishedName = [
            new AttributeTypeAndValue(
                selat.localityName["&id"]!,
                _encodeUTF8String(name, DER),
            ),
        ];
        deepDN.push(rdn);
        const attributes: Attribute[] = [
            new Attribute(
                selat.objectClass["&id"],
                [_encodeObjectIdentifier(seloc.locality["&id"], DER)],
            ),
            new Attribute(
                selat.localityName["&id"],
                [_encodeUTF8String(name, DER)],
            ),
        ];
        const arg = createAddEntryArgument(deepDN, attributes);
        await idempotentAddEntry(ctx, conn, "C=US,ST=FL,L=HIL", arg);
    }

    { // C=US,ST=FL,L=HIL,L=Tampa
        const name: string = "Tampa";
        const rdn: RelativeDistinguishedName = [
            new AttributeTypeAndValue(
                selat.localityName["&id"]!,
                _encodeUTF8String(name, DER),
            ),
        ];
        deepDN.push(rdn);
        const attributes: Attribute[] = [
            new Attribute(
                selat.objectClass["&id"],
                [_encodeObjectIdentifier(seloc.locality["&id"], DER)],
            ),
            new Attribute(
                selat.localityName["&id"],
                [_encodeUTF8String(name, DER)],
            ),
        ];
        const arg = createAddEntryArgument(deepDN, attributes);
        await idempotentAddEntry(ctx, conn, "C=US,ST=FL,L=HIL,L=Tampa", arg);
    }

    { // C=US,ST=FL,L=HIL,L=Tampa,L=Westchase
        const name: string = "Westchase";
        const rdn: RelativeDistinguishedName = [
            new AttributeTypeAndValue(
                selat.localityName["&id"]!,
                _encodeUTF8String(name, DER),
            ),
        ];
        deepDN.push(rdn);
        const attributes: Attribute[] = [
            new Attribute(
                selat.objectClass["&id"],
                [_encodeObjectIdentifier(seloc.locality["&id"], DER)],
            ),
            new Attribute(
                selat.localityName["&id"],
                [_encodeUTF8String(name, DER)],
            ),
        ];
        const arg = createAddEntryArgument(deepDN, attributes);
        await idempotentAddEntry(ctx, conn, "C=US,ST=FL,L=HIL,L=Tampa,L=Westchase", arg);
    }

    const gucciGang: DistinguishedName[] = [];
    const peepantsGang: DistinguishedName[] = [];
    const newEntryArgs: [cn: string, arg: AddEntryArgument][] = [];
    // Create random people
    for (let i = 1; i < 1000; i++) {
        // TODO: pgpKeyInfo
        // TODO: simpleSecurityObject
        // TODO: uidObject
        const otherObjectClasses: OBJECT_IDENTIFIER[] = [];
        const isNatural: boolean = !(i % 2);
        // const isPGPUser: boolean = !(i % 3);
        const isPosixUser: boolean = !(i % 3);
        const isShadowUser: boolean = !(i % 4);
        const isEducated: boolean = !(i % 5);
        const isOpenLDAPDisplayable: boolean = !(i % 6);
        const hasUserSecurityInfo: boolean = !(i % 7);
        const isQmailUser: boolean = !(i % 8);
        const isPkiUser: boolean = !(i % 9);
        const isMHSUser: boolean = !(i % 10);
        const isSambaAccount: boolean = !(i % 11);
        const isSambaSamAccount: boolean = !(i % 12);
        const isInPeepantsGang: boolean = !(i % 13);
        const isInGucciGang: boolean = !(i % 15);
        const isPkiCA: boolean = !(i % 19);
        const isDynamic: boolean = !(i % 21);
        if (isNatural) {
            otherObjectClasses.push(naturalPerson["&id"]);
        }
        if (isPosixUser) {
            otherObjectClasses.push(posixAccount["&id"]);
        }
        if (isShadowUser) {
            otherObjectClasses.push(shadowAccount["&id"]);
        }
        // Usage of this schema is unclear entirely.
        // if (isPGPUser) {
        //     otherObjectClasses.push(pgpKeyInfo["&id"]);
        // }
        if (isDynamic) {
            otherObjectClasses.push(dynamicObject["&id"]);
        }
        if (isEducated) {
            otherObjectClasses.push(eduPerson["&id"]);
        }
        if (isQmailUser) {
            otherObjectClasses.push(qmailUser["&id"]);
        }
        if (isOpenLDAPDisplayable) {
            otherObjectClasses.push(openLDAPdisplayableObject["&id"]);
        }
        if (hasUserSecurityInfo) {
            otherObjectClasses.push(seloc.userSecurityInformation["&id"]);
        }
        if (isPkiCA) {
            otherObjectClasses.push(seloc.pkiCA["&id"]);
            otherObjectClasses.push(seloc.certificationAuthority["&id"]);
            otherObjectClasses.push(seloc.certificationAuthority_V2["&id"]);
        }
        if (isPkiUser) {
            otherObjectClasses.push(seloc.pkiUser["&id"]);
            otherObjectClasses.push(seloc.strongAuthenticationUser["&id"]);
        }
        if (isSambaAccount) {
            otherObjectClasses.push(sambaAccount["&id"]);
        }
        if (isSambaSamAccount) {
            otherObjectClasses.push(sambaSamAccount["&id"]);
        }
        if (isMHSUser) {
            otherObjectClasses.push(mhs_user["&id"]);
            // edi-user is a structural object class.
            // otherObjectClasses.push(edi_user["&id"]);
        }
        const [ rdn, attributes, cn ] = createMockPersonAttributes(otherObjectClasses);
        const dn: DistinguishedName = [
            ...deepDN,
            rdn,
        ];
        if (isNatural) {
            attributes.push(new Attribute(
                emailAddress["&id"],
                [emailAddress.encoderFor["&Type"]!(createMockEmail(), DER)],
            ));
            attributes.push(new Attribute(
                unstructuredName["&id"],
                [unstructuredName.encoderFor["&Type"]!({ directoryString: { uTF8String: "Big Chungus" } }, DER)],
            ));
            attributes.push(new Attribute(
                unstructuredAddress["&id"],
                [unstructuredAddress.encoderFor["&Type"]!({ uTF8String: "123 Drury lane, Atlanta, GA 12345" }, DER)],
            ));
            attributes.push(new Attribute(
                dateOfBirth["&id"],
                [dateOfBirth.encoderFor["&Type"]!(new Date(), DER)],
            ));
            attributes.push(new Attribute(
                placeOfBirth["&id"],
                [placeOfBirth.encoderFor["&Type"]!({ uTF8String: "Disney World" }, DER)],
            ));
            attributes.push(new Attribute(
                gender["&id"],
                [gender.encoderFor["&Type"]!((randomInt(999) % 2) ? "M" : "F", DER)],
            ));
            attributes.push(new Attribute(
                countryOfCitizenship["&id"],
                [countryOfCitizenship.encoderFor["&Type"]!("US", DER)],
            ));
            attributes.push(new Attribute(
                countryOfResidence["&id"],
                [countryOfResidence.encoderFor["&Type"]!("SE", DER)],
            ));
            attributes.push(new Attribute(
                pseudonym["&id"],
                [pseudonym.encoderFor["&Type"]!({ uTF8String: "Monkeyman 5000" }, DER)],
            ));
        }
        if (isPosixUser) {
            const userid: string = createMockUsername();
            attributes.push(new Attribute(
                uid["&id"],
                [uid.encoderFor["&Type"]!({ uTF8String: userid }, DER)],
            ));
            attributes.push(new Attribute(
                uidNumber["&id"],
                [uidNumber.encoderFor["&Type"]!(1001, DER)],
            ));
            attributes.push(new Attribute(
                gidNumber["&id"],
                [gidNumber.encoderFor["&Type"]!(1001, DER)],
            ));
            attributes.push(new Attribute(
                homeDirectory["&id"],
                [homeDirectory.encoderFor["&Type"]!(`/home/${userid}`, DER)],
            ));
            attributes.push(new Attribute(
                loginShell["&id"],
                [loginShell.encoderFor["&Type"]!("/bin/bash", DER)],
            ));
        }
        if (isShadowUser) {
            const uidAlreadyPresent: boolean = attributes.some((a) => a.type_.isEqualTo(uid["&id"]));
            if (!uidAlreadyPresent) {
                const userid: string = createMockUsername();
                attributes.push(new Attribute(
                    uid["&id"],
                    [uid.encoderFor["&Type"]!({ uTF8String: userid }, DER)],
                ));
            }
            attributes.push(new Attribute(
                shadowMin["&id"],
                [shadowMin.encoderFor["&Type"]!(10, DER)],
            ));
            attributes.push(new Attribute(
                shadowMax["&id"],
                [shadowMax.encoderFor["&Type"]!(1999, DER)],
            ));
            attributes.push(new Attribute(
                shadowLastChange["&id"],
                [shadowLastChange.encoderFor["&Type"]!(358720449, DER)],
            ));
        }
        if (isDynamic) {
            const ttl = randomInt(600, 1500);
            attributes.push(new Attribute(
                entryTtl["&id"],
                [entryTtl.encoderFor["&Type"]!(ttl, DER)],
            ));
        }
        if (isEducated) {
            attributes.push(new Attribute(
                eduPersonAffiliation["&id"],
                [eduPersonAffiliation.encoderFor["&Type"]!({ uTF8String: "University of Florida" }, DER)],
            ));
        }
        if (isOpenLDAPDisplayable) {
            const userid = createMockUsername();
            attributes.push(new Attribute(
                displayName["&id"],
                [displayName.encoderFor["&Type"]!({ uTF8String: userid }, DER)],
            ));
        }
        if (isQmailUser) {
            attributes.push(new Attribute(
                mail["&id"],
                [mail.encoderFor["&Type"]!(createMockEmail(), DER)],
            ));
            attributes.push(new Attribute(
                mailQuotaSize["&id"],
                [mailQuotaSize.encoderFor["&Type"]!(350520, DER)],
            ));
        }
        if (isSambaAccount) {
            const uidAlreadyPresent: boolean = attributes.some((a) => a.type_.isEqualTo(uid["&id"]));
            if (!uidAlreadyPresent) {
                const userid: string = createMockUsername();
                attributes.push(new Attribute(
                    uid["&id"],
                    [uid.encoderFor["&Type"]!({ uTF8String: userid }, DER)],
                ));
            }
            attributes.push(new Attribute(
                rid["&id"],
                [rid.encoderFor["&Type"]!(randomInt(1000, 10000), DER)],
            ));
            attributes.push(new Attribute(
                kickoffTime["&id"],
                [kickoffTime.encoderFor["&Type"]!(randomInt(1000, 10000), DER)],
            ));
        }
        if (isSambaSamAccount) {
            const userid: string = createMockUsername();
            attributes.push(new Attribute(
                sambaSID["&id"],
                [sambaSID.encoderFor["&Type"]!("S-1-5-21-1004336348-1177238915-682003330-512", DER)],
            ));
            attributes.push(new Attribute(
                sambaDomainName["&id"],
                [sambaDomainName.encoderFor["&Type"]!({ uTF8String: "WILDBOAR" }, DER)],
            ));
            attributes.push(new Attribute(
                sambaProfilePath["&id"],
                [sambaProfilePath.encoderFor["&Type"]!({ uTF8String: `C:\\\\Users\\${userid}` }, DER)],
            ));
        }
        if (isMHSUser) {
            const orAddress = new ORAddress(
                new BuiltInStandardAttributes(
                    {
                        iso_3166_alpha2_code: "US",
                    },
                    {
                        printable: "Your friendly totally non-monopoly ISP",
                    },
                    undefined,
                    undefined,
                    {
                        printable: "asdf",
                    },
                    "Wildboar Software",
                    undefined,
                    new PersonalName(
                        "Wilbur",
                        "Jonathan",
                        undefined,
                        undefined,
                    ),
                    undefined,
                ),
                [
                    new BuiltInDomainDefinedAttribute(
                        "citizenId",
                        "1235982850",
                    ),
                ],
                [
                    new ExtensionAttribute(
                        1, // common-name
                        _encodePrintableString("Bigboi", DER),
                    ),
                ],
            );
            attributes.push(new Attribute(
                mhs_or_addresses["&id"],
                [mhs_or_addresses.encoderFor["&Type"]!(orAddress, DER)],
            ));
            // attributes.push(new Attribute(
            //     edi_name["&id"],
            //     [edi_name.encoderFor["&Type"]!({ uTF8String: "$$$$Bigmunniii$$$$" }, DER)],
            // ));
        }
        if (hasUserSecurityInfo) {
            const alg = new AlgorithmIdentifier(
                sha256WithRSAEncryption,
                undefined,
            );
            const supportedAlg = new SupportedAlgorithm(
                alg,
                new Uint8ClampedArray([ TRUE_BIT, FALSE_BIT, TRUE_BIT, TRUE_BIT ]),
                [
                    new PolicyInformation(
                        new ObjectIdentifier([ 2, 5, 3, 4, 6, 7, 1 ]),
                        undefined,
                    ),
                ],
            );
            attributes.push(new Attribute(
                selat.supportedAlgorithms["&id"],
                [selat.supportedAlgorithms.encoderFor["&Type"]!(supportedAlg, DER)],
            ));
        }
        if (isPkiCA) {
            const randomCert = createMockCertificate(dn, dn);
            attributes.push(new Attribute(
                selat.cACertificate["&id"],
                [
                    _encode_Certificate(randomCert, DER),
                ],
            ));
            const pair = new CertificatePair(
                randomCert,
                randomCert,
            );
            attributes.push(new Attribute(
                selat.crossCertificatePair["&id"],
                [
                    _encode_CertificatePair(pair, DER),
                ],
            ));
            const randomCRL = createMockCRL();
            attributes.push(new Attribute(
                selat.certificateRevocationList["&id"],
                [
                    _encode_CertificateList(randomCRL, DER),
                ],
            ));
            attributes.push(new Attribute(
                selat.eepkCertificateRevocationList["&id"],
                [
                    _encode_CertificateList(randomCRL, DER),
                ],
            ));
            attributes.push(new Attribute(
                selat.authorityRevocationList["&id"],
                [
                    _encode_CertificateList(randomCRL, DER),
                ],
            ));
        }
        if (isPkiUser) {
            const randomCert = createMockCertificate();
            attributes.push(new Attribute(
                selat.userCertificate["&id"],
                [
                    _encode_Certificate(randomCert, DER),
                ],
            ));
        }
        if (isInPeepantsGang) {
            peepantsGang.push(dn);
        }
        if (isInGucciGang) {
            gucciGang.push(dn);
        }
        const arg = createAddEntryArgument(dn, attributes);
        newEntryArgs.push([cn, arg]);
    }

    await bPromise.map(
        newEntryArgs,
        ([cn, arg]) => idempotentAddEntry(ctx, conn, `C=US,ST=FL,L=HIL,L=Tampa,L=Westchase,CN=${cn}`, arg),
        {
            concurrency: 10,
        },
    );

    { // Create C=US,CN=Directory Engineers
        const name: string = "Directory Engineers";
        const dn: DistinguishedName = [
            ...baseObject,
            [
                new AttributeTypeAndValue(
                    selat.commonName["&id"]!,
                    _encodeUTF8String(name, DER),
                ),
            ],
        ];
        const attributes: Attribute[] = [
            new Attribute(
                selat.objectClass["&id"],
                [
                    _encodeObjectIdentifier(seloc.groupOfNames["&id"], DER),
                ],
            ),
            new Attribute(
                selat.commonName["&id"],
                [_encodeUTF8String(name, DER)],
            ),
            new Attribute(
                selat.member["&id"],
                /**
                 * NOTE: `member` does not have an `encoderFor["&Type"]`
                 * function because it is a subtype of `distinguishedName`.
                 */
                gucciGang.map((gangMember) => selat.distinguishedName.encoderFor["&Type"]!(gangMember, DER)),
            ),
        ];
        const arg = createAddEntryArgument(dn, attributes);
        await idempotentAddEntry(ctx, conn, "C=US,CN=Directory Engineers", arg);
    }

    { // C=US,ST=FL,L=HIL,L=Tampa,O=Wildboar Software
        const name: string = "Wildboar Software";
        const rdn: RelativeDistinguishedName = [
            new AttributeTypeAndValue(
                selat.organizationName["&id"]!,
                _encodeUTF8String(name, DER),
            ),
        ];
        const dn: DistinguishedName = [
            ...deepDN.slice(0, -1),
            rdn,
        ];
        const certPol = new PolicySyntax(
            new ObjectIdentifier([ 2, 5, 2, 4, 7, 2, 1 ]),
            {
                content: {
                    uTF8String: "I just give you certificates in exchange for a bribe",
                },
            },
        );
        const cps: InfoSyntax = {
            pointer: new InfoSyntax_pointer(
                [
                    {
                        uniformResourceIdentifier: "https://wildboarsoftware.com",
                    },
                ],
                undefined,
            ),
        };
        const privPol = new PolicySyntax(
            new ObjectIdentifier([ 2, 5, 2, 4, 7, 2, 3 ]),
            {
                content: {
                    uTF8String: "I just give you certificates if you ask really nicely",
                },
            },
        );
        const attributes: Attribute[] = [
            new Attribute(
                selat.objectClass["&id"],
                [
                    _encodeObjectIdentifier(seloc.organization["&id"], DER),
                    _encodeObjectIdentifier(seloc.cpCps["&id"], DER),
                    _encodeObjectIdentifier(seloc.privilegePolicy["&id"], DER),
                ],
            ),
            new Attribute(
                selat.organizationName["&id"],
                [_encodeUTF8String(name, DER)],
            ),
            new Attribute(
                selat.certificatePolicy["&id"],
                [selat.certificatePolicy.encoderFor["&Type"]!(certPol, DER)],
            ),
            new Attribute(
                selat.certificationPracticeStmt["&id"],
                [selat.certificationPracticeStmt.encoderFor["&Type"]!(cps, DER)],
            ),
            new Attribute(
                selat.privPolicy["&id"],
                [selat.privPolicy.encoderFor["&Type"]!(privPol, DER)],
            ),
        ];
        const arg = createAddEntryArgument(dn, attributes);
        await idempotentAddEntry(ctx, conn, "C=US,ST=FL,L=HIL,L=Tampa,O=Wildboar Software", arg);
    }

    { // C=US,ST=FL,L=HIL,L=Tampa,O=Wildboar Software,CN=Code Peasants
        const name: string = "Code Peasants";
        const rdn: RelativeDistinguishedName = [
            new AttributeTypeAndValue(
                selat.commonName["&id"]!,
                _encodeUTF8String(name, DER),
            ),
        ];
        const dn: DistinguishedName = [
            ...deepDN.slice(0, -1),
            [
                new AttributeTypeAndValue(
                    selat.organizationName["&id"]!,
                    _encodeUTF8String("Wildboar Software", DER),
                ),
            ],
            rdn,
        ];
        const attributes: Attribute[] = [
            new Attribute(
                selat.objectClass["&id"],
                [_encodeObjectIdentifier(seloc.organizationalRole["&id"], DER)],
            ),
            new Attribute(
                selat.commonName["&id"],
                [_encodeUTF8String(name, DER)],
            ),
            new Attribute(
                selat.roleOccupant["&id"],
                /**
                 * NOTE: `roleOccupant` does not have an `encoderFor["&Type"]`
                 * function because it is a subtype of `distinguishedName`.
                 */
                peepantsGang.map((gangMember) => selat.distinguishedName.encoderFor["&Type"]!(gangMember, DER)),
            ),
        ];
        const arg = createAddEntryArgument(dn, attributes);
        await idempotentAddEntry(ctx, conn, "C=US,ST=FL,L=HIL,L=Tampa,O=Wildboar Software,CN=Code Peasants", arg);
    }

    { // C=US,ST=FL,L=HIL,L=Tampa,O=Wildboar Software,CN=CRL Dist Point #001
        const name: string = "CRL Dist Point #001";
        const rdn: RelativeDistinguishedName = [
            new AttributeTypeAndValue(
                selat.commonName["&id"]!,
                _encodeUTF8String(name, DER),
            ),
        ];
        const dn: DistinguishedName = [
            ...deepDN.slice(0, -1),
            [
                new AttributeTypeAndValue(
                    selat.organizationName["&id"]!,
                    _encodeUTF8String("Wildboar Software", DER),
                ),
            ],
            rdn,
        ];
        const randomCRL = createMockCRL();
        const attributes: Attribute[] = [
            new Attribute(
                selat.objectClass["&id"],
                [_encodeObjectIdentifier(seloc.cRLDistributionPoint["&id"], DER)],
            ),
            new Attribute(
                selat.commonName["&id"],
                [_encodeUTF8String(name, DER)],
            ),
        ];
        attributes.push(new Attribute(
            selat.certificateRevocationList["&id"],
            [
                _encode_CertificateList(randomCRL, DER),
            ],
        ));
        attributes.push(new Attribute(
            selat.eepkCertificateRevocationList["&id"],
            [
                _encode_CertificateList(randomCRL, DER),
            ],
        ));
        attributes.push(new Attribute(
            selat.authorityRevocationList["&id"],
            [
                _encode_CertificateList(randomCRL, DER),
            ],
        ));
        const arg = createAddEntryArgument(dn, attributes);
        await idempotentAddEntry(ctx, conn, "C=US,ST=FL,L=HIL,L=Tampa,O=Wildboar Software,CN=CRL Dist Point #001", arg);
    }

    const gov_rdn: RelativeDistinguishedName = [
        new AttributeTypeAndValue(
            selat.organizationName["&id"]!,
            _encodeUTF8String("Government", DER),
        ),
    ];
    {
        const name: string = "Government";
        const rdn: RelativeDistinguishedName = gov_rdn;
        const dn: DistinguishedName = [
            ...baseObject,
            rdn,
        ];
        const attributes: Attribute[] = [
            new Attribute(
                selat.objectClass["&id"],
                [_encodeObjectIdentifier(seloc.organization["&id"], DER)],
            ),
            new Attribute(
                selat.organizationName["&id"],
                [_encodeUTF8String(name, DER)],
            ),
        ];
        const arg = createAddEntryArgument(dn, attributes);
        await idempotentAddEntry(ctx, conn, "C=US,O=Government", arg);
    }
    const dod_rdn: RelativeDistinguishedName = [
        new AttributeTypeAndValue(
            selat.organizationalUnitName["&id"]!,
            _encodeUTF8String("Dept. of Defense", DER),
        ),
    ];

    const jb_dn: DistinguishedName = [ ...baseObject, gov_rdn, cn_rdn("Joseph R. Biden") ];
    const kh_dn: DistinguishedName = [ ...baseObject, gov_rdn, cn_rdn("Kamala Harris") ];
    const government_persons: [ string, string, DistinguishedName? ][] = [
        [ "Joseph R. Biden", "Biden", undefined ],
        [ "Kamala Harris", "Harris", jb_dn ],
        [ "Patty Murray", "Murray", kh_dn ],
    ];
    for (const gov_person of government_persons) {
        const name: string = gov_person[0];
        const rdn: RelativeDistinguishedName = [
            new AttributeTypeAndValue(
                selat.commonName["&id"]!,
                _encodeUTF8String(name, DER),
            ),
        ];
        const dn: DistinguishedName = [
            ...baseObject,
            rdn,
        ];
        const attributes: Attribute[] = [
            new Attribute(
                selat.objectClass["&id"],
                [_encodeObjectIdentifier(seloc.person["&id"], DER)],
            ),
            new Attribute(
                selat.commonName["&id"],
                [_encodeUTF8String(name, DER)],
            ),
            new Attribute(
                selat.surname["&id"],
                [_encodeUTF8String(gov_person[1], DER)],
            ),
        ];
        if (gov_person[2]) {
            attributes.push(new Attribute(
                selat.hierarchyParent["&id"],
                [_encode_DistinguishedName(gov_person[2], DER)],
            ));
        }
        const arg = createAddEntryArgument(dn, attributes);
        await idempotentAddEntry(ctx, conn, `C=US,O=Government,CN=${gov_person[0]}`, arg);
    }

    const depts: [string, string][] = [
        [ "State",	"Antony Blinken" ],
        [ "Treasury",	"Janet Yellen" ],
        [ "Defense",	"Lloyd Austin" ],
        [ "Justice",	"Merrick Garland" ],
        [ "Interior",	"Deb Haaland" ],
        [ "Agriculture",	"Tom Vilsack" ],
        [ "Commerce",	"Gina Raimondo" ],
        [ "Labor",	"Marty Walsh" ],
        [ "Health and Human Services",	"Xavier Becerra" ],
        [ "Housing and Urban Development",	"Marcia Fudge" ],
        [ "Transportation",	"Pete Buttigieg" ],
        [ "Energy",	"Jennifer Granholm" ],
        [ "Education",	"Miguel Cardona" ],
        [ "Veterans Affairs",	"Denis McDonough" ],
        [ "Homeland Security",	"Alejandro Mayorkas" ],
    ];
    for (const dept of depts) {
        const dept_name: string = `Dept. of ${dept[0]}`;
        const dept_rdn: RelativeDistinguishedName = [
            new AttributeTypeAndValue(
                selat.organizationalUnitName["&id"]!,
                _encodeUTF8String(dept_name, DER),
            ),
        ];
        {
            const dn: DistinguishedName = [
                ...baseObject,
                gov_rdn,
                dept_rdn,
            ];
            const attributes: Attribute[] = [
                new Attribute(
                    selat.objectClass["&id"],
                    [_encodeObjectIdentifier(seloc.organizationalUnit["&id"], DER)],
                ),
                new Attribute(
                    selat.organizationalUnitName["&id"],
                    [_encodeUTF8String(dept_name, DER)],
                ),
            ];
            const arg = createAddEntryArgument(dn, attributes);
            await idempotentAddEntry(ctx, conn, `C=US,O=Government,OU=${dept_name}`, arg);
        }
        {
            const secretary_name = dept[1];
            const secretary_surname = secretary_name.split(" ").pop()!;
            const secretary_rdn: RelativeDistinguishedName = [
                new AttributeTypeAndValue(
                    selat.commonName["&id"]!,
                    _encodeUTF8String(secretary_name, DER),
                ),
            ];
            const dn: DistinguishedName = [
                ...baseObject,
                gov_rdn,
                dept_rdn,
                secretary_rdn,
            ];
            const attributes: Attribute[] = [
                new Attribute(
                    selat.objectClass["&id"],
                    [_encodeObjectIdentifier(seloc.person["&id"], DER)],
                ),
                new Attribute(
                    selat.commonName["&id"],
                    [_encodeUTF8String(secretary_name, DER)],
                ),
                new Attribute(
                    selat.surname["&id"],
                    [_encodeUTF8String(secretary_surname, DER)],
                ),
                new Attribute(
                    selat.hierarchyParent["&id"],
                    [_encode_DistinguishedName([ ...baseObject, gov_rdn, cn_rdn("Patty Murray") ], DER)],
                ),
            ];
            const arg = createAddEntryArgument(dn, attributes);
            await idempotentAddEntry(ctx, conn, `C=US,O=Government,OU=${dept_name},CN=${secretary_name}`, arg);
        }
    }

    const dod_persons: [ string, string, DistinguishedName ][] = [
        [ "Kathleen Hicks", "Hicks", [ ...baseObject, gov_rdn, dod_rdn, cn_rdn("Lloyd Austin") ] ],
        [ "Avril Haines", "Haines", [ ...baseObject, gov_rdn, dod_rdn, cn_rdn("Kathleen Hicks") ] ],
        [ "Mark Milley", "Milley", [ ...baseObject, gov_rdn, dod_rdn, cn_rdn("Kathleen Hicks") ] ],
        [ "Christopher Grady", "Grady", [ ...baseObject, gov_rdn, dod_rdn, cn_rdn("Mark Milley") ] ],
    ];
    for (const dod_person of dod_persons) {
        const name = dod_person[0];
        const surname = dod_person[1];
        const rdn: RelativeDistinguishedName = [
            new AttributeTypeAndValue(
                selat.commonName["&id"]!,
                _encodeUTF8String(name, DER),
            ),
        ];
        const dn: DistinguishedName = [
            ...baseObject,
            gov_rdn,
            dod_rdn,
            rdn,
        ];
        const attributes: Attribute[] = [
            new Attribute(
                selat.objectClass["&id"],
                [_encodeObjectIdentifier(seloc.person["&id"], DER)],
            ),
            new Attribute(
                selat.commonName["&id"],
                [_encodeUTF8String(name, DER)],
            ),
            new Attribute(
                selat.surname["&id"],
                [_encodeUTF8String(surname, DER)],
            ),
            new Attribute(
                selat.hierarchyParent["&id"],
                [_encode_DistinguishedName(dod_person[2], DER)],
            ),
        ];
        const arg = createAddEntryArgument(dn, attributes);
        await idempotentAddEntry(ctx, conn, `C=US,O=Government,OU=Dept. of Defense,CN=${name}`, arg);
    }

    const joe_biden_devices: string[] = [
        "iPhone 1",
        "Android 1",
        "Windows Phone",
        "Gaming Desktop",
        "Tamagotchi",
    ];
    const joe_gaming_processes: string[] = [
        "Antivirus",
        "Discord",
    ];
    for (const dev of joe_biden_devices) {
        await idempotentAddEntry(
            ctx,
            conn,
            `C=US,O=Government,CN=Joseph R. Biden,CN=${dev}`,
            get_child_device(jb_dn, dev),
        );
    }
    for (const proc of joe_gaming_processes) {
        const dev_dn: DistinguishedName = [ ...jb_dn, cn_rdn("Gaming Desktop") ];
        await idempotentAddEntry(
            ctx,
            conn,
            `C=US,O=Government,CN=Joseph R. Biden,CN=Gaming Desktop,CN=${proc}`,
            get_child_ap(dev_dn, proc),
        );
    }

    const kamala_harris_devices: string[] = [
        "Gaming Desktop",
        "Even Bigger Gaming Desktop",
        "Oculus Rift",
        "Tamagotchi",
    ];
    const kamala_gaming_processes: string[] = [
        "Discord",
    ];
    for (const dev of kamala_harris_devices) {
        await idempotentAddEntry(
            ctx,
            conn,
            `C=US,O=Government,CN=Kamala Harris,CN=${dev}`,
            get_child_device(kh_dn, dev),
        );
    }
    for (const proc of kamala_gaming_processes) {
        const dev_dn: DistinguishedName = [ ...kh_dn, cn_rdn("Gaming Desktop") ];
        await idempotentAddEntry(
            ctx,
            conn,
            `C=US,O=Government,CN=Kamala Harris,CN=Gaming Desktop,CN=${proc}`,
            get_child_ap(dev_dn, proc),
        );
    }
}

export default seedUS;
