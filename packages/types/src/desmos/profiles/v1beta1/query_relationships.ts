/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import {
  Relationship,
  UserBlock,
} from "../../../desmos/profiles/v1beta1/models_relationships";

/**
 * QueryRelationshipsRequest is the request type for the
 * Query/Relationships RPC method.
 */
export interface QueryRelationshipsRequest {
  /** address of the user to query the relationships for */
  user: string;
  /** subspace to query the relationships for */
  subspaceId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryRelationshipsResponse is the response type for the
 * Query/Relationships RPC method.
 */
export interface QueryRelationshipsResponse {
  relationships: Relationship[];
  /** pagination defines an optional pagination for the request. */
  pagination?: PageResponse;
}

/**
 * QueryBlocksRequest is the request type for the Query/Blocks RPC
 * endpoint
 */
export interface QueryBlocksRequest {
  /** address of the user to query the blocks for */
  user: string;
  subspaceId: string;
  pagination?: PageRequest;
}

/**
 * QueryBlocksResponse is the response type for the Query/Blocks RPC
 * method.
 */
export interface QueryBlocksResponse {
  blocks: UserBlock[];
  pagination?: PageResponse;
}

function createBaseQueryRelationshipsRequest(): QueryRelationshipsRequest {
  return { user: "", subspaceId: "", pagination: undefined };
}

export const QueryRelationshipsRequest = {
  encode(
    message: QueryRelationshipsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.subspaceId !== "") {
      writer.uint32(18).string(message.subspaceId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
          message.user = reader.string();
          break;
        case 2:
          message.subspaceId = reader.string();
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

  fromJSON(object: any): QueryRelationshipsRequest {
    return {
      user: isSet(object.user) ? String(object.user) : "",
      subspaceId: isSet(object.subspaceId) ? String(object.subspaceId) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryRelationshipsRequest): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    message.subspaceId !== undefined && (obj.subspaceId = message.subspaceId);
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
    message.user = object.user ?? "";
    message.subspaceId = object.subspaceId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryRelationshipsResponse(): QueryRelationshipsResponse {
  return { relationships: [], pagination: undefined };
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
};

function createBaseQueryBlocksRequest(): QueryBlocksRequest {
  return { user: "", subspaceId: "", pagination: undefined };
}

export const QueryBlocksRequest = {
  encode(
    message: QueryBlocksRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.subspaceId !== "") {
      writer.uint32(18).string(message.subspaceId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
          message.user = reader.string();
          break;
        case 2:
          message.subspaceId = reader.string();
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

  fromJSON(object: any): QueryBlocksRequest {
    return {
      user: isSet(object.user) ? String(object.user) : "",
      subspaceId: isSet(object.subspaceId) ? String(object.subspaceId) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBlocksRequest): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    message.subspaceId !== undefined && (obj.subspaceId = message.subspaceId);
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
    message.user = object.user ?? "";
    message.subspaceId = object.subspaceId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryBlocksResponse(): QueryBlocksResponse {
  return { blocks: [], pagination: undefined };
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
};

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
