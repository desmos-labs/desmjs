import {StdSignature, StdSignDoc} from "@cosmjs/amino";

export const CosmosRPCMethods = {
  GetAccounts: "cosmos_getAccounts",
  SignAmino: "cosmos_signAmino",
  SignDirect: "cosmos_signDirect"
}

/**
 * Interface that represents a serialized account.
 */
export interface SerializedAccountData {
  /**
   * Account bech32 address.
   */
  address: string
  /**
   * Algorithm used to generate the pubkey.
   */
  algo: string
  /**
   * Hex encoded public key.
   */
  pubkey: string
}

/**
 * Interface that represents the response of the cosmos_getAccounts RPC method.
 */
export interface GetAccountsRpcResponse {
  accounts: SerializedAccountData[],
}

/**
 * Interface that represents the params of the cosmos_signDirect RPC method.
 */
export interface SignDirectRpcRequestParams {
  signerAddress: string,
  // Hex encoded body bytes
  bodyBytes: string,
  // Hex encoded auth info bytes
  authInfoBytes: string,
  chainId: string,
  accountNumber: string
}

/**
 * Interface that represents the response of the cosmos_signDirect RPC method.
 */
export interface SignDirectRpcResponseParams {
  signature: StdSignature
}

/**
 * Interface that represents the params of the cosmos_signAmino RPC method.
 */
export interface SignAminoRpcRequestParams {
  signerAddress: string
  signDoc: StdSignDoc
}

/**
 * Interface that represents the response of the cosmos_signAmino RPC method.
 */
export interface SignAminoRpcResponseParams {
  signature: StdSignature
}
