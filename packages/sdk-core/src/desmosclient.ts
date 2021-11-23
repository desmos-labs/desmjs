import {
    Account,
    accountFromAny,
    AminoTypes,
    assertIsBroadcastTxSuccess,
    AuthExtension,
    BankExtension,
    defaultRegistryTypes,
    QueryClient,
    setupAuthExtension,
    setupBankExtension,
    setupStakingExtension,
    SignerData,
    SigningStargateClient,
    StakingExtension,
    StdFee
} from "@cosmjs/stargate";
import {Any} from "cosmjs-types/google/protobuf/any";
import {
    DirectSignResponse,
    EncodeObject,
    encodePubkey,
    GeneratedType,
    isOfflineDirectSigner,
    makeSignDoc,
    OfflineDirectSigner,
    OfflineSigner,
    Registry,
    TxBodyEncodeObject
} from "@cosmjs/proto-signing";
import {Tendermint34Client} from "@cosmjs/tendermint-rpc";
import {DesmosProfile} from "./types";
import {
    MsgAcceptDTagTransferRequestEncodeObject,
    MsgCancelDTagTransferRequestEncodeObject,
    MsgDeleteProfileEncodeObject,
    MsgRefuseDTagTransferRequestEncodeObject,
    MsgRequestDTagTransferEncodeObject,
    MsgSaveProfileEncodeObject
} from "./encodeobjects";
import {MsgLinkApplication, MsgUnlinkApplication} from "@desmoslabs/proto/desmos/profiles/v1beta1/msgs_app_links";
import {MsgLinkChainAccount, MsgUnlinkChainAccount} from "@desmoslabs/proto/desmos/profiles/v1beta1/msgs_chain_links";
import {
    MsgAcceptDTagTransferRequest,
    MsgCancelDTagTransferRequest,
    MsgRefuseDTagTransferRequest,
    MsgRequestDTagTransfer
} from "@desmoslabs/proto/desmos/profiles/v1beta1/msgs_dtag_requests";
import {MsgDeleteProfile, MsgSaveProfile} from "@desmoslabs/proto/desmos/profiles/v1beta1/msgs_profile";
import {
    MsgBlockUser,
    MsgCreateRelationship,
    MsgDeleteRelationship,
    MsgUnblockUser
} from "@desmoslabs/proto/desmos/profiles/v1beta1/msgs_relationships";
import {Profile} from "@desmoslabs/proto/desmos/profiles/v1beta1/models_profile";
import {
    MsgAddPostReaction,
    MsgAnswerPoll,
    MsgCreatePost,
    MsgEditPost,
    MsgRegisterReaction,
    MsgRemovePostReaction,
    MsgReportPost,
} from "@desmoslabs/proto/desmos/posts/v1beta1/msgs"
import {
    MsgAddAdmin,
    MsgBanUser,
    MsgCreateSubspace,
    MsgEditSubspace,
    MsgRegisterUser,
    MsgRemoveAdmin,
    MsgUnbanUser,
    MsgUnregisterUser,
} from "@desmoslabs/proto/desmos/subspaces/v1beta1/msgs";
import {ProfilesExtension, setupProfilesExtension} from "./queries/profiles";
import {PostsExtension, setupPostsExtension} from "./queries/posts";
import {setupSubspacesExtension, SubspacesExtension} from "./queries/subspaces";
import {Pagination, paginationToPageRequest} from "./types/pagination";
import {QueryIncomingDTagTransferRequestsResponse} from "@desmoslabs/proto/desmos/profiles/v1beta1/query_dtag_requests";
import {desmosTypes} from "./aminotypes";
import {
    AccountData,
    AminoSignResponse,
    encodeSecp256k1Pubkey,
    makeSignDoc as makeSignDocAmino,
    OfflineAminoSigner,
    StdSignDoc
} from "@cosmjs/amino";
import {AuthInfo, SignDoc, SignerInfo, TxRaw} from "cosmjs-types/cosmos/tx/v1beta1/tx";
import {SignMode} from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";
import {fromBase64} from "@cosmjs/encoding";
import {Coin} from "cosmjs-types/cosmos/base/v1beta1/coin";
import Long from "long";
import {Int53} from "@cosmjs/math";


