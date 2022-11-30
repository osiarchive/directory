/* eslint-disable */
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca';
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta';
import { top } from '@wildboar/x500/src/lib/modules/InformationFramework/top.oa';
import { ObjectIdentifier as _OID } from 'asn1-ts';
import { id_uddi } from '../UDDI-Schema/id-uddi.va';
import { uddiAuthorizedName } from '../UDDI-Schema/uddiAuthorizedName.oa';
import { uddiBusinessKey } from '../UDDI-Schema/uddiBusinessKey.oa';
import { uddiCategoryBag } from '../UDDI-Schema/uddiCategoryBag.oa';
import { uddiDescription } from '../UDDI-Schema/uddiDescription.oa';
import { uddiDiscoveryURLs } from '../UDDI-Schema/uddiDiscoveryURLs.oa';
import { uddiIdentifierBag } from '../UDDI-Schema/uddiIdentifierBag.oa';
import { uddiName } from '../UDDI-Schema/uddiName.oa';
import { uddiOperator } from '../UDDI-Schema/uddiOperator.oa';
import { uddiv3BusinessKey } from '../UDDI-Schema/uddiv3BusinessKey.oa';
import { uddiv3DigitalSignature } from '../UDDI-Schema/uddiv3DigitalSignature.oa';
import { uddiv3EntityModificationTime } from '../UDDI-Schema/uddiv3EntityModificationTime.oa';
import { uddiv3NodeId } from '../UDDI-Schema/uddiv3NodeId.oa';
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
export { id_uddi } from '../UDDI-Schema/id-uddi.va';
export { uddiAuthorizedName } from '../UDDI-Schema/uddiAuthorizedName.oa';
export { uddiBusinessKey } from '../UDDI-Schema/uddiBusinessKey.oa';
export { uddiCategoryBag } from '../UDDI-Schema/uddiCategoryBag.oa';
export { uddiDescription } from '../UDDI-Schema/uddiDescription.oa';
export { uddiDiscoveryURLs } from '../UDDI-Schema/uddiDiscoveryURLs.oa';
export { uddiIdentifierBag } from '../UDDI-Schema/uddiIdentifierBag.oa';
export { uddiName } from '../UDDI-Schema/uddiName.oa';
export { uddiOperator } from '../UDDI-Schema/uddiOperator.oa';
export { uddiv3BusinessKey } from '../UDDI-Schema/uddiv3BusinessKey.oa';
export { uddiv3DigitalSignature } from '../UDDI-Schema/uddiv3DigitalSignature.oa';
export { uddiv3EntityModificationTime } from '../UDDI-Schema/uddiv3EntityModificationTime.oa';
export { uddiv3NodeId } from '../UDDI-Schema/uddiv3NodeId.oa';

/* START_OF_SYMBOL_DEFINITION uddiBusinessEntity */
/**
 * @summary uddiBusinessEntity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uddiBusinessEntity OBJECT-CLASS ::= {
 *     SUBCLASS OF     { top }
 *     KIND            structural
 *     MUST CONTAIN    {uddiBusinessKey | uddiName}
 *     MAY CONTAIN     {
 *         uddiAuthorizedName
 *         | uddiOperator
 *         | uddiDiscoveryURLs
 *         | uddiDescription
 *         | uddiIdentifierBag
 *         | uddiCategoryBag
 *         | uddiv3BusinessKey
 *         | uddiv3DigitalSignature
 *         | uddiv3EntityModificationTime
 *         | uddiv3NodeId
 *     }
 *     LDAP-NAME       {"uddiBusinessEntity"}
 *     ID              { id-uddi 6 1 } }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const uddiBusinessEntity: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [top] /* OBJECT_FIELD_SETTING */,
    '&kind': structural /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        uddiBusinessKey,
        uddiName,
    ] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [
        uddiAuthorizedName,
        uddiOperator,
        uddiDiscoveryURLs,
        uddiDescription,
        uddiIdentifierBag,
        uddiCategoryBag,
        uddiv3BusinessKey,
        uddiv3DigitalSignature,
        uddiv3EntityModificationTime,
        uddiv3NodeId,
    ] /* OBJECT_FIELD_SETTING */,
    '&ldapName': ['uddiBusinessEntity'] /* OBJECT_FIELD_SETTING */,
    '&id': new _OID(
        [6, 1],
        id_uddi
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uddiBusinessEntity */

/* eslint-enable */
