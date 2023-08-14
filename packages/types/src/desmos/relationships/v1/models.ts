/* eslint-disable */
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.relationships.v1";
/**
 * Relationship is the struct of a relationship.
 * It represent the concept of "follow" of traditional social networks.
 */
export interface Relationship {
  /** Creator represents the creator of the relationship */
  creator: string;
  /** Counterparty represents the other user involved in the relationship */
  counterparty: string;
  /**
   * SubspaceID represents the id of the subspace for which the relationship is
   * valid
   */
  subspaceId: Long;
}
export interface RelationshipProtoMsg {
  typeUrl: "/desmos.relationships.v1.Relationship";
  value: Uint8Array;
}
/**
 * Relationship is the struct of a relationship.
 * It represent the concept of "follow" of traditional social networks.
 */
export interface RelationshipAmino {
  /** Creator represents the creator of the relationship */
  creator: string;
  /** Counterparty represents the other user involved in the relationship */
  counterparty: string;
  /**
   * SubspaceID represents the id of the subspace for which the relationship is
   * valid
   */
  subspace_id: string;
}
export interface RelationshipAminoMsg {
  type: "/desmos.relationships.v1.Relationship";
  value: RelationshipAmino;
}
/**
 * UserBlock represents the fact that the Blocker has blocked the given Blocked
 * user.
 */
export interface UserBlock {
  /** Blocker represents the address of the user blocking another one */
  blocker: string;
  /** Blocked represents the address of the blocked user */
  blocked: string;
  /** Reason represents the optional reason the user has been blocked for. */
  reason: string;
  /**
   * SubspaceID represents the ID of the subspace inside which the user should
   * be blocked
   */
  subspaceId: Long;
}
export interface UserBlockProtoMsg {
  typeUrl: "/desmos.relationships.v1.UserBlock";
  value: Uint8Array;
}
/**
 * UserBlock represents the fact that the Blocker has blocked the given Blocked
 * user.
 */
export interface UserBlockAmino {
  /** Blocker represents the address of the user blocking another one */
  blocker: string;
  /** Blocked represents the address of the blocked user */
  blocked: string;
  /** Reason represents the optional reason the user has been blocked for. */
  reason: string;
  /**
   * SubspaceID represents the ID of the subspace inside which the user should
   * be blocked
   */
  subspace_id: string;
}
export interface UserBlockAminoMsg {
  type: "/desmos.relationships.v1.UserBlock";
  value: UserBlockAmino;
}
function createBaseRelationship(): Relationship {
  return {
    creator: "",
    counterparty: "",
    subspaceId: Long.UZERO,
  };
}
export const Relationship = {
  encode(
    message: Relationship,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.counterparty !== "") {
      writer.uint32(18).string(message.counterparty);
    }
    if (!message.subspaceId.isZero()) {
      writer.uint32(24).uint64(message.subspaceId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Relationship {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationship();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.counterparty = reader.string();
          break;
        case 3:
          message.subspaceId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Relationship {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      counterparty: isSet(object.counterparty)
        ? String(object.counterparty)
        : "",
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
    };
  },
  toJSON(message: Relationship): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty);
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Relationship>, I>>(
    object: I,
  ): Relationship {
    const message = createBaseRelationship();
    message.creator = object.creator ?? "";
    message.counterparty = object.counterparty ?? "";
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    return message;
  },
  fromAmino(object: RelationshipAmino): Relationship {
    return {
      creator: object.creator,
      counterparty: object.counterparty,
      subspaceId: Long.fromString(object.subspace_id),
    };
  },
  toAmino(message: Relationship): RelationshipAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.counterparty = message.counterparty;
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    return obj;
  },
  fromAminoMsg(object: RelationshipAminoMsg): Relationship {
    return Relationship.fromAmino(object.value);
  },
  fromProtoMsg(message: RelationshipProtoMsg): Relationship {
    return Relationship.decode(message.value);
  },
  toProto(message: Relationship): Uint8Array {
    return Relationship.encode(message).finish();
  },
  toProtoMsg(message: Relationship): RelationshipProtoMsg {
    return {
      typeUrl: "/desmos.relationships.v1.Relationship",
      value: Relationship.encode(message).finish(),
    };
  },
};
function createBaseUserBlock(): UserBlock {
  return {
    blocker: "",
    blocked: "",
    reason: "",
    subspaceId: Long.UZERO,
  };
}
export const UserBlock = {
  encode(
    message: UserBlock,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.blocker !== "") {
      writer.uint32(10).string(message.blocker);
    }
    if (message.blocked !== "") {
      writer.uint32(18).string(message.blocked);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    if (!message.subspaceId.isZero()) {
      writer.uint32(32).uint64(message.subspaceId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UserBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blocker = reader.string();
          break;
        case 2:
          message.blocked = reader.string();
          break;
        case 3:
          message.reason = reader.string();
          break;
        case 4:
          message.subspaceId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserBlock {
    return {
      blocker: isSet(object.blocker) ? String(object.blocker) : "",
      blocked: isSet(object.blocked) ? String(object.blocked) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
    };
  },
  toJSON(message: UserBlock): unknown {
    const obj: any = {};
    message.blocker !== undefined && (obj.blocker = message.blocker);
    message.blocked !== undefined && (obj.blocked = message.blocked);
    message.reason !== undefined && (obj.reason = message.reason);
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UserBlock>, I>>(
    object: I,
  ): UserBlock {
    const message = createBaseUserBlock();
    message.blocker = object.blocker ?? "";
    message.blocked = object.blocked ?? "";
    message.reason = object.reason ?? "";
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    return message;
  },
  fromAmino(object: UserBlockAmino): UserBlock {
    return {
      blocker: object.blocker,
      blocked: object.blocked,
      reason: object.reason,
      subspaceId: Long.fromString(object.subspace_id),
    };
  },
  toAmino(message: UserBlock): UserBlockAmino {
    const obj: any = {};
    obj.blocker = message.blocker;
    obj.blocked = message.blocked;
    obj.reason = message.reason;
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    return obj;
  },
  fromAminoMsg(object: UserBlockAminoMsg): UserBlock {
    return UserBlock.fromAmino(object.value);
  },
  fromProtoMsg(message: UserBlockProtoMsg): UserBlock {
    return UserBlock.decode(message.value);
  },
  toProto(message: UserBlock): Uint8Array {
    return UserBlock.encode(message).finish();
  },
  toProtoMsg(message: UserBlock): UserBlockProtoMsg {
    return {
      typeUrl: "/desmos.relationships.v1.UserBlock",
      value: UserBlock.encode(message).finish(),
    };
  },
};