const registryTypes: ReadonlyArray<[string, GeneratedType]> = [
    ...defaultRegistryTypes,
    // Profiles module
    ["/desmos.profiles.v1beta1.MsgLinkApplication", MsgLinkApplication],
    ["/desmos.profiles.v1beta1.MsgUnlinkApplication", MsgUnlinkApplication],
    ["/desmos.profiles.v1beta1.MsgLinkChainAccount", MsgLinkChainAccount],
    ["/desmos.profiles.v1beta1.MsgUnlinkChainAccount", MsgUnlinkChainAccount],
    ["/desmos.profiles.v1beta1.MsgRequestDTagTransfer", MsgRequestDTagTransfer],
    ["/desmos.profiles.v1beta1.MsgCancelDTagTransferRequest", MsgCancelDTagTransferRequest],
    ["/desmos.profiles.v1beta1.MsgAcceptDTagTransferRequest", MsgAcceptDTagTransferRequest],
    ["/desmos.profiles.v1beta1.MsgRefuseDTagTransferRequest", MsgRefuseDTagTransferRequest],
    ["/desmos.profiles.v1beta1.MsgSaveProfile", MsgSaveProfile],
    ["/desmos.profiles.v1beta1.MsgDeleteProfile", MsgDeleteProfile],
    ["/desmos.profiles.v1beta1.MsgCreateRelationship", MsgCreateRelationship],
    ["/desmos.profiles.v1beta1.MsgDeleteRelationship", MsgDeleteRelationship],
    ["/desmos.profiles.v1beta1.MsgBlockUser", MsgBlockUser],
    ["/desmos.profiles.v1beta1.MsgUnblockUser", MsgUnblockUser],
    // Posts module
    ["/desmos.posts.v1beta1.MsgCreatePost", MsgCreatePost],
    ["/desmos.posts.v1beta1.MsgEditPost", MsgEditPost],
    ["/desmos.posts.v1beta1.MsgAddPostReaction", MsgAddPostReaction],
    ["/desmos.posts.v1beta1.MsgRemovePostReaction", MsgRemovePostReaction],
    ["/desmos.posts.v1beta1.MsgAnswerPoll", MsgAnswerPoll],
    ["/desmos.posts.v1beta1.MsgRegisterReaction", MsgRegisterReaction],
    ["/desmos.posts.v1beta1.MsgReportPost", MsgReportPost],
    // Subspaces module
    ["/desmos.subspaces.v1beta1.MsgCreateSubspace", MsgCreateSubspace],
    ["/desmos.subspaces.v1beta1.MsgEditSubspace", MsgEditSubspace],
    ["/desmos.subspaces.v1beta1.MsgAddAdmin", MsgAddAdmin],
    ["/desmos.subspaces.v1beta1.MsgRemoveAdmin", MsgRemoveAdmin],
    ["/desmos.subspaces.v1beta1.MsgRegisterUser", MsgRegisterUser],
    ["/desmos.subspaces.v1beta1.MsgUnregisterUser", MsgUnregisterUser],
    ["/desmos.subspaces.v1beta1.MsgBanUser", MsgBanUser],
    ["/desmos.subspaces.v1beta1.MsgUnbanUser", MsgUnbanUser],
]

function makeSignerInfos(
    signers: ReadonlyArray<{ readonly pubkey: Any; readonly sequence: number }>,
    signMode: SignMode,
): SignerInfo[] {
    return signers.map(
        ({ pubkey, sequence }): SignerInfo => ({
            publicKey: pubkey,
            modeInfo: {
                single: { mode: signMode },
            },
            sequence: Long.fromNumber(sequence),
        }),
    );
}

/**
 * Creates and serializes an AuthInfo document.
 *
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
 * Wrapper class to allows on the fly signer update.
 */
class SignerWrapper implements OfflineDirectSigner, OfflineAminoSigner {

    private signer: OfflineSigner | undefined;

    private readonly _throwError = (address: string, doc: SignDoc) => {
        throw new Error("Can't sign, the singer is undefined");
    }

    constructor(signer?: OfflineSigner) {
        this.signer = signer;
        this.patchMethods(signer);
    }

    /**
     * Function that patches this object so that cosmjs detects the correct signer type.
     * @param signer - The new signer.
     * @private
     */
    private patchMethods(signer: OfflineSigner | undefined) {
        const raw = this as any;
        if (signer === undefined) {
            raw["signAmino"] = this._throwError;
            raw["signDirect"] = this._throwError;
        }
        else if (isOfflineDirectSigner(signer)) {
            raw["signAmino"] = undefined;
            raw["signDirect"] = (this.signer as OfflineDirectSigner).signDirect.bind(this.signer);
        } else {
            raw["signAmino"] = (this.signer as OfflineAminoSigner).signAmino.bind(this.signer);
            raw["signDirect"] = undefined;
        }
    }

