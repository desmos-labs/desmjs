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

export const cosmosRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  // x/authz
  ["/cosmos.authz.v1beta1.GenericAuthorization", GenericAuthorization],
  ["/cosmos.authz.v1beta1.MsgGrant", MsgGrant],
  ["/cosmos.authz.v1beta1.MsgRevoke", MsgRevoke],

  // x/bank
  ["/cosmos.bank.v1beta1.SendAuthorization", SendAuthorization],

  // x/feegrant
  ["/cosmos.feegrant.v1beta1.BasicAllowance", BasicAllowance],
  ["/cosmos.feegrant.v1beta1.PeriodicAllowance", PeriodicAllowance],
  ["/cosmos.feegrant.v1beta1.AllowedMsgAllowance", AllowedMsgAllowance],
  ["/cosmos.feegrant.v1beta1.MsgGrantAllowance", MsgGrantAllowance],
  ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", MsgRevokeAllowance],

  // x/staking
  ["/cosmos.staking.v1beta1.StakeAuthorization", StakeAuthorization],
];

export default cosmosRegistryTypes;
