/* eslint-disable */
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca';
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta';
import { id_precedingBlock } from '../OtherAttributes/id-precedingBlock.va';
import {
    HashPointer,
    _decode_HashPointer,
    _encode_HashPointer,
} from '../OtherAutomaticallyTaggedTypes/HashPointer.ta';
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
export { id_precedingBlock } from '../OtherAttributes/id-precedingBlock.va';
export {
    HashPointer,
    _decode_HashPointer,
    _encode_HashPointer,
} from '../OtherAutomaticallyTaggedTypes/HashPointer.ta';

/* START_OF_SYMBOL_DEFINITION precedingBlock */
/**
 * @summary precedingBlock
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * precedingBlock ATTRIBUTE ::= {
 *     WITH SYNTAX         HashPointer
 *     ID                  id-precedingBlock }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<HashPointer>}
 * @implements {ATTRIBUTE<HashPointer>}
 */
export const precedingBlock: ATTRIBUTE<HashPointer> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_HashPointer,
    },
    encoderFor: {
        '&Type': _encode_HashPointer,
    },
    '&id': id_precedingBlock /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
/* END_OF_SYMBOL_DEFINITION precedingBlock */

/* eslint-enable */
