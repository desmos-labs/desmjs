import {AuthExtension, BankExtension, QueryClient, StakingExtension, TxExtension} from "@cosmjs/stargate";
import {AuthzExtension} from "./authz";
import {ProfilesExtension} from "./profiles";

export type DesmosQueryClient = QueryClient &
  AuthzExtension &
  AuthExtension &
  BankExtension &
  StakingExtension &
  TxExtension &
  ProfilesExtension

export * from "./authz";
export * from "./profiles";