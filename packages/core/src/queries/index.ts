import {
  AuthExtension,
  BankExtension,
  IbcExtension,
  QueryClient,
  StakingExtension,
  TxExtension,
} from "@cosmjs/stargate";
import { AuthzExtension } from "./authz";
import { ProfilesExtension } from "./profiles";
import { RelationshipsExtension } from "./relationships";
import { SubspacesExtension } from "./subspaces";
import { FeesExtension } from "./fees";
import { SupplyExtension } from "./supply";
import { PostsExtension } from "./posts";
import { ReactionsExtension } from "./reactions";
import { ReportsExtension } from "./reports";
import {WasmExtension} from "@cosmjs/cosmwasm-stargate";

export * from "./authz";
export * from "./fees";
export * from "./posts";
export * from "./profiles";
export * from "./reactions";
export * from "./relationships";
export * from "./reports";
export * from "./subspaces";
export * from "./supply";

export type DesmosQueryClient = QueryClient &
  AuthzExtension &
  AuthExtension &
  BankExtension &
  StakingExtension &
  TxExtension &
  ProfilesExtension &
  RelationshipsExtension &
  SubspacesExtension &
  PostsExtension &
  ReactionsExtension &
  ReportsExtension &
  FeesExtension &
  SupplyExtension &
  WasmExtension &
  IbcExtension;
