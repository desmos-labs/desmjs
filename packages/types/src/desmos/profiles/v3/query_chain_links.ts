/* eslint-disable */
import {
  PageRequest,
  PageRequestAmino,
  PageResponse,
  PageResponseAmino,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { ChainLink, ChainLinkAmino } from "./models_chain_links";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "desmos.profiles.v3";
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
export interface QueryChainLinksRequestProtoMsg {
  typeUrl: "/desmos.profiles.v3.QueryChainLinksRequest";
  value: Uint8Array;
}
/**
 * QueryChainLinksRequest represents the request that should be used in order
 * to retrieve the link associated with the provided user, for the given chain
 * and having the given target address
 */
export interface QueryChainLinksRequestAmino {
  /**
   * (optional) User represents the Desmos address of the user to which search
   * the link for
   */
  user: string;
  /**
   * (optional) ChainName contains the name of the chain to which search the
   * link for. Used only if user is also set
   */
  chain_name: string;
  /**
   * (optional) Target must contain the external address to which query the link
   * for. Used only if chain name is also set
   */
  target: string;
  /** Pagination defines an optional pagination for the request */
  pagination?: PageRequestAmino;
}
export interface QueryChainLinksRequestAminoMsg {
  type: "/desmos.profiles.v3.QueryChainLinksRequest";
  value: QueryChainLinksRequestAmino;
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
export interface QueryChainLinksResponseProtoMsg {
  typeUrl: "/desmos.profiles.v3.QueryChainLinksResponse";
  value: Uint8Array;
}
/**
 * QueryChainLinksResponse is the response type for the
 * Query/ChainLinks RPC method.
 */
export interface QueryChainLinksResponseAmino {
  links: ChainLinkAmino[];
  /** Pagination defines the pagination response */
  pagination?: PageResponseAmino;
}
export interface QueryChainLinksResponseAminoMsg {
  type: "/desmos.profiles.v3.QueryChainLinksResponse";
  value: QueryChainLinksResponseAmino;
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
export interface QueryChainLinkOwnersRequestProtoMsg {
  typeUrl: "/desmos.profiles.v3.QueryChainLinkOwnersRequest";
  value: Uint8Array;
}
/**
 * QueryChainLinkOwnersRequest contains the data of the request that can
 * be used to get chain link owners
 */
export interface QueryChainLinkOwnersRequestAmino {
  /**
   * (Optional) Chain name to search link owners of. If not specified, all
   * links stored will be searched instead.
   */
  chain_name: string;
  /**
   * (Optional) External address to search for. This will only be used if the
   * chain name is specified as well
   */
  target: string;
  /** Pagination defines an optional pagination for the request */
  pagination?: PageRequestAmino;
}
export interface QueryChainLinkOwnersRequestAminoMsg {
  type: "/desmos.profiles.v3.QueryChainLinkOwnersRequest";
  value: QueryChainLinkOwnersRequestAmino;
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
export interface QueryChainLinkOwnersResponseProtoMsg {
  typeUrl: "/desmos.profiles.v3.QueryChainLinkOwnersResponse";
  value: Uint8Array;
}
/**
 * QueryChainLinkOwnersResponse contains the data returned by the request
 * allowing to get chain link owners.
 */
export interface QueryChainLinkOwnersResponseAmino {
  /** Addresses of the chain links owners */
  owners: QueryChainLinkOwnersResponse_ChainLinkOwnerDetailsAmino[];
  /** Pagination defines the pagination response */
  pagination?: PageResponseAmino;
}
export interface QueryChainLinkOwnersResponseAminoMsg {
  type: "/desmos.profiles.v3.QueryChainLinkOwnersResponse";
  value: QueryChainLinkOwnersResponseAmino;
}
/** ChainLinkOwnerDetails contains the details of a single chain link owner */
export interface QueryChainLinkOwnersResponse_ChainLinkOwnerDetails {
  user: string;
  chainName: string;
  target: string;
}
export interface QueryChainLinkOwnersResponse_ChainLinkOwnerDetailsProtoMsg {
  typeUrl: "/desmos.profiles.v3.ChainLinkOwnerDetails";
  value: Uint8Array;
}
/** ChainLinkOwnerDetails contains the details of a single chain link owner */
export interface QueryChainLinkOwnersResponse_ChainLinkOwnerDetailsAmino {
  user: string;
  chain_name: string;
  target: string;
}
export interface QueryChainLinkOwnersResponse_ChainLinkOwnerDetailsAminoMsg {
  type: "/desmos.profiles.v3.ChainLinkOwnerDetails";
  value: QueryChainLinkOwnersResponse_ChainLinkOwnerDetailsAmino;
}
/**
 * QueryDefaultExternalAddressesRequest is the request type for
 * Query/DefaultExternalAddresses RPC method
 */
export interface QueryDefaultExternalAddressesRequest {
  /** (Optional) Owner for which to query the default addresses */
  owner: string;
  /** (Optional) Chain name to query the default address for */
  chainName: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDefaultExternalAddressesRequestProtoMsg {
  typeUrl: "/desmos.profiles.v3.QueryDefaultExternalAddressesRequest";
  value: Uint8Array;
}
/**
 * QueryDefaultExternalAddressesRequest is the request type for
 * Query/DefaultExternalAddresses RPC method
 */
export interface QueryDefaultExternalAddressesRequestAmino {
  /** (Optional) Owner for which to query the default addresses */
  owner: string;
  /** (Optional) Chain name to query the default address for */
  chain_name: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDefaultExternalAddressesRequestAminoMsg {
  type: "/desmos.profiles.v3.QueryDefaultExternalAddressesRequest";
  value: QueryDefaultExternalAddressesRequestAmino;
}
/**
 * QueryDefaultExternalAddressesResponse is the response type for
 * Query/DefaultExternalAddresses RPC method
 */
export interface QueryDefaultExternalAddressesResponse {
  /**
   * List of default addresses, each one represented by the associated chain
   * link
   */
  links: ChainLink[];
  pagination?: PageResponse;
}
export interface QueryDefaultExternalAddressesResponseProtoMsg {
  typeUrl: "/desmos.profiles.v3.QueryDefaultExternalAddressesResponse";
  value: Uint8Array;
}
/**
 * QueryDefaultExternalAddressesResponse is the response type for
 * Query/DefaultExternalAddresses RPC method
 */
export interface QueryDefaultExternalAddressesResponseAmino {
  /**
   * List of default addresses, each one represented by the associated chain
   * link
   */
  links: ChainLinkAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryDefaultExternalAddressesResponseAminoMsg {
  type: "/desmos.profiles.v3.QueryDefaultExternalAddressesResponse";
  value: QueryDefaultExternalAddressesResponseAmino;
}
function createBaseQueryChainLinksRequest(): QueryChainLinksRequest {
  return {
    user: "",
    chainName: "",
    target: "",
    pagination: undefined,
  };
}
export const QueryChainLinksRequest = {
  encode(
    message: QueryChainLinksRequest,
    writer: _m0.Writer = _m0.Writer.create(),
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
    length?: number,
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
    object: I,
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
  fromAmino(object: QueryChainLinksRequestAmino): QueryChainLinksRequest {
    return {
      user: object.user,
      chainName: object.chain_name,
      target: object.target,
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryChainLinksRequest): QueryChainLinksRequestAmino {
    const obj: any = {};
    obj.user = message.user;
    obj.chain_name = message.chainName;
    obj.target = message.target;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryChainLinksRequestAminoMsg): QueryChainLinksRequest {
    return QueryChainLinksRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryChainLinksRequestProtoMsg,
  ): QueryChainLinksRequest {
    return QueryChainLinksRequest.decode(message.value);
  },
  toProto(message: QueryChainLinksRequest): Uint8Array {
    return QueryChainLinksRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryChainLinksRequest): QueryChainLinksRequestProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.QueryChainLinksRequest",
      value: QueryChainLinksRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryChainLinksResponse(): QueryChainLinksResponse {
  return {
    links: [],
    pagination: undefined,
  };
}
export const QueryChainLinksResponse = {
  encode(
    message: QueryChainLinksResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.links) {
      ChainLink.encode(v!, writer.uint32(10).fork()).ldelim();
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
        e ? ChainLink.toJSON(e) : undefined,
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
    object: I,
  ): QueryChainLinksResponse {
    const message = createBaseQueryChainLinksResponse();
    message.links = object.links?.map((e) => ChainLink.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryChainLinksResponseAmino): QueryChainLinksResponse {
    return {
      links: Array.isArray(object?.links)
        ? object.links.map((e: any) => ChainLink.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryChainLinksResponse): QueryChainLinksResponseAmino {
    const obj: any = {};
    if (message.links) {
      obj.links = message.links.map((e) =>
        e ? ChainLink.toAmino(e) : undefined,
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
    object: QueryChainLinksResponseAminoMsg,
  ): QueryChainLinksResponse {
    return QueryChainLinksResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryChainLinksResponseProtoMsg,
  ): QueryChainLinksResponse {
    return QueryChainLinksResponse.decode(message.value);
  },
  toProto(message: QueryChainLinksResponse): Uint8Array {
    return QueryChainLinksResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryChainLinksResponse,
  ): QueryChainLinksResponseProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.QueryChainLinksResponse",
      value: QueryChainLinksResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryChainLinkOwnersRequest(): QueryChainLinkOwnersRequest {
  return {
    chainName: "",
    target: "",
    pagination: undefined,
  };
}
export const QueryChainLinkOwnersRequest = {
  encode(
    message: QueryChainLinkOwnersRequest,
    writer: _m0.Writer = _m0.Writer.create(),
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
    length?: number,
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
    object: I,
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
  fromAmino(
    object: QueryChainLinkOwnersRequestAmino,
  ): QueryChainLinkOwnersRequest {
    return {
      chainName: object.chain_name,
      target: object.target,
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryChainLinkOwnersRequest,
  ): QueryChainLinkOwnersRequestAmino {
    const obj: any = {};
    obj.chain_name = message.chainName;
    obj.target = message.target;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryChainLinkOwnersRequestAminoMsg,
  ): QueryChainLinkOwnersRequest {
    return QueryChainLinkOwnersRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryChainLinkOwnersRequestProtoMsg,
  ): QueryChainLinkOwnersRequest {
    return QueryChainLinkOwnersRequest.decode(message.value);
  },
  toProto(message: QueryChainLinkOwnersRequest): Uint8Array {
    return QueryChainLinkOwnersRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryChainLinkOwnersRequest,
  ): QueryChainLinkOwnersRequestProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.QueryChainLinkOwnersRequest",
      value: QueryChainLinkOwnersRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryChainLinkOwnersResponse(): QueryChainLinkOwnersResponse {
  return {
    owners: [],
    pagination: undefined,
  };
}
export const QueryChainLinkOwnersResponse = {
  encode(
    message: QueryChainLinkOwnersResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.owners) {
      QueryChainLinkOwnersResponse_ChainLinkOwnerDetails.encode(
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
  fromJSON(object: any): QueryChainLinkOwnersResponse {
    return {
      owners: Array.isArray(object?.owners)
        ? object.owners.map((e: any) =>
            QueryChainLinkOwnersResponse_ChainLinkOwnerDetails.fromJSON(e),
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
  fromPartial<I extends Exact<DeepPartial<QueryChainLinkOwnersResponse>, I>>(
    object: I,
  ): QueryChainLinkOwnersResponse {
    const message = createBaseQueryChainLinkOwnersResponse();
    message.owners =
      object.owners?.map((e) =>
        QueryChainLinkOwnersResponse_ChainLinkOwnerDetails.fromPartial(e),
      ) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryChainLinkOwnersResponseAmino,
  ): QueryChainLinkOwnersResponse {
    return {
      owners: Array.isArray(object?.owners)
        ? object.owners.map((e: any) =>
            QueryChainLinkOwnersResponse_ChainLinkOwnerDetails.fromAmino(e),
          )
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryChainLinkOwnersResponse,
  ): QueryChainLinkOwnersResponseAmino {
    const obj: any = {};
    if (message.owners) {
      obj.owners = message.owners.map((e) =>
        e
          ? QueryChainLinkOwnersResponse_ChainLinkOwnerDetails.toAmino(e)
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
    object: QueryChainLinkOwnersResponseAminoMsg,
  ): QueryChainLinkOwnersResponse {
    return QueryChainLinkOwnersResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryChainLinkOwnersResponseProtoMsg,
  ): QueryChainLinkOwnersResponse {
    return QueryChainLinkOwnersResponse.decode(message.value);
  },
  toProto(message: QueryChainLinkOwnersResponse): Uint8Array {
    return QueryChainLinkOwnersResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryChainLinkOwnersResponse,
  ): QueryChainLinkOwnersResponseProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.QueryChainLinkOwnersResponse",
      value: QueryChainLinkOwnersResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryChainLinkOwnersResponse_ChainLinkOwnerDetails(): QueryChainLinkOwnersResponse_ChainLinkOwnerDetails {
  return {
    user: "",
    chainName: "",
    target: "",
  };
}
export const QueryChainLinkOwnersResponse_ChainLinkOwnerDetails = {
  encode(
    message: QueryChainLinkOwnersResponse_ChainLinkOwnerDetails,
    writer: _m0.Writer = _m0.Writer.create(),
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
    length?: number,
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
    >,
  >(object: I): QueryChainLinkOwnersResponse_ChainLinkOwnerDetails {
    const message =
      createBaseQueryChainLinkOwnersResponse_ChainLinkOwnerDetails();
    message.user = object.user ?? "";
    message.chainName = object.chainName ?? "";
    message.target = object.target ?? "";
    return message;
  },
  fromAmino(
    object: QueryChainLinkOwnersResponse_ChainLinkOwnerDetailsAmino,
  ): QueryChainLinkOwnersResponse_ChainLinkOwnerDetails {
    return {
      user: object.user,
      chainName: object.chain_name,
      target: object.target,
    };
  },
  toAmino(
    message: QueryChainLinkOwnersResponse_ChainLinkOwnerDetails,
  ): QueryChainLinkOwnersResponse_ChainLinkOwnerDetailsAmino {
    const obj: any = {};
    obj.user = message.user;
    obj.chain_name = message.chainName;
    obj.target = message.target;
    return obj;
  },
  fromAminoMsg(
    object: QueryChainLinkOwnersResponse_ChainLinkOwnerDetailsAminoMsg,
  ): QueryChainLinkOwnersResponse_ChainLinkOwnerDetails {
    return QueryChainLinkOwnersResponse_ChainLinkOwnerDetails.fromAmino(
      object.value,
    );
  },
  fromProtoMsg(
    message: QueryChainLinkOwnersResponse_ChainLinkOwnerDetailsProtoMsg,
  ): QueryChainLinkOwnersResponse_ChainLinkOwnerDetails {
    return QueryChainLinkOwnersResponse_ChainLinkOwnerDetails.decode(
      message.value,
    );
  },
  toProto(
    message: QueryChainLinkOwnersResponse_ChainLinkOwnerDetails,
  ): Uint8Array {
    return QueryChainLinkOwnersResponse_ChainLinkOwnerDetails.encode(
      message,
    ).finish();
  },
  toProtoMsg(
    message: QueryChainLinkOwnersResponse_ChainLinkOwnerDetails,
  ): QueryChainLinkOwnersResponse_ChainLinkOwnerDetailsProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.ChainLinkOwnerDetails",
      value:
        QueryChainLinkOwnersResponse_ChainLinkOwnerDetails.encode(
          message,
        ).finish(),
    };
  },
};
function createBaseQueryDefaultExternalAddressesRequest(): QueryDefaultExternalAddressesRequest {
  return {
    owner: "",
    chainName: "",
    pagination: undefined,
  };
}
export const QueryDefaultExternalAddressesRequest = {
  encode(
    message: QueryDefaultExternalAddressesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.chainName !== "") {
      writer.uint32(18).string(message.chainName);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDefaultExternalAddressesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDefaultExternalAddressesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.chainName = reader.string();
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
  fromJSON(object: any): QueryDefaultExternalAddressesRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryDefaultExternalAddressesRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<QueryDefaultExternalAddressesRequest>, I>,
  >(object: I): QueryDefaultExternalAddressesRequest {
    const message = createBaseQueryDefaultExternalAddressesRequest();
    message.owner = object.owner ?? "";
    message.chainName = object.chainName ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryDefaultExternalAddressesRequestAmino,
  ): QueryDefaultExternalAddressesRequest {
    return {
      owner: object.owner,
      chainName: object.chain_name,
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryDefaultExternalAddressesRequest,
  ): QueryDefaultExternalAddressesRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.chain_name = message.chainName;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryDefaultExternalAddressesRequestAminoMsg,
  ): QueryDefaultExternalAddressesRequest {
    return QueryDefaultExternalAddressesRequest.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryDefaultExternalAddressesRequestProtoMsg,
  ): QueryDefaultExternalAddressesRequest {
    return QueryDefaultExternalAddressesRequest.decode(message.value);
  },
  toProto(message: QueryDefaultExternalAddressesRequest): Uint8Array {
    return QueryDefaultExternalAddressesRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryDefaultExternalAddressesRequest,
  ): QueryDefaultExternalAddressesRequestProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.QueryDefaultExternalAddressesRequest",
      value: QueryDefaultExternalAddressesRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryDefaultExternalAddressesResponse(): QueryDefaultExternalAddressesResponse {
  return {
    links: [],
    pagination: undefined,
  };
}
export const QueryDefaultExternalAddressesResponse = {
  encode(
    message: QueryDefaultExternalAddressesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.links) {
      ChainLink.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryDefaultExternalAddressesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDefaultExternalAddressesResponse();
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
  fromJSON(object: any): QueryDefaultExternalAddressesResponse {
    return {
      links: Array.isArray(object?.links)
        ? object.links.map((e: any) => ChainLink.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryDefaultExternalAddressesResponse): unknown {
    const obj: any = {};
    if (message.links) {
      obj.links = message.links.map((e) =>
        e ? ChainLink.toJSON(e) : undefined,
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
  fromPartial<
    I extends Exact<DeepPartial<QueryDefaultExternalAddressesResponse>, I>,
  >(object: I): QueryDefaultExternalAddressesResponse {
    const message = createBaseQueryDefaultExternalAddressesResponse();
    message.links = object.links?.map((e) => ChainLink.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryDefaultExternalAddressesResponseAmino,
  ): QueryDefaultExternalAddressesResponse {
    return {
      links: Array.isArray(object?.links)
        ? object.links.map((e: any) => ChainLink.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryDefaultExternalAddressesResponse,
  ): QueryDefaultExternalAddressesResponseAmino {
    const obj: any = {};
    if (message.links) {
      obj.links = message.links.map((e) =>
        e ? ChainLink.toAmino(e) : undefined,
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
    object: QueryDefaultExternalAddressesResponseAminoMsg,
  ): QueryDefaultExternalAddressesResponse {
    return QueryDefaultExternalAddressesResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: QueryDefaultExternalAddressesResponseProtoMsg,
  ): QueryDefaultExternalAddressesResponse {
    return QueryDefaultExternalAddressesResponse.decode(message.value);
  },
  toProto(message: QueryDefaultExternalAddressesResponse): Uint8Array {
    return QueryDefaultExternalAddressesResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryDefaultExternalAddressesResponse,
  ): QueryDefaultExternalAddressesResponseProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.QueryDefaultExternalAddressesResponse",
      value: QueryDefaultExternalAddressesResponse.encode(message).finish(),
    };
  },
};
