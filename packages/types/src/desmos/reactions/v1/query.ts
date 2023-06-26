/* eslint-disable */
import {
  PageRequest,
  PageRequestAmino,
  PageResponse,
  PageResponseAmino,
} from "../../../cosmos/base/query/v1beta1/pagination";
import {
  Reaction,
  ReactionAmino,
  RegisteredReaction,
  RegisteredReactionAmino,
  SubspaceReactionsParams,
  SubspaceReactionsParamsAmino,
} from "./models";
import { Long, isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
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
export interface QueryReactionsRequestProtoMsg {
  typeUrl: "/desmos.reactions.v1.QueryReactionsRequest";
  value: Uint8Array;
}
/** QueryReactionsRequest is the request type for the Query/Reactions RPC method */
export interface QueryReactionsRequestAmino {
  /** Id of the subspace that contains the post to query the reactions for */
  subspace_id: string;
  /** Post id to query the reactions for */
  post_id: string;
  /**
   * (optional) User to query the reactions for.
   * This is going to be used only if a post id is specified as well.
   */
  user: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryReactionsRequestAminoMsg {
  type: "/desmos.reactions.v1.QueryReactionsRequest";
  value: QueryReactionsRequestAmino;
}
/**
 * QueryReactionsResponse is the response type for the Query/Reactions RPC
 * method
 */
export interface QueryReactionsResponse {
  reactions: Reaction[];
  pagination?: PageResponse;
}
export interface QueryReactionsResponseProtoMsg {
  typeUrl: "/desmos.reactions.v1.QueryReactionsResponse";
  value: Uint8Array;
}
/**
 * QueryReactionsResponse is the response type for the Query/Reactions RPC
 * method
 */
export interface QueryReactionsResponseAmino {
  reactions: ReactionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryReactionsResponseAminoMsg {
  type: "/desmos.reactions.v1.QueryReactionsResponse";
  value: QueryReactionsResponseAmino;
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
export interface QueryReactionRequestProtoMsg {
  typeUrl: "/desmos.reactions.v1.QueryReactionRequest";
  value: Uint8Array;
}
/**
 * QueryReactionRequest is the request type for the Query/ReactionRequest RPC
 * method
 */
export interface QueryReactionRequestAmino {
  /** Id of the subspace that contains the post to query the reactions for */
  subspace_id: string;
  /** Post id to query the reactions for */
  post_id: string;
  /** Id of the reaction to query */
  reaction_id: number;
}
export interface QueryReactionRequestAminoMsg {
  type: "/desmos.reactions.v1.QueryReactionRequest";
  value: QueryReactionRequestAmino;
}
/**
 * QueryReactionResponse is the response type for the Query/Reaction RPC
 * method
 */
export interface QueryReactionResponse {
  reaction?: Reaction;
}
export interface QueryReactionResponseProtoMsg {
  typeUrl: "/desmos.reactions.v1.QueryReactionResponse";
  value: Uint8Array;
}
/**
 * QueryReactionResponse is the response type for the Query/Reaction RPC
 * method
 */
export interface QueryReactionResponseAmino {
  reaction?: ReactionAmino;
}
export interface QueryReactionResponseAminoMsg {
  type: "/desmos.reactions.v1.QueryReactionResponse";
  value: QueryReactionResponseAmino;
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
export interface QueryRegisteredReactionsRequestProtoMsg {
  typeUrl: "/desmos.reactions.v1.QueryRegisteredReactionsRequest";
  value: Uint8Array;
}
/**
 * QueryRegisteredReactionsRequest is the request type for the
 * Query/RegisteredReactions RPC method
 */
export interface QueryRegisteredReactionsRequestAmino {
  /** Id of the subspace to query the registered reactions for */
  subspace_id: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryRegisteredReactionsRequestAminoMsg {
  type: "/desmos.reactions.v1.QueryRegisteredReactionsRequest";
  value: QueryRegisteredReactionsRequestAmino;
}
/**
 * QueryRegisteredReactionsResponse is the response type for the
 * Query/RegisteredReactions RPC method
 */
export interface QueryRegisteredReactionsResponse {
  registeredReactions: RegisteredReaction[];
  pagination?: PageResponse;
}
export interface QueryRegisteredReactionsResponseProtoMsg {
  typeUrl: "/desmos.reactions.v1.QueryRegisteredReactionsResponse";
  value: Uint8Array;
}
/**
 * QueryRegisteredReactionsResponse is the response type for the
 * Query/RegisteredReactions RPC method
 */
export interface QueryRegisteredReactionsResponseAmino {
  registered_reactions: RegisteredReactionAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryRegisteredReactionsResponseAminoMsg {
  type: "/desmos.reactions.v1.QueryRegisteredReactionsResponse";
  value: QueryRegisteredReactionsResponseAmino;
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
export interface QueryRegisteredReactionRequestProtoMsg {
  typeUrl: "/desmos.reactions.v1.QueryRegisteredReactionRequest";
  value: Uint8Array;
}
/**
 * QueryRegisteredReactionRequest is the request type for the
 * Query/RegisteredReaction RPC method
 */
export interface QueryRegisteredReactionRequestAmino {
  /** Id of the subspace to query the registered reactions for */
  subspace_id: string;
  /** Id of the registered reaction to query for */
  reaction_id: number;
}
export interface QueryRegisteredReactionRequestAminoMsg {
  type: "/desmos.reactions.v1.QueryRegisteredReactionRequest";
  value: QueryRegisteredReactionRequestAmino;
}
/**
 * QueryRegisteredReactionResponse is the response type for the
 * Query/RegisteredReaction RPC method
 */
export interface QueryRegisteredReactionResponse {
  registeredReaction?: RegisteredReaction;
}
export interface QueryRegisteredReactionResponseProtoMsg {
  typeUrl: "/desmos.reactions.v1.QueryRegisteredReactionResponse";
  value: Uint8Array;
}
/**
 * QueryRegisteredReactionResponse is the response type for the
 * Query/RegisteredReaction RPC method
 */
export interface QueryRegisteredReactionResponseAmino {
  registered_reaction?: RegisteredReactionAmino;
}
export interface QueryRegisteredReactionResponseAminoMsg {
  type: "/desmos.reactions.v1.QueryRegisteredReactionResponse";
  value: QueryRegisteredReactionResponseAmino;
}
/**
 * QueryReactionsParamsRequest is the request type for the Query/ReactionsParams
 * RPC method
 */
export interface QueryReactionsParamsRequest {
  /** Id of the subspace for which to query the params */
  subspaceId: Long;
}
export interface QueryReactionsParamsRequestProtoMsg {
  typeUrl: "/desmos.reactions.v1.QueryReactionsParamsRequest";
  value: Uint8Array;
}
/**
 * QueryReactionsParamsRequest is the request type for the Query/ReactionsParams
 * RPC method
 */
export interface QueryReactionsParamsRequestAmino {
  /** Id of the subspace for which to query the params */
  subspace_id: string;
}
export interface QueryReactionsParamsRequestAminoMsg {
  type: "/desmos.reactions.v1.QueryReactionsParamsRequest";
  value: QueryReactionsParamsRequestAmino;
}
/**
 * QueryReactionsParamsResponse is the response type for the
 * Query/ReactionsParam RPC method
 */
export interface QueryReactionsParamsResponse {
  params?: SubspaceReactionsParams;
}
export interface QueryReactionsParamsResponseProtoMsg {
  typeUrl: "/desmos.reactions.v1.QueryReactionsParamsResponse";
  value: Uint8Array;
}
/**
 * QueryReactionsParamsResponse is the response type for the
 * Query/ReactionsParam RPC method
 */
export interface QueryReactionsParamsResponseAmino {
  params?: SubspaceReactionsParamsAmino;
}
export interface QueryReactionsParamsResponseAminoMsg {
  type: "/desmos.reactions.v1.QueryReactionsParamsResponse";
  value: QueryReactionsParamsResponseAmino;
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
  fromAmino(object: QueryReactionsRequestAmino): QueryReactionsRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      postId: Long.fromString(object.post_id),
      user: object.user,
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryReactionsRequest): QueryReactionsRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    obj.user = message.user;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReactionsRequestAminoMsg): QueryReactionsRequest {
    return QueryReactionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReactionsRequestProtoMsg): QueryReactionsRequest {
    return QueryReactionsRequest.decode(message.value);
  },
  toProto(message: QueryReactionsRequest): Uint8Array {
    return QueryReactionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReactionsRequest): QueryReactionsRequestProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.QueryReactionsRequest",
      value: QueryReactionsRequest.encode(message).finish(),
    };
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
  fromAmino(object: QueryReactionsResponseAmino): QueryReactionsResponse {
    return {
      reactions: Array.isArray(object?.reactions)
        ? object.reactions.map((e: any) => Reaction.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryReactionsResponse): QueryReactionsResponseAmino {
    const obj: any = {};
    if (message.reactions) {
      obj.reactions = message.reactions.map((e) =>
        e ? Reaction.toAmino(e) : undefined
      );
    } else {
      obj.reactions = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReactionsResponseAminoMsg): QueryReactionsResponse {
    return QueryReactionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryReactionsResponseProtoMsg
  ): QueryReactionsResponse {
    return QueryReactionsResponse.decode(message.value);
  },
  toProto(message: QueryReactionsResponse): Uint8Array {
    return QueryReactionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReactionsResponse): QueryReactionsResponseProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.QueryReactionsResponse",
      value: QueryReactionsResponse.encode(message).finish(),
    };
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
  fromAmino(object: QueryReactionRequestAmino): QueryReactionRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      postId: Long.fromString(object.post_id),
      reactionId: object.reaction_id,
    };
  },
  toAmino(message: QueryReactionRequest): QueryReactionRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.post_id = message.postId ? message.postId.toString() : undefined;
    obj.reaction_id = message.reactionId;
    return obj;
  },
  fromAminoMsg(object: QueryReactionRequestAminoMsg): QueryReactionRequest {
    return QueryReactionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReactionRequestProtoMsg): QueryReactionRequest {
    return QueryReactionRequest.decode(message.value);
  },
  toProto(message: QueryReactionRequest): Uint8Array {
    return QueryReactionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReactionRequest): QueryReactionRequestProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.QueryReactionRequest",
      value: QueryReactionRequest.encode(message).finish(),
    };
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
  fromAmino(object: QueryReactionResponseAmino): QueryReactionResponse {
    return {
      reaction: object?.reaction
        ? Reaction.fromAmino(object.reaction)
        : undefined,
    };
  },
  toAmino(message: QueryReactionResponse): QueryReactionResponseAmino {
    const obj: any = {};
    obj.reaction = message.reaction
      ? Reaction.toAmino(message.reaction)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReactionResponseAminoMsg): QueryReactionResponse {
    return QueryReactionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReactionResponseProtoMsg): QueryReactionResponse {
    return QueryReactionResponse.decode(message.value);
  },
  toProto(message: QueryReactionResponse): Uint8Array {
    return QueryReactionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReactionResponse): QueryReactionResponseProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.QueryReactionResponse",
      value: QueryReactionResponse.encode(message).finish(),
    };
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
  fromAmino(
    object: QueryRegisteredReactionsRequestAmino
  ): QueryRegisteredReactionsRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryRegisteredReactionsRequest
  ): QueryRegisteredReactionsRequestAmino {
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
    object: QueryRegisteredReactionsRequestAminoMsg
  ): QueryRegisteredReactionsRequest {
    return QueryRegisteredReactionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryRegisteredReactionsRequestProtoMsg
  ): QueryRegisteredReactionsRequest {
    return QueryRegisteredReactionsRequest.decode(message.value);
  },
  toProto(message: QueryRegisteredReactionsRequest): Uint8Array {
    return QueryRegisteredReactionsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryRegisteredReactionsRequest
  ): QueryRegisteredReactionsRequestProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.QueryRegisteredReactionsRequest",
      value: QueryRegisteredReactionsRequest.encode(message).finish(),
    };
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
  fromAmino(
    object: QueryRegisteredReactionsResponseAmino
  ): QueryRegisteredReactionsResponse {
    return {
      registeredReactions: Array.isArray(object?.registered_reactions)
        ? object.registered_reactions.map((e: any) =>
            RegisteredReaction.fromAmino(e)
          )
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryRegisteredReactionsResponse
  ): QueryRegisteredReactionsResponseAmino {
    const obj: any = {};
    if (message.registeredReactions) {
      obj.registered_reactions = message.registeredReactions.map((e) =>
        e ? RegisteredReaction.toAmino(e) : undefined
      );
    } else {
      obj.registered_reactions = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryRegisteredReactionsResponseAminoMsg
  ): QueryRegisteredReactionsResponse {
    return QueryRegisteredReactionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryRegisteredReactionsResponseProtoMsg
  ): QueryRegisteredReactionsResponse {
    return QueryRegisteredReactionsResponse.decode(message.value);
  },
  toProto(message: QueryRegisteredReactionsResponse): Uint8Array {
    return QueryRegisteredReactionsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryRegisteredReactionsResponse
  ): QueryRegisteredReactionsResponseProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.QueryRegisteredReactionsResponse",
      value: QueryRegisteredReactionsResponse.encode(message).finish(),
    };
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
  fromAmino(
    object: QueryRegisteredReactionRequestAmino
  ): QueryRegisteredReactionRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      reactionId: object.reaction_id,
    };
  },
  toAmino(
    message: QueryRegisteredReactionRequest
  ): QueryRegisteredReactionRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.reaction_id = message.reactionId;
    return obj;
  },
  fromAminoMsg(
    object: QueryRegisteredReactionRequestAminoMsg
  ): QueryRegisteredReactionRequest {
    return QueryRegisteredReactionRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryRegisteredReactionRequestProtoMsg
  ): QueryRegisteredReactionRequest {
    return QueryRegisteredReactionRequest.decode(message.value);
  },
  toProto(message: QueryRegisteredReactionRequest): Uint8Array {
    return QueryRegisteredReactionRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryRegisteredReactionRequest
  ): QueryRegisteredReactionRequestProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.QueryRegisteredReactionRequest",
      value: QueryRegisteredReactionRequest.encode(message).finish(),
    };
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
  fromAmino(
    object: QueryRegisteredReactionResponseAmino
  ): QueryRegisteredReactionResponse {
    return {
      registeredReaction: object?.registered_reaction
        ? RegisteredReaction.fromAmino(object.registered_reaction)
        : undefined,
    };
  },
  toAmino(
    message: QueryRegisteredReactionResponse
  ): QueryRegisteredReactionResponseAmino {
    const obj: any = {};
    obj.registered_reaction = message.registeredReaction
      ? RegisteredReaction.toAmino(message.registeredReaction)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryRegisteredReactionResponseAminoMsg
  ): QueryRegisteredReactionResponse {
    return QueryRegisteredReactionResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryRegisteredReactionResponseProtoMsg
  ): QueryRegisteredReactionResponse {
    return QueryRegisteredReactionResponse.decode(message.value);
  },
  toProto(message: QueryRegisteredReactionResponse): Uint8Array {
    return QueryRegisteredReactionResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryRegisteredReactionResponse
  ): QueryRegisteredReactionResponseProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.QueryRegisteredReactionResponse",
      value: QueryRegisteredReactionResponse.encode(message).finish(),
    };
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
  fromAmino(
    object: QueryReactionsParamsRequestAmino
  ): QueryReactionsParamsRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
    };
  },
  toAmino(
    message: QueryReactionsParamsRequest
  ): QueryReactionsParamsRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryReactionsParamsRequestAminoMsg
  ): QueryReactionsParamsRequest {
    return QueryReactionsParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryReactionsParamsRequestProtoMsg
  ): QueryReactionsParamsRequest {
    return QueryReactionsParamsRequest.decode(message.value);
  },
  toProto(message: QueryReactionsParamsRequest): Uint8Array {
    return QueryReactionsParamsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryReactionsParamsRequest
  ): QueryReactionsParamsRequestProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.QueryReactionsParamsRequest",
      value: QueryReactionsParamsRequest.encode(message).finish(),
    };
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
  fromAmino(
    object: QueryReactionsParamsResponseAmino
  ): QueryReactionsParamsResponse {
    return {
      params: object?.params
        ? SubspaceReactionsParams.fromAmino(object.params)
        : undefined,
    };
  },
  toAmino(
    message: QueryReactionsParamsResponse
  ): QueryReactionsParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params
      ? SubspaceReactionsParams.toAmino(message.params)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryReactionsParamsResponseAminoMsg
  ): QueryReactionsParamsResponse {
    return QueryReactionsParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryReactionsParamsResponseProtoMsg
  ): QueryReactionsParamsResponse {
    return QueryReactionsParamsResponse.decode(message.value);
  },
  toProto(message: QueryReactionsParamsResponse): Uint8Array {
    return QueryReactionsParamsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryReactionsParamsResponse
  ): QueryReactionsParamsResponseProtoMsg {
    return {
      typeUrl: "/desmos.reactions.v1.QueryReactionsParamsResponse",
      value: QueryReactionsParamsResponse.encode(message).finish(),
    };
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Reactions allows to query the reactions for a given post */
  Reactions(request: QueryReactionsRequest): Promise<QueryReactionsResponse>;
  /** Reaction allows to query the reaction with the given id */
  Reaction(request: QueryReactionRequest): Promise<QueryReactionResponse>;
  /** RegisteredReactions allows to query the registered reaction of a subspace */
  RegisteredReactions(
    request: QueryRegisteredReactionsRequest
  ): Promise<QueryRegisteredReactionsResponse>;
  /** RegisteredReaction allows to query the registered reaction of a subspace */
  RegisteredReaction(
    request: QueryRegisteredReactionRequest
  ): Promise<QueryRegisteredReactionResponse>;
  /** ReactionsParams allows to query the reaction params of a subspace */
  ReactionsParams(
    request: QueryReactionsParamsRequest
  ): Promise<QueryReactionsParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Reactions = this.Reactions.bind(this);
    this.Reaction = this.Reaction.bind(this);
    this.RegisteredReactions = this.RegisteredReactions.bind(this);
    this.RegisteredReaction = this.RegisteredReaction.bind(this);
    this.ReactionsParams = this.ReactionsParams.bind(this);
  }
  Reactions(request: QueryReactionsRequest): Promise<QueryReactionsResponse> {
    const data = QueryReactionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.reactions.v1.Query",
      "Reactions",
      data
    );
    return promise.then((data) =>
      QueryReactionsResponse.decode(new _m0.Reader(data))
    );
  }
  Reaction(request: QueryReactionRequest): Promise<QueryReactionResponse> {
    const data = QueryReactionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.reactions.v1.Query",
      "Reaction",
      data
    );
    return promise.then((data) =>
      QueryReactionResponse.decode(new _m0.Reader(data))
    );
  }
  RegisteredReactions(
    request: QueryRegisteredReactionsRequest
  ): Promise<QueryRegisteredReactionsResponse> {
    const data = QueryRegisteredReactionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.reactions.v1.Query",
      "RegisteredReactions",
      data
    );
    return promise.then((data) =>
      QueryRegisteredReactionsResponse.decode(new _m0.Reader(data))
    );
  }
  RegisteredReaction(
    request: QueryRegisteredReactionRequest
  ): Promise<QueryRegisteredReactionResponse> {
    const data = QueryRegisteredReactionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.reactions.v1.Query",
      "RegisteredReaction",
      data
    );
    return promise.then((data) =>
      QueryRegisteredReactionResponse.decode(new _m0.Reader(data))
    );
  }
  ReactionsParams(
    request: QueryReactionsParamsRequest
  ): Promise<QueryReactionsParamsResponse> {
    const data = QueryReactionsParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.reactions.v1.Query",
      "ReactionsParams",
      data
    );
    return promise.then((data) =>
      QueryReactionsParamsResponse.decode(new _m0.Reader(data))
    );
  }
}
