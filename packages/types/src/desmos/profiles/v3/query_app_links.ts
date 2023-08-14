/* eslint-disable */
import {
  PageRequest,
  PageRequestAmino,
  PageResponse,
  PageResponseAmino,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { ApplicationLink, ApplicationLinkAmino } from "./models_app_links";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "desmos.profiles.v3";
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
export interface QueryApplicationLinksRequestProtoMsg {
  typeUrl: "/desmos.profiles.v3.QueryApplicationLinksRequest";
  value: Uint8Array;
}
/**
 * QueryUserApplicationLinkRequest represents the request used when querying an
 * application link using an application name and username for a given user
 */
export interface QueryApplicationLinksRequestAmino {
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
  pagination?: PageRequestAmino;
}
export interface QueryApplicationLinksRequestAminoMsg {
  type: "/desmos.profiles.v3.QueryApplicationLinksRequest";
  value: QueryApplicationLinksRequestAmino;
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
export interface QueryApplicationLinksResponseProtoMsg {
  typeUrl: "/desmos.profiles.v3.QueryApplicationLinksResponse";
  value: Uint8Array;
}
/**
 * QueryApplicationLinksResponse represents the response to the query used
 * to get the application links for a specific user
 */
export interface QueryApplicationLinksResponseAmino {
  links: ApplicationLinkAmino[];
  /** Pagination defines the pagination response */
  pagination?: PageResponseAmino;
}
export interface QueryApplicationLinksResponseAminoMsg {
  type: "/desmos.profiles.v3.QueryApplicationLinksResponse";
  value: QueryApplicationLinksResponseAmino;
}
/**
 * QueryApplicationLinkByClientIDRequest contains the data of the request that
 * can be used to get an application link based on a client id
 */
export interface QueryApplicationLinkByClientIDRequest {
  /** ClientID represents the ID of the client to which search the link for */
  clientId: string;
}
export interface QueryApplicationLinkByClientIDRequestProtoMsg {
  typeUrl: "/desmos.profiles.v3.QueryApplicationLinkByClientIDRequest";
  value: Uint8Array;
}
/**
 * QueryApplicationLinkByClientIDRequest contains the data of the request that
 * can be used to get an application link based on a client id
 */
export interface QueryApplicationLinkByClientIDRequestAmino {
  /** ClientID represents the ID of the client to which search the link for */
  client_id: string;
}
export interface QueryApplicationLinkByClientIDRequestAminoMsg {
  type: "/desmos.profiles.v3.QueryApplicationLinkByClientIDRequest";
  value: QueryApplicationLinkByClientIDRequestAmino;
}
/**
 * QueryApplicationLinkByClientIDResponse contains the data returned by the
 * request allowing to get an application link using a client id
 */
export interface QueryApplicationLinkByClientIDResponse {
  link?: ApplicationLink;
}
export interface QueryApplicationLinkByClientIDResponseProtoMsg {
  typeUrl: "/desmos.profiles.v3.QueryApplicationLinkByClientIDResponse";
  value: Uint8Array;
}
/**
 * QueryApplicationLinkByClientIDResponse contains the data returned by the
 * request allowing to get an application link using a client id
 */
export interface QueryApplicationLinkByClientIDResponseAmino {
  link?: ApplicationLinkAmino;
}
export interface QueryApplicationLinkByClientIDResponseAminoMsg {
  type: "/desmos.profiles.v3.QueryApplicationLinkByClientIDResponse";
  value: QueryApplicationLinkByClientIDResponseAmino;
}
/**
 * QueryApplicationLinkOwnersRequest contains the data of the request that can
 * be used to get application link owners
 */
export interface QueryApplicationLinkOwnersRequest {
  /**
   * (Optional) Application name to search link owners of. If not specified, all
   * links stored will be searched instead.
   */
  application: string;
  /**
   * (Optional) Username to search for. This will only be used if the
   * application is specified as well
   */
  username: string;
  /** Pagination defines an optional pagination for the request */
  pagination?: PageRequest;
}
export interface QueryApplicationLinkOwnersRequestProtoMsg {
  typeUrl: "/desmos.profiles.v3.QueryApplicationLinkOwnersRequest";
  value: Uint8Array;
}
/**
 * QueryApplicationLinkOwnersRequest contains the data of the request that can
 * be used to get application link owners
 */
export interface QueryApplicationLinkOwnersRequestAmino {
  /**
   * (Optional) Application name to search link owners of. If not specified, all
   * links stored will be searched instead.
   */
  application: string;
  /**
   * (Optional) Username to search for. This will only be used if the
   * application is specified as well
   */
  username: string;
  /** Pagination defines an optional pagination for the request */
  pagination?: PageRequestAmino;
}
export interface QueryApplicationLinkOwnersRequestAminoMsg {
  type: "/desmos.profiles.v3.QueryApplicationLinkOwnersRequest";
  value: QueryApplicationLinkOwnersRequestAmino;
}
/**
 * QueryApplicationLinkOwnersResponse contains the data returned by the request
 * allowing to get application link owners.
 */
export interface QueryApplicationLinkOwnersResponse {
  /** Addresses of the application links owners */
  owners: QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails[];
  /** Pagination defines the pagination response */
  pagination?: PageResponse;
}
export interface QueryApplicationLinkOwnersResponseProtoMsg {
  typeUrl: "/desmos.profiles.v3.QueryApplicationLinkOwnersResponse";
  value: Uint8Array;
}
/**
 * QueryApplicationLinkOwnersResponse contains the data returned by the request
 * allowing to get application link owners.
 */
export interface QueryApplicationLinkOwnersResponseAmino {
  /** Addresses of the application links owners */
  owners: QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetailsAmino[];
  /** Pagination defines the pagination response */
  pagination?: PageResponseAmino;
}
export interface QueryApplicationLinkOwnersResponseAminoMsg {
  type: "/desmos.profiles.v3.QueryApplicationLinkOwnersResponse";
  value: QueryApplicationLinkOwnersResponseAmino;
}
/**
 * ApplicationLinkOwnerDetails contains the details of a single application
 * link owner
 */
export interface QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails {
  user: string;
  application: string;
  username: string;
}
export interface QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetailsProtoMsg {
  typeUrl: "/desmos.profiles.v3.ApplicationLinkOwnerDetails";
  value: Uint8Array;
}
/**
 * ApplicationLinkOwnerDetails contains the details of a single application
 * link owner
 */
export interface QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetailsAmino {
  user: string;
  application: string;
  username: string;
}
export interface QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetailsAminoMsg {
  type: "/desmos.profiles.v3.ApplicationLinkOwnerDetails";
  value: QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetailsAmino;
}
function createBaseQueryApplicationLinksRequest(): QueryApplicationLinksRequest {
  return {
    user: "",
    application: "",
    username: "",
    pagination: undefined,
  };
}
export const QueryApplicationLinksRequest = {
  encode(
    message: QueryApplicationLinksRequest,
    writer: _m0.Writer = _m0.Writer.create(),
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
    length?: number,
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
    object: I,
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
  fromAmino(
    object: QueryApplicationLinksRequestAmino,
  ): QueryApplicationLinksRequest {
    return {
      user: object.user,
      application: object.application,
      username: object.username,
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryApplicationLinksRequest,
  ): QueryApplicationLinksRequestAmino {
    const obj: any = {};
    obj.user = message.user;
    obj.application = message.application;
    obj.username = message.username;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryApplicationLinksRequestAminoMsg,
  ): QueryApplicationLinksRequest {
    return QueryApplicationLinksRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryApplicationLinksRequestProtoMsg,
  ): QueryApplicationLinksRequest {
    return QueryApplicationLinksRequest.decode(message.value);
  },
  toProto(message: QueryApplicationLinksRequest): Uint8Array {
    return QueryApplicationLinksRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryApplicationLinksRequest,
  ): QueryApplicationLinksRequestProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.QueryApplicationLinksRequest",
      value: QueryApplicationLinksRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryApplicationLinksResponse(): QueryApplicationLinksResponse {
  return {
    links: [],
    pagination: undefined,
  };
}
export const QueryApplicationLinksResponse = {
  encode(
    message: QueryApplicationLinksResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.links) {
      ApplicationLink.encode(v!, writer.uint32(10).fork()).ldelim();
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
        e ? ApplicationLink.toJSON(e) : undefined,
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
    object: I,
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
  fromAmino(
    object: QueryApplicationLinksResponseAmino,
  ): QueryApplicationLinksResponse {
    return {
      links: Array.isArray(object?.links)
        ? object.links.map((e: any) => ApplicationLink.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryApplicationLinksResponse,
  ): QueryApplicationLinksResponseAmino {
    const obj: any = {};
    if (message.links) {
      obj.links = message.links.map((e) =>
        e ? ApplicationLink.toAmino(e) : undefined,
      );
    } else {
      obj.links = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryApplicationLinksResponseAminoMsg,
  ): QueryApplicationLinksResponse {
    return QueryApplicationLinksResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryApplicationLinksResponseProtoMsg,
  ): QueryApplicationLinksResponse {
    return QueryApplicationLinksResponse.decode(message.value);
  },
  toProto(message: QueryApplicationLinksResponse): Uint8Array {
    return QueryApplicationLinksResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryApplicationLinksResponse,
  ): QueryApplicationLinksResponseProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.QueryApplicationLinksResponse",
      value: QueryApplicationLinksResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryApplicationLinkByClientIDRequest(): QueryApplicationLinkByClientIDRequest {
  return {
    clientId: "",
  };
}
export const QueryApplicationLinkByClientIDRequest = {
  encode(
    message: QueryApplicationLinkByClientIDRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
    I extends Exact<DeepPartial<QueryApplicationLinkByClientIDRequest>, I>,
  >(object: I): QueryApplicationLinkByClientIDRequest {
    const message = createBaseQueryApplicationLinkByClientIDRequest();
    message.clientId = object.clientId ?? "";
    return message;
  },
  fromAmino(
    object: QueryApplicationLinkByClientIDRequestAmino,
  ): QueryApplicationLinkByClientIDRequest {
    return {
      clientId: object.client_id,
    };
  },
  toAmino(
    message: QueryApplicationLinkByClientIDRequest,
  ): QueryApplicationLinkByClientIDRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId;
    return obj;
  },
  fromAminoMsg(
    object: QueryApplicationLinkByClientIDRequestAminoMsg,
  ): QueryApplicationLinkByClientIDRequest {
    return QueryApplicationLinkByClientIDRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryApplicationLinkByClientIDRequestProtoMsg,
  ): QueryApplicationLinkByClientIDRequest {
    return QueryApplicationLinkByClientIDRequest.decode(message.value);
  },
  toProto(message: QueryApplicationLinkByClientIDRequest): Uint8Array {
    return QueryApplicationLinkByClientIDRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryApplicationLinkByClientIDRequest,
  ): QueryApplicationLinkByClientIDRequestProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.QueryApplicationLinkByClientIDRequest",
      value: QueryApplicationLinkByClientIDRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryApplicationLinkByClientIDResponse(): QueryApplicationLinkByClientIDResponse {
  return {
    link: undefined,
  };
}
export const QueryApplicationLinkByClientIDResponse = {
  encode(
    message: QueryApplicationLinkByClientIDResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.link !== undefined) {
      ApplicationLink.encode(message.link, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
    I extends Exact<DeepPartial<QueryApplicationLinkByClientIDResponse>, I>,
  >(object: I): QueryApplicationLinkByClientIDResponse {
    const message = createBaseQueryApplicationLinkByClientIDResponse();
    message.link =
      object.link !== undefined && object.link !== null
        ? ApplicationLink.fromPartial(object.link)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryApplicationLinkByClientIDResponseAmino,
  ): QueryApplicationLinkByClientIDResponse {
    return {
      link: object?.link ? ApplicationLink.fromAmino(object.link) : undefined,
    };
  },
  toAmino(
    message: QueryApplicationLinkByClientIDResponse,
  ): QueryApplicationLinkByClientIDResponseAmino {
    const obj: any = {};
    obj.link = message.link ? ApplicationLink.toAmino(message.link) : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryApplicationLinkByClientIDResponseAminoMsg,
  ): QueryApplicationLinkByClientIDResponse {
    return QueryApplicationLinkByClientIDResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryApplicationLinkByClientIDResponseProtoMsg,
  ): QueryApplicationLinkByClientIDResponse {
    return QueryApplicationLinkByClientIDResponse.decode(message.value);
  },
  toProto(message: QueryApplicationLinkByClientIDResponse): Uint8Array {
    return QueryApplicationLinkByClientIDResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryApplicationLinkByClientIDResponse,
  ): QueryApplicationLinkByClientIDResponseProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.QueryApplicationLinkByClientIDResponse",
      value: QueryApplicationLinkByClientIDResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryApplicationLinkOwnersRequest(): QueryApplicationLinkOwnersRequest {
  return {
    application: "",
    username: "",
    pagination: undefined,
  };
}
export const QueryApplicationLinkOwnersRequest = {
  encode(
    message: QueryApplicationLinkOwnersRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.application !== "") {
      writer.uint32(10).string(message.application);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryApplicationLinkOwnersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApplicationLinkOwnersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.application = reader.string();
          break;
        case 2:
          message.username = reader.string();
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
  fromJSON(object: any): QueryApplicationLinkOwnersRequest {
    return {
      application: isSet(object.application) ? String(object.application) : "",
      username: isSet(object.username) ? String(object.username) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryApplicationLinkOwnersRequest): unknown {
    const obj: any = {};
    message.application !== undefined &&
      (obj.application = message.application);
    message.username !== undefined && (obj.username = message.username);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<QueryApplicationLinkOwnersRequest>, I>,
  >(object: I): QueryApplicationLinkOwnersRequest {
    const message = createBaseQueryApplicationLinkOwnersRequest();
    message.application = object.application ?? "";
    message.username = object.username ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryApplicationLinkOwnersRequestAmino,
  ): QueryApplicationLinkOwnersRequest {
    return {
      application: object.application,
      username: object.username,
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryApplicationLinkOwnersRequest,
  ): QueryApplicationLinkOwnersRequestAmino {
    const obj: any = {};
    obj.application = message.application;
    obj.username = message.username;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryApplicationLinkOwnersRequestAminoMsg,
  ): QueryApplicationLinkOwnersRequest {
    return QueryApplicationLinkOwnersRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryApplicationLinkOwnersRequestProtoMsg,
  ): QueryApplicationLinkOwnersRequest {
    return QueryApplicationLinkOwnersRequest.decode(message.value);
  },
  toProto(message: QueryApplicationLinkOwnersRequest): Uint8Array {
    return QueryApplicationLinkOwnersRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryApplicationLinkOwnersRequest,
  ): QueryApplicationLinkOwnersRequestProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.QueryApplicationLinkOwnersRequest",
      value: QueryApplicationLinkOwnersRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryApplicationLinkOwnersResponse(): QueryApplicationLinkOwnersResponse {
  return {
    owners: [],
    pagination: undefined,
  };
}
export const QueryApplicationLinkOwnersResponse = {
  encode(
    message: QueryApplicationLinkOwnersResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.owners) {
      QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails.encode(
        v!,
        writer.uint32(10).fork(),
      ).ldelim();
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
  ): QueryApplicationLinkOwnersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApplicationLinkOwnersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owners.push(
            QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails.decode(
              reader,
              reader.uint32(),
            ),
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
  fromJSON(object: any): QueryApplicationLinkOwnersResponse {
    return {
      owners: Array.isArray(object?.owners)
        ? object.owners.map((e: any) =>
            QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails.fromJSON(
              e,
            ),
          )
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryApplicationLinkOwnersResponse): unknown {
    const obj: any = {};
    if (message.owners) {
      obj.owners = message.owners.map((e) =>
        e
          ? QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails.toJSON(
              e,
            )
          : undefined,
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
  fromPartial<
    I extends Exact<DeepPartial<QueryApplicationLinkOwnersResponse>, I>,
  >(object: I): QueryApplicationLinkOwnersResponse {
    const message = createBaseQueryApplicationLinkOwnersResponse();
    message.owners =
      object.owners?.map((e) =>
        QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails.fromPartial(
          e,
        ),
      ) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryApplicationLinkOwnersResponseAmino,
  ): QueryApplicationLinkOwnersResponse {
    return {
      owners: Array.isArray(object?.owners)
        ? object.owners.map((e: any) =>
            QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails.fromAmino(
              e,
            ),
          )
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryApplicationLinkOwnersResponse,
  ): QueryApplicationLinkOwnersResponseAmino {
    const obj: any = {};
    if (message.owners) {
      obj.owners = message.owners.map((e) =>
        e
          ? QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails.toAmino(
              e,
            )
          : undefined,
      );
    } else {
      obj.owners = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryApplicationLinkOwnersResponseAminoMsg,
  ): QueryApplicationLinkOwnersResponse {
    return QueryApplicationLinkOwnersResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryApplicationLinkOwnersResponseProtoMsg,
  ): QueryApplicationLinkOwnersResponse {
    return QueryApplicationLinkOwnersResponse.decode(message.value);
  },
  toProto(message: QueryApplicationLinkOwnersResponse): Uint8Array {
    return QueryApplicationLinkOwnersResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryApplicationLinkOwnersResponse,
  ): QueryApplicationLinkOwnersResponseProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.QueryApplicationLinkOwnersResponse",
      value: QueryApplicationLinkOwnersResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails(): QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails {
  return {
    user: "",
    application: "",
    username: "",
  };
}
export const QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails = {
  encode(
    message: QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails,
    writer: _m0.Writer = _m0.Writer.create(),
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
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseQueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(
    object: any,
  ): QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails {
    return {
      user: isSet(object.user) ? String(object.user) : "",
      application: isSet(object.application) ? String(object.application) : "",
      username: isSet(object.username) ? String(object.username) : "",
    };
  },
  toJSON(
    message: QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails,
  ): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    message.application !== undefined &&
      (obj.application = message.application);
    message.username !== undefined && (obj.username = message.username);
    return obj;
  },
  fromPartial<
    I extends Exact<
      DeepPartial<QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails>,
      I
    >,
  >(object: I): QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails {
    const message =
      createBaseQueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails();
    message.user = object.user ?? "";
    message.application = object.application ?? "";
    message.username = object.username ?? "";
    return message;
  },
  fromAmino(
    object: QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetailsAmino,
  ): QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails {
    return {
      user: object.user,
      application: object.application,
      username: object.username,
    };
  },
  toAmino(
    message: QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails,
  ): QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetailsAmino {
    const obj: any = {};
    obj.user = message.user;
    obj.application = message.application;
    obj.username = message.username;
    return obj;
  },
  fromAminoMsg(
    object: QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetailsAminoMsg,
  ): QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails {
    return QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails.fromAmino(
      object.value,
    );
  },
  fromProtoMsg(
    message: QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetailsProtoMsg,
  ): QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails {
    return QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails.decode(
      message.value,
    );
  },
  toProto(
    message: QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails,
  ): Uint8Array {
    return QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails.encode(
      message,
    ).finish();
  },
  toProtoMsg(
    message: QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails,
  ): QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetailsProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.ApplicationLinkOwnerDetails",
      value:
        QueryApplicationLinkOwnersResponse_ApplicationLinkOwnerDetails.encode(
          message,
        ).finish(),
    };
  },
};
