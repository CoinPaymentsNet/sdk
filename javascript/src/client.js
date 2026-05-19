// Auto-generated. Do not edit by hand.
import { HttpClient } from "./http.js";
import { AccessControlApi } from "./accessControl.js";
import { CurrenciesApi } from "./currencies.js";
import { FeesApi } from "./fees.js";
import { InvoicesApi } from "./invoices.js";
import { RatesApi } from "./rates.js";
import { TransactionsApi } from "./transactions.js";
import { WalletsApi } from "./wallets.js";
import { WebhooksApi } from "./webhooks.js";

export class CoinPaymentsClient {
  constructor({ clientId, clientSecret, baseUrl = "https://a-api.coinpayments.net" } = {}) {
    this.http = new HttpClient({ baseUrl, clientId, clientSecret });
    this.accessControl = new AccessControlApi(this.http);
    this.currencies = new CurrenciesApi(this.http);
    this.fees = new FeesApi(this.http);
    this.invoices = new InvoicesApi(this.http);
    this.rates = new RatesApi(this.http);
    this.transactions = new TransactionsApi(this.http);
    this.wallets = new WalletsApi(this.http);
    this.webhooks = new WebhooksApi(this.http);
  }
}
