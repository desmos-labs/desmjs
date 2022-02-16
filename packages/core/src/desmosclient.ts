import {
  Account,
  AminoTypes,
  QueryClient,
  setupAuthExtension,
  setupBankExtension,
  setupStakingExtension,
  setupTxExtension,
  SignerData,
  SigningStargateClient,
  StdFee,
} from "@cosmjs/stargate";
import {Any} from "cosmjs-types/google/protobuf/any";
import {
  EncodeObject,
  encodePubkey,
  makeSignDoc,
  Registry,
  TxBodyEncodeObject
} from "@cosmjs/proto-signing";
import {Tendermint34Client} from "@cosmjs/tendermint-rpc";
import {profilesTypes} from "src/aminomessages/profiles/converter";
import {encodeSecp256k1Pubkey, makeSignDoc as makeSignDocAmino} from "@cosmjs/amino";
import {AuthInfo, SignerInfo, TxRaw} from "cosmjs-types/cosmos/tx/v1beta1/tx";
import {SignMode} from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";
import {fromBase64} from "@cosmjs/encoding";
import {Coin} from "cosmjs-types/cosmos/base/v1beta1/coin";
import Long from "long";
import {Int53} from "@cosmjs/math";
import {Signer, SigningMode} from "src/signers";
import {NoOpSigner} from "src/signers/noop";
import {setupAuthzExtension} from "src/queries/authz";
import {DesmosQueryClient, profileFromAny, setupProfilesExtension} from "src/queries";
import {registryTypes} from "src/registry";
import {desmosTypes} from "src/aminomessages";


