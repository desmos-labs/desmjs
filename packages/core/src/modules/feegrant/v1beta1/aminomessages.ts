import { AminoMsg, Coin } from "@cosmjs/amino";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
import { Duration } from "cosmjs-types/google/protobuf/duration";
import {
  AllowedMsgAllowanceAminoType,
  BasicAllowanceAminoType,
  MsgGrantAllowanceAminoType,
  MsgRevokeAllowanceAminoType,
  PeriodicAllowanceAminoType,
} from "./consts";

export interface AminoBasicAllowance extends AminoMsg {
  readonly type: typeof BasicAllowanceAminoType;
  readonly value: {
    spend_limit: Coin[];
    expiration?: Timestamp;
  };
}

export interface AminoPeriodicAllowance extends AminoMsg {
  readonly type: typeof PeriodicAllowanceAminoType;
  readonly value: {
    basic?: AminoBasicAllowance;
    period?: Duration;
    period_spend_limit: Coin[];
    period_can_spend: Coin[];
    period_reset?: Timestamp;
  };
}

export interface AminoAllowedMsgAllowance extends AminoMsg {
  readonly type: typeof AllowedMsgAllowanceAminoType;
  readonly value: {
    allowance?: AminoMsg;
    allowed_messages: string[];
  };
}

export interface AminoMsgGrantAllowance extends AminoMsg {
  readonly type: typeof MsgGrantAllowanceAminoType;
  readonly value: {
    granter: string;
    grantee: string;
    allowance?: AminoMsg;
  };
}

export interface AminoMsgRevokeAllowance extends AminoMsg {
  readonly type: typeof MsgRevokeAllowanceAminoType;
  readonly value: {
    granter: string;
    grantee: string;
  };
}
