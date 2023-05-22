/* eslint-disable */
import { DTagTransferRequest } from "./models_dtag_requests";
import { ChainLink } from "./models_chain_links";
import { ApplicationLink } from "./models_app_links";
import { Params } from "./models_params";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "desmos.profiles.v3";
/** GenesisState defines the profiles module's genesis state. */
export interface GenesisState {
  dtagTransferRequests: DTagTransferRequest[];
  chainLinks: ChainLink[];
  applicationLinks: ApplicationLink[];
  defaultExternalAddresses: DefaultExternalAddressEntry[];
  ibcPortId: string;
  params?: Params;
}
/** DefaultExternalAddressEntry contains the data of a default extnernal address */
export interface DefaultExternalAddressEntry {
  owner: string;
  chainName: string;
  target: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    dtagTransferRequests: [],
    chainLinks: [],
    applicationLinks: [],
    defaultExternalAddresses: [],
    ibcPortId: "",
    params: undefined,
  };
}
export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.dtagTransferRequests) {
      DTagTransferRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.chainLinks) {
      ChainLink.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.applicationLinks) {
      ApplicationLink.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.defaultExternalAddresses) {
      DefaultExternalAddressEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.ibcPortId !== "") {
      writer.uint32(42).string(message.ibcPortId);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dtagTransferRequests.push(
            DTagTransferRequest.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.chainLinks.push(ChainLink.decode(reader, reader.uint32()));
          break;
        case 3:
          message.applicationLinks.push(
            ApplicationLink.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.defaultExternalAddresses.push(
            DefaultExternalAddressEntry.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.ibcPortId = reader.string();
          break;
        case 6:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      dtagTransferRequests: Array.isArray(object?.dtagTransferRequests)
        ? object.dtagTransferRequests.map((e: any) =>
            DTagTransferRequest.fromJSON(e)
          )
        : [],
      chainLinks: Array.isArray(object?.chainLinks)
        ? object.chainLinks.map((e: any) => ChainLink.fromJSON(e))
        : [],
      applicationLinks: Array.isArray(object?.applicationLinks)
        ? object.applicationLinks.map((e: any) => ApplicationLink.fromJSON(e))
        : [],
      defaultExternalAddresses: Array.isArray(object?.defaultExternalAddresses)
        ? object.defaultExternalAddresses.map((e: any) =>
            DefaultExternalAddressEntry.fromJSON(e)
          )
        : [],
      ibcPortId: isSet(object.ibcPortId) ? String(object.ibcPortId) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.dtagTransferRequests) {
      obj.dtagTransferRequests = message.dtagTransferRequests.map((e) =>
        e ? DTagTransferRequest.toJSON(e) : undefined
      );
    } else {
      obj.dtagTransferRequests = [];
    }
    if (message.chainLinks) {
      obj.chainLinks = message.chainLinks.map((e) =>
        e ? ChainLink.toJSON(e) : undefined
      );
    } else {
      obj.chainLinks = [];
    }
    if (message.applicationLinks) {
      obj.applicationLinks = message.applicationLinks.map((e) =>
        e ? ApplicationLink.toJSON(e) : undefined
      );
    } else {
      obj.applicationLinks = [];
    }
    if (message.defaultExternalAddresses) {
      obj.defaultExternalAddresses = message.defaultExternalAddresses.map((e) =>
        e ? DefaultExternalAddressEntry.toJSON(e) : undefined
      );
    } else {
      obj.defaultExternalAddresses = [];
    }
    message.ibcPortId !== undefined && (obj.ibcPortId = message.ibcPortId);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.dtagTransferRequests =
      object.dtagTransferRequests?.map((e) =>
        DTagTransferRequest.fromPartial(e)
      ) || [];
    message.chainLinks =
      object.chainLinks?.map((e) => ChainLink.fromPartial(e)) || [];
    message.applicationLinks =
      object.applicationLinks?.map((e) => ApplicationLink.fromPartial(e)) || [];
    message.defaultExternalAddresses =
      object.defaultExternalAddresses?.map((e) =>
        DefaultExternalAddressEntry.fromPartial(e)
      ) || [];
    message.ibcPortId = object.ibcPortId ?? "";
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};
function createBaseDefaultExternalAddressEntry(): DefaultExternalAddressEntry {
  return {
    owner: "",
    chainName: "",
    target: "",
  };
}
export const DefaultExternalAddressEntry = {
  encode(
    message: DefaultExternalAddressEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
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
  ): DefaultExternalAddressEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefaultExternalAddressEntry();
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
          message.target = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DefaultExternalAddressEntry {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      target: isSet(object.target) ? String(object.target) : "",
    };
  },
  toJSON(message: DefaultExternalAddressEntry): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.target !== undefined && (obj.target = message.target);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DefaultExternalAddressEntry>, I>>(
    object: I
  ): DefaultExternalAddressEntry {
    const message = createBaseDefaultExternalAddressEntry();
    message.owner = object.owner ?? "";
    message.chainName = object.chainName ?? "";
    message.target = object.target ?? "";
    return message;
  },
};
