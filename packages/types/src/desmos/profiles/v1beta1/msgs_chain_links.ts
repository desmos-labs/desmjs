/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import {
  Proof,
  ChainConfig,
} from "../../../desmos/profiles/v1beta1/models_chain_links";

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

/** MsgLinkChainAccountResponse defines the Msg/LinkAccount response type. */
export interface MsgLinkChainAccountResponse {}

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

/** MsgUnlinkChainAccountResponse defines the Msg/UnlinkAccount response type. */
export interface MsgUnlinkChainAccountResponse {}

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
};

function createBaseMsgUnlinkChainAccount(): MsgUnlinkChainAccount {
  return { owner: "", chainName: "", target: "" };
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
