// Auto-generated. Do not edit by hand.
import { HttpClient } from "./http.js";

export class FeesApi {
  constructor(http: HttpClient);
  /**
   * Returns the current blockchain fee for sending funds from the CoinPayments system to an external address - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/fees/routes/getFeesBlockchainByIdV1
   * @param id Currency in format `1` or `4:0xdac17f958d2ee523a2206206994597c13d831ec7` for smart contracts
   */
  getFeesBlockchainByIdV1(id: string): Promise<unknown>;

  /**
   * Returns the current blockchain fee for sending funds from the CoinPayments system to an external address - Supports Auth methods: Anonymous
   * @see https://docs.coinpayments.net/api/fees/routes/getFeesBlockchainByIdV2
   * @param id Currency in format `1` or `4:0xdac17f958d2ee523a2206206994597c13d831ec7` for smart contracts
   */
  getFeesBlockchainByIdV2(id: string): Promise<unknown>;
}
