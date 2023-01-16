import { fromHex } from "@cosmjs/encoding";
import { AccountData, Algo, StdFee } from "@cosmjs/amino";
import Long from "long";
import { SignClientTypes } from "@walletconnect/types";
import { createDesmosTypes, desmosRegistryTypes } from "@desmoslabs/desmjs";
import { EncodeObject, Registry } from "@cosmjs/proto-signing";
import { AuthInfo, TxBody } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { AminoTypes } from "@cosmjs/stargate";
import {
  CosmosRPCMethods,
  SignAminoDecodedRpcRequestParams,
  SignAminoRpcRequestParams,
  SignDirectDecodedRpcRequestParams,
  SignDirectRpcRequestParams,
  WalletConnectRequest,
  WalletConnectSignAminoRequest,
  WalletConnectSignDirectRequest,
} from "./types";

/**
 * Class that represents decoding result.
 */
export class DecodeResult<T> {
  private readonly _value?: T;

  private readonly _error?: string;

  private constructor(value?: T, error?: string) {
    this._value = value;
    this._error = error;
  }

  /**
   * Creates a successfully DecodeResult that holds the decoded value.
   * @param value - The decoded value.
   */
  public static ok<T>(value: T): DecodeResult<T> {
    return new DecodeResult<T>(value);
  }

  /**
   * Creates a failed DecodeResult that holds the decoded error message.
   * @param message - The error occurred during the decoding procedure.
   */
  public static error(message: string): DecodeResult<any> {
    return new DecodeResult(undefined, message);
  }

  /**
   * Returns true if the DecodeResult represents a failed decoding procedure,
   * false otherwise.
   */
  public isError(): boolean {
    return this._error !== undefined;
  }

  /**
   * Gets the error occurred during the decoding procedure.
   */
  get error(): string {
    return this._error!;
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
    return this._value!;
  }

  /**
   * Maps the current value using the provided mapFunc.
   * If this DecodeResult is error the mapFunc will return a new DecodeResult
   * with the previous error.
   * @param mapFunc - Function that converts the [DecodeResult] value to
   * the new one
   */
  public map<M>(mapFunc: (value: T) => M): DecodeResult<M> {
    if (this.isError()) {
      return DecodeResult.error(this.error);
    }
    return DecodeResult.ok(mapFunc(this.value));
  }
}

/**
 * Decodes the response received from the cosmos_getAccounts RPC method.
 * @param response - The response to decode.
 */
export function decodeGetAccountsRpcResponse(
  response: any | undefined
): DecodeResult<AccountData[]> {
  if (response === undefined) {
    return DecodeResult.error("the response is undefined");
  }

  const { accounts } = response;

  if (accounts === undefined) {
    return DecodeResult.error("missing accounts field in response");
  }

  const deserializedAccounts: AccountData[] = [];
  const validAccountAlgo = ["secp256k1", "ed25519", "sr25519"];

  for (let i = 0; i < accounts.length; i += 1) {
    const serializedAccount = accounts[i];
    if (serializedAccount.address === undefined) {
      return DecodeResult.error(
        `missing address field in account at index ${i}`
      );
    }
    if (serializedAccount.algo === undefined) {
      return DecodeResult.error(
        `missing address field in account at index ${i}`
      );
    }
    if (serializedAccount.pubkey === undefined) {
      return DecodeResult.error(
        `missing address field in account at index ${i}`
      );
    }

    if (validAccountAlgo.indexOf(serializedAccount.algo) === -1) {
      return DecodeResult.error(
        `invalid account algo ${serializedAccount.algo} at index ${i}`
      );
    }

    deserializedAccounts.push({
      address: serializedAccount.address,
      algo: serializedAccount.algo as Algo,
      pubkey: fromHex(serializedAccount.pubkey),
    });
  }

  return DecodeResult.ok(deserializedAccounts);
}

/**
 * Decodes the params received from the cosmos_signDirect RPC method.
 * @param params - The params to decode.
 */
export function decodeDirectSignRpcRequestParams(
  params: any[]
): DecodeResult<SignDirectDecodedRpcRequestParams> {
  if (params.length === 0) {
    return DecodeResult.error("empty params");
  }
  const requestParams = params[0] as Partial<SignDirectRpcRequestParams>;
  const keys: (keyof SignDirectRpcRequestParams)[] = [
    "signerAddress",
    "authInfoBytes",
    "bodyBytes",
    "chainId",
    "accountNumber",
  ];

  const missingFields = keys.filter((k) => requestParams[k] === undefined);

  if (missingFields.length > 0) {
    return DecodeResult.error(
      `missing fields in request: ${missingFields.join(",")}`
    );
  }

  return DecodeResult.ok({
    signerAddress: requestParams.signerAddress!,
    signDoc: {
      bodyBytes: fromHex(requestParams.bodyBytes!),
      authInfoBytes: fromHex(requestParams.authInfoBytes!),
      chainId: requestParams.chainId!,
      accountNumber: Long.fromString(requestParams.accountNumber!),
    },
  });
}

/**
 * Decodes the params received from the cosmos_signAmino RPC method.
 * @param params - The params to decode.
 */
