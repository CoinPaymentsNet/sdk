// Auto-generated. Do not edit by hand.

export class WalletsApi {
  constructor(http) {
    this.http = http;
  }

  /**
   * Creates a new merchant wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/postMerchantWalletsV1
   * @param {object} body - NewWalletRequestDto
   */
  postMerchantWalletsV1({ body } = {}) {
    return this.http.call("POST", "/api/v1/merchant/wallets", { body, authed: true });
  }


  /**
   * Creates a new merchant wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/postMerchantWalletsV2
   * @param {object} body - NewWalletRequestV2Dto
   */
  postMerchantWalletsV2({ body } = {}) {
    return this.http.call("POST", "/api/v2/merchant/wallets", { body, authed: true });
  }


  /**
   * Lists merchant client wallets (up to 100 wallets per response) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsV1
   * @param {*} [skip] How may transaction to skip (used for paging)
   * @param {*} [take] How may transaction to take (used for paging)
   */
  getMerchantWalletsV1({ skip, take } = {}) {
    return this.http.call("GET", "/api/v1/merchant/wallets", { query: { "skip": skip, "take": take }, authed: true });
  }


  /**
   * Lists merchant client wallets (up to 100 wallets per response) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsV2
   * @param {*} [skip] how many wallets to skip (used for paging)
   * @param {*} [take] how many wallets to take (used for paging)
   */
  getMerchantWalletsV2({ skip, take } = {}) {
    return this.http.call("GET", "/api/v2/merchant/wallets", { query: { "skip": skip, "take": take }, authed: true });
  }


  /**
   * Finds a merchant client wallet by id - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsByIdV1
   * @param {*} id the id of the wallet
   */
  getMerchantWalletsByIdV1(id) {
    return this.http.call("GET", "/api/v1/merchant/wallets/:id", { pathParams: { "id": id }, authed: true });
  }


  /**
   * Finds a merchant client wallet by id - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsByIdV2
   * @param {*} id the id of the wallet
   */
  getMerchantWalletsByIdV2(id) {
    return this.http.call("GET", "/api/v2/merchant/wallets/:id", { pathParams: { "id": id }, authed: true });
  }


  /**
   * Creates an address under a wallet by the wallet ID - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/postMerchantWalletsAddressesByIdV1
   * @param {*} id the ID of the wallet to create the address under
   * @param {object} body - CreateMerchantWalletAddressRequestDto
   */
  postMerchantWalletsAddressesByIdV1(id, { body } = {}) {
    return this.http.call("POST", "/api/v1/merchant/wallets/:id/addresses", { pathParams: { "id": id }, body, authed: true });
  }


  /**
   * Creates an address under a wallet by the wallet ID - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/postMerchantWalletsAddressesByIdV2
   * @param {*} id the id of the wallet to create the address under
   * @param {object} body - CreateMerchantWalletAddressRequestDto
   */
  postMerchantWalletsAddressesByIdV2(id, { body } = {}) {
    return this.http.call("POST", "/api/v2/merchant/wallets/:id/addresses", { pathParams: { "id": id }, body, authed: true });
  }


  /**
   * Lists all merchant addresses of a specific wallet by the wallet Id - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsAddressesByIdV1
   * @param {*} id the id of the wallet
   * @param {*} [skip] how many addresses to skip (used for paging)
   * @param {*} [take] how many addresses to take (used for paging)
   */
  getMerchantWalletsAddressesByIdV1(id, { skip, take } = {}) {
    return this.http.call("GET", "/api/v1/merchant/wallets/:id/addresses", { pathParams: { "id": id }, query: { "skip": skip, "take": take }, authed: true });
  }


  /**
   * Lists all merchant addresses of a specific wallet by the wallet Id - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsAddressesByIdV2
   * @param {*} id the id of the wallet
   * @param {*} [skip] how many addresses to skip (used for paging)
   * @param {*} [take] how many addresses to take (used for paging)
   */
  getMerchantWalletsAddressesByIdV2(id, { skip, take } = {}) {
    return this.http.call("GET", "/api/v2/merchant/wallets/:id/addresses", { pathParams: { "id": id }, query: { "skip": skip, "take": take }, authed: true });
  }


  /**
   * Get a specific address by its Id and the Id of the wallet it belongs to - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsAddressesByIdAIdV1
   * @param {*} id the id of the wallet containing the address
   * @param {*} aId the id of the address to retrieve
   */
  getMerchantWalletsAddressesByIdAIdV1(id, aId) {
    return this.http.call("GET", "/api/v1/merchant/wallets/:id/addresses/:aId", { pathParams: { "id": id, "aId": aId }, authed: true });
  }


