---
sidebar_label: "Usage"
---

# Usage WalletConnect v2 Signer

Here you can find how to create an instance of 
[`WalletConnectSigner`](docs/api/classes/desmoslabs_desmjs_walletconnect.WalletConnectSigner.md).

## Initialize WalletConnect SignClient

Before creating the [`WalletConnectSigner`](docs/api/classes/desmoslabs_desmjs_walletconnect.WalletConnectSigner.md)
you must create an instance of the WalletConnect `SignClient`.  
To initialize a `SignClient` instance you need a [Project Id](https://docs.walletconnect.com/2.0/cloud/relay) that 
can be obtained from [walletconnect.com](https://walletconnect.com).

```js
import { SignClient } from "@desmoslabs/desmjs-walletconnect-v2";


const signClient = await SignClient.init({
  projectId: "<YOUR_PROJECT_ID>",
  metadata: {
    name: "Example Dapp",
    description: "Example Dapp",
    url: "#",
    icons: ["https://walletconnect.com/walletconnect-logo.png"],
  },
});
```

## Initialize the WalletConnectSigner

With a proper initialized `SignClient` instance you can create a 
[`WalletConnectSigner`](docs/api/classes/desmoslabs_desmjs_walletconnect_v2.WalletConnectSigner.md).

```js
import { WalletConnectSigner, QRCodeModal } from "@desmoslabs/desmjs-walletconnect-v2";

const signer = new WalletConnectSigner(signClient, {
  // Id of the chain you are connecting to
  chain: "desmos:desmos-mainnet",
  // Signer sign mode
  signingMode: SigningMode.DIRECT,
  // Controller used to display the QR Code that can be scanned from a wallet 
  qrCodeModalController: QRCodeModal,
});
```

After you have initialized the signer you can create a new session or reconnect to a previously established
connection.

**NOTE** If your application needs a custom UI to show the QR code you can see how to customize it 
[here](03-customize-qr-modal.md).

### Create a new connection

To create a new connection you can call the 
[`connect`](docs/api/classes/desmoslabs_desmjs_walletconnect_v2.WalletConnectSigner.md#connect) method.  
This will show to the user a QR code that can be scanned from a wallet to connect to your DApp.

```js
await signer.connect();
```

### Reconnect to a session

To reconnect to a previously established session, you can call the 
[`connectToSession`](docs/api/classes/desmoslabs_desmjs_walletconnect_v2.WalletConnectSigner.md#connecttosession)
method.

```js
import { WalletConnectSigner, SignClient } from "@desmoslabs/desmjs-walletconnect-v2";


const signClient: SignClient; // Your initialized SignClient
const signer: WalletConnectSigner; // Your initialized Signer


// Get sessions from WalletConnect SignClient
const sessions = signClient.session.values;

// Reconnect to the first one
await signer.connectToSession(sessions[0]);
```

## Use the signer

After the signer is connected, you can construct a [`DesmosClient`](docs/api/classes/desmoslabs_desmjs.DesmosClient.md)
with the [`connectWithSigner`](docs/api/classes/desmoslabs_desmjs.DesmosClient.md#connectwithsigner) function and
start to perform [transactions](docs/02-desmjs/03-perform-transactions.md).

```js
import { DesmosClient, OfflineSignerAdapter, SigningMode, GasPrice } from "@desmoslabs/desmjs";
import { WalletConnectSigner, SignClient } from "@desmoslabs/desmjs-walletconnect-v2";


const signClient: SignClient; // Your initialized SignClient
const signer: WalletConnectSigner; // Your initialized Signer

const client = await DesmosClient.connectWithSigner('https://rpc.mainnet.desmos.network', signer, {
  // Common gas price in the Desmos mainnet.
  gasPrice: GasPrice.fromString("0.01udsm"),
});

// Use the client to perform operations...
```

## Terminate session

When you have finished to perform the operations or if the user want to disconnect from your app, you can
call the [`disconnect`](docs/api/classes/desmoslabs_desmjs_walletconnect.WalletConnectSigner.md#disconnect)
method to terminate the WalletConnect session.
