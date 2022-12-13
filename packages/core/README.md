# @desmoslabs/desmjs

[![npm version](https://img.shields.io/npm/v/@desmoslabs/desmjs.svg)](https://www.npmjs.com/package/@desmoslabs/desmjs)

This package contains the core of DesmJS.

### `DesmosClient`
Allows to easily create, sign and broadcast a transaction containing any kind of supported message. 
It extends `@cosmjs/cosmjs` `SigningStargateClient` and supports both `SIGN_DIRECT` and `SIGN_AMINO_JSON` 
signature methods. 

In order to work sign transactions, it relies on a `Signer`. 

### `Signer` 
Represents an abstract signer able to sign a transaction either using `SIGN_MODE_DIRECT` or `SIGN_MODE_AMINO_JSON`.

## Compatibility table

| Package version |        Desmos version         | 
|:---------------:|:-----------------------------:|
|     `2.0.x`     |           `v2.3.x`            |
|     `3.0.x`     | `v3.0.x `, `v3.1.x`, `v3.2.x` |
|     `4.0.x`     |           `v4.0.x`            |
|     `4.1.x`     |           `v4.1.x`            |
|     `4.2.x`     |           `v4.2.x`            |
|     `4.3.x`     |           `v4.3.x`            |
|     `4.4.x`     |           `v4.4.x`            |
|     `4.5.x`     |           `v4.5.x`            |
|     `4.6.x`     |           `v4.6.x`            |
|     `4.7.x`     |           `v4.7.x`            |
