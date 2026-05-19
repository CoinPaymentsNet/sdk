// Auto-generated. Do not edit by hand.

export class RatesApi {
  constructor(http) {
    this.http = http;
  }

  /**
   * lists the current conversion rates between currencies - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/rates/routes/getRatesV1
   * @param {*} [from] comma separated list of currencies to use as the source for rate calculations. The allowed input format is {currencyId}:{contractAddress}
   * @param {*} [to] comma separated list of currencies for which to retrieve conversion rates for (from the `from` currencies). The allowed input format is {currencyId}:{contractAddress}
   * @param {*} [pointInTime] Point in time for which to get rate, if null the latest rate is returned
   */
  getRatesV1({ from, to, pointInTime } = {}) {
    return this.http.call("GET", "/api/v1/rates", { query: { "from": from, "to": to, "pointInTime": pointInTime }, authed: false });
  }


  /**
   * lists the current conversion rates between currencies - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/rates/routes/getRatesV2
   * @param {*} [from] comma separated list of currencies to use as the source for rate calculations. The allowed input format is {currencyId}:{contractAddress}
   * @param {*} [to] comma separated list of currencies for which to retrieve conversion rates for (from the `from` currencies). The allowed input format is {currencyId}:{contractAddress}
   * @param {*} [pointInTime] Point in time for which to get rate, if null the latest rate is returned
   */
  getRatesV2({ from, to, pointInTime } = {}) {
    return this.http.call("GET", "/api/v2/rates", { query: { "from": from, "to": to, "pointInTime": pointInTime }, authed: false });
  }
}
