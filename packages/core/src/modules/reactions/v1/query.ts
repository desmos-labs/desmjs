import { Long } from "long";
import {
  QueryClientImpl,
  QueryReactionsResponse,
  QueryRegisteredReactionsResponse,
} from "@desmoslabs/desmjs-types/desmos/reactions/v1/query";
import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import {
  Reaction,
  RegisteredReaction,
  SubspaceReactionsParams,
} from "@desmoslabs/desmjs-types/desmos/reactions/v1/models";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { assertDefinedAndNotNull } from "@cosmjs/utils";

export interface ReactionsExtension {
  reactionsV1: {
    /**
     * Queries the reactions for the given post.
     */
    readonly reactions: (
      subspaceId: Long,
      postId: Long,
      user?: string,
      pagination?: PageRequest
    ) => Promise<QueryReactionsResponse>;

    /**
     * Queries the reaction for the given post having the provided id.
     */
    readonly reaction: (
      subspaceId: Long,
      postId: Long,
      reactionId: number
    ) => Promise<Reaction | undefined>;

    /**
     * Queries the registered reactions for the given subspace.
     */
    readonly registeredReactions: (
      subspaceId: Long,
      pagination?: PageRequest
    ) => Promise<QueryRegisteredReactionsResponse>;

    /**
     * Queries the registered reaction with the provided id from the given subspace.
     */
    readonly registeredReaction: (
      subspaceId: Long,
      reactionId: number
    ) => Promise<RegisteredReaction | undefined>;

    /**
     * Queries the reaction params for the given subspace.
     */
    readonly reactionsParams: (
      subspaceId: Long
    ) => Promise<SubspaceReactionsParams>;
  };
}

export function setupReactionsExtension(base: QueryClient): ReactionsExtension {
  const rpc = createProtobufRpcClient(base);
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    reactionsV1: {
      reactions: async (
        subspaceId: Long,
        postId: Long,
        user?: string,
        pagination?: PageRequest
      ) =>
        queryService.Reactions({
          subspaceId,
          postId,
          user: user || "",
          pagination,
        }),
      reaction: async (subspaceId: Long, postId: Long, reactionId: number) => {
        try {
          const res = await queryService.Reaction({
            subspaceId,
            postId,
            reactionId,
          });
          return res.reaction;
        } catch (error) {
          return undefined;
        }
      },
      registeredReactions: async (subspaceId: Long, pagination?: PageRequest) =>
        queryService.RegisteredReactions({
          subspaceId,
          pagination,
        }),
      registeredReaction: async (subspaceId: Long, reactionId: number) => {
        try {
          const res = await queryService.RegisteredReaction({
            subspaceId,
            reactionId,
          });
          return res.registeredReaction;
        } catch (error) {
          return undefined;
        }
      },
      reactionsParams: async (subspaceId: Long) => {
        const res = await queryService.ReactionsParams({
          subspaceId,
        });
        assertDefinedAndNotNull(res.params, "params not defined");
        return res.params;
      },
    },
  };
}

export default setupReactionsExtension;
