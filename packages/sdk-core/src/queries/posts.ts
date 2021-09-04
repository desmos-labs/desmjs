import {createProtobufRpcClient, QueryClient} from "@cosmjs/stargate";
import {PageRequest} from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import {
    QueryClientImpl,
    QueryPostCommentsResponse,
    QueryPostReactionsResponse,
    QueryPostResponse,
    QueryPostsResponse,
    QueryRegisteredReactionsResponse,
    QueryReportsResponse,
    QueryUserAnswersResponse
} from "@desmos-labs/proto/desmos/posts/v1beta1/query";


export interface PostsExtension {
    readonly posts: {
        /**
         * Queries all the stored posts.
         */
        readonly posts: (subspaceId: string, pagination?: PageRequest) => Promise<QueryPostsResponse>;
        /**
         * Queries a specific post.
         */
        readonly post: (postId: string) => Promise<QueryPostResponse>;
        /**
         * Queries the reports for the post having the given id.
         */
        readonly reports: (postId: string) => Promise<QueryReportsResponse>;
        /**
         * Queries the user answers of the post having a specific id.
         */
        readonly userAnswers: (user: string, postId: string, pagination?: PageRequest) => Promise<QueryUserAnswersResponse>;
        /**
         * Queries all the registered reactions.
         */
        readonly registeredReactions: (subspaceId: string, pagination?: PageRequest) => Promise<QueryRegisteredReactionsResponse>;
        /**
         * Queries the comments of the post having the given id.
         */
        readonly postComments: (postId: string, pagination?: PageRequest) => Promise<QueryPostCommentsResponse>;
        /**
         * Queries all the reactions of the post having the given id.
         */
        readonly postReactions: (postId: string, pagination?: PageRequest) => Promise<QueryPostReactionsResponse>;
    };
}

export function setupPostsExtension(base: QueryClient): PostsExtension {
    const rpc = createProtobufRpcClient(base);
    // Use this service to get easy typed access to query methods
    // This cannot be used for proof verification
    const queryService = new QueryClientImpl(rpc);

    return {
        posts: {
            posts: async (subspaceId: string, pagination?: PageRequest) => {
                return queryService.Posts({
                    subspaceId,
                    pagination
                })
            },

            post: async (postId: string) => {
                return queryService.Post({
                    postId
                })
            },

            reports: async (postId: string) => {
                return queryService.Reports({
                    postId
                })
            },

            userAnswers: async (user: string, postId: string, pagination?: PageRequest) => {
                return queryService.UserAnswers({
                    user,
                    postId,
                    pagination
                })
            },

            registeredReactions: async (subspaceId: string, pagination?: PageRequest) => {
                return queryService.RegisteredReactions({
                    subspaceId,
                    pagination
                })
            },

            postComments: async (postId: string, pagination?: PageRequest) => {
                return queryService.PostComments({
                    postId,
                    pagination
                })
            },

            postReactions: async (postId: string, pagination?: PageRequest) => {
                return queryService.PostReactions({
                    postId,
                    pagination
                })
            },

        }
    };
}
