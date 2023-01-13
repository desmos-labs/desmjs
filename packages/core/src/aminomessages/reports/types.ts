import { AminoMsg } from "@cosmjs/amino";
import { PostTargetAminoType, UserTargetAminoType } from "../../const";

export interface AminoReportTarget extends AminoMsg {}

export interface AminoUserTarget extends AminoReportTarget {
  readonly type: typeof UserTargetAminoType;
  readonly value: {
    readonly user: string;
  };
}

export interface AminoPostTarget extends AminoReportTarget {
  readonly type: typeof PostTargetAminoType;
  readonly value: {
    readonly post_id: string;
  };
}
