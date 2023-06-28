/* eslint-disable */
import { Grant, GrantAmino } from "../../../cosmos/authz/v1beta1/authz";
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.subspaces.v3";
/**
 * MsgGrantTreasuryAuthorization grants an authorization on behalf of the
 * treasury to a user
 */
export interface MsgGrantTreasuryAuthorization {
  /** Id of the subspace where the authorization should be granted */
  subspaceId: Long;
  /** Address of the user granting a treasury authorization */
  granter: string;
  /** Address of the user who is being granted a treasury authorization */
  grantee: string;
  /** Grant represents the authorization to execute the provided methods */
  grant?: Grant;
}
export interface MsgGrantTreasuryAuthorizationProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgGrantTreasuryAuthorization";
  value: Uint8Array;
}
/**
 * MsgGrantTreasuryAuthorization grants an authorization on behalf of the
 * treasury to a user
 */
export interface MsgGrantTreasuryAuthorizationAmino {
  /** Id of the subspace where the authorization should be granted */
  subspace_id: string;
  /** Address of the user granting a treasury authorization */
  granter: string;
  /** Address of the user who is being granted a treasury authorization */
  grantee: string;
  /** Grant represents the authorization to execute the provided methods */
  grant?: GrantAmino;
}
export interface MsgGrantTreasuryAuthorizationAminoMsg {
  type: "/desmos.subspaces.v3.MsgGrantTreasuryAuthorization";
  value: MsgGrantTreasuryAuthorizationAmino;
}
/**
 * MsgGrantTreasuryAuthorizationResponse defines the
 * Msg/MsgGrantTreasuryAuthorization response type
 */
export interface MsgGrantTreasuryAuthorizationResponse {}
export interface MsgGrantTreasuryAuthorizationResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgGrantTreasuryAuthorizationResponse";
  value: Uint8Array;
}
/**
 * MsgGrantTreasuryAuthorizationResponse defines the
 * Msg/MsgGrantTreasuryAuthorization response type
 */
export interface MsgGrantTreasuryAuthorizationResponseAmino {}
export interface MsgGrantTreasuryAuthorizationResponseAminoMsg {
  type: "/desmos.subspaces.v3.MsgGrantTreasuryAuthorizationResponse";
  value: MsgGrantTreasuryAuthorizationResponseAmino;
}
/**
 * MsgRevokeTreasuryAuthorization revokes an existing treasury authorization
 * from a user
 */
export interface MsgRevokeTreasuryAuthorization {
  /** Id of the subspace from which the authorization should be revoked */
  subspaceId: Long;
  /** Address of the user revoking the treasury authorization */
  granter: string;
  /** Address of the user who is being revoked the treasury authorization */
  grantee: string;
  /** Type url of the authorized message which is being revoked */
  msgTypeUrl: string;
}
export interface MsgRevokeTreasuryAuthorizationProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgRevokeTreasuryAuthorization";
  value: Uint8Array;
}
/**
 * MsgRevokeTreasuryAuthorization revokes an existing treasury authorization
 * from a user
 */
export interface MsgRevokeTreasuryAuthorizationAmino {
  /** Id of the subspace from which the authorization should be revoked */
  subspace_id: string;
  /** Address of the user revoking the treasury authorization */
  granter: string;
  /** Address of the user who is being revoked the treasury authorization */
  grantee: string;
  /** Type url of the authorized message which is being revoked */
  msg_type_url: string;
}
export interface MsgRevokeTreasuryAuthorizationAminoMsg {
  type: "/desmos.subspaces.v3.MsgRevokeTreasuryAuthorization";
  value: MsgRevokeTreasuryAuthorizationAmino;
}
/**
 * MsgRevokeTreasuryAuthorizationResponse defines the
 * Msg/MsgRevokeTreasuryAuthorization response type
 */
export interface MsgRevokeTreasuryAuthorizationResponse {}
export interface MsgRevokeTreasuryAuthorizationResponseProtoMsg {
  typeUrl: "/desmos.subspaces.v3.MsgRevokeTreasuryAuthorizationResponse";
  value: Uint8Array;
}
/**
 * MsgRevokeTreasuryAuthorizationResponse defines the
 * Msg/MsgRevokeTreasuryAuthorization response type
 */
