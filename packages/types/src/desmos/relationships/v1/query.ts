/* eslint-disable */
import {
  PageRequest,
  PageRequestAmino,
  PageResponse,
  PageResponseAmino,
} from "../../../cosmos/base/query/v1beta1/pagination";
import {
  Relationship,
  RelationshipAmino,
  UserBlock,
  UserBlockAmino,
} from "./models";
import { Long, isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.relationships.v1";
/**
 * QueryRelationshipsRequest is the request type for the
 * Query/Relationships RPC method.
 */
export interface QueryRelationshipsRequest {
  /** subspace to query the relationships for */
  subspaceId: Long;
  /** optional address of the user for which to query the relationships */
  user: string;
  /**
   * optional address of the counterparty of the relationships (used only if the
   * user is provided)
   */
  counterparty: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryRelationshipsRequestProtoMsg {
  typeUrl: "/desmos.relationships.v1.QueryRelationshipsRequest";
  value: Uint8Array;
}
/**
 * QueryRelationshipsRequest is the request type for the
 * Query/Relationships RPC method.
 */
export interface QueryRelationshipsRequestAmino {
  /** subspace to query the relationships for */
  subspace_id: string;
  /** optional address of the user for which to query the relationships */
  user: string;
  /**
   * optional address of the counterparty of the relationships (used only if the
   * user is provided)
   */
  counterparty: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryRelationshipsRequestAminoMsg {
  type: "/desmos.relationships.v1.QueryRelationshipsRequest";
  value: QueryRelationshipsRequestAmino;
}
/**
 * QueryRelationshipsResponse is the response type for the
 * Query/Relationships RPC method.
 */
export interface QueryRelationshipsResponse {
  relationships: Relationship[];
  pagination?: PageResponse;
}
export interface QueryRelationshipsResponseProtoMsg {
  typeUrl: "/desmos.relationships.v1.QueryRelationshipsResponse";
  value: Uint8Array;
}
/**
 * QueryRelationshipsResponse is the response type for the
 * Query/Relationships RPC method.
 */
export interface QueryRelationshipsResponseAmino {
  relationships: RelationshipAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryRelationshipsResponseAminoMsg {
  type: "/desmos.relationships.v1.QueryRelationshipsResponse";
  value: QueryRelationshipsResponseAmino;
}
/**
 * QueryBlocksRequest is the request type for the Query/Blocks RPC
 * endpoint
 */
export interface QueryBlocksRequest {
  /** subspace to query the blocks for */
  subspaceId: Long;
  /** optional address of the blocker to query the blocks for */
  blocker: string;
  /**
   * optional address of the blocked user to query the block for (used only if
   * the blocker is provided)
   */
  blocked: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryBlocksRequestProtoMsg {
  typeUrl: "/desmos.relationships.v1.QueryBlocksRequest";
  value: Uint8Array;
}
/**
 * QueryBlocksRequest is the request type for the Query/Blocks RPC
 * endpoint
 */
export interface QueryBlocksRequestAmino {
  /** subspace to query the blocks for */
  subspace_id: string;
  /** optional address of the blocker to query the blocks for */
  blocker: string;
  /**
   * optional address of the blocked user to query the block for (used only if
   * the blocker is provided)
   */
  blocked: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryBlocksRequestAminoMsg {
  type: "/desmos.relationships.v1.QueryBlocksRequest";
  value: QueryBlocksRequestAmino;
}
/**
 * QueryBlocksResponse is the response type for the Query/Blocks RPC
 * method.
 */
export interface QueryBlocksResponse {
  blocks: UserBlock[];
  pagination?: PageResponse;
}
export interface QueryBlocksResponseProtoMsg {
  typeUrl: "/desmos.relationships.v1.QueryBlocksResponse";
  value: Uint8Array;
}
/**
 * QueryBlocksResponse is the response type for the Query/Blocks RPC
 * method.
 */
export interface QueryBlocksResponseAmino {
  blocks: UserBlockAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryBlocksResponseAminoMsg {
  type: "/desmos.relationships.v1.QueryBlocksResponse";
  value: QueryBlocksResponseAmino;
}
function createBaseQueryRelationshipsRequest(): QueryRelationshipsRequest {
  return {
    subspaceId: Long.UZERO,
    user: "",
    counterparty: "",
    pagination: undefined,
  };
}
export const QueryRelationshipsRequest = {
  encode(
    message: QueryRelationshipsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    if (message.counterparty !== "") {
      writer.uint32(26).string(message.counterparty);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryRelationshipsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRelationshipsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.user = reader.string();
          break;
        case 3:
          message.counterparty = reader.string();
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
  fromJSON(object: any): QueryRelationshipsRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      user: isSet(object.user) ? String(object.user) : "",
      counterparty: isSet(object.counterparty)
        ? String(object.counterparty)
        : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryRelationshipsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.user !== undefined && (obj.user = message.user);
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRelationshipsRequest>, I>>(
    object: I
  ): QueryRelationshipsRequest {
    const message = createBaseQueryRelationshipsRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.user = object.user ?? "";
    message.counterparty = object.counterparty ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryRelationshipsRequestAmino): QueryRelationshipsRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      user: object.user,
      counterparty: object.counterparty,
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryRelationshipsRequest): QueryRelationshipsRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.user = message.user;
    obj.counterparty = message.counterparty;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryRelationshipsRequestAminoMsg
  ): QueryRelationshipsRequest {
    return QueryRelationshipsRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryRelationshipsRequestProtoMsg
  ): QueryRelationshipsRequest {
    return QueryRelationshipsRequest.decode(message.value);
  },
  toProto(message: QueryRelationshipsRequest): Uint8Array {
    return QueryRelationshipsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryRelationshipsRequest
  ): QueryRelationshipsRequestProtoMsg {
    return {
      typeUrl: "/desmos.relationships.v1.QueryRelationshipsRequest",
      value: QueryRelationshipsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryRelationshipsResponse(): QueryRelationshipsResponse {
  return {
    relationships: [],
    pagination: undefined,
  };
}
export const QueryRelationshipsResponse = {
  encode(
    message: QueryRelationshipsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.relationships) {
      Relationship.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryRelationshipsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRelationshipsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relationships.push(
            Relationship.decode(reader, reader.uint32())
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
  fromJSON(object: any): QueryRelationshipsResponse {
    return {
      relationships: Array.isArray(object?.relationships)
        ? object.relationships.map((e: any) => Relationship.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryRelationshipsResponse): unknown {
    const obj: any = {};
    if (message.relationships) {
      obj.relationships = message.relationships.map((e) =>
        e ? Relationship.toJSON(e) : undefined
      );
    } else {
      obj.relationships = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRelationshipsResponse>, I>>(
    object: I
  ): QueryRelationshipsResponse {
    const message = createBaseQueryRelationshipsResponse();
    message.relationships =
      object.relationships?.map((e) => Relationship.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryRelationshipsResponseAmino
  ): QueryRelationshipsResponse {
    return {
      relationships: Array.isArray(object?.relationships)
        ? object.relationships.map((e: any) => Relationship.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryRelationshipsResponse
  ): QueryRelationshipsResponseAmino {
    const obj: any = {};
    if (message.relationships) {
      obj.relationships = message.relationships.map((e) =>
        e ? Relationship.toAmino(e) : undefined
      );
    } else {
      obj.relationships = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryRelationshipsResponseAminoMsg
  ): QueryRelationshipsResponse {
    return QueryRelationshipsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryRelationshipsResponseProtoMsg
  ): QueryRelationshipsResponse {
    return QueryRelationshipsResponse.decode(message.value);
  },
  toProto(message: QueryRelationshipsResponse): Uint8Array {
    return QueryRelationshipsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryRelationshipsResponse
  ): QueryRelationshipsResponseProtoMsg {
    return {
      typeUrl: "/desmos.relationships.v1.QueryRelationshipsResponse",
      value: QueryRelationshipsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryBlocksRequest(): QueryBlocksRequest {
  return {
    subspaceId: Long.UZERO,
    blocker: "",
    blocked: "",
    pagination: undefined,
  };
}
export const QueryBlocksRequest = {
  encode(
    message: QueryBlocksRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.blocker !== "") {
      writer.uint32(18).string(message.blocker);
    }
    if (message.blocked !== "") {
      writer.uint32(26).string(message.blocked);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlocksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlocksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.blocker = reader.string();
          break;
        case 3:
          message.blocked = reader.string();
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
  fromJSON(object: any): QueryBlocksRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      blocker: isSet(object.blocker) ? String(object.blocker) : "",
      blocked: isSet(object.blocked) ? String(object.blocked) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryBlocksRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.blocker !== undefined && (obj.blocker = message.blocker);
    message.blocked !== undefined && (obj.blocked = message.blocked);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBlocksRequest>, I>>(
    object: I
  ): QueryBlocksRequest {
    const message = createBaseQueryBlocksRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.blocker = object.blocker ?? "";
    message.blocked = object.blocked ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryBlocksRequestAmino): QueryBlocksRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      blocker: object.blocker,
      blocked: object.blocked,
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryBlocksRequest): QueryBlocksRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.blocker = message.blocker;
    obj.blocked = message.blocked;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBlocksRequestAminoMsg): QueryBlocksRequest {
    return QueryBlocksRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBlocksRequestProtoMsg): QueryBlocksRequest {
    return QueryBlocksRequest.decode(message.value);
  },
  toProto(message: QueryBlocksRequest): Uint8Array {
    return QueryBlocksRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBlocksRequest): QueryBlocksRequestProtoMsg {
    return {
      typeUrl: "/desmos.relationships.v1.QueryBlocksRequest",
      value: QueryBlocksRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryBlocksResponse(): QueryBlocksResponse {
  return {
    blocks: [],
    pagination: undefined,
  };
}
export const QueryBlocksResponse = {
  encode(
    message: QueryBlocksResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.blocks) {
      UserBlock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlocksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlocksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blocks.push(UserBlock.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryBlocksResponse {
    return {
      blocks: Array.isArray(object?.blocks)
        ? object.blocks.map((e: any) => UserBlock.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryBlocksResponse): unknown {
    const obj: any = {};
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) =>
        e ? UserBlock.toJSON(e) : undefined
      );
    } else {
      obj.blocks = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBlocksResponse>, I>>(
    object: I
  ): QueryBlocksResponse {
    const message = createBaseQueryBlocksResponse();
    message.blocks = object.blocks?.map((e) => UserBlock.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryBlocksResponseAmino): QueryBlocksResponse {
    return {
      blocks: Array.isArray(object?.blocks)
        ? object.blocks.map((e: any) => UserBlock.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryBlocksResponse): QueryBlocksResponseAmino {
    const obj: any = {};
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) =>
        e ? UserBlock.toAmino(e) : undefined
      );
    } else {
      obj.blocks = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBlocksResponseAminoMsg): QueryBlocksResponse {
    return QueryBlocksResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBlocksResponseProtoMsg): QueryBlocksResponse {
    return QueryBlocksResponse.decode(message.value);
  },
  toProto(message: QueryBlocksResponse): Uint8Array {
    return QueryBlocksResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBlocksResponse): QueryBlocksResponseProtoMsg {
    return {
      typeUrl: "/desmos.relationships.v1.QueryBlocksResponse",
      value: QueryBlocksResponse.encode(message).finish(),
    };
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Relationships queries all relationships present inside a specific subspace */
  Relationships(
    request: QueryRelationshipsRequest
  ): Promise<QueryRelationshipsResponse>;
  /**
   * Blocks queries the blocks for the given user, if provided.
   * Otherwise, it queries all the stored blocks.
   */
  Blocks(request: QueryBlocksRequest): Promise<QueryBlocksResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Relationships = this.Relationships.bind(this);
    this.Blocks = this.Blocks.bind(this);
  }
  Relationships(
    request: QueryRelationshipsRequest
  ): Promise<QueryRelationshipsResponse> {
    const data = QueryRelationshipsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.relationships.v1.Query",
      "Relationships",
      data
    );
    return promise.then((data) =>
      QueryRelationshipsResponse.decode(new _m0.Reader(data))
    );
  }
  Blocks(request: QueryBlocksRequest): Promise<QueryBlocksResponse> {
    const data = QueryBlocksRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.relationships.v1.Query",
      "Blocks",
      data
    );
    return promise.then((data) =>
      QueryBlocksResponse.decode(new _m0.Reader(data))
    );
  }
}
