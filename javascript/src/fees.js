// Auto-generated. Do not edit by hand.

export class FeesApi {
  constructor(http) {
    this.http = http;
  }

  /**
   * Returns the current blockchain fee for sending funds from the CoinPayments system to an external address - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/fees/routes/getFeesBlockchainByIdV1
   * @param {*} id Currency in format `1` or `4:0xdac17f958d2ee523a2206206994597c13d831ec7` for smart contracts
   */
  getFeesBlockchainByIdV1(id) {
    return this.http.call("GET", "/api/v1/fees/blockchain/:id", { pathParams: { "id": id }, authed: false });
  }


  /**
   * Returns the current blockchain fee for sending funds from the CoinPayments system to an external address - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/fees/routes/getFeesBlockchainByIdV2
   * @param {*} id Currency in format `1` or `4:0xdac17f958d2ee523a2206206994597c13d831ec7` for smart contracts
   */
  getFeesBlockchainByIdV2(id) {
    return this.http.call("GET", "/api/v2/fees/blockchain/:id", { pathParams: { "id": id }, authed: false });
  }
}
