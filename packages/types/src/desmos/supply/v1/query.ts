/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

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

/** QueryTotalResponse is the response type for the Query/Total RPC method */
export interface QueryTotalResponse {
  totalSupply: string;
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

/**
 * QueryCirculatingResponse is the response type for the Query/Circulating RPC
 * method
 */
export interface QueryCirculatingResponse {
  circulatingSupply: string;
}

function createBaseQueryTotalRequest(): QueryTotalRequest {
  return { denom: "", dividerExponent: Long.UZERO };
}

export const QueryTotalRequest = {
  encode(message: QueryTotalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      dividerExponent: isSet(object.dividerExponent) ? Long.fromValue(object.dividerExponent) : Long.UZERO,
    };
  },

  toJSON(message: QueryTotalRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.dividerExponent !== undefined && (obj.dividerExponent = (message.dividerExponent || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalRequest>, I>>(object: I): QueryTotalRequest {
    const message = createBaseQueryTotalRequest();
    message.denom = object.denom ?? "";
    message.dividerExponent = (object.dividerExponent !== undefined && object.dividerExponent !== null)
      ? Long.fromValue(object.dividerExponent)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryTotalResponse(): QueryTotalResponse {
  return { totalSupply: "" };
}

export const QueryTotalResponse = {
  encode(message: QueryTotalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return { totalSupply: isSet(object.totalSupply) ? String(object.totalSupply) : "" };
  },

  toJSON(message: QueryTotalResponse): unknown {
    const obj: any = {};
    message.totalSupply !== undefined && (obj.totalSupply = message.totalSupply);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTotalResponse>, I>>(object: I): QueryTotalResponse {
    const message = createBaseQueryTotalResponse();
    message.totalSupply = object.totalSupply ?? "";
    return message;
  },
};

function createBaseQueryCirculatingRequest(): QueryCirculatingRequest {
  return { denom: "", dividerExponent: Long.UZERO };
}

export const QueryCirculatingRequest = {
  encode(message: QueryCirculatingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (!message.dividerExponent.isZero()) {
      writer.uint32(16).uint64(message.dividerExponent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCirculatingRequest {
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
      dividerExponent: isSet(object.dividerExponent) ? Long.fromValue(object.dividerExponent) : Long.UZERO,
    };
  },

  toJSON(message: QueryCirculatingRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.dividerExponent !== undefined && (obj.dividerExponent = (message.dividerExponent || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCirculatingRequest>, I>>(object: I): QueryCirculatingRequest {
    const message = createBaseQueryCirculatingRequest();
    message.denom = object.denom ?? "";
    message.dividerExponent = (object.dividerExponent !== undefined && object.dividerExponent !== null)
      ? Long.fromValue(object.dividerExponent)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryCirculatingResponse(): QueryCirculatingResponse {
  return { circulatingSupply: "" };
}

export const QueryCirculatingResponse = {
  encode(message: QueryCirculatingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.circulatingSupply !== "") {
      writer.uint32(10).string(message.circulatingSupply);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCirculatingResponse {
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
    return { circulatingSupply: isSet(object.circulatingSupply) ? String(object.circulatingSupply) : "" };
  },

  toJSON(message: QueryCirculatingResponse): unknown {
    const obj: any = {};
    message.circulatingSupply !== undefined && (obj.circulatingSupply = message.circulatingSupply);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCirculatingResponse>, I>>(object: I): QueryCirculatingResponse {
    const message = createBaseQueryCirculatingResponse();
    message.circulatingSupply = object.circulatingSupply ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Total queries the total supply of the given denom */
  Total(request: QueryTotalRequest): Promise<QueryTotalResponse>;
  /**
   * Circulating queries the amount of tokens circulating in the market of the
   * given denom
   */
  Circulating(request: QueryCirculatingRequest): Promise<QueryCirculatingResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "desmos.supply.v1.Query";
    this.rpc = rpc;
    this.Total = this.Total.bind(this);
    this.Circulating = this.Circulating.bind(this);
  }
  Total(request: QueryTotalRequest): Promise<QueryTotalResponse> {
    const data = QueryTotalRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Total", data);
    return promise.then((data) => QueryTotalResponse.decode(new _m0.Reader(data)));
  }

  Circulating(request: QueryCirculatingRequest): Promise<QueryCirculatingResponse> {
    const data = QueryCirculatingRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Circulating", data);
    return promise.then((data) => QueryCirculatingResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
