import type { Context, Vertex } from "@wildboar/meerkat-types";
import {
    PwdVocabulary_noDictionaryWords,
    PwdVocabulary_noGeographicalNames,
    PwdVocabulary_noPersonNames,
} from "@wildboar/x500/src/lib/modules/PasswordPolicy/PwdVocabulary.ta";
import { BERElement, TRUE_BIT } from "asn1-ts";
import {
    _decode_UserPwd,
} from "@wildboar/x500/src/lib/modules/PasswordPolicy/userPwd.oa";
import encryptPassword from "../authn/encryptPassword";
import getScryptAlgorithmIdentifier from "../x500/getScryptAlgorithmIdentifier";
import { strict as assert } from "node:assert";
import { subSeconds, addSeconds } from "date-fns";
import { compareAlgorithmIdentifier } from "@wildboar/x500";
import { timingSafeEqual } from "node:crypto";

export const CHECK_PWD_QUALITY_OK: number = 0;
export const CHECK_PWD_QUALITY_LENGTH: number = -1;
export const CHECK_PWD_QUALITY_ALPHABET: number = -2;
export const CHECK_PWD_QUALITY_VOCAB: number = -3;
export const CHECK_PWD_QUALITY_REUSE: number = -4;
export const CHECK_PWD_QUALITY_NO_SLOTS: number = -5;
export const CHECK_PWD_QUALITY_TOO_SOON: number = -6;

export const MAX_HISTORY_ITEMS: number = 100000;

// NOTE: This was refactored out of `checkPasswordQualityAndHistory()` since
// `addEntry` needs to check password quality, but not history.
export
async function checkPasswordQuality (
    ctx: Context,
    password: string,
    subentry: Vertex,
): Promise<number> {
    if (!subentry.dse.subentry) {
        return CHECK_PWD_QUALITY_OK;
    }
    if (
        subentry.dse.subentry?.pwdMinLength
        && password.length < Number(subentry.dse.subentry.pwdMinLength)
    ) {
        return CHECK_PWD_QUALITY_LENGTH;
    }

    const passwordCharacters: Set<string> = new Set(Array.from(password));
    // TODO: Unit testing to ensure the continue-to-label works as expected.
    alpha_str:
    for (const str of subentry.dse.subentry?.pwdAlphabet ?? []) {
        for (const char of Array.from(str)) {
            if (passwordCharacters.has(char)) {
                // This substring's requirements were met. Continue to the
                // next one.
                continue alpha_str;
            }
        }
        return CHECK_PWD_QUALITY_ALPHABET; // No characters in the string were in the password. Inadequate.
    }
    // If we made it to this point, this particular subentry's password
    // alphabet requirements were met.

    // We do the alphabet checks above first so we don't bother doing the more
    // computationally / I/O expensive work of querying the database if the
    // password is inadequate for simpler reasons.
    if (!subentry.dse.subentry?.pwdVocabulary) {
        return CHECK_PWD_QUALITY_OK;
    }
    const no_words: boolean = (subentry.dse.subentry.pwdVocabulary[PwdVocabulary_noDictionaryWords] === TRUE_BIT);
    const no_names: boolean = (subentry.dse.subentry.pwdVocabulary[PwdVocabulary_noPersonNames] === TRUE_BIT);
    const no_geo: boolean = (subentry.dse.subentry.pwdVocabulary[PwdVocabulary_noGeographicalNames] === TRUE_BIT);

    // FIXME: Document that these must be uppercased.
    const normalizedPassword: string = password.toUpperCase();

    if (no_words) {
        const forbidden = await ctx.db.passwordDictionaryItem.findUnique({
            where: {
                bit_item: {
                    bit: PwdVocabulary_noDictionaryWords,
                    item: normalizedPassword,
                },
            },
            select: {
                id: true,
            },
        });
        if (forbidden) {
            return CHECK_PWD_QUALITY_VOCAB;
        }
    }
    if (no_names) {
        const forbidden = await ctx.db.passwordDictionaryItem.findUnique({
            where: {
                bit_item: {
                    bit: PwdVocabulary_noPersonNames,
                    item: normalizedPassword,
                },
            },
            select: {
                id: true,
            },
        });
        if (forbidden) {
            return CHECK_PWD_QUALITY_VOCAB;
        }
    }
    if (no_geo) {
        const forbidden = await ctx.db.passwordDictionaryItem.findUnique({
            where: {
                bit_item: {
                    bit: PwdVocabulary_noGeographicalNames,
                    item: normalizedPassword,
                },
            },
            select: {
                id: true,
            },
        });
        if (forbidden) {
            return CHECK_PWD_QUALITY_VOCAB;
        }
    }
    return CHECK_PWD_QUALITY_OK;
}

