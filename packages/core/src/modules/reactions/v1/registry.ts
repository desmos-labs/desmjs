import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgAddReaction,
  MsgAddRegisteredReaction,
  MsgEditRegisteredReaction,
  MsgRemoveReaction,
  MsgRemoveRegisteredReaction,
  MsgSetReactionsParams,
} from "@desmoslabs/desmjs-types/desmos/reactions/v1/msgs";
import {
  FreeTextValue,
  RegisteredReactionValue,
} from "@desmoslabs/desmjs-types/desmos/reactions/v1/models";
import {
  FreeTextValueTypeUrl,
  MsgAddReactionTypeUrl,
  MsgAddRegisteredReactionTypeUrl,
  MsgEditRegisteredReactionTypeUrl,
  MsgRemoveReactionTypeUrl,
  MsgRemoveRegisteredReactionTypeUrl,
  MsgSetReactionsParamsTypeUrl,
  RegisteredReactionValueTypeUrl,
} from "./consts";

// eslint-disable-next-line import/prefer-default-export
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  [RegisteredReactionValueTypeUrl, RegisteredReactionValue],
  [FreeTextValueTypeUrl, FreeTextValue],

  [MsgAddReactionTypeUrl, MsgAddReaction],
  [MsgRemoveReactionTypeUrl, MsgRemoveReaction],
  [MsgAddRegisteredReactionTypeUrl, MsgAddRegisteredReaction],
  [MsgEditRegisteredReactionTypeUrl, MsgEditRegisteredReaction],
  [MsgRemoveRegisteredReactionTypeUrl, MsgRemoveRegisteredReaction],
  [MsgSetReactionsParamsTypeUrl, MsgSetReactionsParams],
];
