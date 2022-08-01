import {
  Account,
  AminoTypes,
  DeliverTxResponse,
  MsgTransferEncodeObject,
  QueryClient,
  setupAuthExtension,
  setupBankExtension,
  setupIbcExtension,
  setupStakingExtension,
  setupTxExtension,
  SignerData,
  SigningStargateClientOptions,
  StdFee,
} from "@cosmjs/stargate";
import { Any } from "cosmjs-types/google/protobuf/any";
import {
  EncodeObject,
  encodePubkey,
  makeSignDoc,
  Registry,
  TxBodyEncodeObject,
} from "@cosmjs/proto-signing";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import {
  AccountData,
  encodeSecp256k1Pubkey,
  makeSignDoc as makeSignDocAmino,
  StdSignDoc,
} from "@cosmjs/amino";
import {
  AuthInfo,
  SignDoc,
  SignerInfo,
  TxRaw,
} from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";
import { fromBase64 } from "@cosmjs/encoding";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import Long from "long";
import { Int53 } from "@cosmjs/math";
import { Profile } from "@desmoslabs/desmjs-types/desmos/profiles/v3/models_profile";
import {
  setupWasmExtension,
  SigningCosmWasmClient,
} from "@cosmjs/cosmwasm-stargate";
import { MsgTransfer } from "cosmjs-types/ibc/applications/transfer/v1/tx";
import { Height } from "@desmoslabs/desmjs-types/ibc/core/client/v1/client";
import { NoOpSigner, Signer, SigningMode } from "./signers";
import {
  DesmosQueryClient,
  profileFromAny,
  setupProfilesExtension,
  setupAuthzExtension,
  setupRelationshipsExtension,
  setupSubspacesExtension,
  setupPostsExtension,
  setupSupplyExtension,
  setupFeesExtension,
  setupReactionsExtension,
  setupReportsExtension,
} from "./queries";
import { createDesmosTypes, desmosRegistryTypes } from "./aminomessages";

function createDefaultRegistry(): Registry {
  return new Registry(desmosRegistryTypes);
}

function makeSignerInfos(
  signers: ReadonlyArray<{ readonly pubkey: Any; readonly sequence: number }>,
  signMode: SignMode
): SignerInfo[] {
  return signers.map(
    ({ pubkey, sequence }): SignerInfo => ({
      publicKey: pubkey,
      modeInfo: {
        single: { mode: signMode },
      },
      sequence: Long.fromNumber(sequence),
    })
  );
}

/**
 * Creates and serializes an AuthInfo document.
 * This implementation does not support different signing modes for the different signers.
 */
export function makeAuthInfoBytes(
  signers: ReadonlyArray<{ readonly pubkey: Any; readonly sequence: number }>,
  feeAmount: readonly Coin[],
  gasLimit: number,
  signMode = SignMode.SIGN_MODE_DIRECT,
  granter?: string
): Uint8Array {
  return AuthInfo.encode(
    AuthInfo.fromPartial({
      signerInfos: makeSignerInfos(signers, signMode),
      fee: {
        amount: [...feeAmount],
        gasLimit: Long.fromNumber(gasLimit),
        granter,
      },
    })
  ).finish();
}

/**
 * Contains the result of a signature.
 */
export type SignatureResult = {
  signerData: SignerData;
  signDoc: SignDoc | StdSignDoc;
  txRaw: TxRaw;
};

/**
 * Client to interact with the Desmos chain.
 */
export class DesmosClient extends SigningCosmWasmClient {
  private txSigner: Signer;

  private typesRegistry: Registry;

  private types: AminoTypes;

