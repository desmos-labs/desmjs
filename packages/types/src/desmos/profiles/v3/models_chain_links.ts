/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CompactBitArray } from "../../../cosmos/crypto/multisig/v1beta1/multisig";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";

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
  creationTime?: Date;
}

/** ChainConfig contains the data of the chain with which the link is made. */
export interface ChainConfig {
  name: string;
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

/** Bech32Address represents a Bech32-encoded address */
export interface Bech32Address {
  /** Value represents the Bech-32 encoded address value */
  value: string;
  /** Prefix represents the HRP of the Bech32 address */
  prefix: string;
}

/** Base58Address represents a Base58-encoded address */
export interface Base58Address {
  /** Value contains the Base58-encoded address */
  value: string;
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

/** SingleSignature is the signature data for a single signer */
export interface SingleSignature {
  /** Type represents the type of the signature value */
  valueType: SignatureValueType;
  /** Signature is the raw signature bytes */
  signature: Uint8Array;
}

/** CosmosMultiSignature is the signature data for a multisig public key */
export interface CosmosMultiSignature {
  /** Bitarray specifies which keys within the multisig are signing */
  bitArray?: CompactBitArray;
  /** Signatures is the signatures of the multi-signature */
  signatures: Any[];
}

function createBaseChainLink(): ChainLink {
  return { user: "", address: undefined, proof: undefined, chainConfig: undefined, creationTime: undefined };
}

export const ChainLink = {
  encode(message: ChainLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      ChainConfig.encode(message.chainConfig, writer.uint32(34).fork()).ldelim();
    }
    if (message.creationTime !== undefined) {
      Timestamp.encode(toTimestamp(message.creationTime), writer.uint32(42).fork()).ldelim();
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
          message.creationTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      chainConfig: isSet(object.chainConfig) ? ChainConfig.fromJSON(object.chainConfig) : undefined,
      creationTime: isSet(object.creationTime) ? fromJsonTimestamp(object.creationTime) : undefined,
    };
  },

  toJSON(message: ChainLink): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    message.address !== undefined && (obj.address = message.address ? Any.toJSON(message.address) : undefined);
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    message.chainConfig !== undefined &&
      (obj.chainConfig = message.chainConfig ? ChainConfig.toJSON(message.chainConfig) : undefined);
    message.creationTime !== undefined && (obj.creationTime = message.creationTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChainLink>, I>>(object: I): ChainLink {
    const message = createBaseChainLink();
    message.user = object.user ?? "";
    message.address = (object.address !== undefined && object.address !== null)
      ? Any.fromPartial(object.address)
      : undefined;
    message.proof = (object.proof !== undefined && object.proof !== null) ? Proof.fromPartial(object.proof) : undefined;
    message.chainConfig = (object.chainConfig !== undefined && object.chainConfig !== null)
      ? ChainConfig.fromPartial(object.chainConfig)
      : undefined;
    message.creationTime = object.creationTime ?? undefined;
    return message;
  },
};

function createBaseChainConfig(): ChainConfig {
  return { name: "" };
}

export const ChainConfig = {
  encode(message: ChainConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: ChainConfig): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChainConfig>, I>>(object: I): ChainConfig {
    const message = createBaseChainConfig();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseProof(): Proof {
  return { pubKey: undefined, signature: undefined, plainText: "" };
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
      signature: isSet(object.signature) ? Any.fromJSON(object.signature) : undefined,
      plainText: isSet(object.plainText) ? String(object.plainText) : "",
    };
  },

  toJSON(message: Proof): unknown {
    const obj: any = {};
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.signature !== undefined && (obj.signature = message.signature ? Any.toJSON(message.signature) : undefined);
    message.plainText !== undefined && (obj.plainText = message.plainText);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proof>, I>>(object: I): Proof {
    const message = createBaseProof();
    message.pubKey = (object.pubKey !== undefined && object.pubKey !== null)
      ? Any.fromPartial(object.pubKey)
      : undefined;
    message.signature = (object.signature !== undefined && object.signature !== null)
      ? Any.fromPartial(object.signature)
      : undefined;
    message.plainText = object.plainText ?? "";
    return message;
  },
};

function createBaseBech32Address(): Bech32Address {
  return { value: "", prefix: "" };
}

export const Bech32Address = {
  encode(message: Bech32Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  fromPartial<I extends Exact<DeepPartial<Bech32Address>, I>>(object: I): Bech32Address {
    const message = createBaseBech32Address();
    message.value = object.value ?? "";
    message.prefix = object.prefix ?? "";
    return message;
  },
};

function createBaseBase58Address(): Base58Address {
  return { value: "" };
}

export const Base58Address = {
  encode(message: Base58Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return { value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: Base58Address): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Base58Address>, I>>(object: I): Base58Address {
    const message = createBaseBase58Address();
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseHexAddress(): HexAddress {
  return { value: "", prefix: "" };
}

export const HexAddress = {
  encode(message: HexAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  fromPartial<I extends Exact<DeepPartial<HexAddress>, I>>(object: I): HexAddress {
    const message = createBaseHexAddress();
    message.value = object.value ?? "";
    message.prefix = object.prefix ?? "";
    return message;
  },
};

function createBaseSingleSignature(): SingleSignature {
  return { valueType: 0, signature: new Uint8Array() };
}

export const SingleSignature = {
  encode(message: SingleSignature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      valueType: isSet(object.valueType) ? signatureValueTypeFromJSON(object.valueType) : 0,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
    };
  },

  toJSON(message: SingleSignature): unknown {
    const obj: any = {};
    message.valueType !== undefined && (obj.valueType = signatureValueTypeToJSON(message.valueType));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SingleSignature>, I>>(object: I): SingleSignature {
    const message = createBaseSingleSignature();
    message.valueType = object.valueType ?? 0;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

function createBaseCosmosMultiSignature(): CosmosMultiSignature {
  return { bitArray: undefined, signatures: [] };
}

export const CosmosMultiSignature = {
  encode(message: CosmosMultiSignature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bitArray !== undefined) {
      CompactBitArray.encode(message.bitArray, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.signatures) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CosmosMultiSignature {
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
      bitArray: isSet(object.bitArray) ? CompactBitArray.fromJSON(object.bitArray) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => Any.fromJSON(e)) : [],
    };
  },

  toJSON(message: CosmosMultiSignature): unknown {
    const obj: any = {};
    message.bitArray !== undefined &&
      (obj.bitArray = message.bitArray ? CompactBitArray.toJSON(message.bitArray) : undefined);
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => e ? Any.toJSON(e) : undefined);
    } else {
      obj.signatures = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CosmosMultiSignature>, I>>(object: I): CosmosMultiSignature {
    const message = createBaseCosmosMultiSignature();
    message.bitArray = (object.bitArray !== undefined && object.bitArray !== null)
      ? CompactBitArray.fromPartial(object.bitArray)
      : undefined;
    message.signatures = object.signatures?.map((e) => Any.fromPartial(e)) || [];
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
