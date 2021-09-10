import {createProtobufRpcClient, QueryClient} from "@cosmjs/stargate";
import {PageRequest} from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import {
    QueryClientImpl,
    QueryAdminsResponse,
    QueryBannedUsersResponse,
    QueryRegisteredUsersResponse,
    QuerySubspaceResponse,
    QuerySubspacesResponse
} from "@desmoslabs/proto/desmos/subspaces/v1beta1/query";

export interface SubspacesExtension {
    readonly subspaces: {
        /**
         * Queries all the information about the subspace with the given id.
         */
        readonly subspace: (subspaceId: string) => Promise<QuerySubspaceResponse>,
        /**
         * Queries all the admins of the subspace having the given id.
         */
        readonly admins: (subspaceId: string, pagination?: PageRequest) => Promise<QueryAdminsResponse>,
        /**
         * Queries all the registered users of the subspace having the given id.
         */
        readonly registeredUsers: (subspaceId: string, pagination?: PageRequest) => Promise<QueryRegisteredUsersResponse>,
        /**
         * Queries all the banned users of the subspace having the given id.
         */
        readonly bannedUsers: (subspaceId: string, pagination?: PageRequest) => Promise<QueryBannedUsersResponse>,
        /**
         * Queries all the subspaces inside Desmos.
         */
        readonly subspaces: (pagination?: PageRequest) => Promise<QuerySubspacesResponse>,
    };
}

export function setupSubspacesExtension(base: QueryClient): SubspacesExtension {
    const rpc = createProtobufRpcClient(base);
    // Use this service to get easy typed access to query methods
    // This cannot be used for proof verification
    const queryService = new QueryClientImpl(rpc);

    return {
        subspaces: {
            subspace: async (subspaceId: string) => {
                return queryService.Subspace({
                    subspaceId
                })
            },
            admins: async (subspaceId: string, pagination?: PageRequest) => {
                return queryService.Admins({
                    subspaceId,
                    pagination
                })
            },
            registeredUsers: async (subspaceId: string, pagination?: PageRequest) => {
                return queryService.RegisteredUsers({
                    subspaceId,
                    pagination
                })
            },
            bannedUsers: async (subspaceId: string, pagination?: PageRequest) => {
                return queryService.BannedUsers({
                    subspaceId,
                    pagination
                })
            },
            subspaces: async (pagination?: PageRequest) => {
                return queryService.Subspaces({
                    pagination
                })
            },
        }
    };
}
