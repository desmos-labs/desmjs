/* eslint-disable */
import {
  PageRequest,
  PageRequestAmino,
  PageResponse,
  PageResponseAmino,
} from "../../base/query/v1beta1/pagination";
import { Coin, CoinAmino } from "../../base/v1beta1/coin";
import {
  Params,
  ParamsAmino,
  Metadata,
  MetadataAmino,
  SendEnabled,
  SendEnabledAmino,
} from "./bank";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.bank.v1beta1";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
  /** address is the address to query balances for. */
  address: string;
  /** denom is the coin denom to query balances for. */
  denom: string;
}
export interface QueryBalanceRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryBalanceRequest";
  value: Uint8Array;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequestAmino {
  /** address is the address to query balances for. */
  address: string;
  /** denom is the coin denom to query balances for. */
  denom: string;
}
export interface QueryBalanceRequestAminoMsg {
  type: "cosmos-sdk/QueryBalanceRequest";
  value: QueryBalanceRequestAmino;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
  /** balance is the balance of the coin. */
  balance?: Coin;
}
export interface QueryBalanceResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryBalanceResponse";
  value: Uint8Array;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponseAmino {
  /** balance is the balance of the coin. */
  balance?: CoinAmino;
}
export interface QueryBalanceResponseAminoMsg {
  type: "cosmos-sdk/QueryBalanceResponse";
  value: QueryBalanceResponseAmino;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequest {
  /** address is the address to query balances for. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryAllBalancesRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesRequest";
  value: Uint8Array;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequestAmino {
  /** address is the address to query balances for. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryAllBalancesRequestAminoMsg {
  type: "cosmos-sdk/QueryAllBalancesRequest";
  value: QueryAllBalancesRequestAmino;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponse {
  /** balances is the balances of all the coins. */
  balances: Coin[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryAllBalancesResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesResponse";
  value: Uint8Array;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponseAmino {
  /** balances is the balances of all the coins. */
  balances: CoinAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAllBalancesResponseAminoMsg {
  type: "cosmos-sdk/QueryAllBalancesResponse";
  value: QueryAllBalancesResponseAmino;
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySpendableBalancesRequest {
  /** address is the address to query spendable balances for. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QuerySpendableBalancesRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesRequest";
  value: Uint8Array;
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySpendableBalancesRequestAmino {
  /** address is the address to query spendable balances for. */
  address: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QuerySpendableBalancesRequestAminoMsg {
  type: "cosmos-sdk/QuerySpendableBalancesRequest";
  value: QuerySpendableBalancesRequestAmino;
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySpendableBalancesResponse {
  /** balances is the spendable balances of all the coins. */
  balances: Coin[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QuerySpendableBalancesResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesResponse";
  value: Uint8Array;
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySpendableBalancesResponseAmino {
  /** balances is the spendable balances of all the coins. */
  balances: CoinAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QuerySpendableBalancesResponseAminoMsg {
  type: "cosmos-sdk/QuerySpendableBalancesResponse";
  value: QuerySpendableBalancesResponseAmino;
}
/**
 * QuerySpendableBalanceByDenomRequest defines the gRPC request structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySpendableBalanceByDenomRequest {
  /** address is the address to query balances for. */
  address: string;
  /** denom is the coin denom to query balances for. */
  denom: string;
}
export interface QuerySpendableBalanceByDenomRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest";
  value: Uint8Array;
}
/**
 * QuerySpendableBalanceByDenomRequest defines the gRPC request structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySpendableBalanceByDenomRequestAmino {
  /** address is the address to query balances for. */
  address: string;
  /** denom is the coin denom to query balances for. */
  denom: string;
}
export interface QuerySpendableBalanceByDenomRequestAminoMsg {
  type: "cosmos-sdk/QuerySpendableBalanceByDenomRequest";
  value: QuerySpendableBalanceByDenomRequestAmino;
}
/**
 * QuerySpendableBalanceByDenomResponse defines the gRPC response structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySpendableBalanceByDenomResponse {
  /** balance is the balance of the coin. */
  balance?: Coin;
}
export interface QuerySpendableBalanceByDenomResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse";
  value: Uint8Array;
}
/**
 * QuerySpendableBalanceByDenomResponse defines the gRPC response structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySpendableBalanceByDenomResponseAmino {
  /** balance is the balance of the coin. */
  balance?: CoinAmino;
}
export interface QuerySpendableBalanceByDenomResponseAminoMsg {
  type: "cosmos-sdk/QuerySpendableBalanceByDenomResponse";
  value: QuerySpendableBalanceByDenomResponseAmino;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequest {
  /**
   * pagination defines an optional pagination for the request.
   *
   * Since: cosmos-sdk 0.43
   */
  pagination?: PageRequest;
}
export interface QueryTotalSupplyRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyRequest";
  value: Uint8Array;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequestAmino {
  /**
   * pagination defines an optional pagination for the request.
   *
   * Since: cosmos-sdk 0.43
   */
  pagination?: PageRequestAmino;
}
export interface QueryTotalSupplyRequestAminoMsg {
  type: "cosmos-sdk/QueryTotalSupplyRequest";
  value: QueryTotalSupplyRequestAmino;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponse {
  /** supply is the supply of the coins */
  supply: Coin[];
  /**
   * pagination defines the pagination in the response.
   *
   * Since: cosmos-sdk 0.43
   */
  pagination?: PageResponse;
}
export interface QueryTotalSupplyResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyResponse";
  value: Uint8Array;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponseAmino {
  /** supply is the supply of the coins */
  supply: CoinAmino[];
  /**
   * pagination defines the pagination in the response.
   *
   * Since: cosmos-sdk 0.43
   */
  pagination?: PageResponseAmino;
}
export interface QueryTotalSupplyResponseAminoMsg {
  type: "cosmos-sdk/QueryTotalSupplyResponse";
  value: QueryTotalSupplyResponseAmino;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequest {
  /** denom is the coin denom to query balances for. */
  denom: string;
}
export interface QuerySupplyOfRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfRequest";
  value: Uint8Array;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequestAmino {
  /** denom is the coin denom to query balances for. */
  denom: string;
}
export interface QuerySupplyOfRequestAminoMsg {
  type: "cosmos-sdk/QuerySupplyOfRequest";
  value: QuerySupplyOfRequestAmino;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponse {
  /** amount is the supply of the coin. */
  amount?: Coin;
}
export interface QuerySupplyOfResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfResponse";
  value: Uint8Array;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponseAmino {
  /** amount is the supply of the coin. */
  amount?: CoinAmino;
}
export interface QuerySupplyOfResponseAminoMsg {
  type: "cosmos-sdk/QuerySupplyOfResponse";
  value: QuerySupplyOfResponseAmino;
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDenomsMetadataRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataRequest";
  value: Uint8Array;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDenomsMetadataRequestAminoMsg {
  type: "cosmos-sdk/QueryDenomsMetadataRequest";
  value: QueryDenomsMetadataRequestAmino;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface QueryDenomsMetadataResponse {
  /** metadata provides the client information for all the registered tokens. */
  metadatas: Metadata[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryDenomsMetadataResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataResponse";
  value: Uint8Array;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface QueryDenomsMetadataResponseAmino {
  /** metadata provides the client information for all the registered tokens. */
  metadatas: MetadataAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDenomsMetadataResponseAminoMsg {
  type: "cosmos-sdk/QueryDenomsMetadataResponse";
  value: QueryDenomsMetadataResponseAmino;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequest {
  /** denom is the coin denom to query the metadata for. */
  denom: string;
}
export interface QueryDenomMetadataRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataRequest";
  value: Uint8Array;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequestAmino {
  /** denom is the coin denom to query the metadata for. */
  denom: string;
}
export interface QueryDenomMetadataRequestAminoMsg {
  type: "cosmos-sdk/QueryDenomMetadataRequest";
  value: QueryDenomMetadataRequestAmino;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponse {
  /** metadata describes and provides all the client information for the requested token. */
  metadata?: Metadata;
}
export interface QueryDenomMetadataResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataResponse";
  value: Uint8Array;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponseAmino {
  /** metadata describes and provides all the client information for the requested token. */
  metadata?: MetadataAmino;
}
export interface QueryDenomMetadataResponseAminoMsg {
  type: "cosmos-sdk/QueryDenomMetadataResponse";
  value: QueryDenomMetadataResponseAmino;
}
/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 */
export interface QueryDenomOwnersRequest {
  /** denom defines the coin denomination to query all account holders for. */
  denom: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDenomOwnersRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersRequest";
  value: Uint8Array;
}
/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 */
export interface QueryDenomOwnersRequestAmino {
  /** denom defines the coin denomination to query all account holders for. */
  denom: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDenomOwnersRequestAminoMsg {
  type: "cosmos-sdk/QueryDenomOwnersRequest";
  value: QueryDenomOwnersRequestAmino;
}
/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 *
 * Since: cosmos-sdk 0.46
 */
export interface DenomOwner {
  /** address defines the address that owns a particular denomination. */
  address: string;
  /** balance is the balance of the denominated coin for an account. */
  balance?: Coin;
}
export interface DenomOwnerProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.DenomOwner";
  value: Uint8Array;
}
/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 *
 * Since: cosmos-sdk 0.46
 */
export interface DenomOwnerAmino {
  /** address defines the address that owns a particular denomination. */
  address: string;
  /** balance is the balance of the denominated coin for an account. */
  balance?: CoinAmino;
}
export interface DenomOwnerAminoMsg {
  type: "cosmos-sdk/DenomOwner";
  value: DenomOwnerAmino;
}
/**
 * QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryDenomOwnersResponse {
  denomOwners: DenomOwner[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryDenomOwnersResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersResponse";
  value: Uint8Array;
}
/**
 * QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryDenomOwnersResponseAmino {
  denom_owners: DenomOwnerAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDenomOwnersResponseAminoMsg {
  type: "cosmos-sdk/QueryDenomOwnersResponse";
  value: QueryDenomOwnersResponseAmino;
}
/**
 * QuerySendEnabledRequest defines the RPC request for looking up SendEnabled entries.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySendEnabledRequest {
  /** denoms is the specific denoms you want look up. Leave empty to get all entries. */
  denoms: string[];
  /**
   * pagination defines an optional pagination for the request. This field is
   * only read if the denoms field is empty.
   */
  pagination?: PageRequest;
}
export interface QuerySendEnabledRequestProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QuerySendEnabledRequest";
  value: Uint8Array;
}
/**
 * QuerySendEnabledRequest defines the RPC request for looking up SendEnabled entries.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySendEnabledRequestAmino {
  /** denoms is the specific denoms you want look up. Leave empty to get all entries. */
  denoms: string[];
  /**
   * pagination defines an optional pagination for the request. This field is
   * only read if the denoms field is empty.
   */
  pagination?: PageRequestAmino;
}
export interface QuerySendEnabledRequestAminoMsg {
  type: "cosmos-sdk/QuerySendEnabledRequest";
  value: QuerySendEnabledRequestAmino;
}
/**
 * QuerySendEnabledResponse defines the RPC response of a SendEnable query.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySendEnabledResponse {
  sendEnabled: SendEnabled[];
  /**
   * pagination defines the pagination in the response. This field is only
   * populated if the denoms field in the request is empty.
   */
  pagination?: PageResponse;
}
export interface QuerySendEnabledResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.QuerySendEnabledResponse";
  value: Uint8Array;
}
/**
 * QuerySendEnabledResponse defines the RPC response of a SendEnable query.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySendEnabledResponseAmino {
  send_enabled: SendEnabledAmino[];
  /**
   * pagination defines the pagination in the response. This field is only
   * populated if the denoms field in the request is empty.
   */
  pagination?: PageResponseAmino;
}
export interface QuerySendEnabledResponseAminoMsg {
  type: "cosmos-sdk/QuerySendEnabledResponse";
  value: QuerySendEnabledResponseAmino;
}
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    address: "",
    denom: "",
  };
}
export const QueryBalanceRequest = {
  encode(
    message: QueryBalanceRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalanceRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },
  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(
    object: I,
  ): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest {
    return {
      address: object.address,
      denom: object.denom,
    };
  },
  toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBalanceRequest): QueryBalanceRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryBalanceRequest",
      value: QueryBalanceRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.decode(message.value);
  },
  toProto(message: QueryBalanceRequest): Uint8Array {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryBalanceRequest",
      value: QueryBalanceRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    balance: undefined,
  };
}
export const QueryBalanceResponse = {
  encode(
    message: QueryBalanceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalanceResponse {
    return {
      balance: isSet(object.balance)
        ? Coin.fromJSON(object.balance)
        : undefined,
    };
  },
  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined &&
      (obj.balance = message.balance
        ? Coin.toJSON(message.balance)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(
    object: I,
  ): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? Coin.fromPartial(object.balance)
        : undefined;
    return message;
  },
  fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse {
    return {
      balance: object?.balance ? Coin.fromAmino(object.balance) : undefined,
    };
  },
  toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino {
    const obj: any = {};
    obj.balance = message.balance ? Coin.toAmino(message.balance) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBalanceResponse): QueryBalanceResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryBalanceResponse",
      value: QueryBalanceResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.decode(message.value);
  },
  toProto(message: QueryBalanceResponse): Uint8Array {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryBalanceResponse",
      value: QueryBalanceResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryAllBalancesRequest(): QueryAllBalancesRequest {
  return {
    address: "",
    pagination: undefined,
  };
}
export const QueryAllBalancesRequest = {
  encode(
    message: QueryAllBalancesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryAllBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromJSON(object: any): QueryAllBalancesRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryAllBalancesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllBalancesRequest>, I>>(
    object: I,
  ): QueryAllBalancesRequest {
    const message = createBaseQueryAllBalancesRequest();
    message.address = object.address ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryAllBalancesRequestAmino): QueryAllBalancesRequest {
    return {
      address: object.address,
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryAllBalancesRequest): QueryAllBalancesRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryAllBalancesRequestAminoMsg,
  ): QueryAllBalancesRequest {
    return QueryAllBalancesRequest.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryAllBalancesRequest,
  ): QueryAllBalancesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllBalancesRequest",
      value: QueryAllBalancesRequest.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryAllBalancesRequestProtoMsg,
  ): QueryAllBalancesRequest {
    return QueryAllBalancesRequest.decode(message.value);
  },
  toProto(message: QueryAllBalancesRequest): Uint8Array {
    return QueryAllBalancesRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryAllBalancesRequest,
  ): QueryAllBalancesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesRequest",
      value: QueryAllBalancesRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryAllBalancesResponse(): QueryAllBalancesResponse {
  return {
    balances: [],
    pagination: undefined,
  };
}
export const QueryAllBalancesResponse = {
  encode(
    message: QueryAllBalancesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(Coin.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllBalancesResponse {
    return {
      balances: Array.isArray(object?.balances)
        ? object.balances.map((e: any) => Coin.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryAllBalancesResponse): unknown {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.balances = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllBalancesResponse>, I>>(
    object: I,
  ): QueryAllBalancesResponse {
    const message = createBaseQueryAllBalancesResponse();
    message.balances = object.balances?.map((e) => Coin.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryAllBalancesResponseAmino): QueryAllBalancesResponse {
    return {
      balances: Array.isArray(object?.balances)
        ? object.balances.map((e: any) => Coin.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryAllBalancesResponse): QueryAllBalancesResponseAmino {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map((e) =>
        e ? Coin.toAmino(e) : undefined,
      );
    } else {
      obj.balances = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryAllBalancesResponseAminoMsg,
  ): QueryAllBalancesResponse {
    return QueryAllBalancesResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryAllBalancesResponse,
  ): QueryAllBalancesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllBalancesResponse",
      value: QueryAllBalancesResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryAllBalancesResponseProtoMsg,
  ): QueryAllBalancesResponse {
    return QueryAllBalancesResponse.decode(message.value);
  },
  toProto(message: QueryAllBalancesResponse): Uint8Array {
    return QueryAllBalancesResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryAllBalancesResponse,
  ): QueryAllBalancesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesResponse",
      value: QueryAllBalancesResponse.encode(message).finish(),
    };
  },
};
function createBaseQuerySpendableBalancesRequest(): QuerySpendableBalancesRequest {
  return {
    address: "",
    pagination: undefined,
  };
}
export const QuerySpendableBalancesRequest = {
  encode(
    message: QuerySpendableBalancesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySpendableBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpendableBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromJSON(object: any): QuerySpendableBalancesRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QuerySpendableBalancesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySpendableBalancesRequest>, I>>(
    object: I,
  ): QuerySpendableBalancesRequest {
    const message = createBaseQuerySpendableBalancesRequest();
    message.address = object.address ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(
    object: QuerySpendableBalancesRequestAmino,
  ): QuerySpendableBalancesRequest {
    return {
      address: object.address,
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QuerySpendableBalancesRequest,
  ): QuerySpendableBalancesRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QuerySpendableBalancesRequestAminoMsg,
  ): QuerySpendableBalancesRequest {
    return QuerySpendableBalancesRequest.fromAmino(object.value);
  },
  toAminoMsg(
    message: QuerySpendableBalancesRequest,
  ): QuerySpendableBalancesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QuerySpendableBalancesRequest",
      value: QuerySpendableBalancesRequest.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QuerySpendableBalancesRequestProtoMsg,
  ): QuerySpendableBalancesRequest {
    return QuerySpendableBalancesRequest.decode(message.value);
  },
  toProto(message: QuerySpendableBalancesRequest): Uint8Array {
    return QuerySpendableBalancesRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QuerySpendableBalancesRequest,
  ): QuerySpendableBalancesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesRequest",
      value: QuerySpendableBalancesRequest.encode(message).finish(),
    };
  },
};
function createBaseQuerySpendableBalancesResponse(): QuerySpendableBalancesResponse {
  return {
    balances: [],
    pagination: undefined,
  };
}
export const QuerySpendableBalancesResponse = {
  encode(
    message: QuerySpendableBalancesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QuerySpendableBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpendableBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(Coin.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QuerySpendableBalancesResponse {
    return {
      balances: Array.isArray(object?.balances)
        ? object.balances.map((e: any) => Coin.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QuerySpendableBalancesResponse): unknown {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.balances = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySpendableBalancesResponse>, I>>(
    object: I,
  ): QuerySpendableBalancesResponse {
    const message = createBaseQuerySpendableBalancesResponse();
    message.balances = object.balances?.map((e) => Coin.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(
    object: QuerySpendableBalancesResponseAmino,
  ): QuerySpendableBalancesResponse {
    return {
      balances: Array.isArray(object?.balances)
        ? object.balances.map((e: any) => Coin.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QuerySpendableBalancesResponse,
  ): QuerySpendableBalancesResponseAmino {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map((e) =>
        e ? Coin.toAmino(e) : undefined,
      );
    } else {
      obj.balances = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QuerySpendableBalancesResponseAminoMsg,
  ): QuerySpendableBalancesResponse {
    return QuerySpendableBalancesResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: QuerySpendableBalancesResponse,
  ): QuerySpendableBalancesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QuerySpendableBalancesResponse",
      value: QuerySpendableBalancesResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QuerySpendableBalancesResponseProtoMsg,
  ): QuerySpendableBalancesResponse {
    return QuerySpendableBalancesResponse.decode(message.value);
  },
  toProto(message: QuerySpendableBalancesResponse): Uint8Array {
    return QuerySpendableBalancesResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QuerySpendableBalancesResponse,
  ): QuerySpendableBalancesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesResponse",
      value: QuerySpendableBalancesResponse.encode(message).finish(),
    };
  },
};
function createBaseQuerySpendableBalanceByDenomRequest(): QuerySpendableBalanceByDenomRequest {
  return {
    address: "",
    denom: "",
  };
}
export const QuerySpendableBalanceByDenomRequest = {
  encode(
    message: QuerySpendableBalanceByDenomRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySpendableBalanceByDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpendableBalanceByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpendableBalanceByDenomRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },
  toJSON(message: QuerySpendableBalanceByDenomRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<QuerySpendableBalanceByDenomRequest>, I>,
  >(object: I): QuerySpendableBalanceByDenomRequest {
    const message = createBaseQuerySpendableBalanceByDenomRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(
    object: QuerySpendableBalanceByDenomRequestAmino,
  ): QuerySpendableBalanceByDenomRequest {
    return {
      address: object.address,
      denom: object.denom,
    };
  },
  toAmino(
    message: QuerySpendableBalanceByDenomRequest,
  ): QuerySpendableBalanceByDenomRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(
    object: QuerySpendableBalanceByDenomRequestAminoMsg,
  ): QuerySpendableBalanceByDenomRequest {
    return QuerySpendableBalanceByDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(
    message: QuerySpendableBalanceByDenomRequest,
  ): QuerySpendableBalanceByDenomRequestAminoMsg {
    return {
      type: "cosmos-sdk/QuerySpendableBalanceByDenomRequest",
      value: QuerySpendableBalanceByDenomRequest.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QuerySpendableBalanceByDenomRequestProtoMsg,
  ): QuerySpendableBalanceByDenomRequest {
    return QuerySpendableBalanceByDenomRequest.decode(message.value);
  },
  toProto(message: QuerySpendableBalanceByDenomRequest): Uint8Array {
    return QuerySpendableBalanceByDenomRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QuerySpendableBalanceByDenomRequest,
  ): QuerySpendableBalanceByDenomRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest",
      value: QuerySpendableBalanceByDenomRequest.encode(message).finish(),
    };
  },
};
function createBaseQuerySpendableBalanceByDenomResponse(): QuerySpendableBalanceByDenomResponse {
  return {
    balance: undefined,
  };
}
export const QuerySpendableBalanceByDenomResponse = {
  encode(
    message: QuerySpendableBalanceByDenomResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySpendableBalanceByDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpendableBalanceByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpendableBalanceByDenomResponse {
    return {
      balance: isSet(object.balance)
        ? Coin.fromJSON(object.balance)
        : undefined,
    };
  },
  toJSON(message: QuerySpendableBalanceByDenomResponse): unknown {
    const obj: any = {};
    message.balance !== undefined &&
      (obj.balance = message.balance
        ? Coin.toJSON(message.balance)
        : undefined);
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<QuerySpendableBalanceByDenomResponse>, I>,
  >(object: I): QuerySpendableBalanceByDenomResponse {
    const message = createBaseQuerySpendableBalanceByDenomResponse();
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? Coin.fromPartial(object.balance)
        : undefined;
    return message;
  },
  fromAmino(
    object: QuerySpendableBalanceByDenomResponseAmino,
  ): QuerySpendableBalanceByDenomResponse {
    return {
      balance: object?.balance ? Coin.fromAmino(object.balance) : undefined,
    };
  },
  toAmino(
    message: QuerySpendableBalanceByDenomResponse,
  ): QuerySpendableBalanceByDenomResponseAmino {
    const obj: any = {};
    obj.balance = message.balance ? Coin.toAmino(message.balance) : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QuerySpendableBalanceByDenomResponseAminoMsg,
  ): QuerySpendableBalanceByDenomResponse {
    return QuerySpendableBalanceByDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: QuerySpendableBalanceByDenomResponse,
  ): QuerySpendableBalanceByDenomResponseAminoMsg {
    return {
      type: "cosmos-sdk/QuerySpendableBalanceByDenomResponse",
      value: QuerySpendableBalanceByDenomResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QuerySpendableBalanceByDenomResponseProtoMsg,
  ): QuerySpendableBalanceByDenomResponse {
    return QuerySpendableBalanceByDenomResponse.decode(message.value);
  },
  toProto(message: QuerySpendableBalanceByDenomResponse): Uint8Array {
    return QuerySpendableBalanceByDenomResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QuerySpendableBalanceByDenomResponse,
  ): QuerySpendableBalanceByDenomResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse",
      value: QuerySpendableBalanceByDenomResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryTotalSupplyRequest(): QueryTotalSupplyRequest {
  return {
    pagination: undefined,
  };
}
export const QueryTotalSupplyRequest = {
  encode(
    message: QueryTotalSupplyRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryTotalSupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalSupplyRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryTotalSupplyRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalSupplyRequest>, I>>(
    object: I,
  ): QueryTotalSupplyRequest {
    const message = createBaseQueryTotalSupplyRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryTotalSupplyRequestAmino): QueryTotalSupplyRequest {
    return {
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryTotalSupplyRequestAminoMsg,
  ): QueryTotalSupplyRequest {
    return QueryTotalSupplyRequest.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryTotalSupplyRequest,
  ): QueryTotalSupplyRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalSupplyRequest",
      value: QueryTotalSupplyRequest.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryTotalSupplyRequestProtoMsg,
  ): QueryTotalSupplyRequest {
    return QueryTotalSupplyRequest.decode(message.value);
  },
  toProto(message: QueryTotalSupplyRequest): Uint8Array {
    return QueryTotalSupplyRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryTotalSupplyRequest,
  ): QueryTotalSupplyRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyRequest",
      value: QueryTotalSupplyRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryTotalSupplyResponse(): QueryTotalSupplyResponse {
  return {
    supply: [],
    pagination: undefined,
  };
}
export const QueryTotalSupplyResponse = {
  encode(
    message: QueryTotalSupplyResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.supply) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryTotalSupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply.push(Coin.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryTotalSupplyResponse {
    return {
      supply: Array.isArray(object?.supply)
        ? object.supply.map((e: any) => Coin.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryTotalSupplyResponse): unknown {
    const obj: any = {};
    if (message.supply) {
      obj.supply = message.supply.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.supply = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalSupplyResponse>, I>>(
    object: I,
  ): QueryTotalSupplyResponse {
    const message = createBaseQueryTotalSupplyResponse();
    message.supply = object.supply?.map((e) => Coin.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryTotalSupplyResponseAmino): QueryTotalSupplyResponse {
    return {
      supply: Array.isArray(object?.supply)
        ? object.supply.map((e: any) => Coin.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseAmino {
    const obj: any = {};
    if (message.supply) {
      obj.supply = message.supply.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.supply = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryTotalSupplyResponseAminoMsg,
  ): QueryTotalSupplyResponse {
    return QueryTotalSupplyResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryTotalSupplyResponse,
  ): QueryTotalSupplyResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalSupplyResponse",
      value: QueryTotalSupplyResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryTotalSupplyResponseProtoMsg,
  ): QueryTotalSupplyResponse {
    return QueryTotalSupplyResponse.decode(message.value);
  },
  toProto(message: QueryTotalSupplyResponse): Uint8Array {
    return QueryTotalSupplyResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryTotalSupplyResponse,
  ): QueryTotalSupplyResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyResponse",
      value: QueryTotalSupplyResponse.encode(message).finish(),
    };
  },
};
function createBaseQuerySupplyOfRequest(): QuerySupplyOfRequest {
  return {
    denom: "",
  };
}
export const QuerySupplyOfRequest = {
  encode(
    message: QuerySupplyOfRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySupplyOfRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyOfRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySupplyOfRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },
  toJSON(message: QuerySupplyOfRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySupplyOfRequest>, I>>(
    object: I,
  ): QuerySupplyOfRequest {
    const message = createBaseQuerySupplyOfRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QuerySupplyOfRequestAmino): QuerySupplyOfRequest {
    return {
      denom: object.denom,
    };
  },
  toAmino(message: QuerySupplyOfRequest): QuerySupplyOfRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyOfRequestAminoMsg): QuerySupplyOfRequest {
    return QuerySupplyOfRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySupplyOfRequest): QuerySupplyOfRequestAminoMsg {
    return {
      type: "cosmos-sdk/QuerySupplyOfRequest",
      value: QuerySupplyOfRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QuerySupplyOfRequestProtoMsg): QuerySupplyOfRequest {
    return QuerySupplyOfRequest.decode(message.value);
  },
  toProto(message: QuerySupplyOfRequest): Uint8Array {
    return QuerySupplyOfRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyOfRequest): QuerySupplyOfRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfRequest",
      value: QuerySupplyOfRequest.encode(message).finish(),
    };
  },
};
function createBaseQuerySupplyOfResponse(): QuerySupplyOfResponse {
  return {
    amount: undefined,
  };
}
export const QuerySupplyOfResponse = {
  encode(
    message: QuerySupplyOfResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySupplyOfResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyOfResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySupplyOfResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },
  toJSON(message: QuerySupplyOfResponse): unknown {
    const obj: any = {};
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySupplyOfResponse>, I>>(
    object: I,
  ): QuerySupplyOfResponse {
    const message = createBaseQuerySupplyOfResponse();
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
  fromAmino(object: QuerySupplyOfResponseAmino): QuerySupplyOfResponse {
    return {
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
    };
  },
  toAmino(message: QuerySupplyOfResponse): QuerySupplyOfResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyOfResponseAminoMsg): QuerySupplyOfResponse {
    return QuerySupplyOfResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySupplyOfResponse): QuerySupplyOfResponseAminoMsg {
    return {
      type: "cosmos-sdk/QuerySupplyOfResponse",
      value: QuerySupplyOfResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QuerySupplyOfResponseProtoMsg): QuerySupplyOfResponse {
    return QuerySupplyOfResponse.decode(message.value);
  },
  toProto(message: QuerySupplyOfResponse): Uint8Array {
    return QuerySupplyOfResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyOfResponse): QuerySupplyOfResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfResponse",
      value: QuerySupplyOfResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I,
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined,
  };
}
export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I,
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryDenomsMetadataRequest(): QueryDenomsMetadataRequest {
  return {
    pagination: undefined,
  };
}
export const QueryDenomsMetadataRequest = {
  encode(
    message: QueryDenomsMetadataRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDenomsMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomsMetadataRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryDenomsMetadataRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomsMetadataRequest>, I>>(
    object: I,
  ): QueryDenomsMetadataRequest {
    const message = createBaseQueryDenomsMetadataRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryDenomsMetadataRequestAmino,
  ): QueryDenomsMetadataRequest {
    return {
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryDenomsMetadataRequest,
  ): QueryDenomsMetadataRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryDenomsMetadataRequestAminoMsg,
  ): QueryDenomsMetadataRequest {
    return QueryDenomsMetadataRequest.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryDenomsMetadataRequest,
  ): QueryDenomsMetadataRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomsMetadataRequest",
      value: QueryDenomsMetadataRequest.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryDenomsMetadataRequestProtoMsg,
  ): QueryDenomsMetadataRequest {
    return QueryDenomsMetadataRequest.decode(message.value);
  },
  toProto(message: QueryDenomsMetadataRequest): Uint8Array {
    return QueryDenomsMetadataRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryDenomsMetadataRequest,
  ): QueryDenomsMetadataRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataRequest",
      value: QueryDenomsMetadataRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryDenomsMetadataResponse(): QueryDenomsMetadataResponse {
  return {
    metadatas: [],
    pagination: undefined,
  };
}
export const QueryDenomsMetadataResponse = {
  encode(
    message: QueryDenomsMetadataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.metadatas) {
      Metadata.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryDenomsMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadatas.push(Metadata.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryDenomsMetadataResponse {
    return {
      metadatas: Array.isArray(object?.metadatas)
        ? object.metadatas.map((e: any) => Metadata.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryDenomsMetadataResponse): unknown {
    const obj: any = {};
    if (message.metadatas) {
      obj.metadatas = message.metadatas.map((e) =>
        e ? Metadata.toJSON(e) : undefined,
      );
    } else {
      obj.metadatas = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomsMetadataResponse>, I>>(
    object: I,
  ): QueryDenomsMetadataResponse {
    const message = createBaseQueryDenomsMetadataResponse();
    message.metadatas =
      object.metadatas?.map((e) => Metadata.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryDenomsMetadataResponseAmino,
  ): QueryDenomsMetadataResponse {
    return {
      metadatas: Array.isArray(object?.metadatas)
        ? object.metadatas.map((e: any) => Metadata.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(
    message: QueryDenomsMetadataResponse,
  ): QueryDenomsMetadataResponseAmino {
    const obj: any = {};
    if (message.metadatas) {
      obj.metadatas = message.metadatas.map((e) =>
        e ? Metadata.toAmino(e) : undefined,
      );
    } else {
      obj.metadatas = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryDenomsMetadataResponseAminoMsg,
  ): QueryDenomsMetadataResponse {
    return QueryDenomsMetadataResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryDenomsMetadataResponse,
  ): QueryDenomsMetadataResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomsMetadataResponse",
      value: QueryDenomsMetadataResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryDenomsMetadataResponseProtoMsg,
  ): QueryDenomsMetadataResponse {
    return QueryDenomsMetadataResponse.decode(message.value);
  },
  toProto(message: QueryDenomsMetadataResponse): Uint8Array {
    return QueryDenomsMetadataResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryDenomsMetadataResponse,
  ): QueryDenomsMetadataResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataResponse",
      value: QueryDenomsMetadataResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryDenomMetadataRequest(): QueryDenomMetadataRequest {
  return {
    denom: "",
  };
}
export const QueryDenomMetadataRequest = {
  encode(
    message: QueryDenomMetadataRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDenomMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomMetadataRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },
  toJSON(message: QueryDenomMetadataRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomMetadataRequest>, I>>(
    object: I,
  ): QueryDenomMetadataRequest {
    const message = createBaseQueryDenomMetadataRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryDenomMetadataRequestAmino): QueryDenomMetadataRequest {
    return {
      denom: object.denom,
    };
  },
  toAmino(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(
    object: QueryDenomMetadataRequestAminoMsg,
  ): QueryDenomMetadataRequest {
    return QueryDenomMetadataRequest.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryDenomMetadataRequest,
  ): QueryDenomMetadataRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomMetadataRequest",
      value: QueryDenomMetadataRequest.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryDenomMetadataRequestProtoMsg,
  ): QueryDenomMetadataRequest {
    return QueryDenomMetadataRequest.decode(message.value);
  },
  toProto(message: QueryDenomMetadataRequest): Uint8Array {
    return QueryDenomMetadataRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryDenomMetadataRequest,
  ): QueryDenomMetadataRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataRequest",
      value: QueryDenomMetadataRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryDenomMetadataResponse(): QueryDenomMetadataResponse {
  return {
    metadata: undefined,
  };
}
export const QueryDenomMetadataResponse = {
  encode(
    message: QueryDenomMetadataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDenomMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomMetadataResponse {
    return {
      metadata: isSet(object.metadata)
        ? Metadata.fromJSON(object.metadata)
        : undefined,
    };
  },
  toJSON(message: QueryDenomMetadataResponse): unknown {
    const obj: any = {};
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Metadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomMetadataResponse>, I>>(
    object: I,
  ): QueryDenomMetadataResponse {
    const message = createBaseQueryDenomMetadataResponse();
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? Metadata.fromPartial(object.metadata)
        : undefined;
    return message;
  },
  fromAmino(
    object: QueryDenomMetadataResponseAmino,
  ): QueryDenomMetadataResponse {
    return {
      metadata: object?.metadata
        ? Metadata.fromAmino(object.metadata)
        : undefined,
    };
  },
  toAmino(
    message: QueryDenomMetadataResponse,
  ): QueryDenomMetadataResponseAmino {
    const obj: any = {};
    obj.metadata = message.metadata
      ? Metadata.toAmino(message.metadata)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryDenomMetadataResponseAminoMsg,
  ): QueryDenomMetadataResponse {
    return QueryDenomMetadataResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryDenomMetadataResponse,
  ): QueryDenomMetadataResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomMetadataResponse",
      value: QueryDenomMetadataResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryDenomMetadataResponseProtoMsg,
  ): QueryDenomMetadataResponse {
    return QueryDenomMetadataResponse.decode(message.value);
  },
  toProto(message: QueryDenomMetadataResponse): Uint8Array {
    return QueryDenomMetadataResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryDenomMetadataResponse,
  ): QueryDenomMetadataResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataResponse",
      value: QueryDenomMetadataResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryDenomOwnersRequest(): QueryDenomOwnersRequest {
  return {
    denom: "",
    pagination: undefined,
  };
}
export const QueryDenomOwnersRequest = {
  encode(
    message: QueryDenomOwnersRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDenomOwnersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomOwnersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
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
  fromJSON(object: any): QueryDenomOwnersRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryDenomOwnersRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomOwnersRequest>, I>>(
    object: I,
  ): QueryDenomOwnersRequest {
    const message = createBaseQueryDenomOwnersRequest();
    message.denom = object.denom ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryDenomOwnersRequestAmino): QueryDenomOwnersRequest {
    return {
      denom: object.denom,
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryDenomOwnersRequest): QueryDenomOwnersRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryDenomOwnersRequestAminoMsg,
  ): QueryDenomOwnersRequest {
    return QueryDenomOwnersRequest.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryDenomOwnersRequest,
  ): QueryDenomOwnersRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomOwnersRequest",
      value: QueryDenomOwnersRequest.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryDenomOwnersRequestProtoMsg,
  ): QueryDenomOwnersRequest {
    return QueryDenomOwnersRequest.decode(message.value);
  },
  toProto(message: QueryDenomOwnersRequest): Uint8Array {
    return QueryDenomOwnersRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryDenomOwnersRequest,
  ): QueryDenomOwnersRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersRequest",
      value: QueryDenomOwnersRequest.encode(message).finish(),
    };
  },
};
function createBaseDenomOwner(): DenomOwner {
  return {
    address: "",
    balance: undefined,
  };
}
export const DenomOwner = {
  encode(
    message: DenomOwner,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DenomOwner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DenomOwner {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      balance: isSet(object.balance)
        ? Coin.fromJSON(object.balance)
        : undefined,
    };
  },
  toJSON(message: DenomOwner): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.balance !== undefined &&
      (obj.balance = message.balance
        ? Coin.toJSON(message.balance)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DenomOwner>, I>>(
    object: I,
  ): DenomOwner {
    const message = createBaseDenomOwner();
    message.address = object.address ?? "";
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? Coin.fromPartial(object.balance)
        : undefined;
    return message;
  },
  fromAmino(object: DenomOwnerAmino): DenomOwner {
    return {
      address: object.address,
      balance: object?.balance ? Coin.fromAmino(object.balance) : undefined,
    };
  },
  toAmino(message: DenomOwner): DenomOwnerAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.balance = message.balance ? Coin.toAmino(message.balance) : undefined;
    return obj;
  },
  fromAminoMsg(object: DenomOwnerAminoMsg): DenomOwner {
    return DenomOwner.fromAmino(object.value);
  },
  toAminoMsg(message: DenomOwner): DenomOwnerAminoMsg {
    return {
      type: "cosmos-sdk/DenomOwner",
      value: DenomOwner.toAmino(message),
    };
  },
  fromProtoMsg(message: DenomOwnerProtoMsg): DenomOwner {
    return DenomOwner.decode(message.value);
  },
  toProto(message: DenomOwner): Uint8Array {
    return DenomOwner.encode(message).finish();
  },
  toProtoMsg(message: DenomOwner): DenomOwnerProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.DenomOwner",
      value: DenomOwner.encode(message).finish(),
    };
  },
};
function createBaseQueryDenomOwnersResponse(): QueryDenomOwnersResponse {
  return {
    denomOwners: [],
    pagination: undefined,
  };
}
export const QueryDenomOwnersResponse = {
  encode(
    message: QueryDenomOwnersResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.denomOwners) {
      DenomOwner.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryDenomOwnersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomOwnersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomOwners.push(DenomOwner.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryDenomOwnersResponse {
    return {
      denomOwners: Array.isArray(object?.denomOwners)
        ? object.denomOwners.map((e: any) => DenomOwner.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryDenomOwnersResponse): unknown {
    const obj: any = {};
    if (message.denomOwners) {
      obj.denomOwners = message.denomOwners.map((e) =>
        e ? DenomOwner.toJSON(e) : undefined,
      );
    } else {
      obj.denomOwners = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomOwnersResponse>, I>>(
    object: I,
  ): QueryDenomOwnersResponse {
    const message = createBaseQueryDenomOwnersResponse();
    message.denomOwners =
      object.denomOwners?.map((e) => DenomOwner.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryDenomOwnersResponseAmino): QueryDenomOwnersResponse {
    return {
      denomOwners: Array.isArray(object?.denom_owners)
        ? object.denom_owners.map((e: any) => DenomOwner.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryDenomOwnersResponse): QueryDenomOwnersResponseAmino {
    const obj: any = {};
    if (message.denomOwners) {
      obj.denom_owners = message.denomOwners.map((e) =>
        e ? DenomOwner.toAmino(e) : undefined,
      );
    } else {
      obj.denom_owners = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryDenomOwnersResponseAminoMsg,
  ): QueryDenomOwnersResponse {
    return QueryDenomOwnersResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryDenomOwnersResponse,
  ): QueryDenomOwnersResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomOwnersResponse",
      value: QueryDenomOwnersResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryDenomOwnersResponseProtoMsg,
  ): QueryDenomOwnersResponse {
    return QueryDenomOwnersResponse.decode(message.value);
  },
  toProto(message: QueryDenomOwnersResponse): Uint8Array {
    return QueryDenomOwnersResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryDenomOwnersResponse,
  ): QueryDenomOwnersResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersResponse",
      value: QueryDenomOwnersResponse.encode(message).finish(),
    };
  },
};
function createBaseQuerySendEnabledRequest(): QuerySendEnabledRequest {
  return {
    denoms: [],
    pagination: undefined,
  };
}
export const QuerySendEnabledRequest = {
  encode(
    message: QuerySendEnabledRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(
        message.pagination,
        writer.uint32(794).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySendEnabledRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySendEnabledRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        case 99:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySendEnabledRequest {
    return {
      denoms: Array.isArray(object?.denoms)
        ? object.denoms.map((e: any) => String(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QuerySendEnabledRequest): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySendEnabledRequest>, I>>(
    object: I,
  ): QuerySendEnabledRequest {
    const message = createBaseQuerySendEnabledRequest();
    message.denoms = object.denoms?.map((e) => e) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QuerySendEnabledRequestAmino): QuerySendEnabledRequest {
    return {
      denoms: Array.isArray(object?.denoms)
        ? object.denoms.map((e: any) => e)
        : [],
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QuerySendEnabledRequest): QuerySendEnabledRequestAmino {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QuerySendEnabledRequestAminoMsg,
  ): QuerySendEnabledRequest {
    return QuerySendEnabledRequest.fromAmino(object.value);
  },
  toAminoMsg(
    message: QuerySendEnabledRequest,
  ): QuerySendEnabledRequestAminoMsg {
    return {
      type: "cosmos-sdk/QuerySendEnabledRequest",
      value: QuerySendEnabledRequest.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QuerySendEnabledRequestProtoMsg,
  ): QuerySendEnabledRequest {
    return QuerySendEnabledRequest.decode(message.value);
  },
  toProto(message: QuerySendEnabledRequest): Uint8Array {
    return QuerySendEnabledRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QuerySendEnabledRequest,
  ): QuerySendEnabledRequestProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySendEnabledRequest",
      value: QuerySendEnabledRequest.encode(message).finish(),
    };
  },
};
function createBaseQuerySendEnabledResponse(): QuerySendEnabledResponse {
  return {
    sendEnabled: [],
    pagination: undefined,
  };
}
export const QuerySendEnabledResponse = {
  encode(
    message: QuerySendEnabledResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.sendEnabled) {
      SendEnabled.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(794).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySendEnabledResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySendEnabledResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
          break;
        case 99:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySendEnabledResponse {
    return {
      sendEnabled: Array.isArray(object?.sendEnabled)
        ? object.sendEnabled.map((e: any) => SendEnabled.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QuerySendEnabledResponse): unknown {
    const obj: any = {};
    if (message.sendEnabled) {
      obj.sendEnabled = message.sendEnabled.map((e) =>
        e ? SendEnabled.toJSON(e) : undefined,
      );
    } else {
      obj.sendEnabled = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySendEnabledResponse>, I>>(
    object: I,
  ): QuerySendEnabledResponse {
    const message = createBaseQuerySendEnabledResponse();
    message.sendEnabled =
      object.sendEnabled?.map((e) => SendEnabled.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QuerySendEnabledResponseAmino): QuerySendEnabledResponse {
    return {
      sendEnabled: Array.isArray(object?.send_enabled)
        ? object.send_enabled.map((e: any) => SendEnabled.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QuerySendEnabledResponse): QuerySendEnabledResponseAmino {
    const obj: any = {};
    if (message.sendEnabled) {
      obj.send_enabled = message.sendEnabled.map((e) =>
        e ? SendEnabled.toAmino(e) : undefined,
      );
    } else {
      obj.send_enabled = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QuerySendEnabledResponseAminoMsg,
  ): QuerySendEnabledResponse {
    return QuerySendEnabledResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: QuerySendEnabledResponse,
  ): QuerySendEnabledResponseAminoMsg {
    return {
      type: "cosmos-sdk/QuerySendEnabledResponse",
      value: QuerySendEnabledResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QuerySendEnabledResponseProtoMsg,
  ): QuerySendEnabledResponse {
    return QuerySendEnabledResponse.decode(message.value);
  },
  toProto(message: QuerySendEnabledResponse): Uint8Array {
    return QuerySendEnabledResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QuerySendEnabledResponse,
  ): QuerySendEnabledResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.QuerySendEnabledResponse",
      value: QuerySendEnabledResponse.encode(message).finish(),
    };
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the balance of a single coin for a single account. */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /**
   * AllBalances queries the balance of all coins for a single account.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  AllBalances(
    request: QueryAllBalancesRequest,
  ): Promise<QueryAllBalancesResponse>;
  /**
   * SpendableBalances queries the spendable balance of all coins for a single
   * account.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   *
   * Since: cosmos-sdk 0.46
   */
  SpendableBalances(
    request: QuerySpendableBalancesRequest,
  ): Promise<QuerySpendableBalancesResponse>;
  /**
   * SpendableBalanceByDenom queries the spendable balance of a single denom for
   * a single account.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   *
   * Since: cosmos-sdk 0.47
   */
  SpendableBalanceByDenom(
    request: QuerySpendableBalanceByDenomRequest,
  ): Promise<QuerySpendableBalanceByDenomResponse>;
  /**
   * TotalSupply queries the total supply of all coins.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  TotalSupply(
    request?: QueryTotalSupplyRequest,
  ): Promise<QueryTotalSupplyResponse>;
  /**
   * SupplyOf queries the supply of a single coin.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  SupplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
  /** Params queries the parameters of x/bank module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** DenomsMetadata queries the client metadata of a given coin denomination. */
  DenomMetadata(
    request: QueryDenomMetadataRequest,
  ): Promise<QueryDenomMetadataResponse>;
  /**
   * DenomsMetadata queries the client metadata for all registered coin
   * denominations.
   */
  DenomsMetadata(
    request?: QueryDenomsMetadataRequest,
  ): Promise<QueryDenomsMetadataResponse>;
  /**
   * DenomOwners queries for all account addresses that own a particular token
   * denomination.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   *
   * Since: cosmos-sdk 0.46
   */
  DenomOwners(
    request: QueryDenomOwnersRequest,
  ): Promise<QueryDenomOwnersResponse>;
  /**
   * SendEnabled queries for SendEnabled entries.
   *
   * This query only returns denominations that have specific SendEnabled settings.
   * Any denomination that does not have a specific setting will use the default
   * params.default_send_enabled, and will not be returned by this query.
   *
   * Since: cosmos-sdk 0.47
   */
  SendEnabled(
    request: QuerySendEnabledRequest,
  ): Promise<QuerySendEnabledResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Balance = this.Balance.bind(this);
    this.AllBalances = this.AllBalances.bind(this);
    this.SpendableBalances = this.SpendableBalances.bind(this);
    this.SpendableBalanceByDenom = this.SpendableBalanceByDenom.bind(this);
    this.TotalSupply = this.TotalSupply.bind(this);
    this.SupplyOf = this.SupplyOf.bind(this);
    this.Params = this.Params.bind(this);
    this.DenomMetadata = this.DenomMetadata.bind(this);
    this.DenomsMetadata = this.DenomsMetadata.bind(this);
    this.DenomOwners = this.DenomOwners.bind(this);
    this.SendEnabled = this.SendEnabled.bind(this);
  }
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.bank.v1beta1.Query",
      "Balance",
      data,
    );
    return promise.then((data) =>
      QueryBalanceResponse.decode(new _m0.Reader(data)),
    );
  }
  AllBalances(
    request: QueryAllBalancesRequest,
  ): Promise<QueryAllBalancesResponse> {
    const data = QueryAllBalancesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.bank.v1beta1.Query",
      "AllBalances",
      data,
    );
    return promise.then((data) =>
      QueryAllBalancesResponse.decode(new _m0.Reader(data)),
    );
  }
  SpendableBalances(
    request: QuerySpendableBalancesRequest,
  ): Promise<QuerySpendableBalancesResponse> {
    const data = QuerySpendableBalancesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.bank.v1beta1.Query",
      "SpendableBalances",
      data,
    );
    return promise.then((data) =>
      QuerySpendableBalancesResponse.decode(new _m0.Reader(data)),
    );
  }
  SpendableBalanceByDenom(
    request: QuerySpendableBalanceByDenomRequest,
  ): Promise<QuerySpendableBalanceByDenomResponse> {
    const data = QuerySpendableBalanceByDenomRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.bank.v1beta1.Query",
      "SpendableBalanceByDenom",
      data,
    );
    return promise.then((data) =>
      QuerySpendableBalanceByDenomResponse.decode(new _m0.Reader(data)),
    );
  }
  TotalSupply(
    request: QueryTotalSupplyRequest = {
      pagination: undefined,
    },
  ): Promise<QueryTotalSupplyResponse> {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.bank.v1beta1.Query",
      "TotalSupply",
      data,
    );
    return promise.then((data) =>
      QueryTotalSupplyResponse.decode(new _m0.Reader(data)),
    );
  }
  SupplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
    const data = QuerySupplyOfRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.bank.v1beta1.Query",
      "SupplyOf",
      data,
    );
    return promise.then((data) =>
      QuerySupplyOfResponse.decode(new _m0.Reader(data)),
    );
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.bank.v1beta1.Query",
      "Params",
      data,
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data)),
    );
  }
  DenomMetadata(
    request: QueryDenomMetadataRequest,
  ): Promise<QueryDenomMetadataResponse> {
    const data = QueryDenomMetadataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.bank.v1beta1.Query",
      "DenomMetadata",
      data,
    );
    return promise.then((data) =>
      QueryDenomMetadataResponse.decode(new _m0.Reader(data)),
    );
  }
  DenomsMetadata(
    request: QueryDenomsMetadataRequest = {
      pagination: undefined,
    },
  ): Promise<QueryDenomsMetadataResponse> {
    const data = QueryDenomsMetadataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.bank.v1beta1.Query",
      "DenomsMetadata",
      data,
    );
    return promise.then((data) =>
      QueryDenomsMetadataResponse.decode(new _m0.Reader(data)),
    );
  }
  DenomOwners(
    request: QueryDenomOwnersRequest,
  ): Promise<QueryDenomOwnersResponse> {
    const data = QueryDenomOwnersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.bank.v1beta1.Query",
      "DenomOwners",
      data,
    );
    return promise.then((data) =>
      QueryDenomOwnersResponse.decode(new _m0.Reader(data)),
    );
  }
  SendEnabled(
    request: QuerySendEnabledRequest,
  ): Promise<QuerySendEnabledResponse> {
    const data = QuerySendEnabledRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.bank.v1beta1.Query",
      "SendEnabled",
      data,
    );
    return promise.then((data) =>
      QuerySendEnabledResponse.decode(new _m0.Reader(data)),
    );
  }
}
