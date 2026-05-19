// Auto-generated. Do not edit by hand.

export class AccessControlApi {
  constructor(http) {
    this.http = http;
  }

  /**
   * Allows merchant clients to downgrade their access scope by reducing permissions - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/accessControl/routes/postMerchantClientsAccessControlV1
   * @param {object} body - UpdateMerchantClientAccessControlDto
   */
  postMerchantClientsAccessControlV1({ body } = {}) {
    return this.http.call("POST", "/api/v1/merchant/clients/access-control", { body, authed: true });
  }


  /**
   * Retrieves the current allowed access control scope for the authenticated merchant client - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/accessControl/routes/getMerchantClientsAccessControlV1
   */
  getMerchantClientsAccessControlV1() {
    return this.http.call("GET", "/api/v1/merchant/clients/access-control", { authed: true });
  }
}
