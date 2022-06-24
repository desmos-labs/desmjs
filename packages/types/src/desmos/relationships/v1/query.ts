/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import {
  Relationship,
  UserBlock,
} from "../../../desmos/relationships/v1/models";

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

/**
 * QueryRelationshipsResponse is the response type for the
 * Query/Relationships RPC method.
 */
export interface QueryRelationshipsResponse {
  relationships: Relationship[];
  pagination?: PageResponse;
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

/**
 * QueryBlocksResponse is the response type for the Query/Blocks RPC
 * method.
 */
export interface QueryBlocksResponse {
  blocks: UserBlock[];
  pagination?: PageResponse;
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
        ? Long.fromString(object.subspaceId)
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
        ? Long.fromString(object.subspaceId)
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
