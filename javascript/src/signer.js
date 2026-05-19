// CoinPayments HMAC-SHA256 request signer.
// Spec: https://docs.coinpayments.net/api/auth/generate-api-signature

import { createHmac } from "node:crypto";

const BOM = "\ufeff";

/**
 * Sign a CoinPayments API request.
 *
 * IMPORTANT: `payload` must be the exact JSON string that will be sent as
 * the request body - any whitespace drift invalidates the signature.
 *
 * @param {string} method       HTTP verb (e.g. "POST")
 * @param {string} url          Full URL including query string
 * @param {string} clientId
 * @param {string} clientSecret
 * @param {string} payload      Pre-serialised JSON body, or "" for no body
 * @returns {{ ts: string, sig: string }}
 */
export function sign(method, url, clientId, clientSecret, payload) {
  const ts = new Date().toISOString().split(".")[0];
  const message = `${BOM}${method}${url}${clientId}${ts}${payload ?? ""}`;
  const sig = createHmac("sha256", clientSecret).update(message).digest("base64");
  return { ts, sig };
}
