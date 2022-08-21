/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { URI, _decode_URI, _encode_URI } from "../OtherAutomaticallyTaggedTypes/URI.ta";
export { URI, _decode_URI, _encode_URI } from "../OtherAutomaticallyTaggedTypes/URI.ta";
import { RFID, _decode_RFID, _encode_RFID } from "../OtherAutomaticallyTaggedTypes/RFID.ta";
export { RFID, _decode_RFID, _encode_RFID } from "../OtherAutomaticallyTaggedTypes/RFID.ta";
import { GPS, _decode_GPS, _encode_GPS } from "../OtherAutomaticallyTaggedTypes/GPS.ta";
export { GPS, _decode_GPS, _encode_GPS } from "../OtherAutomaticallyTaggedTypes/GPS.ta";
import { Address, _decode_Address, _encode_Address } from "../OtherAutomaticallyTaggedTypes/Address.ta";
export { Address, _decode_Address, _encode_Address } from "../OtherAutomaticallyTaggedTypes/Address.ta";
import { DBRecord, _decode_DBRecord, _encode_DBRecord } from "../OtherAutomaticallyTaggedTypes/DBRecord.ta";
export { DBRecord, _decode_DBRecord, _encode_DBRecord } from "../OtherAutomaticallyTaggedTypes/DBRecord.ta";


/* START_OF_SYMBOL_DEFINITION Pointer */
/**
 * @summary Pointer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Pointer  ::=  CHOICE {
 *     uri            URI,        -- Uniform Resource Identifier
 *     rfid        RFID,        -- Radio Frequency Identification
 *     gps            GPS,        -- Global Positioning System
 *     address    Address,    -- Free format object location
 *     dbRecord    DBRecord,    -- Number of fully qualified name
 *     ...            -- Expect other pointer types
 *     }
 * ```
 */
export
type Pointer =
    { uri: URI } /* CHOICE_ALT_ROOT */
    | { rfid: RFID } /* CHOICE_ALT_ROOT */
    | { gps: GPS } /* CHOICE_ALT_ROOT */
    | { address: Address } /* CHOICE_ALT_ROOT */
    | { dbRecord: DBRecord } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION Pointer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Pointer */
let _cached_decoder_for_Pointer: $.ASN1Decoder<Pointer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Pointer */

/* START_OF_SYMBOL_DEFINITION _decode_Pointer */
/**
 * @summary Decodes an ASN.1 element into a(n) Pointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Pointer} The decoded data structure.
 */
export
function _decode_Pointer (el: _Element) {
    if (!_cached_decoder_for_Pointer) { _cached_decoder_for_Pointer = $._decode_extensible_choice<Pointer>({
    "CONTEXT 0": [ "uri", _decode_URI ],
    "CONTEXT 1": [ "rfid", _decode_RFID ],
    "CONTEXT 2": [ "gps", _decode_GPS ],
    "CONTEXT 3": [ "address", _decode_Address ],
    "CONTEXT 4": [ "dbRecord", _decode_DBRecord ]
}); }
    return _cached_decoder_for_Pointer(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Pointer */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Pointer */
let _cached_encoder_for_Pointer: $.ASN1Encoder<Pointer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Pointer */

/* START_OF_SYMBOL_DEFINITION _encode_Pointer */
/**
 * @summary Encodes a(n) Pointer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Pointer, encoded as an ASN.1 Element.
 */
export
function _encode_Pointer (value: Pointer, elGetter: $.ASN1Encoder<Pointer>) {
    if (!_cached_encoder_for_Pointer) { _cached_encoder_for_Pointer = $._encode_choice<Pointer>({
    "uri": _encode_URI,
    "rfid": _encode_RFID,
    "gps": _encode_GPS,
    "address": _encode_Address,
    "dbRecord": _encode_DBRecord,
}, $.BER); }
    return _cached_encoder_for_Pointer(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Pointer */

/* eslint-enable */
