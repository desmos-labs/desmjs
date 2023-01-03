---
sidebar_label: "Initialize"
---

# DesmJS

## Installation

This package provides the `DesmsoClient` class together with other utilities that can be used to interact with chain. To
install it run the following command:

```shell
yarn add @desmoslabs/desmjs @desmoslabs/desmjs-types
```

## Creating a DesmosClient

A `DesmosClient` instance allows you to interact with the chain and (optionally) sign transactions. To create an
instance you have two options:

1. using the [`connect`](../../api/classes/desmoslabs_desmjs.DesmosClient.md#connect) method, if you need to just fetch
   data from the chain;
2. using the [`connectWithSigner`](../../api/classes/desmoslabs_desmjs.DesmosClient.md#connectwithsigner) method, if you
   need also to create and sign transactions.

The RPC endpoints required from `connect` and `connectWithSigner` can be found here:

* [Mainnet](https://github.com/desmos-labs/mainnet#endpoints)
* [Testnet](https://github.com/desmos-labs/morpheus/tree/main/morpheus-apollo-3#endpoints)

### Instantiating with `connect`

```js
import {DesmosClient} from "@desmoslabs/desmjs"

const client = await DesmosClient.connect('https://rpc.mainnet.desmos.network');
```

### Instantiating with `connectWithSigner`

```js
import {DesmosClient, GasPrice, OfflineSignerAdapter, SigningMode} from "@desmoslabs/desmjs"

const mnemonic = ""
const signer = await OfflineSignerAdapter.fromMnemonic(SigningMode.DIRECT, mnemonic);
const client = await DesmosClient.connectWithSigner('https://rpc.mainnet.desmos.network', signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm"),
});
```

:::warning Check your application security  
In the above example we are using a `OfflineSignerAdapter` to create a `Signer` instance that is based on an unencrypted
mnemonic to sign the transactions. If you want to use the same, make sure the mnemonic is **never** stored in plain text
inside your application!
:::

### Signer types

In order to allow you to easily integrate with existing wallets, we provide multiple `Signer`
implementations, such as

- [`OffligneSignerAdapter`](../../api/classes/desmoslabs_desmjs.OfflineSignerAdapter.md) to interact with
  a [Ledger](https://ledger.com) hardware wallet
- [`KeplrSigner`](../../api/classes/desmoslabs_desmjs_keplr.KeplrSigner.md) to interact with
  a [Keplr](https://keplr.app) Web wallet
- [`WalletConnectSigner`](../../api/classes/desmoslabs_desmjs_keplr.KeplrSigner.md) to interact with
  a [WalletConnect](https://walletconnect.org) client
- ...and many more

You can view the entire list of `Signer` implementations visiting the [_Perform
transactions_](./03-perform-transactions.md#signers) page.
