/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  QueryProfileResponse,
  QueryProfileRequest,
} from "../../../desmos/profiles/v1beta1/query_profile";
import {
  QueryIncomingDTagTransferRequestsResponse,
  QueryIncomingDTagTransferRequestsRequest,
} from "../../../desmos/profiles/v1beta1/query_dtag_requests";
import {
  QueryParamsResponse,
  QueryParamsRequest,
} from "../../../desmos/profiles/v1beta1/query_params";
import {
  QueryUserRelationshipsResponse,
  QueryUserBlocksResponse,
  QueryUserRelationshipsRequest,
  QueryUserBlocksRequest,
} from "../../../desmos/profiles/v1beta1/query_relationships";
import {
  QueryUserChainLinksResponse,
  QueryUserChainLinkResponse,
  QueryUserChainLinksRequest,
  QueryUserChainLinkRequest,
} from "../../../desmos/profiles/v1beta1/query_chain_links";
import {
  QueryUserApplicationLinksResponse,
  QueryUserApplicationLinkResponse,
  QueryApplicationLinkByClientIDResponse,
  QueryUserApplicationLinksRequest,
  QueryUserApplicationLinkRequest,
  QueryApplicationLinkByClientIDRequest,
} from "../../../desmos/profiles/v1beta1/query_app_links";

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Profile queries the profile of a specific user given their DTag or address.
   * If the queried user does not have a profile, the returned response will
   * contain a null profile.
   */
  Profile(request: QueryProfileRequest): Promise<QueryProfileResponse>;
  /**
   * IncomingDTagTransferRequests queries all the DTag transfers requests that
   * have been made towards the user with the given address
   */
  IncomingDTagTransferRequests(
    request: QueryIncomingDTagTransferRequestsRequest
  ): Promise<QueryIncomingDTagTransferRequestsResponse>;
  /** Params queries the profiles module params */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * UserRelationships queries the relationships for the user having the given
   * address
   */
  UserRelationships(
    request: QueryUserRelationshipsRequest
  ): Promise<QueryUserRelationshipsResponse>;
  /** UserBlocks queries the user blocks for the user having the given address */
  UserBlocks(request: QueryUserBlocksRequest): Promise<QueryUserBlocksResponse>;
  /** UserChainLinks queries chain links for the given user */
  UserChainLinks(
    request: QueryUserChainLinksRequest
  ): Promise<QueryUserChainLinksResponse>;
  /**
   * UserChainLink queries the chain link for the given user, chain name and
   * target address
   */
  UserChainLink(
    request: QueryUserChainLinkRequest
  ): Promise<QueryUserChainLinkResponse>;
  /** UserApplicationLinks queries application links for the given user */
  UserApplicationLinks(
    request: QueryUserApplicationLinksRequest
  ): Promise<QueryUserApplicationLinksResponse>;
  /**
   * UserApplicationLinks queries a single application link for a given user,
   * searching via the application name and username
   */
  UserApplicationLink(
    request: QueryUserApplicationLinkRequest
  ): Promise<QueryUserApplicationLinkResponse>;
  /**
   * ApplicationLinkByClientID queries a single application link for a given
   * client id.
   */
  ApplicationLinkByClientID(
    request: QueryApplicationLinkByClientIDRequest
  ): Promise<QueryApplicationLinkByClientIDResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Profile = this.Profile.bind(this);
    this.IncomingDTagTransferRequests =
      this.IncomingDTagTransferRequests.bind(this);
    this.Params = this.Params.bind(this);
    this.UserRelationships = this.UserRelationships.bind(this);
    this.UserBlocks = this.UserBlocks.bind(this);
    this.UserChainLinks = this.UserChainLinks.bind(this);
    this.UserChainLink = this.UserChainLink.bind(this);
    this.UserApplicationLinks = this.UserApplicationLinks.bind(this);
    this.UserApplicationLink = this.UserApplicationLink.bind(this);
    this.ApplicationLinkByClientID = this.ApplicationLinkByClientID.bind(this);
  }
  Profile(request: QueryProfileRequest): Promise<QueryProfileResponse> {
    const data = QueryProfileRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v1beta1.Query",
      "Profile",
      data
    );
    return promise.then((data) =>
      QueryProfileResponse.decode(new _m0.Reader(data))
    );
  }

  IncomingDTagTransferRequests(
    request: QueryIncomingDTagTransferRequestsRequest
  ): Promise<QueryIncomingDTagTransferRequestsResponse> {
    const data =
      QueryIncomingDTagTransferRequestsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v1beta1.Query",
      "IncomingDTagTransferRequests",
      data
    );
    return promise.then((data) =>
      QueryIncomingDTagTransferRequestsResponse.decode(new _m0.Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v1beta1.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  UserRelationships(
    request: QueryUserRelationshipsRequest
  ): Promise<QueryUserRelationshipsResponse> {
    const data = QueryUserRelationshipsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v1beta1.Query",
      "UserRelationships",
      data
    );
    return promise.then((data) =>
      QueryUserRelationshipsResponse.decode(new _m0.Reader(data))
    );
  }

  UserBlocks(
    request: QueryUserBlocksRequest
  ): Promise<QueryUserBlocksResponse> {
    const data = QueryUserBlocksRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v1beta1.Query",
      "UserBlocks",
      data
    );
    return promise.then((data) =>
      QueryUserBlocksResponse.decode(new _m0.Reader(data))
    );
  }

  UserChainLinks(
    request: QueryUserChainLinksRequest
  ): Promise<QueryUserChainLinksResponse> {
    const data = QueryUserChainLinksRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v1beta1.Query",
      "UserChainLinks",
      data
    );
    return promise.then((data) =>
      QueryUserChainLinksResponse.decode(new _m0.Reader(data))
    );
  }

  UserChainLink(
    request: QueryUserChainLinkRequest
  ): Promise<QueryUserChainLinkResponse> {
    const data = QueryUserChainLinkRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v1beta1.Query",
      "UserChainLink",
      data
    );
    return promise.then((data) =>
      QueryUserChainLinkResponse.decode(new _m0.Reader(data))
    );
  }

  UserApplicationLinks(
    request: QueryUserApplicationLinksRequest
  ): Promise<QueryUserApplicationLinksResponse> {
    const data = QueryUserApplicationLinksRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v1beta1.Query",
      "UserApplicationLinks",
      data
    );
    return promise.then((data) =>
      QueryUserApplicationLinksResponse.decode(new _m0.Reader(data))
    );
  }

  UserApplicationLink(
    request: QueryUserApplicationLinkRequest
  ): Promise<QueryUserApplicationLinkResponse> {
    const data = QueryUserApplicationLinkRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v1beta1.Query",
      "UserApplicationLink",
      data
    );
    return promise.then((data) =>
      QueryUserApplicationLinkResponse.decode(new _m0.Reader(data))
    );
  }

  ApplicationLinkByClientID(
    request: QueryApplicationLinkByClientIDRequest
  ): Promise<QueryApplicationLinkByClientIDResponse> {
    const data = QueryApplicationLinkByClientIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v1beta1.Query",
      "ApplicationLinkByClientID",
      data
    );
    return promise.then((data) =>
      QueryApplicationLinkByClientIDResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
