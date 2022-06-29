import { Long } from "long";
import { AminoMsg } from "@cosmjs/amino";

export interface AminoReportTarget extends AminoMsg {}

export interface AminoUserTarget extends AminoReportTarget {
  readonly type: "desmos/UserTarget";
  readonly value: {
    readonly user: string;
  };
}

export interface AminoPostTarget extends AminoReportTarget {
  readonly type: "desmos/PostTarget";
  readonly value: {
    readonly post_id: Long;
  };
}
