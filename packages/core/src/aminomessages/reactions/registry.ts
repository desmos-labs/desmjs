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
  MsgAddReactionTypeUrl,
  MsgAddRegisteredReactionTypeUrl,
  MsgEditRegisteredReactionTypeUrl,
  MsgRemoveReactionTypeUrl,
  MsgRemoveRegisteredReactionTypeUrl,
  MsgSetReactionsParamsTypeUrl,
} from "../../const";

export const reactionsRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  [MsgAddReactionTypeUrl, MsgAddReaction],
  [MsgRemoveReactionTypeUrl, MsgRemoveReaction],
  [MsgAddRegisteredReactionTypeUrl, MsgAddRegisteredReaction],
  [MsgEditRegisteredReactionTypeUrl, MsgEditRegisteredReaction],
  [MsgRemoveRegisteredReactionTypeUrl, MsgRemoveRegisteredReaction],
  [MsgSetReactionsParamsTypeUrl, MsgSetReactionsParams],
];

export default reactionsRegistryTypes;
