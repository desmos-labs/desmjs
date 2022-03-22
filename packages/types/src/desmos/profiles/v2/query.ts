/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  QueryProfileResponse,
  QueryProfileRequest,
} from "../../../desmos/profiles/v2/query_profile";
import {
  QueryIncomingDTagTransferRequestsResponse,
  QueryIncomingDTagTransferRequestsRequest,
} from "../../../desmos/profiles/v2/query_dtag_requests";
import {
  QueryChainLinksResponse,
  QueryChainLinksRequest,
} from "../../../desmos/profiles/v2/query_chain_links";
import {
  QueryApplicationLinksResponse,
  QueryApplicationLinkByClientIDResponse,
  QueryApplicationLinksRequest,
  QueryApplicationLinkByClientIDRequest,
} from "../../../desmos/profiles/v2/query_app_links";
import {
  QueryParamsResponse,
  QueryParamsRequest,
} from "../../../desmos/profiles/v2/query_params";

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
  /**
   * ChainLinks queries the chain links associated to the given user, if
   * provided. Otherwise it queries all the chain links stored.
   */
  ChainLinks(request: QueryChainLinksRequest): Promise<QueryChainLinksResponse>;
  /**
   * ApplicationLinks queries the applications links associated to the given
   * user, if provided. Otherwise, it queries all the application links stored.
   */
  ApplicationLinks(
    request: QueryApplicationLinksRequest
  ): Promise<QueryApplicationLinksResponse>;
  /**
   * ApplicationLinkByClientID queries a single application link for a given
   * client id.
   */
  ApplicationLinkByClientID(
    request: QueryApplicationLinkByClientIDRequest
  ): Promise<QueryApplicationLinkByClientIDResponse>;
  /** Params queries the profiles module params */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Profile = this.Profile.bind(this);
    this.IncomingDTagTransferRequests =
      this.IncomingDTagTransferRequests.bind(this);
    this.ChainLinks = this.ChainLinks.bind(this);
    this.ApplicationLinks = this.ApplicationLinks.bind(this);
    this.ApplicationLinkByClientID = this.ApplicationLinkByClientID.bind(this);
    this.Params = this.Params.bind(this);
  }
  Profile(request: QueryProfileRequest): Promise<QueryProfileResponse> {
    const data = QueryProfileRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v2.Query",
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
      "desmos.profiles.v2.Query",
      "IncomingDTagTransferRequests",
      data
    );
    return promise.then((data) =>
      QueryIncomingDTagTransferRequestsResponse.decode(new _m0.Reader(data))
    );
  }

  ChainLinks(
    request: QueryChainLinksRequest
  ): Promise<QueryChainLinksResponse> {
    const data = QueryChainLinksRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v2.Query",
      "ChainLinks",
      data
    );
    return promise.then((data) =>
      QueryChainLinksResponse.decode(new _m0.Reader(data))
    );
  }

  ApplicationLinks(
    request: QueryApplicationLinksRequest
  ): Promise<QueryApplicationLinksResponse> {
    const data = QueryApplicationLinksRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v2.Query",
      "ApplicationLinks",
      data
    );
    return promise.then((data) =>
      QueryApplicationLinksResponse.decode(new _m0.Reader(data))
    );
  }

  ApplicationLinkByClientID(
    request: QueryApplicationLinkByClientIDRequest
  ): Promise<QueryApplicationLinkByClientIDResponse> {
    const data = QueryApplicationLinkByClientIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v2.Query",
      "ApplicationLinkByClientID",
      data
    );
    return promise.then((data) =>
      QueryApplicationLinkByClientIDResponse.decode(new _m0.Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.profiles.v2.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
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
