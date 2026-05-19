// Auto-generated. Do not edit by hand.
import { HttpClient } from "./http.js";

export class WebhooksApi {
  constructor(http: HttpClient);
  /**
   * Updates the webhook configuration for a specific wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/webhooks/routes/putMerchantWalletsWebhookByIdV1
   * @param id the id of the wallet to update the webhook for
   * @param options.body UpdateWalletWebhookRequestDto
   */
  putMerchantWalletsWebhookByIdV1(id: string, options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Updates the webhook configuration for a specific wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/webhooks/routes/putMerchantWalletsWebhookByIdV2
   * @param id the id of the wallet to update the webhook for
   * @param options.body UpdateWalletWebhookRequestDto
   */
  putMerchantWalletsWebhookByIdV2(id: string, options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Updates the webhook configuration for a specific wallet address - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/webhooks/routes/putMerchantWalletsAddressesWebhookByIdAIdV1
   * @param id the id of the wallet containing the address
   * @param aId the id of the address to update the webhook for
   * @param options.body UpdateWalletWebhookRequestDto
   */
  putMerchantWalletsAddressesWebhookByIdAIdV1(id: string, aId: string, options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Updates the webhook configuration for a specific wallet address - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/webhooks/routes/putMerchantWalletsAddressesWebhookByIdAIdV2
   * @param id the id of the wallet containing the address
   * @param aId the id of the address to update the webhook for
   * @param options.body UpdateWalletWebhookRequestDto
   */
  putMerchantWalletsAddressesWebhookByIdAIdV2(id: string, aId: string, options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Create a new webhook for a client - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/webhooks/routes/postMerchantClientsWebhooksByIdV1
   * @param id The public ID of a client
   * @param options.body CreateMerchantClientWebhookRequestDto
   */
  postMerchantClientsWebhooksByIdV1(id: string, options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * List all of the webhooks for a particular client - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/webhooks/routes/getMerchantClientsWebhooksByIdV1
   * @param id Target `ClientId`
   */
  getMerchantClientsWebhooksByIdV1(id: string, options?: { type?: unknown }): Promise<unknown>;

  /**
   * Update an existing webhook for a client - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/webhooks/routes/putMerchantClientsWebhooksByIdWIdV1
   * @param id The public ID of a client
   * @param wId the ID of the webhook to update
   * @param options.body UpdateMerchantClientWebhookDto
   */
  putMerchantClientsWebhooksByIdWIdV1(id: string, wId: string, options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Delete a webhook for a client - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/webhooks/routes/deleteMerchantClientsWebhooksByIdWIdV1
   * @param id the public ID of a client
   * @param wId the ID of the webhook to delete
   */
  deleteMerchantClientsWebhooksByIdWIdV1(id: string, wId: string): Promise<unknown>;

  /**
   * Updates the webhook configuration for a specific wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/webhooks/routes/putMerchantWalletsWebhookByLabelCurrencyV3
   * @param label the unique id for the wallet provided by client
   * @param currency the currency of the wallet to update webhook for
   * @param options.body UpdateWalletWebhookRequestDto
   */
  putMerchantWalletsWebhookByLabelCurrencyV3(label: string, currency: string, options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Updates the webhook configuration for a specific wallet address - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/webhooks/routes/putMerchantWalletsAddressesWebhookByWLabelCurrencyALabelV3
   * @param wLabel the unique label for the wallet provided by client
   * @param currency the currency of the wallet containing the address
   * @param aLabel the unique label for the address provided by client
   * @param options.body UpdateWalletWebhookRequestDto
   */
  putMerchantWalletsAddressesWebhookByWLabelCurrencyALabelV3(wLabel: string, currency: string, aLabel: string, options: { body: Record<string, unknown> }): Promise<unknown>;
}
