/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { MATCHING_RULE } from "@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca";
export { MATCHING_RULE } from "@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca";
import { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca";
export { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca";
import { SYNTAX_NAME } from "@wildboar/x500/src/lib/modules/InformationFramework/SYNTAX-NAME.oca";
export { SYNTAX_NAME } from "@wildboar/x500/src/lib/modules/InformationFramework/SYNTAX-NAME.oca";
import { null_ } from "../RFC3687ComponentMatching/null.oa";
export { null_ } from "../RFC3687ComponentMatching/null.oa";
import { id_mr_presentMatch } from "../RFC3687ComponentMatching/id-mr-presentMatch.va";
export { id_mr_presentMatch } from "../RFC3687ComponentMatching/id-mr-presentMatch.va";


/* START_OF_SYMBOL_DEFINITION presentMatch */
/**
 * @summary presentMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * presentMatch MATCHING-RULE ::= {
 *     SYNTAX                  NULL
 *     LDAP-SYNTAX             null.&id
 *     LDAP-NAME               {"presentMatch"}
 *     ID                      id-mr-presentMatch
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<NULL>}
 * @implements {MATCHING_RULE<NULL>}
 */
export
const presentMatch: MATCHING_RULE<NULL> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeNull,
    },
    encoderFor: {
        "&AssertionType": $._encodeNull,
    },
    "&ldapSyntax": null_["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["presentMatch"] /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_presentMatch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION presentMatch */

/* eslint-enable */
