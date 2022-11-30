/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from 'asn1-ts';
import { id_package } from '../IN-CS3-object-identifiers/id-package.va';
export { id_package } from '../IN-CS3-object-identifiers/id-package.va';

/* START_OF_SYMBOL_DEFINITION id_package_scfActivation */
/**
 * @summary id_package_scfActivation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-scfActivation OBJECT IDENTIFIER ::= {id-package scfActivation(11)}
 * ```
 *
 * @constant
 */
export const id_package_scfActivation: OBJECT_IDENTIFIER = new _OID(
    [/* scfActivation */ 11],
    id_package
);
/* END_OF_SYMBOL_DEFINITION id_package_scfActivation */

/* eslint-enable */
