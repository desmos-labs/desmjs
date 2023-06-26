/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.supply.v1";
/** QueryTotalRequest is the request type for Query/Total RPC method */
export interface QueryTotalRequest {
  /** coin denom to query the circulating supply for */
  denom: string;
  /**
   * divider_exponent is a factor used to power the divider used to convert the
   * supply to the desired representation
   */
  dividerExponent: Long;
}
export interface QueryTotalRequestProtoMsg {
  typeUrl: "/desmos.supply.v1.QueryTotalRequest";
  value: Uint8Array;
}
/** QueryTotalRequest is the request type for Query/Total RPC method */
export interface QueryTotalRequestAmino {
  /** coin denom to query the circulating supply for */
  denom: string;
  /**
   * divider_exponent is a factor used to power the divider used to convert the
   * supply to the desired representation
   */
  divider_exponent: string;
}
export interface QueryTotalRequestAminoMsg {
  type: "/desmos.supply.v1.QueryTotalRequest";
  value: QueryTotalRequestAmino;
}
/** QueryTotalResponse is the response type for the Query/Total RPC method */
export interface QueryTotalResponse {
  totalSupply: string;
}
export interface QueryTotalResponseProtoMsg {
  typeUrl: "/desmos.supply.v1.QueryTotalResponse";
  value: Uint8Array;
}
/** QueryTotalResponse is the response type for the Query/Total RPC method */
export interface QueryTotalResponseAmino {
  total_supply: string;
}
export interface QueryTotalResponseAminoMsg {
  type: "/desmos.supply.v1.QueryTotalResponse";
  value: QueryTotalResponseAmino;
}
/**
 * QueryCirculatingRequest is the request type for the Query/Circulating RPC
 * method
 */
export interface QueryCirculatingRequest {
  /** coin denom to query the circulating supply for */
  denom: string;
  /**
   * divider_exponent is a factor used to power the divider used to convert the
   * supply to the desired representation
   */
  dividerExponent: Long;
}
export interface QueryCirculatingRequestProtoMsg {
  typeUrl: "/desmos.supply.v1.QueryCirculatingRequest";
  value: Uint8Array;
}
/**
 * QueryCirculatingRequest is the request type for the Query/Circulating RPC
 * method
 */
export interface QueryCirculatingRequestAmino {
  /** coin denom to query the circulating supply for */
  denom: string;
  /**
   * divider_exponent is a factor used to power the divider used to convert the
   * supply to the desired representation
   */
  divider_exponent: string;
}
export interface QueryCirculatingRequestAminoMsg {
  type: "/desmos.supply.v1.QueryCirculatingRequest";
  value: QueryCirculatingRequestAmino;
}
/**
 * QueryCirculatingResponse is the response type for the Query/Circulating RPC
 * method
 */
export interface QueryCirculatingResponse {
  circulatingSupply: string;
}
export interface QueryCirculatingResponseProtoMsg {
  typeUrl: "/desmos.supply.v1.QueryCirculatingResponse";
  value: Uint8Array;
}
/**
 * QueryCirculatingResponse is the response type for the Query/Circulating RPC
 * method
 */
