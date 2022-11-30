/* eslint-disable */
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca';
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta';
import { ObjectIdentifier as _OID } from 'asn1-ts';
import { ads_base } from '../ApacheDirectoryConfig/ads-base.oa';
import { ads_ntlmMechProvider } from '../ApacheDirectoryConfig/ads-ntlmMechProvider.oa';
import { ads_saslMechClassName } from '../ApacheDirectoryConfig/ads-saslMechClassName.oa';
import { ads_saslMechName } from '../ApacheDirectoryConfig/ads-saslMechName.oa';
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
export { ads_base } from '../ApacheDirectoryConfig/ads-base.oa';
export { ads_ntlmMechProvider } from '../ApacheDirectoryConfig/ads-ntlmMechProvider.oa';
export { ads_saslMechClassName } from '../ApacheDirectoryConfig/ads-saslMechClassName.oa';
export { ads_saslMechName } from '../ApacheDirectoryConfig/ads-saslMechName.oa';

/* START_OF_SYMBOL_DEFINITION ads_saslMechHandler */
/**
 * @summary ads_saslMechHandler
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ads-saslMechHandler OBJECT-CLASS ::= {
 *     SUBCLASS OF     {ads-base}
 *     MUST CONTAIN    {ads-saslMechName | ads-saslMechClassName}
 *     MAY CONTAIN     {ads-ntlmMechProvider}
 *     LDAP-NAME       {"ads-saslMechHandler"}
 *     LDAP-DESC       "SASL mechanism handler"
 *     ID              { 1 3 6 1 4 1 18060 0 4 1 3 801 }
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const ads_saslMechHandler: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [ads_base] /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        ads_saslMechName,
        ads_saslMechClassName,
    ] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [ads_ntlmMechProvider] /* OBJECT_FIELD_SETTING */,
    '&ldapName': ['ads-saslMechHandler'] /* OBJECT_FIELD_SETTING */,
    '&ldapDesc': 'SASL mechanism handler' /* OBJECT_FIELD_SETTING */,
    '&id': new _OID([
        1, 3, 6, 1, 4, 1, 18060, 0, 4, 1, 3, 801,
    ]) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&kind': structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ads_saslMechHandler */

/* eslint-enable */
