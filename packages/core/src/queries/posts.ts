import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { Long } from "long";
import {
  QueryPollAnswersResponse,
  QueryPostAttachmentsResponse,
  QuerySectionPostsResponse,
  QuerySubspacePostsResponse,
  QueryClientImpl,
} from "@desmoslabs/desmjs-types/desmos/posts/v2/query";
import { Params, Post } from "@desmoslabs/desmjs-types/desmos/posts/v2/models";
import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";
import { assertDefinedAndNotNull } from "@cosmjs/utils";

export interface PostsExtension {
  readonly posts: {
    /**
     * Queries the posts for the given subspace.
     */
    readonly subspacePosts: (
      subspaceId: Long,
      pagination?: PageRequest
    ) => Promise<QuerySubspacePostsResponse>;

    /**
     * Queries the posts for the given subspace section.
     */
    readonly sectionPosts: (
      subspaceId: Long,
      sectionId: number,
      pagination?: PageRequest
    ) => Promise<QuerySectionPostsResponse>;

    /**
     * Queries the post with the given id from the provided subspace.
     */
    readonly post: (
      subspaceId: Long,
      postId: Long
    ) => Promise<Post | undefined>;

    /**
     * Queries the attachments for the given post.
     */
    readonly postAttachments: (
      subspaceId: Long,
      postId: Long
    ) => Promise<QueryPostAttachmentsResponse>;

    /**
     * Queries the answers for the given poll.
     */
    readonly pollAnswers: (
      subspaceId: Long,
      postId: Long,
      pollId: number,
      user?: string
    ) => Promise<QueryPollAnswersResponse>;

    /**
     * Queries the module params.
     */
    readonly params: () => Promise<Params>;
  };
}

export function setupPostsExtension(base: QueryClient): PostsExtension {
  const rpc = createProtobufRpcClient(base);
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    posts: {
      subspacePosts: async (subspaceId: Long, pagination?: PageRequest) => {
        return queryService.SubspacePosts({
          subspaceId,
          pagination,
        });
      },
      sectionPosts: async (
        subspaceId: Long,
        sectionId: number,
        pagination?: PageRequest
      ) => {
        return queryService.SectionPosts({
          subspaceId,
          sectionId,
          pagination,
        });
      },
      post: async (subspaceId: Long, postId: Long) => {
        try {
          const res = await queryService.Post({
            subspaceId,
            postId,
          });
          return res.post;
        } catch (error) {
          return undefined;
        }
      },
      postAttachments: async (
        subspaceId: Long,
        postId: Long,
        pagination?: PageRequest
      ) => {
        return queryService.PostAttachments({
          subspaceId,
          postId,
          pagination,
        });
      },
      pollAnswers: async (
        subspaceId: Long,
        postId: Long,
        pollId: number,
        user?: string,
        pagination?: PageRequest
      ) => {
        return queryService.PollAnswers({
          subspaceId,
          postId,
          pollId,
          user: user || "",
          pagination,
        });
      },
      params: async () => {
        const res = await queryService.Params({});
        assertDefinedAndNotNull(res.params);
        return res.params;
      },
    },
  };
}
