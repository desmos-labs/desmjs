import * as process from "process";
import SignClient from "@walletconnect/sign-client";
import {
  OfflineSignerAdapter,
  Signer,
  SignerStatus,
  SigningMode,
} from "@desmoslabs/desmjs";
import { getSdkError } from "@walletconnect/utils";
import { StdSignDoc } from "@cosmjs/amino";
import { AuthInfo, SignDoc, TxBody } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import Long from "long";
import {
  decodeAminoSignRpcRequestParams,
  decodeDirectSignRpcRequestParams,
} from "./decode";
import {
  encodeAminoSignRpcResponse,
  encodeDirectSignRpcResponse,
  encodeGetAccountsRpcResponse,
} from "./encode";
import { WalletConnectSigner } from "./signer";
import { CosmosRPCMethods, QrCodeModalController } from "./types";

// Polyfill LocalStorage required from the WalletConnect session cache.
if (typeof localStorage === "undefined" || localStorage === null) {
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  const { LocalStorage } = require("node-localstorage");
  global.localStorage = new LocalStorage("./scratch");
}

class MockQrCodeModalController implements QrCodeModalController {
  private _closed: boolean;

  private readonly onOpen: (uri: string, onClose: () => void) => void;

  private closeCb: (() => void) | undefined;

  constructor(onOpen: (uri: string, onClose: () => void) => void) {
    this._closed = true;
    this.onOpen = onOpen;
    this.closeCb = undefined;
  }

  get isClosed(): boolean {
    return this._closed;
  }

  open(uri: string, onClose: () => void) {
    this._closed = false;
    this.closeCb = onClose;
    this.onOpen(uri, onClose);
  }

  close() {
    this._closed = true;
    if (this.closeCb !== undefined) {
      this.closeCb();
    }
  }
}

async function mockWalletWalletConnectClient(
  signMode: SigningMode,
): Promise<{ walletClient: SignClient; signer: Signer }> {
  const signer = await OfflineSignerAdapter.generate(signMode);
  const walletClient = await SignClient.init({
    projectId: process.env.WC_PROJECT_ID,
    metadata: {
      name: "Wallet",
      description: "Test wallet",
      url: "",
      icons: [],
    },
  });

  // Listener to automatically approve the session proposal
  walletClient.on("session_proposal", async (proposal) => {
    const accounts = await signer.getAccounts();
    const signMethod =
      signer.signingMode === SigningMode.DIRECT
        ? CosmosRPCMethods.SignDirect
        : CosmosRPCMethods.SignAmino;

    const desmosChains = proposal.params.requiredNamespaces.desmos.chains;
    if (desmosChains === undefined) {
      return;
    }

    walletClient.approve({
      id: proposal.id,
      namespaces: {
        desmos: {
          accounts: [`${desmosChains[0]}:${accounts[0].address}`],
          methods: [CosmosRPCMethods.GetAccounts, signMethod],
          events: [],
        },
      },
    });
  });

  walletClient.on("session_request", async (request) => {
    const { method, params } = request.params.request;
    switch (method) {
      case CosmosRPCMethods.GetAccounts:
        {
          const accounts = await signer.getAccounts();
          walletClient.respond({
            topic: request.topic,
            response: {
              id: request.id,
              jsonrpc: "2.0",
              result: encodeGetAccountsRpcResponse(accounts),
            },
          });
        }
        break;

      case CosmosRPCMethods.SignDirect:
        // eslint-disable-next-line no-lone-blocks
        {
          if (signer.signingMode === SigningMode.DIRECT) {
            const decodeResult = decodeDirectSignRpcRequestParams(params);
            if (decodeResult.isOk()) {
              const { signerAddress, signDoc } = decodeResult.value;
              const signature = await signer.signDirect(signerAddress, signDoc);
              walletClient.respond({
                topic: request.topic,
                response: {
                  id: request.id,
                  jsonrpc: "2.0",
                  result: encodeDirectSignRpcResponse(signature),
                },
              });
            } else {
              walletClient.respond({
                topic: request.topic,
                response: {
                  id: request.id,
                  jsonrpc: "2.0",
                  error: {
                    code: 9000,
                    message: decodeResult.error,
                  },
                },
              });
            }
          } else {
            walletClient.respond({
              topic: request.topic,
              response: {
                id: request.id,
                jsonrpc: "2.0",
                error: getSdkError("UNSUPPORTED_METHODS"),
              },
            });
          }
        }
        break;

      case CosmosRPCMethods.SignAmino:
        // eslint-disable-next-line no-lone-blocks
        {
          if (signer.signingMode === SigningMode.AMINO) {
            const decodeResult = decodeAminoSignRpcRequestParams(params);
            if (decodeResult.isOk()) {
              const { signerAddress, signDoc } = decodeResult.value;
              const signature = await signer.signAmino(signerAddress, signDoc);
              walletClient.respond({
                topic: request.topic,
                response: {
                  id: request.id,
                  jsonrpc: "2.0",
                  result: encodeAminoSignRpcResponse(signature),
                },
              });
            } else {
              walletClient.respond({
                topic: request.topic,
                response: {
                  id: request.id,
                  jsonrpc: "2.0",
                  error: {
                    code: 9000,
                    message: decodeResult.error,
                  },
                },
              });
            }
          } else {
            walletClient.respond({
              topic: request.topic,
              response: {
                id: request.id,
                jsonrpc: "2.0",
                error: getSdkError("UNSUPPORTED_METHODS"),
              },
            });
          }
        }
        break;

      default:
        // Ignore this
        break;
    }
  });

  return { walletClient, signer };
}

