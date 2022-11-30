/* eslint-disable */
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta';
import { boolean_ } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/boolean.oa';
import { booleanMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/booleanMatch.oa';
import { BOOLEAN } from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import { id_at_pwdReset } from '../LDAPPasswordPolicy/id-at-pwdReset.va';
export { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
export { SYNTAX_NAME } from '@wildboar/x500/src/lib/modules/InformationFramework/SYNTAX-NAME.oca';
export { boolean_ } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/boolean.oa';
export { booleanMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/booleanMatch.oa';
export { id_at_pwdReset } from '../LDAPPasswordPolicy/id-at-pwdReset.va';

/* START_OF_SYMBOL_DEFINITION pwdReset */
/**
 * @summary pwdReset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdReset ATTRIBUTE ::= {
 *     WITH SYNTAX                 BOOLEAN
 *     EQUALITY MATCHING RULE         booleanMatch
 *     SINGLE VALUE                TRUE
 *     LDAP-SYNTAX                 boolean.&id
 *     LDAP-NAME                     {"pwdReset"}
 *     LDAP-DESC                   "The indication that the password has been reset"
 *     ID                          id-at-pwdReset
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<BOOLEAN>}
 * @implements {ATTRIBUTE<BOOLEAN>}
 */
export const pwdReset: ATTRIBUTE<BOOLEAN> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': $._decodeBoolean,
    },
    encoderFor: {
        '&Type': $._encodeBoolean,
    },
    '&equality-match': booleanMatch /* OBJECT_FIELD_SETTING */,
    '&single-valued': true /* OBJECT_FIELD_SETTING */,
    '&ldapSyntax': boolean_['&id'] /* OBJECT_FIELD_SETTING */,
    '&ldapName': ['pwdReset'] /* OBJECT_FIELD_SETTING */,
    '&ldapDesc':
        'The indication that the password has been reset' /* OBJECT_FIELD_SETTING */,
    '&id': id_at_pwdReset /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective':
        false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification':
        false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage':
        userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdReset */

/* eslint-enable */
