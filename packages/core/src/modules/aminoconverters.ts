import {
  createBankAminoConverters,
  createDistributionAminoConverters,
  createIbcAminoConverters,
  createStakingAminoConverters,
  createVestingAminoConverters,
} from "@cosmjs/stargate";
import { createWasmAminoConverters } from "@cosmjs/cosmwasm-stargate";
import { AminoConverter as AuthzV1Beta1AminoConverter } from "./authz/v1beta1";
import { AminoConverter as BankV1Beta1AminoConverter } from "./bank/v1beta1";
import { AminoConverter as DesmJSV1AminoConverter } from "./desmjs/v1";
import { AminoConverter as FeegrantV1Beta1AminoConverter } from "./feegrant/v1beta1";
import { AminoConverter as GovV1Beta1AminoConverter } from "./gov/v1beta1";
import { AminoConverter as GovV1AminoConverter } from "./gov/v1";
import { AminoConverter as PostsV3AminoConverter } from "./posts/v3";
import { AminoConverter as ProfilesV3AminoConverter } from "./profiles/v3";
import { AminoConverter as ReactionsV1AminoConverter } from "./reactions/v1";
import { AminoConverter as RelationshipsV1AminoConverter } from "./relationships/v1";
import { AminoConverter as ReportsV1AminoConverter } from "./reports/v1";
import { AminoConverter as StakingV1Beta1AminoConverter } from "./staking/v1beta1";
import { AminoConverter as SubspacesV3AminoConverter } from "./subspaces/v3";

const DesmosAminoConverter = {
  ...createBankAminoConverters(),
  ...createDistributionAminoConverters(),
  ...createStakingAminoConverters(),
  ...createIbcAminoConverters(),
  ...createVestingAminoConverters(),
  ...createWasmAminoConverters(),

  ...AuthzV1Beta1AminoConverter,
  ...BankV1Beta1AminoConverter,
  ...DesmJSV1AminoConverter,
  ...FeegrantV1Beta1AminoConverter,
  ...GovV1Beta1AminoConverter,
  ...GovV1AminoConverter,
  ...PostsV3AminoConverter,
  ...ProfilesV3AminoConverter,
  ...ReactionsV1AminoConverter,
  ...RelationshipsV1AminoConverter,
  ...ReportsV1AminoConverter,
  ...StakingV1Beta1AminoConverter,
  ...SubspacesV3AminoConverter,
};

export default DesmosAminoConverter;