export interface QueryCirculatingResponseAmino {
  circulating_supply: string;
}
export interface QueryCirculatingResponseAminoMsg {
  type: "/desmos.supply.v1.QueryCirculatingResponse";
  value: QueryCirculatingResponseAmino;
}
function createBaseQueryTotalRequest(): QueryTotalRequest {
  return {
    denom: "",
    dividerExponent: Long.UZERO,
  };
}
export const QueryTotalRequest = {
  encode(
    message: QueryTotalRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (!message.dividerExponent.isZero()) {
      writer.uint32(16).uint64(message.dividerExponent);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.dividerExponent = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      dividerExponent: isSet(object.dividerExponent)
        ? Long.fromValue(object.dividerExponent)
        : Long.UZERO,
    };
  },
  toJSON(message: QueryTotalRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.dividerExponent !== undefined &&
      (obj.dividerExponent = (
        message.dividerExponent || Long.UZERO
      ).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalRequest>, I>>(
    object: I
  ): QueryTotalRequest {
    const message = createBaseQueryTotalRequest();
    message.denom = object.denom ?? "";
    message.dividerExponent =
      object.dividerExponent !== undefined && object.dividerExponent !== null
        ? Long.fromValue(object.dividerExponent)
        : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryTotalRequestAmino): QueryTotalRequest {
    return {
      denom: object.denom,
      dividerExponent: Long.fromString(object.divider_exponent),
    };
  },
  toAmino(message: QueryTotalRequest): QueryTotalRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.divider_exponent = message.dividerExponent
      ? message.dividerExponent.toString()
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalRequestAminoMsg): QueryTotalRequest {
    return QueryTotalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalRequestProtoMsg): QueryTotalRequest {
    return QueryTotalRequest.decode(message.value);
  },
  toProto(message: QueryTotalRequest): Uint8Array {
    return QueryTotalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalRequest): QueryTotalRequestProtoMsg {
    return {
      typeUrl: "/desmos.supply.v1.QueryTotalRequest",
      value: QueryTotalRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryTotalResponse(): QueryTotalResponse {
  return {
    totalSupply: "",
  };
}
export const QueryTotalResponse = {
  encode(
    message: QueryTotalResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.totalSupply !== "") {
      writer.uint32(10).string(message.totalSupply);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalSupply = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalResponse {
    return {
      totalSupply: isSet(object.totalSupply) ? String(object.totalSupply) : "",
    };
  },
  toJSON(message: QueryTotalResponse): unknown {
    const obj: any = {};
    message.totalSupply !== undefined &&
      (obj.totalSupply = message.totalSupply);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalResponse>, I>>(
    object: I
  ): QueryTotalResponse {
    const message = createBaseQueryTotalResponse();
    message.totalSupply = object.totalSupply ?? "";
    return message;
  },
  fromAmino(object: QueryTotalResponseAmino): QueryTotalResponse {
    return {
      totalSupply: object.total_supply,
    };
  },
  toAmino(message: QueryTotalResponse): QueryTotalResponseAmino {
    const obj: any = {};
    obj.total_supply = message.totalSupply;
    return obj;
  },
  fromAminoMsg(object: QueryTotalResponseAminoMsg): QueryTotalResponse {
    return QueryTotalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalResponseProtoMsg): QueryTotalResponse {
    return QueryTotalResponse.decode(message.value);
  },
  toProto(message: QueryTotalResponse): Uint8Array {
    return QueryTotalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalResponse): QueryTotalResponseProtoMsg {
    return {
      typeUrl: "/desmos.supply.v1.QueryTotalResponse",
      value: QueryTotalResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryCirculatingRequest(): QueryCirculatingRequest {
  return {
    denom: "",
    dividerExponent: Long.UZERO,
  };
}
export const QueryCirculatingRequest = {
  encode(
    message: QueryCirculatingRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (!message.dividerExponent.isZero()) {
      writer.uint32(16).uint64(message.dividerExponent);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCirculatingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCirculatingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.dividerExponent = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCirculatingRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      dividerExponent: isSet(object.dividerExponent)
        ? Long.fromValue(object.dividerExponent)
        : Long.UZERO,
    };
  },
  toJSON(message: QueryCirculatingRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.dividerExponent !== undefined &&
      (obj.dividerExponent = (
        message.dividerExponent || Long.UZERO
      ).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCirculatingRequest>, I>>(
    object: I
  ): QueryCirculatingRequest {
    const message = createBaseQueryCirculatingRequest();
    message.denom = object.denom ?? "";
    message.dividerExponent =
      object.dividerExponent !== undefined && object.dividerExponent !== null
        ? Long.fromValue(object.dividerExponent)
        : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryCirculatingRequestAmino): QueryCirculatingRequest {
    return {
      denom: object.denom,
      dividerExponent: Long.fromString(object.divider_exponent),
    };
  },
  toAmino(message: QueryCirculatingRequest): QueryCirculatingRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.divider_exponent = message.dividerExponent
      ? message.dividerExponent.toString()
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryCirculatingRequestAminoMsg
  ): QueryCirculatingRequest {
    return QueryCirculatingRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryCirculatingRequestProtoMsg
  ): QueryCirculatingRequest {
    return QueryCirculatingRequest.decode(message.value);
  },
  toProto(message: QueryCirculatingRequest): Uint8Array {
    return QueryCirculatingRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryCirculatingRequest
  ): QueryCirculatingRequestProtoMsg {
    return {
      typeUrl: "/desmos.supply.v1.QueryCirculatingRequest",
      value: QueryCirculatingRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryCirculatingResponse(): QueryCirculatingResponse {
  return {
    circulatingSupply: "",
  };
}
export const QueryCirculatingResponse = {
  encode(
    message: QueryCirculatingResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.circulatingSupply !== "") {
      writer.uint32(10).string(message.circulatingSupply);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCirculatingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCirculatingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.circulatingSupply = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCirculatingResponse {
    return {
      circulatingSupply: isSet(object.circulatingSupply)
        ? String(object.circulatingSupply)
        : "",
    };
  },
  toJSON(message: QueryCirculatingResponse): unknown {
    const obj: any = {};
    message.circulatingSupply !== undefined &&
      (obj.circulatingSupply = message.circulatingSupply);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCirculatingResponse>, I>>(
    object: I
  ): QueryCirculatingResponse {
    const message = createBaseQueryCirculatingResponse();
    message.circulatingSupply = object.circulatingSupply ?? "";
    return message;
  },
  fromAmino(object: QueryCirculatingResponseAmino): QueryCirculatingResponse {
    return {
      circulatingSupply: object.circulating_supply,
    };
  },
  toAmino(message: QueryCirculatingResponse): QueryCirculatingResponseAmino {
    const obj: any = {};
    obj.circulating_supply = message.circulatingSupply;
    return obj;
  },
  fromAminoMsg(
    object: QueryCirculatingResponseAminoMsg
  ): QueryCirculatingResponse {
    return QueryCirculatingResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryCirculatingResponseProtoMsg
  ): QueryCirculatingResponse {
    return QueryCirculatingResponse.decode(message.value);
  },
  toProto(message: QueryCirculatingResponse): Uint8Array {
    return QueryCirculatingResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryCirculatingResponse
  ): QueryCirculatingResponseProtoMsg {
    return {
      typeUrl: "/desmos.supply.v1.QueryCirculatingResponse",
      value: QueryCirculatingResponse.encode(message).finish(),
    };
  },
};
