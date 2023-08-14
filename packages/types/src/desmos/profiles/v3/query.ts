/* eslint-disable */
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryProfileRequest, QueryProfileResponse } from "./query_profile";
import {
  QueryIncomingDTagTransferRequestsRequest,
  QueryIncomingDTagTransferRequestsResponse,
} from "./query_dtag_requests";
import {
  QueryChainLinkOwnersRequest,
  QueryChainLinkOwnersResponse,
  QueryChainLinksRequest,
  QueryChainLinksResponse,
  QueryDefaultExternalAddressesRequest,
  QueryDefaultExternalAddressesResponse,
} from "./query_chain_links";
import {
  QueryApplicationLinkByClientIDRequest,
  QueryApplicationLinkByClientIDResponse,
  QueryApplicationLinkOwnersRequest,
  QueryApplicationLinkOwnersResponse,
  QueryApplicationLinksRequest,
  QueryApplicationLinksResponse,
} from "./query_app_links";
import { QueryParamsRequest, QueryParamsResponse } from "./query_params";

export const protobufPackage = "desmos.profiles.v3";
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
    request: QueryIncomingDTagTransferRequestsRequest,
  ): Promise<QueryIncomingDTagTransferRequestsResponse>;
  /**
   * ChainLinks queries the chain links associated to the given user, if
   * provided. Otherwise it queries all the chain links stored.
   */
  ChainLinks(request: QueryChainLinksRequest): Promise<QueryChainLinksResponse>;
  /**
   * ChainLinkOwners queries for the owners of chain links, optionally searching
   * for a specific chain name and external address
   */
  ChainLinkOwners(
    request: QueryChainLinkOwnersRequest,
  ): Promise<QueryChainLinkOwnersResponse>;
  /**
   * DefaultExternalAddresses queries the default addresses associated to the
   * given user and (optionally) chain name
   */
  DefaultExternalAddresses(
    request: QueryDefaultExternalAddressesRequest,
  ): Promise<QueryDefaultExternalAddressesResponse>;
  /**
   * ApplicationLinks queries the applications links associated to the given
   * user, if provided. Otherwise, it queries all the application links stored.
   */
  ApplicationLinks(
    request: QueryApplicationLinksRequest,
  ): Promise<QueryApplicationLinksResponse>;
  /**
   * ApplicationLinkByClientID queries a single application link for a given
   * client id.
   */
  ApplicationLinkByClientID(
    request: QueryApplicationLinkByClientIDRequest,
  ): Promise<QueryApplicationLinkByClientIDResponse>;
  /**
   * ApplicationLinkOwners queries for the owners of applications links,
   * optionally searching for a specific application and username.
   */
  ApplicationLinkOwners(
    request: QueryApplicationLinkOwnersRequest,
  ): Promise<QueryApplicationLinkOwnersResponse>;
  /** Params queries the profiles module params */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Profile = this.Profile.bind(this);
    this.IncomingDTagTransferRequests =
      this.IncomingDTagTransferRequests.bind(this);
    this.ChainLinks = this.ChainLinks.bind(this);
    this.ChainLinkOwners = this.ChainLinkOwners.bind(this);
    this.DefaultExternalAddresses = this.DefaultExternalAddresses.bind(this);
    this.ApplicationLinks = this.ApplicationLinks.bind(this);
    this.ApplicationLinkByClientID = this.ApplicationLinkByClientID.bind(this);
    this.ApplicationLinkOwners = this.ApplicationLinkOwners.bind(this);
    this.Params = this.Params.bind(this);
  }
  Profile(request: QueryProfileRequest): Promise<QueryProfileResponse> {
    const data = QueryProfileRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v3.Query",
      "Profile",
      data,
    );
    return promise.then((data) =>
      QueryProfileResponse.decode(new _m0.Reader(data)),
    );
  }
  IncomingDTagTransferRequests(
    request: QueryIncomingDTagTransferRequestsRequest,
  ): Promise<QueryIncomingDTagTransferRequestsResponse> {
    const data =
      QueryIncomingDTagTransferRequestsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v3.Query",
      "IncomingDTagTransferRequests",
      data,
    );
    return promise.then((data) =>
      QueryIncomingDTagTransferRequestsResponse.decode(new _m0.Reader(data)),
    );
  }
  ChainLinks(
    request: QueryChainLinksRequest,
  ): Promise<QueryChainLinksResponse> {
    const data = QueryChainLinksRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v3.Query",
      "ChainLinks",
      data,
    );
    return promise.then((data) =>
      QueryChainLinksResponse.decode(new _m0.Reader(data)),
    );
  }
  ChainLinkOwners(
    request: QueryChainLinkOwnersRequest,
  ): Promise<QueryChainLinkOwnersResponse> {
    const data = QueryChainLinkOwnersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v3.Query",
      "ChainLinkOwners",
      data,
    );
    return promise.then((data) =>
      QueryChainLinkOwnersResponse.decode(new _m0.Reader(data)),
    );
  }
  DefaultExternalAddresses(
    request: QueryDefaultExternalAddressesRequest,
  ): Promise<QueryDefaultExternalAddressesResponse> {
    const data = QueryDefaultExternalAddressesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v3.Query",
      "DefaultExternalAddresses",
      data,
    );
    return promise.then((data) =>
      QueryDefaultExternalAddressesResponse.decode(new _m0.Reader(data)),
    );
  }
  ApplicationLinks(
    request: QueryApplicationLinksRequest,
  ): Promise<QueryApplicationLinksResponse> {
    const data = QueryApplicationLinksRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v3.Query",
      "ApplicationLinks",
      data,
    );
    return promise.then((data) =>
      QueryApplicationLinksResponse.decode(new _m0.Reader(data)),
    );
  }
  ApplicationLinkByClientID(
    request: QueryApplicationLinkByClientIDRequest,
  ): Promise<QueryApplicationLinkByClientIDResponse> {
    const data = QueryApplicationLinkByClientIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v3.Query",
      "ApplicationLinkByClientID",
      data,
    );
    return promise.then((data) =>
      QueryApplicationLinkByClientIDResponse.decode(new _m0.Reader(data)),
    );
  }
  ApplicationLinkOwners(
    request: QueryApplicationLinkOwnersRequest,
  ): Promise<QueryApplicationLinkOwnersResponse> {
    const data = QueryApplicationLinkOwnersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v3.Query",
      "ApplicationLinkOwners",
      data,
    );
    return promise.then((data) =>
      QueryApplicationLinkOwnersResponse.decode(new _m0.Reader(data)),
    );
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v3.Query",
      "Params",
      data,
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data)),
    );
  }
}
