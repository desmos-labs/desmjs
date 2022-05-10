import {
  AminoConverters,
  createBankAminoConverters,
  createDistributionAminoConverters,
  createFreegrantAminoConverters,
  createGovAminoConverters,
  createIbcAminoConverters,
  createStakingAminoConverters,
  defaultRegistryTypes,
} from "@cosmjs/stargate";
import { GeneratedType } from "@cosmjs/proto-signing";
import { createVestingAminoConverters } from "@cosmjs/stargate/build/modules";
import { cosmosRegistryTypes, createCosmosConverters } from "./cosmos";
import { createProfilesConverters, profilesRegistryTypes } from "./profiles";
import { createDesmJSConverters, desmjsRegistryTypes } from "./desmjs";

export * from "./cosmos/messages";
export * from "./profiles/messages";
export * from "./relationships/messages";
export * from "./subspaces/messages";

export function createDesmosTypes(prefix: string): AminoConverters {
  return {
    // TODO: Use this once they are implemented properly
    // ...createAuthzAminoConverters(),

    ...createBankAminoConverters(),
    ...createDistributionAminoConverters(),
    ...createGovAminoConverters(),
    ...createStakingAminoConverters(prefix),
    ...createIbcAminoConverters(),
    ...createFreegrantAminoConverters(),
    ...createVestingAminoConverters(),

    ...createCosmosConverters(),
    ...createDesmJSConverters(),
    ...createProfilesConverters(),
    ...createRelationshipsConverters(),
    ...createSubspacesConverters(),
  };
}

export const desmosRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ...defaultRegistryTypes,

  ...cosmosRegistryTypes,
  ...desmjsRegistryTypes,
  ...profilesRegistryTypes,
  ...relationshipsRegistryTypes,
  ...subspacesRegistryTypes,
];
