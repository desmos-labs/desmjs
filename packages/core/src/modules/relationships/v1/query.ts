import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import {
  QueryBlocksResponse,
  QueryClientImpl,
  QueryRelationshipsResponse,
} from "@desmoslabs/desmjs-types/desmos/relationships/v1/query";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import Long from "long";

export interface RelationshipsV1Extension {
  readonly relationshipsV1: {
    /**
     * Queries the relationships for the user having the given
     * address.
     */
    readonly relationships: (
      subspaceId: Long,
      user?: string,
      counterparty?: string,
      pagination?: PageRequest
    ) => Promise<QueryRelationshipsResponse>;
    /**
     * Queries the user blocks for the user having the given address.
     */
    readonly blocks: (
      subspaceId: Long,
      blocker?: string,
      blocked?: string,
      pagination?: PageRequest
    ) => Promise<QueryBlocksResponse>;
  };
}

export function setupRelationshipsV1Extension(
  base: QueryClient
): RelationshipsV1Extension {
  const rpc = createProtobufRpcClient(base);
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    relationshipsV1: {
      relationships: async (
        subspaceId: Long,
        user?: string,
        counterparty?: string,
        pagination?: PageRequest
      ) =>
        queryService.Relationships({
          subspaceId,
          user: user || "",
          counterparty: counterparty || "",
          pagination,
        }),
      blocks: async (
        subspaceId: Long,
        blocker?: string,
        blocked?: string,
        pagination?: PageRequest
      ) =>
        queryService.Blocks({
          subspaceId,
          blocker: blocker || "",
          blocked: blocked || "",
          pagination,
        }),
    },
  };
}
