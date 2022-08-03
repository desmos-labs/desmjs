import {
  AccountData,
  AminoSignResponse,
  OfflineAminoSigner,
  Secp256k1HdWallet,
  StdSignDoc,
} from "@cosmjs/amino";
import {
  DirectSecp256k1HdWallet,
  DirectSignResponse,
  isOfflineDirectSigner,
  OfflineDirectSigner,
  OfflineSigner,
} from "@cosmjs/proto-signing";
import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { HdPath } from "@cosmjs/crypto";
import { Signer, SignerStatus, SigningMode } from "./signer";
import { makeDesmosPath } from "./path";

export interface OfflineSignerConfig {
  /**
   * The BIP-32/SLIP-10 derivation paths.
   * Defaults to the Desmos path `m/44'/852'/0'/0/0`.
   */
  hdPath: readonly HdPath[];
  /**
   * The bech32 address prefix (human readable part).
   * Defaults to "desmos".
   */
  prefix: string;
}

/**
 * Adapter class to use a CosmJS OfflineSigner instance as a Signer instance.
 */
export class OfflineSignerAdapter extends Signer {
  private readonly signer: OfflineSigner;

  private readonly _signMode: SigningMode | undefined;

  constructor(signer: OfflineSigner) {
    super(SignerStatus.Connected);
    this.signer = signer;
    if (isOfflineDirectSigner(signer)) {
      this._signMode = SigningMode.DIRECT;
    } else if ((signer as OfflineAminoSigner).signAmino !== undefined) {
      this._signMode = SigningMode.AMINO;
    }
  }

  signDirect(
    signerAddress: string,
    signDoc: SignDoc
  ): Promise<DirectSignResponse> {
    if (this._signMode === SigningMode.DIRECT) {
      return (this.signer as OfflineDirectSigner).signDirect(
        signerAddress,
        signDoc
      );
    }

    return Promise.reject(new Error("Direct sign mode not supported"));
  }

  signAmino(
    signerAddress: string,
    signDoc: StdSignDoc
  ): Promise<AminoSignResponse> {
    if (this._signMode === SigningMode.AMINO) {
      return (this.signer as OfflineAminoSigner).signAmino(
        signerAddress,
        signDoc
      );
    }

    return Promise.reject(new Error("Amino sign mode not supported"));
  }

  async getAccounts(): Promise<readonly AccountData[]> {
    return this.signer.getAccounts();
  }

  getCurrentAccount(): Promise<AccountData | undefined> {
    return this.getAccounts().then((accounts) =>
      accounts.length > 0 ? accounts[0] : undefined
    );
  }

  get signingMode(): SigningMode {
    return this._signMode!;
  }

  // eslint-disable-next-line class-methods-use-this
  connect(): Promise<void> {
    // The offline signers can not connect/disconnect.
    return Promise.resolve();
  }

  // eslint-disable-next-line class-methods-use-this
  disconnect(): Promise<void> {
    // The offline signers can not connect/disconnect.
    return Promise.resolve();
  }

  /**
   * Create a signer from the given BIP39 mnemonic.
   *
   * @param mode The sign mode supported from the signer.
   * @param mnemonic Any valid English mnemonic.
   * @param options An optional `OfflineSignerConfig` object optionally containing an HD path and prefix.
   */
  static fromMnemonic(
    mode: SigningMode,
    mnemonic: string,
    options?: Partial<OfflineSignerConfig>
  ): Promise<OfflineSignerAdapter> {
    if (mode === SigningMode.DIRECT) {
      return DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        hdPaths: options?.hdPath ?? [makeDesmosPath()],
        prefix: options?.prefix ?? "desmos",
      }).then((signer) => new OfflineSignerAdapter(signer));
    }
    if (mode === SigningMode.AMINO) {
      return Secp256k1HdWallet.fromMnemonic(mnemonic, {
        hdPaths: options?.hdPath ?? [makeDesmosPath()],
        prefix: options?.prefix ?? "desmos",
      }).then((signer) => new OfflineSignerAdapter(signer));
    }
    return Promise.reject(new Error(`invalid sign mode ${mode}`));
  }

  /**
   * Generates a new wallet with a BIP39 mnemonic of the given length.
   *
   * @param mode The sign mode supported from the signer.
   * @param length The number of words in the mnemonic (12, 15, 18, 21 or 24).
   * @param options An optional `OfflineSignerConfig` object optionally containing an HD path and prefix.
   */
  static generate(
    mode: SigningMode,
    length?: 12 | 15 | 18 | 21 | 24,
    options?: Partial<OfflineSignerConfig>
  ): Promise<OfflineSignerAdapter> {
    if (mode === SigningMode.DIRECT) {
      return DirectSecp256k1HdWallet.generate(length, {
        hdPaths: options?.hdPath ?? [makeDesmosPath()],
        prefix: options?.prefix ?? "desmos",
      }).then((signer) => new OfflineSignerAdapter(signer));
    }
    if (mode === SigningMode.AMINO) {
      return Secp256k1HdWallet.generate(length, {
        hdPaths: options?.hdPath ?? [makeDesmosPath()],
        prefix: options?.prefix ?? "desmos",
      }).then((signer) => new OfflineSignerAdapter(signer));
    }
    return Promise.reject(new Error(`invalid sign mode ${mode}`));
  }
}
