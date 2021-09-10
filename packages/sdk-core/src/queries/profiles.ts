import {Any} from "cosmjs-types/google/protobuf/any";
import {createProtobufRpcClient, QueryClient} from "@cosmjs/stargate";
import {PageRequest} from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import {QueryIncomingDTagTransferRequestsResponse} from "@desmoslabs/proto/desmos/profiles/v1beta1/query_dtag_requests";
import {QueryUserBlocksResponse} from "@desmoslabs/proto/desmos/profiles/v1beta1/query_relationships";
import {QueryUserRelationshipsResponse} from "@desmoslabs/proto/desmos/profiles/v1beta1/query_relationships";
import {QueryUserChainLinksResponse} from "@desmoslabs/proto/desmos/profiles/v1beta1/query_chain_links";
import {QueryUserChainLinkResponse} from "@desmoslabs/proto/desmos/profiles/v1beta1/query_chain_links";
import {QueryUserApplicationLinksResponse} from "@desmoslabs/proto/desmos/profiles/v1beta1/query_app_links";
import {QueryUserApplicationLinkResponse} from "@desmoslabs/proto/desmos/profiles/v1beta1/query_app_links";
import {QueryApplicationLinkByClientIDResponse} from "@desmoslabs/proto/desmos/profiles/v1beta1/query_app_links";
import {QueryClientImpl} from "@desmoslabs/proto/desmos/profiles/v1beta1/query";


export interface ProfilesExtension {
    readonly profiles: {
        /**
         * Queries the profile of a specific user given their DTag or address.
         * If the queried user does not have a profile, the returned response will
         * contain a null profile.
         */
        readonly profile: (user: string) => Promise<Any | null>;
        /**
         * Queries all the DTag transfers requests that have been made towards the user with the given address.
         */
        readonly incomingDTagTransferRequests: (address: string, pagination?: PageRequest) => Promise<QueryIncomingDTagTransferRequestsResponse>,
        /**
         * Queries the relationships for the user having the given
         * address.
         */
        readonly userRelationships: (subspaceId: string, user: string, pagination?: PageRequest) => Promise<QueryUserRelationshipsResponse>,
        /**
         * Queries the user blocks for the user having the given address.
         */
        readonly userBlocks: (subspaceId: string, user: string, pagination?: PageRequest) => Promise<QueryUserBlocksResponse>,
        /**
         * Queries chain links for the given user.
         */
        readonly userChainLinks: (user: string, pagination?: PageRequest) => Promise<QueryUserChainLinksResponse>,
        /**
         * Queries the chain link for the given user, chain name and
         * target address
         */
        readonly userChainLink: (user: string, chainName: string, target: string) => Promise<QueryUserChainLinkResponse>,
        /**
         * Queries a single application link for a given user,
         * searching via the application name and username.
         */
        readonly userApplicationLinks: (user: string, pagination?: PageRequest) => Promise<QueryUserApplicationLinksResponse>,
        /**
         * Queries a single application link for a given user,
         * searching via the application name and username
         */
        readonly userApplicationLink: (user: string, application: string, username: string) => Promise<QueryUserApplicationLinkResponse>,
        /**
         * Queries a single application link for a given
         * client id.
         */
        readonly applicationLinkByClientID: (clientId: string) => Promise<QueryApplicationLinkByClientIDResponse>,
    };
}

export function setupProfilesExtension(base: QueryClient): ProfilesExtension {
    const rpc = createProtobufRpcClient(base);
    // Use this service to get easy typed access to query methods
    // This cannot be used for proof verification
    const queryService = new QueryClientImpl(rpc);

    return {
        profiles: {
            profile: async (user: string) => {
                const { profile } = await queryService.Profile({ user });
                return profile ?? null;
            },
            incomingDTagTransferRequests: async (receiver: string, pagination?: PageRequest) => {
                return queryService.IncomingDTagTransferRequests({receiver, pagination})
            },
            userRelationships: async (subspaceId: string, user: string, pagination?: PageRequest) => {
                return queryService.UserRelationships({
                    user,
                    subspaceId,
                    pagination
                });
            },
            userBlocks: async (subspaceId: string, user: string, pagination?: PageRequest) => {
                return queryService.UserBlocks({
                    user: user,
                    subspaceId,
                    pagination
                });
            },
            userChainLinks: async (user: string, pagination?: PageRequest) => {
                return queryService.UserChainLinks({
                    user,
                    pagination
                });
            },
            userChainLink: async (user: string, chainName: string, target: string) => {
                return queryService.UserChainLink({
                    user,
                    chainName,
                    target
                });
            },
            userApplicationLinks: async (user: string, pagination?: PageRequest) => {
                return queryService.UserApplicationLinks({
                    user,
                    pagination
                });
            },
            userApplicationLink: async (user: string, application: string, username: string) => {
                return queryService.UserApplicationLink({
                    user,
                    application,
                    username
                });
            },
            applicationLinkByClientID: async (clientId: string) => {
                return queryService.ApplicationLinkByClientID({
                    clientId
                });
            },
        },
    };
}
