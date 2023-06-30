import { EncodeObject } from "@cosmjs/proto-signing";
import {
  MsgGrantAllowance,
  MsgRevokeAllowance,
} from "cosmjs-types/cosmos/feegrant/v1beta1/tx";
import { MsgGrantAllowanceTypeUrl, MsgRevokeAllowanceTypeUrl } from "./consts";

export interface MsgGrantAllowanceEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgGrantAllowanceTypeUrl;
  readonly value: MsgGrantAllowance;
}

export function isMsgGrantAllowance(
  encodeObject: EncodeObject
): encodeObject is MsgGrantAllowanceEncodeObject {
  return (
    (encodeObject as MsgGrantAllowanceEncodeObject).typeUrl ===
    MsgGrantAllowanceTypeUrl
  );
}

export interface MsgRevokeAllowanceEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgRevokeAllowanceTypeUrl;
  readonly value: MsgRevokeAllowance;
}

export function isMsgRevokeAllowance(
  encodeObject: EncodeObject
): encodeObject is MsgRevokeAllowanceEncodeObject {
  return (
    (encodeObject as MsgRevokeAllowanceEncodeObject).typeUrl ===
    MsgRevokeAllowanceTypeUrl
  );
}
