// Auto-generated. Do not edit by hand.

export class InvoicesApi {
  constructor(http) {
    this.http = http;
  }

  /**
   * Creates a new invoice - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/postMerchantInvoicesV1
   * @param {object} body - CreateInvoicePaymentWithCurrencyRequestDtoCreateMerchantInvoiceRequestDto
   */
  postMerchantInvoicesV1({ body } = {}) {
    return this.http.call("POST", "/api/v1/merchant/invoices", { body, authed: true });
  }


  /**
   * Creates a new invoice - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/postMerchantInvoicesV2
   * @param {object} body - CreateMerchantInvoiceRequestV2Dto
   */
  postMerchantInvoicesV2({ body } = {}) {
    return this.http.call("POST", "/api/v2/merchant/invoices", { body, authed: true });
  }


  /**
   * Cancels an invoice. - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/postMerchantInvoicesCancelByIdV1
   * @param {*} id 
   */
  postMerchantInvoicesCancelByIdV1(id) {
    return this.http.call("POST", "/api/v1/merchant/invoices/:id/cancel", { pathParams: { "id": id }, authed: true });
  }


  /**
   * Get a list of the current merchant's invoices - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/getMerchantInvoicesV1
   * @param {*} [status] optional query to fetch invoices that were created with the specific client
   * @param {*} [from] optional query to fetch from and including the time specified up to the current time
   * @param {*} [to] optional query to fetch all invoices up to and including the specified time
   * @param {*} [q] optional search string to find invoices with these words
   * @param {*} [integration] optional integration by which the invoice was created
   * @param {*} [payoutWalletId] optional query to filter the invoices by the wallet they were paid out to (for 'paid' and 'completed' invoices)
   * @param {*} [after] cursor that points to the end of the page of data that has been returned
   * @param {*} [limit] the maximum number of objects that may be returned, the query may return fewer results than the requested maximum.  If `after` is specified then `limit` specifies the number of items to return starting from `after`.  If not specified then `limit` specifies the number of items to return from the beginning.
   */
  getMerchantInvoicesV1({ status, from, to, q, integration, payoutWalletId, after, limit } = {}) {
    return this.http.call("GET", "/api/v1/merchant/invoices", { query: { "status": status, "from": from, "to": to, "q": q, "integration": integration, "payoutWalletId": payoutWalletId, "after": after, "limit": limit }, authed: true });
  }


  /**
   * Get a list of the current merchant's invoices - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/getMerchantInvoicesV2
   * @param {*} [status] optional query to fetch invoices that were created with the specific client
   * @param {*} [from] optional query to fetch from and including the time specified up to the current time
   * @param {*} [to] optional query to fetch all invoices up to and including the specified time
   * @param {*} [q] optional search string to find invoices with these words
   * @param {*} [integration] optional integration by which the invoice was created
   * @param {*} [payoutWalletId] optional query to filter the invoices by the wallet they were paid out to (for 'paid' and 'completed' invoices)
   * @param {*} [after] cursor that points to the end of the page of data that has been returned
   * @param {*} [limit] the maximum number of objects that may be returned, the query may return fewer results than the requested maximum.  If `after` is specified then `limit` specifies the number of items to return starting from `after`.  If not specified then `limit` specifies the number of items to return from the beginning.
   */
  getMerchantInvoicesV2({ status, from, to, q, integration, payoutWalletId, after, limit } = {}) {
    return this.http.call("GET", "/api/v2/merchant/invoices", { query: { "status": status, "from": from, "to": to, "q": q, "integration": integration, "payoutWalletId": payoutWalletId, "after": after, "limit": limit }, authed: true });
  }


  /**
   * Creates payment button code for the specified invoice - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/postMerchantInvoicesBuyNowButtonV1
   * @param {object} body - CreateMerchantInvoiceBuyNowButtonHtmlRequestDto
   */
  postMerchantInvoicesBuyNowButtonV1({ body } = {}) {
    return this.http.call("POST", "/api/v1/merchant/invoices/buy-now-button", { body, authed: true });
  }


