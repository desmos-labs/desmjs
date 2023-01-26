import { AminoMsg } from "@cosmjs/amino";
import {
  MsgBlockUserAminoType,
  MsgCreateRelationshipAminoType,
  MsgDeleteRelationshipAminoType,
  MsgUnblockUserAminoType,
} from "../../const";

export interface AminoMsgCreateRelationship extends AminoMsg {
  readonly type: typeof MsgCreateRelationshipAminoType;
  readonly value: {
    signer: string | undefined; // Undefined if empty
    counterparty: string | undefined; // Undefined if empty
    subspace_id: string | undefined; // Undefined if zero
  };
}

export interface AminoMsgDeleteRelationship extends AminoMsg {
  readonly type: typeof MsgDeleteRelationshipAminoType;
  readonly value: {
    signer: string | undefined; // Undefined if empty
    counterparty: string | undefined; // Undefined if empty
    subspace_id: string | undefined; // Undefined if zero
  };
}

export interface AminoMsgBlockUser extends AminoMsg {
  readonly type: typeof MsgBlockUserAminoType;
  readonly value: {
    blocker: string;
    blocked: string;
    reason: string | undefined; // Undefined if empty
    subspace_id: string;
  };
}

export interface AminoMsgUnblockUser extends AminoMsg {
  readonly type: typeof MsgUnblockUserAminoType;
  readonly value: {
    blocker: string;
    blocked: string;
    subspace_id: string;
  };
}
