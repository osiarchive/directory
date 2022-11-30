/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from 'asn1-ts';
import { tables } from '../TableFramework/tables.va';
export { tables } from '../TableFramework/tables.va';

/* START_OF_SYMBOL_DEFINITION oc */
/**
 * @summary oc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oc OBJECT IDENTIFIER ::= {tables 1}
 * ```
 *
 * @constant
 */
export const oc: OBJECT_IDENTIFIER = new _OID([1], tables);
/* END_OF_SYMBOL_DEFINITION oc */

/* eslint-enable */
