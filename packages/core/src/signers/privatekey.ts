// eslint-disable-next-line max-classes-per-file
import {
  AccountData,
  AminoSignResponse,
  Secp256k1Wallet,
  StdSignDoc,
} from "@cosmjs/amino";
import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import {
  DirectSecp256k1Wallet,
  DirectSignResponse,
} from "@cosmjs/proto-signing";
import { fromHex } from "@cosmjs/encoding";
import { Observer, ObserverManager } from "../utils";
import { Signer, SignerStatus, SigningMode } from "./signer";

/**
 * Enum that represents the connection status of a PrivateKeyProvider.
 */
export enum PrivateKeyProviderStatus {
  NotConnected,
  Connecting,
  Connected,
  Disconnecting,
}

/**
 * Enum that represents the supported key types.
 */
export enum PrivateKeyType {
  Secp256k1,
}

export interface PrivateKey {
  type: PrivateKeyType;
  key: Uint8Array;
}

/**
 * Class that represents a secp256k1 key provider.
 */
export abstract class PrivateKeyProvider {
  private observerManager: ObserverManager<PrivateKeyProviderStatus> =
    new ObserverManager();

  protected keyProviderStatus: PrivateKeyProviderStatus =
    PrivateKeyProviderStatus.NotConnected;

  public addStatusListener(observer: Observer<PrivateKeyProviderStatus>) {
    this.observerManager.addObserver(observer);
  }

  public removeStatusListener(observer: Observer<PrivateKeyProviderStatus>) {
    this.observerManager.addObserver(observer);
  }

  protected updateStatus(newStatus: PrivateKeyProviderStatus) {
    this.keyProviderStatus = newStatus;
    this.observerManager.emit(newStatus);
  }

  protected assertConnected(): void {
    if (this.status !== PrivateKeyProviderStatus.Connected) {
      throw new Error("secp256k1 key provider not connected");
    }
  }

  public get status(): PrivateKeyProviderStatus {
    return this.keyProviderStatus;
  }

  /**
   * Connects to the Secp256k1 key provider.
   */
  abstract connect(): Promise<void>;

  /**
   * Disconnects from the Secp256k1 key provider.
   */
  abstract disconnect(): Promise<void>;

  /**
   * Gets the Secp256k1 private key.
   * If the key provider is not connected this function should throw an error.
   */
  abstract getPrivateKey(): Promise<PrivateKey>;
}

/**
 * Implementation of PrivateKeyProvider that provides a private key
 * from an in memory private key.
 */
export class Secp256k1KeyProvider extends PrivateKeyProvider {
  private readonly privateKey: Uint8Array;

  /**
   * Default constructor.
   * @param privateKey - Hex encoded private key, or raw private key bytes.
   */
  constructor(privateKey: string | Uint8Array) {
    super();
    if (typeof privateKey === "string") {
      this.privateKey = fromHex(privateKey as string);
    } else if (privateKey instanceof Uint8Array) {
      this.privateKey = privateKey;
    } else {
      throw new Error("invalid private key format");
    }
  }

  async connect(): Promise<void> {
    if (this.status !== PrivateKeyProviderStatus.NotConnected) {
      return;
    }

    this.updateStatus(PrivateKeyProviderStatus.Connected);
  }

  async disconnect(): Promise<void> {
    if (this.status !== PrivateKeyProviderStatus.Connected) {
      return;
    }

    this.updateStatus(PrivateKeyProviderStatus.NotConnected);
  }

  async getPrivateKey(): Promise<PrivateKey> {
    this.assertConnected();

    return {
      type: PrivateKeyType.Secp256k1,
      key: this.privateKey,
    };
  }
}

/**
 * Options to customize some parameters of PrivateKeySigner.
 */
export interface PrivateKeySignerOptions {
  /**
   * Signer signing mode.
   */
  signMode: SigningMode;
  /**
   * Prefix used to generate the bech32 address.
   */
  prefix?: string;
}

/**
 * Signer that uses a private key provided from a PrivateKeyProvider
 * to sign a transaction.
 */
export class PrivateKeySigner extends Signer {
  private keyProviderStatusListener: Observer<PrivateKeyProviderStatus> = (
    newStatus
  ) => {
    switch (newStatus) {
      case PrivateKeyProviderStatus.Disconnecting:
        this.updateStatus(SignerStatus.Disconnecting);
        break;

      case PrivateKeyProviderStatus.NotConnected:
        this.clearSessionFields();
        this.updateStatus(SignerStatus.NotConnected);
        break;

      default:
        break;
    }
  };

  private keyProvider: PrivateKeyProvider;

  private readonly signMode: SigningMode;

  private readonly prefix: string;

