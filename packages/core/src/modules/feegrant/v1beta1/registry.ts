import { GeneratedType } from "@cosmjs/proto-signing";
import {
  AllowedMsgAllowance,
  BasicAllowance,
  PeriodicAllowance,
} from "cosmjs-types/cosmos/feegrant/v1beta1/feegrant";
import {
  MsgGrantAllowance,
  MsgRevokeAllowance,
} from "cosmjs-types/cosmos/feegrant/v1beta1/tx";
import {
  AllowedMsgAllowanceTypeUrl,
  BasicAllowanceTypeUrl,
  MsgGrantAllowanceTypeUrl,
  MsgRevokeAllowanceTypeUrl,
  PeriodicAllowanceTypeUrl,
} from "./consts";

// eslint-disable-next-line import/prefer-default-export
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  // x/feegrant
  [BasicAllowanceTypeUrl, BasicAllowance],
  [PeriodicAllowanceTypeUrl, PeriodicAllowance],
  [AllowedMsgAllowanceTypeUrl, AllowedMsgAllowance],
  [MsgGrantAllowanceTypeUrl, MsgGrantAllowance],
  [MsgRevokeAllowanceTypeUrl, MsgRevokeAllowance],
];
