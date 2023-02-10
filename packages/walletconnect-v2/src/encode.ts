import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { toHex } from "@cosmjs/encoding";
import { AccountData, AminoSignResponse, StdSignDoc } from "@cosmjs/amino";
import { DirectSignResponse } from "@cosmjs/proto-signing";
import {
  GetAccountsRpcResponse,
  SignAminoRpcRequestParams,
  SignAminoRpcResponseParams,
  SignDirectRpcRequestParams,
  SignDirectRpcResponseParams,
} from "./types";

/**
 * Encodes the accounts to be returned as response of the cosmos_getAccounts RPC method.
 * @param accounts - Accounts to encode.
 */
export function encodeGetAccountsRpcResponse(
  accounts: readonly AccountData[]
): GetAccountsRpcResponse {
  return {
    accounts: accounts.map((account) => ({
      address: account.address,
      algo: account.algo,
      pubkey: toHex(account.pubkey),
    })),
  };
}

/**
 * Encodes the params that are sent in the cosmos_signDirect RPC method.
 * @param signerAddress - Address of who will sign the transaction.
 * @param signDoc - Transaction to be signed.
 */
export function encodeDirectSignRpcRequestParams(
  signerAddress: string,
  signDoc: SignDoc
): SignDirectRpcRequestParams {
  return {
    signerAddress,
    authInfoBytes: toHex(signDoc.authInfoBytes),
    bodyBytes: toHex(signDoc.bodyBytes),
    chainId: signDoc.chainId,
    accountNumber: signDoc.accountNumber.toString(),
  };
}

/**
 * Encodes the signature to be returned as response of the cosmos_signDirect RPC method.
 * @param signResponse - Signature to encode.
 */
export function encodeDirectSignRpcResponse(
  signResponse: DirectSignResponse
): SignDirectRpcResponseParams {
  return {
    signature: signResponse.signature,
  };
}

/**
 * Encodes the params that are sent in the cosmos_signAmino RPC method.
 * @param signerAddress - Address of who is singing the transaction.
 * @param signDoc - Transaction to be signed.
 */
export function encodeAminoSignRpcRequestParams(
  signerAddress: string,
  signDoc: StdSignDoc
): SignAminoRpcRequestParams {
  return {
    signerAddress,
    signDoc,
  };
}

/**
 * Encodes the signature to be returned as response of the cosmos_signAmino RPC method.
 * @param signResponse - Signature to encode.
 */
export function encodeAminoSignRpcResponse(
  signResponse: AminoSignResponse
): SignAminoRpcResponseParams {
  return {
    signature: signResponse.signature,
  };
}
