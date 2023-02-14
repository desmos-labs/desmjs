import { Algo } from "@cosmjs/amino/build/signer";

/**
 * Interface that represents a public key.
 */
export interface PublicKey {
  /**
   * Public key type.
   */
  readonly algo: Algo;
  /**
   * Public key bytes.
   */
  readonly bytes: Uint8Array;
}
