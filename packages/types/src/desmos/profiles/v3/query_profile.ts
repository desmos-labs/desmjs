/* eslint-disable */
import { Any, AnyAmino } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "desmos.profiles.v3";
/** QueryProfileRequest is the request type for the Query/Profile RPC method. */
export interface QueryProfileRequest {
  /** Address or DTag of the user to query the profile for */
  user: string;
}
export interface QueryProfileRequestProtoMsg {
  typeUrl: "/desmos.profiles.v3.QueryProfileRequest";
  value: Uint8Array;
}
/** QueryProfileRequest is the request type for the Query/Profile RPC method. */
export interface QueryProfileRequestAmino {
  /** Address or DTag of the user to query the profile for */
  user: string;
}
export interface QueryProfileRequestAminoMsg {
  type: "/desmos.profiles.v3.QueryProfileRequest";
  value: QueryProfileRequestAmino;
}
/** QueryProfileResponse is the response type for the Query/Profile RPC method. */
export interface QueryProfileResponse {
  profile?: Any;
}
export interface QueryProfileResponseProtoMsg {
  typeUrl: "/desmos.profiles.v3.QueryProfileResponse";
  value: Uint8Array;
}
/** QueryProfileResponse is the response type for the Query/Profile RPC method. */
export interface QueryProfileResponseAmino {
  profile?: AnyAmino;
}
export interface QueryProfileResponseAminoMsg {
  type: "/desmos.profiles.v3.QueryProfileResponse";
  value: QueryProfileResponseAmino;
}
function createBaseQueryProfileRequest(): QueryProfileRequest {
  return {
    user: "",
  };
}
export const QueryProfileRequest = {
  encode(
    message: QueryProfileRequest,
    writer: _m0.Writer = _m0.Writer.create(),
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
    object: I,
  ): QueryProfileRequest {
    const message = createBaseQueryProfileRequest();
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: QueryProfileRequestAmino): QueryProfileRequest {
    return {
      user: object.user,
    };
  },
  toAmino(message: QueryProfileRequest): QueryProfileRequestAmino {
    const obj: any = {};
    obj.user = message.user;
    return obj;
  },
  fromAminoMsg(object: QueryProfileRequestAminoMsg): QueryProfileRequest {
    return QueryProfileRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProfileRequestProtoMsg): QueryProfileRequest {
    return QueryProfileRequest.decode(message.value);
  },
  toProto(message: QueryProfileRequest): Uint8Array {
    return QueryProfileRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProfileRequest): QueryProfileRequestProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.QueryProfileRequest",
      value: QueryProfileRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryProfileResponse(): QueryProfileResponse {
  return {
    profile: undefined,
  };
}
export const QueryProfileResponse = {
  encode(
    message: QueryProfileResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.profile !== undefined) {
      Any.encode(message.profile, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
    object: I,
  ): QueryProfileResponse {
    const message = createBaseQueryProfileResponse();
    message.profile =
      object.profile !== undefined && object.profile !== null
        ? Any.fromPartial(object.profile)
        : undefined;
    return message;
  },
  fromAmino(object: QueryProfileResponseAmino): QueryProfileResponse {
    return {
      profile: object?.profile ? Any.fromAmino(object.profile) : undefined,
    };
  },
  toAmino(message: QueryProfileResponse): QueryProfileResponseAmino {
    const obj: any = {};
    obj.profile = message.profile ? Any.toAmino(message.profile) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProfileResponseAminoMsg): QueryProfileResponse {
    return QueryProfileResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProfileResponseProtoMsg): QueryProfileResponse {
    return QueryProfileResponse.decode(message.value);
  },
  toProto(message: QueryProfileResponse): Uint8Array {
    return QueryProfileResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProfileResponse): QueryProfileResponseProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.QueryProfileResponse",
      value: QueryProfileResponse.encode(message).finish(),
    };
  },
};
