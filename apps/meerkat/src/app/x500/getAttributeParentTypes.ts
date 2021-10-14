import type { Context } from "@wildboar/meerkat-types";
import type {
    AttributeType,
} from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeType.ta";

// TODO: Not used anywhere.
export
function *getAttributeParentTypes (
    ctx: Context,
    type_: AttributeType,
): IterableIterator<AttributeType> {
    yield type_;
    let current: AttributeType | undefined = type_;
    while (current) {
        const spec = ctx.attributes.get(current.toString());
        if (!spec?.parent) {
            return;
        }
        yield spec.parent;
        current = spec.parent;
    }
}

export default getAttributeParentTypes;
