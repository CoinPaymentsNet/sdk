// Auto-generated. Do not edit by hand.

export class TransactionsApi {
  constructor(http) {
    this.http = http;
  }

  /**
   * Lists transactions used for consolidating funds to pay fee for the withdrawal - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsConsolidationTransactionsByIdSpendIdV1
   * @param {*} id the id of the wallet
   * @param {*} spendId ID of the withdrawal (spend request)
   */
  getMerchantWalletsConsolidationTransactionsByIdSpendIdV1(id, spendId) {
    return this.http.call("GET", "/api/v1/merchant/wallets/:id/consolidation-transactions/:spendId", { pathParams: { "id": id, "spendId": spendId }, authed: true });
  }


  /**
   * Lists transactions used for consolidating funds to pay fee for the withdrawal - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsConsolidationTransactionsByIdSpendIdV2
   * @param {*} id the id of the wallet
   * @param {*} spendId ID of the withdrawal (spend request)
   */
  getMerchantWalletsConsolidationTransactionsByIdSpendIdV2(id, spendId) {
    return this.http.call("GET", "/api/v2/merchant/wallets/:id/consolidation-transactions/:spendId", { pathParams: { "id": id, "spendId": spendId }, authed: true });
  }


  /**
   * Lists transactions of the wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsTransactionsByIdV1
   * @param {*} id the id of the wallet
   * @param {*} [skip] how many transactions to skip (used for paging)
   * @param {*} [take] how many transactions to take (used for paging)
   */
  getMerchantWalletsTransactionsByIdV1(id, { skip, take } = {}) {
    return this.http.call("GET", "/api/v1/merchant/wallets/:id/transactions", { pathParams: { "id": id }, query: { "skip": skip, "take": take }, authed: true });
  }


  /**
   * Lists transactions of the wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsTransactionsByIdV2
   * @param {*} id the id of the wallet
   * @param {*} [skip] how many transactions to skip (used for paging)
   * @param {*} [take] how many transactions to take (used for paging)
   */
  getMerchantWalletsTransactionsByIdV2(id, { skip, take } = {}) {
    return this.http.call("GET", "/api/v2/merchant/wallets/:id/transactions", { pathParams: { "id": id }, query: { "skip": skip, "take": take }, authed: true });
  }


  /**
   * Get a specific transaction of the wallet, if transactionId is specified for search then the spendRequestId is ignored otherwise a first spending transaction with matching spendRequestId is returned - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsTransactionByIdV1
   * @param {*} id the id of the wallet
   * @param {*} [transactionId] Id of the transaction to look for
   * @param {*} [spendRequestId] SpendRequestId of the transaction to look for
   */
  getMerchantWalletsTransactionByIdV1(id, { transactionId, spendRequestId } = {}) {
    return this.http.call("GET", "/api/v1/merchant/wallets/:id/transaction", { pathParams: { "id": id }, query: { "transactionId": transactionId, "spendRequestId": spendRequestId }, authed: true });
  }


  /**
   * Get a specific transaction of the wallet, if transactionId is specified for search then the spendRequestId is ignored otherwise a first spending transaction with matching spendRequestId is returned - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsTransactionByIdV2
   * @param {*} id the id of the wallet
   * @param {*} [transactionId] Id of the transaction to look for
   * @param {*} [spendRequestId] SpendRequestId of the transaction to look for
   */
  getMerchantWalletsTransactionByIdV2(id, { transactionId, spendRequestId } = {}) {
    return this.http.call("GET", "/api/v2/merchant/wallets/:id/transaction", { pathParams: { "id": id }, query: { "transactionId": transactionId, "spendRequestId": spendRequestId }, authed: true });
  }


  /**
   * Executes merchant wallet consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsConsolidationByIdToV1
   * @param {*} id the id of the wallet which will be sending funds
   * @param {*} to the id of the wallet which will be receiving funds
   * @param {*} [addressIds] Comma-separated IDs of addresses for consolidation
   */
  postMerchantWalletsConsolidationByIdToV1(id, to, { addressIds } = {}) {
    return this.http.call("POST", "/api/v1/merchant/wallets/:id/consolidation/:to", { pathParams: { "id": id, "to": to }, query: { "addressIds": addressIds }, authed: true });
  }


