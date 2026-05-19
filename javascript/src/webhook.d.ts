export interface VerifyWebhookOptions {
  /** HTTP method of the webhook (typically "POST"). */
  method: string;
  /** Full URL the webhook was delivered to. */
  url: string;
  /** Request body as a raw string, BEFORE any JSON parsing. */
  rawBody: string;
  /** Request headers (case-insensitive lookup). */
  headers: Record<string, string | string[] | undefined>;
  /** Your integration's client secret. */
  clientSecret: string;
  /** Optional: reject webhooks whose Client header does not match. */
  expectedClientId?: string;
  /** Reject if the timestamp drifts more than this; 0 disables. Default 300. */
  maxAgeSeconds?: number;
}

export interface WebhookResult {
  ok: boolean;
  reason?: string;
}

export function verifyWebhook(options: VerifyWebhookOptions): WebhookResult;
