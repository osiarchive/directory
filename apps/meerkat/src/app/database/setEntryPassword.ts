import type { Context, ClientAssociation, Vertex } from "@wildboar/meerkat-types";
import type { UserPwd } from "@wildboar/x500/src/lib/modules/PasswordPolicy/UserPwd.ta";
import encryptPassword from "../x500/encryptPassword";
import getScryptAlgorithmIdentifier from "../x500/getScryptAlgorithmIdentifier";
import { PrismaPromise } from "@prisma/client";
import anyPasswordsExist from "../authz/anyPasswordsExist";
import { DER, _encodeGeneralizedTime } from "asn1-ts/dist/node/functional";
import {
    pwdStartTime,
} from "@wildboar/x500/src/lib/modules/PasswordPolicy/pwdStartTime.oa";

export
async function setEntryPassword (
    ctx: Context,
    conn: ClientAssociation | undefined,
    vertex: Vertex,
    pwd: UserPwd,
): Promise<PrismaPromise<any>[]> {
    const entriesWithPasswordsExist: boolean = await anyPasswordsExist(ctx);
    const makeTopLevelAdmin = ctx.db.entry.update({
        where: {
            id: vertex.dse.id,
        },
        data: {
            may_add_top_level_dse: true,
        },
    });
    const now = new Date();
    const nowElement = _encodeGeneralizedTime(now, DER);
    if ("clear" in pwd) {
        const algid = getScryptAlgorithmIdentifier();
        const clear = Buffer.from(pwd.clear, "utf-8");
        const encrypted = encryptPassword(algid, clear);
        if (!encrypted) {
            throw new Error();
        }
        if (conn) {
            ctx.log.info(ctx.i18n.t("log:password_changed", {
                cid: conn.id,
                uuid: vertex.dse.uuid,
            }));
        }
        return [
            /**
             * The first entry with a password added will have permission to add
             * top-level DSEs. Outside of this, this flag must be set using the
             * database.
             */
            ...(entriesWithPasswordsExist
                ? [ makeTopLevelAdmin ]
                : []),
            ctx.db.password.upsert({
                where: {
                    entry_id: vertex.dse.id,
                },
                create: {
                    entry_id: vertex.dse.id,
                    encrypted: Buffer.from(encrypted),
                    algorithm_oid: algid.algorithm.toString(),
                    algorithm_parameters_der: algid.parameters
                        ? Buffer.from(algid.parameters.toBytes())
                        : undefined,
                },
                update: {
                    entry_id: vertex.dse.id,
                    encrypted: Buffer.from(encrypted),
                    algorithm_oid: algid.algorithm.toString(),
                    algorithm_parameters_der: algid.parameters
                        ? Buffer.from(algid.parameters.toBytes())
                        : undefined,
                },
            }),
            ctx.db.attributeValue.deleteMany({
                where: {
                    entry_id: vertex.dse.id,
                    type: {
                        in: [ // Using in, because we will add more attributes later.
                            pwdStartTime["&id"].toString(),
                        ],
                    },
                },
            }),
            ctx.db.attributeValue.create({
                data: {
                    entry_id: vertex.dse.id,
                    type: pwdStartTime["&id"].toString(),
                    operational: true,
                    tag_class: nowElement.tagClass,
                    constructed: false,
                    tag_number: nowElement.tagNumber,
                    ber: Buffer.from(nowElement.toBytes()),
                    jer: nowElement.toJSON() as string,
                },
            }),
        ];
    } else if ("encrypted" in pwd) {
        if (conn) {
            ctx.log.info(ctx.i18n.t("log:password_changed", {
                cid: conn.id,
                uuid: vertex.dse.uuid,
            }));
        }
        return [
            /**
             * The first entry with a password added will have permission to add
             * top-level DSEs. Outside of this, this flag must be set using the
             * database.
             */
            ...(entriesWithPasswordsExist
                ? [ makeTopLevelAdmin ]
                : []),
            ctx.db.password.upsert({
                where: {
                    entry_id: vertex.dse.id,
                },
                create: {
                    entry_id: vertex.dse.id,
                    encrypted: Buffer.from(pwd.encrypted.encryptedString),
                    algorithm_oid: pwd.encrypted.algorithmIdentifier.algorithm.toString(),
                    algorithm_parameters_der: pwd.encrypted.algorithmIdentifier.parameters
                        ? Buffer.from(pwd.encrypted.algorithmIdentifier.parameters.toBytes())
                        : undefined,
                },
                update: {
                    entry_id: vertex.dse.id,
                    encrypted: Buffer.from(pwd.encrypted.encryptedString),
                    algorithm_oid: pwd.encrypted.algorithmIdentifier.algorithm.toString(),
                    algorithm_parameters_der: pwd.encrypted.algorithmIdentifier.parameters
                        ? Buffer.from(pwd.encrypted.algorithmIdentifier.parameters.toBytes())
                        : undefined,
                },
            }),
            ctx.db.attributeValue.deleteMany({
                where: {
                    entry_id: vertex.dse.id,
                    type: {
                        in: [ // Using in, because we will add more attributes later.
                            pwdStartTime["&id"].toString(),
                        ],
                    },
                },
            }),
            ctx.db.attributeValue.create({
                data: {
                    entry_id: vertex.dse.id,
                    type: pwdStartTime["&id"].toString(),
                    operational: true,
                    tag_class: nowElement.tagClass,
                    constructed: false,
                    tag_number: nowElement.tagNumber,
                    ber: Buffer.from(nowElement.toBytes()),
                    jer: nowElement.toJSON() as string,
                },
            }),
        ];
    } else {
        throw new Error();
    }
}

export default setEntryPassword;
