import { AminoConverters } from "@cosmjs/stargate";
import {
  MsgBlockUser,
  MsgCreateRelationship,
  MsgDeleteRelationship,
  MsgUnblockUser,
} from "@desmoslabs/desmjs-types/desmos/relationships/v1/msg_server";
import {
  AminoMsgBlockUser,
  AminoMsgCreateRelationship,
  AminoMsgDeleteRelationship,
  AminoMsgUnblockUser,
} from "./messages";

/**
 * Creates all the Amino converters for the relationships messages.
 */
export function createRelationshipsConverters(): AminoConverters {
  return {
    "/desmos.relationships.v1.MsgCreateRelationship": {
      aminoType: "desmos/MsgCreateRelationship",
      toAmino: (
        msg: MsgCreateRelationship
      ): AminoMsgCreateRelationship["value"] => ({
        signer: msg.signer,
        counterparty: msg.counterparty,
        subspace_id: msg.subspaceId,
      }),
      fromAmino: (
        msg: AminoMsgCreateRelationship["value"]
      ): MsgCreateRelationship => ({
        signer: msg.signer,
        counterparty: msg.counterparty,
        subspaceId: msg.subspace_id,
      }),
    },
    "/desmos.relationships.v1.MsgDeleteRelationship": {
      aminoType: "desmos/MsgDeleteRelationship",
      toAmino: (
        msg: MsgDeleteRelationship
      ): AminoMsgDeleteRelationship["value"] => ({
        signer: msg.signer,
        counterparty: msg.counterparty,
        subspace_id: msg.subspaceId,
      }),
      fromAmino: (
        msg: AminoMsgDeleteRelationship["value"]
      ): MsgDeleteRelationship => ({
        signer: msg.signer,
        counterparty: msg.counterparty,
        subspaceId: msg.subspace_id,
      }),
    },
    "/desmos.relationships.v1.MsgBlockUser": {
      aminoType: "desmos/MsgBlockUser",
      toAmino: (msg: MsgBlockUser): AminoMsgBlockUser["value"] => ({
        blocker: msg.blocker,
        blocked: msg.blocked,
        reason: msg.reason,
        subspace_id: msg.subspaceId,
      }),
      fromAmino: (msg: AminoMsgBlockUser["value"]): MsgBlockUser => ({
        blocker: msg.blocker,
        blocked: msg.blocked,
        reason: msg.reason,
        subspaceId: msg.subspace_id,
      }),
    },
    "/desmos.relationships.v1.MsgUnblockUser": {
      aminoType: "desmos/MsgUnblockUser",
      toAmino: (msg: MsgUnblockUser): AminoMsgUnblockUser["value"] => ({
        blocker: msg.blocker,
        blocked: msg.blocked,
        subspace_id: msg.subspaceId,
      }),
      fromAmino: (msg: AminoMsgUnblockUser["value"]): MsgUnblockUser => ({
        blocker: msg.blocker,
        blocked: msg.blocked,
        subspaceId: msg.subspace_id,
      }),
    },
  };
}

export default createRelationshipsConverters;
