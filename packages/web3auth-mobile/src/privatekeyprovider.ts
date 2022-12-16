import {
  PrivateKey,
  PrivateKeyProvider,
  PrivateKeyProviderStatus,
  PrivateKeySigner,
  PrivateKeyType,
  Signer,
  SigningMode,
} from "@desmoslabs/desmjs";
import Web3Auth, {
  SdkLoginParams,
  SdkLogoutParams,
} from "@web3auth/react-native-sdk";
import { fromHex } from "@cosmjs/encoding";
import { Platform } from "react-native";

export interface Web3AuthKeyProviderParams {
  /**
   * Parameters used to perform the login.
   * For more details see https://web3auth.io/docs/sdk/react-native/usage#login
   * Note: the curve field will be overridden to secp256k1.
   */
  loginParams: Omit<SdkLoginParams, "curve">;
  /**
   * Params used to perform the logout.
   */
  logoutParams: SdkLogoutParams;
  /**
   * If true performs the logout operation on iOS even if is not recommended.
   * See here for more details https://web3auth.io/docs/sdk/react-native/usage#logout
   */
  triggerLogoutOnIos?: boolean;
}

export class Web3AuthKeyProvider extends PrivateKeyProvider {
  private readonly web3auth: Web3Auth;

  private readonly loginParams: SdkLoginParams;

  private readonly logoutParams: SdkLogoutParams;

  private readonly triggerLogoutOnIos: boolean;

  private privateKey?: PrivateKey;

  constructor(web3auth: Web3Auth, params: Web3AuthKeyProviderParams) {
    super();
    this.web3auth = web3auth;
    this.loginParams = {
      ...params.loginParams,
      // Force the private key to secp256k1 since is the only one supported from the private key signer.
      curve: "secp256k1",
    };
    this.logoutParams = params.logoutParams;
    this.triggerLogoutOnIos = params.triggerLogoutOnIos ?? false;
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

    if (Platform.OS !== "ios" || this.triggerLogoutOnIos) {
      try {
        await this.web3auth.logout(this.logoutParams);
      } catch (e) {
        this.updateStatus(PrivateKeyProviderStatus.NotConnected);
        throw e;
      }
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
 * @param params - Web3Auth params.
 */
export function web3authSigner(
  signingMode: SigningMode,
  web3auth: Web3Auth,
  params: Web3AuthKeyProviderParams
): Signer {
  return new PrivateKeySigner(
    new Web3AuthKeyProvider(web3auth, params),
    signingMode
  );
}
