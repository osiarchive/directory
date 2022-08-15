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
import { id_ppolicy_at } from "../LDAPPasswordPolicy/id-ppolicy-at.va";
export { id_ppolicy_at } from "../LDAPPasswordPolicy/id-ppolicy-at.va";


/* START_OF_SYMBOL_DEFINITION id_at_pwdMinLength */
/**
 * @summary id_at_pwdMinLength
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-pwdMinLength              OBJECT IDENTIFIER ::= { id-ppolicy-at 6 }
 * ```
 * 
 * @constant
 */
export
const id_at_pwdMinLength: OBJECT_IDENTIFIER = new _OID([
    6,
], id_ppolicy_at);
/* END_OF_SYMBOL_DEFINITION id_at_pwdMinLength */

/* eslint-enable */
