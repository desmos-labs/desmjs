import { AminoConverters } from "@cosmjs/stargate";
import {
  MsgBlockUser,
  MsgCreateRelationship,
  MsgDeleteRelationship,
  MsgUnblockUser,
} from "@desmoslabs/desmjs-types/desmos/relationships/v1/msgs";
import Long from "long";
import {
  AminoMsgBlockUser,
  AminoMsgCreateRelationship,
  AminoMsgDeleteRelationship,
  AminoMsgUnblockUser,
} from "./messages";
import {
  MsgBlockUserAminoType,
  MsgBlockUserTypeUrl,
  MsgCreateRelationshipAminoType,
  MsgCreateRelationshipTypeUrl,
  MsgDeleteRelationshipAminoType,
  MsgDeleteRelationshipTypeUrl,
  MsgUnblockUserAminoType,
  MsgUnblockUserTypeUrl,
} from "../../const";

/**
 * Creates all the Amino converters for the relationships messages.
 */
export function createRelationshipsConverters(): AminoConverters {
  return {
    [MsgCreateRelationshipTypeUrl]: {
      aminoType: MsgCreateRelationshipAminoType,
      toAmino: (
        msg: MsgCreateRelationship
      ): AminoMsgCreateRelationship["value"] => ({
        signer: msg.signer,
        counterparty: msg.counterparty,
        subspace_id: msg.subspaceId.toString(),
      }),
      fromAmino: (
        msg: AminoMsgCreateRelationship["value"]
      ): MsgCreateRelationship => ({
        signer: msg.signer,
        counterparty: msg.counterparty,
        subspaceId: Long.fromString(msg.subspace_id),
      }),
    },
    [MsgDeleteRelationshipTypeUrl]: {
      aminoType: MsgDeleteRelationshipAminoType,
      toAmino: (
        msg: MsgDeleteRelationship
      ): AminoMsgDeleteRelationship["value"] => ({
        signer: msg.signer,
        counterparty: msg.counterparty,
        subspace_id: msg.subspaceId.toString(),
      }),
      fromAmino: (
        msg: AminoMsgDeleteRelationship["value"]
      ): MsgDeleteRelationship => ({
        signer: msg.signer,
        counterparty: msg.counterparty,
        subspaceId: Long.fromString(msg.subspace_id),
      }),
    },
    [MsgBlockUserTypeUrl]: {
      aminoType: MsgBlockUserAminoType,
      toAmino: (msg: MsgBlockUser): AminoMsgBlockUser["value"] => ({
        blocker: msg.blocker,
        blocked: msg.blocked,
        reason: msg.reason,
        subspace_id: msg.subspaceId.toString(),
      }),
      fromAmino: (msg: AminoMsgBlockUser["value"]): MsgBlockUser => ({
        blocker: msg.blocker,
        blocked: msg.blocked,
        reason: msg.reason,
        subspaceId: Long.fromString(msg.subspace_id),
      }),
    },
    [MsgUnblockUserTypeUrl]: {
      aminoType: MsgUnblockUserAminoType,
      toAmino: (msg: MsgUnblockUser): AminoMsgUnblockUser["value"] => ({
        blocker: msg.blocker,
        blocked: msg.blocked,
        subspace_id: msg.subspaceId.toString(),
      }),
      fromAmino: (msg: AminoMsgUnblockUser["value"]): MsgUnblockUser => ({
        blocker: msg.blocker,
        blocked: msg.blocked,
        subspaceId: Long.fromString(msg.subspace_id),
      }),
    },
  };
}

export default createRelationshipsConverters;
