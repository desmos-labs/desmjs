/* eslint-disable */
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { Timestamp, TimestampAmino } from "../../../google/protobuf/timestamp";
import {
  CompactBitArray,
  CompactBitArrayAmino,
} from "../../../cosmos/crypto/multisig/v1beta1/multisig";
import * as _m0 from "protobufjs/minimal";
import {
  isSet,
  fromJsonTimestamp,
  fromTimestamp,
  DeepPartial,
  Exact,
  bytesFromBase64,
  base64FromBytes,
} from "../../../helpers";
export const protobufPackage = "desmos.profiles.v3";
/** SignatureValueType specifies all the possible signature types */
export enum SignatureValueType {
  /**
   * SIGNATURE_VALUE_TYPE_UNSPECIFIED - SIGNATURE_VALUE_TYPE_UNSPECIFIED specifies an unknown signing mode
   * and will be rejected
   */
  SIGNATURE_VALUE_TYPE_UNSPECIFIED = 0,
  /**
   * SIGNATURE_VALUE_TYPE_RAW - SIGNATURE_VALUE_TYPE_RAW should be used when the value has been
   * signed as a raw byte array
   */
  SIGNATURE_VALUE_TYPE_RAW = 1,
  /**
   * SIGNATURE_VALUE_TYPE_COSMOS_DIRECT - SIGNATURE_VALUE_TYPE_COSMOS_DIRECT should be used when the signed
   * value has been encoded as a Protobuf transaction containing the owner
   * address inside its memo field
   */
  SIGNATURE_VALUE_TYPE_COSMOS_DIRECT = 2,
  /**
   * SIGNATURE_VALUE_TYPE_COSMOS_AMINO - SIGNATURE_VALUE_TYPE_COSMOS_AMINO should be used when the value has
   * been encoded as an Amino transaction containing the owner address inside
   * its memo field
   */
  SIGNATURE_VALUE_TYPE_COSMOS_AMINO = 3,
  /**
   * SIGNATURE_VALUE_TYPE_EVM_PERSONAL_SIGN - SIGNATURE_VALUE_TYPE_EVM_PERSONAL_SIGN should be used when the value
   * has been encoded following the EVM personal_sign specification
   */
  SIGNATURE_VALUE_TYPE_EVM_PERSONAL_SIGN = 4,
  UNRECOGNIZED = -1,
}
export const SignatureValueTypeAmino = SignatureValueType;
export function signatureValueTypeFromJSON(object: any): SignatureValueType {
  switch (object) {
    case 0:
    case "SIGNATURE_VALUE_TYPE_UNSPECIFIED":
      return SignatureValueType.SIGNATURE_VALUE_TYPE_UNSPECIFIED;
    case 1:
    case "SIGNATURE_VALUE_TYPE_RAW":
      return SignatureValueType.SIGNATURE_VALUE_TYPE_RAW;
    case 2:
    case "SIGNATURE_VALUE_TYPE_COSMOS_DIRECT":
      return SignatureValueType.SIGNATURE_VALUE_TYPE_COSMOS_DIRECT;
    case 3:
    case "SIGNATURE_VALUE_TYPE_COSMOS_AMINO":
      return SignatureValueType.SIGNATURE_VALUE_TYPE_COSMOS_AMINO;
    case 4:
    case "SIGNATURE_VALUE_TYPE_EVM_PERSONAL_SIGN":
      return SignatureValueType.SIGNATURE_VALUE_TYPE_EVM_PERSONAL_SIGN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SignatureValueType.UNRECOGNIZED;
  }
}
export function signatureValueTypeToJSON(object: SignatureValueType): string {
  switch (object) {
    case SignatureValueType.SIGNATURE_VALUE_TYPE_UNSPECIFIED:
      return "SIGNATURE_VALUE_TYPE_UNSPECIFIED";
    case SignatureValueType.SIGNATURE_VALUE_TYPE_RAW:
      return "SIGNATURE_VALUE_TYPE_RAW";
    case SignatureValueType.SIGNATURE_VALUE_TYPE_COSMOS_DIRECT:
      return "SIGNATURE_VALUE_TYPE_COSMOS_DIRECT";
    case SignatureValueType.SIGNATURE_VALUE_TYPE_COSMOS_AMINO:
      return "SIGNATURE_VALUE_TYPE_COSMOS_AMINO";
    case SignatureValueType.SIGNATURE_VALUE_TYPE_EVM_PERSONAL_SIGN:
      return "SIGNATURE_VALUE_TYPE_EVM_PERSONAL_SIGN";
    case SignatureValueType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ChainLink contains the data representing either an inter- or cross- chain
 * link
 */
export interface ChainLink {
  /** User defines the destination profile address to link */
  user: string;
  /**
   * Address contains the data of the external chain address to be connected
   * with the Desmos profile
   */
  address?: Any;
  /** Proof contains the ownership proof of the external chain address */
  proof?: Proof;
  /** ChainConfig contains the configuration of the external chain */
  chainConfig?: ChainConfig;
  /** CreationTime represents the time in which the link has been created */
  creationTime?: Timestamp;
}
export interface ChainLinkProtoMsg {
  typeUrl: "/desmos.profiles.v3.ChainLink";
  value: Uint8Array;
}
/**
 * ChainLink contains the data representing either an inter- or cross- chain
 * link
 */
export interface ChainLinkAmino {
  /** User defines the destination profile address to link */
  user: string;
  /**
   * Address contains the data of the external chain address to be connected
   * with the Desmos profile
   */
  address?: AnyAmino;
  /** Proof contains the ownership proof of the external chain address */
  proof?: ProofAmino;
  /** ChainConfig contains the configuration of the external chain */
  chain_config?: ChainConfigAmino;
  /** CreationTime represents the time in which the link has been created */
  creation_time?: TimestampAmino;
}
export interface ChainLinkAminoMsg {
  type: "/desmos.profiles.v3.ChainLink";
  value: ChainLinkAmino;
}
/** ChainConfig contains the data of the chain with which the link is made. */
export interface ChainConfig {
  name: string;
}
export interface ChainConfigProtoMsg {
  typeUrl: "/desmos.profiles.v3.ChainConfig";
  value: Uint8Array;
}
/** ChainConfig contains the data of the chain with which the link is made. */
export interface ChainConfigAmino {
  name: string;
}
export interface ChainConfigAminoMsg {
  type: "/desmos.profiles.v3.ChainConfig";
  value: ChainConfigAmino;
}
/**
 * Proof contains all the data used to verify a signature when linking an
 * account to a profile
 */
export interface Proof {
  /**
   * PubKey represents the public key associated with the address for which to
   * prove the ownership
   */
  pubKey?: Any;
  /** Signature represents the hex-encoded signature of the PlainText value */
  signature?: Any;
  /**
   * PlainText represents the hex-encoded value signed in order to produce the
   * Signature
   */
  plainText: string;
}
export interface ProofProtoMsg {
  typeUrl: "/desmos.profiles.v3.Proof";
  value: Uint8Array;
}
/**
 * Proof contains all the data used to verify a signature when linking an
 * account to a profile
 */
export interface ProofAmino {
  /**
   * PubKey represents the public key associated with the address for which to
   * prove the ownership
   */
  pub_key?: AnyAmino;
  /** Signature represents the hex-encoded signature of the PlainText value */
  signature?: AnyAmino;
  /**
   * PlainText represents the hex-encoded value signed in order to produce the
   * Signature
   */
  plain_text: string;
}
export interface ProofAminoMsg {
  type: "/desmos.profiles.v3.Proof";
  value: ProofAmino;
}
/** Bech32Address represents a Bech32-encoded address */
export interface Bech32Address {
  /** Value represents the Bech-32 encoded address value */
  value: string;
  /** Prefix represents the HRP of the Bech32 address */
  prefix: string;
}
export interface Bech32AddressProtoMsg {
  typeUrl: "/desmos.profiles.v3.Bech32Address";
  value: Uint8Array;
}
/** Bech32Address represents a Bech32-encoded address */
export interface Bech32AddressAmino {
  /** Value represents the Bech-32 encoded address value */
  value: string;
  /** Prefix represents the HRP of the Bech32 address */
  prefix: string;
}
export interface Bech32AddressAminoMsg {
  type: "/desmos.profiles.v3.Bech32Address";
  value: Bech32AddressAmino;
}
/** Base58Address represents a Base58-encoded address */
export interface Base58Address {
  /** Value contains the Base58-encoded address */
  value: string;
}
export interface Base58AddressProtoMsg {
  typeUrl: "/desmos.profiles.v3.Base58Address";
  value: Uint8Array;
}
/** Base58Address represents a Base58-encoded address */
export interface Base58AddressAmino {
  /** Value contains the Base58-encoded address */
  value: string;
}
export interface Base58AddressAminoMsg {
  type: "/desmos.profiles.v3.Base58Address";
  value: Base58AddressAmino;
}
/**
 * HexAddress represents an Hex-encoded address
 * NOTE: Currently it only supports keccak256-uncompressed addresses
 */
export interface HexAddress {
  /** Value represents the hex address value */
  value: string;
  /**
   * Prefix represents the optional prefix used during address encoding (e.g.
   * 0x)
   */
  prefix: string;
}
export interface HexAddressProtoMsg {
  typeUrl: "/desmos.profiles.v3.HexAddress";
  value: Uint8Array;
}
/**
 * HexAddress represents an Hex-encoded address
 * NOTE: Currently it only supports keccak256-uncompressed addresses
 */
export interface HexAddressAmino {
  /** Value represents the hex address value */
  value: string;
  /**
   * Prefix represents the optional prefix used during address encoding (e.g.
   * 0x)
   */
  prefix: string;
}
export interface HexAddressAminoMsg {
  type: "/desmos.profiles.v3.HexAddress";
  value: HexAddressAmino;
}
/** SingleSignature is the signature data for a single signer */
export interface SingleSignature {
  /** Type represents the type of the signature value */
  valueType: SignatureValueType;
  /** Signature is the raw signature bytes */
  signature: Uint8Array;
}
export interface SingleSignatureProtoMsg {
  typeUrl: "/desmos.profiles.v3.SingleSignature";
  value: Uint8Array;
}
/** SingleSignature is the signature data for a single signer */
export interface SingleSignatureAmino {
  /** Type represents the type of the signature value */
  value_type: SignatureValueType;
  /** Signature is the raw signature bytes */
  signature: Uint8Array;
}
export interface SingleSignatureAminoMsg {
  type: "/desmos.profiles.v3.SingleSignature";
  value: SingleSignatureAmino;
}
/** CosmosMultiSignature is the signature data for a multisig public key */
export interface CosmosMultiSignature {
  /** Bitarray specifies which keys within the multisig are signing */
  bitArray?: CompactBitArray;
  /** Signatures is the signatures of the multi-signature */
  signatures: Any[];
}
export interface CosmosMultiSignatureProtoMsg {
  typeUrl: "/desmos.profiles.v3.CosmosMultiSignature";
  value: Uint8Array;
}
/** CosmosMultiSignature is the signature data for a multisig public key */
export interface CosmosMultiSignatureAmino {
  /** Bitarray specifies which keys within the multisig are signing */
  bit_array?: CompactBitArrayAmino;
  /** Signatures is the signatures of the multi-signature */
  signatures: AnyAmino[];
}
export interface CosmosMultiSignatureAminoMsg {
  type: "/desmos.profiles.v3.CosmosMultiSignature";
  value: CosmosMultiSignatureAmino;
}
function createBaseChainLink(): ChainLink {
  return {
    user: "",
    address: undefined,
    proof: undefined,
    chainConfig: undefined,
    creationTime: undefined,
  };
}
export const ChainLink = {
  encode(
    message: ChainLink,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.address !== undefined) {
      Any.encode(message.address, writer.uint32(18).fork()).ldelim();
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    if (message.chainConfig !== undefined) {
      ChainConfig.encode(
        message.chainConfig,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.creationTime !== undefined) {
      Timestamp.encode(message.creationTime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ChainLink {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        case 2:
          message.address = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        case 4:
          message.chainConfig = ChainConfig.decode(reader, reader.uint32());
          break;
        case 5:
          message.creationTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChainLink {
    return {
      user: isSet(object.user) ? String(object.user) : "",
      address: isSet(object.address) ? Any.fromJSON(object.address) : undefined,
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined,
      chainConfig: isSet(object.chainConfig)
        ? ChainConfig.fromJSON(object.chainConfig)
        : undefined,
      creationTime: isSet(object.creationTime)
        ? fromJsonTimestamp(object.creationTime)
        : undefined,
    };
  },
  toJSON(message: ChainLink): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    message.address !== undefined &&
      (obj.address = message.address ? Any.toJSON(message.address) : undefined);
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    message.chainConfig !== undefined &&
      (obj.chainConfig = message.chainConfig
        ? ChainConfig.toJSON(message.chainConfig)
        : undefined);
    message.creationTime !== undefined &&
      (obj.creationTime = fromTimestamp(message.creationTime).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ChainLink>, I>>(
    object: I,
  ): ChainLink {
    const message = createBaseChainLink();
    message.user = object.user ?? "";
    message.address =
      object.address !== undefined && object.address !== null
        ? Any.fromPartial(object.address)
        : undefined;
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? Proof.fromPartial(object.proof)
        : undefined;
    message.chainConfig =
      object.chainConfig !== undefined && object.chainConfig !== null
        ? ChainConfig.fromPartial(object.chainConfig)
        : undefined;
    message.creationTime =
      object.creationTime !== undefined && object.creationTime !== null
        ? Timestamp.fromPartial(object.creationTime)
        : undefined;
    return message;
  },
  fromAmino(object: ChainLinkAmino): ChainLink {
    return {
      user: object.user,
      address: object?.address ? Any.fromAmino(object.address) : undefined,
      proof: object?.proof ? Proof.fromAmino(object.proof) : undefined,
      chainConfig: object?.chain_config
        ? ChainConfig.fromAmino(object.chain_config)
        : undefined,
      creationTime: object?.creation_time
        ? Timestamp.fromAmino(object.creation_time)
        : undefined,
    };
  },
  toAmino(message: ChainLink): ChainLinkAmino {
    const obj: any = {};
    obj.user = message.user;
    obj.address = message.address ? Any.toAmino(message.address) : undefined;
    obj.proof = message.proof ? Proof.toAmino(message.proof) : undefined;
    obj.chain_config = message.chainConfig
      ? ChainConfig.toAmino(message.chainConfig)
      : undefined;
    obj.creation_time = message.creationTime
      ? Timestamp.toAmino(message.creationTime)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: ChainLinkAminoMsg): ChainLink {
    return ChainLink.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainLinkProtoMsg): ChainLink {
    return ChainLink.decode(message.value);
  },
  toProto(message: ChainLink): Uint8Array {
    return ChainLink.encode(message).finish();
  },
  toProtoMsg(message: ChainLink): ChainLinkProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.ChainLink",
      value: ChainLink.encode(message).finish(),
    };
  },
};
function createBaseChainConfig(): ChainConfig {
  return {
    name: "",
  };
}
export const ChainConfig = {
  encode(
    message: ChainConfig,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ChainConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChainConfig {
    return {
      name: isSet(object.name) ? String(object.name) : "",
    };
  },
  toJSON(message: ChainConfig): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ChainConfig>, I>>(
    object: I,
  ): ChainConfig {
    const message = createBaseChainConfig();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: ChainConfigAmino): ChainConfig {
    return {
      name: object.name,
    };
  },
  toAmino(message: ChainConfig): ChainConfigAmino {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAminoMsg(object: ChainConfigAminoMsg): ChainConfig {
    return ChainConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainConfigProtoMsg): ChainConfig {
    return ChainConfig.decode(message.value);
  },
  toProto(message: ChainConfig): Uint8Array {
    return ChainConfig.encode(message).finish();
  },
  toProtoMsg(message: ChainConfig): ChainConfigProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.ChainConfig",
      value: ChainConfig.encode(message).finish(),
    };
  },
};
function createBaseProof(): Proof {
  return {
    pubKey: undefined,
    signature: undefined,
    plainText: "",
  };
}
export const Proof = {
  encode(message: Proof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.signature !== undefined) {
      Any.encode(message.signature, writer.uint32(18).fork()).ldelim();
    }
    if (message.plainText !== "") {
      writer.uint32(26).string(message.plainText);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.signature = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.plainText = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Proof {
    return {
      pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : undefined,
      signature: isSet(object.signature)
        ? Any.fromJSON(object.signature)
        : undefined,
      plainText: isSet(object.plainText) ? String(object.plainText) : "",
    };
  },
  toJSON(message: Proof): unknown {
    const obj: any = {};
    message.pubKey !== undefined &&
      (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.signature !== undefined &&
      (obj.signature = message.signature
        ? Any.toJSON(message.signature)
        : undefined);
    message.plainText !== undefined && (obj.plainText = message.plainText);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Proof>, I>>(object: I): Proof {
    const message = createBaseProof();
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? Any.fromPartial(object.pubKey)
        : undefined;
    message.signature =
      object.signature !== undefined && object.signature !== null
        ? Any.fromPartial(object.signature)
        : undefined;
    message.plainText = object.plainText ?? "";
    return message;
  },
  fromAmino(object: ProofAmino): Proof {
    return {
      pubKey: object?.pub_key ? Any.fromAmino(object.pub_key) : undefined,
      signature: object?.signature
        ? Any.fromAmino(object.signature)
        : undefined,
      plainText: object.plain_text,
    };
  },
  toAmino(message: Proof): ProofAmino {
    const obj: any = {};
    obj.pub_key = message.pubKey ? Any.toAmino(message.pubKey) : undefined;
    obj.signature = message.signature
      ? Any.toAmino(message.signature)
      : undefined;
    obj.plain_text = message.plainText;
    return obj;
  },
  fromAminoMsg(object: ProofAminoMsg): Proof {
    return Proof.fromAmino(object.value);
  },
  fromProtoMsg(message: ProofProtoMsg): Proof {
    return Proof.decode(message.value);
  },
  toProto(message: Proof): Uint8Array {
    return Proof.encode(message).finish();
  },
  toProtoMsg(message: Proof): ProofProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.Proof",
      value: Proof.encode(message).finish(),
    };
  },
};
function createBaseBech32Address(): Bech32Address {
  return {
    value: "",
    prefix: "",
  };
}
export const Bech32Address = {
  encode(
    message: Bech32Address,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    if (message.prefix !== "") {
      writer.uint32(18).string(message.prefix);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Bech32Address {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBech32Address();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        case 2:
          message.prefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Bech32Address {
    return {
      value: isSet(object.value) ? String(object.value) : "",
      prefix: isSet(object.prefix) ? String(object.prefix) : "",
    };
  },
  toJSON(message: Bech32Address): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Bech32Address>, I>>(
    object: I,
  ): Bech32Address {
    const message = createBaseBech32Address();
    message.value = object.value ?? "";
    message.prefix = object.prefix ?? "";
    return message;
  },
  fromAmino(object: Bech32AddressAmino): Bech32Address {
    return {
      value: object.value,
      prefix: object.prefix,
    };
  },
  toAmino(message: Bech32Address): Bech32AddressAmino {
    const obj: any = {};
    obj.value = message.value;
    obj.prefix = message.prefix;
    return obj;
  },
  fromAminoMsg(object: Bech32AddressAminoMsg): Bech32Address {
    return Bech32Address.fromAmino(object.value);
  },
  fromProtoMsg(message: Bech32AddressProtoMsg): Bech32Address {
    return Bech32Address.decode(message.value);
  },
  toProto(message: Bech32Address): Uint8Array {
    return Bech32Address.encode(message).finish();
  },
  toProtoMsg(message: Bech32Address): Bech32AddressProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.Bech32Address",
      value: Bech32Address.encode(message).finish(),
    };
  },
};
function createBaseBase58Address(): Base58Address {
  return {
    value: "",
  };
}
export const Base58Address = {
  encode(
    message: Base58Address,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Base58Address {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBase58Address();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Base58Address {
    return {
      value: isSet(object.value) ? String(object.value) : "",
    };
  },
  toJSON(message: Base58Address): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Base58Address>, I>>(
    object: I,
  ): Base58Address {
    const message = createBaseBase58Address();
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: Base58AddressAmino): Base58Address {
    return {
      value: object.value,
    };
  },
  toAmino(message: Base58Address): Base58AddressAmino {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: Base58AddressAminoMsg): Base58Address {
    return Base58Address.fromAmino(object.value);
  },
  fromProtoMsg(message: Base58AddressProtoMsg): Base58Address {
    return Base58Address.decode(message.value);
  },
  toProto(message: Base58Address): Uint8Array {
    return Base58Address.encode(message).finish();
  },
  toProtoMsg(message: Base58Address): Base58AddressProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.Base58Address",
      value: Base58Address.encode(message).finish(),
    };
  },
};
function createBaseHexAddress(): HexAddress {
  return {
    value: "",
    prefix: "",
  };
}
export const HexAddress = {
  encode(
    message: HexAddress,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    if (message.prefix !== "") {
      writer.uint32(18).string(message.prefix);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): HexAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHexAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        case 2:
          message.prefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HexAddress {
    return {
      value: isSet(object.value) ? String(object.value) : "",
      prefix: isSet(object.prefix) ? String(object.prefix) : "",
    };
  },
  toJSON(message: HexAddress): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<HexAddress>, I>>(
    object: I,
  ): HexAddress {
    const message = createBaseHexAddress();
    message.value = object.value ?? "";
    message.prefix = object.prefix ?? "";
    return message;
  },
  fromAmino(object: HexAddressAmino): HexAddress {
    return {
      value: object.value,
      prefix: object.prefix,
    };
  },
  toAmino(message: HexAddress): HexAddressAmino {
    const obj: any = {};
    obj.value = message.value;
    obj.prefix = message.prefix;
    return obj;
  },
  fromAminoMsg(object: HexAddressAminoMsg): HexAddress {
    return HexAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: HexAddressProtoMsg): HexAddress {
    return HexAddress.decode(message.value);
  },
  toProto(message: HexAddress): Uint8Array {
    return HexAddress.encode(message).finish();
  },
  toProtoMsg(message: HexAddress): HexAddressProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.HexAddress",
      value: HexAddress.encode(message).finish(),
    };
  },
};
function createBaseSingleSignature(): SingleSignature {
  return {
    valueType: 0,
    signature: new Uint8Array(),
  };
}
export const SingleSignature = {
  encode(
    message: SingleSignature,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.valueType !== 0) {
      writer.uint32(8).int32(message.valueType);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SingleSignature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSingleSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valueType = reader.int32() as any;
          break;
        case 2:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SingleSignature {
    return {
      valueType: isSet(object.valueType)
        ? signatureValueTypeFromJSON(object.valueType)
        : 0,
      signature: isSet(object.signature)
        ? bytesFromBase64(object.signature)
        : new Uint8Array(),
    };
  },
  toJSON(message: SingleSignature): unknown {
    const obj: any = {};
    message.valueType !== undefined &&
      (obj.valueType = signatureValueTypeToJSON(message.valueType));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SingleSignature>, I>>(
    object: I,
  ): SingleSignature {
    const message = createBaseSingleSignature();
    message.valueType = object.valueType ?? 0;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SingleSignatureAmino): SingleSignature {
    return {
      valueType: isSet(object.value_type)
        ? signatureValueTypeFromJSON(object.value_type)
        : 0,
      signature: object.signature,
    };
  },
  toAmino(message: SingleSignature): SingleSignatureAmino {
    const obj: any = {};
    obj.value_type = message.valueType;
    obj.signature = message.signature;
    return obj;
  },
  fromAminoMsg(object: SingleSignatureAminoMsg): SingleSignature {
    return SingleSignature.fromAmino(object.value);
  },
  fromProtoMsg(message: SingleSignatureProtoMsg): SingleSignature {
    return SingleSignature.decode(message.value);
  },
  toProto(message: SingleSignature): Uint8Array {
    return SingleSignature.encode(message).finish();
  },
  toProtoMsg(message: SingleSignature): SingleSignatureProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.SingleSignature",
      value: SingleSignature.encode(message).finish(),
    };
  },
};
function createBaseCosmosMultiSignature(): CosmosMultiSignature {
  return {
    bitArray: undefined,
    signatures: [],
  };
}
export const CosmosMultiSignature = {
  encode(
    message: CosmosMultiSignature,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bitArray !== undefined) {
      CompactBitArray.encode(
        message.bitArray,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    for (const v of message.signatures) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CosmosMultiSignature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCosmosMultiSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitArray = CompactBitArray.decode(reader, reader.uint32());
          break;
        case 2:
          message.signatures.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CosmosMultiSignature {
    return {
      bitArray: isSet(object.bitArray)
        ? CompactBitArray.fromJSON(object.bitArray)
        : undefined,
      signatures: Array.isArray(object?.signatures)
        ? object.signatures.map((e: any) => Any.fromJSON(e))
        : [],
    };
  },
  toJSON(message: CosmosMultiSignature): unknown {
    const obj: any = {};
    message.bitArray !== undefined &&
      (obj.bitArray = message.bitArray
        ? CompactBitArray.toJSON(message.bitArray)
        : undefined);
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) =>
        e ? Any.toJSON(e) : undefined,
      );
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CosmosMultiSignature>, I>>(
    object: I,
  ): CosmosMultiSignature {
    const message = createBaseCosmosMultiSignature();
    message.bitArray =
      object.bitArray !== undefined && object.bitArray !== null
        ? CompactBitArray.fromPartial(object.bitArray)
        : undefined;
    message.signatures =
      object.signatures?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CosmosMultiSignatureAmino): CosmosMultiSignature {
    return {
      bitArray: object?.bit_array
        ? CompactBitArray.fromAmino(object.bit_array)
        : undefined,
      signatures: Array.isArray(object?.signatures)
        ? object.signatures.map((e: any) => Any.fromAmino(e))
        : [],
    };
  },
  toAmino(message: CosmosMultiSignature): CosmosMultiSignatureAmino {
    const obj: any = {};
    obj.bit_array = message.bitArray
      ? CompactBitArray.toAmino(message.bitArray)
      : undefined;
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) =>
        e ? Any.toAmino(e) : undefined,
      );
    } else {
      obj.signatures = [];
    }
    return obj;
  },
  fromAminoMsg(object: CosmosMultiSignatureAminoMsg): CosmosMultiSignature {
    return CosmosMultiSignature.fromAmino(object.value);
  },
  fromProtoMsg(message: CosmosMultiSignatureProtoMsg): CosmosMultiSignature {
    return CosmosMultiSignature.decode(message.value);
  },
  toProto(message: CosmosMultiSignature): Uint8Array {
    return CosmosMultiSignature.encode(message).finish();
  },
  toProtoMsg(message: CosmosMultiSignature): CosmosMultiSignatureProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.CosmosMultiSignature",
      value: CosmosMultiSignature.encode(message).finish(),
    };
  },
};
