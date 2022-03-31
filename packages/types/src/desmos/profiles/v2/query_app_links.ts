/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { ApplicationLink } from "../../../desmos/profiles/v2/models_app_links";

/**
 * QueryUserApplicationLinkRequest represents the request used when querying an
 * application link using an application name and username for a given user
 */
export interface QueryApplicationLinksRequest {
  /**
   * (Optional) User contains the Desmos profile address associated for which
   * the link should be searched for
   */
  user: string;
  /**
   * (Optional) Application represents the application name associated with the
   * link. Used only if user is also set.
   */
  application: string;
  /**
   * Username represents the username inside the application associated with the
   * link. Used only if application is also set.
   */
  username: string;
  /** Pagination defines an optional pagination for the request */
  pagination?: PageRequest;
}

/**
 * QueryApplicationLinksResponse represents the response to the query used
 * to get the application links for a specific user
 */
export interface QueryApplicationLinksResponse {
  links: ApplicationLink[];
  /** Pagination defines the pagination response */
  pagination?: PageResponse;
}

/**
 * QueryApplicationLinkByClientIDRequest contains the data of the request that
 * can be used to get an application link based on a client id
 */
export interface QueryApplicationLinkByClientIDRequest {
  /** ClientID represents the ID of the client to which search the link for */
  clientId: string;
}

/**
 * QueryApplicationLinkByClientIDResponse contains the data returned by the
 * request allowing to get an application link using a client id
 */
export interface QueryApplicationLinkByClientIDResponse {
  link?: ApplicationLink;
}

function createBaseQueryApplicationLinksRequest(): QueryApplicationLinksRequest {
  return { user: "", application: "", username: "", pagination: undefined };
}

export const QueryApplicationLinksRequest = {
  encode(
    message: QueryApplicationLinksRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.application !== "") {
      writer.uint32(18).string(message.application);
    }
    if (message.username !== "") {
      writer.uint32(26).string(message.username);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryApplicationLinksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApplicationLinksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        case 2:
          message.application = reader.string();
          break;
        case 3:
          message.username = reader.string();
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

  fromJSON(object: any): QueryApplicationLinksRequest {
    return {
      user: isSet(object.user) ? String(object.user) : "",
      application: isSet(object.application) ? String(object.application) : "",
      username: isSet(object.username) ? String(object.username) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryApplicationLinksRequest): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    message.application !== undefined &&
      (obj.application = message.application);
    message.username !== undefined && (obj.username = message.username);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryApplicationLinksRequest>, I>>(
    object: I
  ): QueryApplicationLinksRequest {
    const message = createBaseQueryApplicationLinksRequest();
    message.user = object.user ?? "";
    message.application = object.application ?? "";
    message.username = object.username ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryApplicationLinksResponse(): QueryApplicationLinksResponse {
  return { links: [], pagination: undefined };
}

export const QueryApplicationLinksResponse = {
  encode(
    message: QueryApplicationLinksResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.links) {
      ApplicationLink.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryApplicationLinksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApplicationLinksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.links.push(ApplicationLink.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryApplicationLinksResponse {
    return {
      links: Array.isArray(object?.links)
        ? object.links.map((e: any) => ApplicationLink.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryApplicationLinksResponse): unknown {
    const obj: any = {};
    if (message.links) {
      obj.links = message.links.map((e) =>
        e ? ApplicationLink.toJSON(e) : undefined
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

  fromPartial<I extends Exact<DeepPartial<QueryApplicationLinksResponse>, I>>(
    object: I
  ): QueryApplicationLinksResponse {
    const message = createBaseQueryApplicationLinksResponse();
    message.links =
      object.links?.map((e) => ApplicationLink.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryApplicationLinkByClientIDRequest(): QueryApplicationLinkByClientIDRequest {
  return { clientId: "" };
}

export const QueryApplicationLinkByClientIDRequest = {
  encode(
    message: QueryApplicationLinkByClientIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryApplicationLinkByClientIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApplicationLinkByClientIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryApplicationLinkByClientIDRequest {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
    };
  },

  toJSON(message: QueryApplicationLinkByClientIDRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryApplicationLinkByClientIDRequest>, I>
  >(object: I): QueryApplicationLinkByClientIDRequest {
    const message = createBaseQueryApplicationLinkByClientIDRequest();
    message.clientId = object.clientId ?? "";
    return message;
  },
};

function createBaseQueryApplicationLinkByClientIDResponse(): QueryApplicationLinkByClientIDResponse {
  return { link: undefined };
}

export const QueryApplicationLinkByClientIDResponse = {
  encode(
    message: QueryApplicationLinkByClientIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.link !== undefined) {
      ApplicationLink.encode(message.link, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryApplicationLinkByClientIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApplicationLinkByClientIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.link = ApplicationLink.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryApplicationLinkByClientIDResponse {
    return {
      link: isSet(object.link)
        ? ApplicationLink.fromJSON(object.link)
        : undefined,
    };
  },

  toJSON(message: QueryApplicationLinkByClientIDResponse): unknown {
    const obj: any = {};
    message.link !== undefined &&
      (obj.link = message.link
        ? ApplicationLink.toJSON(message.link)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryApplicationLinkByClientIDResponse>, I>
  >(object: I): QueryApplicationLinkByClientIDResponse {
    const message = createBaseQueryApplicationLinkByClientIDResponse();
    message.link =
      object.link !== undefined && object.link !== null
        ? ApplicationLink.fromPartial(object.link)
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
