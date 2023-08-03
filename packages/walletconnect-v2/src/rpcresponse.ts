import SignClient from "@walletconnect/sign-client";
import { SessionTypes } from "@walletconnect/types";
import { AccountData, AminoSignResponse } from "@cosmjs/amino";
import { DirectSignResponse } from "@cosmjs/proto-signing";
import {
  encodeAminoSignRpcResponse,
  encodeDirectSignRpcResponse,
  encodeGetAccountsRpcResponse,
} from "./encode";

/**
 * Respond to a cosmos_getAccounts RPC request.
 * @param client - Client used to send the response.
 * @param session - Session used to send the response.
 * @param requestId - Id of the request to which the response refers.
 * @param accounts - Accounts that will be sent.
 */
export async function rpcCosmosGetAccounts(
  client: SignClient,
  session: SessionTypes.Struct,
  requestId: number,
  accounts: AccountData[],
): Promise<void> {
  return client.respond({
    topic: session.topic,
    response: {
      id: requestId,
      jsonrpc: "2.0",
      result: encodeGetAccountsRpcResponse(accounts),
    },
  });
}

/**
 * Respond to a cosmos_signDirect RPC request.
 * @param client - Client used to send the response.
 * @param session - Session used to send the response.
 * @param requestId - Id of the request to which the response refers.
 * @param signResponse - Signature response that will be sent.
 */
export async function rpcCosmosSignDirect(
  client: SignClient,
  session: SessionTypes.Struct,
  requestId: number,
  signResponse: DirectSignResponse,
): Promise<void> {
  return client.respond({
    topic: session.topic,
    response: {
      id: requestId,
      jsonrpc: "2.0",
      result: encodeDirectSignRpcResponse(signResponse),
    },
  });
}

/**
 * Respond to a cosmos_signAmino RPC request.
 * @param client - Client used to send the response.
 * @param session - Session used to send the response.
 * @param requestId - Id of the request to which the response refers.
 * @param signResponse - Signature response that will be sent.
 */
export async function rpcCosmosSignAmino(
  client: SignClient,
  session: SessionTypes.Struct,
  requestId: number,
  signResponse: AminoSignResponse,
): Promise<void> {
  return client.respond({
    topic: session.topic,
    response: {
      id: requestId,
      jsonrpc: "2.0",
      result: encodeAminoSignRpcResponse(signResponse),
    },
  });
}
