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
 * QueryUserRelationshipsRequest is the request type for the
 * Query/UserRelationships RPC method.
 */
export interface QueryUserRelationshipsRequest {
  /** address of the user to query the relationships for */
  user: string;
  /** subspace to query the relationships for */
  subspaceId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryUserRelationshipsResponse is the response type for the
 * Query/UserRelationships RPC method.
 */
export interface QueryUserRelationshipsResponse {
  user: string;
  /**
   * relationships represent the list of all the relationships for the queried
   * user
   */
  relationships: Relationship[];
  /** pagination defines an optional pagination for the request. */
  pagination?: PageResponse;
}

/**
 * QueryUserBlocksRequest is the request type for the Query/UserBlocks RPC
 * endpoint
 */
export interface QueryUserBlocksRequest {
  /** address of the user to query the blocks for */
  user: string;
  subspaceId: string;
  pagination?: PageRequest;
}

/**
 * QueryUserBlocksResponse is the response type for the Query/UserBlocks RPC
 * method.
 */
export interface QueryUserBlocksResponse {
  /** blocks represent the list of all the blocks for the queried user */
  blocks: UserBlock[];
  pagination?: PageResponse;
}

const baseQueryUserRelationshipsRequest: object = { user: "", subspaceId: "" };

export const QueryUserRelationshipsRequest = {
  encode(
    message: QueryUserRelationshipsRequest,
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
  ): QueryUserRelationshipsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUserRelationshipsRequest,
    } as QueryUserRelationshipsRequest;
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

  fromJSON(object: any): QueryUserRelationshipsRequest {
    const message = {
      ...baseQueryUserRelationshipsRequest,
    } as QueryUserRelationshipsRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user);
    } else {
      message.user = "";
    }
    if (object.subspaceId !== undefined && object.subspaceId !== null) {
      message.subspaceId = String(object.subspaceId);
    } else {
      message.subspaceId = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryUserRelationshipsRequest): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    message.subspaceId !== undefined && (obj.subspaceId = message.subspaceId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUserRelationshipsRequest>
  ): QueryUserRelationshipsRequest {
    const message = {
      ...baseQueryUserRelationshipsRequest,
    } as QueryUserRelationshipsRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    } else {
      message.user = "";
    }
    if (object.subspaceId !== undefined && object.subspaceId !== null) {
      message.subspaceId = object.subspaceId;
    } else {
      message.subspaceId = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryUserRelationshipsResponse: object = { user: "" };

export const QueryUserRelationshipsResponse = {
  encode(
    message: QueryUserRelationshipsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    for (const v of message.relationships) {
      Relationship.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserRelationshipsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUserRelationshipsResponse,
    } as QueryUserRelationshipsResponse;
    message.relationships = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        case 2:
          message.relationships.push(
            Relationship.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserRelationshipsResponse {
    const message = {
      ...baseQueryUserRelationshipsResponse,
    } as QueryUserRelationshipsResponse;
    message.relationships = [];
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user);
    } else {
      message.user = "";
    }
    if (object.relationships !== undefined && object.relationships !== null) {
      for (const e of object.relationships) {
        message.relationships.push(Relationship.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryUserRelationshipsResponse): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
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

  fromPartial(
    object: DeepPartial<QueryUserRelationshipsResponse>
  ): QueryUserRelationshipsResponse {
    const message = {
      ...baseQueryUserRelationshipsResponse,
    } as QueryUserRelationshipsResponse;
    message.relationships = [];
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    } else {
      message.user = "";
    }
    if (object.relationships !== undefined && object.relationships !== null) {
      for (const e of object.relationships) {
        message.relationships.push(Relationship.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryUserBlocksRequest: object = { user: "", subspaceId: "" };

export const QueryUserBlocksRequest = {
  encode(
    message: QueryUserBlocksRequest,
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
  ): QueryUserBlocksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryUserBlocksRequest } as QueryUserBlocksRequest;
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

  fromJSON(object: any): QueryUserBlocksRequest {
    const message = { ...baseQueryUserBlocksRequest } as QueryUserBlocksRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user);
    } else {
      message.user = "";
    }
    if (object.subspaceId !== undefined && object.subspaceId !== null) {
      message.subspaceId = String(object.subspaceId);
    } else {
      message.subspaceId = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryUserBlocksRequest): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    message.subspaceId !== undefined && (obj.subspaceId = message.subspaceId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUserBlocksRequest>
  ): QueryUserBlocksRequest {
    const message = { ...baseQueryUserBlocksRequest } as QueryUserBlocksRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    } else {
      message.user = "";
    }
    if (object.subspaceId !== undefined && object.subspaceId !== null) {
      message.subspaceId = object.subspaceId;
    } else {
      message.subspaceId = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryUserBlocksResponse: object = {};

export const QueryUserBlocksResponse = {
  encode(
    message: QueryUserBlocksResponse,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserBlocksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUserBlocksResponse,
    } as QueryUserBlocksResponse;
    message.blocks = [];
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

  fromJSON(object: any): QueryUserBlocksResponse {
    const message = {
      ...baseQueryUserBlocksResponse,
    } as QueryUserBlocksResponse;
    message.blocks = [];
    if (object.blocks !== undefined && object.blocks !== null) {
      for (const e of object.blocks) {
        message.blocks.push(UserBlock.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryUserBlocksResponse): unknown {
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

  fromPartial(
    object: DeepPartial<QueryUserBlocksResponse>
  ): QueryUserBlocksResponse {
    const message = {
      ...baseQueryUserBlocksResponse,
    } as QueryUserBlocksResponse;
    message.blocks = [];
    if (object.blocks !== undefined && object.blocks !== null) {
      for (const e of object.blocks) {
        message.blocks.push(UserBlock.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
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
  | undefined
  | Long;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
