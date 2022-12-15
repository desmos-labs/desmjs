import {
  PrivateKey,
  PrivateKeyProvider,
  PrivateKeyProviderStatus,
  PrivateKeySigner,
  PrivateKeyType,
  Signer,
  SigningMode,
} from "@desmoslabs/desmjs";
import Web3Auth, { SdkLoginParams } from "@web3auth/react-native-sdk";
import { fromHex } from "@cosmjs/encoding";

export class Web3AuthKeyProvider extends PrivateKeyProvider {
  private readonly web3auth: Web3Auth;

  private readonly loginParams: SdkLoginParams;

  private privateKey?: PrivateKey;

  constructor(web3auth: Web3Auth, loginParams: Omit<SdkLoginParams, "curve">) {
    super();
    this.web3auth = web3auth;
    this.loginParams = {
      ...loginParams,
      // Force the private key to secp256k1 since is the only one supported from the private key signer.
      curve: "secp256k1",
    };
  }

  async connect(): Promise<void> {
    this.updateStatus(PrivateKeyProviderStatus.Connecting);
    const response = await this.web3auth.login(this.loginParams);

    if (response.privKey === undefined) {
      this.updateStatus(PrivateKeyProviderStatus.NotConnected);
      throw new Error("can't connect privateKey is undefined");
    }

    this.privateKey = {
      type: PrivateKeyType.Secp256k1,
      key: fromHex(response.privKey),
    };

    this.updateStatus(PrivateKeyProviderStatus.Connected);
  }

  async disconnect(): Promise<void> {
    this.updateStatus(PrivateKeyProviderStatus.Disconnecting);
    try {
      await this.web3auth.logout({
        redirectUrl: this.loginParams.redirectUrl,
      });
    } catch (e) {
      this.updateStatus(PrivateKeyProviderStatus.NotConnected);
      throw e;
    }

    this.updateStatus(PrivateKeyProviderStatus.NotConnected);
  }

  async getPrivateKey(): Promise<PrivateKey> {
    if (this.privateKey === undefined) {
      throw new Error(
        "can't get private key, Web3AuthKeyProvider not connected"
      );
    }

    return this.privateKey;
  }
}

/**
 * Gets a Signer instance capable of sign transaction using the key received from Web3Auth.
 * @param signingMode - The Signer signing mode.
 * @param web3auth - Web3Auth client.
 * @param loginParams - Extra Web3Auth options.
 */
export function web3authSigner(
  signingMode: SigningMode,
  web3auth: Web3Auth,
  loginParams: Omit<SdkLoginParams, "curve">
): Signer {
  return new PrivateKeySigner(
    new Web3AuthKeyProvider(web3auth, loginParams),
    signingMode
  );
}
