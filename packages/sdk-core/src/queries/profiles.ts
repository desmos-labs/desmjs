import {Any} from "cosmjs-types/google/protobuf/any";
import {createProtobufRpcClient, QueryClient} from "@cosmjs/stargate";
import {PageRequest} from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import {QueryIncomingDTagTransferRequestsResponse} from "@desmos-labs/proto/desmos/profiles/v1beta1/query_dtag_requests";
import {QueryBlocksResponse} from "@desmos-labs/proto/desmos/profiles/v1beta1/query_relationships";
import {QueryRelationshipsResponse} from "@desmos-labs/proto/desmos/profiles/v1beta1/query_relationships";
import {QueryChainLinksResponse} from "@desmos-labs/proto/desmos/profiles/v1beta1/query_chain_links";
import {QueryUserChainLinkResponse} from "@desmos-labs/proto/desmos/profiles/v1beta1/query_chain_links";
import {QueryApplicationLinksResponse} from "@desmos-labs/proto/desmos/profiles/v1beta1/query_app_links";
import {QueryUserApplicationLinkResponse} from "@desmos-labs/proto/desmos/profiles/v1beta1/query_app_links";
import {QueryApplicationLinkByClientIDResponse} from "@desmos-labs/proto/desmos/profiles/v1beta1/query_app_links";
import {QueryClientImpl} from "@desmos-labs/proto/desmos/profiles/v1beta1/query";


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
         * Queries all relationships for the given user, if provided.
         * Otherwise, it queries all the relationships stored.
         */
        readonly relationships: (subspaceId: string, user?: string, pagination?: PageRequest) => Promise<QueryRelationshipsResponse>,
        /**
         * Queries the blocks for the given user, if provided.
         * Otherwise, it queries all the stored blocks.
         */
        readonly blocks: (subspaceId: string, user?: string, pagination?: PageRequest) => Promise<QueryBlocksResponse>,
        /**
         * Queries the chain links associated to the given user, if provided.
         * Otherwise it queries all the chain links stored.
         */
        readonly chainLinks: (user?: string, pagination?: PageRequest) => Promise<QueryChainLinksResponse>,
        /**
         * Queries the chain link for the given user, chain name and
         * target address
         */
        readonly userChainLink: (user: string, chainName: string, target: string) => Promise<QueryUserChainLinkResponse>,
        /**
         * Queries the applications links associated to the given user, if provided.
         * Otherwise, it queries all the application links stored.
         */
        readonly applicationLinks: (user?: string, pagination?: PageRequest) => Promise<QueryApplicationLinksResponse>,
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
            relationships: async (subspaceId: string, user?: string, pagination?: PageRequest) => {
                return queryService.Relationships({
                    user: user ?? "",
                    subspaceId,
                    pagination
                });
            },
            blocks: async (subspaceId: string, user?: string, pagination?: PageRequest) => {
                return queryService.Blocks({
                    user: user ?? "",
                    subspaceId,
                    pagination
                });
            },
            chainLinks: async (user?: string, pagination?: PageRequest) => {
                return queryService.ChainLinks({
                    user: user ?? "",
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
            applicationLinks: async (user?: string, pagination?: PageRequest) => {
                return queryService.ApplicationLinks({
                    user: user ?? "",
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
