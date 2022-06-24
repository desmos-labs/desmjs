/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
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

/**
 * QueryChainLinkOwnersRequest contains the data of the request that can
 * be used to get chain link owners
 */
export interface QueryChainLinkOwnersRequest {
  /**
   * (Optional) Chain name to search link owners of. If not specified, all
   * links stored will be searched instead.
   */
  chainName: string;
  /**
   * (Optional) External address to search for. This will only be used if the
   * chain name is specified as well
   */
  target: string;
  /** Pagination defines an optional pagination for the request */
  pagination?: PageRequest;
}

/**
 * QueryChainLinkOwnersResponse contains the data returned by the request
 * allowing to get chain link owners.
 */
export interface QueryChainLinkOwnersResponse {
  /** Addresses of the chain links owners */
  owners: QueryChainLinkOwnersResponse_ChainLinkOwnerDetails[];
  /** Pagination defines the pagination response */
  pagination?: PageResponse;
}

/** ChainLinkOwnerDetails contains the details of a single chain link owner */
export interface QueryChainLinkOwnersResponse_ChainLinkOwnerDetails {
  user: string;
  chainName: string;
  target: string;
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

function createBaseQueryChainLinkOwnersRequest(): QueryChainLinkOwnersRequest {
  return { chainName: "", target: "", pagination: undefined };
}

export const QueryChainLinkOwnersRequest = {
  encode(
    message: QueryChainLinkOwnersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.target !== "") {
      writer.uint32(18).string(message.target);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryChainLinkOwnersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChainLinkOwnersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainName = reader.string();
          break;
        case 2:
          message.target = reader.string();
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

  fromJSON(object: any): QueryChainLinkOwnersRequest {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      target: isSet(object.target) ? String(object.target) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryChainLinkOwnersRequest): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.target !== undefined && (obj.target = message.target);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryChainLinkOwnersRequest>, I>>(
    object: I
  ): QueryChainLinkOwnersRequest {
    const message = createBaseQueryChainLinkOwnersRequest();
    message.chainName = object.chainName ?? "";
    message.target = object.target ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryChainLinkOwnersResponse(): QueryChainLinkOwnersResponse {
  return { owners: [], pagination: undefined };
}

export const QueryChainLinkOwnersResponse = {
  encode(
    message: QueryChainLinkOwnersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.owners) {
      QueryChainLinkOwnersResponse_ChainLinkOwnerDetails.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
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
  ): QueryChainLinkOwnersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChainLinkOwnersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owners.push(
            QueryChainLinkOwnersResponse_ChainLinkOwnerDetails.decode(
              reader,
              reader.uint32()
            )
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

  fromJSON(object: any): QueryChainLinkOwnersResponse {
    return {
      owners: Array.isArray(object?.owners)
        ? object.owners.map((e: any) =>
            QueryChainLinkOwnersResponse_ChainLinkOwnerDetails.fromJSON(e)
          )
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryChainLinkOwnersResponse): unknown {
    const obj: any = {};
    if (message.owners) {
      obj.owners = message.owners.map((e) =>
        e
          ? QueryChainLinkOwnersResponse_ChainLinkOwnerDetails.toJSON(e)
          : undefined
      );
    } else {
      obj.owners = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryChainLinkOwnersResponse>, I>>(
    object: I
  ): QueryChainLinkOwnersResponse {
    const message = createBaseQueryChainLinkOwnersResponse();
    message.owners =
      object.owners?.map((e) =>
        QueryChainLinkOwnersResponse_ChainLinkOwnerDetails.fromPartial(e)
      ) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryChainLinkOwnersResponse_ChainLinkOwnerDetails(): QueryChainLinkOwnersResponse_ChainLinkOwnerDetails {
  return { user: "", chainName: "", target: "" };
}

export const QueryChainLinkOwnersResponse_ChainLinkOwnerDetails = {
  encode(
    message: QueryChainLinkOwnersResponse_ChainLinkOwnerDetails,
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
  ): QueryChainLinkOwnersResponse_ChainLinkOwnerDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseQueryChainLinkOwnersResponse_ChainLinkOwnerDetails();
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

  fromJSON(object: any): QueryChainLinkOwnersResponse_ChainLinkOwnerDetails {
    return {
      user: isSet(object.user) ? String(object.user) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      target: isSet(object.target) ? String(object.target) : "",
    };
  },

  toJSON(message: QueryChainLinkOwnersResponse_ChainLinkOwnerDetails): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.target !== undefined && (obj.target = message.target);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<QueryChainLinkOwnersResponse_ChainLinkOwnerDetails>,
      I
    >
  >(object: I): QueryChainLinkOwnersResponse_ChainLinkOwnerDetails {
    const message =
      createBaseQueryChainLinkOwnersResponse_ChainLinkOwnerDetails();
    message.user = object.user ?? "";
    message.chainName = object.chainName ?? "";
    message.target = object.target ?? "";
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
