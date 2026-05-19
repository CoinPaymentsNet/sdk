// Auto-generated. Do not edit by hand.
import { HttpClient } from "./http.js";

export class CurrenciesApi {
  constructor(http: HttpClient);
  /**
   * lists platform supported currencies and their capabilities. - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesV1
   */
  getCurrenciesV1(options?: { q?: string; types?: unknown[]; capabilities?: unknown[] }): Promise<unknown>;

  /**
   * lists platform supported currencies and their capabilities. - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesV2
   */
  getCurrenciesV2(options?: { q?: string; types?: unknown[]; capabilities?: unknown[] }): Promise<unknown>;

  /**
   * finds a currency by its id - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesByIdV1
   * @param id the id of the currency to retrieve
   */
  getCurrenciesByIdV1(id: string): Promise<unknown>;

  /**
   * finds a currency by its id - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesByIdV2
   * @param id the id of the currency to retrieve
   */
  getCurrenciesByIdV2(id: string): Promise<unknown>;

  /**
   * Gets the merchant's currently accepted currencies.
Currencies that are ranked (ordered) will be returned at the top of the list. - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/currencies/routes/getMerchantCurrenciesV1
   */
  getMerchantCurrenciesV1(): Promise<unknown>;

  /**
   * Gets the latest blockchain block number by currency - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesBlockchainNodesLatestBlockNumberByIdV1
   * @param id ID of the currency.
   */
  getCurrenciesBlockchainNodesLatestBlockNumberByIdV1(id: string): Promise<unknown>;

  /**
   * Gets the latest blockchain block number by currency - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesBlockchainNodesLatestBlockNumberByIdV2
   * @param id ID of the currency.
   */
  getCurrenciesBlockchainNodesLatestBlockNumberByIdV2(id: string): Promise<unknown>;

  /**
   * Gets the required confirmations for each currency - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesRequiredConfirmationsV1
   */
  getCurrenciesRequiredConfirmationsV1(): Promise<unknown>;

  /**
   * Gets the required confirmations for each currency - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesRequiredConfirmationsV2
   */
  getCurrenciesRequiredConfirmationsV2(): Promise<unknown>;

  /**
   * gets a list of all possible currency conversions - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesConversionsV1
   */
  getCurrenciesConversionsV1(): Promise<unknown>;

  /**
   * gets a list of all possible currency conversions - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesConversionsV2
   */
  getCurrenciesConversionsV2(): Promise<unknown>;

  /**
   * Returns conversion limits by currency pair - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesLimitsByFromToV1
   * @param from From currency in format `1` or `4:0xdac17f958d2ee523a2206206994597c13d831ec7` for smart contracts
   * @param to To currency in format `1` or `4:0xdac17f958d2ee523a2206206994597c13d831ec7` for smart contracts
   */
  getCurrenciesLimitsByFromToV1(from: string, to: string): Promise<unknown>;

  /**
   * Returns conversion limits by currency pair - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesLimitsByFromToV2
   * @param from From currency in format `1` or `4:0xdac17f958d2ee523a2206206994597c13d831ec7` for smart contracts
   * @param to To currency in format `1` or `4:0xdac17f958d2ee523a2206206994597c13d831ec7` for smart contracts
   */
  getCurrenciesLimitsByFromToV2(from: string, to: string): Promise<unknown>;
}
