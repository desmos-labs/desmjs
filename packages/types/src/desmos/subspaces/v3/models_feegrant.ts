/* eslint-disable */
import { Any } from "../../../google/protobuf/any";
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.subspaces.v3";
/** Grant represents a grant to a user or a group */
export interface Grant {
  /** Id of the subspace inside which the user was granted the allowance */
  subspaceId: Long;
  /** Address of the user that granted the allowance */
  granter: string;
  /** Target to which the allowance has been granted */
  grantee?: Any;
  /**
   * Allowance can be any allowance type implementing the FeeAllowanceI
   * interface
   */
  allowance?: Any;
}
/** UserGrantee contains the target of a grant about a user */
export interface UserGrantee {
  user: string;
}
/** GroupGrantee contains the target of a grant about a group */
export interface GroupGrantee {
  groupId: number;
}
function createBaseGrant(): Grant {
  return {
    subspaceId: Long.UZERO,
    granter: "",
    grantee: undefined,
    allowance: undefined,
  };
}
export const Grant = {
  encode(message: Grant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): Grant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrant();
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
  fromJSON(object: any): Grant {
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
  toJSON(message: Grant): unknown {
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
  fromPartial<I extends Exact<DeepPartial<Grant>, I>>(object: I): Grant {
    const message = createBaseGrant();
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
function createBaseUserGrantee(): UserGrantee {
  return {
    user: "",
  };
}
export const UserGrantee = {
  encode(
    message: UserGrantee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UserGrantee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserGrantee();
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
  fromJSON(object: any): UserGrantee {
    return {
      user: isSet(object.user) ? String(object.user) : "",
    };
  },
  toJSON(message: UserGrantee): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserGrantee>, I>>(
    object: I
  ): UserGrantee {
    const message = createBaseUserGrantee();
    message.user = object.user ?? "";
    return message;
  },
};
function createBaseGroupGrantee(): GroupGrantee {
  return {
    groupId: 0,
  };
}
export const GroupGrantee = {
  encode(
    message: GroupGrantee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).uint32(message.groupId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GroupGrantee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupGrantee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GroupGrantee {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
    };
  },
  toJSON(message: GroupGrantee): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GroupGrantee>, I>>(
    object: I
  ): GroupGrantee {
    const message = createBaseGroupGrantee();
    message.groupId = object.groupId ?? 0;
    return message;
  },
};
