// Webhook signature verification.
// CoinPayments webhooks carry the same three signing headers as outbound
// requests, so verification is the same HMAC math in reverse.
//
// https://docs.coinpayments.net/api/webhooks/authenticating-requests/

import { createHmac, timingSafeEqual } from "node:crypto";

const BOM = "\ufeff";

/**
 * Verify a CoinPayments webhook request.
 *
 * @param {object} args
 * @param {string} args.method       HTTP method of the webhook (typically "POST").
 * @param {string} args.url          Full URL the webhook was delivered to -
 *                                   the URL you registered, not what your
 *                                   framework reconstructs behind proxies.
 * @param {string} args.rawBody      Request body as a raw string, before any
 *                                   parsing. JSON parsers may re-serialise
 *                                   with different whitespace, which
 *                                   invalidates the signature - capture
 *                                   bytes before decoding.
 * @param {object} args.headers      Request headers (case-insensitive lookup).
 * @param {string} args.clientSecret Your integration's client secret.
 * @param {string} [args.expectedClientId]  Optional: reject webhooks whose
 *                                   Client header does not match.
 * @param {number} [args.maxAgeSeconds=300] Reject if timestamp drifts more
 *                                   than this; 0 disables the check.
 * @returns {{ ok: boolean, reason?: string }}
 */
export function verifyWebhook({
  method, url, rawBody, headers,
  clientSecret, expectedClientId, maxAgeSeconds = 300,
}) {
  // Case-insensitive header lookup.
  const h = {};
  for (const [k, v] of Object.entries(headers || {})) h[k.toLowerCase()] = v;
  const clientId = h["x-coinpayments-client"];
  const ts       = h["x-coinpayments-timestamp"];
  const sig      = h["x-coinpayments-signature"];

  if (!clientId || !ts || !sig) {
    return { ok: false, reason: "missing signature headers" };
  }
  if (expectedClientId != null && clientId !== expectedClientId) {
    return { ok: false, reason: "client id mismatch" };
  }

  if (maxAgeSeconds > 0) {
    const sent = Date.parse(ts + "Z");  // CoinPayments sends UTC ISO-8601 without zone.
    if (Number.isNaN(sent)) return { ok: false, reason: "malformed timestamp" };
    const ageSeconds = Math.abs((Date.now() - sent) / 1000);
    if (ageSeconds > maxAgeSeconds) {
      return { ok: false, reason: `timestamp too old (${Math.floor(ageSeconds)}s)` };
    }
  }

  const message = `${BOM}${method}${url}${clientId}${ts}${rawBody ?? ""}`;
  const expected = createHmac("sha256", clientSecret).update(message).digest("base64");

  // Constant-time comparison - never plain `===` for signature checks.
  const a = Buffer.from(expected);
  const b = Buffer.from(sig);
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return { ok: false, reason: "signature mismatch" };
  }

  return { ok: true };
}
