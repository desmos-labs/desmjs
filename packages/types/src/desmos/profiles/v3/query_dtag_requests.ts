/* eslint-disable */
import {
  PageRequest,
  PageRequestAmino,
  PageResponse,
  PageResponseAmino,
} from "../../../cosmos/base/query/v1beta1/pagination";
import {
  DTagTransferRequest,
  DTagTransferRequestAmino,
} from "./models_dtag_requests";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "desmos.profiles.v3";
/**
 * QueryIncomingDTagTransferRequestsRequest is the request type for the
 * Query/IncomingDTagTransferRequests RPC endpoint
 */
export interface QueryIncomingDTagTransferRequestsRequest {
  /**
   * (optional) Receiver represents the address of the user to which query the
   * incoming requests for
   */
  receiver: string;
  /** Pagination defines an optional pagination for the request */
  pagination?: PageRequest;
}
export interface QueryIncomingDTagTransferRequestsRequestProtoMsg {
  typeUrl: "/desmos.profiles.v3.QueryIncomingDTagTransferRequestsRequest";
  value: Uint8Array;
}
/**
 * QueryIncomingDTagTransferRequestsRequest is the request type for the
 * Query/IncomingDTagTransferRequests RPC endpoint
 */
export interface QueryIncomingDTagTransferRequestsRequestAmino {
  /**
   * (optional) Receiver represents the address of the user to which query the
   * incoming requests for
   */
  receiver: string;
  /** Pagination defines an optional pagination for the request */
  pagination?: PageRequestAmino;
}
export interface QueryIncomingDTagTransferRequestsRequestAminoMsg {
  type: "/desmos.profiles.v3.QueryIncomingDTagTransferRequestsRequest";
  value: QueryIncomingDTagTransferRequestsRequestAmino;
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
export interface QueryIncomingDTagTransferRequestsResponseProtoMsg {
  typeUrl: "/desmos.profiles.v3.QueryIncomingDTagTransferRequestsResponse";
  value: Uint8Array;
}
/**
 * QueryIncomingDTagTransferRequestsResponse is the response type for the
 * Query/IncomingDTagTransferRequests RPC method.
 */
export interface QueryIncomingDTagTransferRequestsResponseAmino {
  /**
   * Requests represent the list of all the DTag transfer requests made towards
   * the user
   */
  requests: DTagTransferRequestAmino[];
  /** Pagination defines the pagination response */
  pagination?: PageResponseAmino;
}
export interface QueryIncomingDTagTransferRequestsResponseAminoMsg {
  type: "/desmos.profiles.v3.QueryIncomingDTagTransferRequestsResponse";
  value: QueryIncomingDTagTransferRequestsResponseAmino;
}
function createBaseQueryIncomingDTagTransferRequestsRequest(): QueryIncomingDTagTransferRequestsRequest {
  return {
    receiver: "",
    pagination: undefined,
  };
}
export const QueryIncomingDTagTransferRequestsRequest = {
  encode(
    message: QueryIncomingDTagTransferRequestsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
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
    length?: number,
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
    I extends Exact<DeepPartial<QueryIncomingDTagTransferRequestsRequest>, I>,
  >(object: I): QueryIncomingDTagTransferRequestsRequest {
    const message = createBaseQueryIncomingDTagTransferRequestsRequest();
    message.receiver = object.receiver ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryIncomingDTagTransferRequestsRequestAmino,
  ): QueryIncomingDTagTransferRequestsRequest {
    return {
      receiver: object.receiver,
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryIncomingDTagTransferRequestsRequest,
  ): QueryIncomingDTagTransferRequestsRequestAmino {
    const obj: any = {};
    obj.receiver = message.receiver;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryIncomingDTagTransferRequestsRequestAminoMsg,
  ): QueryIncomingDTagTransferRequestsRequest {
    return QueryIncomingDTagTransferRequestsRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryIncomingDTagTransferRequestsRequestProtoMsg,
  ): QueryIncomingDTagTransferRequestsRequest {
    return QueryIncomingDTagTransferRequestsRequest.decode(message.value);
  },
  toProto(message: QueryIncomingDTagTransferRequestsRequest): Uint8Array {
    return QueryIncomingDTagTransferRequestsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryIncomingDTagTransferRequestsRequest,
  ): QueryIncomingDTagTransferRequestsRequestProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.QueryIncomingDTagTransferRequestsRequest",
      value: QueryIncomingDTagTransferRequestsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryIncomingDTagTransferRequestsResponse(): QueryIncomingDTagTransferRequestsResponse {
  return {
    requests: [],
    pagination: undefined,
  };
}
export const QueryIncomingDTagTransferRequestsResponse = {
  encode(
    message: QueryIncomingDTagTransferRequestsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.requests) {
      DTagTransferRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryIncomingDTagTransferRequestsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncomingDTagTransferRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requests.push(
            DTagTransferRequest.decode(reader, reader.uint32()),
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
        e ? DTagTransferRequest.toJSON(e) : undefined,
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
    I extends Exact<DeepPartial<QueryIncomingDTagTransferRequestsResponse>, I>,
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
  fromAmino(
    object: QueryIncomingDTagTransferRequestsResponseAmino,
  ): QueryIncomingDTagTransferRequestsResponse {
    return {
      requests: Array.isArray(object?.requests)
        ? object.requests.map((e: any) => DTagTransferRequest.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryIncomingDTagTransferRequestsResponse,
  ): QueryIncomingDTagTransferRequestsResponseAmino {
    const obj: any = {};
    if (message.requests) {
      obj.requests = message.requests.map((e) =>
        e ? DTagTransferRequest.toAmino(e) : undefined,
      );
    } else {
      obj.requests = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryIncomingDTagTransferRequestsResponseAminoMsg,
  ): QueryIncomingDTagTransferRequestsResponse {
    return QueryIncomingDTagTransferRequestsResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryIncomingDTagTransferRequestsResponseProtoMsg,
  ): QueryIncomingDTagTransferRequestsResponse {
    return QueryIncomingDTagTransferRequestsResponse.decode(message.value);
  },
  toProto(message: QueryIncomingDTagTransferRequestsResponse): Uint8Array {
    return QueryIncomingDTagTransferRequestsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryIncomingDTagTransferRequestsResponse,
  ): QueryIncomingDTagTransferRequestsResponseProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.QueryIncomingDTagTransferRequestsResponse",
      value: QueryIncomingDTagTransferRequestsResponse.encode(message).finish(),
    };
  },
};
