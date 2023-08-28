/* eslint-disable */
import {
  PageRequest,
  PageRequestAmino,
  PageResponse,
  PageResponseAmino,
} from "../../../cosmos/base/query/v1beta1/pagination";
import {
  Post,
  PostAmino,
  Attachment,
  AttachmentAmino,
  UserAnswer,
  UserAnswerAmino,
  Params,
  ParamsAmino,
  PostOwnerTransferRequest,
  PostOwnerTransferRequestAmino,
} from "./models";
import { Long, isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.posts.v3";
/**
 * QuerySubspacePostsRequest is the request type for the Query/SubspacePosts RPC
 * method
 */
export interface QuerySubspacePostsRequest {
  /** Id of the subspace to query the posts for */
  subspaceId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QuerySubspacePostsRequestProtoMsg {
  typeUrl: "/desmos.posts.v3.QuerySubspacePostsRequest";
  value: Uint8Array;
}
/**
 * QuerySubspacePostsRequest is the request type for the Query/SubspacePosts RPC
 * method
 */
export interface QuerySubspacePostsRequestAmino {
  /** Id of the subspace to query the posts for */
  subspace_id: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QuerySubspacePostsRequestAminoMsg {
  type: "/desmos.posts.v3.QuerySubspacePostsRequest";
  value: QuerySubspacePostsRequestAmino;
}
/**
 * QuerySubspacePostsResponse is the response type for the Query/SubspacePosts
 * RPC method
 */
export interface QuerySubspacePostsResponse {
  posts: Post[];
  pagination?: PageResponse;
}
export interface QuerySubspacePostsResponseProtoMsg {
  typeUrl: "/desmos.posts.v3.QuerySubspacePostsResponse";
  value: Uint8Array;
}
/**
 * QuerySubspacePostsResponse is the response type for the Query/SubspacePosts
 * RPC method
 */
export interface QuerySubspacePostsResponseAmino {
  posts: PostAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySubspacePostsResponseAminoMsg {
  type: "/desmos.posts.v3.QuerySubspacePostsResponse";
  value: QuerySubspacePostsResponseAmino;
}
/**
 * QuerySectionPostsRequest is the request type for the Query/SectionPosts RPC
 * method
 */
export interface QuerySectionPostsRequest {
  /** Id of the subspace to query the posts for */
  subspaceId: Long;
  /** Id of the section to query the posts for */
  sectionId: number;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QuerySectionPostsRequestProtoMsg {
  typeUrl: "/desmos.posts.v3.QuerySectionPostsRequest";
  value: Uint8Array;
}
/**
 * QuerySectionPostsRequest is the request type for the Query/SectionPosts RPC
 * method
 */
export interface QuerySectionPostsRequestAmino {
  /** Id of the subspace to query the posts for */
  subspace_id: string;
  /** Id of the section to query the posts for */
  section_id: number;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QuerySectionPostsRequestAminoMsg {
  type: "/desmos.posts.v3.QuerySectionPostsRequest";
  value: QuerySectionPostsRequestAmino;
}
/**
 * QuerySectionPostsResponse is the response type for the Query/SectionPosts RPC
 * method
 */
export interface QuerySectionPostsResponse {
  posts: Post[];
  pagination?: PageResponse;
}
export interface QuerySectionPostsResponseProtoMsg {
  typeUrl: "/desmos.posts.v3.QuerySectionPostsResponse";
  value: Uint8Array;
}
/**
 * QuerySectionPostsResponse is the response type for the Query/SectionPosts RPC
 * method
 */
export interface QuerySectionPostsResponseAmino {
  posts: PostAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySectionPostsResponseAminoMsg {
  type: "/desmos.posts.v3.QuerySectionPostsResponse";
  value: QuerySectionPostsResponseAmino;
}
/** QueryPostRequest is the request type for the Query/Post RPC method */
export interface QueryPostRequest {
  /** Id of the subspace inside which the post lies */
  subspaceId: Long;
  /** Id of the post to query for */
  postId: Long;
}
export interface QueryPostRequestProtoMsg {
  typeUrl: "/desmos.posts.v3.QueryPostRequest";
  value: Uint8Array;
}
/** QueryPostRequest is the request type for the Query/Post RPC method */
export interface QueryPostRequestAmino {
  /** Id of the subspace inside which the post lies */
  subspace_id: string;
  /** Id of the post to query for */
  post_id: string;
}
export interface QueryPostRequestAminoMsg {
  type: "/desmos.posts.v3.QueryPostRequest";
  value: QueryPostRequestAmino;
}
/** QueryPostResponse is the response type for the Query/Post RPC method */
export interface QueryPostResponse {
  post?: Post;
}
export interface QueryPostResponseProtoMsg {
  typeUrl: "/desmos.posts.v3.QueryPostResponse";
  value: Uint8Array;
}
/** QueryPostResponse is the response type for the Query/Post RPC method */
export interface QueryPostResponseAmino {
  post?: PostAmino;
}
export interface QueryPostResponseAminoMsg {
  type: "/desmos.posts.v3.QueryPostResponse";
  value: QueryPostResponseAmino;
}
/**
 * QueryPostsRequest is the request type for the Query/PostAttachments RPC
 * method
 */
export interface QueryPostAttachmentsRequest {
  /** Id of the subspace where the post is stored */
  subspaceId: Long;
  /** Id of the post to query the attachments for */
  postId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryPostAttachmentsRequestProtoMsg {
  typeUrl: "/desmos.posts.v3.QueryPostAttachmentsRequest";
  value: Uint8Array;
}
/**
 * QueryPostsRequest is the request type for the Query/PostAttachments RPC
 * method
 */
export interface QueryPostAttachmentsRequestAmino {
  /** Id of the subspace where the post is stored */
  subspace_id: string;
  /** Id of the post to query the attachments for */
  post_id: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryPostAttachmentsRequestAminoMsg {
  type: "/desmos.posts.v3.QueryPostAttachmentsRequest";
  value: QueryPostAttachmentsRequestAmino;
}
/**
 * QueryPostAttachmentsResponse is the response type for the
 * Query/PostAttachments RPC method
 */
export interface QueryPostAttachmentsResponse {
  attachments: Attachment[];
  pagination?: PageResponse;
}
export interface QueryPostAttachmentsResponseProtoMsg {
  typeUrl: "/desmos.posts.v3.QueryPostAttachmentsResponse";
  value: Uint8Array;
}
/**
 * QueryPostAttachmentsResponse is the response type for the
 * Query/PostAttachments RPC method
 */
export interface QueryPostAttachmentsResponseAmino {
  attachments: AttachmentAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPostAttachmentsResponseAminoMsg {
  type: "/desmos.posts.v3.QueryPostAttachmentsResponse";
  value: QueryPostAttachmentsResponseAmino;
}
/**
 * QueryPollAnswersRequest is the request type for the Query/PollAnswers RPC
 * method
 */
export interface QueryPollAnswersRequest {
  /** Id of the subspace where the post is stored */
  subspaceId: Long;
  /** Id of the post that holds the poll */
  postId: Long;
  /** Id of the poll to query the answers for */
  pollId: number;
  /** (Optional) Address of the user to query the responses for */
  user: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryPollAnswersRequestProtoMsg {
  typeUrl: "/desmos.posts.v3.QueryPollAnswersRequest";
  value: Uint8Array;
}
/**
 * QueryPollAnswersRequest is the request type for the Query/PollAnswers RPC
 * method
 */
export interface QueryPollAnswersRequestAmino {
  /** Id of the subspace where the post is stored */
  subspace_id: string;
  /** Id of the post that holds the poll */
  post_id: string;
  /** Id of the poll to query the answers for */
  poll_id: number;
  /** (Optional) Address of the user to query the responses for */
  user: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryPollAnswersRequestAminoMsg {
  type: "/desmos.posts.v3.QueryPollAnswersRequest";
  value: QueryPollAnswersRequestAmino;
}
/**
 * QueryPollAnswersResponse is the response type for the Query/PollAnswers RPC
 * method
 */
export interface QueryPollAnswersResponse {
  answers: UserAnswer[];
  pagination?: PageResponse;
}
export interface QueryPollAnswersResponseProtoMsg {
  typeUrl: "/desmos.posts.v3.QueryPollAnswersResponse";
  value: Uint8Array;
}
/**
 * QueryPollAnswersResponse is the response type for the Query/PollAnswers RPC
 * method
 */
export interface QueryPollAnswersResponseAmino {
  answers: UserAnswerAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPollAnswersResponseAminoMsg {
  type: "/desmos.posts.v3.QueryPollAnswersResponse";
  value: QueryPollAnswersResponseAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/desmos.posts.v3.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/desmos.posts.v3.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/desmos.posts.v3.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/desmos.posts.v3.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryIncomingPostOwnerTransferRequestsRequest is the request type for the
 * Query/IncomingPostOwnerTransferRequests RPC endpoint
 */
export interface QueryIncomingPostOwnerTransferRequestsRequest {
  /** Id of the subspace where the requests are stored */
  subspaceId: Long;
  /**
   * (optional) Receiver represents the address of the user to which query the
   * incoming requests for
   */
  receiver: string;
  /** Pagination defines an optional pagination for the request */
  pagination?: PageRequest;
}
export interface QueryIncomingPostOwnerTransferRequestsRequestProtoMsg {
  typeUrl: "/desmos.posts.v3.QueryIncomingPostOwnerTransferRequestsRequest";
  value: Uint8Array;
}
/**
 * QueryIncomingPostOwnerTransferRequestsRequest is the request type for the
 * Query/IncomingPostOwnerTransferRequests RPC endpoint
 */
export interface QueryIncomingPostOwnerTransferRequestsRequestAmino {
  /** Id of the subspace where the requests are stored */
  subspace_id: string;
  /**
   * (optional) Receiver represents the address of the user to which query the
   * incoming requests for
   */
  receiver: string;
  /** Pagination defines an optional pagination for the request */
  pagination?: PageRequestAmino;
}
export interface QueryIncomingPostOwnerTransferRequestsRequestAminoMsg {
  type: "/desmos.posts.v3.QueryIncomingPostOwnerTransferRequestsRequest";
  value: QueryIncomingPostOwnerTransferRequestsRequestAmino;
}
/**
 * QueryIncomingPostOwnerTransferRequestsResponse is the response type for the
 * Query/IncomingPostOwnerTransferRequests RPC method.
 */
export interface QueryIncomingPostOwnerTransferRequestsResponse {
  /**
   * Requests represent the list of all the post owner transfer requests made
   * towards the receiver
   */
  requests: PostOwnerTransferRequest[];
  /** Pagination defines the pagination response */
  pagination?: PageResponse;
}
export interface QueryIncomingPostOwnerTransferRequestsResponseProtoMsg {
  typeUrl: "/desmos.posts.v3.QueryIncomingPostOwnerTransferRequestsResponse";
  value: Uint8Array;
}
/**
 * QueryIncomingPostOwnerTransferRequestsResponse is the response type for the
 * Query/IncomingPostOwnerTransferRequests RPC method.
 */
export interface QueryIncomingPostOwnerTransferRequestsResponseAmino {
  /**
   * Requests represent the list of all the post owner transfer requests made
   * towards the receiver
   */
  requests: PostOwnerTransferRequestAmino[];
  /** Pagination defines the pagination response */
  pagination?: PageResponseAmino;
}
export interface QueryIncomingPostOwnerTransferRequestsResponseAminoMsg {
  type: "/desmos.posts.v3.QueryIncomingPostOwnerTransferRequestsResponse";
  value: QueryIncomingPostOwnerTransferRequestsResponseAmino;
}
function createBaseQuerySubspacePostsRequest(): QuerySubspacePostsRequest {
  return {
    subspaceId: Long.UZERO,
    pagination: undefined,
  };
}
export const QuerySubspacePostsRequest = {
  encode(
    message: QuerySubspacePostsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySubspacePostsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspacePostsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubspacePostsRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QuerySubspacePostsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySubspacePostsRequest>, I>>(
    object: I,
  ): QuerySubspacePostsRequest {
    const message = createBaseQuerySubspacePostsRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QuerySubspacePostsRequestAmino): QuerySubspacePostsRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QuerySubspacePostsRequest): QuerySubspacePostsRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QuerySubspacePostsRequestAminoMsg,
  ): QuerySubspacePostsRequest {
    return QuerySubspacePostsRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QuerySubspacePostsRequestProtoMsg,
  ): QuerySubspacePostsRequest {
    return QuerySubspacePostsRequest.decode(message.value);
  },
  toProto(message: QuerySubspacePostsRequest): Uint8Array {
    return QuerySubspacePostsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QuerySubspacePostsRequest,
  ): QuerySubspacePostsRequestProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.QuerySubspacePostsRequest",
      value: QuerySubspacePostsRequest.encode(message).finish(),
    };
  },
};
function createBaseQuerySubspacePostsResponse(): QuerySubspacePostsResponse {
  return {
    posts: [],
    pagination: undefined,
  };
}
export const QuerySubspacePostsResponse = {
  encode(
    message: QuerySubspacePostsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.posts) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySubspacePostsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspacePostsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.posts.push(Post.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubspacePostsResponse {
    return {
      posts: Array.isArray(object?.posts)
        ? object.posts.map((e: any) => Post.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QuerySubspacePostsResponse): unknown {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map((e) => (e ? Post.toJSON(e) : undefined));
    } else {
      obj.posts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySubspacePostsResponse>, I>>(
    object: I,
  ): QuerySubspacePostsResponse {
    const message = createBaseQuerySubspacePostsResponse();
    message.posts = object.posts?.map((e) => Post.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(
    object: QuerySubspacePostsResponseAmino,
  ): QuerySubspacePostsResponse {
    return {
      posts: Array.isArray(object?.posts)
        ? object.posts.map((e: any) => Post.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QuerySubspacePostsResponse,
  ): QuerySubspacePostsResponseAmino {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map((e) => (e ? Post.toAmino(e) : undefined));
    } else {
      obj.posts = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QuerySubspacePostsResponseAminoMsg,
  ): QuerySubspacePostsResponse {
    return QuerySubspacePostsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QuerySubspacePostsResponseProtoMsg,
  ): QuerySubspacePostsResponse {
    return QuerySubspacePostsResponse.decode(message.value);
  },
  toProto(message: QuerySubspacePostsResponse): Uint8Array {
    return QuerySubspacePostsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QuerySubspacePostsResponse,
  ): QuerySubspacePostsResponseProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.QuerySubspacePostsResponse",
      value: QuerySubspacePostsResponse.encode(message).finish(),
    };
  },
};
function createBaseQuerySectionPostsRequest(): QuerySectionPostsRequest {
  return {
    subspaceId: Long.UZERO,
    sectionId: 0,
    pagination: undefined,
  };
}
export const QuerySectionPostsRequest = {
  encode(
    message: QuerySectionPostsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.sectionId !== 0) {
      writer.uint32(16).uint32(message.sectionId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySectionPostsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySectionPostsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.sectionId = reader.uint32();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySectionPostsRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      sectionId: isSet(object.sectionId) ? Number(object.sectionId) : 0,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QuerySectionPostsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.sectionId !== undefined &&
      (obj.sectionId = Math.round(message.sectionId));
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySectionPostsRequest>, I>>(
    object: I,
  ): QuerySectionPostsRequest {
    const message = createBaseQuerySectionPostsRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.sectionId = object.sectionId ?? 0;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QuerySectionPostsRequestAmino): QuerySectionPostsRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      sectionId: object.section_id,
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QuerySectionPostsRequest): QuerySectionPostsRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.section_id = message.sectionId;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QuerySectionPostsRequestAminoMsg,
  ): QuerySectionPostsRequest {
    return QuerySectionPostsRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QuerySectionPostsRequestProtoMsg,
  ): QuerySectionPostsRequest {
    return QuerySectionPostsRequest.decode(message.value);
  },
  toProto(message: QuerySectionPostsRequest): Uint8Array {
    return QuerySectionPostsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QuerySectionPostsRequest,
  ): QuerySectionPostsRequestProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.QuerySectionPostsRequest",
      value: QuerySectionPostsRequest.encode(message).finish(),
    };
  },
};
function createBaseQuerySectionPostsResponse(): QuerySectionPostsResponse {
  return {
    posts: [],
    pagination: undefined,
  };
}
export const QuerySectionPostsResponse = {
  encode(
    message: QuerySectionPostsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.posts) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySectionPostsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySectionPostsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.posts.push(Post.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySectionPostsResponse {
    return {
      posts: Array.isArray(object?.posts)
        ? object.posts.map((e: any) => Post.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QuerySectionPostsResponse): unknown {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map((e) => (e ? Post.toJSON(e) : undefined));
    } else {
      obj.posts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySectionPostsResponse>, I>>(
    object: I,
  ): QuerySectionPostsResponse {
    const message = createBaseQuerySectionPostsResponse();
    message.posts = object.posts?.map((e) => Post.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QuerySectionPostsResponseAmino): QuerySectionPostsResponse {
    return {
      posts: Array.isArray(object?.posts)
        ? object.posts.map((e: any) => Post.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QuerySectionPostsResponse): QuerySectionPostsResponseAmino {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map((e) => (e ? Post.toAmino(e) : undefined));
    } else {
      obj.posts = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QuerySectionPostsResponseAminoMsg,
  ): QuerySectionPostsResponse {
    return QuerySectionPostsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QuerySectionPostsResponseProtoMsg,
  ): QuerySectionPostsResponse {
    return QuerySectionPostsResponse.decode(message.value);
  },
  toProto(message: QuerySectionPostsResponse): Uint8Array {
    return QuerySectionPostsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QuerySectionPostsResponse,
  ): QuerySectionPostsResponseProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.QuerySectionPostsResponse",
      value: QuerySectionPostsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryPostRequest(): QueryPostRequest {
  return {
    subspaceId: Long.UZERO,
    postId: Long.UZERO,
  };
}
export const QueryPostRequest = {
  encode(
    message: QueryPostRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (!message.postId.isZero()) {
      writer.uint32(16).uint64(message.postId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.postId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPostRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
    };
  },
  toJSON(message: QueryPostRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPostRequest>, I>>(
    object: I,
  ): QueryPostRequest {
    const message = createBaseQueryPostRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.postId =
      object.postId !== undefined && object.postId !== null
        ? Long.fromValue(object.postId)
        : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryPostRequestAmino): QueryPostRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      postId: Long.fromString(object.post_id),
    };
  },
  toAmino(message: QueryPostRequest): QueryPostRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPostRequestAminoMsg): QueryPostRequest {
    return QueryPostRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPostRequestProtoMsg): QueryPostRequest {
    return QueryPostRequest.decode(message.value);
  },
  toProto(message: QueryPostRequest): Uint8Array {
    return QueryPostRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPostRequest): QueryPostRequestProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.QueryPostRequest",
      value: QueryPostRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryPostResponse(): QueryPostResponse {
  return {
    post: undefined,
  };
}
export const QueryPostResponse = {
  encode(
    message: QueryPostResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.post !== undefined) {
      Post.encode(message.post, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.post = Post.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPostResponse {
    return {
      post: isSet(object.post) ? Post.fromJSON(object.post) : undefined,
    };
  },
  toJSON(message: QueryPostResponse): unknown {
    const obj: any = {};
    message.post !== undefined &&
      (obj.post = message.post ? Post.toJSON(message.post) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPostResponse>, I>>(
    object: I,
  ): QueryPostResponse {
    const message = createBaseQueryPostResponse();
    message.post =
      object.post !== undefined && object.post !== null
        ? Post.fromPartial(object.post)
        : undefined;
    return message;
  },
  fromAmino(object: QueryPostResponseAmino): QueryPostResponse {
    return {
      post: object?.post ? Post.fromAmino(object.post) : undefined,
    };
  },
  toAmino(message: QueryPostResponse): QueryPostResponseAmino {
    const obj: any = {};
    obj.post = message.post ? Post.toAmino(message.post) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPostResponseAminoMsg): QueryPostResponse {
    return QueryPostResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPostResponseProtoMsg): QueryPostResponse {
    return QueryPostResponse.decode(message.value);
  },
  toProto(message: QueryPostResponse): Uint8Array {
    return QueryPostResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPostResponse): QueryPostResponseProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.QueryPostResponse",
      value: QueryPostResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryPostAttachmentsRequest(): QueryPostAttachmentsRequest {
  return {
    subspaceId: Long.UZERO,
    postId: Long.UZERO,
    pagination: undefined,
  };
}
export const QueryPostAttachmentsRequest = {
  encode(
    message: QueryPostAttachmentsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (!message.postId.isZero()) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryPostAttachmentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostAttachmentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.postId = reader.uint64() as Long;
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPostAttachmentsRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryPostAttachmentsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPostAttachmentsRequest>, I>>(
    object: I,
  ): QueryPostAttachmentsRequest {
    const message = createBaseQueryPostAttachmentsRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.postId =
      object.postId !== undefined && object.postId !== null
        ? Long.fromValue(object.postId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryPostAttachmentsRequestAmino,
  ): QueryPostAttachmentsRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      postId: Long.fromString(object.post_id),
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryPostAttachmentsRequest,
  ): QueryPostAttachmentsRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryPostAttachmentsRequestAminoMsg,
  ): QueryPostAttachmentsRequest {
    return QueryPostAttachmentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryPostAttachmentsRequestProtoMsg,
  ): QueryPostAttachmentsRequest {
    return QueryPostAttachmentsRequest.decode(message.value);
  },
  toProto(message: QueryPostAttachmentsRequest): Uint8Array {
    return QueryPostAttachmentsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryPostAttachmentsRequest,
  ): QueryPostAttachmentsRequestProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.QueryPostAttachmentsRequest",
      value: QueryPostAttachmentsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryPostAttachmentsResponse(): QueryPostAttachmentsResponse {
  return {
    attachments: [],
    pagination: undefined,
  };
}
export const QueryPostAttachmentsResponse = {
  encode(
    message: QueryPostAttachmentsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.attachments) {
      Attachment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryPostAttachmentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostAttachmentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attachments.push(Attachment.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPostAttachmentsResponse {
    return {
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => Attachment.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryPostAttachmentsResponse): unknown {
    const obj: any = {};
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? Attachment.toJSON(e) : undefined,
      );
    } else {
      obj.attachments = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPostAttachmentsResponse>, I>>(
    object: I,
  ): QueryPostAttachmentsResponse {
    const message = createBaseQueryPostAttachmentsResponse();
    message.attachments =
      object.attachments?.map((e) => Attachment.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryPostAttachmentsResponseAmino,
  ): QueryPostAttachmentsResponse {
    return {
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => Attachment.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryPostAttachmentsResponse,
  ): QueryPostAttachmentsResponseAmino {
    const obj: any = {};
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? Attachment.toAmino(e) : undefined,
      );
    } else {
      obj.attachments = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryPostAttachmentsResponseAminoMsg,
  ): QueryPostAttachmentsResponse {
    return QueryPostAttachmentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryPostAttachmentsResponseProtoMsg,
  ): QueryPostAttachmentsResponse {
    return QueryPostAttachmentsResponse.decode(message.value);
  },
  toProto(message: QueryPostAttachmentsResponse): Uint8Array {
    return QueryPostAttachmentsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryPostAttachmentsResponse,
  ): QueryPostAttachmentsResponseProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.QueryPostAttachmentsResponse",
      value: QueryPostAttachmentsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryPollAnswersRequest(): QueryPollAnswersRequest {
  return {
    subspaceId: Long.UZERO,
    postId: Long.UZERO,
    pollId: 0,
    user: "",
    pagination: undefined,
  };
}
export const QueryPollAnswersRequest = {
  encode(
    message: QueryPollAnswersRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (!message.postId.isZero()) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.pollId !== 0) {
      writer.uint32(24).uint32(message.pollId);
    }
    if (message.user !== "") {
      writer.uint32(34).string(message.user);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryPollAnswersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPollAnswersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.postId = reader.uint64() as Long;
          break;
        case 3:
          message.pollId = reader.uint32();
          break;
        case 4:
          message.user = reader.string();
          break;
        case 5:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPollAnswersRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
      pollId: isSet(object.pollId) ? Number(object.pollId) : 0,
      user: isSet(object.user) ? String(object.user) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryPollAnswersRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    message.pollId !== undefined && (obj.pollId = Math.round(message.pollId));
    message.user !== undefined && (obj.user = message.user);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPollAnswersRequest>, I>>(
    object: I,
  ): QueryPollAnswersRequest {
    const message = createBaseQueryPollAnswersRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.postId =
      object.postId !== undefined && object.postId !== null
        ? Long.fromValue(object.postId)
        : Long.UZERO;
    message.pollId = object.pollId ?? 0;
    message.user = object.user ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryPollAnswersRequestAmino): QueryPollAnswersRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      postId: Long.fromString(object.post_id),
      pollId: object.poll_id,
      user: object.user,
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryPollAnswersRequest): QueryPollAnswersRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    obj.poll_id = message.pollId;
    obj.user = message.user;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryPollAnswersRequestAminoMsg,
  ): QueryPollAnswersRequest {
    return QueryPollAnswersRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryPollAnswersRequestProtoMsg,
  ): QueryPollAnswersRequest {
    return QueryPollAnswersRequest.decode(message.value);
  },
  toProto(message: QueryPollAnswersRequest): Uint8Array {
    return QueryPollAnswersRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryPollAnswersRequest,
  ): QueryPollAnswersRequestProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.QueryPollAnswersRequest",
      value: QueryPollAnswersRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryPollAnswersResponse(): QueryPollAnswersResponse {
  return {
    answers: [],
    pagination: undefined,
  };
}
export const QueryPollAnswersResponse = {
  encode(
    message: QueryPollAnswersResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.answers) {
      UserAnswer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryPollAnswersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPollAnswersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.answers.push(UserAnswer.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPollAnswersResponse {
    return {
      answers: Array.isArray(object?.answers)
        ? object.answers.map((e: any) => UserAnswer.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryPollAnswersResponse): unknown {
    const obj: any = {};
    if (message.answers) {
      obj.answers = message.answers.map((e) =>
        e ? UserAnswer.toJSON(e) : undefined,
      );
    } else {
      obj.answers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPollAnswersResponse>, I>>(
    object: I,
  ): QueryPollAnswersResponse {
    const message = createBaseQueryPollAnswersResponse();
    message.answers =
      object.answers?.map((e) => UserAnswer.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryPollAnswersResponseAmino): QueryPollAnswersResponse {
    return {
      answers: Array.isArray(object?.answers)
        ? object.answers.map((e: any) => UserAnswer.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryPollAnswersResponse): QueryPollAnswersResponseAmino {
    const obj: any = {};
    if (message.answers) {
      obj.answers = message.answers.map((e) =>
        e ? UserAnswer.toAmino(e) : undefined,
      );
    } else {
      obj.answers = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryPollAnswersResponseAminoMsg,
  ): QueryPollAnswersResponse {
    return QueryPollAnswersResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryPollAnswersResponseProtoMsg,
  ): QueryPollAnswersResponse {
    return QueryPollAnswersResponse.decode(message.value);
  },
  toProto(message: QueryPollAnswersResponse): Uint8Array {
    return QueryPollAnswersResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryPollAnswersResponse,
  ): QueryPollAnswersResponseProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.QueryPollAnswersResponse",
      value: QueryPollAnswersResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I,
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined,
  };
}
export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I,
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryIncomingPostOwnerTransferRequestsRequest(): QueryIncomingPostOwnerTransferRequestsRequest {
  return {
    subspaceId: Long.UZERO,
    receiver: "",
    pagination: undefined,
  };
}
export const QueryIncomingPostOwnerTransferRequestsRequest = {
  encode(
    message: QueryIncomingPostOwnerTransferRequestsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryIncomingPostOwnerTransferRequestsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncomingPostOwnerTransferRequestsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncomingPostOwnerTransferRequestsRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryIncomingPostOwnerTransferRequestsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<
    I extends Exact<
      DeepPartial<QueryIncomingPostOwnerTransferRequestsRequest>,
      I
    >,
  >(object: I): QueryIncomingPostOwnerTransferRequestsRequest {
    const message = createBaseQueryIncomingPostOwnerTransferRequestsRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.receiver = object.receiver ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryIncomingPostOwnerTransferRequestsRequestAmino,
  ): QueryIncomingPostOwnerTransferRequestsRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      receiver: object.receiver,
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryIncomingPostOwnerTransferRequestsRequest,
  ): QueryIncomingPostOwnerTransferRequestsRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.receiver = message.receiver;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryIncomingPostOwnerTransferRequestsRequestAminoMsg,
  ): QueryIncomingPostOwnerTransferRequestsRequest {
    return QueryIncomingPostOwnerTransferRequestsRequest.fromAmino(
      object.value,
    );
  },
  fromProtoMsg(
    message: QueryIncomingPostOwnerTransferRequestsRequestProtoMsg,
  ): QueryIncomingPostOwnerTransferRequestsRequest {
    return QueryIncomingPostOwnerTransferRequestsRequest.decode(message.value);
  },
  toProto(message: QueryIncomingPostOwnerTransferRequestsRequest): Uint8Array {
    return QueryIncomingPostOwnerTransferRequestsRequest.encode(
      message,
    ).finish();
  },
  toProtoMsg(
    message: QueryIncomingPostOwnerTransferRequestsRequest,
  ): QueryIncomingPostOwnerTransferRequestsRequestProtoMsg {
    return {
      typeUrl: "/desmos.posts.v3.QueryIncomingPostOwnerTransferRequestsRequest",
      value:
        QueryIncomingPostOwnerTransferRequestsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryIncomingPostOwnerTransferRequestsResponse(): QueryIncomingPostOwnerTransferRequestsResponse {
  return {
    requests: [],
    pagination: undefined,
  };
}
export const QueryIncomingPostOwnerTransferRequestsResponse = {
  encode(
    message: QueryIncomingPostOwnerTransferRequestsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.requests) {
      PostOwnerTransferRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryIncomingPostOwnerTransferRequestsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncomingPostOwnerTransferRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requests.push(
            PostOwnerTransferRequest.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncomingPostOwnerTransferRequestsResponse {
    return {
      requests: Array.isArray(object?.requests)
        ? object.requests.map((e: any) => PostOwnerTransferRequest.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryIncomingPostOwnerTransferRequestsResponse): unknown {
    const obj: any = {};
    if (message.requests) {
      obj.requests = message.requests.map((e) =>
        e ? PostOwnerTransferRequest.toJSON(e) : undefined,
      );
    } else {
      obj.requests = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<
    I extends Exact<
      DeepPartial<QueryIncomingPostOwnerTransferRequestsResponse>,
      I
    >,
  >(object: I): QueryIncomingPostOwnerTransferRequestsResponse {
    const message = createBaseQueryIncomingPostOwnerTransferRequestsResponse();
    message.requests =
      object.requests?.map((e) => PostOwnerTransferRequest.fromPartial(e)) ||
      [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryIncomingPostOwnerTransferRequestsResponseAmino,
  ): QueryIncomingPostOwnerTransferRequestsResponse {
    return {
      requests: Array.isArray(object?.requests)
        ? object.requests.map((e: any) => PostOwnerTransferRequest.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryIncomingPostOwnerTransferRequestsResponse,
  ): QueryIncomingPostOwnerTransferRequestsResponseAmino {
    const obj: any = {};
    if (message.requests) {
      obj.requests = message.requests.map((e) =>
        e ? PostOwnerTransferRequest.toAmino(e) : undefined,
      );
    } else {
      obj.requests = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryIncomingPostOwnerTransferRequestsResponseAminoMsg,
  ): QueryIncomingPostOwnerTransferRequestsResponse {
    return QueryIncomingPostOwnerTransferRequestsResponse.fromAmino(
      object.value,
    );
  },
  fromProtoMsg(
    message: QueryIncomingPostOwnerTransferRequestsResponseProtoMsg,
  ): QueryIncomingPostOwnerTransferRequestsResponse {
    return QueryIncomingPostOwnerTransferRequestsResponse.decode(message.value);
  },
  toProto(message: QueryIncomingPostOwnerTransferRequestsResponse): Uint8Array {
    return QueryIncomingPostOwnerTransferRequestsResponse.encode(
      message,
    ).finish();
  },
  toProtoMsg(
    message: QueryIncomingPostOwnerTransferRequestsResponse,
  ): QueryIncomingPostOwnerTransferRequestsResponseProtoMsg {
    return {
      typeUrl:
        "/desmos.posts.v3.QueryIncomingPostOwnerTransferRequestsResponse",
      value:
        QueryIncomingPostOwnerTransferRequestsResponse.encode(message).finish(),
    };
  },
};
/** Query defines the gRPC querier service */
export interface Query {
  /** SubspacePosts queries all the posts inside a given subspace */
  SubspacePosts(
    request: QuerySubspacePostsRequest,
  ): Promise<QuerySubspacePostsResponse>;
  /** SectionPosts queries all the posts inside a given section */
  SectionPosts(
    request: QuerySectionPostsRequest,
  ): Promise<QuerySectionPostsResponse>;
  /** Post queries for a single post inside a given subspace */
  Post(request: QueryPostRequest): Promise<QueryPostResponse>;
  /** PostAttachments queries the attachments of the post having the given id */
  PostAttachments(
    request: QueryPostAttachmentsRequest,
  ): Promise<QueryPostAttachmentsResponse>;
  /** PollAnswers queries the answers for the poll having the given id */
  PollAnswers(
    request: QueryPollAnswersRequest,
  ): Promise<QueryPollAnswersResponse>;
  /** Params queries the module parameters */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * IncomingPostOwnerTransferRequests queries all the post owner transfers
   * requests that have been made towards the receiver with the given address
   */
  IncomingPostOwnerTransferRequests(
    request: QueryIncomingPostOwnerTransferRequestsRequest,
  ): Promise<QueryIncomingPostOwnerTransferRequestsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SubspacePosts = this.SubspacePosts.bind(this);
    this.SectionPosts = this.SectionPosts.bind(this);
    this.Post = this.Post.bind(this);
    this.PostAttachments = this.PostAttachments.bind(this);
    this.PollAnswers = this.PollAnswers.bind(this);
    this.Params = this.Params.bind(this);
    this.IncomingPostOwnerTransferRequests =
      this.IncomingPostOwnerTransferRequests.bind(this);
  }
  SubspacePosts(
    request: QuerySubspacePostsRequest,
  ): Promise<QuerySubspacePostsResponse> {
    const data = QuerySubspacePostsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v3.Query",
      "SubspacePosts",
      data,
    );
    return promise.then((data) =>
      QuerySubspacePostsResponse.decode(new _m0.Reader(data)),
    );
  }
  SectionPosts(
    request: QuerySectionPostsRequest,
  ): Promise<QuerySectionPostsResponse> {
    const data = QuerySectionPostsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v3.Query",
      "SectionPosts",
      data,
    );
    return promise.then((data) =>
      QuerySectionPostsResponse.decode(new _m0.Reader(data)),
    );
  }
  Post(request: QueryPostRequest): Promise<QueryPostResponse> {
    const data = QueryPostRequest.encode(request).finish();
    const promise = this.rpc.request("desmos.posts.v3.Query", "Post", data);
    return promise.then((data) =>
      QueryPostResponse.decode(new _m0.Reader(data)),
    );
  }
  PostAttachments(
    request: QueryPostAttachmentsRequest,
  ): Promise<QueryPostAttachmentsResponse> {
    const data = QueryPostAttachmentsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v3.Query",
      "PostAttachments",
      data,
    );
    return promise.then((data) =>
      QueryPostAttachmentsResponse.decode(new _m0.Reader(data)),
    );
  }
  PollAnswers(
    request: QueryPollAnswersRequest,
  ): Promise<QueryPollAnswersResponse> {
    const data = QueryPollAnswersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v3.Query",
      "PollAnswers",
      data,
    );
    return promise.then((data) =>
      QueryPollAnswersResponse.decode(new _m0.Reader(data)),
    );
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("desmos.posts.v3.Query", "Params", data);
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data)),
    );
  }
  IncomingPostOwnerTransferRequests(
    request: QueryIncomingPostOwnerTransferRequestsRequest,
  ): Promise<QueryIncomingPostOwnerTransferRequestsResponse> {
    const data =
      QueryIncomingPostOwnerTransferRequestsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v3.Query",
      "IncomingPostOwnerTransferRequests",
      data,
    );
    return promise.then((data) =>
      QueryIncomingPostOwnerTransferRequestsResponse.decode(
        new _m0.Reader(data),
      ),
    );
  }
}
