import {
    Versions,
    Versions_v1,
    Versions_v2,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/Versions.ta";
import { TRUE_BIT } from "asn1-ts";

/**
 * @summary Versions of the Directory Operational Binding Management Protocol supported by Meerkat DSA.
 * @description
 *
 * The versions of the Directory Operational Binding Management Protocol (DOP)
 * supported by Meerkat DSA. Forms part of the `DSABindResult`.
 *
 * @constant
 */
export
const versions: Versions = new Uint8ClampedArray(2);
versions[Versions_v1] = TRUE_BIT;
versions[Versions_v2] = TRUE_BIT;

export default versions;
