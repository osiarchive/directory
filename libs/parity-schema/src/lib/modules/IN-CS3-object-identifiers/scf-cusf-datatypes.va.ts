/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from 'asn1-ts';
import { modules } from '../IN-CS3-object-identifiers/modules.va';
export { modules } from '../IN-CS3-object-identifiers/modules.va';

/* START_OF_SYMBOL_DEFINITION scf_cusf_datatypes */
/**
 * @summary scf_cusf_datatypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * scf-cusf-datatypes OBJECT IDENTIFIER ::= {modules in-cs3-scf-cusf-datatypes(24) version1(0)}
 * ```
 *
 * @constant
 */
export const scf_cusf_datatypes: OBJECT_IDENTIFIER = new _OID(
    [/* in-cs3-scf-cusf-datatypes */ 24, /* version1 */ 0],
    modules
);
/* END_OF_SYMBOL_DEFINITION scf_cusf_datatypes */

/* eslint-enable */
