import { AminoMsg } from "@cosmjs/amino";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
import { Duration } from "cosmjs-types/google/protobuf/duration";

export interface AminoBasicAllowance extends AminoMsg {
  readonly type: "cosmos-sdk/BasicAllowance";
  readonly value: {
    spend_limit: Coin[];
    expiration?: Timestamp;
  };
}

export interface AminoPeriodicAllowance extends AminoMsg {
  readonly type: "cosmos-sdk/AminoPeriodicAllowance";
  readonly value: {
    basic?: AminoBasicAllowance;
    period?: Duration;
    period_spend_limit: Coin[];
    period_can_spend: Coin[];
    period_reset?: Timestamp;
  };
}

export interface AminoAllowedMsgAllowance extends AminoMsg {
  readonly type: "cosmos-sdk/AminoAllowedMsgAllowance";
  readonly value: {
    allowance?: AminoMsg;
    allowed_messages: string[];
  };
}

export interface AminoMsgGrantAllowance extends AminoMsg {
  readonly type: "cosmos-sdk/MsgGrantAllowance";
  readonly value: {
    granter: string;
    grantee: string;
    allowance?: AminoMsg;
  };
}

export interface AminoMsgRevokeAllowance extends AminoMsg {
  readonly type: "cosmos-sdk/MsgRevokeAllowance";
  readonly value: {
    granter: string;
    grantee: string;
  };
}
