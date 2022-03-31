/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../desmos/profiles/v1beta1/models_params";
import { DTagTransferRequest } from "../../../desmos/profiles/v1beta1/models_dtag_requests";
import {
  Relationship,
  UserBlock,
} from "../../../desmos/profiles/v1beta1/models_relationships";
import { ChainLink } from "../../../desmos/profiles/v1beta1/models_chain_links";
import { ApplicationLink } from "../../../desmos/profiles/v1beta1/models_app_links";

/** GenesisState defines the profiles module's genesis state. */
export interface GenesisState {
  dtagTransferRequests: DTagTransferRequest[];
  relationships: Relationship[];
  blocks: UserBlock[];
  params?: Params;
  ibcPortId: string;
  chainLinks: ChainLink[];
  applicationLinks: ApplicationLink[];
}

function createBaseGenesisState(): GenesisState {
  return {
    dtagTransferRequests: [],
    relationships: [],
    blocks: [],
    params: undefined,
    ibcPortId: "",
    chainLinks: [],
    applicationLinks: [],
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
    for (const v of message.relationships) {
      Relationship.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.blocks) {
      UserBlock.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    if (message.ibcPortId !== "") {
      writer.uint32(42).string(message.ibcPortId);
    }
    for (const v of message.chainLinks) {
      ChainLink.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.applicationLinks) {
      ApplicationLink.encode(v!, writer.uint32(58).fork()).ldelim();
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
          message.relationships.push(
            Relationship.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.blocks.push(UserBlock.decode(reader, reader.uint32()));
          break;
        case 4:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 5:
          message.ibcPortId = reader.string();
          break;
        case 6:
          message.chainLinks.push(ChainLink.decode(reader, reader.uint32()));
          break;
        case 7:
          message.applicationLinks.push(
            ApplicationLink.decode(reader, reader.uint32())
          );
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
      relationships: Array.isArray(object?.relationships)
        ? object.relationships.map((e: any) => Relationship.fromJSON(e))
        : [],
      blocks: Array.isArray(object?.blocks)
        ? object.blocks.map((e: any) => UserBlock.fromJSON(e))
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      ibcPortId: isSet(object.ibcPortId) ? String(object.ibcPortId) : "",
      chainLinks: Array.isArray(object?.chainLinks)
        ? object.chainLinks.map((e: any) => ChainLink.fromJSON(e))
        : [],
      applicationLinks: Array.isArray(object?.applicationLinks)
        ? object.applicationLinks.map((e: any) => ApplicationLink.fromJSON(e))
        : [],
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
    if (message.relationships) {
      obj.relationships = message.relationships.map((e) =>
        e ? Relationship.toJSON(e) : undefined
      );
    } else {
      obj.relationships = [];
    }
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) =>
        e ? UserBlock.toJSON(e) : undefined
      );
    } else {
      obj.blocks = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.ibcPortId !== undefined && (obj.ibcPortId = message.ibcPortId);
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
    message.relationships =
      object.relationships?.map((e) => Relationship.fromPartial(e)) || [];
    message.blocks = object.blocks?.map((e) => UserBlock.fromPartial(e)) || [];
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.ibcPortId = object.ibcPortId ?? "";
    message.chainLinks =
      object.chainLinks?.map((e) => ChainLink.fromPartial(e)) || [];
    message.applicationLinks =
      object.applicationLinks?.map((e) => ApplicationLink.fromPartial(e)) || [];
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
