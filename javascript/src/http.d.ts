export class CoinPaymentsError extends Error {
  readonly status: number;
  readonly payload: unknown;
  constructor(status: number, message: string, payload: unknown);
}

export interface HttpClientOptions {
  baseUrl: string;
  clientId?: string;
  clientSecret?: string;
}

export interface HttpCallOptions {
  pathParams?: Record<string, string | number>;
  query?: Record<string, unknown>;
  body?: Record<string, unknown>;
  authed?: boolean;
}

export class HttpClient {
  readonly baseUrl: string;
  readonly clientId?: string;
  readonly clientSecret?: string;
  constructor(options: HttpClientOptions);
  call(method: string, path: string, options?: HttpCallOptions): Promise<unknown>;
}
