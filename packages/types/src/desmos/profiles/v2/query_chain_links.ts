/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { ChainLink } from "../../../desmos/profiles/v2/models_chain_links";

/**
 * QueryChainLinksRequest represents the request that should be used in order
 * to retrieve the link associated with the provided user, for the given chain
 * and having the given target address
 */
export interface QueryChainLinksRequest {
  /**
   * (optional) User represents the Desmos address of the user to which search
   * the link for
   */
  user: string;
  /**
   * (optional) ChainName contains the name of the chain to which search the
   * link for. Used only if user is also set
   */
  chainName: string;
  /**
   * (optional) Target must contain the external address to which query the link
   * for. Used only if chain name is also set
   */
  target: string;
  /** Pagination defines an optional pagination for the request */
  pagination?: PageRequest;
}

/**
 * QueryChainLinksResponse is the response type for the
 * Query/ChainLinks RPC method.
 */
export interface QueryChainLinksResponse {
  links: ChainLink[];
  /** Pagination defines the pagination response */
  pagination?: PageResponse;
}

function createBaseQueryChainLinksRequest(): QueryChainLinksRequest {
  return { user: "", chainName: "", target: "", pagination: undefined };
}

export const QueryChainLinksRequest = {
  encode(
    message: QueryChainLinksRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.chainName !== "") {
      writer.uint32(18).string(message.chainName);
    }
    if (message.target !== "") {
      writer.uint32(26).string(message.target);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryChainLinksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChainLinksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        case 2:
          message.chainName = reader.string();
          break;
        case 3:
          message.target = reader.string();
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

  fromJSON(object: any): QueryChainLinksRequest {
    return {
      user: isSet(object.user) ? String(object.user) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      target: isSet(object.target) ? String(object.target) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryChainLinksRequest): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.target !== undefined && (obj.target = message.target);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryChainLinksRequest>, I>>(
    object: I
  ): QueryChainLinksRequest {
    const message = createBaseQueryChainLinksRequest();
    message.user = object.user ?? "";
    message.chainName = object.chainName ?? "";
    message.target = object.target ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryChainLinksResponse(): QueryChainLinksResponse {
  return { links: [], pagination: undefined };
}

export const QueryChainLinksResponse = {
  encode(
    message: QueryChainLinksResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.links) {
      ChainLink.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryChainLinksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChainLinksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.links.push(ChainLink.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryChainLinksResponse {
    return {
      links: Array.isArray(object?.links)
        ? object.links.map((e: any) => ChainLink.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryChainLinksResponse): unknown {
    const obj: any = {};
    if (message.links) {
      obj.links = message.links.map((e) =>
        e ? ChainLink.toJSON(e) : undefined
      );
    } else {
      obj.links = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryChainLinksResponse>, I>>(
    object: I
  ): QueryChainLinksResponse {
    const message = createBaseQueryChainLinksResponse();
    message.links = object.links?.map((e) => ChainLink.fromPartial(e)) || [];
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
