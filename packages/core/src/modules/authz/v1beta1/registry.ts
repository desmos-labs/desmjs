import { GeneratedType } from "@cosmjs/proto-signing";
import { GenericAuthorization } from "cosmjs-types/cosmos/authz/v1beta1/authz";
import { MsgGrant, MsgRevoke } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import {
  GenericAuthorizationTypeUrl,
  MsgGrantTypeUrl,
  MsgRevokeTypeUrl,
} from "./consts";

// eslint-disable-next-line import/prefer-default-export
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  [GenericAuthorizationTypeUrl, GenericAuthorization],
  [MsgGrantTypeUrl, MsgGrant],
  [MsgRevokeTypeUrl, MsgRevoke],
];
