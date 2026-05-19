// Auto-generated. Do not edit by hand.

export class WebhooksApi {
  constructor(http) {
    this.http = http;
  }

  /**
   * Updates the webhook configuration for a specific wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/webhooks/routes/putMerchantWalletsWebhookByIdV1
   * @param {*} id the id of the wallet to update the webhook for
   * @param {object} body - UpdateWalletWebhookRequestDto
   */
  putMerchantWalletsWebhookByIdV1(id, { body } = {}) {
    return this.http.call("PUT", "/api/v1/merchant/wallets/:id/webhook", { pathParams: { "id": id }, body, authed: true });
  }


  /**
   * Updates the webhook configuration for a specific wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/webhooks/routes/putMerchantWalletsWebhookByIdV2
   * @param {*} id the id of the wallet to update the webhook for
   * @param {object} body - UpdateWalletWebhookRequestDto
   */
  putMerchantWalletsWebhookByIdV2(id, { body } = {}) {
    return this.http.call("PUT", "/api/v2/merchant/wallets/:id/webhook", { pathParams: { "id": id }, body, authed: true });
  }


  /**
   * Updates the webhook configuration for a specific wallet address - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/webhooks/routes/putMerchantWalletsAddressesWebhookByIdAIdV1
   * @param {*} id the id of the wallet containing the address
   * @param {*} aId the id of the address to update the webhook for
   * @param {object} body - UpdateWalletWebhookRequestDto
   */
  putMerchantWalletsAddressesWebhookByIdAIdV1(id, aId, { body } = {}) {
    return this.http.call("PUT", "/api/v1/merchant/wallets/:id/addresses/:aId/webhook", { pathParams: { "id": id, "aId": aId }, body, authed: true });
  }


  /**
   * Updates the webhook configuration for a specific wallet address - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/webhooks/routes/putMerchantWalletsAddressesWebhookByIdAIdV2
   * @param {*} id the id of the wallet containing the address
   * @param {*} aId the id of the address to update the webhook for
   * @param {object} body - UpdateWalletWebhookRequestDto
   */
  putMerchantWalletsAddressesWebhookByIdAIdV2(id, aId, { body } = {}) {
    return this.http.call("PUT", "/api/v2/merchant/wallets/:id/addresses/:aId/webhook", { pathParams: { "id": id, "aId": aId }, body, authed: true });
  }


  /**
   * Create a new webhook for a client - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/webhooks/routes/postMerchantClientsWebhooksByIdV1
   * @param {*} id The public ID of a client
   * @param {object} body - CreateMerchantClientWebhookRequestDto
   */
  postMerchantClientsWebhooksByIdV1(id, { body } = {}) {
    return this.http.call("POST", "/api/v1/merchant/clients/:id/webhooks", { pathParams: { "id": id }, body, authed: true });
  }


  /**
   * List all of the webhooks for a particular client - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/webhooks/routes/getMerchantClientsWebhooksByIdV1
   * @param {*} id Target `ClientId`
   * @param {*} [type] Notification type. Null for all
   */
  getMerchantClientsWebhooksByIdV1(id, { type } = {}) {
    return this.http.call("GET", "/api/v1/merchant/clients/:id/webhooks", { pathParams: { "id": id }, query: { "type": type }, authed: true });
  }


  /**
   * Update an existing webhook for a client - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/webhooks/routes/putMerchantClientsWebhooksByIdWIdV1
   * @param {*} id The public ID of a client
   * @param {*} wId the ID of the webhook to update
   * @param {object} body - UpdateMerchantClientWebhookDto
   */
  putMerchantClientsWebhooksByIdWIdV1(id, wId, { body } = {}) {
    return this.http.call("PUT", "/api/v1/merchant/clients/:id/webhooks/:wId", { pathParams: { "id": id, "wId": wId }, body, authed: true });
  }


  /**
   * Delete a webhook for a client - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/webhooks/routes/deleteMerchantClientsWebhooksByIdWIdV1
   * @param {*} id the public ID of a client
   * @param {*} wId the ID of the webhook to delete
   */
  deleteMerchantClientsWebhooksByIdWIdV1(id, wId) {
    return this.http.call("DELETE", "/api/v1/merchant/clients/:id/webhooks/:wId", { pathParams: { "id": id, "wId": wId }, authed: true });
  }


  /**
   * Updates the webhook configuration for a specific wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/webhooks/routes/putMerchantWalletsWebhookByLabelCurrencyV3
   * @param {*} label the unique id for the wallet provided by client
   * @param {*} currency the currency of the wallet to update webhook for
   * @param {object} body - UpdateWalletWebhookRequestDto
   */
  putMerchantWalletsWebhookByLabelCurrencyV3(label, currency, { body } = {}) {
    return this.http.call("PUT", "/api/v3/merchant/wallets/:label/:currency/webhook", { pathParams: { "label": label, "currency": currency }, body, authed: true });
  }


  /**
   * Updates the webhook configuration for a specific wallet address - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/webhooks/routes/putMerchantWalletsAddressesWebhookByWLabelCurrencyALabelV3
   * @param {*} wLabel the unique label for the wallet provided by client
   * @param {*} currency the currency of the wallet containing the address
   * @param {*} aLabel the unique label for the address provided by client
   * @param {object} body - UpdateWalletWebhookRequestDto
   */
  putMerchantWalletsAddressesWebhookByWLabelCurrencyALabelV3(wLabel, currency, aLabel, { body } = {}) {
    return this.http.call("PUT", "/api/v3/merchant/wallets/:wLabel/:currency/addresses/:aLabel/webhook", { pathParams: { "wLabel": wLabel, "currency": currency, "aLabel": aLabel }, body, authed: true });
  }
}
