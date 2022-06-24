/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";

/** QueryProfileRequest is the request type for the Query/Profile RPC method. */
export interface QueryProfileRequest {
  /** Address or DTag of the user to query the profile for */
  user: string;
}

/** QueryProfileResponse is the response type for the Query/Profile RPC method. */
export interface QueryProfileResponse {
  profile?: Any;
}

function createBaseQueryProfileRequest(): QueryProfileRequest {
  return { user: "" };
}

export const QueryProfileRequest = {
  encode(
    message: QueryProfileRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProfileRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProfileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProfileRequest {
    return {
      user: isSet(object.user) ? String(object.user) : "",
    };
  },

  toJSON(message: QueryProfileRequest): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProfileRequest>, I>>(
    object: I
  ): QueryProfileRequest {
    const message = createBaseQueryProfileRequest();
    message.user = object.user ?? "";
    return message;
  },
};

function createBaseQueryProfileResponse(): QueryProfileResponse {
  return { profile: undefined };
}

export const QueryProfileResponse = {
  encode(
    message: QueryProfileResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.profile !== undefined) {
      Any.encode(message.profile, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProfileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProfileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profile = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProfileResponse {
    return {
      profile: isSet(object.profile) ? Any.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: QueryProfileResponse): unknown {
    const obj: any = {};
    message.profile !== undefined &&
      (obj.profile = message.profile ? Any.toJSON(message.profile) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProfileResponse>, I>>(
    object: I
  ): QueryProfileResponse {
    const message = createBaseQueryProfileResponse();
    message.profile =
      object.profile !== undefined && object.profile !== null
        ? Any.fromPartial(object.profile)
        : undefined;
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
