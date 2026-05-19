// Auto-generated. Do not edit by hand.
import { HttpClient } from "./http.js";

export class WalletsApi {
  constructor(http: HttpClient);
  /**
   * Creates a new merchant wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/postMerchantWalletsV1
   * @param options.body NewWalletRequestDto
   */
  postMerchantWalletsV1(options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Creates a new merchant wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/postMerchantWalletsV2
   * @param options.body NewWalletRequestV2Dto
   */
  postMerchantWalletsV2(options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Lists merchant client wallets (up to 100 wallets per response) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsV1
   */
  getMerchantWalletsV1(options?: { skip?: number; take?: number }): Promise<unknown>;

  /**
   * Lists merchant client wallets (up to 100 wallets per response) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsV2
   */
  getMerchantWalletsV2(options?: { skip?: number; take?: number }): Promise<unknown>;

  /**
   * Finds a merchant client wallet by id - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsByIdV1
   * @param id the id of the wallet
   */
  getMerchantWalletsByIdV1(id: string): Promise<unknown>;

  /**
   * Finds a merchant client wallet by id - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsByIdV2
   * @param id the id of the wallet
   */
  getMerchantWalletsByIdV2(id: string): Promise<unknown>;

  /**
   * Creates an address under a wallet by the wallet ID - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/postMerchantWalletsAddressesByIdV1
   * @param id the ID of the wallet to create the address under
   * @param options.body CreateMerchantWalletAddressRequestDto
   */
  postMerchantWalletsAddressesByIdV1(id: string, options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Creates an address under a wallet by the wallet ID - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/postMerchantWalletsAddressesByIdV2
   * @param id the id of the wallet to create the address under
   * @param options.body CreateMerchantWalletAddressRequestDto
   */
  postMerchantWalletsAddressesByIdV2(id: string, options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Lists all merchant addresses of a specific wallet by the wallet Id - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsAddressesByIdV1
   * @param id the id of the wallet
   */
  getMerchantWalletsAddressesByIdV1(id: string, options?: { skip?: number; take?: number }): Promise<unknown>;

  /**
   * Lists all merchant addresses of a specific wallet by the wallet Id - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsAddressesByIdV2
   * @param id the id of the wallet
   */
  getMerchantWalletsAddressesByIdV2(id: string, options?: { skip?: number; take?: number }): Promise<unknown>;

  /**
   * Get a specific address by its Id and the Id of the wallet it belongs to - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsAddressesByIdAIdV1
   * @param id the id of the wallet containing the address
   * @param aId the id of the address to retrieve
   */
  getMerchantWalletsAddressesByIdAIdV1(id: string, aId: string): Promise<unknown>;

  /**
   * Get a specific address by its Id and the Id of the wallet it belongs to - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsAddressesByIdAIdV2
   * @param id the id of the wallet containing the address
   * @param aId the id of the address to retrieve
   */
  getMerchantWalletsAddressesByIdAIdV2(id: string, aId: string): Promise<unknown>;

  /**
   * Get merchant client wallets count - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsCountV2
   */
  getMerchantWalletsCountV2(): Promise<unknown>;

  /**
   * Get merchant addresses count of a specific wallet by the wallet Id - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsAddressesCountByIdV2
   * @param id the id of the wallet
   */
  getMerchantWalletsAddressesCountByIdV2(id: string): Promise<unknown>;

  /**
   * Returns the wallet balance in a specific date time offset - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsBalanceByIdDateV1
   * @param id the wallet id
   * @param date the specific date time offset to retrieve what the wallet balance was at that time
   */
  getMerchantWalletsBalanceByIdDateV1(id: string, date: string): Promise<unknown>;

  /**
   * Returns the wallet balance in a specific date time offset - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsBalanceByIdDateV2
   * @param id the wallet id
   * @param date the specific date time offset to retrieve what the wallet balance was at that time
   */
  getMerchantWalletsBalanceByIdDateV2(id: string, date: string): Promise<unknown>;

  /**
   * Lists merchant client wallets (up to 100 wallets per response) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsV3
   */
  getMerchantWalletsV3(options?: { skip?: number; take?: number }): Promise<unknown>;

  /**
   * Creates or retrieves a wallet and address by external Ids - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/putMerchantWalletsV3
   * @param options.body NewWalletAndAddressRequestV3Dto
   */
  putMerchantWalletsV3(options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Get merchant client wallets count - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsCountV3
   */
  getMerchantWalletsCountV3(): Promise<unknown>;

  /**
   * Get merchant addresses count of a specific wallet by the wallet label - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsAddressesCountByLabelCurrencyV3
   * @param label the unique label for the wallet provided by client
   * @param currency the currency of the wallet
   */
  getMerchantWalletsAddressesCountByLabelCurrencyV3(label: string, currency: string): Promise<unknown>;

  /**
   * Lists all merchant addresses of a specific wallet by unique wallet label and currency Id - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsAddressesByLabelCurrencyV3
   * @param label the unique id for the wallet provided by client
   * @param currency the currency of the wallet to list addresses for
   */
  getMerchantWalletsAddressesByLabelCurrencyV3(label: string, currency: string, options?: { skip?: number; take?: number }): Promise<unknown>;

  /**
   * Get a specific address by its label and the label of the wallet it belongs to - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsAddressesByWLabelCurrencyALabelV3
   * @param wLabel the unique label for the wallet provided by client
   * @param currency the currency of the wallet containing the address
   * @param aLabel the unique label for the address provided by client
   */
  getMerchantWalletsAddressesByWLabelCurrencyALabelV3(wLabel: string, currency: string, aLabel: string): Promise<unknown>;
}
