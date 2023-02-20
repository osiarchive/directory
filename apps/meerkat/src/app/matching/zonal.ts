import type { Context } from "@wildboar/meerkat-types";
import { DER } from "asn1-ts/dist/node/functional";
import { directoryStringToString } from "@wildboar/ldap/src/lib/syntaxEncoders";
import type {
    Filter,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/Filter.ta";
import {
    FilterItem,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/FilterItem.ta";
import type { DistinguishedName } from "@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta";
import {
    AttributeValueAssertion,
} from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeValueAssertion.ta";
import {
    countryCode3c,
    countryCode3n,
    countryName,
    localityName,
    postalCode,
    stateOrProvinceName,
} from "@wildboar/x500/src/lib/collections/attributes";
import getAttributeParentTypes from "../x500/getAttributeParentTypes";

interface PostalZoneMatchProperties {
    c2c: string;
    c3c: string;
    c3n: number;
    st: string;
    locality: string;
    postal_codes?: string[];
    unmappable: boolean; // This can happen if there are multiple country names, states, etc.
}

// postalZonalMatch ZONAL-MATCHING ::= {
//     SELECT BY           { id-at-countryName | id-at-stateOrProvinceName | id-at-localityName }
//     APPLICABLE TO       { localityName }
//     SUBTYPES INCLUDED   TRUE
//     COMBINABLE          TRUE
//     USER CONTROL        TRUE
//     EXCLUSIVE           TRUE
//     MATCHING RULE       zonalMatch.&id
//     ID                  id-zmr-postalZonalMatch
// }
async function extract_zone_info (
    ctx: Context,
    info_from_target_dn: Partial<PostalZoneMatchProperties>,
    item: FilterItem,
    postal: Partial<PostalZoneMatchProperties> = {},
    level: number,
): Promise<void> {
    if ("equality" in item) {
        if (item.equality.type_.isEqualTo(countryName["&id"])) {
            if (postal.c2c) {
                postal.unmappable = true;
                return;
            }
            postal.c2c = item.equality.assertion.printableString;
        }
        else if (item.equality.type_.isEqualTo(countryCode3c["&id"])) {
            if (postal.c3c) {
                postal.unmappable = true;
                return;
            }
            postal.c3c = item.equality.assertion.printableString;
            // TODO: Use this to lookup the correct 2-character code
        }
        else if (item.equality.type_.isEqualTo(countryCode3n["&id"])) {
            if (postal.c3n) {
                postal.unmappable = true;
                return;
            }
            postal.c3n = Number.parseInt(item.equality.assertion.numericString, 10);
            // TODO: Use this to lookup the correct 2-character code
        }
        else if (item.equality.type_.isEqualTo(stateOrProvinceName["&id"])) {
            if (postal.st) {
                postal.unmappable = true;
                return;
            }
            postal.st = directoryStringToString(item.equality.assertion);
        }
        else if (item.equality.type_.isEqualTo(localityName["&id"])) {
            if (postal.locality) {
                postal.unmappable = true;
                return;
            }
            postal.locality = directoryStringToString(item.equality.assertion);
        }
        else if (item.equality.type_.isEqualTo(postalCode["&id"])) {
            // If postal code is already present, we don't want to map to more unrelated postal codes.
            postal.unmappable = true;
        }

        const enough_information: boolean = !!(
            (info_from_target_dn.c2c || postal.c2c)
            && (info_from_target_dn.st || postal.st)
            && postal.locality
        );
        if (!postal.postal_codes && enough_information) {
            const pc_rows = await ctx.db.postalCodesGazetteEntry.findMany({
                where: {
                    c2c: info_from_target_dn.c2c || postal.c2c,
                    st: info_from_target_dn.st || postal.st,
                    locality: postal.locality,
                },
                select: {
                    id: true,
                    postal_code: true,
                },
            });
            const postal_codes = pc_rows.map((r) => r.postal_code);
            if (level <= 0) { // This mapping-based-matching does not support tightening.
                postal.postal_codes = postal_codes;
            } else {
                // -- Translates C,ST,L to postal codes
                // -- Get diagonal length of region (D)
                // -- Radius (R) is D / 2
                // -- Extended area = X
                // -- Find all postal codes within D + ... + (D / X-1) + (D / X)
                const bp_rows = await ctx.db.postalCodeBoundaryPoints.findMany({
                    where: {
                        postal_code_id: {
                            in: pc_rows.map((r) => r.id),
                        },
                    },
                    select: {
                        northing: true,
                        easting: true,
                    },
                    orderBy: [
                        {
                            northing: "asc",
                        },
                    ],
                });
                if (bp_rows.length <= 2) {
                    postal.postal_codes = postal_codes;
                    return;
                }
                const sorted_by_easting_asc = [ ...bp_rows ].sort((a, b) => a.easting - b.easting);
                const southest = bp_rows[0];
                const northest = bp_rows[bp_rows.length - 1];
                const eastest = sorted_by_easting_asc[0];
                const westest = sorted_by_easting_asc[sorted_by_easting_asc.length];
                const diag_len = Math.sqrt(
                    Math.pow((northest.northing - southest.northing), 2)
                    + Math.pow((eastest.easting - westest.easting), 2)
                );
                const radius0 = Math.floor(diag_len / 2);
                let radius = radius0;

                for (let i = 1; i <= level; i++) {
                    radius += (radius0 / i);
                }

                const northern_bound = northest.northing + radius;
                const southern_bound = southest.northing - radius;
                const eastern_bound = eastest.easting + radius;
                const western_bound = westest.easting - radius;
                const selection_rows = await ctx.db.postalCodesGazetteEntry.findMany({
                    where: {
                        c2c: postal.c2c,
                        PostalCodeBoundaryPoints: {
                            some: {
                                AND: [
                                    {
                                        northing: {
                                            gte: southern_bound,
                                        },
                                    },
                                    {
                                        northing: {
                                            lte: northern_bound,
                                        },
                                    },
                                    {
                                        easting: {
                                            gte: western_bound,
                                        },
                                    },
                                    {
                                        easting: {
                                            lte: eastern_bound,
                                        },
                                    },
                                ],
                            },
                        },
                    },
                    select: {
                        postal_code: true,
                    },
                });
                const selections = selection_rows.map((r) => r.postal_code);
                postal.postal_codes = selections;
            }
        }
    }
}

function replace_with_postal_codes (
    ctx: Context,
    filter: Filter,
    postal_codes: string[],
): Filter {
    if (!postal_codes.length) {
        return filter;
    }
    if ("item" in filter) {
        if ("equality" in filter.item) {
            const type_ = filter.item.equality.type_;
            for (const supertype of getAttributeParentTypes(ctx, filter.item.equality.type_)) {
                if (supertype.isEqualTo(localityName["&id"])) {
                    return {
                        or: postal_codes.map((pc): Filter => ({
                            item: {
                                equality: new AttributeValueAssertion(
                                    type_,
                                    postalCode.encoderFor["&Type"]!({ uTF8String: pc }, DER),
                                ),
                            },
                        })),
                    };
                }
            }
        }
    }
    return filter;
}

async function zonal_map_filter (
    ctx: Context,
    info_from_target_dn: Partial<PostalZoneMatchProperties>,
    filter: Filter,
    postal: Partial<PostalZoneMatchProperties>,
    negated: boolean,
    level: number,
): Promise<Filter> {
    // If item, check if postal code has been determined and if item type is localityName. If so, replace.
    // If and, iterate over each, populating postal properties. If, at the end, postal properties is completed, recurse and replace.
    // If or, treat each subfilter like a brand new filter.
    // If not, recurse, but invert the relaxation / tightening.

    if (!negated && "item" in filter) {
        await extract_zone_info(ctx, info_from_target_dn, filter.item, postal, level);
        return filter;
    } else if (!negated && "and" in filter) {
        for (const sub of filter.and) {
            await zonal_map_filter(ctx, info_from_target_dn, sub, postal, negated, level);
        }
        if (!postal.unmappable && postal.postal_codes?.length) {
            return replace_with_postal_codes(ctx, filter, postal.postal_codes);
        }
        return filter;
    } else if (!negated && "or" in filter) {
        return {
            or: await Promise.all(
                filter.or.map((f) => zonal_map_filter(ctx, info_from_target_dn, f, {}, negated, level))),
        };
    } else if ("not" in filter) {
        return {
            not: await zonal_map_filter(ctx, info_from_target_dn, filter.not, {}, !negated, level),
        };
    } else {
        return filter;
    }
}

function getPostalPropertiesFromDN (dn: DistinguishedName): Partial<PostalZoneMatchProperties> {
    let c: string | undefined;
    let st: string | undefined;
    for (const rdn of [ ...dn ].reverse()) { // Reverse so we give overwriting priority to "higher" RDNs.
        for (const atav of rdn) {
            if (atav.type_.isEqualTo(countryName["&id"])) {
                c = atav.value.printableString;
            }
            else if (atav.type_.isEqualTo(stateOrProvinceName["&id"])) {
                st = directoryStringToString(atav.value);
            }
        }
    }
    return {
        c2c: c,
        st,
    };
}

export async function mapFilterForPostalZonalMatch (
    ctx: Context,
    target_object: DistinguishedName,
    filter: Filter,
    level: number,
): Promise<Filter> {
    return zonal_map_filter(
        ctx,
        getPostalPropertiesFromDN(target_object),
        filter,
        {},
        false,
        level,
    );
}
