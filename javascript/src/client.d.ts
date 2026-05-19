// Auto-generated. Do not edit by hand.
import { AccessControlApi } from "./accessControl.js";
import { CurrenciesApi } from "./currencies.js";
import { FeesApi } from "./fees.js";
import { InvoicesApi } from "./invoices.js";
import { RatesApi } from "./rates.js";
import { TransactionsApi } from "./transactions.js";
import { WalletsApi } from "./wallets.js";
import { WebhooksApi } from "./webhooks.js";

export interface CoinPaymentsClientOptions {
  clientId?: string;
  clientSecret?: string;
  baseUrl?: string;
}

export class CoinPaymentsClient {
  constructor(options?: CoinPaymentsClientOptions);
  readonly accessControl: AccessControlApi;
  readonly currencies: CurrenciesApi;
  readonly fees: FeesApi;
  readonly invoices: InvoicesApi;
  readonly rates: RatesApi;
  readonly transactions: TransactionsApi;
  readonly wallets: WalletsApi;
  readonly webhooks: WebhooksApi;
}