    signDirect(signerAddress: string, signDoc: SignDoc): Promise<DirectSignResponse> {
        throw new Error("Method not patched");
    }

    signAmino(signerAddress: string, signDoc: StdSignDoc): Promise<AminoSignResponse> {
        throw new Error("Method not patched");
    }

    updateSigner(signer: OfflineSigner | undefined) {
        this.signer = signer;
        this.patchMethods(signer);
    }

    async getAccounts(): Promise<readonly AccountData[]> {
        if (this.signer === undefined) {
            throw new Error("Can't sign, the singer is undefined");
        }

        return this.signer.getAccounts();
    };
}

export type DesmosQueryClient = QueryClient & AuthExtension & BankExtension & StakingExtension & ProfilesExtension
    & PostsExtension & SubspacesExtension;

export function desmosProfileFromAny({typeUrl, value}: Any): Profile {

    if (typeUrl !== "/desmos.profiles.v1beta1.Profile") {
        throw new Error("Can't parse desmos account from value with type: " + typeUrl);
    }

    return Profile.decode(value);
}

/**
 * Client to interact with the Desmos chain.
 */
export class DesmosClient extends SigningStargateClient {

    private readonly url: string
    private _tmClient: Tendermint34Client | undefined;
    private _queryClient: DesmosQueryClient | undefined;
    protected readonly signerWrapper: SignerWrapper;
    private _registry: Registry;
    private _aminoTypes: AminoTypes;

    protected constructor(url: string, signer: SignerWrapper = new SignerWrapper()) {
        const registry =  new Registry(registryTypes);
        const aminoTypes = new AminoTypes({
            additions: desmosTypes,
            prefix: "desmos"
        });
        super(undefined, signer, {
            registry,
            aminoTypes,
        });
        this.signerWrapper = signer;
        this.url = url;
        this._registry = registry;
        this._aminoTypes = aminoTypes;
    }

    static withoutSigner(url: string): DesmosClient {
        return new DesmosClient(url, new SignerWrapper());
    }

    static withSigner(url: string, signer: OfflineSigner): DesmosClient {
        return new DesmosClient(url, new SignerWrapper(signer));
    }

    async connect(): Promise<void> {
        if (this._tmClient === undefined) {
            this._tmClient = await Tendermint34Client.connect(this.url);
            this._queryClient = QueryClient.withExtensions(this._tmClient,
                setupAuthExtension,
                setupBankExtension,
                setupStakingExtension,
                setupProfilesExtension,
                setupPostsExtension,
                setupSubspacesExtension
            )
        }
    }

    override disconnect() {
        if (this._tmClient !== undefined) {
            this._tmClient.disconnect();
            this._queryClient = undefined;
        }
    }

    /**
     * Updates the signer used to sign the transaction.
     * @param signer - The new signer that will be used.
     */
    setSigner(signer: OfflineSigner | undefined) {
        this.signerWrapper.updateSigner(signer)
    }

    /**
     * Gets the addresses from the signer.
     */
    async getSignerAddresses(): Promise<string []> {
        const accounts = await this.signerWrapper.getAccounts();
        return accounts.map(a => a.address);
    }

    /**
     * Gets the account associated to the provided address.
     * This function has been overridden to correctly parse the desmos account.
     */
    override async getAccount(searchAddress: string): Promise<Account | null> {
        try {
            const account = await this.forceGetQueryClient().auth.account(searchAddress);
            if (account === null) {
                return null;
            }
            if (account.typeUrl.indexOf("desmos") >= 0) {
                const profile = desmosProfileFromAny(account);
                return profile.account ? accountFromAny(profile.account) : null;
            } else {
                return accountFromAny(account);
            }
        } catch (error) {
            if (/rpc error: code = NotFound/i.test(error)) {
                return null;
            }
            throw error;
        }
    }

    /**
     * Gets the tendermint client to interact with the chain.
     * This method has been overrun to provide our client
     * to the parent class.
     * @protected
     */
    protected override forceGetTmClient(): Tendermint34Client {
        if (this._tmClient === undefined) {
            throw new Error("DesmoClient Not connected");
        }

        return this._tmClient;
    }

    /**
     * Gets the gRPC client to interact with the chain.
     * This method has been overrun to provide our client
     * to the parent class.
     * @protected
     */
    protected override forceGetQueryClient(): DesmosQueryClient {
        if (this._queryClient === undefined) {
            throw new Error("DesmoClient Not connected");
        }

        return this._queryClient;
    }

