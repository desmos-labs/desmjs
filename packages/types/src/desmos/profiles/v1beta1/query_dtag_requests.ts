/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { DTagTransferRequest } from "../../../desmos/profiles/v1beta1/models_dtag_requests";

/**
 * QueryIncomingDTagTransferRequestsRequest is the request type for the
 * Query/IncomingDTagTransferRequests RPC endpoint
 */
export interface QueryIncomingDTagTransferRequestsRequest {
  /**
   * Receiver represents the address of the user to which query the incoming
   * requests for
   */
  receiver: string;
  /** Pagination defines an optional pagination for the request */
  pagination?: PageRequest;
}

/**
 * QueryIncomingDTagTransferRequestsResponse is the response type for the
 * Query/IncomingDTagTransferRequests RPC method.
 */
export interface QueryIncomingDTagTransferRequestsResponse {
  /**
   * Requests represent the list of all the DTag transfer requests made towards
   * the user
   */
  requests: DTagTransferRequest[];
  /** Pagination defines the pagination response */
  pagination?: PageResponse;
}

function createBaseQueryIncomingDTagTransferRequestsRequest(): QueryIncomingDTagTransferRequestsRequest {
  return { receiver: "", pagination: undefined };
}

export const QueryIncomingDTagTransferRequestsRequest = {
  encode(
    message: QueryIncomingDTagTransferRequestsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryIncomingDTagTransferRequestsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncomingDTagTransferRequestsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string();
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

  fromJSON(object: any): QueryIncomingDTagTransferRequestsRequest {
    return {
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryIncomingDTagTransferRequestsRequest): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryIncomingDTagTransferRequestsRequest>, I>
  >(object: I): QueryIncomingDTagTransferRequestsRequest {
    const message = createBaseQueryIncomingDTagTransferRequestsRequest();
    message.receiver = object.receiver ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryIncomingDTagTransferRequestsResponse(): QueryIncomingDTagTransferRequestsResponse {
  return { requests: [], pagination: undefined };
}

export const QueryIncomingDTagTransferRequestsResponse = {
  encode(
    message: QueryIncomingDTagTransferRequestsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.requests) {
      DTagTransferRequest.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryIncomingDTagTransferRequestsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncomingDTagTransferRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requests.push(
            DTagTransferRequest.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryIncomingDTagTransferRequestsResponse {
    return {
      requests: Array.isArray(object?.requests)
        ? object.requests.map((e: any) => DTagTransferRequest.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryIncomingDTagTransferRequestsResponse): unknown {
    const obj: any = {};
    if (message.requests) {
      obj.requests = message.requests.map((e) =>
        e ? DTagTransferRequest.toJSON(e) : undefined
      );
    } else {
      obj.requests = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryIncomingDTagTransferRequestsResponse>, I>
  >(object: I): QueryIncomingDTagTransferRequestsResponse {
    const message = createBaseQueryIncomingDTagTransferRequestsResponse();
    message.requests =
      object.requests?.map((e) => DTagTransferRequest.fromPartial(e)) || [];
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
