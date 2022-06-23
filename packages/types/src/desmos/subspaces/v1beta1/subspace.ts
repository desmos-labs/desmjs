/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

/** SubspaceType contains all the possible subspace types */
export enum SubspaceType {
  /**
   * SUBSPACE_TYPE_UNSPECIFIED - SubspaceTypeUnspecified identifies an unspecified type of subspace (used in
   * errors)
   */
  SUBSPACE_TYPE_UNSPECIFIED = 0,
  /**
   * SUBSPACE_TYPE_OPEN - SubspaceTypeOpen identifies that users can interact inside the subspace
   * without the need to being registered in it
   */
  SUBSPACE_TYPE_OPEN = 1,
  /**
   * SUBSPACE_TYPE_CLOSED - SubspaceTypeClosed identifies that users can't interact inside the subspace
   * without being registered in it
   */
  SUBSPACE_TYPE_CLOSED = 2,
  UNRECOGNIZED = -1,
}

export function subspaceTypeFromJSON(object: any): SubspaceType {
  switch (object) {
    case 0:
    case "SUBSPACE_TYPE_UNSPECIFIED":
      return SubspaceType.SUBSPACE_TYPE_UNSPECIFIED;
    case 1:
    case "SUBSPACE_TYPE_OPEN":
      return SubspaceType.SUBSPACE_TYPE_OPEN;
    case 2:
    case "SUBSPACE_TYPE_CLOSED":
      return SubspaceType.SUBSPACE_TYPE_CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SubspaceType.UNRECOGNIZED;
  }
}

export function subspaceTypeToJSON(object: SubspaceType): string {
  switch (object) {
    case SubspaceType.SUBSPACE_TYPE_UNSPECIFIED:
      return "SUBSPACE_TYPE_UNSPECIFIED";
    case SubspaceType.SUBSPACE_TYPE_OPEN:
      return "SUBSPACE_TYPE_OPEN";
    case SubspaceType.SUBSPACE_TYPE_CLOSED:
      return "SUBSPACE_TYPE_CLOSED";
    default:
      return "UNKNOWN";
  }
}

/** Subspace contains all the data of a Desmos subspace */
export interface Subspace {
  /** unique SHA-256 string that identifies the subspace */
  id: string;
  /** human readable name of the subspace */
  name: string;
  /** the address of the user that owns the subspace */
  owner: string;
  /** the address of the subspace creator */
  creator: string;
  /** the creation time of the subspace */
  creationTime?: Date;
  /** the type of the subspace that indicates if it need registration or not */
  type: SubspaceType;
}

function createBaseSubspace(): Subspace {
  return {
    id: "",
    name: "",
    owner: "",
    creator: "",
    creationTime: undefined,
    type: 0,
  };
}

export const Subspace = {
  encode(
    message: Subspace,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    if (message.creationTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.creationTime),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(48).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subspace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubspace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.creator = reader.string();
          break;
        case 5:
          message.creationTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Subspace {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      creationTime: isSet(object.creationTime)
        ? fromJsonTimestamp(object.creationTime)
        : undefined,
      type: isSet(object.type) ? subspaceTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: Subspace): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.owner !== undefined && (obj.owner = message.owner);
    message.creator !== undefined && (obj.creator = message.creator);
    message.creationTime !== undefined &&
      (obj.creationTime = message.creationTime.toISOString());
    message.type !== undefined && (obj.type = subspaceTypeToJSON(message.type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Subspace>, I>>(object: I): Subspace {
    const message = createBaseSubspace();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.creator = object.creator ?? "";
    message.creationTime = object.creationTime ?? undefined;
    message.type = object.type ?? 0;
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
