/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import {
  Proof,
  ChainConfig,
} from "../../../desmos/profiles/v1beta1/models_chain_links";

/**
 * LinkChainAccountPacketData defines the object that should be sent inside a
 * MsgSendPacket when wanting to link an external chain to a Desmos profile
 * using IBC
 */
export interface LinkChainAccountPacketData {
  /** SourceAddress contains the details of the external chain address */
  sourceAddress?: Any;
  /** SourceProof represents the proof of ownership of the source address */
  sourceProof?: Proof;
  /** SourceChainConfig contains the details of the source chain */
  sourceChainConfig?: ChainConfig;
  /**
   * DestinationAddress represents the Desmos address of the profile that should
   * be linked with the external account
   */
  destinationAddress: string;
  /** DestinationProof contains the proof of ownership of the DestinationAddress */
  destinationProof?: Proof;
}

/** LinkChainAccountPacketAck defines a struct for the packet acknowledgment */
export interface LinkChainAccountPacketAck {
  /**
   * SourceAddress contains the external address that has been linked properly
   * with the profile
   */
  sourceAddress: string;
}

function createBaseLinkChainAccountPacketData(): LinkChainAccountPacketData {
  return {
    sourceAddress: undefined,
    sourceProof: undefined,
    sourceChainConfig: undefined,
    destinationAddress: "",
    destinationProof: undefined,
  };
}

export const LinkChainAccountPacketData = {
  encode(
    message: LinkChainAccountPacketData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sourceAddress !== undefined) {
      Any.encode(message.sourceAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.sourceProof !== undefined) {
      Proof.encode(message.sourceProof, writer.uint32(18).fork()).ldelim();
    }
    if (message.sourceChainConfig !== undefined) {
      ChainConfig.encode(
        message.sourceChainConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.destinationAddress !== "") {
      writer.uint32(34).string(message.destinationAddress);
    }
    if (message.destinationProof !== undefined) {
      Proof.encode(message.destinationProof, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LinkChainAccountPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkChainAccountPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceAddress = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.sourceProof = Proof.decode(reader, reader.uint32());
          break;
        case 3:
          message.sourceChainConfig = ChainConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.destinationAddress = reader.string();
          break;
        case 5:
          message.destinationProof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LinkChainAccountPacketData {
    return {
      sourceAddress: isSet(object.sourceAddress)
        ? Any.fromJSON(object.sourceAddress)
        : undefined,
      sourceProof: isSet(object.sourceProof)
        ? Proof.fromJSON(object.sourceProof)
        : undefined,
      sourceChainConfig: isSet(object.sourceChainConfig)
        ? ChainConfig.fromJSON(object.sourceChainConfig)
        : undefined,
      destinationAddress: isSet(object.destinationAddress)
        ? String(object.destinationAddress)
        : "",
      destinationProof: isSet(object.destinationProof)
        ? Proof.fromJSON(object.destinationProof)
        : undefined,
    };
  },

  toJSON(message: LinkChainAccountPacketData): unknown {
    const obj: any = {};
    message.sourceAddress !== undefined &&
      (obj.sourceAddress = message.sourceAddress
        ? Any.toJSON(message.sourceAddress)
        : undefined);
    message.sourceProof !== undefined &&
      (obj.sourceProof = message.sourceProof
        ? Proof.toJSON(message.sourceProof)
        : undefined);
    message.sourceChainConfig !== undefined &&
      (obj.sourceChainConfig = message.sourceChainConfig
        ? ChainConfig.toJSON(message.sourceChainConfig)
        : undefined);
    message.destinationAddress !== undefined &&
      (obj.destinationAddress = message.destinationAddress);
    message.destinationProof !== undefined &&
      (obj.destinationProof = message.destinationProof
        ? Proof.toJSON(message.destinationProof)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LinkChainAccountPacketData>, I>>(
    object: I
  ): LinkChainAccountPacketData {
    const message = createBaseLinkChainAccountPacketData();
    message.sourceAddress =
      object.sourceAddress !== undefined && object.sourceAddress !== null
        ? Any.fromPartial(object.sourceAddress)
        : undefined;
    message.sourceProof =
      object.sourceProof !== undefined && object.sourceProof !== null
        ? Proof.fromPartial(object.sourceProof)
        : undefined;
    message.sourceChainConfig =
      object.sourceChainConfig !== undefined &&
      object.sourceChainConfig !== null
        ? ChainConfig.fromPartial(object.sourceChainConfig)
        : undefined;
    message.destinationAddress = object.destinationAddress ?? "";
    message.destinationProof =
      object.destinationProof !== undefined && object.destinationProof !== null
        ? Proof.fromPartial(object.destinationProof)
        : undefined;
    return message;
  },
};

function createBaseLinkChainAccountPacketAck(): LinkChainAccountPacketAck {
  return { sourceAddress: "" };
}

export const LinkChainAccountPacketAck = {
  encode(
    message: LinkChainAccountPacketAck,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sourceAddress !== "") {
      writer.uint32(10).string(message.sourceAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LinkChainAccountPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkChainAccountPacketAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LinkChainAccountPacketAck {
    return {
      sourceAddress: isSet(object.sourceAddress)
        ? String(object.sourceAddress)
        : "",
    };
  },

  toJSON(message: LinkChainAccountPacketAck): unknown {
    const obj: any = {};
    message.sourceAddress !== undefined &&
      (obj.sourceAddress = message.sourceAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LinkChainAccountPacketAck>, I>>(
    object: I
  ): LinkChainAccountPacketAck {
    const message = createBaseLinkChainAccountPacketAck();
    message.sourceAddress = object.sourceAddress ?? "";
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
