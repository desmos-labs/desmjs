/* eslint-disable */
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.subspaces.v3";
/**
 * MsgGrantAllowance adds grants for the grantee to spend up allowance of fees
 * from the treasury inside the given subspace
 */
export interface MsgGrantAllowance {
  /** Id of the subspace inside which where the allowance should be granted */
  subspaceId: Long;
  /** Address of the user granting the allowance */
  granter: string;
  /** Target being granted the allowance */
  grantee?: Any;
  /** Allowance can be any allowance type that implements AllowanceI */
  allowance?: Any;
}
export interface MsgGrantAllowanceProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgGrantAllowance";
  value: Uint8Array;
}
/**
 * MsgGrantAllowance adds grants for the grantee to spend up allowance of fees
 * from the treasury inside the given subspace
 */
export interface MsgGrantAllowanceAmino {
  /** Id of the subspace inside which where the allowance should be granted */
  subspace_id: string;
  /** Address of the user granting the allowance */
  granter: string;
  /** Target being granted the allowance */
  grantee?: AnyAmino;
  /** Allowance can be any allowance type that implements AllowanceI */
  allowance?: AnyAmino;
}
export interface MsgGrantAllowanceAminoMsg {
  type: "/desmos.subspaces.v3.MsgGrantAllowance";
  value: MsgGrantAllowanceAmino;
}
/**
 * MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response
 * type.
 */
export interface MsgGrantAllowanceResponse {}
export interface MsgGrantAllowanceResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgGrantAllowanceResponse";
  value: Uint8Array;
}
/**
 * MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response
 * type.
 */
export interface MsgGrantAllowanceResponseAmino {}
export interface MsgGrantAllowanceResponseAminoMsg {
  type: "/desmos.subspaces.v3.MsgGrantAllowanceResponse";
  value: MsgGrantAllowanceResponseAmino;
}
/**
 * MsgRevokeAllowance removes any existing allowance to the grantee inside the
 * subspace
 */
export interface MsgRevokeAllowance {
  /** If of the subspace inside which the allowance to be deleted is */
  subspaceId: Long;
  /** Address of the user that created the allowance */
  granter: string;
  /** Target being revoked the allowance */
  grantee?: Any;
}
export interface MsgRevokeAllowanceProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgRevokeAllowance";
  value: Uint8Array;
}
/**
 * MsgRevokeAllowance removes any existing allowance to the grantee inside the
 * subspace
 */
export interface MsgRevokeAllowanceAmino {
  /** If of the subspace inside which the allowance to be deleted is */
  subspace_id: string;
  /** Address of the user that created the allowance */
  granter: string;
  /** Target being revoked the allowance */
  grantee?: AnyAmino;
}
export interface MsgRevokeAllowanceAminoMsg {
  type: "/desmos.subspaces.v3.MsgRevokeAllowance";
  value: MsgRevokeAllowanceAmino;
}
/**
 * MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse
 * response type.
 */
export interface MsgRevokeAllowanceResponse {}
export interface MsgRevokeAllowanceResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgRevokeAllowanceResponse";
  value: Uint8Array;
}
/**
 * MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse
 * response type.
 */
