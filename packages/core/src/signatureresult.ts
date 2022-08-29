import { SignerData } from "@cosmjs/stargate";
import { Any } from "cosmjs-types/google/protobuf/any";
import { SignDoc, TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { serializeSignDoc, StdSignDoc } from "@cosmjs/amino";

/**
 * Contains the result of a signature.
 */
export interface SignatureResult {
  // Signer data used during the signature
  readonly signerData: SignerData;

  // Public key associated to the private key used to sign
  readonly pubKey: Any;

  // SignDoc used during the signature
  readonly signDoc: SignDoc | StdSignDoc;

  // Raw transaction bytes containing the signature
  readonly txRaw: TxRaw;
}

/**
 * Checks whether the given value is a SignDoc instance or not.
 */
export function isSignDoc(value: StdSignDoc | SignDoc): value is SignDoc {
  return (
    (<SignDoc>value).bodyBytes !== undefined &&
    (<SignDoc>value).authInfoBytes !== undefined &&
    (<SignDoc>value).chainId !== undefined &&
    (<SignDoc>value).accountNumber !== undefined
  );
}

/**
 * Checks whether the given value is a StdSignDoc instance or not.
 */
export function isStdSignDoc(value: StdSignDoc | SignDoc): value is StdSignDoc {
  return (
    (<StdSignDoc>value).memo !== undefined &&
    (<StdSignDoc>value).msgs !== undefined &&
    (<StdSignDoc>value).fee !== undefined &&
    (<StdSignDoc>value).account_number !== undefined &&
    (<StdSignDoc>value).chain_id !== undefined &&
    (<StdSignDoc>value).account_number !== undefined
  );
}

/**
 * Returns the public key bytes associated with the given result.
 */
export function getPubKeyBytes(result: SignatureResult): Uint8Array {
  return Any.encode(result.pubKey).finish();
}

/**
 * Returns the signed bytes associated with the given result.
 */
export function getSignedBytes(result: SignatureResult): Uint8Array {
  return isSignDoc(result.signDoc)
    ? SignDoc.encode(result.signDoc).finish()
    : serializeSignDoc(result.signDoc);
}

/**
 * Returns the signature bytes associated with the given result.
 */
export function getSignatureBytes(result: SignatureResult): Uint8Array {
  return result.txRaw.signatures[0];
}