// NOTE: Though difficult to debug, this function is intentionally sparse on
// logging to avoid logging any details about attempted passwords.
// Also, this function will repeat a lot of the same steps between multiple
// iterations of subentries for the same password. Reminder that there should
// only be one subentry per pwdAttribute-administrative area anyway. This is
// leeway generously granted by Meerkat DSA.
export
async function checkPasswordQualityAndHistory (
    ctx: Context,
    entry_id: Vertex["dse"]["id"],
    password: string,
    subentry: Vertex,
): Promise<number> {
    if (!subentry.dse.subentry) {
        return CHECK_PWD_QUALITY_OK;
    }
    const qualityResult = await checkPasswordQuality(ctx, password, subentry);
    if (qualityResult !== CHECK_PWD_QUALITY_OK) {
        return qualityResult;
    }

    const slots = subentry.dse.subentry.pwdHistorySlots
        ? Number(subentry.dse.subentry.pwdHistorySlots)
        : MAX_HISTORY_ITEMS; // Just to short circuit the number of results.
    const algid = getScryptAlgorithmIdentifier();
    const encrypted = encryptPassword(algid, Buffer.from(password));
    assert(encrypted); // This should not happen, since we are using Meerkat DSA's self-specified encryption algorithm.
    const historyStart: Date | undefined = subentry.dse.subentry.pwdMaxTimeInHistory
        ? subSeconds(new Date(), Number(subentry.dse.subentry.pwdMaxTimeInHistory))
        : undefined;

    /**
     * WARNING: This MUST come AFTER password verification, because hackers
     * could oracle the current password, since the current password will
     * be in the history as well.
     */
    const previousPasswords = await ctx.db.passwordHistory.findMany({
        where: {
            entry_id,
            time: historyStart
                ? {
                    gte: historyStart,
                }
                : undefined,
        },
        orderBy: [
            {
                time: "desc",
            },
        ],
        take: slots,
        select: {
            password: true,
            time: true,
        },
    });

    if (previousPasswords.length === slots) {
        return CHECK_PWD_QUALITY_NO_SLOTS; // There are no slots remaining.
    }

    // Check if the password was reused.
    for (const pp of previousPasswords) {
        const ppEl = new BERElement();
        ppEl.fromBytes(pp.password);
        const oldPwd = _decode_UserPwd(ppEl);
        if (("clear" in oldPwd) && oldPwd.clear === password) {
            return CHECK_PWD_QUALITY_REUSE;
        }
        if (
            ("encrypted" in oldPwd)
            && compareAlgorithmIdentifier(
                oldPwd.encrypted.algorithmIdentifier,
                algid,
            )
            // You have to check for equal array sizes before calling timingSafeEqual()
            && (oldPwd.encrypted.encryptedString.length === encrypted.length)
            && timingSafeEqual(oldPwd.encrypted.encryptedString, encrypted)
        ) {
            return CHECK_PWD_QUALITY_REUSE;
        }
    }

    const newestPasswordAge = previousPasswords.length && previousPasswords[previousPasswords.length - 1].time;
    if (newestPasswordAge && subentry.dse.subentry.pwdMinTimeInHistory) {
        const newestPasswordMayBeReplacedAfter: Date = addSeconds(newestPasswordAge, Number(subentry.dse.subentry.pwdMinTimeInHistory));
        if ((new Date()).getTime() <= newestPasswordMayBeReplacedAfter.getTime()) {
            return CHECK_PWD_QUALITY_TOO_SOON;
        }
    }

    return CHECK_PWD_QUALITY_OK;
}
