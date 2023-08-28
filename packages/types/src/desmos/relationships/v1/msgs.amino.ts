/* eslint-disable */
import {
  MsgCreateRelationship,
  MsgDeleteRelationship,
  MsgBlockUser,
  MsgUnblockUser,
} from "./msgs";
export const AminoConverter = {
  "/desmos.relationships.v1.MsgCreateRelationship": {
    aminoType: "desmos/MsgCreateRelationship",
    toAmino: MsgCreateRelationship.toAmino,
    fromAmino: MsgCreateRelationship.fromAmino,
  },
  "/desmos.relationships.v1.MsgDeleteRelationship": {
    aminoType: "desmos/MsgDeleteRelationship",
    toAmino: MsgDeleteRelationship.toAmino,
    fromAmino: MsgDeleteRelationship.fromAmino,
  },
  "/desmos.relationships.v1.MsgBlockUser": {
    aminoType: "desmos/MsgBlockUser",
    toAmino: MsgBlockUser.toAmino,
    fromAmino: MsgBlockUser.fromAmino,
  },
  "/desmos.relationships.v1.MsgUnblockUser": {
    aminoType: "desmos/MsgUnblockUser",
    toAmino: MsgUnblockUser.toAmino,
    fromAmino: MsgUnblockUser.fromAmino,
  },
};
