import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgGrant } from "cosmjs-types/cosmos/authz/v1beta1/tx";

export interface MsgGrantEncodeObject extends EncodeObject {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrant";
  readonly value: MsgGrant;
}

export function isMsgGrantEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgGrantEncodeObject {
  return (
    (encodeObject as MsgGrantEncodeObject).typeUrl ===
    "/cosmos.authz.v1beta1.MsgGrant"
  );
}
