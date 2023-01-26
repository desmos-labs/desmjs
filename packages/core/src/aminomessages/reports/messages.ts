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
    subspace_id: string | undefined; // Undefined if zero
    target: AminoReportTarget;
    reasons_ids: number[] | undefined; // Undefined if empty
    message: string | undefined; // Undefined if empty
    reporter: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgDeleteReport extends AminoMsg {
  readonly type: typeof MsgDeleteReportAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    report_id: string | undefined; // Undefined if zero
    signer: string | undefined; // Undefined if empty
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
    description: string | undefined; // Undefined if empty
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
