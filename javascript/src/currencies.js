// Auto-generated. Do not edit by hand.

export class CurrenciesApi {
  constructor(http) {
    this.http = http;
  }

  /**
   * lists platform supported currencies and their capabilities. - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesV1
   * @param {*} [q] optional search query to find currencies with names and/or codes similar to the specified search string
   * @param {*} [types] comma separated list of the types of currencies to return (e.g. 'coin', 'token', 'fiat', etc.).  By default currencies of all types are returned
   * @param {*} [capabilities] comma separated list of capabilities, currencies without the specified capabilities won't be returned
   */
  getCurrenciesV1({ q, types, capabilities } = {}) {
    return this.http.call("GET", "/api/v1/currencies", { query: { "q": q, "types": types, "capabilities": capabilities }, authed: false });
  }


  /**
   * lists platform supported currencies and their capabilities. - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesV2
   * @param {*} [q] optional search query to find currencies with names and/or codes similar to the specified search string
   * @param {*} [types] comma separated list of the types of currencies to return (e.g. 'coin', 'token', 'fiat', etc.).  By default currencies of all types are returned
   * @param {*} [capabilities] comma separated list of capabilities, currencies without the specified capabilities won't be returned
   */
  getCurrenciesV2({ q, types, capabilities } = {}) {
    return this.http.call("GET", "/api/v2/currencies", { query: { "q": q, "types": types, "capabilities": capabilities }, authed: false });
  }


  /**
   * finds a currency by its id - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesByIdV1
   * @param {*} id the id of the currency to retrieve
   */
  getCurrenciesByIdV1(id) {
    return this.http.call("GET", "/api/v1/currencies/:id", { pathParams: { "id": id }, authed: false });
  }


  /**
   * finds a currency by its id - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesByIdV2
   * @param {*} id the id of the currency to retrieve
   */
  getCurrenciesByIdV2(id) {
    return this.http.call("GET", "/api/v2/currencies/:id", { pathParams: { "id": id }, authed: false });
  }


  /**
   * Gets the merchant's currently accepted currencies.
Currencies that are ranked (ordered) will be returned at the top of the list. - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/currencies/routes/getMerchantCurrenciesV1
   */
  getMerchantCurrenciesV1() {
    return this.http.call("GET", "/api/v1/merchant/currencies", { authed: true });
  }


  /**
   * Gets the latest blockchain block number by currency - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesBlockchainNodesLatestBlockNumberByIdV1
   * @param {*} id ID of the currency.
   */
  getCurrenciesBlockchainNodesLatestBlockNumberByIdV1(id) {
    return this.http.call("GET", "/api/v1/currencies/blockchain-nodes/:id/latest-block-number", { pathParams: { "id": id }, authed: false });
  }


  /**
   * Gets the latest blockchain block number by currency - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesBlockchainNodesLatestBlockNumberByIdV2
   * @param {*} id ID of the currency.
   */
  getCurrenciesBlockchainNodesLatestBlockNumberByIdV2(id) {
    return this.http.call("GET", "/api/v2/currencies/blockchain-nodes/:id/latest-block-number", { pathParams: { "id": id }, authed: false });
  }


  /**
   * Gets the required confirmations for each currency - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesRequiredConfirmationsV1
   */
  getCurrenciesRequiredConfirmationsV1() {
    return this.http.call("GET", "/api/v1/currencies/required-confirmations", { authed: false });
  }


  /**
   * Gets the required confirmations for each currency - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesRequiredConfirmationsV2
   */
  getCurrenciesRequiredConfirmationsV2() {
    return this.http.call("GET", "/api/v2/currencies/required-confirmations", { authed: false });
  }


  /**
   * gets a list of all possible currency conversions - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesConversionsV1
   */
  getCurrenciesConversionsV1() {
    return this.http.call("GET", "/api/v1/currencies/conversions", { authed: false });
  }


  /**
   * gets a list of all possible currency conversions - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesConversionsV2
   */
  getCurrenciesConversionsV2() {
    return this.http.call("GET", "/api/v2/currencies/conversions", { authed: false });
  }


  /**
   * Returns conversion limits by currency pair - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesLimitsByFromToV1
   * @param {*} from From currency in format `1` or `4:0xdac17f958d2ee523a2206206994597c13d831ec7` for smart contracts
   * @param {*} to To currency in format `1` or `4:0xdac17f958d2ee523a2206206994597c13d831ec7` for smart contracts
   */
  getCurrenciesLimitsByFromToV1(from, to) {
    return this.http.call("GET", "/api/v1/currencies/limits/:from/:to", { pathParams: { "from": from, "to": to }, authed: false });
  }


  /**
   * Returns conversion limits by currency pair - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/currencies/routes/getCurrenciesLimitsByFromToV2
   * @param {*} from From currency in format `1` or `4:0xdac17f958d2ee523a2206206994597c13d831ec7` for smart contracts
   * @param {*} to To currency in format `1` or `4:0xdac17f958d2ee523a2206206994597c13d831ec7` for smart contracts
   */
  getCurrenciesLimitsByFromToV2(from, to) {
    return this.http.call("GET", "/api/v2/currencies/limits/:from/:to", { pathParams: { "from": from, "to": to }, authed: false });
  }
}