export function decodeAminoSignRpcRequestParams(
  params: any[]
): DecodeResult<SignAminoDecodedRpcRequestParams> {
  if (params.length === 0) {
    return DecodeResult.error("empty params");
  }
  const requestParams = params[0] as Partial<SignAminoRpcRequestParams>;
  const keys: (keyof SignAminoDecodedRpcRequestParams)[] = [
    "signerAddress",
    "signDoc",
  ];

  const missingFields = keys.filter((k) => requestParams[k] === undefined);

  if (missingFields.length > 0) {
    return DecodeResult.error(
      `missing fields in request: ${missingFields.join(",")}`
    );
  }

  return DecodeResult.ok({
    signerAddress: requestParams.signerAddress!,
    signDoc: requestParams.signDoc!,
  });
}

/**
 * Function to decode a WalletConnect "cosmos_signDirect" request.
 * @param request - The request to convert.
 */
export function decodeDirectSignRequest(
  request: SignClientTypes.EventArguments["session_request"]
): DecodeResult<WalletConnectSignDirectRequest> {
  const { method, params } = request.params.request;
  if (method !== CosmosRPCMethods.SignDirect) {
    return DecodeResult.error(
      `invalid method, can decode only ${CosmosRPCMethods.SignDirect}`
    );
  }

  const paramsDecodeResult = decodeDirectSignRpcRequestParams(params);
  if (paramsDecodeResult.isError()) {
    return DecodeResult.error(paramsDecodeResult.error);
  }

  const registry = new Registry(desmosRegistryTypes);
  const { signDoc, signerAddress } = paramsDecodeResult.value;
  let txBody: TxBody;
  let authInfo: AuthInfo;

  try {
    txBody = TxBody.decode(signDoc.bodyBytes);
  } catch (e) {
    return DecodeResult.error("error while decoding txBody");
  }

  try {
    authInfo = AuthInfo.decode(signDoc.authInfoBytes);
  } catch (e) {
    return DecodeResult.error("error while decoding authInfo");
  }

  const typesWithDecodeResult: [string, EncodeObject | undefined][] =
    txBody.messages.map((msg) => {
      try {
        return [
          msg.typeUrl,
          {
            typeUrl: msg.typeUrl,
            value: registry.decode(msg),
          } as EncodeObject,
        ];
      } catch (e) {
        return [msg.typeUrl, undefined];
      }
    });

  const failedTypes = typesWithDecodeResult
    .filter(([, decoded]) => decoded === undefined)
    .map(([typeUrl]) => typeUrl);

  if (failedTypes.length > 0) {
    return DecodeResult.error(`failed to decode ${failedTypes.join(",")}`);
  }

  // Safe to cast to EncodeObject since here we have just defined decoded objects.
  const msgs = typesWithDecodeResult.map(
    ([, decoded]) => <EncodeObject>decoded
  );

  const fee: StdFee = {
    gas: authInfo.fee?.gasLimit?.toString() ?? "",
    amount: authInfo.fee?.amount ?? [],
  };

  return DecodeResult.ok({
    method: CosmosRPCMethods.SignDirect,
    id: request.id,
    topic: request.topic,
    request,
    signerAddress,
    signDoc,
    msgs,
    fee,
    memo: txBody.memo,
  });
}

/**
 * Function to decode a WalletConnect "cosmos_signAmino" request.
 * @param request - The request to convert.
 */
export function decodeAminoSignRequest(
  request: SignClientTypes.EventArguments["session_request"]
): DecodeResult<WalletConnectSignAminoRequest> {
  const { method, params } = request.params.request;
  if (method !== CosmosRPCMethods.SignAmino) {
    return DecodeResult.error(
      `invalid method, can decode only ${CosmosRPCMethods.SignAmino}`
    );
  }

  const paramsDecodeResult = decodeAminoSignRpcRequestParams(params);
  if (paramsDecodeResult.isError()) {
    return DecodeResult.error(paramsDecodeResult.error);
  }

  const { signDoc, signerAddress } = paramsDecodeResult.value;
  const aminoConverter = new AminoTypes(createDesmosTypes("desmos"));
  const typesWithDecodeResult: [string, EncodeObject | undefined][] =
    signDoc.msgs.map((msg) => {
      try {
        const converted = aminoConverter.fromAmino(msg);
        return [msg.type, converted];
      } catch (e) {
        return [msg.type, undefined];
      }
    });

  const failedTypes = typesWithDecodeResult
    .filter(([, decoded]) => decoded === undefined)
    .map(([type]) => type);

  if (failedTypes.length > 0) {
    return DecodeResult.error(`failed to decode ${failedTypes.join(",")}`);
  }

  // Safe to cast to EncodeObject since here we have just defined decoded objects.
  const msgs = typesWithDecodeResult.map(
    ([, encodeObject]) => <EncodeObject>encodeObject
  );

  return DecodeResult.ok({
    method: CosmosRPCMethods.SignAmino,
    id: request.id,
    topic: request.topic,
    request,
    signDoc,
    signerAddress,
    msgs,
    fee: signDoc.fee,
    memo: signDoc.memo,
  });
}

/**
 * Function to decode a WalletConnect request received through the
 * "session_request" event listener.
 * @param request - The request to decode.
 */
export function decodeSessionRequest(
  request: SignClientTypes.EventArguments["session_request"]
): DecodeResult<WalletConnectRequest> {
  const { method } = request.params.request;

  switch (method) {
    case CosmosRPCMethods.GetAccounts:
      return DecodeResult.ok({
        method: CosmosRPCMethods.GetAccounts,
        request,
        id: request.id,
        topic: request.topic,
      });
    case CosmosRPCMethods.SignAmino:
      return decodeAminoSignRequest(request);
    case CosmosRPCMethods.SignDirect:
      return decodeDirectSignRequest(request);
    default:
      return DecodeResult.error(`unsupported method ${method}`);
  }
}
