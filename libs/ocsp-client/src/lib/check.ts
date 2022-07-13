import {
    OCSPRequest,
    _encode_OCSPRequest,
} from "@wildboar/ocsp/src/lib/modules/OCSP-2013-08/OCSPRequest.ta";
import {
    TBSRequest,
    _encode_TBSRequest,
} from "@wildboar/ocsp/src/lib/modules/OCSP-2013-08/TBSRequest.ta";
import {
    Request,
} from "@wildboar/ocsp/src/lib/modules/OCSP-2013-08/Request.ta";
import {
    CertID,
} from "@wildboar/ocsp/src/lib/modules/OCSP-2013-08/CertID.ta";
import {
    Certificate,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificate.ta";
import {
    OCSPResponse,
    _decode_OCSPResponse,
} from "@wildboar/ocsp/src/lib/modules/OCSP-2013-08/OCSPResponse.ta";
import type {
    BasicOCSPResponse,
} from "@wildboar/ocsp/src/lib/modules/OCSP-2013-08/BasicOCSPResponse.ta";
import type {
    SingleResponse,
} from "@wildboar/ocsp/src/lib/modules/OCSP-2013-08/SingleResponse.ta";
import { DER } from "asn1-ts/dist/node/functional";
import { URL } from "url";
import * as http from "http";
import * as https from "https";
import { TlsOptions } from "tls";
import { BERElement, unpackBits } from "asn1-ts";
import {
    id_sha256,
} from "@wildboar/x500/src/lib/modules/AlgorithmObjectIdentifiers/id-sha256.va";
import {
    AlgorithmIdentifier,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta";
import {
    _encode_SubjectPublicKeyInfo,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/SubjectPublicKeyInfo.ta";
import {
    _encode_DistinguishedName,
} from "@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta";
import { createHash } from "crypto";
import {
    id_pkix_ocsp_basic,
} from "@wildboar/ocsp/src/lib/modules/OCSP-2013-08/id-pkix-ocsp-basic.va";
import {
    _decode_BasicOCSPResponse,
} from "@wildboar/ocsp/src/lib/modules/OCSP-2013-08/BasicOCSPResponse.ta";
import type {
    PkiPath,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/PkiPath.ta";
import {
    Signature,
} from "@wildboar/ocsp/src/lib/modules/OCSP-2013-08/Signature.ta";

// Yes, I realize I could have done this with .reduce(), but for loops are more performant.
function getReceivedDataSize (chunks: Buffer[]) {
    let sum: number = 0;
    for (const chunk in chunks) {
        sum += chunk.length;
    }
    return sum;
}

export
type SignFunction = (data: Uint8Array) => [ PkiPath, AlgorithmIdentifier, Buffer ] | null;

const ACCEPTABLE_RESPONSE_MIME_TYPES: string[] = [
    "application/ocsp-response",
    "application/octet-stream",
];

export
function convertCertToOCSPRequest (
    cert: Certificate,
    sign?: SignFunction,
): OCSPRequest {
    const certTBS = cert.toBeSigned;
    const dnBytes = _encode_DistinguishedName(certTBS.issuer.rdnSequence, DER).toBytes();
    const spkiElement = _encode_SubjectPublicKeyInfo(certTBS.subjectPublicKeyInfo, DER);
    const dnHasher = createHash("sha256");
    const spkiHasher = createHash("sha256");
    dnHasher.update(dnBytes);
    spkiHasher.update(spkiElement.value); // Not calculated over tag and length.
    const tbs = new TBSRequest(
        undefined,
        undefined,
        [
            new Request(
                new CertID(
                    new AlgorithmIdentifier(
                        id_sha256,
                        undefined,
                    ),
                    dnHasher.digest(),
                    spkiHasher.digest(),
                    certTBS.serialNumber,
                ),
                undefined,
            ),
        ],
        undefined,
    );
    const unsignedResult = new OCSPRequest(
        tbs,
        undefined,
    );
    if (!sign) {
        return unsignedResult;
    }
    const tbsBytes = _encode_TBSRequest(tbs, DER).toBytes();
    const signingResult = sign(tbsBytes);
    if (!signingResult) {
        return unsignedResult;
    }
    const [ certs, algid, sigValue ] = signingResult;
    const signedResult = new OCSPRequest(
        tbs,
        new Signature(
            new AlgorithmIdentifier(
                algid.algorithm,
                algid.parameters,
            ),
            unpackBits(sigValue),
            certs,
        ),
    );
    return signedResult;
}

export
function postHTTPS (
    url: URL,
    ocspReq: OCSPRequest,
    tlsOptions?: TlsOptions,
    timeoutInMilliseconds: number = 5000,
    sizeLimit: number = 10_000,
): Promise<OCSPResponse> {
    const transportClient = (url.protocol.toLowerCase() === "https:")
        ? https
        : http;
    return new Promise((resolve, reject) => {
        const onReqFail = (e?: Error) => {
            reject(e);
            httpReq.removeAllListeners();
            httpReq.destroy();
        };
        const httpReq = transportClient.request(url, {
            method: "POST",
            headers: {
                "Accept": ACCEPTABLE_RESPONSE_MIME_TYPES.join(", "),
                "Content-Type": "application/ocsp-request",
            },
            ...(tlsOptions ?? {}),
            timeout: timeoutInMilliseconds,
        }, (res) => {
            const onResFail = (e?: Error) => {
                reject(e);
                res.removeAllListeners();
                httpReq.removeAllListeners();
                httpReq.destroy();
                res.destroy();
            };
            const resContentType = res.headers["content-type"]?.toLowerCase();
            if (
                resContentType
                && !ACCEPTABLE_RESPONSE_MIME_TYPES
                    .some((amt) => resContentType.startsWith(amt))
            ) {
                onResFail();
                return;
            }
            const chunks: Buffer[] = [];
            res.on("data", (chunk: Buffer) => {
                chunks.push(chunk);
                const receivedBytes = getReceivedDataSize(chunks);
                if (receivedBytes > sizeLimit) {
                    onResFail();
                }
            });
            res.once("error", onResFail);
            res.once("timeout", onResFail);
            res.once("pause", onResFail); // This should not happen.
            res.once("end", () => {
                const responseBytes = Buffer.concat(chunks);
                const el = new BERElement();
                el.fromBytes(responseBytes);
                const ocspResponse = _decode_OCSPResponse(el);
                resolve(ocspResponse);
            });
            setTimeout(reject, timeoutInMilliseconds);
        });
        httpReq.once("error", onReqFail);
        httpReq.once("timeout", onReqFail);
        httpReq.write(_encode_OCSPRequest(ocspReq, DER).toBytes());
        httpReq.end();
    });
}

export
interface CheckResponse {
    res: OCSPResponse;
    basicRes?: BasicOCSPResponse;
    singleRes?: SingleResponse;
}

export
async function getOCSPResponse (
    url: URL,
    req: OCSPRequest | Certificate,
    tlsOptions?: TlsOptions,
    timeoutInMilliseconds: number = 5000,
    sign?: SignFunction,
    sizeLimit: number = 10_000,
): Promise<CheckResponse> {
    if (!["http:", "https:"].includes(url.protocol.toLowerCase())) {
        throw new Error("PROTOCOL_UNSUPPORTED"); // TODO: Create a different error type.
    }
    const ocspReq = (req instanceof OCSPRequest)
        ? req
        : convertCertToOCSPRequest(req, sign);
    const result = await postHTTPS(
        url,
        ocspReq,
        tlsOptions,
        timeoutInMilliseconds,
        sizeLimit,
    );
    const nonBasicResponse: CheckResponse = {
        res: result,
    };
    if (!result.responseBytes) {
        return nonBasicResponse;
    }
    if (!result.responseBytes.responseType.isEqualTo(id_pkix_ocsp_basic)) {
        return nonBasicResponse;
    }
    const resBytes = result.responseBytes.response;
    const resEl = new BERElement();
    resEl.fromBytes(resBytes);
    const basicRes = _decode_BasicOCSPResponse(resEl);
    return {
        res: result,
        basicRes,
        singleRes: basicRes.tbsResponseData.responses[0],
    };
}
