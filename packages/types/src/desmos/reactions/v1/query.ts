/* eslint-disable */
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import {
  Reaction,
  RegisteredReaction,
  SubspaceReactionsParams,
} from "./models";
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.reactions.v1";
/** QueryReactionsRequest is the request type for the Query/Reactions RPC method */
export interface QueryReactionsRequest {
  /** Id of the subspace that contains the post to query the reactions for */
  subspaceId: Long;
  /** Post id to query the reactions for */
  postId: Long;
  /**
   * (optional) User to query the reactions for.
   * This is going to be used only if a post id is specified as well.
   */
  user: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryReactionsResponse is the response type for the Query/Reactions RPC
 * method
 */
export interface QueryReactionsResponse {
  reactions: Reaction[];
  pagination?: PageResponse;
}
/**
 * QueryReactionRequest is the request type for the Query/ReactionRequest RPC
 * method
 */
export interface QueryReactionRequest {
  /** Id of the subspace that contains the post to query the reactions for */
  subspaceId: Long;
  /** Post id to query the reactions for */
  postId: Long;
  /** Id of the reaction to query */
  reactionId: number;
}
/**
 * QueryReactionResponse is the response type for the Query/Reaction RPC
 * method
 */
export interface QueryReactionResponse {
  reaction?: Reaction;
}
/**
 * QueryRegisteredReactionsRequest is the request type for the
 * Query/RegisteredReactions RPC method
 */
export interface QueryRegisteredReactionsRequest {
  /** Id of the subspace to query the registered reactions for */
  subspaceId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/**
 * QueryRegisteredReactionsResponse is the response type for the
 * Query/RegisteredReactions RPC method
 */
export interface QueryRegisteredReactionsResponse {
  registeredReactions: RegisteredReaction[];
  pagination?: PageResponse;
}
/**
 * QueryRegisteredReactionRequest is the request type for the
 * Query/RegisteredReaction RPC method
 */
export interface QueryRegisteredReactionRequest {
  /** Id of the subspace to query the registered reactions for */
  subspaceId: Long;
  /** Id of the registered reaction to query for */
  reactionId: number;
}
/**
 * QueryRegisteredReactionResponse is the response type for the
 * Query/RegisteredReaction RPC method
 */
export interface QueryRegisteredReactionResponse {
  registeredReaction?: RegisteredReaction;
}
/**
 * QueryReactionsParamsRequest is the request type for the Query/ReactionsParams
 * RPC method
 */
export interface QueryReactionsParamsRequest {
  /** Id of the subspace for which to query the params */
  subspaceId: Long;
}
/**
 * QueryReactionsParamsResponse is the response type for the
 * Query/ReactionsParam RPC method
 */
export interface QueryReactionsParamsResponse {
  params?: SubspaceReactionsParams;
}
function createBaseQueryReactionsRequest(): QueryReactionsRequest {
  return {
    subspaceId: Long.UZERO,
    postId: Long.UZERO,
    user: "",
    pagination: undefined,
  };
}
export const QueryReactionsRequest = {
  encode(
    message: QueryReactionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (!message.postId.isZero()) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryReactionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReactionsRequest();
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
          message.user = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryReactionsRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
      user: isSet(object.user) ? String(object.user) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryReactionsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    message.user !== undefined && (obj.user = message.user);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryReactionsRequest>, I>>(
    object: I
  ): QueryReactionsRequest {
    const message = createBaseQueryReactionsRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.postId =
      object.postId !== undefined && object.postId !== null
        ? Long.fromValue(object.postId)
        : Long.UZERO;
    message.user = object.user ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};
function createBaseQueryReactionsResponse(): QueryReactionsResponse {
  return {
    reactions: [],
    pagination: undefined,
  };
}
export const QueryReactionsResponse = {
  encode(
    message: QueryReactionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.reactions) {
      Reaction.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryReactionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReactionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reactions.push(Reaction.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryReactionsResponse {
    return {
      reactions: Array.isArray(object?.reactions)
        ? object.reactions.map((e: any) => Reaction.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryReactionsResponse): unknown {
    const obj: any = {};
    if (message.reactions) {
      obj.reactions = message.reactions.map((e) =>
        e ? Reaction.toJSON(e) : undefined
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
  fromPartial<I extends Exact<DeepPartial<QueryReactionsResponse>, I>>(
    object: I
  ): QueryReactionsResponse {
    const message = createBaseQueryReactionsResponse();
    message.reactions =
      object.reactions?.map((e) => Reaction.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};
function createBaseQueryReactionRequest(): QueryReactionRequest {
  return {
    subspaceId: Long.UZERO,
    postId: Long.UZERO,
    reactionId: 0,
  };
}
export const QueryReactionRequest = {
  encode(
    message: QueryReactionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (!message.postId.isZero()) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.reactionId !== 0) {
      writer.uint32(24).uint32(message.reactionId);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryReactionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReactionRequest();
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
          message.reactionId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryReactionRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      postId: isSet(object.postId) ? Long.fromValue(object.postId) : Long.UZERO,
      reactionId: isSet(object.reactionId) ? Number(object.reactionId) : 0,
    };
  },
  toJSON(message: QueryReactionRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.postId !== undefined &&
      (obj.postId = (message.postId || Long.UZERO).toString());
    message.reactionId !== undefined &&
      (obj.reactionId = Math.round(message.reactionId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryReactionRequest>, I>>(
    object: I
  ): QueryReactionRequest {
    const message = createBaseQueryReactionRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.postId =
      object.postId !== undefined && object.postId !== null
        ? Long.fromValue(object.postId)
        : Long.UZERO;
    message.reactionId = object.reactionId ?? 0;
    return message;
  },
};
function createBaseQueryReactionResponse(): QueryReactionResponse {
  return {
    reaction: undefined,
  };
}
export const QueryReactionResponse = {
  encode(
    message: QueryReactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.reaction !== undefined) {
      Reaction.encode(message.reaction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryReactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reaction = Reaction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryReactionResponse {
    return {
      reaction: isSet(object.reaction)
        ? Reaction.fromJSON(object.reaction)
        : undefined,
    };
  },
  toJSON(message: QueryReactionResponse): unknown {
    const obj: any = {};
    message.reaction !== undefined &&
      (obj.reaction = message.reaction
        ? Reaction.toJSON(message.reaction)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryReactionResponse>, I>>(
    object: I
  ): QueryReactionResponse {
    const message = createBaseQueryReactionResponse();
    message.reaction =
      object.reaction !== undefined && object.reaction !== null
        ? Reaction.fromPartial(object.reaction)
        : undefined;
    return message;
  },
};
function createBaseQueryRegisteredReactionsRequest(): QueryRegisteredReactionsRequest {
  return {
    subspaceId: Long.UZERO,
    pagination: undefined,
  };
}
export const QueryRegisteredReactionsRequest = {
  encode(
    message: QueryRegisteredReactionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
          message.subspaceId = reader.uint64() as Long;
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
  fromJSON(object: any): QueryRegisteredReactionsRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryRegisteredReactionsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
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
function createBaseQueryRegisteredReactionsResponse(): QueryRegisteredReactionsResponse {
  return {
    registeredReactions: [],
    pagination: undefined,
  };
}
export const QueryRegisteredReactionsResponse = {
  encode(
    message: QueryRegisteredReactionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.registeredReactions) {
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
          message.registeredReactions.push(
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
      registeredReactions: Array.isArray(object?.registeredReactions)
        ? object.registeredReactions.map((e: any) =>
            RegisteredReaction.fromJSON(e)
          )
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryRegisteredReactionsResponse): unknown {
    const obj: any = {};
    if (message.registeredReactions) {
      obj.registeredReactions = message.registeredReactions.map((e) =>
        e ? RegisteredReaction.toJSON(e) : undefined
      );
    } else {
      obj.registeredReactions = [];
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
    message.registeredReactions =
      object.registeredReactions?.map((e) =>
        RegisteredReaction.fromPartial(e)
      ) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};
function createBaseQueryRegisteredReactionRequest(): QueryRegisteredReactionRequest {
  return {
    subspaceId: Long.UZERO,
    reactionId: 0,
  };
}
export const QueryRegisteredReactionRequest = {
  encode(
    message: QueryRegisteredReactionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.reactionId !== 0) {
      writer.uint32(16).uint32(message.reactionId);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRegisteredReactionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredReactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.reactionId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRegisteredReactionRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      reactionId: isSet(object.reactionId) ? Number(object.reactionId) : 0,
    };
  },
  toJSON(message: QueryRegisteredReactionRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.reactionId !== undefined &&
      (obj.reactionId = Math.round(message.reactionId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRegisteredReactionRequest>, I>>(
    object: I
  ): QueryRegisteredReactionRequest {
    const message = createBaseQueryRegisteredReactionRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.reactionId = object.reactionId ?? 0;
    return message;
  },
};
function createBaseQueryRegisteredReactionResponse(): QueryRegisteredReactionResponse {
  return {
    registeredReaction: undefined,
  };
}
export const QueryRegisteredReactionResponse = {
  encode(
    message: QueryRegisteredReactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.registeredReaction !== undefined) {
      RegisteredReaction.encode(
        message.registeredReaction,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRegisteredReactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredReactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registeredReaction = RegisteredReaction.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRegisteredReactionResponse {
    return {
      registeredReaction: isSet(object.registeredReaction)
        ? RegisteredReaction.fromJSON(object.registeredReaction)
        : undefined,
    };
  },
  toJSON(message: QueryRegisteredReactionResponse): unknown {
    const obj: any = {};
    message.registeredReaction !== undefined &&
      (obj.registeredReaction = message.registeredReaction
        ? RegisteredReaction.toJSON(message.registeredReaction)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRegisteredReactionResponse>, I>>(
    object: I
  ): QueryRegisteredReactionResponse {
    const message = createBaseQueryRegisteredReactionResponse();
    message.registeredReaction =
      object.registeredReaction !== undefined &&
      object.registeredReaction !== null
        ? RegisteredReaction.fromPartial(object.registeredReaction)
        : undefined;
    return message;
  },
};
function createBaseQueryReactionsParamsRequest(): QueryReactionsParamsRequest {
  return {
    subspaceId: Long.UZERO,
  };
}
export const QueryReactionsParamsRequest = {
  encode(
    message: QueryReactionsParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryReactionsParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReactionsParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryReactionsParamsRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
    };
  },
  toJSON(message: QueryReactionsParamsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryReactionsParamsRequest>, I>>(
    object: I
  ): QueryReactionsParamsRequest {
    const message = createBaseQueryReactionsParamsRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    return message;
  },
};
function createBaseQueryReactionsParamsResponse(): QueryReactionsParamsResponse {
  return {
    params: undefined,
  };
}
export const QueryReactionsParamsResponse = {
  encode(
    message: QueryReactionsParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      SubspaceReactionsParams.encode(
        message.params,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryReactionsParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReactionsParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = SubspaceReactionsParams.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryReactionsParamsResponse {
    return {
      params: isSet(object.params)
        ? SubspaceReactionsParams.fromJSON(object.params)
        : undefined,
    };
  },
  toJSON(message: QueryReactionsParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params
        ? SubspaceReactionsParams.toJSON(message.params)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryReactionsParamsResponse>, I>>(
    object: I
  ): QueryReactionsParamsResponse {
    const message = createBaseQueryReactionsParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? SubspaceReactionsParams.fromPartial(object.params)
        : undefined;
    return message;
  },
};
