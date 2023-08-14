/* eslint-disable */
import { Any, AnyAmino } from "../../../google/protobuf/any";
import {
  Proof,
  ProofAmino,
  ChainConfig,
  ChainConfigAmino,
} from "./models_chain_links";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "desmos.profiles.v3";
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
export interface LinkChainAccountPacketDataProtoMsg {
  typeUrl: "/desmos.profiles.v3.LinkChainAccountPacketData";
  value: Uint8Array;
}
/**
 * LinkChainAccountPacketData defines the object that should be sent inside a
 * MsgSendPacket when wanting to link an external chain to a Desmos profile
 * using IBC
 */
export interface LinkChainAccountPacketDataAmino {
  /** SourceAddress contains the details of the external chain address */
  source_address?: AnyAmino;
  /** SourceProof represents the proof of ownership of the source address */
  source_proof?: ProofAmino;
  /** SourceChainConfig contains the details of the source chain */
  source_chain_config?: ChainConfigAmino;
  /**
   * DestinationAddress represents the Desmos address of the profile that should
   * be linked with the external account
   */
  destination_address: string;
  /** DestinationProof contains the proof of ownership of the DestinationAddress */
  destination_proof?: ProofAmino;
}
export interface LinkChainAccountPacketDataAminoMsg {
  type: "/desmos.profiles.v3.LinkChainAccountPacketData";
  value: LinkChainAccountPacketDataAmino;
}
/** LinkChainAccountPacketAck defines a struct for the packet acknowledgment */
export interface LinkChainAccountPacketAck {
  /**
   * SourceAddress contains the external address that has been linked properly
   * with the profile
   */
  sourceAddress: string;
}
export interface LinkChainAccountPacketAckProtoMsg {
  typeUrl: "/desmos.profiles.v3.LinkChainAccountPacketAck";
  value: Uint8Array;
}
/** LinkChainAccountPacketAck defines a struct for the packet acknowledgment */
export interface LinkChainAccountPacketAckAmino {
  /**
   * SourceAddress contains the external address that has been linked properly
   * with the profile
   */
  source_address: string;
}
export interface LinkChainAccountPacketAckAminoMsg {
  type: "/desmos.profiles.v3.LinkChainAccountPacketAck";
  value: LinkChainAccountPacketAckAmino;
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
    writer: _m0.Writer = _m0.Writer.create(),
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
        writer.uint32(26).fork(),
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
    length?: number,
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
            reader.uint32(),
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
    object: I,
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
  fromAmino(
    object: LinkChainAccountPacketDataAmino,
  ): LinkChainAccountPacketData {
    return {
      sourceAddress: object?.source_address
        ? Any.fromAmino(object.source_address)
        : undefined,
      sourceProof: object?.source_proof
        ? Proof.fromAmino(object.source_proof)
        : undefined,
      sourceChainConfig: object?.source_chain_config
        ? ChainConfig.fromAmino(object.source_chain_config)
        : undefined,
      destinationAddress: object.destination_address,
      destinationProof: object?.destination_proof
        ? Proof.fromAmino(object.destination_proof)
        : undefined,
    };
  },
  toAmino(
    message: LinkChainAccountPacketData,
  ): LinkChainAccountPacketDataAmino {
    const obj: any = {};
    obj.source_address = message.sourceAddress
      ? Any.toAmino(message.sourceAddress)
      : undefined;
    obj.source_proof = message.sourceProof
      ? Proof.toAmino(message.sourceProof)
      : undefined;
    obj.source_chain_config = message.sourceChainConfig
      ? ChainConfig.toAmino(message.sourceChainConfig)
      : undefined;
    obj.destination_address = message.destinationAddress;
    obj.destination_proof = message.destinationProof
      ? Proof.toAmino(message.destinationProof)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: LinkChainAccountPacketDataAminoMsg,
  ): LinkChainAccountPacketData {
    return LinkChainAccountPacketData.fromAmino(object.value);
  },
  fromProtoMsg(
    message: LinkChainAccountPacketDataProtoMsg,
  ): LinkChainAccountPacketData {
    return LinkChainAccountPacketData.decode(message.value);
  },
  toProto(message: LinkChainAccountPacketData): Uint8Array {
    return LinkChainAccountPacketData.encode(message).finish();
  },
  toProtoMsg(
    message: LinkChainAccountPacketData,
  ): LinkChainAccountPacketDataProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.LinkChainAccountPacketData",
      value: LinkChainAccountPacketData.encode(message).finish(),
    };
  },
};
function createBaseLinkChainAccountPacketAck(): LinkChainAccountPacketAck {
  return {
    sourceAddress: "",
  };
}
export const LinkChainAccountPacketAck = {
  encode(
    message: LinkChainAccountPacketAck,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sourceAddress !== "") {
      writer.uint32(10).string(message.sourceAddress);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
    object: I,
  ): LinkChainAccountPacketAck {
    const message = createBaseLinkChainAccountPacketAck();
    message.sourceAddress = object.sourceAddress ?? "";
    return message;
  },
  fromAmino(object: LinkChainAccountPacketAckAmino): LinkChainAccountPacketAck {
    return {
      sourceAddress: object.source_address,
    };
  },
  toAmino(message: LinkChainAccountPacketAck): LinkChainAccountPacketAckAmino {
    const obj: any = {};
    obj.source_address = message.sourceAddress;
    return obj;
  },
  fromAminoMsg(
    object: LinkChainAccountPacketAckAminoMsg,
  ): LinkChainAccountPacketAck {
    return LinkChainAccountPacketAck.fromAmino(object.value);
  },
  fromProtoMsg(
    message: LinkChainAccountPacketAckProtoMsg,
  ): LinkChainAccountPacketAck {
    return LinkChainAccountPacketAck.decode(message.value);
  },
  toProto(message: LinkChainAccountPacketAck): Uint8Array {
    return LinkChainAccountPacketAck.encode(message).finish();
  },
  toProtoMsg(
    message: LinkChainAccountPacketAck,
  ): LinkChainAccountPacketAckProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.LinkChainAccountPacketAck",
      value: LinkChainAccountPacketAck.encode(message).finish(),
    };
  },
};
