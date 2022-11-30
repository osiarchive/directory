/* eslint-disable */
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca';
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta';
import { top } from '@wildboar/x500/src/lib/modules/InformationFramework/top.oa';
import { commonName } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/commonName.oa';
import { description } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/description.oa';
import { ObjectIdentifier as _OID } from 'asn1-ts';
import { id_nis_oc } from '../NIS/id-nis-oc.va';
import { memberNisNetgroup } from '../NIS/memberNisNetgroup.oa';
import { nisNetgroupTriple } from '../NIS/nisNetgroupTriple.oa';
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
export { commonName } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/commonName.oa';
export { description } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/description.oa';
export { id_nis_oc } from '../NIS/id-nis-oc.va';
export { memberNisNetgroup } from '../NIS/memberNisNetgroup.oa';
export { nisNetgroupTriple } from '../NIS/nisNetgroupTriple.oa';

/* START_OF_SYMBOL_DEFINITION nisNetgroup */
/**
 * @summary nisNetgroup
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nisNetgroup OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            structural
 *     MUST CONTAIN    {commonName}
 *     MAY CONTAIN        {
 *         nisNetgroupTriple
 *         | memberNisNetgroup
 *         | description
 *     }
 *     LDAP-NAME        {"nisNetgroup"}
 *     LDAP-DESC        "Abstraction of a netgroup"
 *     ID                { id-nis-oc 8 }
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const nisNetgroup: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [top] /* OBJECT_FIELD_SETTING */,
    '&kind': structural /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [commonName] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [
        nisNetgroupTriple,
        memberNisNetgroup,
        description,
    ] /* OBJECT_FIELD_SETTING */,
    '&ldapName': ['nisNetgroup'] /* OBJECT_FIELD_SETTING */,
    '&ldapDesc': 'Abstraction of a netgroup' /* OBJECT_FIELD_SETTING */,
    '&id': new _OID(
        [8],
        id_nis_oc
    ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION nisNetgroup */

/* eslint-enable */
