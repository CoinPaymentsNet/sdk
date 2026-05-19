// Auto-generated. Do not edit by hand.
import { HttpClient } from "./http.js";

export class RatesApi {
  constructor(http: HttpClient);
  /**
   * lists the current conversion rates between currencies - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/rates/routes/getRatesV1
   */
  getRatesV1(options?: { from?: string; to?: string; pointInTime?: string }): Promise<unknown>;

  /**
   * lists the current conversion rates between currencies - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/rates/routes/getRatesV2
   */
  getRatesV2(options?: { from?: string; to?: string; pointInTime?: string }): Promise<unknown>;
}