  /**
   * Executes merchant wallet consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsConsolidationByIdToV2
   * @param {*} id the id of the wallet which will be sending funds
   * @param {*} to the id of the wallet which will be receiving funds
   * @param {*} [addressIds] Comma-separated IDs of addresses for consolidation
   */
  postMerchantWalletsConsolidationByIdToV2(id, to, { addressIds } = {}) {
    return this.http.call("POST", "/api/v2/merchant/wallets/:id/consolidation/:to", { pathParams: { "id": id, "to": to }, query: { "addressIds": addressIds }, authed: true });
  }


  /**
   * Returns info about merchant wallet consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsConsolidationByIdV1
   * @param {*} id the id of the wallet which will be sending funds to the main wallet
   * @param {*} [addressIds] Comma-separated IDs of addresses for consolidation
   */
  getMerchantWalletsConsolidationByIdV1(id, { addressIds } = {}) {
    return this.http.call("GET", "/api/v1/merchant/wallets/:id/consolidation", { pathParams: { "id": id }, query: { "addressIds": addressIds }, authed: true });
  }


  /**
   * Returns info about merchant wallet consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsConsolidationByIdV2
   * @param {*} id the id of the wallet which will be sending funds to the main wallet
   * @param {*} [addressIds] Comma-separated IDs of addresses for consolidation
   */
  getMerchantWalletsConsolidationByIdV2(id, { addressIds } = {}) {
    return this.http.call("GET", "/api/v2/merchant/wallets/:id/consolidation", { pathParams: { "id": id }, query: { "addressIds": addressIds }, authed: true });
  }


  /**
   * Preview merchant wallets consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsConsolidationPreviewV1
   * @param {object} body - WalletsConsolidationRequestDto
   */
  postMerchantWalletsConsolidationPreviewV1({ body } = {}) {
    return this.http.call("POST", "/api/v1/merchant/wallets/consolidation-preview", { body, authed: true });
  }


  /**
   * Preview merchant wallets consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsConsolidationPreviewV2
   * @param {object} body - WalletsConsolidationRequestDto
   */
  postMerchantWalletsConsolidationPreviewV2({ body } = {}) {
    return this.http.call("POST", "/api/v2/merchant/wallets/consolidation-preview", { body, authed: true });
  }


  /**
   * Execute merchant wallets consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsConsolidationByIdV1
   * @param {*} id the id of the wallet which will be receiving funds
   * @param {object} body - WalletsConsolidationRequestDto
   */
  postMerchantWalletsConsolidationByIdV1(id, { body } = {}) {
    return this.http.call("POST", "/api/v1/merchant/wallets/consolidation/:id", { pathParams: { "id": id }, body, authed: true });
  }


  /**
   * Execute merchant wallets consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsConsolidationByIdV2
   * @param {*} id the ID of the wallet which will be receiving funds (optional)
   * @param {object} body - WalletsConsolidationRequestDto
   */
  postMerchantWalletsConsolidationByIdV2(id, { body } = {}) {
    return this.http.call("POST", "/api/v2/merchant/wallets/consolidation/:id", { pathParams: { "id": id }, body, authed: true });
  }


  /**
   * Sends a request to spend funds from the merchant client wallet. Also used to convert funds between supported cryptocurrencies - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsSpendRequestByIdV1
   * @param {*} id the id of the wallet from which to spend funds from
   * @param {object} body - SpendRequestDto
   */
  postMerchantWalletsSpendRequestByIdV1(id, { body } = {}) {
    return this.http.call("POST", "/api/v1/merchant/wallets/:id/spend/request", { pathParams: { "id": id }, body, authed: true });
  }