    /**
     * Save a new profile or edit an existent one.
     * @param creator - Address of the user that is editing the profile.
     * @param profile - User profile informations.
     * @param fee - Fee to perform the transaction.
     */
    async saveProfile(creator: string, profile: Partial<Omit<DesmosProfile, "address">>, fee: StdFee): Promise<void> {
        const saveProfile: MsgSaveProfileEncodeObject = {
            typeUrl: "/desmos.profiles.v1beta1.MsgSaveProfile",
            value: {
                dtag: profile.dtag,
                nickname: profile.nickname,
                bio: profile.bio,
                profilePicture: profile.profilePicture,
                coverPicture: profile.coverPicture,
                creator,
            }
        }

        const txResponse = await this.signAndBroadcast(creator, [saveProfile], fee);
        assertIsBroadcastTxSuccess(txResponse);
    }

    /**
     * Retrieve the details of a single profile having its DTag or address.
     * @param user - The user DTag or address.
     */
    async getProfile(user: string): Promise<DesmosProfile | null> {
        const rawProfile = await this.forceGetQueryClient().profiles.profile(user);
        if (rawProfile === null) {
            return null;
        }

        const desmosProfile = desmosProfileFromAny(rawProfile);
        if (desmosProfile.account === undefined) {
            return null;
        }

        const cosmosAccount = accountFromAny(desmosProfile.account);

        return {
            address: cosmosAccount.address,
            dtag: desmosProfile.dtag,
            nickname: desmosProfile.nickname,
            bio: desmosProfile.bio,
            profilePicture: desmosProfile.pictures?.profile,
            coverPicture: desmosProfile.pictures?.cover,
        }
    }

    /**
     * Deletes a previously created profile
     * @param creator - Address of the user that is deleting the profile.
     * @param fee - Fee to perform the transaction.
     */
    async deleteProfile(creator: string, fee: StdFee): Promise<void> {
        const msg: MsgDeleteProfileEncodeObject = {
            typeUrl: "/desmos.profiles.v1beta1.MsgDeleteProfile",
            value: {
                creator
            }
        }

        await this.signAndBroadcast(creator, [msg], fee)
            .then(assertIsBroadcastTxSuccess);
    }

    /**
     * Allows to request a transfer to your profile for a DTag owned by another user.
     * @param sender - Address of the user that request the DTag.
     * @param receiver - Address of the user that is the owner of the requested DTag.
     * @param fee - Fee to perform the transaction.
     */
    async requestDtagTransfer(sender: string, receiver: string, fee: StdFee): Promise<void> {
        const msg: MsgRequestDTagTransferEncodeObject = {
            typeUrl: "/desmos.profiles.v1beta1.MsgRequestDTagTransfer",
            value: {
                sender,
                receiver
            }
        }

        await this.signAndBroadcast(sender, [msg], fee).then(assertIsBroadcastTxSuccess);
    }

    /**
     * Queries all the DTag transfers requests that have been made towards the user with the given address.
     * @param address - Address of the user of interest.
     * @param pagination - Pagination informations.
     */
    async queryDtagTransferRequests(address: string, pagination?: Pagination): Promise<QueryIncomingDTagTransferRequestsResponse> {
        return this.forceGetQueryClient().profiles.incomingDTagTransferRequests(address, paginationToPageRequest(pagination));
    }

    /**
     * Accept a DTag transfer request.
     * @param newDtag - The new DTag that receives who is accepting the request.
     * @param receiver - Address of the user that is the owner of the requested DTag.
     * @param sender - Address of the user that will receive the DTag.
     * @param fee - Fee to perform the transaction.
     */
    async acceptDtagTransferRequest(newDtag: string, receiver: string, sender: string, fee: StdFee): Promise<void> {
        const msg: MsgAcceptDTagTransferRequestEncodeObject = {
            typeUrl: "/desmos.profiles.v1beta1.MsgAcceptDTagTransferRequest",
            value: {
                newDtag,
                sender,
                receiver
            }
        }

        await this.signAndBroadcast(receiver, [msg], fee).then(assertIsBroadcastTxSuccess);
    }

    /**
     * Refuse a DTag transfer request made by a user.
     * @param receiver - Address of the user that is the owner of the requested DTag.
     * @param sender - Address of the user that request the DTag.
     * @param fee - Fee to perform the transaction.
     */
    async refuseDtagTransferRequest(receiver: string, sender: string, fee: StdFee): Promise<void> {
        const msg: MsgRefuseDTagTransferRequestEncodeObject = {
            typeUrl: "/desmos.profiles.v1beta1.MsgRefuseDTagTransferRequest",
            value: {
                sender,
                receiver
            }
        }

        await this.signAndBroadcast(receiver, [msg], fee).then(assertIsBroadcastTxSuccess);
    }

