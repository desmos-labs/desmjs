import {
  AminoConverters,
  createBankAminoConverters,
  createDistributionAminoConverters,
  createGovAminoConverters,
  createIbcAminoConverters,
  createStakingAminoConverters,
  defaultRegistryTypes,
} from "@cosmjs/stargate";
import { GeneratedType } from "@cosmjs/proto-signing";
import { createVestingAminoConverters } from "@cosmjs/stargate/build/modules";
import { createWasmAminoConverters } from "@cosmjs/cosmwasm-stargate";
import { wasmTypes } from "@cosmjs/cosmwasm-stargate/build/modules";
import {
  cosmosRegistryTypes,
  createAuthzConverters,
  createFeegrantConverters,
} from "./cosmos";
import { createProfilesConverters, profilesRegistryTypes } from "./profiles";
import { createDesmJSConverters, desmjsRegistryTypes } from "./desmjs";
import {
  createRelationshipsConverters,
  relationshipsRegistryTypes,
} from "./relationships";
import { createSubspacesConverters, subspacesRegistryTypes } from "./subspaces";
import { createPostsConverters, postsRegistryTypes } from "./posts";
import { createReactionsConverters, reactionsRegistryTypes } from "./reactions";
import { createReportsConverters, reportsRegistryTypes } from "./reports";
import GovV1Beta1AminoConverter from "../modules/gov/v1beta1/aminoconverter";
import GovV1AminoConverter from "../modules/gov/v1/aminoconverter";
import GovV1Registry from "../modules/gov/v1/registry";
import GovV1Beta1Registry from "../modules/gov/v1beta1/registry";

export * from "./cosmos/authz/messages";
export * from "./cosmos/bank/messages";
export * from "./cosmos/staking/messages";
export * from "./desmjs/messages";
export * from "./posts/messages";
export * from "./profiles/messages";
export * from "./relationships/messages";
export * from "./reports/messages";
export * from "./subspaces/messages";

export function createDesmosTypes(): AminoConverters {
  return {
    ...createBankAminoConverters(),
    ...createDistributionAminoConverters(),
    ...createGovAminoConverters(),
    ...GovV1Beta1AminoConverter,
    ...GovV1AminoConverter,
    ...createStakingAminoConverters(),
    ...createIbcAminoConverters(),
    ...createVestingAminoConverters(),

    // TODO: Replace with official ones when they are available
    ...createAuthzConverters(),
    ...createFeegrantConverters(),

    ...createDesmJSConverters(),
    ...createPostsConverters(),
    ...createProfilesConverters(),
    ...createReactionsConverters(),
    ...createRelationshipsConverters(),
    ...createReportsConverters(),
    ...createSubspacesConverters(),
    ...createWasmAminoConverters(),
  };
}

export const desmosRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ...defaultRegistryTypes,
  ...GovV1Beta1Registry,
  ...GovV1Registry,

  ...cosmosRegistryTypes,
  ...desmjsRegistryTypes,
  ...postsRegistryTypes,
  ...profilesRegistryTypes,
  ...reactionsRegistryTypes,
  ...relationshipsRegistryTypes,
  ...reportsRegistryTypes,
  ...subspacesRegistryTypes,
  ...wasmTypes,
];
