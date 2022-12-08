import {
  SerializedAccountData,
  SignAminoRpcRequestParams,
  SignDirectRpcRequestParams,
} from "./types";
import {fromHex} from "@cosmjs/encoding";
import {AccountData, Algo, StdSignDoc} from "@cosmjs/amino";
import {SignDoc} from "cosmjs-types/cosmos/tx/v1beta1/tx";
import Long from "long";

/**
 * Class that represents decoding result.
 */
export class DecodeResult<T> {
  private readonly _value?: T
  private readonly _error?: string

  private constructor(value?: T, error?: string) {
    this._value = value
    this._error = error
  }

  /**
   * Creates a successfully DecodeResult that holds the decoded value.
   * @param value - The decoded value.
   */
  public static ok<T>(value: T): DecodeResult<T> {
    return new DecodeResult<T>(value)
  }

  /**
   * Creates a failed DecodeResult that holds the decoded error message.
   * @param message - The error occurred during the decoding procedure.
   */
  public static error(message: string): DecodeResult<any> {
    return new DecodeResult(undefined, message)
  }

  /**
   * Returns true if the DecodeResult represents a failed decoding procedure,
   * false otherwise.
   */
  public isError(): boolean {
    return this._error !== undefined
  }

  /**
   * Gets the error occurred during the decoding procedure.
   */
  get error(): string {
    return this._error!
  }

  /**
   * Returns true if the DecodeResult contains a successfully decode value,
   * false otherwise.
   */
  public isOk(): boolean {
    return this._value !== undefined;
  }

  /**
   * Gets the decode value.
   */
  get value(): T {
    return this._value!
  }
}

/**
 * Decodes the response received from the cosmos_getAccounts RPC method.
 * @param response - The response to decode.
 */
export function decodeGetAccountsRpcResponse(response: any | undefined): DecodeResult<AccountData[]> {
  if (response === undefined) {
    return DecodeResult.error("the response is undefined");
  }

  const accounts: Partial<SerializedAccountData>[] | undefined = response["accounts"];

  if (accounts === undefined) {
    return DecodeResult.error("missing accounts field in response")
  }

  const deserializedAccounts: AccountData[] = [];
  const validAccountAlgo = ["secp256k1", "ed25519", "sr25519"]

  for (let i = 0; i < accounts.length; i++) {
    const serializedAccount = accounts[i];
    if (serializedAccount.address === undefined) {
      return DecodeResult.error(`missing address field in account at index ${i}`);
    }
    if (serializedAccount.algo === undefined) {
      return DecodeResult.error(`missing address field in account at index ${i}`);
    }
    if (serializedAccount.pubkey === undefined) {
      return DecodeResult.error(`missing address field in account at index ${i}`);
    }

    if (validAccountAlgo.indexOf(serializedAccount.algo) === -1) {
      return DecodeResult.error(`invalid account algo ${serializedAccount.algo} at index ${i}`);
    }

    deserializedAccounts.push({
      address: serializedAccount.address,
      algo: serializedAccount.algo as Algo,
      pubkey: fromHex(serializedAccount.pubkey),
    })
  }

  return DecodeResult.ok(deserializedAccounts);
}

/**
 * Decodes the params received from the cosmos_signDirect RPC method.
 * @param params - The params to decode.
 */
export function decodeDirectSignRpcRequestParams(params: any[]): DecodeResult<{
  signerAddress: string,
  signDoc: SignDoc
}> {
  if (params.length === 0) {
    return DecodeResult.error("empty params");
  }
  const requestParams = params[0] as Partial<SignDirectRpcRequestParams>;
  const keys = ["signerAddress", "authInfoBytes", "bodyBytes", "chainId", "accountNumber"];

  const missingFields = [];
  for (let key of keys) {
    // @ts-ignore
    if (requestParams[key] === undefined) {
      missingFields.push(key)
    }
  }

  if (missingFields.length > 0) {
    return DecodeResult.error(`missing fields in request: ${missingFields.join(",")}`);
  }

  return DecodeResult.ok({
    signerAddress: requestParams.signerAddress!,
    signDoc: {
      bodyBytes: fromHex(requestParams.bodyBytes!),
      authInfoBytes: fromHex(requestParams.authInfoBytes!),
      chainId: requestParams.chainId!,
      accountNumber: Long.fromString(requestParams.accountNumber!)
    }
  });
}

/**
 * Decodes the params received from the cosmos_signAmino RPC method.
 * @param params - The params to decode.
 */
export function decodeAminoSignRpcRequestParams(params: any[]): DecodeResult<{
  signerAddress: string,
  signDoc: StdSignDoc
}> {
  if (params.length === 0) {
    return DecodeResult.error("empty params");
  }
  const requestParams = params[0] as Partial<SignAminoRpcRequestParams>;
  const keys = ["signerAddress", "signDoc"];

  const missingFields = [];
  for (let key of keys) {
    // @ts-ignore
    if (requestParams[key] === undefined) {
      missingFields.push(key)
    }
  }

  if (missingFields.length > 0) {
    return DecodeResult.error(`missing fields in request: ${missingFields.join(",")}`);
  }

  return DecodeResult.ok({
    signerAddress: requestParams.signerAddress!,
    signDoc: requestParams.signDoc!
  });
}

