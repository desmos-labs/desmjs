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
/** MsgLinkChainAccount represents a message to link an account to a profile. */
export interface MsgLinkChainAccount {
  /**
   * ChainAddress contains the details of the external chain address to be
   * linked
   */
  chainAddress?: Any;
  /** Proof contains the proof of ownership of the external chain address */
  proof?: Proof;
  /** ChainConfig contains the configuration of the external chain */
  chainConfig?: ChainConfig;
  /**
   * Signer represents the Desmos address associated with the
   * profile to which link the external account
   */
  signer: string;
}
export interface MsgLinkChainAccountProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgLinkChainAccount";
  value: Uint8Array;
}
/** MsgLinkChainAccount represents a message to link an account to a profile. */
export interface MsgLinkChainAccountAmino {
  /**
   * ChainAddress contains the details of the external chain address to be
   * linked
   */
  chain_address?: AnyAmino;
  /** Proof contains the proof of ownership of the external chain address */
  proof?: ProofAmino;
  /** ChainConfig contains the configuration of the external chain */
  chain_config?: ChainConfigAmino;
  /**
   * Signer represents the Desmos address associated with the
   * profile to which link the external account
   */
  signer: string;
}
export interface MsgLinkChainAccountAminoMsg {
  type: "/desmos.profiles.v3.MsgLinkChainAccount";
  value: MsgLinkChainAccountAmino;
}
/** MsgLinkChainAccountResponse defines the Msg/LinkAccount response type. */
export interface MsgLinkChainAccountResponse {}
export interface MsgLinkChainAccountResponseProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgLinkChainAccountResponse";
  value: Uint8Array;
}
/** MsgLinkChainAccountResponse defines the Msg/LinkAccount response type. */
export interface MsgLinkChainAccountResponseAmino {}
export interface MsgLinkChainAccountResponseAminoMsg {
  type: "/desmos.profiles.v3.MsgLinkChainAccountResponse";
  value: MsgLinkChainAccountResponseAmino;
}
/**
 * MsgUnlinkChainAccount represents a message to unlink an account from a
 * profile.
 */
export interface MsgUnlinkChainAccount {
  /** Owner represents the Desmos profile from which to remove the link */
  owner: string;
  /**
   * ChainName represents the name of the chain to which the link to remove is
   * associated
   */
  chainName: string;
  /** Target represents the external address to be removed */
  target: string;
}
export interface MsgUnlinkChainAccountProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgUnlinkChainAccount";
  value: Uint8Array;
}
/**
 * MsgUnlinkChainAccount represents a message to unlink an account from a
 * profile.
 */
export interface MsgUnlinkChainAccountAmino {
  /** Owner represents the Desmos profile from which to remove the link */
  owner: string;
  /**
   * ChainName represents the name of the chain to which the link to remove is
   * associated
   */
  chain_name: string;
  /** Target represents the external address to be removed */
  target: string;
}
export interface MsgUnlinkChainAccountAminoMsg {
  type: "/desmos.profiles.v3.MsgUnlinkChainAccount";
  value: MsgUnlinkChainAccountAmino;
}
/** MsgUnlinkChainAccountResponse defines the Msg/UnlinkAccount response type. */
export interface MsgUnlinkChainAccountResponse {}
export interface MsgUnlinkChainAccountResponseProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgUnlinkChainAccountResponse";
  value: Uint8Array;
}
/** MsgUnlinkChainAccountResponse defines the Msg/UnlinkAccount response type. */
export interface MsgUnlinkChainAccountResponseAmino {}
export interface MsgUnlinkChainAccountResponseAminoMsg {
  type: "/desmos.profiles.v3.MsgUnlinkChainAccountResponse";
  value: MsgUnlinkChainAccountResponseAmino;
}
/**
 * MsgSetDefaultExternalAddress represents the message used to set a default
 * address for a specific chain
 */
export interface MsgSetDefaultExternalAddress {
  /** Name of the chain for which to set the default address */
  chainName: string;
  /** Address to be set as the default one */
  target: string;
  /** User signing the message */
  signer: string;
}
export interface MsgSetDefaultExternalAddressProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgSetDefaultExternalAddress";
  value: Uint8Array;
}
/**
 * MsgSetDefaultExternalAddress represents the message used to set a default
 * address for a specific chain
 */
