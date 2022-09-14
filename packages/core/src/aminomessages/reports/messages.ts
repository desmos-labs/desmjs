import { AminoMsg } from "@cosmjs/amino";
import { AminoReportTarget } from "./types";

export interface AminoMsgCreateReport extends AminoMsg {
  readonly type: "desmos/MsgCreateReport";
  readonly value: {
    subspace_id: string;
    reasons_ids: number[];
    message: string;
    reporter: string;
    target: AminoReportTarget;
  };
}

export interface AminoMsgDeleteReport extends AminoMsg {
  readonly type: "desmos/MsgDeleteReport";
  readonly value: {
    subspace_id: string;
    report_id: string;
    signer: string;
  };
}

export interface AminoMsgSupportStandardReason extends AminoMsg {
  readonly type: "desmos/MsgSupportStandardReason";
  readonly value: {
    subspace_id: string;
    standard_reason_id: number;
    signer: string;
  };
}

export interface AminoMsgAddReason extends AminoMsg {
  readonly type: "desmos/MsgAddReason";
  readonly value: {
    subspace_id: string;
    title: string;
    description: string;
    signer: string;
  };
}

export interface AminoMsgRemoveReason extends AminoMsg {
  readonly type: "desmos/MsgRemoveReason";
  readonly value: {
    subspace_id: string;
    reason_id: number;
    signer: string;
  };
}
