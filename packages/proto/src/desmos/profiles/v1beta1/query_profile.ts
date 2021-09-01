/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";

export const protobufPackage = "desmos.profiles.v1beta1";

/** QueryProfileRequest is the request type for the Query/Profile RPC method. */
export interface QueryProfileRequest {
  /** Address or DTag of the user to query the profile for */
  user: string;
}

/** QueryProfileResponse is the response type for the Query/Profile RPC method. */
export interface QueryProfileResponse {
  profile?: Any;
}

const baseQueryProfileRequest: object = { user: "" };

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
    const message = { ...baseQueryProfileRequest } as QueryProfileRequest;
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
    const message = { ...baseQueryProfileRequest } as QueryProfileRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user);
    } else {
      message.user = "";
    }
    return message;
  },

  toJSON(message: QueryProfileRequest): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryProfileRequest>): QueryProfileRequest {
    const message = { ...baseQueryProfileRequest } as QueryProfileRequest;
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    } else {
      message.user = "";
    }
    return message;
  },
};

const baseQueryProfileResponse: object = {};

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
    const message = { ...baseQueryProfileResponse } as QueryProfileResponse;
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
    const message = { ...baseQueryProfileResponse } as QueryProfileResponse;
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Any.fromJSON(object.profile);
    } else {
      message.profile = undefined;
    }
    return message;
  },

  toJSON(message: QueryProfileResponse): unknown {
    const obj: any = {};
    message.profile !== undefined &&
      (obj.profile = message.profile ? Any.toJSON(message.profile) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryProfileResponse>): QueryProfileResponse {
    const message = { ...baseQueryProfileResponse } as QueryProfileResponse;
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Any.fromPartial(object.profile);
    } else {
      message.profile = undefined;
    }
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
