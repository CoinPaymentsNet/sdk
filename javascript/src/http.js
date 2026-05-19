// CoinPayments HTTP transport - signs, calls, returns JSON.

import { sign } from "./signer.js";

export class CoinPaymentsError extends Error {
  constructor(status, message, payload) {
    super(`[${status}] ${message}`);
    this.status = status;
    this.payload = payload;
  }
}

export class HttpClient {
  constructor({ baseUrl, clientId, clientSecret }) {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  async call(method, path, { pathParams, query, body, authed = true } = {}) {
    // 1. Substitute path params. Routes use Express-style `:name` tokens —
    //    `\b` keeps `:id` from clobbering a longer name like `:identity`.
    if (pathParams) {
      for (const [key, value] of Object.entries(pathParams)) {
        const re = new RegExp(`:${escapeRegex(key)}\\b`, "g");
        const next = path.replace(re, encodeURIComponent(String(value)));
        if (next === path) {
          throw new Error(`path template ${path} has no placeholder :${key}`);
        }
        path = next;
      }
    }
    const leftover = path.match(/:[A-Za-z_]\w*/);
    if (leftover) {
      throw new Error(`unresolved path placeholder ${leftover[0]} in ${path}`);
    }

    // 2. Build URL (query string is part of the signed message).
    const qs = buildQueryString(query);
    const url = this.baseUrl + path + qs;

    // 3. Serialise body once. The exact string we sign is the one we send.
    const payload = body == null ? "" : JSON.stringify(body);

    // 4. Headers.
    const headers = { Accept: "application/json" };
    if (payload) headers["Content-Type"] = "application/json";

    if (authed) {
      if (!this.clientId || !this.clientSecret) {
        throw new Error(`${method} ${path} requires client credentials`);
      }
      const { ts, sig } = sign(method, url, this.clientId, this.clientSecret, payload);
      headers["X-CoinPayments-Client"] = this.clientId;
      headers["X-CoinPayments-Timestamp"] = ts;
      headers["X-CoinPayments-Signature"] = sig;
    }

    // 5. Send the exact bytes we signed.
    const res = await fetch(url, {
      method,
      headers,
      body: payload || undefined,
    });

    // 6. Decode.
    const text = await res.text();
    const parsed = text ? tryJson(text) : null;

    if (!res.ok) {
      throw new CoinPaymentsError(res.status, res.statusText, parsed ?? text);
    }
    return parsed;
  }
}

function buildQueryString(query) {
  if (!query) return "";
  const params = new URLSearchParams();
  for (const [k, v] of Object.entries(query)) {
    if (v == null) continue;
    params.append(k, Array.isArray(v) ? v.join(",") : String(v));
  }
  const s = params.toString();
  return s ? `?${s}` : "";
}

function tryJson(s) {
  try { return JSON.parse(s); } catch { return s; }
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
