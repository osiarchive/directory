/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from 'asn1-ts';
import { id_package } from '../IN-CS3-object-identifiers/id-package.va';
export { id_package } from '../IN-CS3-object-identifiers/id-package.va';

/* START_OF_SYMBOL_DEFINITION id_package_serviceManagementActivate */
/**
 * @summary id_package_serviceManagementActivate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-serviceManagementActivate OBJECT IDENTIFIER ::= {id-package serviceManagementActivate(30)}
 * ```
 *
 * @constant
 */
export const id_package_serviceManagementActivate: OBJECT_IDENTIFIER = new _OID(
    [/* serviceManagementActivate */ 30],
    id_package
);
/* END_OF_SYMBOL_DEFINITION id_package_serviceManagementActivate */

/* eslint-enable */