  /**
   * Sends a request to spend funds from the merchant client wallet. Also used to convert funds between supported cryptocurrencies - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsSpendRequestByIdV2
   * @param {*} id the id of the wallet from which to spend funds from
   * @param {object} body - SpendRequestV2Dto
   */
  postMerchantWalletsSpendRequestByIdV2(id, { body } = {}) {
    return this.http.call("POST", "/api/v2/merchant/wallets/:id/spend/request", { pathParams: { "id": id }, body, authed: true });
  }


  /**
   * Sends a request to confirm spending funds from the merchant client wallet, Or to confirm converting funds. - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsSpendConfirmationByIdV1
   * @param {*} id the id of the wallet which to spend funds from
   * @param {object} body - WalletSpendConfirmationRequestDto
   */
  postMerchantWalletsSpendConfirmationByIdV1(id, { body } = {}) {
    return this.http.call("POST", "/api/v1/merchant/wallets/:id/spend/confirmation", { pathParams: { "id": id }, body, authed: true });
  }


  /**
   * Sends a request to confirm spending funds from the merchant client wallet, Or to confirm converting funds. - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsSpendConfirmationByIdV2
   * @param {*} id the id of the wallet which to spend funds from
   * @param {object} body - WalletSpendConfirmationRequestDto
   */
  postMerchantWalletsSpendConfirmationByIdV2(id, { body } = {}) {
    return this.http.call("POST", "/api/v2/merchant/wallets/:id/spend/confirmation", { pathParams: { "id": id }, body, authed: true });
  }


  /**
   * Get transactions count of the wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsTransactionsCountByIdV2
   * @param {*} id the id of the wallet
   */
  getMerchantWalletsTransactionsCountByIdV2(id) {
    return this.http.call("GET", "/api/v2/merchant/wallets/:id/transactions/count", { pathParams: { "id": id }, authed: true });
  }


  /**
   * Get transactions count of the wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsTransactionsCountByLabelCurrencyV3
   * @param {*} label the unique id for the wallet provided by client
   * @param {*} currency the currency of the wallet to count transactions for
   */
  getMerchantWalletsTransactionsCountByLabelCurrencyV3(label, currency) {
    return this.http.call("GET", "/api/v3/merchant/wallets/:label/:currency/transactions/count", { pathParams: { "label": label, "currency": currency }, authed: true });
  }


  /**
   * Lists transactions of the wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsTransactionsByLabelCurrencyV3
   * @param {*} label the unique id for the wallet provided by client
   * @param {*} currency the currency of the wallet to list transactions for
   * @param {*} [skip] how many transactions to skip (used for paging)
   * @param {*} [take] how many transactions to take (used for paging)
   */
  getMerchantWalletsTransactionsByLabelCurrencyV3(label, currency, { skip, take } = {}) {
    return this.http.call("GET", "/api/v3/merchant/wallets/:label/:currency/transactions", { pathParams: { "label": label, "currency": currency }, query: { "skip": skip, "take": take }, authed: true });
  }


  /**
   * Get a specific transaction of the wallet, if transactionId is specified for search then the spendRequestId is ignored otherwise a first spending transaction with matching spendRequestId is returned - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsTransactionByLabelCurrencyV3
   * @param {*} label the unique id for the wallet provided by client
   * @param {*} currency the currency of the wallet to search transactions in
   * @param {*} [transactionId] Id of the transaction to look for
   * @param {*} [spendRequestId] SpendRequestId of the transaction to look for
   */
  getMerchantWalletsTransactionByLabelCurrencyV3(label, currency, { transactionId, spendRequestId } = {}) {
    return this.http.call("GET", "/api/v3/merchant/wallets/:label/:currency/transaction", { pathParams: { "label": label, "currency": currency }, query: { "transactionId": transactionId, "spendRequestId": spendRequestId }, authed: true });
  }


