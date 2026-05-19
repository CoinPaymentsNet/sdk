# CoinPayments SDK

Official CoinPayments SDKs for **Python**, **JavaScript / Node.js / TypeScript**, and **PHP**.
A single client gives you typed access to every CoinPayments REST endpoint -
authentication, request signing, webhook validation, path/query encoding, and JSON decoding are
all handled for you.

> Full API reference: <https://docs.coinpayments.net>

The route `name` on the documentation site matches the method within the SDK.

---

## Release

- [JavaScript / Node.js / TypeScript](https://github.com/coinpaymentsnet/sdk/releases/download/1.0.0/coinpayments-sdk-javascript-1.0.0.tar.gz)
- [Python](https://github.com/coinpaymentsnet/sdk/releases/download/1.0.0/coinpayments-sdk-python-1.0.0.tar.gz)
- [PHP](https://github.com/coinpaymentsnet/sdk/releases/download/1.0.0/coinpayments-sdk-php-1.0.0.tar.gz)

---

## Overview

- **One client per language** - `CoinPaymentsClient` exposes every API category
  as a sub-object (`currencies`, `invoices`, `wallets`, …).
- **HMAC-SHA256 request signing** - your `clientId` / `clientSecret` are turned
  into the three `X-CoinPayments-*` headers automatically.
- **Webhook verification** - a `verify_webhook` / `verifyWebhook` /
  `WebhookVerifier::verify` helper validates inbound webhook signatures with
  constant-time comparison and timestamp freshness checking.
- **Anonymous vs. authed endpoints** - anonymous routes (e.g. public fees,
  rates) work without credentials; authed routes throw a clear error if
  credentials are missing.
- **Identical wire behaviour across languages** - booleans serialize as
  `true`/`false`, paths URL-encode the same way, JSON has the same
  whitespace - so the three SDKs are byte-for-byte interchangeable.
- **Per-method docs links** - every generated method's docblock includes a
  `@see` link to its page on <https://docs.coinpayments.net>, including intellisense and required parameters.

---

## API categories

Every client exposes the same set of API groups:

| Category          | Property            | What it covers                            |
| ----------------- | ------------------- | ----------------------------------------- |
| Access Control    | `accessControl`     | API keys, permissions, OAuth              |
| Currencies        | `currencies`        | Supported coins/tokens, network metadata  |
| Fees              | `fees`              | Blockchain + service fees                 |
| Invoices          | `invoices`          | Merchant invoices, buy-now buttons        |
| Rates             | `rates`             | FX / conversion rates                     |
| Transactions      | `transactions`      | Send, receive, list transactions          |
| Wallets           | `wallets`           | Balances, addresses, payouts              |
| Webhooks          | `webhooks`          | Webhook subscription management           |

In Python the property names use `snake_case` (`access_control`).

---

## JavaScript / Node.js / TypeScript

Requires Node 18+ (uses the global `fetch`) and an ESM-capable project
(`"type": "module"` in your `package.json`, or use dynamic `import()`).

### Install

**From a local folder** - either the downloaded directory or a
release tarball you've already extracted:

```bash
npm install ./path/to/coinpayments-sdk-javascript
```

**From a downloaded release tarball:**

```bash
npm install ./coinpayments-sdk-javascript-1.0.0.tar.gz
```

**Directly from a GitHub release:**

```bash
npm install https://github.com/coinpaymentsnet/sdk/releases/download/1.0.0/coinpayments-sdk-javascript-1.0.0.tar.gz
```

All three pin the import name to `@coinpayments/sdk` (declared in the
package's `package.json`).

### Instantiate

```js
import { CoinPaymentsClient } from "@coinpayments/sdk";

const cps = new CoinPaymentsClient({
  clientId:     process.env.CPS_CLIENT_ID,
  clientSecret: process.env.CPS_CLIENT_SECRET,
  // baseUrl: "https://a-api.coinpayments.net",  // optional override
});
```

Anonymous-only usage:

```js
const cps = new CoinPaymentsClient();
const fees = await cps.fees.getFeesBlockchainByIdV2("1");

const rates = await cps.rates.getRatesV2({ from: "BTC", to: "USD" }); // symbol
const ratesById = await cps.rates.getRatesV2({ from: "1", to: "5057" }); // currency id
```

### Basic usage

```js
// List supported currencies
const currencies = await cps.currencies.getCurrenciesV2({ types: ["crypto", "token"] });

// Look up an invoice
const invoice = await cps.invoices.getMerchantInvoicesByIdV2("inv_123");

// Create an invoice
const created = await cps.invoices.postMerchantInvoicesV2({
  body: {
    currency: "5057", // USD
    items: [
      {
        name: "Testing Payment",
        quantity: { value: 1, type: "quantity" },
        amount: "10.00",
      },
    ],
    amount: {
      breakdown: { subtotal: "10.00" },
      total: "10.00",
    },
  },
});
```

Path params are passed positionally, query params and body go in the options
object.

### Errors

```js
import { CoinPaymentsError } from "@coinpayments/sdk";

try {
  await cps.invoices.getMerchantInvoicesByIdV2("does-not-exist");
} catch (err) {
  if (err instanceof CoinPaymentsError) {
    console.log(err.status, err.payload);
  }
}
```

### Webhook verification

```js
import { verifyWebhook } from "@coinpayments/sdk";

const result = verifyWebhook({
  method:           "POST",
  url:              "https://yourapp.example.com/webhooks/coinpayments",
  rawBody:          req.rawBody,        // capture BEFORE json parsing
  headers:          req.headers,
  clientSecret:     process.env.CPS_CLIENT_SECRET,
  expectedClientId: process.env.CPS_CLIENT_ID,  // optional
  maxAgeSeconds:    300,                       // optional, 0 disables
});
if (!result.ok) {
  return res.status(401).send(result.reason);
}
```

---

## Python

Requires Python 3.9+. The package is shipped as `coinpayments`.

### Install

**From a local folder** - either the downloaded directory or a
release tarball you've already extracted:

```bash
pip install ./path/to/coinpayments-sdk-python
```

**From a downloaded release tarball:**

```bash
pip install ./coinpayments-sdk-python-1.0.0.tar.gz
```

**Directly from a GitHub release:**

```bash
pip install https://github.com/coinpaymentsnet/sdk/releases/download/1.0.0/coinpayments-sdk-python-1.0.0.tar.gz
```

### Instantiate

```python
from coinpayments import CoinPaymentsClient

cps = CoinPaymentsClient(
    client_id=os.getenv("CPS_CLIENT_ID"),
    client_secret=os.getenv("CPS_CLIENT_SECRET"),
    # base_url="https://a-api.coinpayments.net",  # optional override
)
```

Anonymous-only usage (public endpoints) doesn't require credentials:

```python
cps = CoinPaymentsClient()
fees = cps.fees.get_fees_blockchain_by_id_v2("1")

rate = cps.rates.get_rates_v2(from_="BTC", to="USD") # symbol
rate_by_id = cps.rates.get_rates_v2(from_="1", to="5057") # currency id
```

### Basic usage

```python
# List supported currencies
currencies = cps.currencies.get_currencies_v2(types=["crypto", "token"])

# Look up an invoice
invoice = cps.invoices.get_merchant_invoices_by_id_v2("inv_123")

# Create an invoice
new_invoice = cps.invoices.post_merchant_invoices_v2(body={
    "currency": "5057", # USD
    "items": [
        {
            "name": "Testing Payment",
            "quantity": {"value": 1, "type": "quantity"},
            "amount": "10.00",
        },
    ],
    "amount": {
        "breakdown": {"subtotal": "10.00"},
        "total": "10.00",
    },
})
```

### Errors

Failed requests raise `CoinPaymentsError`:

```python
from coinpayments import CoinPaymentsError

try:
    cps.invoices.get_merchant_invoices_by_id_v2("does-not-exist")
except CoinPaymentsError as e:
    print(e.status, e.payload)
```

### Webhook verification

```python
from coinpayments import verify_webhook

result = verify_webhook(
    method="POST",
    url="https://yourapp.example.com/webhooks/coinpayments",
    raw_body=request.body,            # str or bytes, BEFORE json parsing
    headers=request.headers,
    client_secret=os.getenv("CPS_CLIENT_SECRET"),
    expected_client_id=os.getenv("CPS_CLIENT_ID"),  # optional
    max_age_seconds=300,                  # optional, 0 disables
)
if not result.ok:
    return 401, result.reason
```

---

## PHP

Requires PHP 8.1+, `ext-json`, `ext-curl`.

### Install

**From a local folder** - either the downloaded directory or a release
tarball you've already extracted. Add a `path` repository to your project's
`composer.json`:

```json
{
  "repositories": [
    { "type": "path", "url": "./path/to/coinpayments-sdk-php" }
  ],
  "require": {
    "coinpayments/sdk": "*"
  }
}
```

then `composer update`.

**Directly from a GitHub release.** Composer doesn't install tarballs from
arbitrary URLs by default, so declare a single-package repository pointing
at the release asset:

```json
{
  "repositories": [
    {
      "type": "package",
      "package": {
        "name": "coinpayments/sdk",
        "version": "1.0.0",
        "type": "library",
        "dist": {
          "url": "https://github.com/coinpaymentsnet/sdk/releases/download/1.0.0/coinpayments-sdk-php-1.0.0.tar.gz",
          "type": "tar"
        },
        "autoload": { "psr-4": { "CoinPayments\\": "src/" } },
        "require": { "php": ">=8.1", "ext-json": "*", "ext-curl": "*" }
      }
    }
  ],
  "require": {
    "coinpayments/sdk": "1.0.0"
  }
}
```

then `composer update`. Bump both occurrences of the version on upgrade.

### Instantiate

```php
use CoinPayments\CoinPaymentsClient;

$cps = new CoinPaymentsClient(
    clientId:     getenv("CPS_CLIENT_ID"),
    clientSecret: getenv("CPS_CLIENT_SECRET"),
    // baseUrl: "https://a-api.coinpayments.net",  // optional override
);
```

Anonymous-only usage:

```php
$cps = new CoinPaymentsClient();
$fees = $cps->fees->getFeesBlockchainByIdV2("1");

$rates = $cps->rates->getRatesV2("BTC", "USD"); // symbol
$ratesById = $cps->rates->getRatesV2("1", "5057"); // currency id
```

### Basic usage

```php
// List supported currencies
$currencies = $cps->currencies->getCurrenciesV2(types: ["crypto", "token"]);

// Look up an invoice
$invoice = $cps->invoices->getMerchantInvoicesByIdV2("inv_123");

// Create an invoice
$created = $cps->invoices->postMerchantInvoicesV2(body: [
    "currency" => "5057", // USD
    "items" => [
        [
            "name" => "Testing Payment",
            "quantity" => ["value" => 1, "type" => "quantity"],
            "amount" => "10.00",
        ],
    ],
    "amount" => [
        "breakdown" => ["subtotal" => "10.00"],
        "total" => "10.00",
    ],
]);
```

Path params are required positional arguments; query params and `$body` are
named arguments.

### Errors

```php
use CoinPayments\Runtime\CoinPaymentsException;

try {
    $cps->invoices->getMerchantInvoicesByIdV2("does-not-exist");
} catch (CoinPaymentsException $e) {
    error_log("[{$e->status}] " . print_r($e->payload, true));
}
```

### Webhook verification

```php
use CoinPayments\Runtime\WebhookVerifier;

$result = WebhookVerifier::verify(
    method:           "POST",
    url:              "https://yourapp.example.com/webhooks/coinpayments",
    rawBody:          file_get_contents("php://input"),  // capture BEFORE json parsing
    headers:          getallheaders(),
    clientSecret:     getenv("CPS_CLIENT_SECRET"),
    expectedClientId: getenv("CPS_CLIENT_ID"),  // optional
    maxAgeSeconds:    300,                     // optional, 0 disables
);
if (!$result->ok) {
    http_response_code(401);
    echo $result->reason;
    exit;
}
```

---

## Finding the docs for a specific call

Every generated method has a `@see` link in its docblock that points to the
canonical docs page, e.g.:

```js
/**
 * Returns the current blockchain fee for sending funds from CoinPayments
 * to an external address - Supports Auth methods: Anonymous
 * @see https://docs.coinpayments.net/api/fees/routes/getFeesBlockchainByIdV2
 * @param {*} id Currency in format `1` or `4:0x...` for smart contracts
 */
getFeesBlockchainByIdV2(id) { ... }
```