  public static override async connect(
    endpoint: string,
    options: SigningStargateClientOptions = {}
  ): Promise<DesmosClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new DesmosClient(tmClient, options, undefined);
  }

  public static override async connectWithSigner(
    endpoint: string,
    signer: Signer,
    options: SigningStargateClientOptions = {}
  ): Promise<DesmosClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new DesmosClient(tmClient, options, signer);
  }

  protected constructor(
    client: Tendermint34Client,
    options: SigningStargateClientOptions,
    signer: Signer = new NoOpSigner()
  ) {
    const prefix = options?.prefix ?? "desmos";
    const {
      registry = createDefaultRegistry(),
      aminoTypes = new AminoTypes(createDesmosTypes(prefix)),
    } = options;

    super(client, signer, {
      registry,
      aminoTypes,
      prefix: "desmos",
      accountParser: profileFromAny,
      ...options,
    });

    this.txSigner = signer;
    this.typesRegistry = registry;
    this.types = aminoTypes;
  }

  /**
   * Updates the signer used to sign the transaction.
   * @param signer - The new signer that will be used.
   */
  setSigner(signer: Signer) {
    this.txSigner = signer;
  }

  /**
   * Gets the account associated to the provided address, or `null` if no account is found.
   * This function has been overridden to correctly parse a Desmos profile.
   */
  override async getAccount(searchAddress: string): Promise<Account | null> {
    const account = await this.forceGetQueryClient().auth.account(
      searchAddress
    );
    if (!account) {
      return null;
    }

    return profileFromAny(account);
  }

  /**
   * Gets the profile associated to the provided address, or `null` if no profile is found.
   */
  public async getProfile(searchAddress: string): Promise<Profile | null> {
    const queryClient = this.forceGetQueryClient();
    return queryClient.profiles.profile(searchAddress);
  }

  /**
   * Implements SigningStargateClient.
   * @protected
   */
  protected override getQueryClient(): DesmosQueryClient | undefined {
    const client = super.getTmClient();
    return client
      ? QueryClient.withExtensions(
          client,
          setupAuthzExtension,
          setupAuthExtension,
          setupBankExtension,
          setupStakingExtension,
          setupTxExtension,
          setupProfilesExtension,
          setupRelationshipsExtension,
          setupSubspacesExtension,
          setupPostsExtension,
          setupReactionsExtension,
          setupReportsExtension,
          setupFeesExtension,
          setupSupplyExtension,
          setupWasmExtension,
          setupIbcExtension
        )
      : undefined;
  }

  /**
   * Implements SigningStargateClient.
   * @protected
   */
  protected override forceGetQueryClient(): DesmosQueryClient {
    const client = this.getQueryClient();
    if (!client) {
      throw new Error(
        "Query client not available. You cannot use online functionality in offline mode."
      );
    }

    return client;
  }

  /**
   * Returns the SignerData for the user having the given address, querying them from the chain.
   */
  private async getSignerData(signerAddress: string): Promise<SignerData> {
    const { accountNumber, sequence } = await this.getSequence(signerAddress);
    const chainId = await this.getChainId();
    return {
      accountNumber,
      sequence,
      chainId,
    };
  }

  /**
   * Signs a transaction using the provided data.
   * Note that an error will be thrown if the signer is not set (i.e. the client has been built
   * without using the `withSigner` builder).
   *
   * The sign mode (SIGN_MODE_DIRECT or SIGN_MODE_LEGACY_AMINO_JSON) is determined by this client's signer.
   *
   * You can pass signer data (account number, sequence and chain id) explicitly instead of querying them
   * from the chain. This is needed when signing for a multisig account, but it also allows for offline signing
   * (See the SigningStargateClient.offline constructor).
   */
  override async sign(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    explicitSignerData?: SignerData
  ): Promise<TxRaw> {
    const result = await this.signTx(
      signerAddress,
      messages,
      fee,
      memo,
      explicitSignerData
    );
    return result.txRaw;
  }

  /**
   * Returns the account having the given address reading them from the signer.
   * @param address {String}: Address of the account to be searched for.
   * @private
   */
  private async getAccountFromSigner(address: string): Promise<AccountData> {
    const accounts = await this.txSigner.getAccounts();
    const accountFromSigner = accounts.find(
      (account) => account.address === address
    );
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    return accountFromSigner;
  }

  /**
   * Signs a transaction using the provided data.
   * Note that an error will be thrown if the signer is not set (i.e. the client has been built
   * without using the `withSigner` builder).
   *
   * The sign mode (SIGN_MODE_DIRECT or SIGN_MODE_LEGACY_AMINO_JSON) is determined by this client's signer.
   *
   * You can pass signer data (account number, sequence and chain id) explicitly instead of querying them
   * from the chain. This is needed when signing for a multisig account, but it also allows for offline signing
   * (See the SigningStargateClient.offline constructor).
   */
  public async signTx(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    explicitSignerData?: SignerData,
    feeGranter?: string
  ): Promise<SignatureResult> {
    // Build the signer data
    const signerData =
      explicitSignerData ?? (await this.getSignerData(signerAddress));

    // Sign the data using the proper mode
    return this.txSigner.signingMode === SigningMode.DIRECT
      ? this.signTxDirect(
          signerAddress,
          messages,
          fee,
          memo,
          signerData,
          feeGranter
        )
      : this.signTxAmino(
          signerAddress,
          messages,
          fee,
          memo,
          signerData,
          feeGranter
        );
  }

  private async signTxAmino(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId }: SignerData,
    feeGranter?: string
  ): Promise<SignatureResult> {
    // Get the signer account
    const signerAccount = await this.getAccountFromSigner(signerAddress);

    // Build the SignDoc
    const msgs = messages.map((msg) => this.types.toAmino(msg));
    const signDoc = makeSignDocAmino(
      msgs,
      fee,
      chainId,
      memo,
      accountNumber,
      sequence
    );

    // Sign the data using Amino
    const { signature, signed } = await this.txSigner.signAmino(
      signerAddress,
      signDoc
    );

    // Build the signed tx object
    const signedTxBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: {
        messages: signed.msgs.map((msg) => this.types.fromAmino(msg)),
        memo: signed.memo,
      },
    };

    // Get everything that is needed to build the AuthInfoBytes
    const pubkey = encodePubkey(encodeSecp256k1Pubkey(signerAccount.pubkey));
    const signedGasLimit = Int53.fromString(signed.fee.gas).toNumber();
    const signedSequence = Int53.fromString(signed.sequence).toNumber();
    const signedTxBodyBytes = this.registry.encode(signedTxBodyEncodeObject);

    // Build the AuthInfoBytes
    const signedAuthInfoBytes = makeAuthInfoBytes(
      [
        {
          pubkey,
          sequence: signedSequence,
        },
      ],
      signed.fee.amount,
      signedGasLimit,
      SignMode.SIGN_MODE_LEGACY_AMINO_JSON,
      feeGranter
    );

    // Return the TxRaw instance
    return {
      signerData: { accountNumber, sequence, chainId },
      signDoc,
      txRaw: TxRaw.fromPartial({
        bodyBytes: signedTxBodyBytes,
        authInfoBytes: signedAuthInfoBytes,
        signatures: [fromBase64(signature.signature)],
      }),
    };
  }

  private async signTxDirect(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId }: SignerData,
    feeGranter?: string
  ): Promise<SignatureResult> {
    // Get the signer account
    const signerAccount = await this.getAccountFromSigner(signerAddress);

    // Build the tx object to be signed
    const txBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: {
        messages,
        memo,
      },
    };

    // Build the signed tx object
    const txBodyBytes = this.registry.encode(txBodyEncodeObject);
    const gasLimit = Int53.fromString(fee.gas).toNumber();

    // Get everything that is needed to build the AuthInfoBytes
    const pubkey = encodePubkey(encodeSecp256k1Pubkey(signerAccount.pubkey));

    // Build the AuthInfoBytes
    const authInfoBytes = makeAuthInfoBytes(
      [{ pubkey, sequence }],
      fee.amount,
      gasLimit,
      SignMode.SIGN_MODE_DIRECT,
      feeGranter
    );

    // Build the SignDoc
    const signDoc = makeSignDoc(
      txBodyBytes,
      authInfoBytes,
      chainId,
      accountNumber
    );

    // Sign using direct
    const { signature, signed } = await this.txSigner.signDirect(
      signerAddress,
      signDoc
    );

    // Return the TxRaw instance
    return {
      signerData: { accountNumber, sequence, chainId },
      signDoc,
      txRaw: TxRaw.fromPartial({
        bodyBytes: signed.bodyBytes,
        authInfoBytes: signed.authInfoBytes,
        signatures: [fromBase64(signature.signature)],
      }),
    };
  }

  public async sendIbcTokens(
    senderAddress: string,
    recipientAddress: string,
    transferAmount: Coin,
    sourcePort: string,
    sourceChannel: string,
    timeoutHeight: Height | undefined,
    /** timeout in seconds */
    timeoutTimestamp: number | undefined,
    fee: StdFee | "auto" | number,
    memo = ""
  ): Promise<DeliverTxResponse> {
    const timeoutTimestampNanoseconds = timeoutTimestamp
      ? Long.fromNumber(timeoutTimestamp).multiply(1_000_000_000)
      : undefined;
    const transferMsg: MsgTransferEncodeObject = {
      typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
      value: MsgTransfer.fromPartial({
        sourcePort,
        sourceChannel,
        sender: senderAddress,
        receiver: recipientAddress,
        token: transferAmount,
        timeoutHeight,
        timeoutTimestamp: timeoutTimestampNanoseconds,
      }),
    };
    return this.signAndBroadcast(senderAddress, [transferMsg], fee, memo);
  }
}
