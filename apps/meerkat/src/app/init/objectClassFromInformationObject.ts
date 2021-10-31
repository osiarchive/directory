import {
    OBJECT_CLASS,
} from "@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca";
import {
    ObjectClassKind_structural,
} from "@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta";
import {
    ObjectClassInfo,
} from "@wildboar/meerkat-types";

export
function objectClassFromInformationObject (io: OBJECT_CLASS): ObjectClassInfo {
    return {
        id: io["&id"],
        superclasses: new Set(io["&Superclasses"]?.map((sc) => sc["&id"].toString()) ?? []),
        kind: io["&kind"] ?? ObjectClassKind_structural,
        mandatoryAttributes: new Set(
            io["&MandatoryAttributes"]
                ? io["&MandatoryAttributes"].map((attr) => attr["&id"]?.toString() ?? "")
                : [],
        ),
        optionalAttributes: new Set(
            io["&OptionalAttributes"]
                ? io["&OptionalAttributes"].map((attr) => attr["&id"]?.toString() ?? "")
                : [],
        ),
        ldapNames: io["&ldapName"],
        ldapDescription: io["&ldapDesc"],
    };
}

export default objectClassFromInformationObject;
