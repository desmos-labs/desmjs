/* eslint-disable */
import {
  MsgAddReaction,
  MsgRemoveReaction,
  MsgAddRegisteredReaction,
  MsgEditRegisteredReaction,
  MsgRemoveRegisteredReaction,
  MsgSetReactionsParams,
} from "./msgs";
export const AminoConverter = {
  "/desmos.reactions.v1.MsgAddReaction": {
    aminoType: "/desmos.reactions.v1.MsgAddReaction",
    toAmino: MsgAddReaction.toAmino,
    fromAmino: MsgAddReaction.fromAmino,
  },
  "/desmos.reactions.v1.MsgRemoveReaction": {
    aminoType: "/desmos.reactions.v1.MsgRemoveReaction",
    toAmino: MsgRemoveReaction.toAmino,
    fromAmino: MsgRemoveReaction.fromAmino,
  },
  "/desmos.reactions.v1.MsgAddRegisteredReaction": {
    aminoType: "/desmos.reactions.v1.MsgAddRegisteredReaction",
    toAmino: MsgAddRegisteredReaction.toAmino,
    fromAmino: MsgAddRegisteredReaction.fromAmino,
  },
  "/desmos.reactions.v1.MsgEditRegisteredReaction": {
    aminoType: "/desmos.reactions.v1.MsgEditRegisteredReaction",
    toAmino: MsgEditRegisteredReaction.toAmino,
    fromAmino: MsgEditRegisteredReaction.fromAmino,
  },
  "/desmos.reactions.v1.MsgRemoveRegisteredReaction": {
    aminoType: "/desmos.reactions.v1.MsgRemoveRegisteredReaction",
    toAmino: MsgRemoveRegisteredReaction.toAmino,
    fromAmino: MsgRemoveRegisteredReaction.fromAmino,
  },
  "/desmos.reactions.v1.MsgSetReactionsParams": {
    aminoType: "/desmos.reactions.v1.MsgSetReactionsParams",
    toAmino: MsgSetReactionsParams.toAmino,
    fromAmino: MsgSetReactionsParams.fromAmino,
  },
};