export interface MsgRevokeAllowanceResponseAmino {}
export interface MsgRevokeAllowanceResponseAminoMsg {
  type: "/desmos.subspaces.v3.MsgRevokeAllowanceResponse";
  value: MsgRevokeAllowanceResponseAmino;
}
function createBaseMsgGrantAllowance(): MsgGrantAllowance {
  return {
    subspaceId: Long.UZERO,
    granter: "",
    grantee: undefined,
    allowance: undefined,
  };
}
export const MsgGrantAllowance = {
  encode(
    message: MsgGrantAllowance,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.granter !== "") {
      writer.uint32(18).string(message.granter);
    }
    if (message.grantee !== undefined) {
      Any.encode(message.grantee, writer.uint32(26).fork()).ldelim();
    }
    if (message.allowance !== undefined) {
      Any.encode(message.allowance, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantAllowance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.granter = reader.string();
          break;
        case 3:
          message.grantee = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.allowance = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgGrantAllowance {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? Any.fromJSON(object.grantee) : undefined,
      allowance: isSet(object.allowance)
        ? Any.fromJSON(object.allowance)
        : undefined,
    };
  },
  toJSON(message: MsgGrantAllowance): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined &&
      (obj.grantee = message.grantee ? Any.toJSON(message.grantee) : undefined);
    message.allowance !== undefined &&
      (obj.allowance = message.allowance
        ? Any.toJSON(message.allowance)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgGrantAllowance>, I>>(
    object: I,
  ): MsgGrantAllowance {
    const message = createBaseMsgGrantAllowance();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.granter = object.granter ?? "";
    message.grantee =
      object.grantee !== undefined && object.grantee !== null
        ? Any.fromPartial(object.grantee)
        : undefined;
    message.allowance =
      object.allowance !== undefined && object.allowance !== null
        ? Any.fromPartial(object.allowance)
        : undefined;
    return message;
  },
  fromAmino(object: MsgGrantAllowanceAmino): MsgGrantAllowance {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      granter: object.granter,
      grantee: object?.grantee ? Any.fromAmino(object.grantee) : undefined,
      allowance: object?.allowance
        ? Any.fromAmino(object.allowance)
        : undefined,
    };
  },
  toAmino(message: MsgGrantAllowance): MsgGrantAllowanceAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.granter = message.granter;
    obj.grantee = message.grantee ? Any.toAmino(message.grantee) : undefined;
    obj.allowance = message.allowance
      ? Any.toAmino(message.allowance)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgGrantAllowanceAminoMsg): MsgGrantAllowance {
    return MsgGrantAllowance.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGrantAllowanceProtoMsg): MsgGrantAllowance {
    return MsgGrantAllowance.decode(message.value);
  },
  toProto(message: MsgGrantAllowance): Uint8Array {
    return MsgGrantAllowance.encode(message).finish();
  },
  toProtoMsg(message: MsgGrantAllowance): MsgGrantAllowanceProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgGrantAllowance",
      value: MsgGrantAllowance.encode(message).finish(),
    };
  },
};
function createBaseMsgGrantAllowanceResponse(): MsgGrantAllowanceResponse {
  return {};
}
export const MsgGrantAllowanceResponse = {
  encode(
    _: MsgGrantAllowanceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgGrantAllowanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowanceResponse();
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
  fromJSON(_: any): MsgGrantAllowanceResponse {
    return {};
  },
  toJSON(_: MsgGrantAllowanceResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgGrantAllowanceResponse>, I>>(
    _: I,
  ): MsgGrantAllowanceResponse {
    const message = createBaseMsgGrantAllowanceResponse();
    return message;
  },
  fromAmino(_: MsgGrantAllowanceResponseAmino): MsgGrantAllowanceResponse {
    return {};
  },
  toAmino(_: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgGrantAllowanceResponseAminoMsg,
  ): MsgGrantAllowanceResponse {
    return MsgGrantAllowanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgGrantAllowanceResponseProtoMsg,
  ): MsgGrantAllowanceResponse {
    return MsgGrantAllowanceResponse.decode(message.value);
  },
  toProto(message: MsgGrantAllowanceResponse): Uint8Array {
    return MsgGrantAllowanceResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgGrantAllowanceResponse,
  ): MsgGrantAllowanceResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgGrantAllowanceResponse",
      value: MsgGrantAllowanceResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgRevokeAllowance(): MsgRevokeAllowance {
  return {
    subspaceId: Long.UZERO,
    granter: "",
    grantee: undefined,
  };
}
export const MsgRevokeAllowance = {
  encode(
    message: MsgRevokeAllowance,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.granter !== "") {
      writer.uint32(18).string(message.granter);
    }
    if (message.grantee !== undefined) {
      Any.encode(message.grantee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAllowance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.granter = reader.string();
          break;
        case 3:
          message.grantee = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRevokeAllowance {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? Any.fromJSON(object.grantee) : undefined,
    };
  },
  toJSON(message: MsgRevokeAllowance): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined &&
      (obj.grantee = message.grantee ? Any.toJSON(message.grantee) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRevokeAllowance>, I>>(
    object: I,
  ): MsgRevokeAllowance {
    const message = createBaseMsgRevokeAllowance();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.granter = object.granter ?? "";
    message.grantee =
      object.grantee !== undefined && object.grantee !== null
        ? Any.fromPartial(object.grantee)
        : undefined;
    return message;
  },
  fromAmino(object: MsgRevokeAllowanceAmino): MsgRevokeAllowance {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      granter: object.granter,
      grantee: object?.grantee ? Any.fromAmino(object.grantee) : undefined,
    };
  },
  toAmino(message: MsgRevokeAllowance): MsgRevokeAllowanceAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.granter = message.granter;
    obj.grantee = message.grantee ? Any.toAmino(message.grantee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeAllowanceAminoMsg): MsgRevokeAllowance {
    return MsgRevokeAllowance.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeAllowanceProtoMsg): MsgRevokeAllowance {
    return MsgRevokeAllowance.decode(message.value);
  },
  toProto(message: MsgRevokeAllowance): Uint8Array {
    return MsgRevokeAllowance.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeAllowance): MsgRevokeAllowanceProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgRevokeAllowance",
      value: MsgRevokeAllowance.encode(message).finish(),
    };
  },
};
function createBaseMsgRevokeAllowanceResponse(): MsgRevokeAllowanceResponse {
  return {};
}
export const MsgRevokeAllowanceResponse = {
  encode(
    _: MsgRevokeAllowanceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgRevokeAllowanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowanceResponse();
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
  fromJSON(_: any): MsgRevokeAllowanceResponse {
    return {};
  },
  toJSON(_: MsgRevokeAllowanceResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRevokeAllowanceResponse>, I>>(
    _: I,
  ): MsgRevokeAllowanceResponse {
    const message = createBaseMsgRevokeAllowanceResponse();
    return message;
  },
  fromAmino(_: MsgRevokeAllowanceResponseAmino): MsgRevokeAllowanceResponse {
    return {};
  },
  toAmino(_: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgRevokeAllowanceResponseAminoMsg,
  ): MsgRevokeAllowanceResponse {
    return MsgRevokeAllowanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgRevokeAllowanceResponseProtoMsg,
  ): MsgRevokeAllowanceResponse {
    return MsgRevokeAllowanceResponse.decode(message.value);
  },
  toProto(message: MsgRevokeAllowanceResponse): Uint8Array {
    return MsgRevokeAllowanceResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgRevokeAllowanceResponse,
  ): MsgRevokeAllowanceResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgRevokeAllowanceResponse",
      value: MsgRevokeAllowanceResponse.encode(message).finish(),
    };
  },
};
