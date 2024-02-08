## Version 6.0.3
### Bug fixes
- Fix compilation issues caused by incompatible `@cosmjs/*` package versions.

## Version 6.0.2
### Bug fixes
- Fixed a bug that cause the `WalletConnectSigner` to not reconnect to a previously established connection if the remote signer is not online.

## Version 6.0.1
### Features
- Add a new `feeGranter` parameter to the `SimulateOptions` in order to properly simulate transactions using a fee grant

## Version 6.0.0
### New Features
- Added support for the `x/tokenfactory` module.
- Included support for new message types in the `x/posts` module: `MsgMovePost`, `MsgRequestPostOwnerTransfer`, `MsgCancelPostOwnerTransferRequest`, `MsgRefusePostOwnerTransferRequest`, and `MsgAcceptPostOwnerTransferRequest`.
- Implemented support for the new message type `MsgUpdateSubspaceFeeTokens` in the `x/subspaces` module.

## Version 5.1.3
### Chore
- Set `react-native` as peer dependency in `@desmoslabs/desmjs-web3auth-web`.

## Version 5.1.2
### Bug fixes
- Fixed a bug that cause the packages to use an older version of the `@desmoslabs/*` dependencies.

## Version 5.1.1
### Chore
- Export Web3Auth objects from `@desmoslabs/desmjs-web3auth-mobile`

## Version 5.1.0
### Features
- Add support to governance v1
- Reorganized modules export to better support multiple version of a module

### Chore
- Dropped support to WalletConnect v1

## Version 5.0.1
### Bug fixes
- Fixed authz expiration amino conversion thanks to @williamchong
- Fixed x/gov messages type url

## Version 5.0.0
### Features
- Updated Desmos to `5.0.0`
- Added the ability to specify a `gasAdjustment` value when creating a `DesmosClient` instance

## Version 4.7.10
### Bug fixes
- Fix `StakeAuthorizationTypeUrl`

## Version 4.7.9
### Features
- Add methods to broadcast a transaction in async, sync or block mode

## Version 4.7.8
### Features
- Replaced `ts-proto` with `telescope` to generate the messages code from Profo files

### Bug fixes
- Fixed the Amino to Protobuf converter of `MsgLinkChainAccount`

## Version 4.7.7
### Features
- Allow to simulate a tx with a `DesmosClient` without signer
- Improve `DesmosClient#signTx` method signature

## Version 4.7.6
### Bug fixes
- Fixed Amino messages converters not working properly

## Version 4.7.5
### Bug fixes
- Fixed Amino converters not working properly

## Version 4.7.4
### Features
- Added missing `MsgMultiSendEncodeObject`

## Version 4.7.3
### Features
- Added the ability to create an offline `DesmosClient` to sign transactions faster
- Added utility functions to `@desmoslabs/desmjs-walletconnect-v2` to decode WalletConnect requests easily

### Chore
- Replaced hardcoded Protobuf and Amino type values with constants

## Version 4.7.2
### Features
- Added a `querier` method inside `DesmosClient` to expose the gRPC querier
- Added constantsProto URL  to define Protobuf type URLs 
- Added the option to provide a custom address prefix inside `PrivateKeySigner`
- Added the support for CosmWasm inside `KeplrSigner`

## Version 4.7.1
Patch version to allow the proper publication of all packages 

## Version 4.7.0
### Features
- Updated Desmos to `4.7.0`

## Version 4.6.3
### Features
- Updated Desmos to `4.6.3`
- Added `getPubKeyRawBytes` utility method to get the public key raw bytes from a `SignatureResult` instance

## Version 4.6.2
### Features
- Bumped `@cosmjs` to `0.29.3`

## Version 4.6.1
### Bug fixes
- Fixed incorrect `Coin` conversion when output coin should have decimal places

## Version 4.6.0
### Features
- Updated Desmos to `4.6.2`

## Version 4.5.4
### Features
- Updated the `ChainInfo` type to include more information
- Added the `getChainId` utility method to easily retrieve the id of a network given a `ChainInfo` instance
- Automatically get `chainId` from `ChainInfo` when signing a transaction using Keplr

## Version 4.5.3
### Features
- Added `toAny` converters for various `AddressData` instances
- Added `toAny` converters for various `Signature` instances
- Now the `memo` if optional when signing transactions (defaults to an empty memo)

## Version 4.5.2
### Features
- Added the ability to automatically estimate transaction gas and fees.  
  Both `DesmosClient#signTx` and `DesmosClient#sign` methods now accept `"auto"` as a fee value. If this is given, 
  both fees and gas amount will be estimated automatically before signing the transaction. Note that fees estimation 
  can be performed only if a `gasPrice` is specified inside the client options when creating it.

## Version 4.5.1
### Features
- Added utility methods to easily encode various authorizations to `Any`

### Bug fixes
- Fixed wrong `GenericSubspaceAuthorization` Amino type

## Version 4.5.0
### Features
- Updated Desmos to `v4.5.0`

## Version 4.4.1
### Bug fixes
- Fixed build error

## Version 4.4.0
### Features
- Updated Desmos to `v4.4.1`

## Version 4.3.11
### Features
- Added `mediaToAny` and `pollToAny` utility methods.

## Version 4.3.10
### Features
- First release of the new `@desmoslabs/desmjs-keplr` package that allows to easily integrate with Keplr (thanks [@g-luca](https://github.com/g-luca))

## Version 4.3.9
### Bug fixes
- Fixed wrong `Long` Amino serializations

### Features
- Added `timestampFromDate` and `timestampToDate` utility methods

## Version 4.3.8
### Bug fixes
- Fixed wrong reports-related messages URLs within type registry (thanks [@g-luca](https://github.com/g-luca))

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
