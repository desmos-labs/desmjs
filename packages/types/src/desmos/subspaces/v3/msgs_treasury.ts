/* eslint-disable */
import { Grant } from "../../../cosmos/authz/v1beta1/authz";
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
/**
 * MsgGrantTreasuryAuthorizationResponse defines the
 * Msg/MsgGrantTreasuryAuthorization response type
 */
export interface MsgGrantTreasuryAuthorizationResponse {}
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
/**
 * MsgRevokeTreasuryAuthorizationResponse defines the
 * Msg/MsgRevokeTreasuryAuthorization response type
 */
export interface MsgRevokeTreasuryAuthorizationResponse {}
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
};