  private currentAccount?: AccountData;

  private _privateKey?: PrivateKey;

  private aminoSigner?: Secp256k1Wallet;

  private directSigner?: DirectSecp256k1Wallet;

  /**
   * Build the signer from a secp256k1 private key.
   * @param privateKey - Hex encoded private key, or raw private key bytes.
   * @param options - Signer options.
   */
  static fromSecp256k1(
    privateKey: string | Uint8Array,
    options: PrivateKeySignerOptions
  ): PrivateKeySigner {
    return new PrivateKeySigner(new Secp256k1KeyProvider(privateKey), options);
  }

  constructor(provider: PrivateKeyProvider, options: PrivateKeySignerOptions) {
    super(PrivateKeySigner.keyProviderStatusToSignerStatus(provider.status));
    this.keyProvider = provider;
    this.keyProvider.addStatusListener(this.keyProviderStatusListener);
    this.signMode = options.signMode;
    this.prefix = options?.prefix ?? "desmos";
  }

  private clearSessionFields() {
    this.aminoSigner = undefined;
    this.directSigner = undefined;
    this.currentAccount = undefined;
    this._privateKey = undefined;
  }

  async connect(): Promise<void> {
    if (this.status !== SignerStatus.NotConnected) {
      return;
    }

    this.updateStatus(SignerStatus.Connecting);
    try {
      await this.keyProvider.connect();
      this._privateKey = await this.keyProvider
        .getPrivateKey()
        .then((privateKey) => {
          switch (privateKey.type) {
            case PrivateKeyType.Secp256k1:
              return privateKey;
            default:
              throw new Error("invalid private key type");
          }
        });

      // We support only Secp256k1 keys at the moment, build the correct signer from the key.
      if (this.signMode === SigningMode.AMINO) {
        this.aminoSigner = await Secp256k1Wallet.fromKey(
          this._privateKey.key,
          this.prefix
        );
        [this.currentAccount] = await this.aminoSigner.getAccounts();
      } else {
        this.directSigner = await DirectSecp256k1Wallet.fromKey(
          this._privateKey.key,
          this.prefix
        );
        [this.currentAccount] = await this.directSigner.getAccounts();
      }
      this.updateStatus(SignerStatus.Connected);
    } catch (e) {
      this.clearSessionFields();
      this.updateStatus(SignerStatus.NotConnected);
      throw e;
    }
  }

  async disconnect(): Promise<void> {
    this.assertConnected();

    this.updateStatus(SignerStatus.Disconnecting);
    this.clearSessionFields();
    try {
      await this.keyProvider.disconnect();
      this.updateStatus(SignerStatus.NotConnected);
    } catch (e) {
      this.updateStatus(SignerStatus.NotConnected);
      throw e;
    }
  }

  async getAccounts(): Promise<readonly AccountData[]> {
    this.assertConnected();

    if (this.signMode === SigningMode.AMINO) {
      return this.aminoSigner!.getAccounts();
    }
    return this.directSigner!.getAccounts();
  }

  async getCurrentAccount(): Promise<AccountData | undefined> {
    this.assertConnected();

    return this.currentAccount;
  }

  async signAmino(
    signerAddress: string,
    signDoc: StdSignDoc
  ): Promise<AminoSignResponse> {
    this.assertConnected();

    if (this.aminoSigner === undefined) {
      throw new Error("sign format not supported");
    }

    return this.aminoSigner.signAmino(signerAddress, signDoc);
  }

  async signDirect(
    signerAddress: string,
    signDoc: SignDoc
  ): Promise<DirectSignResponse> {
    this.assertConnected();

    if (this.directSigner === undefined) {
      throw new Error("sign format not supported");
    }

    return this.directSigner.signDirect(signerAddress, signDoc);
  }

  get signingMode(): SigningMode {
    return this.signMode;
  }

  get privateKey(): PrivateKey {
    if (this._privateKey === undefined) {
      throw new Error(
        "can't get private key, check that the signer is connected"
      );
    }

    return this._privateKey;
  }

  private static keyProviderStatusToSignerStatus(
    status: PrivateKeyProviderStatus
  ): SignerStatus {
    switch (status) {
      case PrivateKeyProviderStatus.NotConnected:
        return SignerStatus.NotConnected;
      case PrivateKeyProviderStatus.Connecting:
        return SignerStatus.Connecting;
      case PrivateKeyProviderStatus.Connected:
        return SignerStatus.Connected;
      case PrivateKeyProviderStatus.Disconnecting:
        return SignerStatus.Disconnecting;
      default:
        throw new Error(`unknown status PrivateKeyProviderStatus: ${status}`);
    }
  }
}
