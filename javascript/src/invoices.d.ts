// Auto-generated. Do not edit by hand.
import { HttpClient } from "./http.js";

export class InvoicesApi {
  constructor(http: HttpClient);
  /**
   * Creates a new invoice - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/postMerchantInvoicesV1
   * @param options.body CreateInvoicePaymentWithCurrencyRequestDtoCreateMerchantInvoiceRequestDto
   */
  postMerchantInvoicesV1(options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Creates a new invoice - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/postMerchantInvoicesV2
   * @param options.body CreateMerchantInvoiceRequestV2Dto
   */
  postMerchantInvoicesV2(options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Cancels an invoice. - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/postMerchantInvoicesCancelByIdV1
   */
  postMerchantInvoicesCancelByIdV1(id: string): Promise<unknown>;

  /**
   * Get a list of the current merchant's invoices - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/getMerchantInvoicesV1
   */
  getMerchantInvoicesV1(options?: { status?: unknown; from?: string; to?: string; q?: string; integration?: string; payoutWalletId?: string; after?: string; limit?: number }): Promise<unknown>;

  /**
   * Get a list of the current merchant's invoices - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/getMerchantInvoicesV2
   */
  getMerchantInvoicesV2(options?: { status?: unknown; from?: string; to?: string; q?: string; integration?: string; payoutWalletId?: string; after?: string; limit?: number }): Promise<unknown>;

  /**
   * Creates payment button code for the specified invoice - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/postMerchantInvoicesBuyNowButtonV1
   * @param options.body CreateMerchantInvoiceBuyNowButtonHtmlRequestDto
   */
  postMerchantInvoicesBuyNowButtonV1(options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Creates payment button code for the specified invoice - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/postMerchantInvoicesBuyNowButtonV2
   * @param options.body CreateMerchantInvoiceBuyNowButtonHtmlRequestV2Dto
   */
  postMerchantInvoicesBuyNowButtonV2(options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Provides an object with details for sending payments to the invoice - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/invoices/routes/getInvoicesPaymentCurrenciesByIdCurrencyV1
   * @param id If of active invoice
   * @param currency Currency in format 'id' or 'id:contractAddress' for smart contracts
   */
  getInvoicesPaymentCurrenciesByIdCurrencyV1(id: string, currency: string): Promise<unknown>;

  /**
   * Returns the current state of the payment object - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/invoices/routes/getInvoicesPaymentCurrenciesStatusByIdCurrencyV1
   * @param id If of active invoice
   * @param currency Currency in format 'id' or 'id:contractAddress' for smart contracts
   */
  getInvoicesPaymentCurrenciesStatusByIdCurrencyV1(id: string, currency: string): Promise<unknown>;

  /**
   * Find invoice belonging to merchant by the invoice ID - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/getMerchantInvoicesByIdV1
   * @param id Invoice id
   */
  getMerchantInvoicesByIdV1(id: string, options?: { includeFullDetails?: boolean }): Promise<unknown>;

  /**
   * Find invoice belonging to merchant by the invoice ID - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/getMerchantInvoicesByIdV2
   * @param id Invoice Id
   */
  getMerchantInvoicesByIdV2(id: string, options?: { includeFullDetails?: boolean }): Promise<unknown>;

  /**
   * Get payout details for an invoice, including if invoice has been fully paid out, the exact amount they will receive
and in what currency, which address payout will be deposited, and who (Buyer) performed the payment. - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/getMerchantInvoicesPayoutsByIdV1
   * @param id Invoice Id
   */
  getMerchantInvoicesPayoutsByIdV1(id: string): Promise<unknown>;

  /**
   * Get payout details for an invoice, including if invoice has been fully paid out, the exact amount they will receive
and in what currency, which address payout will be deposited, and who (Buyer) performed the payment. - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/getMerchantInvoicesPayoutsByIdV2
   * @param id Invoice id
   */
  getMerchantInvoicesPayoutsByIdV2(id: string): Promise<unknown>;

  /**
   * Lists the history events of an invoice by the invoice ID - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/getMerchantInvoicesHistoryByIdV1
   * @param id Invoice id
   */
  getMerchantInvoicesHistoryByIdV1(id: string): Promise<unknown>;

  /**
   * Lists the history events of an invoice by the invoice ID - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/invoices/routes/getMerchantInvoicesHistoryByIdV2
   * @param id Invoice Id
   */
  getMerchantInvoicesHistoryByIdV2(id: string): Promise<unknown>;
}
