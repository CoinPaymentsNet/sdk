// Auto-generated. Do not edit by hand.
import { HttpClient } from "./http.js";

export class AccessControlApi {
  constructor(http: HttpClient);
  /**
   * Allows merchant clients to downgrade their access scope by reducing permissions - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/accessControl/routes/postMerchantClientsAccessControlV1
   * @param options.body UpdateMerchantClientAccessControlDto
   */
  postMerchantClientsAccessControlV1(options: { body: Record<string, unknown> }): Promise<unknown>;

  /**
   * Retrieves the current allowed access control scope for the authenticated merchant client - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/accessControl/routes/getMerchantClientsAccessControlV1
   */
  getMerchantClientsAccessControlV1(): Promise<unknown>;
}
