import SignClient from "@walletconnect/sign-client";
import { SessionTypes } from "@walletconnect/types";
import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { AccountData, StdSignDoc } from "@cosmjs/amino";
import {
  encodeAminoSignRpcRequestParams,
  encodeDirectSignRpcRequestParams,
} from "./encode";
import {
  CosmosRPCMethods,
  SignAminoRpcResponseParams,
  SignDirectRpcResponseParams,
} from "./types";
import { decodeGetAccountsRpcResponse } from "./decode";

/**
 * Performs a cosmos_getAccount RPC request.
 * @param client - Client used to perform the request.
 * @param session - Session used to perform the request.
 * @param chainId - ID of the chain to which the request refers.
 */
export async function rpcCosmosGetAccounts(
  client: SignClient,
  session: SessionTypes.Struct,
  chainId: string,
): Promise<AccountData[]> {
  const response = await client.request({
    topic: session.topic,
    chainId,
    request: {
      method: CosmosRPCMethods.GetAccounts,
      params: [],
    },
  });

  const decodeResult = decodeGetAccountsRpcResponse(response);
  if (decodeResult.isError()) {
    throw new Error(decodeResult.error);
  }

  return decodeResult.value;
}

/**
 * Performs a cosmos_signDirect RPC request.
 * @param client - Client used to perform the request.
 * @param session - Session used to perform the request.
 * @param chainId - ID of the chain to which the request refers.
 * @param signerAddress - Address of who will sign the transaction.
 * @param signDoc - Transaction to be signed.
 */
export async function rpcCosmosSignDirect(
  client: SignClient,
  session: SessionTypes.Struct,
  chainId: string,
  signerAddress: string,
  signDoc: SignDoc,
): Promise<SignDirectRpcResponseParams> {
  return client.request<SignDirectRpcResponseParams>({
    topic: session.topic,
    chainId,
    request: {
      method: CosmosRPCMethods.SignDirect,
      params: [encodeDirectSignRpcRequestParams(signerAddress, signDoc)],
    },
  });
}

/**
 * Performs a cosmos_signAmino RPC request.
 * @param client - Client used to perform the request.
 * @param session - Session used to perform the request.
 * @param chainId - ID of the chain to which the request refers.
 * @param signerAddress - Address of who will sign the transaction.
 * @param signDoc - Transaction to be signed.
 */
export async function rpcCosmosSignAmino(
  client: SignClient,
  session: SessionTypes.Struct,
  chainId: string,
  signerAddress: string,
  signDoc: StdSignDoc,
): Promise<SignAminoRpcResponseParams> {
  return client.request<SignAminoRpcResponseParams>({
    topic: session.topic,
    chainId,
    request: {
      method: CosmosRPCMethods.SignAmino,
      params: [encodeAminoSignRpcRequestParams(signerAddress, signDoc)],
    },
  });
}
