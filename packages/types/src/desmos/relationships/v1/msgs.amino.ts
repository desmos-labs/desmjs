/* eslint-disable */
import {
  MsgCreateRelationship,
  MsgDeleteRelationship,
  MsgBlockUser,
  MsgUnblockUser,
} from "./msgs";
export const AminoConverter = {
  "/desmos.relationships.v1.MsgCreateRelationship": {
    aminoType: "/desmos.relationships.v1.MsgCreateRelationship",
    toAmino: MsgCreateRelationship.toAmino,
    fromAmino: MsgCreateRelationship.fromAmino,
  },
  "/desmos.relationships.v1.MsgDeleteRelationship": {
    aminoType: "/desmos.relationships.v1.MsgDeleteRelationship",
    toAmino: MsgDeleteRelationship.toAmino,
    fromAmino: MsgDeleteRelationship.fromAmino,
  },
  "/desmos.relationships.v1.MsgBlockUser": {
    aminoType: "/desmos.relationships.v1.MsgBlockUser",
    toAmino: MsgBlockUser.toAmino,
    fromAmino: MsgBlockUser.fromAmino,
  },
  "/desmos.relationships.v1.MsgUnblockUser": {
    aminoType: "/desmos.relationships.v1.MsgUnblockUser",
    toAmino: MsgUnblockUser.toAmino,
    fromAmino: MsgUnblockUser.fromAmino,
  },
};