  /**
   * Sends a request to spend funds from the merchant client wallet. Also used to convert funds between supported cryptocurrencies - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsSpendRequestByLabelCurrencyV3
   * @param {*} label the unique label for the wallet provided by client
   * @param {*} currency the currency of the wallet to spend funds from
   * @param {object} body - SpendRequestV2Dto
   */
  postMerchantWalletsSpendRequestByLabelCurrencyV3(label, currency, { body } = {}) {
    return this.http.call("POST", "/api/v3/merchant/wallets/:label/:currency/spend/request", { pathParams: { "label": label, "currency": currency }, body, authed: true });
  }


  /**
   * Sends a request to confirm spending funds from the merchant client wallet, Or to confirm converting funds. - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsSpendConfirmationByLabelCurrencyV3
   * @param {*} label the unique label for the wallet provided by client
   * @param {*} currency the currency of the wallet to confirm spending from
   * @param {object} body - WalletSpendConfirmationRequestDto
   */
  postMerchantWalletsSpendConfirmationByLabelCurrencyV3(label, currency, { body } = {}) {
    return this.http.call("POST", "/api/v3/merchant/wallets/:label/:currency/spend/confirmation", { pathParams: { "label": label, "currency": currency }, body, authed: true });
  }


  /**
   * Returns info about merchant wallet consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsConsolidationByLabelCurrencyV3
   * @param {*} label the unique label for the wallet provided by client
   * @param {*} currency the currency of the wallet to get consolidation info for
   * @param {*} [uniqueAddressLabels] Comma-separated unique labels of addresses for consolidation
   */
  getMerchantWalletsConsolidationByLabelCurrencyV3(label, currency, { uniqueAddressLabels } = {}) {
    return this.http.call("GET", "/api/v3/merchant/wallets/:label/:currency/consolidation", { pathParams: { "label": label, "currency": currency }, query: { "uniqueAddressLabels": uniqueAddressLabels }, authed: true });
  }


  /**
   * Executes merchant wallet consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsConsolidationByLabelCurrencyToV3
   * @param {*} label the unique label for the wallet provided by client
   * @param {*} currency the currency of the wallet to consolidate funds from
   * @param {*} to the label of the wallet which will be receiving funds
   * @param {*} [uniqueAddressLabels] Comma-separated unique address labels for consolidation
   */
  postMerchantWalletsConsolidationByLabelCurrencyToV3(label, currency, to, { uniqueAddressLabels } = {}) {
    return this.http.call("POST", "/api/v3/merchant/wallets/:label/:currency/consolidation/:to", { pathParams: { "label": label, "currency": currency, "to": to }, query: { "uniqueAddressLabels": uniqueAddressLabels }, authed: true });
  }


  /**
   * Execute merchant wallets consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsConsolidationByToV3
   * @param {*} to the ID of the wallet which will be receiving funds (optional)
   * @param {object} body - WalletsConsolidationRequestV3Dto
   */
  postMerchantWalletsConsolidationByToV3(to, { body } = {}) {
    return this.http.call("POST", "/api/v3/merchant/wallets/consolidation/:to", { pathParams: { "to": to }, body, authed: true });
  }


  /**
   * Preview merchant wallets consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsConsolidationPreviewV3
   * @param {object} body - WalletsConsolidationRequestV3Dto
   */
  postMerchantWalletsConsolidationPreviewV3({ body } = {}) {
    return this.http.call("POST", "/api/v3/merchant/wallets/consolidation-preview", { body, authed: true });
  }


  /**
   * Lists transactions used for consolidating funds to pay fee for the withdrawal - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsConsolidationTransactionsByLabelCurrencyIdV3
   * @param {*} label the unique label for the wallet provided by client
   * @param {*} currency the currency of the wallet to list consolidation transactions for
   * @param {*} id ID of the withdrawal (spend request)
   */
  getMerchantWalletsConsolidationTransactionsByLabelCurrencyIdV3(label, currency, id) {
    return this.http.call("GET", "/api/v3/merchant/wallets/:label/:currency/consolidation-transactions/:id", { pathParams: { "label": label, "currency": currency, "id": id }, authed: true });
  }
}
