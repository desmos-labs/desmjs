/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";

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
  signature: string;
  /** PlainText represents the hex-encoded value signed in order to produce the Signature */
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
    writer: _m0.Writer = _m0.Writer.create()
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
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.creationTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.creationTime),
        writer.uint32(42).fork()
      ).ldelim();
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
          message.creationTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
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
      (obj.creationTime = message.creationTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChainLink>, I>>(
    object: I
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
    message.creationTime = object.creationTime ?? undefined;
    return message;
  },
};

function createBaseChainConfig(): ChainConfig {
  return { name: "" };
}

export const ChainConfig = {
  encode(
    message: ChainConfig,
    writer: _m0.Writer = _m0.Writer.create()
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
    object: I
  ): ChainConfig {
    const message = createBaseChainConfig();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseProof(): Proof {
  return { pubKey: undefined, signature: "", plainText: "" };
}

export const Proof = {
  encode(message: Proof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.signature !== "") {
      writer.uint32(18).string(message.signature);
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
          message.signature = reader.string();
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
      signature: isSet(object.signature) ? String(object.signature) : "",
      plainText: isSet(object.plainText) ? String(object.plainText) : "",
    };
  },

  toJSON(message: Proof): unknown {
    const obj: any = {};
    message.pubKey !== undefined &&
      (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.signature !== undefined && (obj.signature = message.signature);
    message.plainText !== undefined && (obj.plainText = message.plainText);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proof>, I>>(object: I): Proof {
    const message = createBaseProof();
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? Any.fromPartial(object.pubKey)
        : undefined;
    message.signature = object.signature ?? "";
    message.plainText = object.plainText ?? "";
    return message;
  },
};

function createBaseBech32Address(): Bech32Address {
  return { value: "", prefix: "" };
}

export const Bech32Address = {
  encode(
    message: Bech32Address,
    writer: _m0.Writer = _m0.Writer.create()
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
    object: I
  ): Bech32Address {
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
  encode(
    message: Base58Address,
    writer: _m0.Writer = _m0.Writer.create()
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
    object: I
  ): Base58Address {
    const message = createBaseBase58Address();
    message.value = object.value ?? "";
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
