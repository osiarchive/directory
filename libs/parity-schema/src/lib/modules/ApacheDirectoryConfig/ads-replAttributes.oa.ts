/* eslint-disable */
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta';
import { caseExactOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/caseExactOrderingMatch.oa';
import { caseIgnoreIA5Match } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/caseIgnoreIA5Match.oa';
import { caseIgnoreIA5SubstringsMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/caseIgnoreIA5SubstringsMatch.oa';
import { directoryString } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/directoryString.oa';
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/UnboundedDirectoryString.ta';
import { ObjectIdentifier as _OID } from 'asn1-ts';
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
export { caseExactOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/caseExactOrderingMatch.oa';
export { caseIgnoreIA5Match } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/caseIgnoreIA5Match.oa';
export { caseIgnoreIA5SubstringsMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/caseIgnoreIA5SubstringsMatch.oa';
export { directoryString } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/directoryString.oa';
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/UnboundedDirectoryString.ta';

/* START_OF_SYMBOL_DEFINITION ads_replAttributes */
/**
 * @summary ads_replAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ads-replAttributes ATTRIBUTE ::= {
 *     WITH SYNTAX                 UnboundedDirectoryString
 *     EQUALITY MATCHING RULE      caseIgnoreIA5Match
 *     ORDERING MATCHING RULE      caseExactOrderingMatch
 *     SUBSTRINGS MATCHING RULE    caseIgnoreIA5SubstringsMatch
 *     LDAP-SYNTAX                 directoryString.&id
 *     LDAP-NAME                   {"ads-replAttributes"}
 *     LDAP-DESC                   "the attributes to be replicated"
 *     ID                          { 1 3 6 1 4 1 18060 0 4 1 2 828 }
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<UnboundedDirectoryString>}
 * @implements {ATTRIBUTE<UnboundedDirectoryString>}
 */
export const ads_replAttributes: ATTRIBUTE<UnboundedDirectoryString> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        '&Type': _encode_UnboundedDirectoryString,
    },
    '&equality-match': caseIgnoreIA5Match /* OBJECT_FIELD_SETTING */,
    '&ordering-match': caseExactOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&substrings-match':
        caseIgnoreIA5SubstringsMatch /* OBJECT_FIELD_SETTING */,
    '&ldapSyntax': directoryString['&id'] /* OBJECT_FIELD_SETTING */,
    '&ldapName': ['ads-replAttributes'] /* OBJECT_FIELD_SETTING */,
    '&ldapDesc': 'the attributes to be replicated' /* OBJECT_FIELD_SETTING */,
    '&id': new _OID([
        1, 3, 6, 1, 4, 1, 18060, 0, 4, 1, 2, 828,
    ]) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&single-valued':
        false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&collective':
        false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification':
        false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage':
        userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ads_replAttributes */

/* eslint-enable */
