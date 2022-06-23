/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Subspace } from "../../../desmos/subspaces/v1beta1/subspace";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";

/** QuerySubspace is the request type for the Query/Subspace RPC method */
export interface QuerySubspaceRequest {
  subspaceId: string;
}

/** QuerySubspaceResponse is the response type for the Query/Subspace method */
export interface QuerySubspaceResponse {
  subspace?: Subspace;
}

/** QuerySubspacesRequest is the request type for the Query/Subspaces RPC method */
export interface QuerySubspacesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QuerySubspacesResponse is the response type for the Query/Subspaces RPC
 * method
 */
export interface QuerySubspacesResponse {
  subspaces: Subspace[];
  pagination?: PageResponse;
}

/**
 * QueryAdminsRequest is the request type for the Query/Admins RPC
 * method
 */
export interface QueryAdminsRequest {
  subspaceId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryAdminsResponse is the response type for the Query/Admins RPC
 * method
 */
export interface QueryAdminsResponse {
  admins: string[];
  pagination?: PageResponse;
}

/**
 * QueryRegisteredUsersRequest is the request type for the
 * Query/RegisteredUsers RPC method
 */
export interface QueryRegisteredUsersRequest {
  subspaceId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryRegisteredUsersResponse is the response type for the
 * Query/RegisteredUsers RPC method
 */
export interface QueryRegisteredUsersResponse {
  users: string[];
  pagination?: PageResponse;
}

/**
 * QueryBannedUsersRequest is the request type for the Query/BannedUsers
 * RPC method
 */
export interface QueryBannedUsersRequest {
  subspaceId: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryBannedUsersResponse is the response type for the
 * Query/BannedUsers RPC method
 */
export interface QueryBannedUsersResponse {
  users: string[];
  pagination?: PageResponse;
}

function createBaseQuerySubspaceRequest(): QuerySubspaceRequest {
  return { subspaceId: "" };
}

export const QuerySubspaceRequest = {
  encode(
    message: QuerySubspaceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subspaceId !== "") {
      writer.uint32(10).string(message.subspaceId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySubspaceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspaceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySubspaceRequest {
    return {
      subspaceId: isSet(object.subspaceId) ? String(object.subspaceId) : "",
    };
  },

  toJSON(message: QuerySubspaceRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = message.subspaceId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySubspaceRequest>, I>>(
    object: I
  ): QuerySubspaceRequest {
    const message = createBaseQuerySubspaceRequest();
    message.subspaceId = object.subspaceId ?? "";
    return message;
  },
};

function createBaseQuerySubspaceResponse(): QuerySubspaceResponse {
  return { subspace: undefined };
}

export const QuerySubspaceResponse = {
  encode(
    message: QuerySubspaceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subspace !== undefined) {
      Subspace.encode(message.subspace, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySubspaceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspaceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = Subspace.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySubspaceResponse {
    return {
      subspace: isSet(object.subspace)
        ? Subspace.fromJSON(object.subspace)
        : undefined,
    };
  },

  toJSON(message: QuerySubspaceResponse): unknown {
    const obj: any = {};
    message.subspace !== undefined &&
      (obj.subspace = message.subspace
        ? Subspace.toJSON(message.subspace)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySubspaceResponse>, I>>(
    object: I
  ): QuerySubspaceResponse {
    const message = createBaseQuerySubspaceResponse();
    message.subspace =
      object.subspace !== undefined && object.subspace !== null
        ? Subspace.fromPartial(object.subspace)
        : undefined;
    return message;
  },
};

function createBaseQuerySubspacesRequest(): QuerySubspacesRequest {
  return { pagination: undefined };
}

export const QuerySubspacesRequest = {
  encode(
    message: QuerySubspacesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySubspacesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspacesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySubspacesRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QuerySubspacesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySubspacesRequest>, I>>(
    object: I
  ): QuerySubspacesRequest {
    const message = createBaseQuerySubspacesRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQuerySubspacesResponse(): QuerySubspacesResponse {
  return { subspaces: [], pagination: undefined };
}

export const QuerySubspacesResponse = {
  encode(
    message: QuerySubspacesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.subspaces) {
      Subspace.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QuerySubspacesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspacesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaces.push(Subspace.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySubspacesResponse {
    return {
      subspaces: Array.isArray(object?.subspaces)
        ? object.subspaces.map((e: any) => Subspace.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QuerySubspacesResponse): unknown {
    const obj: any = {};
    if (message.subspaces) {
      obj.subspaces = message.subspaces.map((e) =>
        e ? Subspace.toJSON(e) : undefined
      );
    } else {
      obj.subspaces = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySubspacesResponse>, I>>(
    object: I
  ): QuerySubspacesResponse {
    const message = createBaseQuerySubspacesResponse();
    message.subspaces =
      object.subspaces?.map((e) => Subspace.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAdminsRequest(): QueryAdminsRequest {
  return { subspaceId: "", pagination: undefined };
}

export const QueryAdminsRequest = {
  encode(
    message: QueryAdminsRequest,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAdminsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAdminsRequest();
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

  fromJSON(object: any): QueryAdminsRequest {
    return {
      subspaceId: isSet(object.subspaceId) ? String(object.subspaceId) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAdminsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = message.subspaceId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAdminsRequest>, I>>(
    object: I
  ): QueryAdminsRequest {
    const message = createBaseQueryAdminsRequest();
    message.subspaceId = object.subspaceId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAdminsResponse(): QueryAdminsResponse {
  return { admins: [], pagination: undefined };
}

export const QueryAdminsResponse = {
  encode(
    message: QueryAdminsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.admins) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAdminsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAdminsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admins.push(reader.string());
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

  fromJSON(object: any): QueryAdminsResponse {
    return {
      admins: Array.isArray(object?.admins)
        ? object.admins.map((e: any) => String(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAdminsResponse): unknown {
    const obj: any = {};
    if (message.admins) {
      obj.admins = message.admins.map((e) => e);
    } else {
      obj.admins = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAdminsResponse>, I>>(
    object: I
  ): QueryAdminsResponse {
    const message = createBaseQueryAdminsResponse();
    message.admins = object.admins?.map((e) => e) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryRegisteredUsersRequest(): QueryRegisteredUsersRequest {
  return { subspaceId: "", pagination: undefined };
}

export const QueryRegisteredUsersRequest = {
  encode(
    message: QueryRegisteredUsersRequest,
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
  ): QueryRegisteredUsersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredUsersRequest();
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

  fromJSON(object: any): QueryRegisteredUsersRequest {
    return {
      subspaceId: isSet(object.subspaceId) ? String(object.subspaceId) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryRegisteredUsersRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = message.subspaceId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredUsersRequest>, I>>(
    object: I
  ): QueryRegisteredUsersRequest {
    const message = createBaseQueryRegisteredUsersRequest();
    message.subspaceId = object.subspaceId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryRegisteredUsersResponse(): QueryRegisteredUsersResponse {
  return { users: [], pagination: undefined };
}

export const QueryRegisteredUsersResponse = {
  encode(
    message: QueryRegisteredUsersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.users) {
      writer.uint32(10).string(v!);
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
  ): QueryRegisteredUsersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.users.push(reader.string());
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

  fromJSON(object: any): QueryRegisteredUsersResponse {
    return {
      users: Array.isArray(object?.users)
        ? object.users.map((e: any) => String(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryRegisteredUsersResponse): unknown {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map((e) => e);
    } else {
      obj.users = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredUsersResponse>, I>>(
    object: I
  ): QueryRegisteredUsersResponse {
    const message = createBaseQueryRegisteredUsersResponse();
    message.users = object.users?.map((e) => e) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryBannedUsersRequest(): QueryBannedUsersRequest {
  return { subspaceId: "", pagination: undefined };
}

export const QueryBannedUsersRequest = {
  encode(
    message: QueryBannedUsersRequest,
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
  ): QueryBannedUsersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBannedUsersRequest();
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

  fromJSON(object: any): QueryBannedUsersRequest {
    return {
      subspaceId: isSet(object.subspaceId) ? String(object.subspaceId) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBannedUsersRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined && (obj.subspaceId = message.subspaceId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBannedUsersRequest>, I>>(
    object: I
  ): QueryBannedUsersRequest {
    const message = createBaseQueryBannedUsersRequest();
    message.subspaceId = object.subspaceId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryBannedUsersResponse(): QueryBannedUsersResponse {
  return { users: [], pagination: undefined };
}

export const QueryBannedUsersResponse = {
  encode(
    message: QueryBannedUsersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.users) {
      writer.uint32(10).string(v!);
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
  ): QueryBannedUsersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBannedUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.users.push(reader.string());
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

  fromJSON(object: any): QueryBannedUsersResponse {
    return {
      users: Array.isArray(object?.users)
        ? object.users.map((e: any) => String(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryBannedUsersResponse): unknown {
    const obj: any = {};
    if (message.users) {
      obj.users = message.users.map((e) => e);
    } else {
      obj.users = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBannedUsersResponse>, I>>(
    object: I
  ): QueryBannedUsersResponse {
    const message = createBaseQueryBannedUsersResponse();
    message.users = object.users?.map((e) => e) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service */
export interface Query {
  /** Subspace queries all the information about the subspace with the given id */
  Subspace(request: QuerySubspaceRequest): Promise<QuerySubspaceResponse>;
  /** Admins queries all the admins of the subspace having the given id */
  Admins(request: QueryAdminsRequest): Promise<QueryAdminsResponse>;
  /**
   * RegisteredUsers queries all the registered users of the subspace having the
   * given id
   */
  RegisteredUsers(
    request: QueryRegisteredUsersRequest
  ): Promise<QueryRegisteredUsersResponse>;
  /**
   * BannedUsers queries all the banned users of the subspace having the given
   * id
   */
  BannedUsers(
    request: QueryBannedUsersRequest
  ): Promise<QueryBannedUsersResponse>;
  /** Subspaces queries all the subspaces inside Desmos */
  Subspaces(request: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Subspace = this.Subspace.bind(this);
    this.Admins = this.Admins.bind(this);
    this.RegisteredUsers = this.RegisteredUsers.bind(this);
    this.BannedUsers = this.BannedUsers.bind(this);
    this.Subspaces = this.Subspaces.bind(this);
  }
  Subspace(request: QuerySubspaceRequest): Promise<QuerySubspaceResponse> {
    const data = QuerySubspaceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1beta1.Query",
      "Subspace",
      data
    );
    return promise.then((data) =>
      QuerySubspaceResponse.decode(new _m0.Reader(data))
    );
  }

  Admins(request: QueryAdminsRequest): Promise<QueryAdminsResponse> {
    const data = QueryAdminsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1beta1.Query",
      "Admins",
      data
    );
    return promise.then((data) =>
      QueryAdminsResponse.decode(new _m0.Reader(data))
    );
  }

  RegisteredUsers(
    request: QueryRegisteredUsersRequest
  ): Promise<QueryRegisteredUsersResponse> {
    const data = QueryRegisteredUsersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1beta1.Query",
      "RegisteredUsers",
      data
    );
    return promise.then((data) =>
      QueryRegisteredUsersResponse.decode(new _m0.Reader(data))
    );
  }

  BannedUsers(
    request: QueryBannedUsersRequest
  ): Promise<QueryBannedUsersResponse> {
    const data = QueryBannedUsersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1beta1.Query",
      "BannedUsers",
      data
    );
    return promise.then((data) =>
      QueryBannedUsersResponse.decode(new _m0.Reader(data))
    );
  }

  Subspaces(request: QuerySubspacesRequest): Promise<QuerySubspacesResponse> {
    const data = QuerySubspacesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.subspaces.v1beta1.Query",
      "Subspaces",
      data
    );
    return promise.then((data) =>
      QuerySubspacesResponse.decode(new _m0.Reader(data))
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
