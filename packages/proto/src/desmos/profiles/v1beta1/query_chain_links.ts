/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ChainLink } from "../../../desmos/profiles/v1beta1/models_chain_links";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";

/**
 * QueryUserChainLinkRequest represents the request that should be used in order
 * to retrieve the link associated with the provided user, for the given chain
 * and having the given target address
 */
export interface QueryUserChainLinkRequest {
  /** User represents the Desmos address of the user to which search the link for */
  user: string;
  /** ChainName contains the name of the chain to which search the link for */
  chainName: string;
  /** Target must contain the external address to which query the link for */
  target: string;
}

/**
 * QueryUserChainLinkResponse contains the data that is returned when querying a
 * specific chain link
 */
export interface QueryUserChainLinkResponse {
  link?: ChainLink;
}

/**
 * QueryUserChainLinksRequest is the request type for the
 * Query/UserChainLinks RPC endpoint
 */
export interface QueryUserChainLinksRequest {
  user: string;
  /** Pagination defines an optional pagination for the request */
  pagination?: PageRequest;
}

/**
 * QueryUserChainLinksResponse is the response type for the
 * Query/UserChainLinks RPC method.
 */
export interface QueryUserChainLinksResponse {
  links: ChainLink[];
  /** Pagination defines the pagination response */
  pagination?: PageResponse;
}

const baseQueryUserChainLinkRequest: object = {
  user: "",
  chainName: "",
  target: "",
};

export const QueryUserChainLinkRequest = {
  encode(
    message: QueryUserChainLinkRequest,
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
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserChainLinkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUserChainLinkRequest,
    } as QueryUserChainLinkRequest;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserChainLinkRequest {
    const message = {
      ...baseQueryUserChainLinkRequest,
    } as QueryUserChainLinkRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user);
    } else {
      message.user = "";
    }
    if (object.chainName !== undefined && object.chainName !== null) {
      message.chainName = String(object.chainName);
    } else {
      message.chainName = "";
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = String(object.target);
    } else {
      message.target = "";
    }
    return message;
  },

  toJSON(message: QueryUserChainLinkRequest): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.target !== undefined && (obj.target = message.target);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUserChainLinkRequest>
  ): QueryUserChainLinkRequest {
    const message = {
      ...baseQueryUserChainLinkRequest,
    } as QueryUserChainLinkRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    } else {
      message.user = "";
    }
    if (object.chainName !== undefined && object.chainName !== null) {
      message.chainName = object.chainName;
    } else {
      message.chainName = "";
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = object.target;
    } else {
      message.target = "";
    }
    return message;
  },
};

const baseQueryUserChainLinkResponse: object = {};

export const QueryUserChainLinkResponse = {
  encode(
    message: QueryUserChainLinkResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.link !== undefined) {
      ChainLink.encode(message.link, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserChainLinkResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUserChainLinkResponse,
    } as QueryUserChainLinkResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.link = ChainLink.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUserChainLinkResponse {
    const message = {
      ...baseQueryUserChainLinkResponse,
    } as QueryUserChainLinkResponse;
    if (object.link !== undefined && object.link !== null) {
      message.link = ChainLink.fromJSON(object.link);
    } else {
      message.link = undefined;
    }
    return message;
  },

  toJSON(message: QueryUserChainLinkResponse): unknown {
    const obj: any = {};
    message.link !== undefined &&
      (obj.link = message.link ? ChainLink.toJSON(message.link) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUserChainLinkResponse>
  ): QueryUserChainLinkResponse {
    const message = {
      ...baseQueryUserChainLinkResponse,
    } as QueryUserChainLinkResponse;
    if (object.link !== undefined && object.link !== null) {
      message.link = ChainLink.fromPartial(object.link);
    } else {
      message.link = undefined;
    }
    return message;
  },
};

const baseQueryUserChainLinksRequest: object = { user: "" };

export const QueryUserChainLinksRequest = {
  encode(
    message: QueryUserChainLinksRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUserChainLinksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUserChainLinksRequest,
    } as QueryUserChainLinksRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
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

  fromJSON(object: any): QueryUserChainLinksRequest {
    const message = {
      ...baseQueryUserChainLinksRequest,
    } as QueryUserChainLinksRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user);
    } else {
      message.user = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryUserChainLinksRequest): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUserChainLinksRequest>
  ): QueryUserChainLinksRequest {
    const message = {
      ...baseQueryUserChainLinksRequest,
    } as QueryUserChainLinksRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    } else {
      message.user = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryUserChainLinksResponse: object = {};

export const QueryUserChainLinksResponse = {
  encode(
    message: QueryUserChainLinksResponse,
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
  ): QueryUserChainLinksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUserChainLinksResponse,
    } as QueryUserChainLinksResponse;
    message.links = [];
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

  fromJSON(object: any): QueryUserChainLinksResponse {
    const message = {
      ...baseQueryUserChainLinksResponse,
    } as QueryUserChainLinksResponse;
    message.links = [];
    if (object.links !== undefined && object.links !== null) {
      for (const e of object.links) {
        message.links.push(ChainLink.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryUserChainLinksResponse): unknown {
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

  fromPartial(
    object: DeepPartial<QueryUserChainLinksResponse>
  ): QueryUserChainLinksResponse {
    const message = {
      ...baseQueryUserChainLinksResponse,
    } as QueryUserChainLinksResponse;
    message.links = [];
    if (object.links !== undefined && object.links !== null) {
      for (const e of object.links) {
        message.links.push(ChainLink.fromPartial(e));
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
