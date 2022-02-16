import {AccountData, DirectSignResponse, OfflineDirectSigner} from "@cosmjs/proto-signing";
import {AminoSignResponse, StdSignDoc, OfflineAminoSigner} from "@cosmjs/amino";
import {SignDoc} from "cosmjs-types/cosmos/tx/v1beta1/tx";

/**
 * Represents the various signing modes that can be supported by signers.
 */
export enum SigningMode {
  AMINO,
  DIRECT
}

/**
 * Represents the possible status of a Signer.
 */
export enum SignerStatus {
  NotConnected,
  Connecting,
  Connected,
  Disconnecting,
}

/**
 * Represents a generic method that receives updates for new Signer status values.
 */
export type SignerObserver = (newStatus: SignerStatus) => void;

/**
 * Represents the error that is thrown inside operations that require the client to be connected, if it is not.
 */
export class SignerNotConnected extends Error {
  constructor() {
    super("Signer not connected");
  }
}

/**
 * Checks if the provided object is an instance of ConnectableSigner.
 * @param signer - The object to check.
 * @returns Returns true if the provided object is an instance of ConnectableSigner, false otherwise.
 */
export function isConnectableSigner(signer: any | undefined): signer is Signer {
  if (signer === undefined) {
    return false;
  }

  const castedSigner = signer as Signer;
  return castedSigner.status !== undefined && castedSigner.connect !== undefined &&
    castedSigner.disconnect !== undefined && castedSigner.getAccounts !== undefined &&
    castedSigner.addStatusListener !== undefined && castedSigner.removeStatusListener !== undefined;
}

/**
 * Represents a remote signer.
 */
export abstract class Signer implements OfflineDirectSigner, OfflineAminoSigner {
  private _status: SignerStatus
  private observers: SignerObserver[] = [];

  /**
   * Builds a new Signer instance.
   * @param status - Initial signer status.
   * @protected
   */
  protected constructor(status: SignerStatus) {
    this._status = status;
  }

  /**
   * Updates the signer status and notifies the observers.
   * @param newStatus - The new signer status.
   * @protected
   */
  protected updateStatus(newStatus: SignerStatus) {
    this._status = newStatus;
    this.observers.forEach(o => o(newStatus));
  }

  /**
   * Checks if the signer is connected and if not throws a SignerNotConnected exception.
   * @protected
   */
  protected assertConnected() {
    if (this._status !== SignerStatus.Connected) {
      throw new SignerNotConnected();
    }
  }

  /**
   * Adds an observer that will be called each time the signer changes state.
   * @param observer - The observer to be called.
   */
  public addStatusListener(observer: SignerObserver) {
    this.observers.push(observer);
  }

  /**
   * Removes an observer so that it will not be called when the status changes.
   * @param observer - The observer to be removed.
   */
  public removeStatusListener(observer: SignerObserver) {
    const index = this.observers.indexOf(observer);
    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  /**
   * Gets the current signer status.
   */
  public get status(): SignerStatus {
    return this._status;
  }

  /**
   * Tells whether the signer is connected or not.
   */
  public get isConnected(): boolean {
    return this.status == SignerStatus.Connected;
  }

  /**
   * Returns the signing mode supported by the signer.
   */
  public abstract get signingMode(): SigningMode;

  /**
   * Connects the signer.
   * If the signer is already connected no actions will be performed.
   */
  public abstract connect(): Promise<void>;

  /**
   * Disconnect the signer.
   * If the signer is already disconnect no actions will be performed.
   */
  public abstract disconnect(): Promise<void>;

  /**
   * Gets all the accounts managed by the signer.
   */
  public abstract getAccounts(): Promise<readonly AccountData[]>;

  /**
   * Implements OfflineDirectSigner.
   */
  public abstract signDirect(signerAddress: string, signDoc: SignDoc): Promise<DirectSignResponse>

  /**
   * Implements OfflineAminoSigner.
   */
  public abstract signAmino(signerAddress: string, signDoc: StdSignDoc): Promise<AminoSignResponse>
}