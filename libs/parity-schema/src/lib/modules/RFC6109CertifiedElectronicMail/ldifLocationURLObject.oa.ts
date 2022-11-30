/* eslint-disable */
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca';
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta';
import { top } from '@wildboar/x500/src/lib/modules/InformationFramework/top.oa';
import { ObjectIdentifier as _OID } from 'asn1-ts';
import { ldifLocationURL } from '../RFC6109CertifiedElectronicMail/ldifLocationURL.oa';
export { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
export { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca';
export {
    abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind,
    ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
    _enum_for_ObjectClassKind,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta';
export { top } from '@wildboar/x500/src/lib/modules/InformationFramework/top.oa';
export { ldifLocationURL } from '../RFC6109CertifiedElectronicMail/ldifLocationURL.oa';

/* START_OF_SYMBOL_DEFINITION ldifLocationURLObject */
/**
 * @summary ldifLocationURLObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldifLocationURLObject OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MAY CONTAIN     {ldifLocationURL}
 *     LDAP-NAME       {"LDIFLocationURLObject"}
 *     ID              { 1 3 6 1 4 1 16572 2 1 1 }
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const ldifLocationURLObject: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [top] /* OBJECT_FIELD_SETTING */,
    '&kind': auxiliary /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [ldifLocationURL] /* OBJECT_FIELD_SETTING */,
    '&ldapName': ['LDIFLocationURLObject'] /* OBJECT_FIELD_SETTING */,
    '&id': new _OID([
        1, 3, 6, 1, 4, 1, 16572, 2, 1, 1,
    ]) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ldifLocationURLObject */

/* eslint-enable */
