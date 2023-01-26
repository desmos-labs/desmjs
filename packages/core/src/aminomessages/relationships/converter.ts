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
import {
  fromOmitEmptyString,
  fromOmitZeroLong,
  omitEmptyString,
  omitZeroLong,
} from "../utils";

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
        signer: omitEmptyString(msg.signer),
        counterparty: omitEmptyString(msg.counterparty),
        subspace_id: omitZeroLong(msg.subspaceId),
      }),
      fromAmino: (
        msg: AminoMsgCreateRelationship["value"]
      ): MsgCreateRelationship => ({
        signer: fromOmitEmptyString(msg.signer),
        counterparty: fromOmitEmptyString(msg.counterparty),
        subspaceId: fromOmitZeroLong(msg.subspace_id),
      }),
    },
    [MsgDeleteRelationshipTypeUrl]: {
      aminoType: MsgDeleteRelationshipAminoType,
      toAmino: (
        msg: MsgDeleteRelationship
      ): AminoMsgDeleteRelationship["value"] => ({
        signer: omitEmptyString(msg.signer),
        counterparty: omitEmptyString(msg.counterparty),
        subspace_id: omitZeroLong(msg.subspaceId),
      }),
      fromAmino: (
        msg: AminoMsgDeleteRelationship["value"]
      ): MsgDeleteRelationship => ({
        signer: fromOmitEmptyString(msg.signer),
        counterparty: fromOmitEmptyString(msg.counterparty),
        subspaceId: fromOmitZeroLong(msg.subspace_id),
      }),
    },
    [MsgBlockUserTypeUrl]: {
      aminoType: MsgBlockUserAminoType,
      toAmino: (msg: MsgBlockUser): AminoMsgBlockUser["value"] => ({
        blocker: omitEmptyString(msg.blocker),
        blocked: omitEmptyString(msg.blocked),
        reason: omitEmptyString(msg.reason),
        subspace_id: omitZeroLong(msg.subspaceId),
      }),
      fromAmino: (msg: AminoMsgBlockUser["value"]): MsgBlockUser => ({
        blocker: fromOmitEmptyString(msg.blocker),
        blocked: fromOmitEmptyString(msg.blocked),
        reason: fromOmitEmptyString(msg.reason),
        subspaceId: fromOmitZeroLong(msg.subspace_id),
      }),
    },
    [MsgUnblockUserTypeUrl]: {
      aminoType: MsgUnblockUserAminoType,
      toAmino: (msg: MsgUnblockUser): AminoMsgUnblockUser["value"] => ({
        blocker: omitEmptyString(msg.blocker),
        blocked: omitEmptyString(msg.blocked),
        subspace_id: omitZeroLong(msg.subspaceId),
      }),
      fromAmino: (msg: AminoMsgUnblockUser["value"]): MsgUnblockUser => ({
        blocker: fromOmitEmptyString(msg.blocker),
        blocked: fromOmitEmptyString(msg.blocked),
        subspaceId: fromOmitZeroLong(msg.subspace_id),
      }),
    },
  };
}

export default createRelationshipsConverters;