    /**
     * Cancel a DTag transfer request made by yourself.
     * @param sender - Address of the user that request the DTag.
     * @param receiver - Address of the user that is the owner of the requested DTag.
     * @param fee - Fee to perform the transaction.
     */
    async cancelDtagTransferRequest(sender: string, receiver: string, fee: StdFee): Promise<void> {
        const msg: MsgCancelDTagTransferRequestEncodeObject = {
            typeUrl: "/desmos.profiles.v1beta1.MsgCancelDTagTransferRequest",
            value: {
                sender,
                receiver
            }
        }

        await this.signAndBroadcast(sender, [msg], fee).then(assertIsBroadcastTxSuccess);
    }

    /**
     * Gets account number and sequence from the API, creates a sign doc,
     * creates a single signature and assembles the signed transaction.
     *
     * The sign mode (SIGN_MODE_DIRECT or SIGN_MODE_LEGACY_AMINO_JSON) is determined by this client's signer.
     *
     * You can pass signer data (account number, sequence and chain ID) explicitly instead of querying them
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
        let signerData: SignerData;
        if (explicitSignerData) {
            signerData = explicitSignerData;
        } else {
            const { accountNumber, sequence } = await this.getSequence(signerAddress);
            const chainId = await this.getChainId();
            signerData = {
                accountNumber: accountNumber,
                sequence: sequence,
                chainId: chainId,
            };
        }

        return isOfflineDirectSigner(this.signerWrapper)
            ? this._signDirect(signerAddress, messages, fee, memo, signerData, feeGranter)
            : this._signAmino(signerAddress, messages, fee, memo, signerData, feeGranter);
    }

    private async _signAmino(
        signerAddress: string,
        messages: readonly EncodeObject[],
        fee: StdFee,
        memo: string,
        { accountNumber, sequence, chainId }: SignerData,
        feeGranter?: string,
    ): Promise<TxRaw> {
        const accountFromSigner = (await this.signerWrapper.getAccounts()).find(
            (account) => account.address === signerAddress,
        );
        if (!accountFromSigner) {
            throw new Error("Failed to retrieve account from signer");
        }
        const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));
        const signMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
        const msgs = messages.map((msg) => this._aminoTypes.toAmino(msg));
        const signDoc = makeSignDocAmino(msgs, fee, chainId, memo, accountNumber, sequence);
        const { signature, signed } = await this.signerWrapper.signAmino(signerAddress, signDoc);
        const signedTxBody = {
            messages: signed.msgs.map((msg) => this._aminoTypes.fromAmino(msg)),
            memo: signed.memo,
        };
        const signedTxBodyEncodeObject: TxBodyEncodeObject = {
            typeUrl: "/cosmos.tx.v1beta1.TxBody",
            value: signedTxBody,
        };
        const signedTxBodyBytes = this._registry.encode(signedTxBodyEncodeObject);
        const signedGasLimit = Int53.fromString(signed.fee.gas).toNumber();
        const signedSequence = Int53.fromString(signed.sequence).toNumber();
        const signedAuthInfoBytes = makeAuthInfoBytes(
            [{ pubkey, sequence: signedSequence }],
            signed.fee.amount,
            signedGasLimit,
            signMode,
            feeGranter
        );
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
        { accountNumber, sequence, chainId }: SignerData,
        feeGranter?: string,
    ): Promise<TxRaw> {
        const accountFromSigner = (await this.signerWrapper.getAccounts()).find(
            (account) => account.address === signerAddress,
        );
        if (!accountFromSigner) {
            throw new Error("Failed to retrieve account from signer");
        }
        const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));
        const txBodyEncodeObject: TxBodyEncodeObject = {
            typeUrl: "/cosmos.tx.v1beta1.TxBody",
            value: {
                messages: messages,
                memo: memo,
            },
        };
        const txBodyBytes = this._registry.encode(txBodyEncodeObject);
        const gasLimit = Int53.fromString(fee.gas).toNumber();
        const authInfoBytes = makeAuthInfoBytes(
            [{ pubkey, sequence }],
            fee.amount,
            gasLimit,
            SignMode.SIGN_MODE_DIRECT,
            feeGranter
        );
        const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber);
        const { signature, signed } = await this.signerWrapper.signDirect(signerAddress, signDoc);
        return TxRaw.fromPartial({
            bodyBytes: signed.bodyBytes,
            authInfoBytes: signed.authInfoBytes,
            signatures: [fromBase64(signature.signature)],
        });
    }
}