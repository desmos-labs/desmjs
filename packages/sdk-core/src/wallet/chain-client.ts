import {
    Account,
    accountFromAny,
    defaultRegistryTypes,
    SigningStargateClient,
    SigningStargateClientOptions
} from "@cosmjs/stargate";
import {Any} from "cosmjs-types/google/protobuf/any";
import {GeneratedType, OfflineSigner, Registry} from "@cosmjs/proto-signing";
import {Tendermint34Client} from "@cosmjs/tendermint-rpc";
import {
    MsgLinkApplication,
    MsgUnlinkApplication,
    MsgSaveProfile,
    MsgDeleteProfile,
    MsgRequestDTagTransfer,
    MsgCancelDTagTransferRequest,
    MsgAcceptDTagTransferRequest,
    MsgRefuseDTagTransferRequest,
    Profile
} from "@desmos-labs/proto";


const registryTypes: ReadonlyArray<[string, GeneratedType]> = [
    ...defaultRegistryTypes,
    ["/desmos.profiles.v1beta1.MsgLinkApplication", MsgLinkApplication],
    ["/desmos.profiles.v1beta1.MsgUnlinkApplication", MsgUnlinkApplication],
    ["/desmos.profiles.v1beta1.MsgSaveProfile", MsgSaveProfile],
    ["/desmos.profiles.v1beta1.MsgDeleteProfile", MsgDeleteProfile],
    ["/desmos.profiles.v1beta1.MsgRequestDTagTransfer", MsgRequestDTagTransfer],
    ["/desmos.profiles.v1beta1.MsgCancelDTagTransferRequest", MsgCancelDTagTransferRequest],
    ["/desmos.profiles.v1beta1.MsgAcceptDTagTransferRequest", MsgAcceptDTagTransferRequest],
    ["/desmos.profiles.v1beta1.MsgRefuseDTagTransferRequest", MsgRefuseDTagTransferRequest],
]

function desmosAccountFromAny(input: Any): Account {
    const {typeUrl, value} = input;

    switch (typeUrl) {
        case "/desmos.profiles.v1beta1.Profile":
            const profile = Profile.decode(value);
            if (profile.account === undefined) {
                throw new Error("Profile is null");
            }
            return accountFromAny(profile.account);

        default:
            return accountFromAny(input);
    }
}

/**
 * Custom Stargate client to override the getAccount function with our
 * custom account parsing logic.
 */
export class SigningDesmosClient extends SigningStargateClient {

    static async withSigner(
        endpoint: string,
        signer: OfflineSigner,
    ): Promise<SigningStargateClient> {
        const tmClient = await Tendermint34Client.connect(endpoint);
        const options: SigningStargateClientOptions = {
            registry: new Registry(registryTypes)
        }
        return new SigningDesmosClient(tmClient, signer, options);
    }

    /**
     * Gets the account associated to the provided address.
     * This function has been overridden to correctly parse the desmos account.
     */
    override async getAccount(searchAddress: string): Promise<Account | null> {
        try {
            const account = await this.forceGetQueryClient().auth.account(searchAddress);
            return account ? desmosAccountFromAny(account) : null;
        } catch (error) {
            if (/rpc error: code = NotFound/i.test(error)) {
                return null;
            }
            throw error;
        }
    }
}