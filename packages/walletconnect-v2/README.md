# @desmoslabs/desmjs-walletconnect-v2

[![npm version](https://img.shields.io/npm/v/@desmoslabs/desmjs-walletconnect.svg)](https://www.npmjs.com/package/@desmoslabs/desmjs-walletconnect)

This package contains a `WalletConnectSigner` which implements `@desmoslabs/desmjs` `Signer` interface 
by signing transactions through a [WalletConnect v2](https://walletconnect.com) client.

## How to test

In order to run the unit-tests of this package you need a WalletConnect project id. 
Such id can be obtained from the [WalletConnect cloud](https://cloud.walletconnect.com/).  
Once you have such id you need to: 
1. copy the `.example.test.env` to `.test.env`, and place the obtained project id into the `WC_PROJECT_ID` variable.  
2. run  `yarn run unit-tests`

## Compatibility table

| Package version |        Desmos version         | 
|:---------------:|:-----------------------------:|
|     `4.6.x`     |           `v4.6.x`            |
|     `4.7.x`     |      `v4.7.x`, `v4.8.1`       |
|     `5.0.x`     |           `v5.0.x`            |
