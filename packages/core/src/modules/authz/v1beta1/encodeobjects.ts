import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgGrant, MsgRevoke } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import { MsgGrantTypeUrl, MsgRevokeTypeUrl } from "./consts";

export interface MsgGrantEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgGrantTypeUrl;
  readonly value: MsgGrant;
}

export function isMsgGrantEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgGrantEncodeObject {
  return (encodeObject as MsgGrantEncodeObject).typeUrl === MsgGrantTypeUrl;
}

export interface MsgRevokeEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgRevokeTypeUrl;
  readonly value: MsgRevoke;
}

export function isMsgRevoke(
  encodeObject: EncodeObject,
): encodeObject is MsgRevokeEncodeObject {
  return (encodeObject as MsgRevokeEncodeObject).typeUrl === MsgRevokeTypeUrl;
}
