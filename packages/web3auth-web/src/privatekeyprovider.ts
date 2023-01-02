import { ModalConfig, Web3Auth } from "@web3auth/modal";
import {
  PrivateKey,
  PrivateKeyProvider,
  PrivateKeyProviderStatus,
  PrivateKeyType,
} from "@desmoslabs/desmjs";
import { fromHex } from "@cosmjs/encoding";
import { ADAPTER_EVENTS, WALLET_ADAPTER_TYPE } from "@web3auth/base";
import { LOGIN_MODAL_EVENTS } from "@web3auth/ui";

/**
 * Options used during the logout.
 * See https://web3auth.io/docs/sdk/web/modal/usage#web3authlogout for more details.
 */
interface Web3AuthLogoutOptions {
  cleanup: boolean;
}

/**
 * Web3Auth options.
 */
export interface Web3AuthPrivateKeyProviderOptions {
  /**
   * Configurations passed to web3auth when initializing the modal.
   * See https://web3auth.io/docs/sdk/web/modal/whitelabel#modalconfig for more details.
   */
  modalConfig?: Record<WALLET_ADAPTER_TYPE, ModalConfig>;
  /**
   * Options passed to the web3auth.logout method.
   * See https://web3auth.io/docs/sdk/web/modal/usage#web3authlogout for more details.
   */
  logoutOptions?: Web3AuthLogoutOptions;
}

/**
 * Class capable of providing a private key received through web3auth.
 */
export class Web3AuthPrivateKeyProvider extends PrivateKeyProvider {
  private readonly we3auth: Web3Auth;

  private readonly modalConfig?: Record<WALLET_ADAPTER_TYPE, ModalConfig>;

  private readonly logoutOptions?: Web3AuthLogoutOptions;

  private subscribeToEvents = (web3auth: Web3Auth) => {
    web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
      this.updateStatus(PrivateKeyProviderStatus.Disconnecting);
      this.updateStatus(PrivateKeyProviderStatus.NotConnected);
    });
    web3auth.on(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, (visibility: boolean) => {
      // Handle login cancel from user when close the popup
      if (
        !visibility &&
        this.we3auth.status !== "connected" &&
        this.status === PrivateKeyProviderStatus.Connecting
      ) {
        this.updateStatus(PrivateKeyProviderStatus.NotConnected);
      }
    });
    web3auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
      console.error("ADAPTER_EVENTS.ERRORED", error);
    });
  };

  constructor(web3auth: Web3Auth, options?: Web3AuthPrivateKeyProviderOptions) {
    super();
    this.we3auth = web3auth;
    this.subscribeToEvents(this.we3auth);
    this.modalConfig = options?.modalConfig;
    this.logoutOptions = options?.logoutOptions;
  }

  async getPrivateKey(): Promise<PrivateKey> {
    const hexEncodedPrivateKey = (await this.we3auth.provider!.request({
      method: "private_key",
    })) as string;

    return {
      type: PrivateKeyType.Secp256k1,
      key: fromHex(hexEncodedPrivateKey),
    };
  }

  async connect(): Promise<void> {
    this.updateStatus(PrivateKeyProviderStatus.Connecting);

    await this.we3auth.initModal(this.modalConfig);
    const eventEmitter = await this.we3auth.connect();

    if (eventEmitter === null) {
      this.updateStatus(PrivateKeyProviderStatus.NotConnected);
      throw new Error("error while connecting to web3auth");
    }

    this.updateStatus(PrivateKeyProviderStatus.Connected);
  }

  async disconnect(): Promise<void> {
    if (this.status !== PrivateKeyProviderStatus.Connected) {
      return;
    }

    this.updateStatus(PrivateKeyProviderStatus.Disconnecting);

    try {
      await this.we3auth.logout(this.logoutOptions);
    } catch (e) {
      this.updateStatus(PrivateKeyProviderStatus.NotConnected);
      throw e;
    }

    this.updateStatus(PrivateKeyProviderStatus.NotConnected);
  }
}