export interface MsgRevokeTreasuryAuthorizationResponseAmino {}
export interface MsgRevokeTreasuryAuthorizationResponseAminoMsg {
  type: "/desmos.subspaces.v3.MsgRevokeTreasuryAuthorizationResponse";
  value: MsgRevokeTreasuryAuthorizationResponseAmino;
}
function createBaseMsgGrantTreasuryAuthorization(): MsgGrantTreasuryAuthorization {
  return {
    subspaceId: Long.UZERO,
    granter: "",
    grantee: "",
    grant: undefined,
  };
}
export const MsgGrantTreasuryAuthorization = {
  encode(
    message: MsgGrantTreasuryAuthorization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.granter !== "") {
      writer.uint32(18).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(26).string(message.grantee);
    }
    if (message.grant !== undefined) {
      Grant.encode(message.grant, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgGrantTreasuryAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantTreasuryAuthorization();
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
          message.grantee = reader.string();
          break;
        case 4:
          message.grant = Grant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgGrantTreasuryAuthorization {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      grant: isSet(object.grant) ? Grant.fromJSON(object.grant) : undefined,
    };
  },
  toJSON(message: MsgGrantTreasuryAuthorization): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.grant !== undefined &&
      (obj.grant = message.grant ? Grant.toJSON(message.grant) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgGrantTreasuryAuthorization>, I>>(
    object: I
  ): MsgGrantTreasuryAuthorization {
    const message = createBaseMsgGrantTreasuryAuthorization();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.grant =
      object.grant !== undefined && object.grant !== null
        ? Grant.fromPartial(object.grant)
        : undefined;
    return message;
  },
  fromAmino(
    object: MsgGrantTreasuryAuthorizationAmino
  ): MsgGrantTreasuryAuthorization {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      granter: object.granter,
      grantee: object.grantee,
      grant: object?.grant ? Grant.fromAmino(object.grant) : undefined,
    };
  },
  toAmino(
    message: MsgGrantTreasuryAuthorization
  ): MsgGrantTreasuryAuthorizationAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.grant = message.grant ? Grant.toAmino(message.grant) : undefined;
    return obj;
  },
  fromAminoMsg(
    object: MsgGrantTreasuryAuthorizationAminoMsg
  ): MsgGrantTreasuryAuthorization {
    return MsgGrantTreasuryAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgGrantTreasuryAuthorizationProtoMsg
  ): MsgGrantTreasuryAuthorization {
    return MsgGrantTreasuryAuthorization.decode(message.value);
  },
  toProto(message: MsgGrantTreasuryAuthorization): Uint8Array {
    return MsgGrantTreasuryAuthorization.encode(message).finish();
  },
  toProtoMsg(
    message: MsgGrantTreasuryAuthorization
  ): MsgGrantTreasuryAuthorizationProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgGrantTreasuryAuthorization",
      value: MsgGrantTreasuryAuthorization.encode(message).finish(),
    };
  },
};
function createBaseMsgGrantTreasuryAuthorizationResponse(): MsgGrantTreasuryAuthorizationResponse {
  return {};
}
export const MsgGrantTreasuryAuthorizationResponse = {
  encode(
    _: MsgGrantTreasuryAuthorizationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgGrantTreasuryAuthorizationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantTreasuryAuthorizationResponse();
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
  fromJSON(_: any): MsgGrantTreasuryAuthorizationResponse {
    return {};
  },
  toJSON(_: MsgGrantTreasuryAuthorizationResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgGrantTreasuryAuthorizationResponse>, I>
  >(_: I): MsgGrantTreasuryAuthorizationResponse {
    const message = createBaseMsgGrantTreasuryAuthorizationResponse();
    return message;
  },
  fromAmino(
    _: MsgGrantTreasuryAuthorizationResponseAmino
  ): MsgGrantTreasuryAuthorizationResponse {
    return {};
  },
  toAmino(
    _: MsgGrantTreasuryAuthorizationResponse
  ): MsgGrantTreasuryAuthorizationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgGrantTreasuryAuthorizationResponseAminoMsg
  ): MsgGrantTreasuryAuthorizationResponse {
    return MsgGrantTreasuryAuthorizationResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgGrantTreasuryAuthorizationResponseProtoMsg
  ): MsgGrantTreasuryAuthorizationResponse {
    return MsgGrantTreasuryAuthorizationResponse.decode(message.value);
  },
  toProto(message: MsgGrantTreasuryAuthorizationResponse): Uint8Array {
    return MsgGrantTreasuryAuthorizationResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgGrantTreasuryAuthorizationResponse
  ): MsgGrantTreasuryAuthorizationResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgGrantTreasuryAuthorizationResponse",
      value: MsgGrantTreasuryAuthorizationResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgRevokeTreasuryAuthorization(): MsgRevokeTreasuryAuthorization {
  return {
    subspaceId: Long.UZERO,
    granter: "",
    grantee: "",
    msgTypeUrl: "",
  };
}
export const MsgRevokeTreasuryAuthorization = {
  encode(
    message: MsgRevokeTreasuryAuthorization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.granter !== "") {
      writer.uint32(18).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(26).string(message.grantee);
    }
    if (message.msgTypeUrl !== "") {
      writer.uint32(34).string(message.msgTypeUrl);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRevokeTreasuryAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeTreasuryAuthorization();
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
          message.grantee = reader.string();
          break;
        case 4:
          message.msgTypeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRevokeTreasuryAuthorization {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : "",
    };
  },
  toJSON(message: MsgRevokeTreasuryAuthorization): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRevokeTreasuryAuthorization>, I>>(
    object: I
  ): MsgRevokeTreasuryAuthorization {
    const message = createBaseMsgRevokeTreasuryAuthorization();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    return message;
  },
  fromAmino(
    object: MsgRevokeTreasuryAuthorizationAmino
  ): MsgRevokeTreasuryAuthorization {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      granter: object.granter,
      grantee: object.grantee,
      msgTypeUrl: object.msg_type_url,
    };
  },
  toAmino(
    message: MsgRevokeTreasuryAuthorization
  ): MsgRevokeTreasuryAuthorizationAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.msg_type_url = message.msgTypeUrl;
    return obj;
  },
  fromAminoMsg(
    object: MsgRevokeTreasuryAuthorizationAminoMsg
  ): MsgRevokeTreasuryAuthorization {
    return MsgRevokeTreasuryAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgRevokeTreasuryAuthorizationProtoMsg
  ): MsgRevokeTreasuryAuthorization {
    return MsgRevokeTreasuryAuthorization.decode(message.value);
  },
  toProto(message: MsgRevokeTreasuryAuthorization): Uint8Array {
    return MsgRevokeTreasuryAuthorization.encode(message).finish();
  },
  toProtoMsg(
    message: MsgRevokeTreasuryAuthorization
  ): MsgRevokeTreasuryAuthorizationProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgRevokeTreasuryAuthorization",
      value: MsgRevokeTreasuryAuthorization.encode(message).finish(),
    };
  },
};
function createBaseMsgRevokeTreasuryAuthorizationResponse(): MsgRevokeTreasuryAuthorizationResponse {
  return {};
}
export const MsgRevokeTreasuryAuthorizationResponse = {
  encode(
    _: MsgRevokeTreasuryAuthorizationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRevokeTreasuryAuthorizationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeTreasuryAuthorizationResponse();
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
  fromJSON(_: any): MsgRevokeTreasuryAuthorizationResponse {
    return {};
  },
  toJSON(_: MsgRevokeTreasuryAuthorizationResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgRevokeTreasuryAuthorizationResponse>, I>
  >(_: I): MsgRevokeTreasuryAuthorizationResponse {
    const message = createBaseMsgRevokeTreasuryAuthorizationResponse();
    return message;
  },
  fromAmino(
    _: MsgRevokeTreasuryAuthorizationResponseAmino
  ): MsgRevokeTreasuryAuthorizationResponse {
    return {};
  },
  toAmino(
    _: MsgRevokeTreasuryAuthorizationResponse
  ): MsgRevokeTreasuryAuthorizationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgRevokeTreasuryAuthorizationResponseAminoMsg
  ): MsgRevokeTreasuryAuthorizationResponse {
    return MsgRevokeTreasuryAuthorizationResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgRevokeTreasuryAuthorizationResponseProtoMsg
  ): MsgRevokeTreasuryAuthorizationResponse {
    return MsgRevokeTreasuryAuthorizationResponse.decode(message.value);
  },
  toProto(message: MsgRevokeTreasuryAuthorizationResponse): Uint8Array {
    return MsgRevokeTreasuryAuthorizationResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgRevokeTreasuryAuthorizationResponse
  ): MsgRevokeTreasuryAuthorizationResponseProtoMsg {
    return {
      typeUrl: "/desmos.subspaces.v3.MsgRevokeTreasuryAuthorizationResponse",
      value: MsgRevokeTreasuryAuthorizationResponse.encode(message).finish(),
    };
  },
};
