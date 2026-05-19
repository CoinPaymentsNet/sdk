// Auto-generated. Do not edit by hand.
import { HttpClient } from "./http.js";

export class TransactionsApi {
  constructor(http: HttpClient);
  /**
   * Lists transactions used for consolidating funds to pay fee for the withdrawal - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsConsolidationTransactionsByIdSpendIdV1
   * @param id the id of the wallet
   * @param spendId ID of the withdrawal (spend request)
   */
  getMerchantWalletsConsolidationTransactionsByIdSpendIdV1(id: string, spendId: string): Promise<unknown>;

  /**
   * Lists transactions used for consolidating funds to pay fee for the withdrawal - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsConsolidationTransactionsByIdSpendIdV2
   * @param id the id of the wallet
   * @param spendId ID of the withdrawal (spend request)
   */
  getMerchantWalletsConsolidationTransactionsByIdSpendIdV2(id: string, spendId: string): Promise<unknown>;

  /**
   * Lists transactions of the wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsTransactionsByIdV1
   * @param id the id of the wallet
   */
  getMerchantWalletsTransactionsByIdV1(id: string, options?: { skip?: number; take?: number }): Promise<unknown>;

  /**
   * Lists transactions of the wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsTransactionsByIdV2
   * @param id the id of the wallet
   */
  getMerchantWalletsTransactionsByIdV2(id: string, options?: { skip?: number; take?: number }): Promise<unknown>;

  /**
   * Get a specific transaction of the wallet, if transactionId is specified for search then the spendRequestId is ignored otherwise a first spending transaction with matching spendRequestId is returned - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsTransactionByIdV1
   * @param id the id of the wallet
   */
  getMerchantWalletsTransactionByIdV1(id: string, options?: { transactionId?: string; spendRequestId?: string }): Promise<unknown>;

  /**
   * Get a specific transaction of the wallet, if transactionId is specified for search then the spendRequestId is ignored otherwise a first spending transaction with matching spendRequestId is returned - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsTransactionByIdV2
   * @param id the id of the wallet
   */
  getMerchantWalletsTransactionByIdV2(id: string, options?: { transactionId?: string; spendRequestId?: string }): Promise<unknown>;

  /**
   * Executes merchant wallet consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsConsolidationByIdToV1
   * @param id the id of the wallet which will be sending funds
   * @param to the id of the wallet which will be receiving funds
   */
  postMerchantWalletsConsolidationByIdToV1(id: string, to: string, options?: { addressIds?: string }): Promise<unknown>;

  /**
   * Executes merchant wallet consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsConsolidationByIdToV2
   * @param id the id of the wallet which will be sending funds
   * @param to the id of the wallet which will be receiving funds
   */
  postMerchantWalletsConsolidationByIdToV2(id: string, to: string, options?: { addressIds?: string }): Promise<unknown>;

  /**
   * Returns info about merchant wallet consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsConsolidationByIdV1
   * @param id the id of the wallet which will be sending funds to the main wallet
   */
  getMerchantWalletsConsolidationByIdV1(id: string, options?: { addressIds?: string }): Promise<unknown>;

  /**
   * Returns info about merchant wallet consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsConsolidationByIdV2
   * @param id the id of the wallet which will be sending funds to the main wallet
   */
  getMerchantWalletsConsolidationByIdV2(id: string, options?: { addressIds?: string }): Promise<unknown>;

