import type { Context } from "@wildboar/meerkat-types";
import type { ASN1Element, OBJECT_IDENTIFIER } from "asn1-ts";
import stringifyLDAPDN from "@wildboar/ldap/src/lib/stringifiers/RDNSequence";
import type {
    DistinguishedName,
} from "@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta";

export
function stringifyDN (
    ctx: Context,
    dn: DistinguishedName,
): string {
    return stringifyLDAPDN(dn
        .map((rdn) => rdn
            .map((atav) => [ atav.type_, atav.value ])),
        (syntax: OBJECT_IDENTIFIER) => {
            const attrSpec = ctx.attributes.get(syntax.toString());
            if (!attrSpec?.ldapSyntax) {
                return undefined;
            }
            const ldapSyntax = ctx.ldapSyntaxes.get(attrSpec.ldapSyntax.toString());
            if (!ldapSyntax?.encoder) {
                return undefined;
            }
            const encoder = ldapSyntax.encoder;
            return (value: ASN1Element): string => Buffer.from(encoder(value)).toString("utf-8");
        },
        (type: OBJECT_IDENTIFIER) => {
            const attrSpec = ctx.attributes.get(type.toString());
            return attrSpec?.ldapNames?.[0];
        },
    );
}

export default stringifyDN;