function makeSignerInfos(
  signers: ReadonlyArray<{ readonly pubkey: Any; readonly sequence: number }>,
  signMode: SignMode,
): SignerInfo[] {
  return signers.map(
    ({pubkey, sequence}): SignerInfo => ({
      publicKey: pubkey,
      modeInfo: {
        single: {mode: signMode},
      },
      sequence: Long.fromNumber(sequence),
    }),
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
  return AuthInfo.encode(AuthInfo.fromPartial({
    signerInfos: makeSignerInfos(signers, signMode),
    fee: {
      amount: [...feeAmount],
      gasLimit: Long.fromNumber(gasLimit),
      granter
    },
  })).finish();
}

/**
 * Client to interact with the Desmos chain.
 */
export class DesmosClient extends SigningStargateClient {
  private _signer: Signer;
  private _registry: Registry;
  private _aminoTypes: AminoTypes;

  public static override async connect(endpoint: string): Promise<DesmosClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new DesmosClient(tmClient);
  }

  public static async withSigner(endpoint: string, signer: Signer): Promise<DesmosClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new DesmosClient(tmClient, signer);
  }

  protected constructor(client: Tendermint34Client, signer: Signer = new NoOpSigner()) {
    const registry = new Registry(registryTypes);
    const aminoTypes = new AminoTypes({
      additions: desmosTypes,
      prefix: "desmos"
    });

    super(undefined, signer, {
      registry,
      aminoTypes,
    });

    this._signer = signer;
    this._registry = registry;
    this._aminoTypes = aminoTypes;
  }

  /**
   * Updates the signer used to sign the transaction.
   * @param signer - The new signer that will be used.
   */
  setSigner(signer: Signer) {
    this._signer = signer
  }

  /**
   * Gets the account associated to the provided address, or `null` if no account is found.
   * This function has been overridden to correctly parse a Desmos profile.
   */
  override async getAccount(searchAddress: string): Promise<Account | null> {
    const account = await this.forceGetQueryClient().auth.account(searchAddress);
    if (!account) {
      return null;
    }

    return profileFromAny(account)
  }

  protected override getQueryClient(): (DesmosQueryClient) | undefined {
    const client = super.getTmClient();
    return client ? QueryClient.withExtensions(
      client,
      setupAuthzExtension,
      setupAuthExtension,
      setupBankExtension,
      setupStakingExtension,
      setupTxExtension,
      setupProfilesExtension,
    ) : undefined;
  }

  protected override forceGetQueryClient(): (DesmosQueryClient) {
    const client = this.getQueryClient();
    if (!client) {
      throw new Error("Query client not available. You cannot use online functionality in offline mode.");
    }

    return client;
  }

  /**
   * Returns the SignerData for the user having the given address, querying them from the chain.
   */
  private async getSignerData(signerAddress: string): Promise<SignerData> {
    const {accountNumber, sequence} = await this.getSequence(signerAddress);
    const chainId = await this.getChainId();
    return {
      accountNumber: accountNumber,
      sequence: sequence,
      chainId: chainId,
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
  public override async sign(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    explicitSignerData?: SignerData,
    feeGranter?: string,
  ): Promise<TxRaw> {
    // Build the signer data
    const signerData = explicitSignerData ?? await this.getSignerData(signerAddress);

    // Sign the data using the proper mode
    return this._signer.signingMode == SigningMode.DIRECT
      ? this._signDirect(signerAddress, messages, fee, memo, signerData, feeGranter)
      : this._signAmino(signerAddress, messages, fee, memo, signerData, feeGranter);
  }

  private async _signAmino(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    {accountNumber, sequence, chainId}: SignerData,
    feeGranter?: string,
  ): Promise<TxRaw> {
    // Get the account
    const accounts = await this._signer.getAccounts();
    const accountFromSigner = accounts.find((account) => account.address === signerAddress);
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }

    // Build the SignDoc
    const msgs = messages.map((msg) => this._aminoTypes.toAmino(msg));
    const signDoc = makeSignDocAmino(msgs, fee, chainId, memo, accountNumber, sequence);

    // Sign the data using Amino
    const {signature, signed} = await this._signer.signAmino(signerAddress, signDoc);

    // Build the signed tx object
    const signedTxBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: {
        messages: signed.msgs.map((msg) => this._aminoTypes.fromAmino(msg)),
        memo: signed.memo,
      },
    };

    // Get everything that is needed to build the AuthInfoBytes
    const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));
    const signedGasLimit = Int53.fromString(signed.fee.gas).toNumber();
    const signedSequence = Int53.fromString(signed.sequence).toNumber();
    const signedTxBodyBytes = this._registry.encode(signedTxBodyEncodeObject);

    // Build the AuthInfoBytes
    const signedAuthInfoBytes = makeAuthInfoBytes(
      [{
        pubkey: pubkey,
        sequence: signedSequence,
      }],
      signed.fee.amount,
      signedGasLimit,
      SignMode.SIGN_MODE_LEGACY_AMINO_JSON,
      feeGranter
    );

    // Return the TxRaw instance
    return TxRaw.fromPartial({
      bodyBytes: signedTxBodyBytes,
      authInfoBytes: signedAuthInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
  }

  private async _signDirect(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    {accountNumber, sequence, chainId}: SignerData,
    feeGranter?: string,
  ): Promise<TxRaw> {
    // Get the account
    const accounts = await this._signer.getAccounts();
    const accountFromSigner = accounts.find((account) => account.address === signerAddress);
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }

    // Build the tx object to be signed
    const txBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: {
        messages: messages,
        memo: memo,
      },
    };

    // Build the signed tx object
    const txBodyBytes = this._registry.encode(txBodyEncodeObject);
    const gasLimit = Int53.fromString(fee.gas).toNumber();

    // Get everything that is needed to build the AuthInfoBytes
    const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));

    // Build the AuthInfoBytes
    const authInfoBytes = makeAuthInfoBytes(
      [{pubkey, sequence}],
      fee.amount,
      gasLimit,
      SignMode.SIGN_MODE_DIRECT,
      feeGranter
    );

    // Build the SignDoc
    const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber);

    // Sign using direct
    const {signature, signed} = await this._signer.signDirect(signerAddress, signDoc);

    // Return the TxRaw instance
    return TxRaw.fromPartial({
      bodyBytes: signed.bodyBytes,
      authInfoBytes: signed.authInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
  }
}