/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import {
  MsgCreateRelationship,
  MsgDeleteRelationship,
  MsgBlockUser,
  MsgUnblockUser,
} from "./msgs";
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ["/desmos.relationships.v1.MsgCreateRelationship", MsgCreateRelationship],
  ["/desmos.relationships.v1.MsgDeleteRelationship", MsgDeleteRelationship],
  ["/desmos.relationships.v1.MsgBlockUser", MsgBlockUser],
  ["/desmos.relationships.v1.MsgUnblockUser", MsgUnblockUser],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createRelationship(value: MsgCreateRelationship) {
      return {
        typeUrl: "/desmos.relationships.v1.MsgCreateRelationship",
        value: MsgCreateRelationship.encode(value).finish(),
      };
    },
    deleteRelationship(value: MsgDeleteRelationship) {
      return {
        typeUrl: "/desmos.relationships.v1.MsgDeleteRelationship",
        value: MsgDeleteRelationship.encode(value).finish(),
      };
    },
    blockUser(value: MsgBlockUser) {
      return {
        typeUrl: "/desmos.relationships.v1.MsgBlockUser",
        value: MsgBlockUser.encode(value).finish(),
      };
    },
    unblockUser(value: MsgUnblockUser) {
      return {
        typeUrl: "/desmos.relationships.v1.MsgUnblockUser",
        value: MsgUnblockUser.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    createRelationship(value: MsgCreateRelationship) {
      return {
        typeUrl: "/desmos.relationships.v1.MsgCreateRelationship",
        value,
      };
    },
    deleteRelationship(value: MsgDeleteRelationship) {
      return {
        typeUrl: "/desmos.relationships.v1.MsgDeleteRelationship",
        value,
      };
    },
    blockUser(value: MsgBlockUser) {
      return {
        typeUrl: "/desmos.relationships.v1.MsgBlockUser",
        value,
      };
    },
    unblockUser(value: MsgUnblockUser) {
      return {
        typeUrl: "/desmos.relationships.v1.MsgUnblockUser",
        value,
      };
    },
  },
  toJSON: {
    createRelationship(value: MsgCreateRelationship) {
      return {
        typeUrl: "/desmos.relationships.v1.MsgCreateRelationship",
        value: MsgCreateRelationship.toJSON(value),
      };
    },
    deleteRelationship(value: MsgDeleteRelationship) {
      return {
        typeUrl: "/desmos.relationships.v1.MsgDeleteRelationship",
        value: MsgDeleteRelationship.toJSON(value),
      };
    },
    blockUser(value: MsgBlockUser) {
      return {
        typeUrl: "/desmos.relationships.v1.MsgBlockUser",
        value: MsgBlockUser.toJSON(value),
      };
    },
    unblockUser(value: MsgUnblockUser) {
      return {
        typeUrl: "/desmos.relationships.v1.MsgUnblockUser",
        value: MsgUnblockUser.toJSON(value),
      };
    },
  },
  fromJSON: {
    createRelationship(value: any) {
      return {
        typeUrl: "/desmos.relationships.v1.MsgCreateRelationship",
        value: MsgCreateRelationship.fromJSON(value),
      };
    },
    deleteRelationship(value: any) {
      return {
        typeUrl: "/desmos.relationships.v1.MsgDeleteRelationship",
        value: MsgDeleteRelationship.fromJSON(value),
      };
    },
    blockUser(value: any) {
      return {
        typeUrl: "/desmos.relationships.v1.MsgBlockUser",
        value: MsgBlockUser.fromJSON(value),
      };
    },
    unblockUser(value: any) {
      return {
        typeUrl: "/desmos.relationships.v1.MsgUnblockUser",
        value: MsgUnblockUser.fromJSON(value),
      };
    },
  },
  fromPartial: {
    createRelationship(value: MsgCreateRelationship) {
      return {
        typeUrl: "/desmos.relationships.v1.MsgCreateRelationship",
        value: MsgCreateRelationship.fromPartial(value),
      };
    },
    deleteRelationship(value: MsgDeleteRelationship) {
      return {
        typeUrl: "/desmos.relationships.v1.MsgDeleteRelationship",
        value: MsgDeleteRelationship.fromPartial(value),
      };
    },
    blockUser(value: MsgBlockUser) {
      return {
        typeUrl: "/desmos.relationships.v1.MsgBlockUser",
        value: MsgBlockUser.fromPartial(value),
      };
    },
    unblockUser(value: MsgUnblockUser) {
      return {
        typeUrl: "/desmos.relationships.v1.MsgUnblockUser",
        value: MsgUnblockUser.fromPartial(value),
      };
    },
  },
};
