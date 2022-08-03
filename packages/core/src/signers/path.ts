import { HdPath } from "@cosmjs/crypto";
import { Slip10RawIndex } from "@cosmjs/crypto/build/slip10";

/**
 * Desmos BIP44 coin type.
 */
export const DesmosCoinType = 852;

/**
 * Configurations to generate the BIP44 derivation path.
 * BIP44 is based on BIP32, For more details see: https://wiki.trezor.io/Address_path_(BIP32).
 * BIP44 dictates the derivation path:
 * m/purpose'/coin_type'/account'/change/address_index
 */
export interface PathConfig {
  /**
   * BIP44 account value.
   */
  account: number;
  /**
   * BIP44 address_index value.
   */
  addressIndex: number;
}

/**
 * Generates the Desmos BIP44 derivation path.
 * @param config - Config to generate the BIP44 derivation path.
 */
export function makeDesmosPath(
  config: Partial<PathConfig> | undefined = undefined
): HdPath {
  return [
    Slip10RawIndex.hardened(44),
    Slip10RawIndex.hardened(DesmosCoinType),
    Slip10RawIndex.hardened(config?.account ?? 0),
    Slip10RawIndex.normal(0),
    Slip10RawIndex.normal(config?.addressIndex ?? 0),
  ];
}