  /**
   * Get a specific address by its Id and the Id of the wallet it belongs to - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsAddressesByIdAIdV2
   * @param {*} id the id of the wallet containing the address
   * @param {*} aId the id of the address to retrieve
   */
  getMerchantWalletsAddressesByIdAIdV2(id, aId) {
    return this.http.call("GET", "/api/v2/merchant/wallets/:id/addresses/:aId", { pathParams: { "id": id, "aId": aId }, authed: true });
  }


  /**
   * Get merchant client wallets count - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsCountV2
   */
  getMerchantWalletsCountV2() {
    return this.http.call("GET", "/api/v2/merchant/wallets/count", { authed: true });
  }


  /**
   * Get merchant addresses count of a specific wallet by the wallet Id - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsAddressesCountByIdV2
   * @param {*} id the id of the wallet
   */
  getMerchantWalletsAddressesCountByIdV2(id) {
    return this.http.call("GET", "/api/v2/merchant/wallets/:id/addresses/count", { pathParams: { "id": id }, authed: true });
  }


  /**
   * Returns the wallet balance in a specific date time offset - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsBalanceByIdDateV1
   * @param {*} id the wallet id
   * @param {*} date the specific date time offset to retrieve what the wallet balance was at that time
   */
  getMerchantWalletsBalanceByIdDateV1(id, date) {
    return this.http.call("GET", "/api/v1/merchant/wallets/:id/balance/:date", { pathParams: { "id": id, "date": date }, authed: true });
  }


  /**
   * Returns the wallet balance in a specific date time offset - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsBalanceByIdDateV2
   * @param {*} id the wallet id
   * @param {*} date the specific date time offset to retrieve what the wallet balance was at that time
   */
  getMerchantWalletsBalanceByIdDateV2(id, date) {
    return this.http.call("GET", "/api/v2/merchant/wallets/:id/balance/:date", { pathParams: { "id": id, "date": date }, authed: true });
  }


  /**
   * Lists merchant client wallets (up to 100 wallets per response) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsV3
   * @param {*} [skip] how many wallets to skip (used for paging)
   * @param {*} [take] how many wallets to take (used for paging)
   */
  getMerchantWalletsV3({ skip, take } = {}) {
    return this.http.call("GET", "/api/v3/merchant/wallets", { query: { "skip": skip, "take": take }, authed: true });
  }


  /**
   * Creates or retrieves a wallet and address by external Ids - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/putMerchantWalletsV3
   * @param {object} body - NewWalletAndAddressRequestV3Dto
   */
  putMerchantWalletsV3({ body } = {}) {
    return this.http.call("PUT", "/api/v3/merchant/wallets", { body, authed: true });
  }


  /**
   * Get merchant client wallets count - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsCountV3
   */
  getMerchantWalletsCountV3() {
    return this.http.call("GET", "/api/v3/merchant/wallets/count", { authed: true });
  }


  /**
   * Get merchant addresses count of a specific wallet by the wallet label - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsAddressesCountByLabelCurrencyV3
   * @param {*} label the unique label for the wallet provided by client
   * @param {*} currency the currency of the wallet
   */
  getMerchantWalletsAddressesCountByLabelCurrencyV3(label, currency) {
    return this.http.call("GET", "/api/v3/merchant/wallets/:label/:currency/addresses/count", { pathParams: { "label": label, "currency": currency }, authed: true });
  }


  /**
   * Lists all merchant addresses of a specific wallet by unique wallet label and currency Id - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsAddressesByLabelCurrencyV3
   * @param {*} label the unique id for the wallet provided by client
   * @param {*} currency the currency of the wallet to list addresses for
   * @param {*} [skip] How many addresses to skip (used for paging)
   * @param {*} [take] How many addresses to take (used for paging)
   */
  getMerchantWalletsAddressesByLabelCurrencyV3(label, currency, { skip, take } = {}) {
    return this.http.call("GET", "/api/v3/merchant/wallets/:label/:currency/addresses", { pathParams: { "label": label, "currency": currency }, query: { "skip": skip, "take": take }, authed: true });
  }


  /**
   * Get a specific address by its label and the label of the wallet it belongs to - Supports Auth methods: [ OAuth, clientId/secret ]
   * @see https://docs.coinpayments.net/api/wallets/routes/getMerchantWalletsAddressesByWLabelCurrencyALabelV3
   * @param {*} wLabel the unique label for the wallet provided by client
   * @param {*} currency the currency of the wallet containing the address
   * @param {*} aLabel the unique label for the address provided by client
   */
  getMerchantWalletsAddressesByWLabelCurrencyALabelV3(wLabel, currency, aLabel) {
    return this.http.call("GET", "/api/v3/merchant/wallets/:wLabel/:currency/addresses/:aLabel", { pathParams: { "wLabel": wLabel, "currency": currency, "aLabel": aLabel }, authed: true });
  }
}
