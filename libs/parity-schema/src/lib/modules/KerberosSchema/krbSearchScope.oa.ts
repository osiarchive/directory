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
import { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca";
export { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca";
import { MATCHING_RULE } from "@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca";
export { MATCHING_RULE } from "@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca";
import { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta";
export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta";
import { SYNTAX_NAME } from "@wildboar/x500/src/lib/modules/InformationFramework/SYNTAX-NAME.oca";
export { SYNTAX_NAME } from "@wildboar/x500/src/lib/modules/InformationFramework/SYNTAX-NAME.oca";
import { SearchScope, SearchScope_oneLevel /* IMPORTED_LONG_NAMED_INTEGER */, oneLevel /* IMPORTED_SHORT_NAMED_INTEGER */, SearchScope_subtree /* IMPORTED_LONG_NAMED_INTEGER */, subtree /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SearchScope, _encode_SearchScope } from "../KerberosSchema/SearchScope.ta";
export { SearchScope, SearchScope_oneLevel /* IMPORTED_LONG_NAMED_INTEGER */, oneLevel /* IMPORTED_SHORT_NAMED_INTEGER */, SearchScope_subtree /* IMPORTED_LONG_NAMED_INTEGER */, subtree /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SearchScope, _encode_SearchScope } from "../KerberosSchema/SearchScope.ta";
import { integerMatch } from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa";
export { integerMatch } from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa";
import { integer } from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integer.oa";
export { integer } from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integer.oa";
import { id_at } from "../KerberosSchema/id-at.va";
export { id_at } from "../KerberosSchema/id-at.va";


/* START_OF_SYMBOL_DEFINITION krbSearchScope */
/**
 * @summary krbSearchScope
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * krbSearchScope ATTRIBUTE ::= {
 *     WITH SYNTAX                 SearchScope
 *     EQUALITY MATCHING RULE         integerMatch
 *     LDAP-SYNTAX                 integer.&id
 *     LDAP-NAME                     {"krbSearchScope"}
 *     LDAP-DESC                   "This attribute holds the scope for searching the principals"
 *     ID                          { id-at 25 1 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<SearchScope>}
 * @implements {ATTRIBUTE<SearchScope>}
 */
export
const krbSearchScope: ATTRIBUTE<SearchScope> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SearchScope,
    },
    encoderFor: {
        "&Type": _encode_SearchScope,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["krbSearchScope"] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "This attribute holds the scope for searching the principals" /* OBJECT_FIELD_SETTING */,
    "&id": new _OID([25, 1,], id_at) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION krbSearchScope */

/* eslint-enable */
