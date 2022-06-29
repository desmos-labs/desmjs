import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgAddReaction,
  MsgAddRegisteredReaction,
  MsgEditRegisteredReaction,
  MsgRemoveReaction,
  MsgRemoveRegisteredReaction,
  MsgSetReactionsParams,
} from "@desmoslabs/desmjs-types/desmos/reactions/v1/msgs";

export const reactionsRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/desmos.reactions.v1.MsgAddReaction", MsgAddReaction],
  ["/desmos.reactions.v1.MsgRemoveReaction", MsgRemoveReaction],
  ["/desmos.reactions.v1.MsgAddRegisteredReaction", MsgAddRegisteredReaction],
  ["/desmos.reactions.v1.MsgEditRegisteredReaction", MsgEditRegisteredReaction],
  [
    "/desmos.reactions.v1.MsgRemoveRegisteredReaction",
    MsgRemoveRegisteredReaction,
  ],
  ["/desmos.reactions.v1.MsgSetReactionsParams", MsgSetReactionsParams],
];

export default reactionsRegistryTypes;