  /**
   * Creates payment button code for the specified invoice - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/postMerchantInvoicesBuyNowButtonV2
   * @param {object} body - CreateMerchantInvoiceBuyNowButtonHtmlRequestV2Dto
   */
  postMerchantInvoicesBuyNowButtonV2({ body } = {}) {
    return this.http.call("POST", "/api/v2/merchant/invoices/buy-now-button", { body, authed: true });
  }


  /**
   * Provides an object with details for sending payments to the invoice - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/invoices/routes/getInvoicesPaymentCurrenciesByIdCurrencyV1
   * @param {*} id If of active invoice
   * @param {*} currency Currency in format 'id' or 'id:contractAddress' for smart contracts
   */
  getInvoicesPaymentCurrenciesByIdCurrencyV1(id, currency) {
    return this.http.call("GET", "/api/v1/invoices/:id/payment-currencies/:currency", { pathParams: { "id": id, "currency": currency }, authed: false });
  }


  /**
   * Returns the current state of the payment object - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/invoices/routes/getInvoicesPaymentCurrenciesStatusByIdCurrencyV1
   * @param {*} id If of active invoice
   * @param {*} currency Currency in format 'id' or 'id:contractAddress' for smart contracts
   */
  getInvoicesPaymentCurrenciesStatusByIdCurrencyV1(id, currency) {
    return this.http.call("GET", "/api/v1/invoices/:id/payment-currencies/:currency/status", { pathParams: { "id": id, "currency": currency }, authed: false });
  }


  /**
   * Find invoice belonging to merchant by the invoice ID - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/getMerchantInvoicesByIdV1
   * @param {*} id Invoice id
   * @param {*} [includeFullDetails] Indicates whether to return information about Merchant, Metadata, Notes to recipient and email delivery settings
   */
  getMerchantInvoicesByIdV1(id, { includeFullDetails } = {}) {
    return this.http.call("GET", "/api/v1/merchant/invoices/:id", { pathParams: { "id": id }, query: { "include_full_details": includeFullDetails }, authed: true });
  }


  /**
   * Find invoice belonging to merchant by the invoice ID - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/getMerchantInvoicesByIdV2
   * @param {*} id Invoice Id
   * @param {*} [includeFullDetails] Indicates whether to return information about Merchant, Metadata, Notes to recipient and email delivery settings
   */
  getMerchantInvoicesByIdV2(id, { includeFullDetails } = {}) {
    return this.http.call("GET", "/api/v2/merchant/invoices/:id", { pathParams: { "id": id }, query: { "include_full_details": includeFullDetails }, authed: true });
  }


  /**
   * Get payout details for an invoice, including if invoice has been fully paid out, the exact amount they will receive
and in what currency, which address payout will be deposited, and who (Buyer) performed the payment. - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/getMerchantInvoicesPayoutsByIdV1
   * @param {*} id Invoice Id
   */
  getMerchantInvoicesPayoutsByIdV1(id) {
    return this.http.call("GET", "/api/v1/merchant/invoices/:id/payouts", { pathParams: { "id": id }, authed: true });
  }


  /**
   * Get payout details for an invoice, including if invoice has been fully paid out, the exact amount they will receive
and in what currency, which address payout will be deposited, and who (Buyer) performed the payment. - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/getMerchantInvoicesPayoutsByIdV2
   * @param {*} id Invoice id
   */
  getMerchantInvoicesPayoutsByIdV2(id) {
    return this.http.call("GET", "/api/v2/merchant/invoices/:id/payouts", { pathParams: { "id": id }, authed: true });
  }


  /**
   * Lists the history events of an invoice by the invoice ID - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/getMerchantInvoicesHistoryByIdV1
   * @param {*} id Invoice id
   */
  getMerchantInvoicesHistoryByIdV1(id) {
    return this.http.call("GET", "/api/v1/merchant/invoices/:id/history", { pathParams: { "id": id }, authed: true });
  }


  /**
   * Lists the history events of an invoice by the invoice ID - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/getMerchantInvoicesHistoryByIdV2
   * @param {*} id Invoice Id
   */
  getMerchantInvoicesHistoryByIdV2(id) {
    return this.http.call("GET", "/api/v2/merchant/invoices/:id/history", { pathParams: { "id": id }, authed: true });
  }
}
