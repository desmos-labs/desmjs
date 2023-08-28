import { GeneratedType } from "@cosmjs/proto-signing";
import { defaultRegistryTypes } from "@cosmjs/stargate";
import { wasmTypes } from "@cosmjs/cosmwasm-stargate";
import { registry as AuthzV1Beta1Registry } from "./authz/v1beta1";
import { registry as BankV1Beta1Registry } from "./bank/v1beta1";
import { registry as DesmJSV1Registry } from "./desmjs/v1";
import { registry as FeegrantV1Beta1Registry } from "./feegrant/v1beta1";
import { registry as GovV1Beta1Registry } from "./gov/v1beta1";
import { registry as GovV1Registry } from "./gov/v1";
import { registry as PostsV3Registry } from "./posts/v3";
import { registry as ProfilesV3Registry } from "./profiles/v3";
import { registry as ReactionsV1Registry } from "./reactions/v1";
import { registry as RelationshipsV1Registry } from "./relationships/v1";
import { registry as ReportsV1Registry } from "./reports/v1";
import { registry as StakingV1Beta1Registry } from "./staking/v1beta1";
import { registry as SubspacesV3Registry } from "./subspaces/v3";
import { registry as TokenFactoryV1Registry } from "./tokenfactory/v1";

export const DesmosRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...defaultRegistryTypes,
  ...wasmTypes,

  ...AuthzV1Beta1Registry,
  ...BankV1Beta1Registry,
  ...DesmJSV1Registry,
  ...FeegrantV1Beta1Registry,
  ...GovV1Beta1Registry,
  ...GovV1Registry,
  ...PostsV3Registry,
  ...ProfilesV3Registry,
  ...ReactionsV1Registry,
  ...RelationshipsV1Registry,
  ...ReportsV1Registry,
  ...StakingV1Beta1Registry,
  ...SubspacesV3Registry,
  ...TokenFactoryV1Registry,
];

export default DesmosRegistry;
