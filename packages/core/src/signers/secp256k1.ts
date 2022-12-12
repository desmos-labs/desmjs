import {Signer, SignerStatus, SigningMode} from "./signer";
import {AccountData, AminoSignResponse, Secp256k1Wallet, StdSignDoc} from "@cosmjs/amino";
import {SignDoc} from "cosmjs-types/cosmos/tx/v1beta1/tx";
import {DirectSecp256k1Wallet, DirectSignResponse} from "@cosmjs/proto-signing";
import {Observer, ObserverManager} from "../utils/observermanager";
import {fromHex} from "@cosmjs/encoding";


/**
 * Enum that represents the connection status of a PrivateKeyProvider.
 */
export enum Secp256k1KeyProviderStatus {
  NotConnected,
  Connecting,
  Connected,
  Disconnecting,
}

/**
 * Class that represents a secp256k1 key provider.
 */
export abstract class Secp256k1KeyProvider {

  private observerManager: ObserverManager<Secp256k1KeyProviderStatus> = new ObserverManager();
  protected keyProviderStatus: Secp256k1KeyProviderStatus = Secp256k1KeyProviderStatus.NotConnected;

  public addStatusListener(observer: Observer<Secp256k1KeyProviderStatus>) {
    this.observerManager.addObserver(observer)
  }

  public removeStatusListener(observer: Observer<Secp256k1KeyProviderStatus>) {
    this.observerManager.addObserver(observer)
  }

  protected updateStatus(newStatus: Secp256k1KeyProviderStatus) {
    this.keyProviderStatus = newStatus;
    this.observerManager.emit(newStatus);
  }

  protected assertConnected(): void {
    if (this.status !== Secp256k1KeyProviderStatus.Connected) {
      throw new Error("secp256k1 key provider not connected");
    }
  }

  public get status(): Secp256k1KeyProviderStatus {
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
  abstract getSecp256k1PrivateKey(): Promise<Uint8Array>;
}

/**
 * Implementation of Secp256k1KeyProvider that provides a private key
 * from an in memory private key.
 */
export class RawSecp256k1KeyProvider extends Secp256k1KeyProvider {

  private readonly privateKey: Uint8Array;

  /**
   * Default constructor.
   * @param privateKey - Hex encoded private key or raw private key.
   */
  constructor(privateKey: string | Uint8Array) {
    super();
    if (typeof privateKey === "string") {
      this.privateKey = fromHex(privateKey as string);
    } else if (privateKey instanceof Uint8Array) {
      this.privateKey = privateKey
    } else {
      throw new Error("invalid private key format");
    }
  }

  async connect(): Promise<void> {
    if (this.status !== Secp256k1KeyProviderStatus.NotConnected) {
      return;
    }

    this.updateStatus(Secp256k1KeyProviderStatus.Connected);
  }

  async disconnect(): Promise<void> {
    if (this.status !== Secp256k1KeyProviderStatus.Connected) {
      return;
    }

    this.updateStatus(Secp256k1KeyProviderStatus.NotConnected);
  }

  async getSecp256k1PrivateKey(): Promise<Uint8Array> {
    this.assertConnected();

    return this.privateKey;
  }

}

/**
 * Signer that use a private key provided from a Secp256k1KeyProvider
 * to sign a transaction.
 */
export class Secp256k1Signer extends Signer {

  private keyProviderStatusListener: Observer<Secp256k1KeyProviderStatus> = (newStatus) => {
    switch (newStatus) {
      case Secp256k1KeyProviderStatus.Disconnecting:
        this.updateStatus(SignerStatus.Disconnecting);
        break;

      case Secp256k1KeyProviderStatus.NotConnected:
        this.clearSessionFields();
        this.updateStatus(SignerStatus.NotConnected);
        break;
    }
  }

  private keyProvider: Secp256k1KeyProvider;
  private readonly signMode: SigningMode;
  private currentAccount?: AccountData;
  private privateKey?: Uint8Array;
  private aminoSigner?: Secp256k1Wallet;
  private directSigner?: DirectSecp256k1Wallet;

  static fromHexEncodedPrivateKey(privateKey: string, signMode: SigningMode): Secp256k1Signer {
    return new Secp256k1Signer(new RawSecp256k1KeyProvider(privateKey), signMode);
  }

  constructor(provider: Secp256k1KeyProvider, signMode: SigningMode) {
    super(Secp256k1Signer.keyProviderStatusToSignerStatus(provider.status));
    this.keyProvider = provider;
    this.keyProvider.addStatusListener(this.keyProviderStatusListener);
    this.signMode = signMode;
  }

  private clearSessionFields() {
    this.aminoSigner = undefined;
    this.directSigner = undefined;
    this.currentAccount = undefined;
    this.privateKey = undefined;
  }

  async connect(): Promise<void> {
    if (this.status !== SignerStatus.NotConnected) {
      return;
    }

    this.updateStatus(SignerStatus.Connecting);
    try {
      await this.keyProvider.connect();
      this.privateKey = await this.keyProvider.getSecp256k1PrivateKey();
      if (this.signMode === SigningMode.AMINO) {
        this.aminoSigner = await Secp256k1Wallet.fromKey(this.privateKey, "desmos");
        this.currentAccount = (await this.aminoSigner.getAccounts())[0];
      } else {
        this.directSigner = await DirectSecp256k1Wallet.fromKey(this.privateKey, "desmos");
        this.currentAccount = (await this.directSigner.getAccounts())[0];
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
      await this.keyProvider.disconnect()
      this.updateStatus(SignerStatus.NotConnected);
    } catch (e) {
      this.updateStatus(SignerStatus.NotConnected);
      throw e;
    }
  }

  async getAccounts(): Promise<readonly AccountData[]> {
    this.assertConnected()

    if (this.signMode === SigningMode.AMINO) {
      return this.aminoSigner!.getAccounts();
    } else {
      return this.directSigner!.getAccounts();
    }
  }

  async getCurrentAccount(): Promise<AccountData | undefined> {
    this.assertConnected();

    return this.currentAccount
  }

  async signAmino(signerAddress: string, signDoc: StdSignDoc): Promise<AminoSignResponse> {
    this.assertConnected();

    if (this.aminoSigner === undefined) {
      throw new Error("sign format not supported");
    }

    return this.aminoSigner.signAmino(signerAddress, signDoc);
  }

  async signDirect(signerAddress: string, signDoc: SignDoc): Promise<DirectSignResponse> {
    this.assertConnected();

    if (this.directSigner === undefined) {
      throw new Error("sign format not supported");
    }

    return this.directSigner.signDirect(signerAddress, signDoc);
  }

  get signingMode(): SigningMode {
    return this.signMode;
  }

  private static keyProviderStatusToSignerStatus(status: Secp256k1KeyProviderStatus): SignerStatus {
    switch (status) {
      case Secp256k1KeyProviderStatus.NotConnected:
        return SignerStatus.NotConnected;
      case Secp256k1KeyProviderStatus.Connecting:
        return SignerStatus.Connecting;
      case Secp256k1KeyProviderStatus.Connected:
        return SignerStatus.Connected;
      case Secp256k1KeyProviderStatus.Disconnecting:
        return SignerStatus.Disconnecting;
    }
  }
}
