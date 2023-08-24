/* eslint-disable */
import { Params, ParamsAmino } from "./params";
import { Long, DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.tokenfactory.v1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/desmos.tokenfactory.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/desmos.tokenfactory.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/desmos.tokenfactory.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/desmos.tokenfactory.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QuerySubspaceDenomsRequest defines the request structure for the
 * SubspaceDenoms gRPC query.
 */
export interface QuerySubspaceDenomsRequest {
  subspaceId: Long;
}
export interface QuerySubspaceDenomsRequestProtoMsg {
  typeUrl: "/desmos.tokenfactory.v1.QuerySubspaceDenomsRequest";
  value: Uint8Array;
}
/**
 * QuerySubspaceDenomsRequest defines the request structure for the
 * SubspaceDenoms gRPC query.
 */
export interface QuerySubspaceDenomsRequestAmino {
  subspace_id: string;
}
export interface QuerySubspaceDenomsRequestAminoMsg {
  type: "/desmos.tokenfactory.v1.QuerySubspaceDenomsRequest";
  value: QuerySubspaceDenomsRequestAmino;
}
/**
 * QuerySubspaceDenomsResponse defines the response structure for the
 * SubspaceDenoms gRPC query.
 */
export interface QuerySubspaceDenomsResponse {
  denoms: string[];
}
export interface QuerySubspaceDenomsResponseProtoMsg {
  typeUrl: "/desmos.tokenfactory.v1.QuerySubspaceDenomsResponse";
  value: Uint8Array;
}
/**
 * QuerySubspaceDenomsResponse defines the response structure for the
 * SubspaceDenoms gRPC query.
 */
export interface QuerySubspaceDenomsResponseAmino {
  denoms: string[];
}
export interface QuerySubspaceDenomsResponseAminoMsg {
  type: "/desmos.tokenfactory.v1.QuerySubspaceDenomsResponse";
  value: QuerySubspaceDenomsResponseAmino;
}
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
      typeUrl: "/desmos.tokenfactory.v1.QueryParamsRequest",
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
      typeUrl: "/desmos.tokenfactory.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish(),
    };
  },
};
function createBaseQuerySubspaceDenomsRequest(): QuerySubspaceDenomsRequest {
  return {
    subspaceId: Long.UZERO,
  };
}
export const QuerySubspaceDenomsRequest = {
  encode(
    message: QuerySubspaceDenomsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySubspaceDenomsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspaceDenomsRequest();
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
  fromJSON(object: any): QuerySubspaceDenomsRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
    };
  },
  toJSON(message: QuerySubspaceDenomsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySubspaceDenomsRequest>, I>>(
    object: I,
  ): QuerySubspaceDenomsRequest {
    const message = createBaseQuerySubspaceDenomsRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    return message;
  },
  fromAmino(
    object: QuerySubspaceDenomsRequestAmino,
  ): QuerySubspaceDenomsRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
    };
  },
  toAmino(
    message: QuerySubspaceDenomsRequest,
  ): QuerySubspaceDenomsRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QuerySubspaceDenomsRequestAminoMsg,
  ): QuerySubspaceDenomsRequest {
    return QuerySubspaceDenomsRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QuerySubspaceDenomsRequestProtoMsg,
  ): QuerySubspaceDenomsRequest {
    return QuerySubspaceDenomsRequest.decode(message.value);
  },
  toProto(message: QuerySubspaceDenomsRequest): Uint8Array {
    return QuerySubspaceDenomsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QuerySubspaceDenomsRequest,
  ): QuerySubspaceDenomsRequestProtoMsg {
    return {
      typeUrl: "/desmos.tokenfactory.v1.QuerySubspaceDenomsRequest",
      value: QuerySubspaceDenomsRequest.encode(message).finish(),
    };
  },
};
function createBaseQuerySubspaceDenomsResponse(): QuerySubspaceDenomsResponse {
  return {
    denoms: [],
  };
}
export const QuerySubspaceDenomsResponse = {
  encode(
    message: QuerySubspaceDenomsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySubspaceDenomsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspaceDenomsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubspaceDenomsResponse {
    return {
      denoms: Array.isArray(object?.denoms)
        ? object.denoms.map((e: any) => String(e))
        : [],
    };
  },
  toJSON(message: QuerySubspaceDenomsResponse): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySubspaceDenomsResponse>, I>>(
    object: I,
  ): QuerySubspaceDenomsResponse {
    const message = createBaseQuerySubspaceDenomsResponse();
    message.denoms = object.denoms?.map((e) => e) || [];
    return message;
  },
  fromAmino(
    object: QuerySubspaceDenomsResponseAmino,
  ): QuerySubspaceDenomsResponse {
    return {
      denoms: Array.isArray(object?.denoms)
        ? object.denoms.map((e: any) => e)
        : [],
    };
  },
  toAmino(
    message: QuerySubspaceDenomsResponse,
  ): QuerySubspaceDenomsResponseAmino {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    return obj;
  },
  fromAminoMsg(
    object: QuerySubspaceDenomsResponseAminoMsg,
  ): QuerySubspaceDenomsResponse {
    return QuerySubspaceDenomsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QuerySubspaceDenomsResponseProtoMsg,
  ): QuerySubspaceDenomsResponse {
    return QuerySubspaceDenomsResponse.decode(message.value);
  },
  toProto(message: QuerySubspaceDenomsResponse): Uint8Array {
    return QuerySubspaceDenomsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QuerySubspaceDenomsResponse,
  ): QuerySubspaceDenomsResponseProtoMsg {
    return {
      typeUrl: "/desmos.tokenfactory.v1.QuerySubspaceDenomsResponse",
      value: QuerySubspaceDenomsResponse.encode(message).finish(),
    };
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Params defines a gRPC query method that returns the tokenfactory module's
   * parameters.
   */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * SubspaceDenoms defines a gRPC query method for fetching all
   * denominations created by a specific subspace.
   */
  SubspaceDenoms(
    request: QuerySubspaceDenomsRequest,
  ): Promise<QuerySubspaceDenomsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.SubspaceDenoms = this.SubspaceDenoms.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.tokenfactory.v1.Query",
      "Params",
      data,
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data)),
    );
  }
  SubspaceDenoms(
    request: QuerySubspaceDenomsRequest,
  ): Promise<QuerySubspaceDenomsResponse> {
    const data = QuerySubspaceDenomsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.tokenfactory.v1.Query",
      "SubspaceDenoms",
      data,
    );
    return promise.then((data) =>
      QuerySubspaceDenomsResponse.decode(new _m0.Reader(data)),
    );
  }
}
