import { EncodeObject } from "@cosmjs/proto-signing";
import {
  MsgAddReaction,
  MsgAddRegisteredReaction,
  MsgEditRegisteredReaction,
  MsgRemoveReaction,
  MsgRemoveRegisteredReaction,
  MsgSetReactionsParams,
} from "@desmoslabs/desmjs-types/desmos/reactions/v1/msgs";

export interface MsgAddReactionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reactions.v1.MsgAddReaction";
  readonly value: MsgAddReaction;
}

export function isMsgAddReactionEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgAddReactionEncodeObject {
  return (
    (encodeObject as MsgAddReactionEncodeObject).typeUrl ===
    "/desmos.reactions.v1.MsgAddReaction"
  );
}

export interface MsgRemoveReactionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reactions.v1.MsgRemoveReaction";
  readonly value: MsgRemoveReaction;
}

export function isMsgRemoveReactionEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgRemoveReactionEncodeObject {
  return (
    (encodeObject as MsgRemoveReactionEncodeObject).typeUrl ===
    "/desmos.reactions.v1.MsgRemoveReaction"
  );
}

export interface MsgAddRegisteredReactionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reactions.v1.MsgAddRegisteredReaction";
  readonly value: MsgAddRegisteredReaction;
}

export function isMsgAddRegisteredReactionEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgAddRegisteredReactionEncodeObject {
  return (
    (encodeObject as MsgAddRegisteredReactionEncodeObject).typeUrl ===
    "/desmos.reactions.v1.MsgAddRegisteredReaction"
  );
}

export interface MsgEditRegisteredReactionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reactions.v1.MsgEditRegisteredReaction";
  readonly value: MsgEditRegisteredReaction;
}

export function isMsgEditRegisteredReactionEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgEditRegisteredReactionEncodeObject {
  return (
    (encodeObject as MsgEditRegisteredReactionEncodeObject).typeUrl ===
    "/desmos.reactions.v1.MsgEditRegisteredReaction"
  );
}

export interface MsgRemoveRegisteredReactionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reactions.v1.MsgRemoveRegisteredReaction";
  readonly value: MsgRemoveRegisteredReaction;
}

export function isMsgRemoveRegisteredReactionEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgRemoveRegisteredReactionEncodeObject {
  return (
    (encodeObject as MsgRemoveRegisteredReactionEncodeObject).typeUrl ===
    "/desmos.reactions.v1.MsgRemoveRegisteredReaction"
  );
}

export interface MsgSetReactionsParamsEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reactions.v1.MsgSetReactionsParams";
  readonly value: MsgSetReactionsParams;
}

export function isMsgSetReactionsParamsEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgSetReactionsParamsEncodeObject {
  return (
    (encodeObject as MsgSetReactionsParamsEncodeObject).typeUrl ===
    "/desmos.reactions.v1.MsgSetReactionsParams"
  );
}
