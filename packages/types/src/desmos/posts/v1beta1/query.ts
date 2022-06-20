/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Post } from "../../../desmos/posts/v1beta1/posts";
import { Params } from "../../../desmos/posts/v1beta1/params";
import { UserAnswer } from "../../../desmos/posts/v1beta1/polls";
import {
  RegisteredReaction,
  PostReaction,
} from "../../../desmos/posts/v1beta1/reactions";
import { Report } from "../../../desmos/posts/v1beta1/report";

/** QueryPostsRequest is the request type for the Query/Posts RPC method. */
export interface QueryPostsRequest {
  /**
   * SubspaceId represents the ID of the subspace to which to query the posts
   * for. Providing an empty or invalid subspace id will return an error.
   */
  subspaceId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryPostsResponse is the response type for the Query/Posts RPC method */
export interface QueryPostsResponse {
  posts: Post[];
  pagination?: PageResponse;
}

/** QueryPostRequest is the request type for the Query/Post RPC method. */
export interface QueryPostRequest {
  postId: string;
}

/** QueryPostResponse is the response type for the Query/Post RPC method */
export interface QueryPostResponse {
  post?: Post;
}

/**
 * QueryUserAnswersRequest is the request type for the Query/UserAnswers RPC
 * method.
 */
export interface QueryUserAnswersRequest {
  postId: string;
  user: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryUserAnswersResponse is the response type for the Query/UserAnswers RPC
 * method
 */
export interface QueryUserAnswersResponse {
  answers: UserAnswer[];
  pagination?: PageResponse;
}

/**
 * QueryRegisteredReactionsRequest is the request type for the
 * Query/RegisteredReactions RPC method.
 */
export interface QueryRegisteredReactionsRequest {
  /** subspace to query the registered reactions for */
  subspaceId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryRegisteredReactionsResponse is the response type for the
 * Query/RegisteredReactions RPC method
 */
export interface QueryRegisteredReactionsResponse {
  reactions: RegisteredReaction[];
  pagination?: PageResponse;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
  params?: Params;
}

/**
 * QueryReportsRequest is the request type for the Query/Reports RPC
 * method.
 */
export interface QueryReportsRequest {
  postId: string;
}

/**
 * QueryReportsResponse is the response type for the Query/Reports RPC
 * method.
 */
export interface QueryReportsResponse {
  reports: Report[];
}

/**
 * QueryPostReactionsRequest is the request type for the Query/PostReactions RPC
 * method.
 */
export interface QueryPostReactionsRequest {
  postId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryPostReactionsResponse is the response type for the Query/PostReactions
 * RPC method
 */
export interface QueryPostReactionsResponse {
  reactions: PostReaction[];
  pagination?: PageResponse;
}

/**
 * QueryPostCommentsRequest is the request type for the Query/PostComments RPC
 * method.
 */
export interface QueryPostCommentsRequest {
  postId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryPostCommentsResponse is the response type for the Query/PostComments RPC
 * method.
 */
export interface QueryPostCommentsResponse {
  comments: Post[];
  pagination?: PageResponse;
}

function createBaseQueryPostsRequest(): QueryPostsRequest {
  return { subspaceId: "", pagination: undefined };
}

export const QueryPostsRequest = {
  encode(
    message: QueryPostsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subspaceId !== "") {
      writer.uint32(10).string(message.subspaceId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPostsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.string();
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

  fromJSON(object: any): QueryPostsRequest {
    return {
      subspaceId: isSet(object.subspaceId) ? String(object.subspaceId) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPostsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = message.subspaceId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPostsRequest>, I>>(
    object: I
  ): QueryPostsRequest {
    const message = createBaseQueryPostsRequest();
    message.subspaceId = object.subspaceId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryPostsResponse(): QueryPostsResponse {
  return { posts: [], pagination: undefined };
}

export const QueryPostsResponse = {
  encode(
    message: QueryPostsResponse,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPostsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostsResponse();
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

  fromJSON(object: any): QueryPostsResponse {
    return {
      posts: Array.isArray(object?.posts)
        ? object.posts.map((e: any) => Post.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPostsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<QueryPostsResponse>, I>>(
    object: I
  ): QueryPostsResponse {
    const message = createBaseQueryPostsResponse();
    message.posts = object.posts?.map((e) => Post.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryPostRequest(): QueryPostRequest {
  return { postId: "" };
}

export const QueryPostRequest = {
  encode(
    message: QueryPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.postId !== "") {
      writer.uint32(10).string(message.postId);
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
          message.postId = reader.string();
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
      postId: isSet(object.postId) ? String(object.postId) : "",
    };
  },

  toJSON(message: QueryPostRequest): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPostRequest>, I>>(
    object: I
  ): QueryPostRequest {
    const message = createBaseQueryPostRequest();
    message.postId = object.postId ?? "";
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

function createBaseQueryUserAnswersRequest(): QueryUserAnswersRequest {
  return { postId: "", user: "", pagination: undefined };
}

export const QueryUserAnswersRequest = {
  encode(
    message: QueryUserAnswersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.postId !== "") {
      writer.uint32(10).string(message.postId);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserAnswersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserAnswersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string();
          break;
        case 2:
          message.user = reader.string();
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

  fromJSON(object: any): QueryUserAnswersRequest {
    return {
      postId: isSet(object.postId) ? String(object.postId) : "",
      user: isSet(object.user) ? String(object.user) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryUserAnswersRequest): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    message.user !== undefined && (obj.user = message.user);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUserAnswersRequest>, I>>(
    object: I
  ): QueryUserAnswersRequest {
    const message = createBaseQueryUserAnswersRequest();
    message.postId = object.postId ?? "";
    message.user = object.user ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryUserAnswersResponse(): QueryUserAnswersResponse {
  return { answers: [], pagination: undefined };
}

export const QueryUserAnswersResponse = {
  encode(
    message: QueryUserAnswersResponse,
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
  ): QueryUserAnswersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserAnswersResponse();
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

  fromJSON(object: any): QueryUserAnswersResponse {
    return {
      answers: Array.isArray(object?.answers)
        ? object.answers.map((e: any) => UserAnswer.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryUserAnswersResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<QueryUserAnswersResponse>, I>>(
    object: I
  ): QueryUserAnswersResponse {
    const message = createBaseQueryUserAnswersResponse();
    message.answers =
      object.answers?.map((e) => UserAnswer.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryRegisteredReactionsRequest(): QueryRegisteredReactionsRequest {
  return { subspaceId: "", pagination: undefined };
}

export const QueryRegisteredReactionsRequest = {
  encode(
    message: QueryRegisteredReactionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subspaceId !== "") {
      writer.uint32(10).string(message.subspaceId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRegisteredReactionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredReactionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.string();
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

  fromJSON(object: any): QueryRegisteredReactionsRequest {
    return {
      subspaceId: isSet(object.subspaceId) ? String(object.subspaceId) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryRegisteredReactionsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = message.subspaceId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredReactionsRequest>, I>>(
    object: I
  ): QueryRegisteredReactionsRequest {
    const message = createBaseQueryRegisteredReactionsRequest();
    message.subspaceId = object.subspaceId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryRegisteredReactionsResponse(): QueryRegisteredReactionsResponse {
  return { reactions: [], pagination: undefined };
}

export const QueryRegisteredReactionsResponse = {
  encode(
    message: QueryRegisteredReactionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.reactions) {
      RegisteredReaction.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryRegisteredReactionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredReactionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reactions.push(
            RegisteredReaction.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryRegisteredReactionsResponse {
    return {
      reactions: Array.isArray(object?.reactions)
        ? object.reactions.map((e: any) => RegisteredReaction.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryRegisteredReactionsResponse): unknown {
    const obj: any = {};
    if (message.reactions) {
      obj.reactions = message.reactions.map((e) =>
        e ? RegisteredReaction.toJSON(e) : undefined
      );
    } else {
      obj.reactions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryRegisteredReactionsResponse>, I>
  >(object: I): QueryRegisteredReactionsResponse {
    const message = createBaseQueryRegisteredReactionsResponse();
    message.reactions =
      object.reactions?.map((e) => RegisteredReaction.fromPartial(e)) || [];
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

function createBaseQueryReportsRequest(): QueryReportsRequest {
  return { postId: "" };
}

export const QueryReportsRequest = {
  encode(
    message: QueryReportsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.postId !== "") {
      writer.uint32(10).string(message.postId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReportsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReportsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryReportsRequest {
    return {
      postId: isSet(object.postId) ? String(object.postId) : "",
    };
  },

  toJSON(message: QueryReportsRequest): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryReportsRequest>, I>>(
    object: I
  ): QueryReportsRequest {
    const message = createBaseQueryReportsRequest();
    message.postId = object.postId ?? "";
    return message;
  },
};

function createBaseQueryReportsResponse(): QueryReportsResponse {
  return { reports: [] };
}

export const QueryReportsResponse = {
  encode(
    message: QueryReportsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.reports) {
      Report.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryReportsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReportsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reports.push(Report.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryReportsResponse {
    return {
      reports: Array.isArray(object?.reports)
        ? object.reports.map((e: any) => Report.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryReportsResponse): unknown {
    const obj: any = {};
    if (message.reports) {
      obj.reports = message.reports.map((e) =>
        e ? Report.toJSON(e) : undefined
      );
    } else {
      obj.reports = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryReportsResponse>, I>>(
    object: I
  ): QueryReportsResponse {
    const message = createBaseQueryReportsResponse();
    message.reports = object.reports?.map((e) => Report.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryPostReactionsRequest(): QueryPostReactionsRequest {
  return { postId: "", pagination: undefined };
}

export const QueryPostReactionsRequest = {
  encode(
    message: QueryPostReactionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.postId !== "") {
      writer.uint32(10).string(message.postId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPostReactionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostReactionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string();
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

  fromJSON(object: any): QueryPostReactionsRequest {
    return {
      postId: isSet(object.postId) ? String(object.postId) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPostReactionsRequest): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPostReactionsRequest>, I>>(
    object: I
  ): QueryPostReactionsRequest {
    const message = createBaseQueryPostReactionsRequest();
    message.postId = object.postId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryPostReactionsResponse(): QueryPostReactionsResponse {
  return { reactions: [], pagination: undefined };
}

export const QueryPostReactionsResponse = {
  encode(
    message: QueryPostReactionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.reactions) {
      PostReaction.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryPostReactionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostReactionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reactions.push(PostReaction.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryPostReactionsResponse {
    return {
      reactions: Array.isArray(object?.reactions)
        ? object.reactions.map((e: any) => PostReaction.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPostReactionsResponse): unknown {
    const obj: any = {};
    if (message.reactions) {
      obj.reactions = message.reactions.map((e) =>
        e ? PostReaction.toJSON(e) : undefined
      );
    } else {
      obj.reactions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPostReactionsResponse>, I>>(
    object: I
  ): QueryPostReactionsResponse {
    const message = createBaseQueryPostReactionsResponse();
    message.reactions =
      object.reactions?.map((e) => PostReaction.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryPostCommentsRequest(): QueryPostCommentsRequest {
  return { postId: "", pagination: undefined };
}

export const QueryPostCommentsRequest = {
  encode(
    message: QueryPostCommentsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.postId !== "") {
      writer.uint32(10).string(message.postId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPostCommentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostCommentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string();
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

  fromJSON(object: any): QueryPostCommentsRequest {
    return {
      postId: isSet(object.postId) ? String(object.postId) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPostCommentsRequest): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPostCommentsRequest>, I>>(
    object: I
  ): QueryPostCommentsRequest {
    const message = createBaseQueryPostCommentsRequest();
    message.postId = object.postId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryPostCommentsResponse(): QueryPostCommentsResponse {
  return { comments: [], pagination: undefined };
}

export const QueryPostCommentsResponse = {
  encode(
    message: QueryPostCommentsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.comments) {
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
  ): QueryPostCommentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostCommentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.comments.push(Post.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryPostCommentsResponse {
    return {
      comments: Array.isArray(object?.comments)
        ? object.comments.map((e: any) => Post.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPostCommentsResponse): unknown {
    const obj: any = {};
    if (message.comments) {
      obj.comments = message.comments.map((e) =>
        e ? Post.toJSON(e) : undefined
      );
    } else {
      obj.comments = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPostCommentsResponse>, I>>(
    object: I
  ): QueryPostCommentsResponse {
    const message = createBaseQueryPostCommentsResponse();
    message.comments = object.comments?.map((e) => Post.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Posts queries all the stored posts */
  Posts(request: QueryPostsRequest): Promise<QueryPostsResponse>;
  /** Post queries a specific post */
  Post(request: QueryPostRequest): Promise<QueryPostResponse>;
  /** Reports queries the reports for the post having the given id */
  Reports(request: QueryReportsRequest): Promise<QueryReportsResponse>;
  /** UserAnswers queries the user answers of the post having a specific id */
  UserAnswers(
    request: QueryUserAnswersRequest
  ): Promise<QueryUserAnswersResponse>;
  /** RegisteredReactions queries all the registered reactions */
  RegisteredReactions(
    request: QueryRegisteredReactionsRequest
  ): Promise<QueryRegisteredReactionsResponse>;
  /** Params queries the posts module params */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** PostComments queries the comments of the post having the given id */
  PostComments(
    request: QueryPostCommentsRequest
  ): Promise<QueryPostCommentsResponse>;
  /** PostReactions queries all the reactions of the post having the given id */
  PostReactions(
    request: QueryPostReactionsRequest
  ): Promise<QueryPostReactionsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Posts = this.Posts.bind(this);
    this.Post = this.Post.bind(this);
    this.Reports = this.Reports.bind(this);
    this.UserAnswers = this.UserAnswers.bind(this);
    this.RegisteredReactions = this.RegisteredReactions.bind(this);
    this.Params = this.Params.bind(this);
    this.PostComments = this.PostComments.bind(this);
    this.PostReactions = this.PostReactions.bind(this);
  }
  Posts(request: QueryPostsRequest): Promise<QueryPostsResponse> {
    const data = QueryPostsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v1beta1.Query",
      "Posts",
      data
    );
    return promise.then((data) =>
      QueryPostsResponse.decode(new _m0.Reader(data))
    );
  }

  Post(request: QueryPostRequest): Promise<QueryPostResponse> {
    const data = QueryPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v1beta1.Query",
      "Post",
      data
    );
    return promise.then((data) =>
      QueryPostResponse.decode(new _m0.Reader(data))
    );
  }

  Reports(request: QueryReportsRequest): Promise<QueryReportsResponse> {
    const data = QueryReportsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v1beta1.Query",
      "Reports",
      data
    );
    return promise.then((data) =>
      QueryReportsResponse.decode(new _m0.Reader(data))
    );
  }

  UserAnswers(
    request: QueryUserAnswersRequest
  ): Promise<QueryUserAnswersResponse> {
    const data = QueryUserAnswersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v1beta1.Query",
      "UserAnswers",
      data
    );
    return promise.then((data) =>
      QueryUserAnswersResponse.decode(new _m0.Reader(data))
    );
  }

  RegisteredReactions(
    request: QueryRegisteredReactionsRequest
  ): Promise<QueryRegisteredReactionsResponse> {
    const data = QueryRegisteredReactionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v1beta1.Query",
      "RegisteredReactions",
      data
    );
    return promise.then((data) =>
      QueryRegisteredReactionsResponse.decode(new _m0.Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v1beta1.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  PostComments(
    request: QueryPostCommentsRequest
  ): Promise<QueryPostCommentsResponse> {
    const data = QueryPostCommentsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v1beta1.Query",
      "PostComments",
      data
    );
    return promise.then((data) =>
      QueryPostCommentsResponse.decode(new _m0.Reader(data))
    );
  }

  PostReactions(
    request: QueryPostReactionsRequest
  ): Promise<QueryPostReactionsResponse> {
    const data = QueryPostReactionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.posts.v1beta1.Query",
      "PostReactions",
      data
    );
    return promise.then((data) =>
      QueryPostReactionsResponse.decode(new _m0.Reader(data))
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
