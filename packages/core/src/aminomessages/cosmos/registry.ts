import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgGrant, MsgRevoke } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import { GenericAuthorization } from "cosmjs-types/cosmos/authz/v1beta1/authz";
import { SendAuthorization } from "cosmjs-types/cosmos/bank/v1beta1/authz";
import { StakeAuthorization } from "cosmjs-types/cosmos/staking/v1beta1/authz";
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
  GenericAuthorizationTypeUrl,
  MsgGrantAllowanceTypeUrl,
  MsgGrantTypeUrl,
  MsgRevokeAllowanceTypeUrl,
  MsgRevokeTypeUrl,
  PeriodicAllowanceTypeUrl,
  StakeAuthorizationTypeUrl,
} from "../../const";
import SendAuthorizationTypeUrl from "../../const/cosmos/bank";

export const cosmosRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  // x/authz
  [GenericAuthorizationTypeUrl, GenericAuthorization],
  [MsgGrantTypeUrl, MsgGrant],
  [MsgRevokeTypeUrl, MsgRevoke],

  // x/bank
  [SendAuthorizationTypeUrl, SendAuthorization],

  // x/feegrant
  [BasicAllowanceTypeUrl, BasicAllowance],
  [PeriodicAllowanceTypeUrl, PeriodicAllowance],
  [AllowedMsgAllowanceTypeUrl, AllowedMsgAllowance],
  [MsgGrantAllowanceTypeUrl, MsgGrantAllowance],
  [MsgRevokeAllowanceTypeUrl, MsgRevokeAllowance],

  // x/staking
  [StakeAuthorizationTypeUrl, StakeAuthorization],
];

export default cosmosRegistryTypes;
