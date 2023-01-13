import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgGrant, MsgRevoke } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import {
  MsgGrantAllowance,
  MsgRevokeAllowance,
} from "cosmjs-types/cosmos/feegrant/v1beta1/tx";
import {
  MsgGrantAllowanceTypeUrl,
  MsgGrantTypeUrl,
  MsgRevokeAllowanceTypeUrl,
  MsgRevokeTypeUrl,
} from "../const";

export interface MsgGrantEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.authz.v1beta1.MsgGrant";
  readonly value: MsgGrant;
}

export function isMsgGrantEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgGrantEncodeObject {
  return (encodeObject as MsgGrantEncodeObject).typeUrl === MsgGrantTypeUrl;
}

export interface MsgRevokeEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.authz.v1beta1.MsgRevoke";
  readonly value: MsgRevoke;
}

export function isMsgRevoke(
  encodeObject: EncodeObject
): encodeObject is MsgRevokeEncodeObject {
  return (encodeObject as MsgRevokeEncodeObject).typeUrl === MsgRevokeTypeUrl;
}

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
