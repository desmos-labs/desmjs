# DesmJS

This repository contains a set of packages to develop DApps on Desmos.

## Packages

DesmJS consists of multiple smaller npm packages each one with a specific functionality.

| Package                               | Description                                                               | Version                                                                                                                                                   |  
|:--------------------------------------|:--------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `@desmoslabs/desmjs`                  | Contains the client to interact with the Desmos chain                     | [![npm version](https://img.shields.io/npm/v/@desmoslabs/desmjs.svg)](https://www.npmjs.com/package/@desmoslabs/desmjs)                                   |
| `@desmoslabs/desmjs-types`            | Contains the Desmos Protobuf definitions                                  | [![npm version](https://img.shields.io/npm/v/@desmoslabs/desmjs-types.svg)](https://www.npmjs.com/package/@desmoslabs/desmjs-types)                       |
| `@desmoslabs/desmjs-keplr`            | Contains the Keplr signer implementation                                  | [![npm version](https://img.shields.io/npm/v/@desmoslabs/desmjs-keplr.svg)](https://www.npmjs.com/package/@desmoslabs/desmjs-keplr)                       |
| `@desmoslabs/desmjs-walletconnect-v2` | Contains the WalletConnect v2 signer implementation                       | [![npm version](https://img.shields.io/npm/v/@desmoslabs/desmjs-walletconnect-v2.svg)](https://www.npmjs.com/package/@desmoslabs/desmjs-walletconnect-v2) |
| `@desmoslabs/desmjs-web3auth-mobile`  | Contains the Web3Auth Web signer implementation for React Native projects | [![npm version](https://img.shields.io/npm/v/@desmoslabs/desmjs-web3auth-mobile.svg)](https://www.npmjs.com/package/@desmoslabs/desmjs-web3auth-mobile)   |
| `@desmoslabs/desmjs-web3auth-web`     | Contains the Web3Auth Web signer implementation                           | [![npm version](https://img.shields.io/npm/v/@desmoslabs/desmjs-web3auth-web.svg)](https://www.npmjs.com/package/@desmoslabs/desmjs-web3auth-web)         |


## Troubleshooting

### Address Generation Issue On React Native

If you encounter address generation issues while using the `@desmoslabs/desmjs` or `@desmoslabs/desmjs-web3auth-mobile` package,
particularly on Android devices, you may be experiencing a problem related to the `@noble/hashes` library.  
The root cause lies in the absence of the `setBigUint64` method in the `DataView` object. 
This method is crucial for proper SHA2 calculations, but it may not be available on certain Android devices, 
leading to incorrect address generation when importing an account using mnemonic or private key.
By polyfilling the setBigUint64 method, you can overcome this issue without the need for multiple patches.

To implement the polyfill you can copy the following js code into your `shim.js` file.
```js
if (global.DataView.prototype.setBigUint64 === undefined) {
  global.DataView.prototype.setBigUint64 = function (byteOffset, value, isLE) {
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number(value.shiftRight(_32n) & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    this.setUint32(byteOffset + h, wh, isLE);
    this.setUint32(byteOffset + l, wl, isLE);
  };
}
```
