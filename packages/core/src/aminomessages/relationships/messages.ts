import { AminoMsg } from "@cosmjs/amino";
import Long from "long";

export interface AminoMsgCreateRelationship extends AminoMsg {
  readonly type: "desmos/MsgCreateRelationship";
  readonly value: {
    signer: string;
    counterparty: string;
    subspace_id: Long;
  };
}

export interface AminoMsgDeleteRelationship extends AminoMsg {
  readonly type: "desmos/MsgDeleteRelationship";
  readonly value: {
    signer: string;
    counterparty: string;
    subspace_id: Long;
  };
}

export interface AminoMsgBlockUser extends AminoMsg {
  readonly type: "desmos/MsgBlockUser";
  readonly value: {
    blocker: string;
    blocked: string;
    reason: string;
    subspace_id: Long;
  };
}

export interface AminoMsgUnblockUser extends AminoMsg {
  readonly type: "desmos/MsgUnblockUser";
  readonly value: {
    blocker: string;
    blocked: string;
    subspace_id: Long;
  };
}