export interface MsgSetDefaultExternalAddressAmino {
  /** Name of the chain for which to set the default address */
  chain_name: string;
  /** Address to be set as the default one */
  target: string;
  /** User signing the message */
  signer: string;
}
export interface MsgSetDefaultExternalAddressAminoMsg {
  type: "/desmos.profiles.v3.MsgSetDefaultExternalAddress";
  value: MsgSetDefaultExternalAddressAmino;
}
/**
 * MsgSetDefaultExternalAddressResponse represents the
 * Msg/SetDefaultExternalAddress response type
 */
export interface MsgSetDefaultExternalAddressResponse {}
export interface MsgSetDefaultExternalAddressResponseProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgSetDefaultExternalAddressResponse";
  value: Uint8Array;
}
/**
 * MsgSetDefaultExternalAddressResponse represents the
 * Msg/SetDefaultExternalAddress response type
 */
export interface MsgSetDefaultExternalAddressResponseAmino {}
export interface MsgSetDefaultExternalAddressResponseAminoMsg {
  type: "/desmos.profiles.v3.MsgSetDefaultExternalAddressResponse";
  value: MsgSetDefaultExternalAddressResponseAmino;
}
function createBaseMsgLinkChainAccount(): MsgLinkChainAccount {
  return {
    chainAddress: undefined,
    proof: undefined,
    chainConfig: undefined,
    signer: "",
  };
}
export const MsgLinkChainAccount = {
  encode(
    message: MsgLinkChainAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chainAddress !== undefined) {
      Any.encode(message.chainAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
    }
    if (message.chainConfig !== undefined) {
      ChainConfig.encode(
        message.chainConfig,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLinkChainAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLinkChainAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainAddress = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        case 3:
          message.chainConfig = ChainConfig.decode(reader, reader.uint32());
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLinkChainAccount {
    return {
      chainAddress: isSet(object.chainAddress)
        ? Any.fromJSON(object.chainAddress)
        : undefined,
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined,
      chainConfig: isSet(object.chainConfig)
        ? ChainConfig.fromJSON(object.chainConfig)
        : undefined,
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },
  toJSON(message: MsgLinkChainAccount): unknown {
    const obj: any = {};
    message.chainAddress !== undefined &&
      (obj.chainAddress = message.chainAddress
        ? Any.toJSON(message.chainAddress)
        : undefined);
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    message.chainConfig !== undefined &&
      (obj.chainConfig = message.chainConfig
        ? ChainConfig.toJSON(message.chainConfig)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLinkChainAccount>, I>>(
    object: I
  ): MsgLinkChainAccount {
    const message = createBaseMsgLinkChainAccount();
    message.chainAddress =
      object.chainAddress !== undefined && object.chainAddress !== null
        ? Any.fromPartial(object.chainAddress)
        : undefined;
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? Proof.fromPartial(object.proof)
        : undefined;
    message.chainConfig =
      object.chainConfig !== undefined && object.chainConfig !== null
        ? ChainConfig.fromPartial(object.chainConfig)
        : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgLinkChainAccountAmino): MsgLinkChainAccount {
    return {
      chainAddress: object?.chain_address
        ? Any.fromAmino(object.chain_address)
        : undefined,
      proof: object?.proof ? Proof.fromAmino(object.proof) : undefined,
      chainConfig: object?.chain_config
        ? ChainConfig.fromAmino(object.chain_config)
        : undefined,
      signer: object.signer,
    };
  },
  toAmino(message: MsgLinkChainAccount): MsgLinkChainAccountAmino {
    const obj: any = {};
    obj.chain_address = message.chainAddress
      ? Any.toAmino(message.chainAddress)
      : undefined;
    obj.proof = message.proof ? Proof.toAmino(message.proof) : undefined;
    obj.chain_config = message.chainConfig
      ? ChainConfig.toAmino(message.chainConfig)
      : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgLinkChainAccountAminoMsg): MsgLinkChainAccount {
    return MsgLinkChainAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLinkChainAccountProtoMsg): MsgLinkChainAccount {
    return MsgLinkChainAccount.decode(message.value);
  },
  toProto(message: MsgLinkChainAccount): Uint8Array {
    return MsgLinkChainAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgLinkChainAccount): MsgLinkChainAccountProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgLinkChainAccount",
      value: MsgLinkChainAccount.encode(message).finish(),
    };
  },
};
function createBaseMsgLinkChainAccountResponse(): MsgLinkChainAccountResponse {
  return {};
}
export const MsgLinkChainAccountResponse = {
  encode(
    _: MsgLinkChainAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLinkChainAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLinkChainAccountResponse();
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
  fromJSON(_: any): MsgLinkChainAccountResponse {
    return {};
  },
  toJSON(_: MsgLinkChainAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLinkChainAccountResponse>, I>>(
    _: I
  ): MsgLinkChainAccountResponse {
    const message = createBaseMsgLinkChainAccountResponse();
    return message;
  },
  fromAmino(_: MsgLinkChainAccountResponseAmino): MsgLinkChainAccountResponse {
    return {};
  },
  toAmino(_: MsgLinkChainAccountResponse): MsgLinkChainAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgLinkChainAccountResponseAminoMsg
  ): MsgLinkChainAccountResponse {
    return MsgLinkChainAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgLinkChainAccountResponseProtoMsg
  ): MsgLinkChainAccountResponse {
    return MsgLinkChainAccountResponse.decode(message.value);
  },
  toProto(message: MsgLinkChainAccountResponse): Uint8Array {
    return MsgLinkChainAccountResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgLinkChainAccountResponse
  ): MsgLinkChainAccountResponseProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgLinkChainAccountResponse",
      value: MsgLinkChainAccountResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgUnlinkChainAccount(): MsgUnlinkChainAccount {
  return {
    owner: "",
    chainName: "",
    target: "",
  };
}
export const MsgUnlinkChainAccount = {
  encode(
    message: MsgUnlinkChainAccount,
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
  ): MsgUnlinkChainAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlinkChainAccount();
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
  fromJSON(object: any): MsgUnlinkChainAccount {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      target: isSet(object.target) ? String(object.target) : "",
    };
  },
  toJSON(message: MsgUnlinkChainAccount): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.target !== undefined && (obj.target = message.target);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnlinkChainAccount>, I>>(
    object: I
  ): MsgUnlinkChainAccount {
    const message = createBaseMsgUnlinkChainAccount();
    message.owner = object.owner ?? "";
    message.chainName = object.chainName ?? "";
    message.target = object.target ?? "";
    return message;
  },
  fromAmino(object: MsgUnlinkChainAccountAmino): MsgUnlinkChainAccount {
    return {
      owner: object.owner,
      chainName: object.chain_name,
      target: object.target,
    };
  },
  toAmino(message: MsgUnlinkChainAccount): MsgUnlinkChainAccountAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.chain_name = message.chainName;
    obj.target = message.target;
    return obj;
  },
  fromAminoMsg(object: MsgUnlinkChainAccountAminoMsg): MsgUnlinkChainAccount {
    return MsgUnlinkChainAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnlinkChainAccountProtoMsg): MsgUnlinkChainAccount {
    return MsgUnlinkChainAccount.decode(message.value);
  },
  toProto(message: MsgUnlinkChainAccount): Uint8Array {
    return MsgUnlinkChainAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgUnlinkChainAccount): MsgUnlinkChainAccountProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgUnlinkChainAccount",
      value: MsgUnlinkChainAccount.encode(message).finish(),
    };
  },
};
function createBaseMsgUnlinkChainAccountResponse(): MsgUnlinkChainAccountResponse {
  return {};
}
export const MsgUnlinkChainAccountResponse = {
  encode(
    _: MsgUnlinkChainAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUnlinkChainAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlinkChainAccountResponse();
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
  fromJSON(_: any): MsgUnlinkChainAccountResponse {
    return {};
  },
  toJSON(_: MsgUnlinkChainAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnlinkChainAccountResponse>, I>>(
    _: I
  ): MsgUnlinkChainAccountResponse {
    const message = createBaseMsgUnlinkChainAccountResponse();
    return message;
  },
  fromAmino(
    _: MsgUnlinkChainAccountResponseAmino
  ): MsgUnlinkChainAccountResponse {
    return {};
  },
  toAmino(
    _: MsgUnlinkChainAccountResponse
  ): MsgUnlinkChainAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgUnlinkChainAccountResponseAminoMsg
  ): MsgUnlinkChainAccountResponse {
    return MsgUnlinkChainAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgUnlinkChainAccountResponseProtoMsg
  ): MsgUnlinkChainAccountResponse {
    return MsgUnlinkChainAccountResponse.decode(message.value);
  },
  toProto(message: MsgUnlinkChainAccountResponse): Uint8Array {
    return MsgUnlinkChainAccountResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgUnlinkChainAccountResponse
  ): MsgUnlinkChainAccountResponseProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgUnlinkChainAccountResponse",
      value: MsgUnlinkChainAccountResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgSetDefaultExternalAddress(): MsgSetDefaultExternalAddress {
  return {
    chainName: "",
    target: "",
    signer: "",
  };
}
export const MsgSetDefaultExternalAddress = {
  encode(
    message: MsgSetDefaultExternalAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chainName !== "") {
      writer.uint32(10).string(message.chainName);
    }
    if (message.target !== "") {
      writer.uint32(18).string(message.target);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetDefaultExternalAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDefaultExternalAddress();
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
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetDefaultExternalAddress {
    return {
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
      target: isSet(object.target) ? String(object.target) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },
  toJSON(message: MsgSetDefaultExternalAddress): unknown {
    const obj: any = {};
    message.chainName !== undefined && (obj.chainName = message.chainName);
    message.target !== undefined && (obj.target = message.target);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetDefaultExternalAddress>, I>>(
    object: I
  ): MsgSetDefaultExternalAddress {
    const message = createBaseMsgSetDefaultExternalAddress();
    message.chainName = object.chainName ?? "";
    message.target = object.target ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(
    object: MsgSetDefaultExternalAddressAmino
  ): MsgSetDefaultExternalAddress {
    return {
      chainName: object.chain_name,
      target: object.target,
      signer: object.signer,
    };
  },
  toAmino(
    message: MsgSetDefaultExternalAddress
  ): MsgSetDefaultExternalAddressAmino {
    const obj: any = {};
    obj.chain_name = message.chainName;
    obj.target = message.target;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(
    object: MsgSetDefaultExternalAddressAminoMsg
  ): MsgSetDefaultExternalAddress {
    return MsgSetDefaultExternalAddress.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgSetDefaultExternalAddressProtoMsg
  ): MsgSetDefaultExternalAddress {
    return MsgSetDefaultExternalAddress.decode(message.value);
  },
  toProto(message: MsgSetDefaultExternalAddress): Uint8Array {
    return MsgSetDefaultExternalAddress.encode(message).finish();
  },
  toProtoMsg(
    message: MsgSetDefaultExternalAddress
  ): MsgSetDefaultExternalAddressProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgSetDefaultExternalAddress",
      value: MsgSetDefaultExternalAddress.encode(message).finish(),
    };
  },
};
function createBaseMsgSetDefaultExternalAddressResponse(): MsgSetDefaultExternalAddressResponse {
  return {};
}
export const MsgSetDefaultExternalAddressResponse = {
  encode(
    _: MsgSetDefaultExternalAddressResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetDefaultExternalAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDefaultExternalAddressResponse();
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
  fromJSON(_: any): MsgSetDefaultExternalAddressResponse {
    return {};
  },
  toJSON(_: MsgSetDefaultExternalAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgSetDefaultExternalAddressResponse>, I>
  >(_: I): MsgSetDefaultExternalAddressResponse {
    const message = createBaseMsgSetDefaultExternalAddressResponse();
    return message;
  },
  fromAmino(
    _: MsgSetDefaultExternalAddressResponseAmino
  ): MsgSetDefaultExternalAddressResponse {
    return {};
  },
  toAmino(
    _: MsgSetDefaultExternalAddressResponse
  ): MsgSetDefaultExternalAddressResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgSetDefaultExternalAddressResponseAminoMsg
  ): MsgSetDefaultExternalAddressResponse {
    return MsgSetDefaultExternalAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgSetDefaultExternalAddressResponseProtoMsg
  ): MsgSetDefaultExternalAddressResponse {
    return MsgSetDefaultExternalAddressResponse.decode(message.value);
  },
  toProto(message: MsgSetDefaultExternalAddressResponse): Uint8Array {
    return MsgSetDefaultExternalAddressResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgSetDefaultExternalAddressResponse
  ): MsgSetDefaultExternalAddressResponseProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgSetDefaultExternalAddressResponse",
      value: MsgSetDefaultExternalAddressResponse.encode(message).finish(),
    };
  },
};
