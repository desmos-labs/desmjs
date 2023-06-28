/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import {
  MsgAddReaction,
  MsgRemoveReaction,
  MsgAddRegisteredReaction,
  MsgEditRegisteredReaction,
  MsgRemoveRegisteredReaction,
  MsgSetReactionsParams,
} from "./msgs";
export const registry: ReadonlyArray<[string, GeneratedType]> = [
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
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addReaction(value: MsgAddReaction) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgAddReaction",
        value: MsgAddReaction.encode(value).finish(),
      };
    },
    removeReaction(value: MsgRemoveReaction) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgRemoveReaction",
        value: MsgRemoveReaction.encode(value).finish(),
      };
    },
    addRegisteredReaction(value: MsgAddRegisteredReaction) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgAddRegisteredReaction",
        value: MsgAddRegisteredReaction.encode(value).finish(),
      };
    },
    editRegisteredReaction(value: MsgEditRegisteredReaction) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgEditRegisteredReaction",
        value: MsgEditRegisteredReaction.encode(value).finish(),
      };
    },
    removeRegisteredReaction(value: MsgRemoveRegisteredReaction) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgRemoveRegisteredReaction",
        value: MsgRemoveRegisteredReaction.encode(value).finish(),
      };
    },
    setReactionsParams(value: MsgSetReactionsParams) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgSetReactionsParams",
        value: MsgSetReactionsParams.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    addReaction(value: MsgAddReaction) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgAddReaction",
        value,
      };
    },
    removeReaction(value: MsgRemoveReaction) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgRemoveReaction",
        value,
      };
    },
    addRegisteredReaction(value: MsgAddRegisteredReaction) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgAddRegisteredReaction",
        value,
      };
    },
    editRegisteredReaction(value: MsgEditRegisteredReaction) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgEditRegisteredReaction",
        value,
      };
    },
    removeRegisteredReaction(value: MsgRemoveRegisteredReaction) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgRemoveRegisteredReaction",
        value,
      };
    },
    setReactionsParams(value: MsgSetReactionsParams) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgSetReactionsParams",
        value,
      };
    },
  },
  toJSON: {
    addReaction(value: MsgAddReaction) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgAddReaction",
        value: MsgAddReaction.toJSON(value),
      };
    },
    removeReaction(value: MsgRemoveReaction) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgRemoveReaction",
        value: MsgRemoveReaction.toJSON(value),
      };
    },
    addRegisteredReaction(value: MsgAddRegisteredReaction) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgAddRegisteredReaction",
        value: MsgAddRegisteredReaction.toJSON(value),
      };
    },
    editRegisteredReaction(value: MsgEditRegisteredReaction) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgEditRegisteredReaction",
        value: MsgEditRegisteredReaction.toJSON(value),
      };
    },
    removeRegisteredReaction(value: MsgRemoveRegisteredReaction) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgRemoveRegisteredReaction",
        value: MsgRemoveRegisteredReaction.toJSON(value),
      };
    },
    setReactionsParams(value: MsgSetReactionsParams) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgSetReactionsParams",
        value: MsgSetReactionsParams.toJSON(value),
      };
    },
  },
  fromJSON: {
    addReaction(value: any) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgAddReaction",
        value: MsgAddReaction.fromJSON(value),
      };
    },
    removeReaction(value: any) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgRemoveReaction",
        value: MsgRemoveReaction.fromJSON(value),
      };
    },
    addRegisteredReaction(value: any) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgAddRegisteredReaction",
        value: MsgAddRegisteredReaction.fromJSON(value),
      };
    },
    editRegisteredReaction(value: any) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgEditRegisteredReaction",
        value: MsgEditRegisteredReaction.fromJSON(value),
      };
    },
    removeRegisteredReaction(value: any) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgRemoveRegisteredReaction",
        value: MsgRemoveRegisteredReaction.fromJSON(value),
      };
    },
    setReactionsParams(value: any) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgSetReactionsParams",
        value: MsgSetReactionsParams.fromJSON(value),
      };
    },
  },
  fromPartial: {
    addReaction(value: MsgAddReaction) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgAddReaction",
        value: MsgAddReaction.fromPartial(value),
      };
    },
    removeReaction(value: MsgRemoveReaction) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgRemoveReaction",
        value: MsgRemoveReaction.fromPartial(value),
      };
    },
    addRegisteredReaction(value: MsgAddRegisteredReaction) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgAddRegisteredReaction",
        value: MsgAddRegisteredReaction.fromPartial(value),
      };
    },
    editRegisteredReaction(value: MsgEditRegisteredReaction) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgEditRegisteredReaction",
        value: MsgEditRegisteredReaction.fromPartial(value),
      };
    },
    removeRegisteredReaction(value: MsgRemoveRegisteredReaction) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgRemoveRegisteredReaction",
        value: MsgRemoveRegisteredReaction.fromPartial(value),
      };
    },
    setReactionsParams(value: MsgSetReactionsParams) {
      return {
        typeUrl: "/desmos.reactions.v1.MsgSetReactionsParams",
        value: MsgSetReactionsParams.fromPartial(value),
      };
    },
  },
};
