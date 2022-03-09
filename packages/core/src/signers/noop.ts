/* eslint-disable @typescript-eslint/no-unused-vars */
import { AccountData, DirectSignResponse } from "@cosmjs/proto-signing";
import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { AminoSignResponse, StdSignDoc } from "@cosmjs/amino";
import { Signer, SignerStatus, SigningMode } from "./signer";

/**
 * Represents a Signer implementation that throws exceptions on every method that is used.
 */
export class NoOpSigner extends Signer {
  public constructor() {
    super(SignerStatus.NotConnected);
  }

  connect(): Promise<void> {
    return Promise.resolve(undefined);
  }

  get signingMode(): SigningMode {
    throw new Error("Operation not implemented");
  }

  disconnect(): Promise<void> {
    throw new Error("Operation not implemented");
  }

  getCurrentAccount(): Promise<AccountData | undefined> {
    throw new Error("Operation not implemented");
  }

  getAccounts(): Promise<readonly []> {
    throw new Error("Operation not implemented");
  }

  signAmino(
    signerAddress: string,
    signDoc: StdSignDoc
  ): Promise<AminoSignResponse> {
    throw new Error("Operation not implemented");
  }

  signDirect(
    signerAddress: string,
    signDoc: SignDoc
  ): Promise<DirectSignResponse> {
    throw new Error("Operation not implemented");
  }
}

export default NoOpSigner;