  /**
   * Preview merchant wallets consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsConsolidationPreviewV1
   * @param options.body WalletsConsolidationRequestDto
   */
  postMerchantWalletsConsolidationPreviewV1(options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Preview merchant wallets consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsConsolidationPreviewV2
   * @param options.body WalletsConsolidationRequestDto
   */
  postMerchantWalletsConsolidationPreviewV2(options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Execute merchant wallets consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsConsolidationByIdV1
   * @param id the id of the wallet which will be receiving funds
   * @param options.body WalletsConsolidationRequestDto
   */
  postMerchantWalletsConsolidationByIdV1(id: string, options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Execute merchant wallets consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsConsolidationByIdV2
   * @param id the ID of the wallet which will be receiving funds (optional)
   * @param options.body WalletsConsolidationRequestDto
   */
  postMerchantWalletsConsolidationByIdV2(id: string, options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Sends a request to spend funds from the merchant client wallet. Also used to convert funds between supported cryptocurrencies - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsSpendRequestByIdV1
   * @param id the id of the wallet from which to spend funds from
   * @param options.body SpendRequestDto
   */
  postMerchantWalletsSpendRequestByIdV1(id: string, options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Sends a request to spend funds from the merchant client wallet. Also used to convert funds between supported cryptocurrencies - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsSpendRequestByIdV2
   * @param id the id of the wallet from which to spend funds from
   * @param options.body SpendRequestV2Dto
   */
  postMerchantWalletsSpendRequestByIdV2(id: string, options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Sends a request to confirm spending funds from the merchant client wallet, Or to confirm converting funds. - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsSpendConfirmationByIdV1
   * @param id the id of the wallet which to spend funds from
   * @param options.body WalletSpendConfirmationRequestDto
   */
  postMerchantWalletsSpendConfirmationByIdV1(id: string, options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Sends a request to confirm spending funds from the merchant client wallet, Or to confirm converting funds. - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsSpendConfirmationByIdV2
   * @param id the id of the wallet which to spend funds from
   * @param options.body WalletSpendConfirmationRequestDto
   */
  postMerchantWalletsSpendConfirmationByIdV2(id: string, options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Get transactions count of the wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsTransactionsCountByIdV2
   * @param id the id of the wallet
   */
  getMerchantWalletsTransactionsCountByIdV2(id: string): Promise<unknown>;

  /**
   * Get transactions count of the wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsTransactionsCountByLabelCurrencyV3
   * @param label the unique id for the wallet provided by client
   * @param currency the currency of the wallet to count transactions for
   */
  getMerchantWalletsTransactionsCountByLabelCurrencyV3(label: string, currency: string): Promise<unknown>;

  /**
   * Lists transactions of the wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsTransactionsByLabelCurrencyV3
   * @param label the unique id for the wallet provided by client
   * @param currency the currency of the wallet to list transactions for
   */
  getMerchantWalletsTransactionsByLabelCurrencyV3(label: string, currency: string, options?: { skip?: number; take?: number }): Promise<unknown>;

  /**
   * Get a specific transaction of the wallet, if transactionId is specified for search then the spendRequestId is ignored otherwise a first spending transaction with matching spendRequestId is returned - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsTransactionByLabelCurrencyV3
   * @param label the unique id for the wallet provided by client
   * @param currency the currency of the wallet to search transactions in
   */
  getMerchantWalletsTransactionByLabelCurrencyV3(label: string, currency: string, options?: { transactionId?: string; spendRequestId?: string }): Promise<unknown>;

  /**
   * Sends a request to spend funds from the merchant client wallet. Also used to convert funds between supported cryptocurrencies - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsSpendRequestByLabelCurrencyV3
   * @param label the unique label for the wallet provided by client
   * @param currency the currency of the wallet to spend funds from
   * @param options.body SpendRequestV2Dto
   */
  postMerchantWalletsSpendRequestByLabelCurrencyV3(label: string, currency: string, options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Sends a request to confirm spending funds from the merchant client wallet, Or to confirm converting funds. - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsSpendConfirmationByLabelCurrencyV3
   * @param label the unique label for the wallet provided by client
   * @param currency the currency of the wallet to confirm spending from
   * @param options.body WalletSpendConfirmationRequestDto
   */
  postMerchantWalletsSpendConfirmationByLabelCurrencyV3(label: string, currency: string, options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Returns info about merchant wallet consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsConsolidationByLabelCurrencyV3
   * @param label the unique label for the wallet provided by client
   * @param currency the currency of the wallet to get consolidation info for
   */
  getMerchantWalletsConsolidationByLabelCurrencyV3(label: string, currency: string, options?: { uniqueAddressLabels?: string }): Promise<unknown>;

  /**
   * Executes merchant wallet consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsConsolidationByLabelCurrencyToV3
   * @param label the unique label for the wallet provided by client
   * @param currency the currency of the wallet to consolidate funds from
   * @param to the label of the wallet which will be receiving funds
   */
  postMerchantWalletsConsolidationByLabelCurrencyToV3(label: string, currency: string, to: string, options?: { uniqueAddressLabels?: string }): Promise<unknown>;

  /**
   * Execute merchant wallets consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsConsolidationByToV3
   * @param to the ID of the wallet which will be receiving funds (optional)
   * @param options.body WalletsConsolidationRequestV3Dto
   */
  postMerchantWalletsConsolidationByToV3(to: string, options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Preview merchant wallets consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/postMerchantWalletsConsolidationPreviewV3
   * @param options.body WalletsConsolidationRequestV3Dto
   */
  postMerchantWalletsConsolidationPreviewV3(options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Lists transactions used for consolidating funds to pay fee for the withdrawal - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/transactions/routes/getMerchantWalletsConsolidationTransactionsByLabelCurrencyIdV3
   * @param label the unique label for the wallet provided by client
   * @param currency the currency of the wallet to list consolidation transactions for
   * @param id ID of the withdrawal (spend request)
   */
  getMerchantWalletsConsolidationTransactionsByLabelCurrencyIdV3(label: string, currency: string, id: string): Promise<unknown>;
}
