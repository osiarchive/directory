import type { Context, Entry } from "../types";
import * as net from "net";
import { BERElement, ASN1TruncationError } from "asn1-ts";
import { BER } from "asn1-ts/dist/node/functional";
import {
    LDAPMessage,
    _decode_LDAPMessage,
    _encode_LDAPMessage,
} from "@wildboar/ldap/src/lib/modules/Lightweight-Directory-Access-Protocol-V3/LDAPMessage.ta";
import {
    SearchResultEntry,
} from "@wildboar/ldap/src/lib/modules/Lightweight-Directory-Access-Protocol-V3/SearchResultEntry.ta";
import {
    BindResponse,
} from "@wildboar/ldap/src/lib/modules/Lightweight-Directory-Access-Protocol-V3/BindResponse.ta";
import {
    ExtendedResponse,
} from "@wildboar/ldap/src/lib/modules/Lightweight-Directory-Access-Protocol-V3/ExtendedResponse.ta";
import {
    LDAPResult_resultCode_success,
    LDAPResult_resultCode_protocolError,
} from "@wildboar/ldap/src/lib/modules/Lightweight-Directory-Access-Protocol-V3/LDAPResult.ta";
import add from "./operations/add";
import bind from "./operations/bind";
import compare from "./operations/compare";
import del from "./operations/del";
import modDN from "./operations/modDN";
import modify from "./operations/modify";
import search from "./operations/search";
import decodeLDAPOID from "@wildboar/ldap/src/lib/decodeLDAPOID";
import decodeLDAPDN from "./decodeLDAPDN";
import findEntry from "../x500/findEntry";

export class LDAPConnection {

    private buffer: Buffer = Buffer.alloc(0);
    private boundEntry: Entry | undefined;

    constructor (
        readonly ctx: Context,
        readonly c: net.Socket,
    ) {
        c.on("data", async (data: Buffer): Promise<void> => {
            this.buffer = Buffer.concat([
                this.buffer,
                data,
            ]);
            const el = new BERElement();
            let bytesRead = 0;
            try {
                bytesRead = el.fromBytes(this.buffer);
            } catch (e) {
                if (e instanceof ASN1TruncationError) {
                    return;
                }
                // TODO: Close the connection.
                console.error("Malformed BER value.");
                return;
            }
            let message!: LDAPMessage;
            try {
                message = _decode_LDAPMessage(el);
            } catch (e) {
                console.error("Malformed LDAPMessage.");
                return;
            }

            if ("bindRequest" in message.protocolOp) {
                const req = message.protocolOp.bindRequest;
                const result = await bind(ctx, req);
                if (result.resultCode === LDAPResult_resultCode_success) {
                    const dn = decodeLDAPDN(ctx, req.name);
                    this.boundEntry = findEntry(ctx, ctx.database.data.dit, dn, true);
                }
                const res = new LDAPMessage(
                    message.messageID,
                    {
                        bindResponse: new BindResponse(
                            0, // Success
                            Buffer.from("cn=Jonathan Wilbur", "utf-8"),
                            Buffer.from("Success", "utf-8"),
                            undefined,
                            undefined,
                        ),
                    },
                    undefined,
                );
                this.c.write(_encode_LDAPMessage(res, BER).toBytes());
            } else if ("unbindRequest" in message.protocolOp) {
                this.boundEntry = undefined;
            } else if ("addRequest" in message.protocolOp) {
                const req = message.protocolOp.addRequest;
                const result = await add(ctx, req);
                ctx.log.info(`Created entry ${Buffer.from(req.entry).toString("utf-8")}.`);
                const res = new LDAPMessage(
                    message.messageID,
                    {
                        addResponse: result,
                    },
                    undefined,
                );
                this.c.write(_encode_LDAPMessage(res, BER).toBytes());
            } else if ("compareRequest" in message.protocolOp) {
                const req = message.protocolOp.compareRequest;
                const result = await compare(ctx, req);
                const res = new LDAPMessage(
                    message.messageID,
                    {
                        compareResponse: result,
                    },
                    undefined,
                );
                this.c.write(_encode_LDAPMessage(res, BER).toBytes());
            } else if ("delRequest" in message.protocolOp) {
                const req = message.protocolOp.delRequest;
                const result = await del(ctx, req);
                const res = new LDAPMessage(
                    message.messageID,
                    {
                        delResponse: result,
                    },
                    undefined,
                );
                this.c.write(_encode_LDAPMessage(res, BER).toBytes());
            } else if ("modDNRequest" in message.protocolOp) {
                const req = message.protocolOp.modDNRequest;
                const result = await modDN(ctx, req);
                const res = new LDAPMessage(
                    message.messageID,
                    {
                        modDNResponse: result,
                    },
                    undefined,
                );
                this.c.write(_encode_LDAPMessage(res, BER).toBytes());
            } else if ("modifyRequest" in message.protocolOp) {
                const req = message.protocolOp.modifyRequest;
                const result = await modify(ctx, req);
                const res = new LDAPMessage(
                    message.messageID,
                    {
                        modifyResponse: result,
                    },
                    undefined,
                );
                this.c.write(_encode_LDAPMessage(res, BER).toBytes());
            } else if ("searchRequest" in message.protocolOp) {
                const req = message.protocolOp.searchRequest;
                const onEntry = async (entry: SearchResultEntry): Promise<void> => {
                    const entryRes = new LDAPMessage(
                        message.messageID,
                        {
                            searchResEntry: entry,
                        },
                        undefined,
                    );
                    this.c.write(_encode_LDAPMessage(entryRes, BER).toBytes());
                };
                const result = await search(ctx, req, onEntry);
                const doneRes = new LDAPMessage(
                    message.messageID,
                    {
                        searchResDone: result,
                    },
                    undefined,
                );
                this.c.write(_encode_LDAPMessage(doneRes, BER).toBytes());
            } else if ("abandonRequest" in message.protocolOp) {
                console.log(`Abandon operation ${message.messageID}`);
            } else if ("extendedReq" in message.protocolOp) {
                const req = message.protocolOp.extendedReq;
                const oid = decodeLDAPOID(req.requestName);
                if (oid.toString() === "1.3.6.1.4.1.1466.20037") { // StartTLS
                    // TODO: StartTLS
                } else {
                    const res = new LDAPMessage(
                        message.messageID,
                        {
                            extendedResp: new ExtendedResponse(
                                LDAPResult_resultCode_protocolError,
                                Buffer.alloc(0),
                                Buffer.from("Extended operation not understood.", "utf-8"),
                                undefined,
                                undefined,
                                undefined,
                            ),
                        },
                        undefined,
                    );
                    this.c.write(_encode_LDAPMessage(res, BER).toBytes());
                }
            } else {
                throw new Error(JSON.stringify(message.protocolOp));
            }
            this.buffer = this.buffer.slice(bytesRead);
        });
    }

}

export default LDAPConnection;
