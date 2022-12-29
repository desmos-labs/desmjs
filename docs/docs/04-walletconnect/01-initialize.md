# Initialization

This package provides a `Signer` capable of sign transactions through WalletConnect.

To install the package run the following command:
```shell
yarn add @desmoslabs/desmjs-walletconnect-v2
```

**NOTE** This package assumes that the other client implements the following RPC methods:
* `cosmos_signAmino`: Sign a amino encoded transaction
* `cosmos_signDirect`: Sign a protobuf encoded transaction
* `cosmos_getAccountData`: Gets the details of the account 
