import {
  AccountData,
  DirectSignResponse,
  OfflineDirectSigner,
} from "@cosmjs/proto-signing";
import {
  AminoSignResponse,
  StdSignDoc,
  OfflineAminoSigner,
} from "@cosmjs/amino";
import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { SignerNotConnected } from "./errors";
import { Observer, ObserverManager } from "../utils/observermanager";

/**
 * Represents the various signing modes that can be supported by signers.
 */
export enum SigningMode {
  AMINO,
  DIRECT,
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
export type SignerObserver = Observer<SignerStatus>;

/**
 * Represents a remote signer.
 */
export abstract class Signer
  implements OfflineDirectSigner, OfflineAminoSigner
{
  private signerStatus: SignerStatus;

  private observerManager: ObserverManager<SignerStatus>;

  /**
   * Builds a new Signer instance.
   * @param status - Initial signer status.
   * @protected
   */
  protected constructor(status: SignerStatus) {
    this.signerStatus = status;
    this.observerManager = new ObserverManager<SignerStatus>();
  }

  /**
   * Updates the signer status and notifies the observers.
   * @param newStatus - The new signer status.
   * @protected
   */
  protected updateStatus(newStatus: SignerStatus) {
    this.signerStatus = newStatus;
    this.observerManager.emit(newStatus);
  }

  /**
   * Checks if the signer is connected and if not throws a SignerNotConnected exception.
   * @protected
   */
  protected assertConnected() {
    if (this.signerStatus !== SignerStatus.Connected) {
      throw new SignerNotConnected();
    }
  }

  /**
   * Adds an observer that will be called each time the signer changes state.
   * @param observer - The observer to be called.
   */
  public addStatusListener(observer: SignerObserver) {
    this.observerManager.addObserver(observer);
  }

  /**
   * Removes an observer so that it will not be called when the status changes.
   * @param observer - The observer to be removed.
   */
  public removeStatusListener(observer: SignerObserver) {
    this.observerManager.removeObserver(observer);
  }

  /**
   * Gets the current signer status.
   */
  public get status(): SignerStatus {
    return this.signerStatus;
  }

  /**
   * Tells whether the signer is connected or not.
   */
  public get isConnected(): boolean {
    return this.status === SignerStatus.Connected;
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
   * Gets the account selected by the user as the account to be used, or `undefined` if no account
   * has been selected yet.
   */
  public abstract getCurrentAccount(): Promise<AccountData | undefined>;

  /**
   * Gets all the accounts managed by the signer.
   *
   * NOTE: In some signer implementations, this method might execute asynchronously.
   * This means the returned promise might never complete.
   */
  public abstract getAccounts(): Promise<readonly AccountData[]>;

  /**
   * Implements OfflineDirectSigner.
   */
  public abstract signDirect(
    signerAddress: string,
    signDoc: SignDoc
  ): Promise<DirectSignResponse>;

  /**
   * Implements OfflineAminoSigner.
   */
  public abstract signAmino(
    signerAddress: string,
    signDoc: StdSignDoc
  ): Promise<AminoSignResponse>;
}
