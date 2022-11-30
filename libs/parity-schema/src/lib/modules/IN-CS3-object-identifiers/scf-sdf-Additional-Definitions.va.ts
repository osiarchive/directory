/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from 'asn1-ts';
import { modules } from '../IN-CS3-object-identifiers/modules.va';
export { modules } from '../IN-CS3-object-identifiers/modules.va';

/* START_OF_SYMBOL_DEFINITION scf_sdf_Additional_Definitions */
/**
 * @summary scf_sdf_Additional_Definitions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * scf-sdf-Additional-Definitions OBJECT IDENTIFIER ::= {modules in-cs3-scf-sdf-additional-definitions(28) version1(0)}
 * ```
 *
 * @constant
 */
export const scf_sdf_Additional_Definitions: OBJECT_IDENTIFIER = new _OID(
    [/* in-cs3-scf-sdf-additional-definitions */ 28, /* version1 */ 0],
    modules
);
/* END_OF_SYMBOL_DEFINITION scf_sdf_Additional_Definitions */

/* eslint-enable */
