import { calculateFee, GasPrice } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet, OfflineSigner } from "@cosmjs/proto-signing";
import { stringToPath } from "@cosmjs/crypto";
import { OfflineAminoSigner, Secp256k1HdWallet } from "@cosmjs/amino";

export type HdPath = {
  coinType: number;
  account: number;
  change: number;
  index: number;
};

export const TEST_CHAIN_URL = "http://localhost:26657";

export const defaultGasPrice = GasPrice.fromString("0.025stake");

export const DesmosHdPath: HdPath = {
  coinType: 852,
  account: 0,
  change: 0,
  index: 0,
};

export const CosmosHdPath: HdPath = {
  coinType: 118,
  account: 0,
  change: 0,
  index: 0,
};

export const DefaultFees = {
  SaveProfile: calculateFee(100_000, defaultGasPrice),
  DeleteProfile: calculateFee(100_000, defaultGasPrice),
  DTagTransfer: calculateFee(100_000, defaultGasPrice),
  AcceptDTag: calculateFee(200_000, defaultGasPrice),
  CancelDTagTransfer: calculateFee(100_000, defaultGasPrice),
  RefuseDTagTransfer: calculateFee(100_000, defaultGasPrice),
};

export const testUser1 = {
  mnemonic:
    "hour harbor fame unaware bunker junk garment decrease federal vicious island smile warrior fame right suit portion skate analyst multiply magnet medal fresh sweet",
  dtag: "test_user_1",
  address0: "desmos1nm6kh6jwqmsezwtnmgdd4w4tzyk9f8gvqu5en0",
  address1: "desmos1cywv6k7d94nyka74q7cr59yauzs690ky2ew6qx",
};

export const testUser2 = {
  mnemonic:
    "shine velvet envelope baby bicycle slot betray water mask cake rule useless absorb lens enable fork lake make depart slogan kiwi iron decorate relief",
  dtag: "test_user_2",
  address0: "desmos1c7ms9zhtgwmv5jy6ztj2vq0jj67zenw3gdl2gr",
  address1: "desmos1f88f8sdnt4qznzj5drnqtn279uelat402xx5yv",
};

/**
 * Creates a signer from the provided mnemonic.
 * @param mnemonic - The mnemonic passphrase used to derive the keys.
 * @param indexes - Derivation path indexes used to derive the keys.
 */
export async function signerFromMnemonic(
  mnemonic: string,
  indexes: number[] = [0]
): Promise<OfflineSigner> {
  const hdPaths = indexes.map((i) => `m/44'/852'/0'/${i}/0`).map(stringToPath);

  return DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    hdPaths,
    prefix: "desmos",
  });
}

/**
 * Creates a signer from the provided mnemonic.
 * @param mnemonic - The mnemonic passphrase used to derive the keys.
 * @param paths - Derivation paths used to derive the keys.
 * @param prefix - The bech32 address prefix.
 */
export function aminoSignerFromMnemonic(
  mnemonic: string,
  paths: HdPath[] = [DesmosHdPath],
  prefix: string = "desmos"
): Promise<OfflineAminoSigner> {
  const hdPaths = paths
    .map(
      (path) =>
        `m/44'/${path.coinType}'/${path.account}'/${path.change}/${path.index}`
    )
    .map(stringToPath);

  return Secp256k1HdWallet.fromMnemonic(mnemonic, {
    hdPaths,
    prefix,
  });
}

/**
 * Returns a promise that resolves after the provided amount of milliseconds.
 * @param ms - Milliseconds that must pass before the promise resolves.
 */
export async function delay(ms: number): Promise<void> {
  return new Promise((r) => {
    setTimeout(r, ms);
  });
}
