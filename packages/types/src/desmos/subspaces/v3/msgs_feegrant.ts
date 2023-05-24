/* eslint-disable */
import { Any } from "../../../google/protobuf/any";
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
/**
 * MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response
 * type.
 */
export interface MsgGrantAllowanceResponse {}
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
/**
 * MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse
 * response type.
 */
export interface MsgRevokeAllowanceResponse {}
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
    writer: _m0.Writer = _m0.Writer.create()
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
    object: I
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
};
function createBaseMsgGrantAllowanceResponse(): MsgGrantAllowanceResponse {
  return {};
}
export const MsgGrantAllowanceResponse = {
  encode(
    _: MsgGrantAllowanceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
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
    _: I
  ): MsgGrantAllowanceResponse {
    const message = createBaseMsgGrantAllowanceResponse();
    return message;
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
    writer: _m0.Writer = _m0.Writer.create()
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
    object: I
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
};
function createBaseMsgRevokeAllowanceResponse(): MsgRevokeAllowanceResponse {
  return {};
}
export const MsgRevokeAllowanceResponse = {
  encode(
    _: MsgRevokeAllowanceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
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
    _: I
  ): MsgRevokeAllowanceResponse {
    const message = createBaseMsgRevokeAllowanceResponse();
    return message;
  },
};
