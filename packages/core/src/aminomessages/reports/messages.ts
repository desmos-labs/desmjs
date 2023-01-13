import { AminoMsg } from "@cosmjs/amino";
import { AminoReportTarget } from "./types";
import {
  MsgAddReasonAminoType,
  MsgCreateReportAminoType,
  MsgDeleteReportAminoType,
  MsgRemoveReasonAminoType,
  MsgSupportStandardReasonAminoType,
} from "../../const";

export interface AminoMsgCreateReport extends AminoMsg {
  readonly type: typeof MsgCreateReportAminoType;
  readonly value: {
    subspace_id: string;
    reasons_ids: number[];
    message: string;
    reporter: string;
    target: AminoReportTarget;
  };
}

export interface AminoMsgDeleteReport extends AminoMsg {
  readonly type: typeof MsgDeleteReportAminoType;
  readonly value: {
    subspace_id: string;
    report_id: string;
    signer: string;
  };
}

export interface AminoMsgSupportStandardReason extends AminoMsg {
  readonly type: typeof MsgSupportStandardReasonAminoType;
  readonly value: {
    subspace_id: string;
    standard_reason_id: number;
    signer: string;
  };
}

export interface AminoMsgAddReason extends AminoMsg {
  readonly type: typeof MsgAddReasonAminoType;
  readonly value: {
    subspace_id: string;
    title: string;
    description: string;
    signer: string;
  };
}

export interface AminoMsgRemoveReason extends AminoMsg {
  readonly type: typeof MsgRemoveReasonAminoType;
  readonly value: {
    subspace_id: string;
    reason_id: number;
    signer: string;
  };
}
