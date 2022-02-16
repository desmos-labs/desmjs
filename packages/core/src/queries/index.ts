import {AuthExtension, BankExtension, QueryClient, StakingExtension, TxExtension} from "@cosmjs/stargate";
import {AuthzExtension} from "src/queries/authz";
import {ProfilesExtension} from "src/queries/profiles";

export type DesmosQueryClient = QueryClient &
  AuthzExtension &
  AuthExtension &
  BankExtension &
  StakingExtension &
  TxExtension &
  ProfilesExtension

export * from "./authz";
export * from "./profiles";