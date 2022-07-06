/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import {
  Post,
  Params,
  Attachment,
  UserAnswer,
} from "../../../desmos/posts/v2/models";

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

/**
 * QuerySubspacePostsResponse is the response type for the Query/SubspacePosts
 * RPC method
 */
export interface QuerySubspacePostsResponse {
  posts: Post[];
  pagination?: PageResponse;
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

/**
 * QuerySectionPostsResponse is the response type for the Query/SectionPosts RPC
 * method
 */
export interface QuerySectionPostsResponse {
  posts: Post[];
  pagination?: PageResponse;
}

/** QueryPostRequest is the request type for the Query/Post RPC method */
export interface QueryPostRequest {
  /** Id of the subspace inside which the post lies */
  subspaceId: Long;
  /** Id of the post to query for */
  postId: Long;
}

/** QueryPostResponse is the response type for the Query/Post RPC method */
export interface QueryPostResponse {
  post?: Post;
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

/**
 * QueryPostAttachmentsResponse is the response type for the
 * Query/PostAttachments RPC method
 */
export interface QueryPostAttachmentsResponse {
  attachments: Attachment[];
  pagination?: PageResponse;
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

/**
 * QueryPollAnswersResponse is the response type for the Query/PollAnswers RPC
 * method
 */
export interface QueryPollAnswersResponse {
  answers: UserAnswer[];
  pagination?: PageResponse;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
  params?: Params;
}

function createBaseQuerySubspacePostsRequest(): QuerySubspacePostsRequest {
  return { subspaceId: Long.UZERO, pagination: undefined };
}

export const QuerySubspacePostsRequest = {
  encode(
    message: QuerySubspacePostsRequest,
    writer: _m0.Writer = _m0.Writer.create()
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
    length?: number
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
        ? Long.fromString(object.subspaceId)
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
    object: I
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
};

function createBaseQuerySubspacePostsResponse(): QuerySubspacePostsResponse {
  return { posts: [], pagination: undefined };
}

export const QuerySubspacePostsResponse = {
  encode(
    message: QuerySubspacePostsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.posts) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
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
    object: I
  ): QuerySubspacePostsResponse {
    const message = createBaseQuerySubspacePostsResponse();
    message.posts = object.posts?.map((e) => Post.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQuerySectionPostsRequest(): QuerySectionPostsRequest {
  return { subspaceId: Long.UZERO, sectionId: 0, pagination: undefined };
}

export const QuerySectionPostsRequest = {
  encode(
    message: QuerySectionPostsRequest,
    writer: _m0.Writer = _m0.Writer.create()
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
    length?: number
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
        ? Long.fromString(object.subspaceId)
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
    object: I
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
};

function createBaseQuerySectionPostsResponse(): QuerySectionPostsResponse {
  return { posts: [], pagination: undefined };
}

export const QuerySectionPostsResponse = {
  encode(
    message: QuerySectionPostsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.posts) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
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
    object: I
  ): QuerySectionPostsResponse {
    const message = createBaseQuerySectionPostsResponse();
    message.posts = object.posts?.map((e) => Post.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryPostRequest(): QueryPostRequest {
  return { subspaceId: Long.UZERO, postId: Long.UZERO };
}

export const QueryPostRequest = {
  encode(
    message: QueryPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
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
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId)
        ? Long.fromString(object.postId)
        : Long.UZERO,
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
    object: I
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
};

function createBaseQueryPostResponse(): QueryPostResponse {
  return { post: undefined };
}

export const QueryPostResponse = {
  encode(
    message: QueryPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
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
    object: I
  ): QueryPostResponse {
    const message = createBaseQueryPostResponse();
    message.post =
      object.post !== undefined && object.post !== null
        ? Post.fromPartial(object.post)
        : undefined;
    return message;
  },
};

function createBaseQueryPostAttachmentsRequest(): QueryPostAttachmentsRequest {
  return { subspaceId: Long.UZERO, postId: Long.UZERO, pagination: undefined };
}

export const QueryPostAttachmentsRequest = {
  encode(
    message: QueryPostAttachmentsRequest,
    writer: _m0.Writer = _m0.Writer.create()
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
    length?: number
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
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId)
        ? Long.fromString(object.postId)
        : Long.UZERO,
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
    object: I
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
};

function createBaseQueryPostAttachmentsResponse(): QueryPostAttachmentsResponse {
  return { attachments: [], pagination: undefined };
}

export const QueryPostAttachmentsResponse = {
  encode(
    message: QueryPostAttachmentsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.attachments) {
      Attachment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
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
        e ? Attachment.toJSON(e) : undefined
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
    object: I
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
    writer: _m0.Writer = _m0.Writer.create()
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
    length?: number
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
        ? Long.fromString(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId)
        ? Long.fromString(object.postId)
        : Long.UZERO,
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
    object: I
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
};

function createBaseQueryPollAnswersResponse(): QueryPollAnswersResponse {
  return { answers: [], pagination: undefined };
}

export const QueryPollAnswersResponse = {
  encode(
    message: QueryPollAnswersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.answers) {
      UserAnswer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
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
        e ? UserAnswer.toJSON(e) : undefined
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
    object: I
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
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
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
    _: I
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
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
    object: I
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service */
export interface Query {
  /** SubspacePosts queries all the posts inside a given subspace */
  SubspacePosts(
    request: QuerySubspacePostsRequest
  ): Promise<QuerySubspacePostsResponse>;
  /** SectionPosts queries all the posts inside a given section */
  SectionPosts(
    request: QuerySectionPostsRequest
  ): Promise<QuerySectionPostsResponse>;
  /** Post queries for a single post inside a given subspace */
  Post(request: QueryPostRequest): Promise<QueryPostResponse>;
  /** PostAttachments queries the attachments of the post having the given id */
  PostAttachments(
    request: QueryPostAttachmentsRequest
  ): Promise<QueryPostAttachmentsResponse>;
  /** PollAnswers queries the answers for the poll having the given id */
  PollAnswers(
    request: QueryPollAnswersRequest
  ): Promise<QueryPollAnswersResponse>;
  /** Params queries the module parameters */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
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
  }
  SubspacePosts(
    request: QuerySubspacePostsRequest
  ): Promise<QuerySubspacePostsResponse> {
    const data = QuerySubspacePostsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v2.Query",
      "SubspacePosts",
      data
    );
    return promise.then((data) =>
      QuerySubspacePostsResponse.decode(new _m0.Reader(data))
    );
  }

  SectionPosts(
    request: QuerySectionPostsRequest
  ): Promise<QuerySectionPostsResponse> {
    const data = QuerySectionPostsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v2.Query",
      "SectionPosts",
      data
    );
    return promise.then((data) =>
      QuerySectionPostsResponse.decode(new _m0.Reader(data))
    );
  }

  Post(request: QueryPostRequest): Promise<QueryPostResponse> {
    const data = QueryPostRequest.encode(request).finish();
    const promise = this.rpc.request("desmos.posts.v2.Query", "Post", data);
    return promise.then((data) =>
      QueryPostResponse.decode(new _m0.Reader(data))
    );
  }

  PostAttachments(
    request: QueryPostAttachmentsRequest
  ): Promise<QueryPostAttachmentsResponse> {
    const data = QueryPostAttachmentsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v2.Query",
      "PostAttachments",
      data
    );
    return promise.then((data) =>
      QueryPostAttachmentsResponse.decode(new _m0.Reader(data))
    );
  }

  PollAnswers(
    request: QueryPollAnswersRequest
  ): Promise<QueryPollAnswersResponse> {
    const data = QueryPollAnswersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v2.Query",
      "PollAnswers",
      data
    );
    return promise.then((data) =>
      QueryPollAnswersResponse.decode(new _m0.Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("desmos.posts.v2.Query", "Params", data);
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
