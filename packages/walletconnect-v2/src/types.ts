import { StdFee, StdSignature, StdSignDoc } from "@cosmjs/amino";
import { SignClientTypes } from "@walletconnect/types";
import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { EncodeObject } from "@cosmjs/proto-signing";

export enum CosmosRPCMethods {
  GetAccounts = "cosmos_getAccounts",
  SignAmino = "cosmos_signAmino",
  SignDirect = "cosmos_signDirect",
}

/**
 * Interface that represents a serialized account.
 */
export interface SerializedAccountData {
  /**
   * Account bech32 address.
   */
  address: string;
  /**
   * Algorithm used to generate the pubkey.
   */
  algo: string;
  /**
   * Hex encoded public key.
   */
  pubkey: string;
}

/**
 * Interface that represents the response of the cosmos_getAccounts RPC method.
 */
export interface GetAccountsRpcResponse {
  accounts: SerializedAccountData[];
}

/**
 * Interface that represents the params of the cosmos_signDirect RPC method.
 */
export interface SignDirectRpcRequestParams {
  signerAddress: string;
  // Hex encoded body bytes
  bodyBytes: string;
  // Hex encoded auth info bytes
  authInfoBytes: string;
  chainId: string;
  accountNumber: string;
}

export interface SignDirectDecodedRpcRequestParams {
  signerAddress: string;
  signDoc: SignDoc;
}

/**
 * Interface that represents the response of the cosmos_signDirect RPC method.
 */
export interface SignDirectRpcResponseParams {
  signature: StdSignature;
}

/**
 * Interface that represents the params of the cosmos_signAmino RPC method.
 */
export interface SignAminoRpcRequestParams {
  signerAddress: string;
  signDoc: StdSignDoc;
}

export interface SignAminoDecodedRpcRequestParams {
  signerAddress: string;
  signDoc: StdSignDoc;
}

/**
 * Interface that represents the response of the cosmos_signAmino RPC method.
 */
export interface SignAminoRpcResponseParams {
  signature: StdSignature;
}

/**
 * Common fields that each WalletConnect request have.
 */
interface BaseWalletConnectRequest {
  readonly request: SignClientTypes.EventArguments["session_request"];
  /**
   * Request id to be used in the response method of [SignClient].
   */
  readonly id: number;
  readonly topic: string;
}

/**
 * Interface that represents a cosmos_getAccounts RPC request.
 */
export interface WalletConnectGetAccountsRequest
  extends BaseWalletConnectRequest {
  readonly method: CosmosRPCMethods.GetAccounts;
}

/**
 * Interface that represents a cosmos_signAmino RPC request.
 */
export interface WalletConnectSignAminoRequest
  extends BaseWalletConnectRequest {
  readonly method: CosmosRPCMethods.SignAmino;
  readonly signerAddress: string;
  readonly signDoc: StdSignDoc;
  readonly fee: StdFee;
  readonly msgs: EncodeObject[];
  readonly memo?: string;
}

/**
 * Interface that represents a cosmos_signDirect RPC request.
 */
export interface WalletConnectSignDirectRequest
  extends BaseWalletConnectRequest {
  readonly method: CosmosRPCMethods.SignDirect;
  readonly signerAddress: string;
  readonly signDoc: SignDoc;
  readonly fee: StdFee;
  readonly msgs: EncodeObject[];
  readonly memo?: string;
}

/**
 * Type that represents the current supported WalletConnect RPC requests.
 */
export type WalletConnectRequest =
  | WalletConnectGetAccountsRequest
  | WalletConnectSignAminoRequest
  | WalletConnectSignDirectRequest;

/**
 * Interface that represents an object that can be used to
 * display a QR code to the user to initiate a new WalletConnect session.
 */
export interface QrCodeModalController {
  /**
   * Function to open the modal and display the QR code
   * that the user need to scan in order to start the
   * WalletConnect session.
   * @param uri - The URI to start the WalletConnect session.
   * @param onClose - The callback that will be called if the user closes the modal.
   */
  open(uri: string, onCloseCb: () => void): void;

  /**
   * Function to close the modal.
   * This function will to trigger the onCloseCb that has been passed
   * to the open function.
   */
  close(): void;
}
