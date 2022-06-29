import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import {
  QuerySubspaceResponse,
  QuerySubspacesResponse,
  QueryUserGroupMembersResponse,
  QueryUserGroupResponse,
  QueryUserGroupsResponse,
  QueryClientImpl,
  QueryUserPermissionsResponse,
} from "@desmoslabs/desmjs-types/desmos/subspaces/v2/query";
import Long from "long";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

export interface SubspacesExtension {
  readonly subspaces: {
    /**
     * Queries all the subspaces inside Desmos
     */
    readonly subspaces: (
      pagination?: PageRequest
    ) => Promise<QuerySubspacesResponse>;

    /**
     * Queries all the information about the subspace with the given id
     */
    readonly subspace: (id: Long) => Promise<QuerySubspaceResponse>;

    /**
     * Queries all the groups that are present inside the subspace with the given id
     */
    readonly userGroups: (
      subspaceId: Long,
      sectionId: number,
      pagination?: PageRequest
    ) => Promise<QueryUserGroupsResponse>;

    /**
     * Queries the user group having the given id inside the specific subspace
     */
    readonly userGroup: (
      subspaceId: Long,
      groupId: number
    ) => Promise<QueryUserGroupResponse>;

    /**
     * Queries all the members of a given user group
     */
    readonly userGroupMembers: (
      subspaceId: Long,
      groupId: number,
      pagination?: PageRequest
    ) => Promise<QueryUserGroupMembersResponse>;

    /**
     * Queries the permissions for the given user
     */
    readonly userPermissions: (
      subspaceId: Long,
      sectionId: number,
      user: string
    ) => Promise<QueryUserPermissionsResponse>;
  };
}

export function setupSubspacesExtension(base: QueryClient): SubspacesExtension {
  const rpc = createProtobufRpcClient(base);
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    subspaces: {
      subspaces: async (pagination?: PageRequest) => {
        return queryService.Subspaces({
          pagination,
        });
      },
      subspace: async (id: Long) => {
        return queryService.Subspace({
          subspaceId: id,
        });
      },
      userGroups: async (
        subspaceId: Long,
        sectionId: number,
        pagination?: PageRequest
      ) => {
        return queryService.UserGroups({
          subspaceId,
          sectionId,
          pagination,
        });
      },
      userGroup: async (subspaceId: Long, groupId: number) => {
        return queryService.UserGroup({
          subspaceId,
          groupId,
        });
      },
      userGroupMembers: async (
        subspaceId: Long,
        groupId: number,
        pagination?: PageRequest
      ) => {
        return queryService.UserGroupMembers({
          subspaceId,
          groupId,
          pagination,
        });
      },
      userPermissions: async (
        subspaceId: Long,
        sectionId: number,
        user: string
      ) => {
        return queryService.UserPermissions({
          subspaceId,
          sectionId,
          user,
        });
      },
    },
  };
}
