## Version 4.3.8
### Bug fixes
- Fixed wrong reports-related messages URLs within type registry (thanks @g-luca)

## Version 4.3.7
### Bug fixes
- Fixed wrong reports-related `EncodeObject` naming and type url  

## Version 4.3.6
### Features
- Export report target to `Any` converter methods

## Version 4.3.5
### Features
- Added missing `EncodeObject` instances for feegrant and authz supported messages

## Version 4.3.4
### Features
- Improve the `SignatureResult` usability to adding methods to extract useful data from it (signed bytes, signature bytes, public key bytes)

## Version 4.3.3
### Features
- Added a new `encodeToAmino` method to `DesmosClient` to easily encode a list of messages to Amino
- Added a new `pubKey` field to `SignatureResult` representing the bytes of the public key associated to the private key used to sign a transaction

## Bug fixes
- Properly support the `x/feegrant` messages
- Properly support the `x/authz` messages

## Version 4.3.2
### Features
- Fixed wrong export of `OfflineSignerAdapter`
- Made `options` param of `OfflineSignerAdapter.fromMnemonic` and `OfflineSignerAdapter.generate` `Partial`
- Exposed the cosmjs `stringToPath` and `pathToString` functions
- Added `makeDesmosPath` to generate a Desmos derivation path with coin type 852

## Version 4.3.1
### Features
- Added CosmWASM support to upload, execute and query a smart contract

## Version 4.3.0
### Features
- Updated Desmos to `v4.3.0`

## Version 4.2.0
### Features
- Updated Desmos to `v4.2.0`

## Version 4.1.1
### Features
- Added CosmJS offline signer to `Signer` adapter

## Version 4.1.0
### Features
- Updated Desmos to `v4.1.0`

## Version 4.0.0
### Features
- Updated Desmos to `v4.0.0`

## Version 3.0.0
### Features
- Updated Desmos to `v3.1.0`

## Version 2.0.0
### Features
- Removed the `react` package
- Moved all types from desmoslabs/protojs into the new `types` package
- Created a new `walletconnect` package that contains the `Signer` implementation that uses `WalletConnect`

All packages are now published as the following on NPM:

|     Package     |           NPM reference            |
|:---------------:|:----------------------------------:|
|     `core`      |        `@desmoslabs/desmjs`        |
|     `types`     |     `@desmoslabs/desmjs-types`     |
| `walletconnect` | `@desmoslabs/desmjs-walletconnect` |
