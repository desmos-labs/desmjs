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
  readonly value: Partial<MsgAddReaction>;
}

export interface MsgRemoveReactionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reactions.v1.MsgRemoveReaction";
  readonly value: Partial<MsgRemoveReaction>;
}

export interface MsgAddRegisteredReactionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reactions.v1.MsgAddRegisteredReaction";
  readonly value: Partial<MsgAddRegisteredReaction>;
}

export interface MsgEditRegisteredReactionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reactions.v1.MsgEditRegisteredReaction";
  readonly value: Partial<MsgEditRegisteredReaction>;
}

export interface MsgRemoveRegisteredReactionEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reactions.v1.MsgRemoveRegisteredReaction";
  readonly value: Partial<MsgRemoveRegisteredReaction>;
}

export interface MsgSetReactionsParamsEncodeObject extends EncodeObject {
  readonly typeUrl: "/desmos.reactions.v1.MsgSetReactionsParams";
  readonly value: Partial<MsgSetReactionsParams>;
}
