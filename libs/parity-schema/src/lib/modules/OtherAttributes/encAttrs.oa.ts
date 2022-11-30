/* eslint-disable */
import {
    ContentInfo,
    _decode_ContentInfo,
    _encode_ContentInfo,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/ContentInfo.ta';
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta';
import { ObjectIdentifier as _OID } from 'asn1-ts';
import { id_aca } from './id-aca.va';
export {
    ContentInfo,
    _decode_ContentInfo,
    _encode_ContentInfo,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/ContentInfo.ta';
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

/* START_OF_SYMBOL_DEFINITION encAttrs */
/**
 * @summary encAttrs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * encAttrs ATTRIBUTE ::= {
 *     WITH SYNTAX     ContentInfo
 *     ID              id-aca-encAttrs }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ContentInfo>}
 * @implements {ATTRIBUTE<ContentInfo>}
 */
export const encAttrs: ATTRIBUTE<ContentInfo> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ContentInfo,
    },
    encoderFor: {
        '&Type': _encode_ContentInfo,
    },
    '&id': new _OID(
        [6],
        id_aca
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
/* END_OF_SYMBOL_DEFINITION encAttrs */

/* eslint-enable */
