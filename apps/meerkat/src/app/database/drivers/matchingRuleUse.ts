import type {
    Context,
    Vertex,
    Value,
    PendingUpdates,
    AttributeTypeDatabaseDriver,
    SpecialAttributeDatabaseReader,
    SpecialAttributeDatabaseEditor,
    SpecialAttributeDatabaseRemover,
    SpecialAttributeCounter,
    SpecialAttributeDetector,
    SpecialAttributeValueDetector,
} from "@wildboar/meerkat-types";
import { DER } from "asn1-ts/dist/node/functional";
import { matchingRuleUse } from "@wildboar/x500/src/lib/modules/SchemaAdministration/matchingRuleUse.oa";
import { subschema } from "@wildboar/x500/src/lib/modules/SchemaAdministration/subschema.oa";
import directoryStringToString from "@wildboar/x500/src/lib/stringifiers/directoryStringToString";
import readMatchingRuleUseDescriptions from "../readers/readMatchingRuleUseDescriptions";

const SUBSCHEMA: string = subschema["&id"].toString();

export
const readValues: SpecialAttributeDatabaseReader = async (
    ctx: Readonly<Context>,
    vertex: Vertex,
): Promise<Value[]> => {
    if (!vertex.dse.subentry || !vertex.dse.objectClass.has(SUBSCHEMA)) {
        return [];
    }
    return (await readMatchingRuleUseDescriptions(ctx, vertex.dse.id))
        .map((value) => ({
            type: matchingRuleUse["&id"],
            value: matchingRuleUse.encoderFor["&Type"]!(value, DER),
        }));
};

export
const addValue: SpecialAttributeDatabaseEditor = async (
    ctx: Readonly<Context>,
    vertex: Vertex,
    value: Value,
    pendingUpdates: PendingUpdates,
): Promise<void> => {
    const decoded = matchingRuleUse.decoderFor["&Type"]!(value.value);
    pendingUpdates.otherWrites.push(ctx.db.matchingRuleUse.upsert({
        where: {
            entry_id_identifier: {
                entry_id: vertex.dse.id,
                identifier: decoded.identifier.toString(),
            },
        },
        create: {
            entry_id: vertex.dse.id,
            identifier: decoded.identifier.toString(),
            name: decoded.name
                ? decoded.name
                    .map(directoryStringToString)
                    .map((str) => str.replace(/\|/g, ""))
                    .join("|")
                : null,
            description: decoded.description
                ? directoryStringToString(decoded.description)
                : undefined,
            obsolete: decoded.obsolete,
            information: decoded.information
                .map((oid) => oid.toString())
                .join(" "),
        },
        update: {
            name: decoded.name
                ? decoded.name
                    .map(directoryStringToString)
                    .map((str) => str.replace(/\|/g, ""))
                    .join("|")
                : null,
            description: decoded.description
                ? directoryStringToString(decoded.description)
                : undefined,
            obsolete: decoded.obsolete,
            information: decoded.information
                .map((oid) => oid.toString())
                .join(" "),
        },
    }));
    if (vertex.dse.subentry) {
        if (vertex.dse.subentry.matchingRuleUse) {
            vertex.dse.subentry.matchingRuleUse.push(decoded);
        } else {
            vertex.dse.subentry.matchingRuleUse = [ decoded ];
        }
    }
};

export
const removeValue: SpecialAttributeDatabaseEditor = async (
    ctx: Readonly<Context>,
    vertex: Vertex,
    value: Value,
    pendingUpdates: PendingUpdates,
): Promise<void> => {
    const decoded = matchingRuleUse.decoderFor["&Type"]!(value.value);
    pendingUpdates.otherWrites.push(ctx.db.matchingRuleUse.deleteMany({
        where: {
            entry_id: vertex.dse.id,
            identifier: decoded.identifier.toString(),
        },
    }));
};

export
const removeAttribute: SpecialAttributeDatabaseRemover = async (
    ctx: Readonly<Context>,
    vertex: Vertex,
    pendingUpdates: PendingUpdates,
): Promise<void> => {
    pendingUpdates.otherWrites.push(ctx.db.matchingRuleUse.deleteMany({
        where: {
            entry_id: vertex.dse.id,
        },
    }));
};

export
const countValues: SpecialAttributeCounter = async (
    ctx: Readonly<Context>,
    vertex: Vertex,
): Promise<number> => {
    return ctx.db.matchingRuleUse.count({
        where: {
            entry_id: vertex.dse.id,
        },
    });
};

export
const isPresent: SpecialAttributeDetector = async (
    ctx: Readonly<Context>,
    vertex: Vertex,
): Promise<boolean> => {
    return !!(await ctx.db.matchingRuleUse.findFirst({
        where: {
            entry_id: vertex.dse.id,
        },
    }));
};

export
const hasValue: SpecialAttributeValueDetector = async (
    ctx: Readonly<Context>,
    vertex: Vertex,
    value: Value,
): Promise<boolean> => {
    const decoded = matchingRuleUse.decoderFor["&Type"]!(value.value);
    return !!(await ctx.db.matchingRuleUse.findFirst({
        where: {
            entry_id: vertex.dse.id,
            identifier: decoded.identifier.toString(),
        },
    }));
};

export
const driver: AttributeTypeDatabaseDriver = {
    readValues,
    addValue,
    removeValue,
    removeAttribute,
    countValues,
    isPresent,
    hasValue,
};

export default driver;
