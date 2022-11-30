/* eslint-disable */
import {
    EnvelopedData,
    _decode_EnvelopedData,
    _encode_EnvelopedData,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/EnvelopedData.ta';
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    PKMACValue,
    _decode_PKMACValue,
    _encode_PKMACValue,
} from '../PKIXCRMF-2009/PKMACValue.ta';
import {
    SubsequentMessage,
    _decode_SubsequentMessage,
    _encode_SubsequentMessage,
} from '../PKIXCRMF-2009/SubsequentMessage.ta';
export {
    PKMACValue,
    _decode_PKMACValue,
    _encode_PKMACValue,
} from '../PKIXCRMF-2009/PKMACValue.ta';
export {
    challengeResp /* IMPORTED_SHORT_NAMED_INTEGER */,
    encrCert /* IMPORTED_SHORT_NAMED_INTEGER */,
    SubsequentMessage,
    SubsequentMessage_challengeResp /* IMPORTED_LONG_NAMED_INTEGER */,
    SubsequentMessage_encrCert /* IMPORTED_LONG_NAMED_INTEGER */,
    _decode_SubsequentMessage,
    _encode_SubsequentMessage,
} from '../PKIXCRMF-2009/SubsequentMessage.ta';

/* START_OF_SYMBOL_DEFINITION POPOPrivKey */
/**
 * @summary POPOPrivKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * POPOPrivKey  ::=  CHOICE {
 *     thisMessage       [0] BIT STRING,         -- Deprecated
 *     -- possession is proven in this message (which contains
 *     -- the private key itself (encrypted for the CA))
 *     subsequentMessage [1] SubsequentMessage,
 *     -- possession will be proven in a subsequent message
 *     dhMAC             [2] BIT STRING,         -- Deprecated
 *     agreeMAC          [3] PKMACValue,
 *     encryptedKey      [4] EnvelopedData }
 * ```
 */
export type POPOPrivKey =
    | { thisMessage: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { subsequentMessage: SubsequentMessage } /* CHOICE_ALT_ROOT */
    | { dhMAC: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { agreeMAC: PKMACValue } /* CHOICE_ALT_ROOT */
    | { encryptedKey: EnvelopedData } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION POPOPrivKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_POPOPrivKey */
let _cached_decoder_for_POPOPrivKey: $.ASN1Decoder<POPOPrivKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_POPOPrivKey */

/* START_OF_SYMBOL_DEFINITION _decode_POPOPrivKey */
/**
 * @summary Decodes an ASN.1 element into a(n) POPOPrivKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {POPOPrivKey} The decoded data structure.
 */
export function _decode_POPOPrivKey(el: _Element) {
    if (!_cached_decoder_for_POPOPrivKey) {
        _cached_decoder_for_POPOPrivKey =
            $._decode_inextensible_choice<POPOPrivKey>({
                'CONTEXT 0': [
                    'thisMessage',
                    $._decode_implicit<BIT_STRING>(() => $._decodeBitString),
                ],
                'CONTEXT 1': [
                    'subsequentMessage',
                    $._decode_implicit<SubsequentMessage>(
                        () => _decode_SubsequentMessage
                    ),
                ],
                'CONTEXT 2': [
                    'dhMAC',
                    $._decode_implicit<BIT_STRING>(() => $._decodeBitString),
                ],
                'CONTEXT 3': [
                    'agreeMAC',
                    $._decode_implicit<PKMACValue>(() => _decode_PKMACValue),
                ],
                'CONTEXT 4': [
                    'encryptedKey',
                    $._decode_implicit<EnvelopedData>(
                        () => _decode_EnvelopedData
                    ),
                ],
            });
    }
    return _cached_decoder_for_POPOPrivKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_POPOPrivKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_POPOPrivKey */
let _cached_encoder_for_POPOPrivKey: $.ASN1Encoder<POPOPrivKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_POPOPrivKey */

/* START_OF_SYMBOL_DEFINITION _encode_POPOPrivKey */
/**
 * @summary Encodes a(n) POPOPrivKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The POPOPrivKey, encoded as an ASN.1 Element.
 */
export function _encode_POPOPrivKey(
    value: POPOPrivKey,
    elGetter: $.ASN1Encoder<POPOPrivKey>
) {
    if (!_cached_encoder_for_POPOPrivKey) {
        _cached_encoder_for_POPOPrivKey = $._encode_choice<POPOPrivKey>(
            {
                thisMessage: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeBitString,
                    $.BER
                ),
                subsequentMessage: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_SubsequentMessage,
                    $.BER
                ),
                dhMAC: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => $._encodeBitString,
                    $.BER
                ),
                agreeMAC: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_PKMACValue,
                    $.BER
                ),
                encryptedKey: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_EnvelopedData,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_POPOPrivKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_POPOPrivKey */

/* eslint-enable */