async function mockDAppWalletConnectClient(): Promise<SignClient> {
  return SignClient.init({
    projectId: process.env.WC_PROJECT_ID,
    metadata: {
      name: "DApp",
      description: "Test DApp",
      url: "",
      icons: [],
    },
  });
}

function mockQrCodeController(
  walletClient: SignClient,
): MockQrCodeModalController {
  return new MockQrCodeModalController((uri, _) => {
    walletClient.pair({ uri });
  });
}

describe("WalletConnectSigner", () => {
  jest.setTimeout(10000);

  it("Connect successfully", async () => {
    // Prepare the SignClient used from a Wallet
    const { walletClient, signer } = await mockWalletWalletConnectClient(
      SigningMode.DIRECT,
    );
    const dappClient = await mockDAppWalletConnectClient();
    const qrCodeController = mockQrCodeController(walletClient);

    const walletConnectSigner = new WalletConnectSigner(dappClient, {
      chain: "desmos:desmos-mainnet",
      signingMode: signer.signingMode,
      qrCodeModalController: qrCodeController,
    });
    await walletConnectSigner.connect();

    expect(walletConnectSigner.status).toBe(SignerStatus.Connected);
    expect(dappClient.session.values).toHaveLength(1);
    expect(qrCodeController.isClosed).toBe(true);
  });

  it("Reconnect successfully", async () => {
    // Prepare the SignClient used from a Wallet
    const { walletClient, signer } = await mockWalletWalletConnectClient(
      SigningMode.DIRECT,
    );
    const dappClient = await mockDAppWalletConnectClient();

    const walletConnectSigner = new WalletConnectSigner(dappClient, {
      chain: "desmos:desmos-mainnet",
      signingMode: signer.signingMode,
      qrCodeModalController: mockQrCodeController(walletClient),
    });
    await walletConnectSigner.connect();

    const newWalletConnectSigner = new WalletConnectSigner(dappClient, {
      chain: "desmos:desmos-mainnet",
      signingMode: signer.signingMode,
    });

    await newWalletConnectSigner.connectToSession(dappClient.session.values[0]);
    expect(newWalletConnectSigner.status).toBe(SignerStatus.Connected);
  });

  it("Disconnect successfully", async () => {
    // Prepare the SignClient used from a Wallet
    const { walletClient, signer } = await mockWalletWalletConnectClient(
      SigningMode.DIRECT,
    );
    const dappClient = await mockDAppWalletConnectClient();

    const walletConnectSigner = new WalletConnectSigner(dappClient, {
      chain: "desmos:desmos-mainnet",
      signingMode: signer.signingMode,
      qrCodeModalController: mockQrCodeController(walletClient),
    });
    await walletConnectSigner.connect();
    expect(walletConnectSigner.status).toBe(SignerStatus.Connected);

    await walletConnectSigner.disconnect();
    expect(walletConnectSigner.status).toBe(SignerStatus.NotConnected);
    expect(dappClient.session.values.length).toBe(0);
  });

  it("Get accounts successfully", async () => {
    const { walletClient, signer } = await mockWalletWalletConnectClient(
      SigningMode.DIRECT,
    );
    const client = await mockDAppWalletConnectClient();
    const walletConnectSigner = new WalletConnectSigner(client, {
      signingMode: signer.signingMode,
      chain: "desmos:desmos-mainnet",
      qrCodeModalController: mockQrCodeController(walletClient),
    });

    await walletConnectSigner.connect();

    const accounts = await walletConnectSigner.getAccounts();
    const referenceAccounts = await signer.getAccounts();
    expect(accounts).toMatchObject(referenceAccounts);
  });

  it("Sign amino successfully", async () => {
    // Prepare the SignClient used from a Wallet
    const { walletClient, signer } = await mockWalletWalletConnectClient(
      SigningMode.AMINO,
    );
    const dappClient = await mockDAppWalletConnectClient();

    const walletConnectSigner = new WalletConnectSigner(dappClient, {
      chain: "desmos:desmos-mainnet",
      signingMode: signer.signingMode,
      qrCodeModalController: mockQrCodeController(walletClient),
    });
    await walletConnectSigner.connect();

    const signerAddress = (await signer.getAccounts())[0].address;
    const testSignDoc: StdSignDoc = {
      fee: { gas: "10000", amount: [{ amount: "1000", denom: "udsm" }] },
      msgs: [],
      memo: "",
      chain_id: "chain-id",
      sequence: "12",
      account_number: "10",
    };

    const signResponse = await walletConnectSigner.signAmino(
      signerAddress,
      testSignDoc,
    );
    const referenceSignResponse = await signer.signAmino(
      signerAddress,
      testSignDoc,
    );

    expect(signResponse).toMatchObject(referenceSignResponse);
  });

  it("Sign amino with direct signer error", async () => {
    // Prepare the SignClient used from a Wallet
    const { walletClient, signer } = await mockWalletWalletConnectClient(
      SigningMode.DIRECT,
    );
    const dappClient = await mockDAppWalletConnectClient();

    const walletConnectSigner = new WalletConnectSigner(dappClient, {
      chain: "desmos:desmos-mainnet",
      signingMode: signer.signingMode,
      qrCodeModalController: mockQrCodeController(walletClient),
    });
    await walletConnectSigner.connect();

    const signerAddress = (await signer.getAccounts())[0].address;
    const testSignDoc: StdSignDoc = {
      fee: { gas: "10000", amount: [{ amount: "1000", denom: "udsm" }] },
      msgs: [],
      memo: "",
      chain_id: "chain-id",
      sequence: "12",
      account_number: "10",
    };

    await expect(
      walletConnectSigner.signAmino(signerAddress, testSignDoc),
    ).rejects.toHaveProperty(
      "message",
      "Missing or invalid. request() method: cosmos_signAmino",
    );
  });

  it("Sign direct successfully", async () => {
    // Prepare the SignClient used from a Wallet
    const { walletClient, signer } = await mockWalletWalletConnectClient(
      SigningMode.DIRECT,
    );
    const dappClient = await mockDAppWalletConnectClient();

    const walletConnectSigner = new WalletConnectSigner(dappClient, {
      chain: "desmos:desmos-mainnet",
      signingMode: signer.signingMode,
      qrCodeModalController: mockQrCodeController(walletClient),
    });
    await walletConnectSigner.connect();

    const signerAddress = (await signer.getAccounts())[0].address;
    const testSignDoc: SignDoc = {
      bodyBytes: TxBody.encode(
        TxBody.fromPartial({
          memo: "test-memo",
          messages: [],
        }),
      ).finish(),
      authInfoBytes: AuthInfo.encode(
        AuthInfo.fromPartial({
          fee: {
            amount: [{ amount: "1000", denom: "udsm" }],
          },
        }),
      ).finish(),
      chainId: "test-chain",
      accountNumber: Long.fromNumber(42, true),
    };

    const signResponse = await walletConnectSigner.signDirect(
      signerAddress,
      testSignDoc,
    );
    const referenceSignResponse = await signer.signDirect(
      signerAddress,
      testSignDoc,
    );

    expect(signResponse).toMatchObject(referenceSignResponse);
  });

  it("Sign direct with amino signer error", async () => {
    // Prepare the SignClient used from a Wallet
    const { walletClient, signer } = await mockWalletWalletConnectClient(
      SigningMode.AMINO,
    );
    const dappClient = await mockDAppWalletConnectClient();

    const walletConnectSigner = new WalletConnectSigner(dappClient, {
      chain: "desmos:desmos-mainnet",
      signingMode: signer.signingMode,
      qrCodeModalController: mockQrCodeController(walletClient),
    });
    await walletConnectSigner.connect();

    const signerAddress = (await signer.getAccounts())[0].address;
    const testSignDoc: SignDoc = {
      bodyBytes: TxBody.encode(
        TxBody.fromPartial({
          memo: "test-memo",
          messages: [],
        }),
      ).finish(),
      authInfoBytes: AuthInfo.encode(
        AuthInfo.fromPartial({
          fee: {
            amount: [{ amount: "1000", denom: "udsm" }],
          },
        }),
      ).finish(),
      chainId: "test-chain",
      accountNumber: Long.fromNumber(42, true),
    };

    await expect(
      walletConnectSigner.signDirect(signerAddress, testSignDoc),
    ).rejects.toHaveProperty(
      "message",
      "Missing or invalid. request() method: cosmos_signDirect",
    );
  });
});
