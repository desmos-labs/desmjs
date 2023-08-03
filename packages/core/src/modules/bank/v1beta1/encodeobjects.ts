import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgMultiSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { MsgMultiSendTypeUrl } from "./consts";

export interface MsgMultiSendEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend";
  readonly value: MsgMultiSend;
}

export function isMsgMultiSendEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgMultiSendEncodeObject {
  return (
    (encodeObject as MsgMultiSendEncodeObject).typeUrl === MsgMultiSendTypeUrl
  );
}
