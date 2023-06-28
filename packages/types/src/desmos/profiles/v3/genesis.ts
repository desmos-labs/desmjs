/* eslint-disable */
import {
  DTagTransferRequest,
  DTagTransferRequestAmino,
} from "./models_dtag_requests";
import { ChainLink, ChainLinkAmino } from "./models_chain_links";
import { ApplicationLink, ApplicationLinkAmino } from "./models_app_links";
import { Params, ParamsAmino } from "./models_params";
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
export interface GenesisStateProtoMsg {
  typeUrl: "/desmos.profiles.v3.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the profiles module's genesis state. */
export interface GenesisStateAmino {
  dtag_transfer_requests: DTagTransferRequestAmino[];
  chain_links: ChainLinkAmino[];
  application_links: ApplicationLinkAmino[];
  default_external_addresses: DefaultExternalAddressEntryAmino[];
  ibc_port_id: string;
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/desmos.profiles.v3.GenesisState";
  value: GenesisStateAmino;
}
/** DefaultExternalAddressEntry contains the data of a default extnernal address */
export interface DefaultExternalAddressEntry {
  owner: string;
  chainName: string;
  target: string;
}
export interface DefaultExternalAddressEntryProtoMsg {
  typeUrl: "/desmos.profiles.v3.DefaultExternalAddressEntry";
  value: Uint8Array;
}
/** DefaultExternalAddressEntry contains the data of a default extnernal address */
export interface DefaultExternalAddressEntryAmino {
  owner: string;
  chain_name: string;
  target: string;
}
export interface DefaultExternalAddressEntryAminoMsg {
  type: "/desmos.profiles.v3.DefaultExternalAddressEntry";
  value: DefaultExternalAddressEntryAmino;
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
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      dtagTransferRequests: Array.isArray(object?.dtag_transfer_requests)
        ? object.dtag_transfer_requests.map((e: any) =>
            DTagTransferRequest.fromAmino(e)
          )
        : [],
      chainLinks: Array.isArray(object?.chain_links)
        ? object.chain_links.map((e: any) => ChainLink.fromAmino(e))
        : [],
      applicationLinks: Array.isArray(object?.application_links)
        ? object.application_links.map((e: any) => ApplicationLink.fromAmino(e))
        : [],
      defaultExternalAddresses: Array.isArray(
        object?.default_external_addresses
      )
        ? object.default_external_addresses.map((e: any) =>
            DefaultExternalAddressEntry.fromAmino(e)
          )
        : [],
      ibcPortId: object.ibc_port_id,
      params: object?.params ? Params.fromAmino(object.params) : undefined,
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.dtagTransferRequests) {
      obj.dtag_transfer_requests = message.dtagTransferRequests.map((e) =>
        e ? DTagTransferRequest.toAmino(e) : undefined
      );
    } else {
      obj.dtag_transfer_requests = [];
    }
    if (message.chainLinks) {
      obj.chain_links = message.chainLinks.map((e) =>
        e ? ChainLink.toAmino(e) : undefined
      );
    } else {
      obj.chain_links = [];
    }
    if (message.applicationLinks) {
      obj.application_links = message.applicationLinks.map((e) =>
        e ? ApplicationLink.toAmino(e) : undefined
      );
    } else {
      obj.application_links = [];
    }
    if (message.defaultExternalAddresses) {
      obj.default_external_addresses = message.defaultExternalAddresses.map(
        (e) => (e ? DefaultExternalAddressEntry.toAmino(e) : undefined)
      );
    } else {
      obj.default_external_addresses = [];
    }
    obj.ibc_port_id = message.ibcPortId;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.GenesisState",
      value: GenesisState.encode(message).finish(),
    };
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
  fromAmino(
    object: DefaultExternalAddressEntryAmino
  ): DefaultExternalAddressEntry {
    return {
      owner: object.owner,
      chainName: object.chain_name,
      target: object.target,
    };
  },
  toAmino(
    message: DefaultExternalAddressEntry
  ): DefaultExternalAddressEntryAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.chain_name = message.chainName;
    obj.target = message.target;
    return obj;
  },
  fromAminoMsg(
    object: DefaultExternalAddressEntryAminoMsg
  ): DefaultExternalAddressEntry {
    return DefaultExternalAddressEntry.fromAmino(object.value);
  },
  fromProtoMsg(
    message: DefaultExternalAddressEntryProtoMsg
  ): DefaultExternalAddressEntry {
    return DefaultExternalAddressEntry.decode(message.value);
  },
  toProto(message: DefaultExternalAddressEntry): Uint8Array {
    return DefaultExternalAddressEntry.encode(message).finish();
  },
  toProtoMsg(
    message: DefaultExternalAddressEntry
  ): DefaultExternalAddressEntryProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.DefaultExternalAddressEntry",
      value: DefaultExternalAddressEntry.encode(message).finish(),
    };
  },
};
