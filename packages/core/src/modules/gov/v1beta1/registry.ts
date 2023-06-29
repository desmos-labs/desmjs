import { registry as generatedRegistry } from "@desmoslabs/desmjs-types/cosmos/gov/v1beta1/tx.registry";
import { TextProposal } from "@desmoslabs/desmjs-types/cosmos/gov/v1beta1/gov";
import { GeneratedType } from "@cosmjs/proto-signing";
import { TextProposalTypeUrl } from "./consts";

// eslint-disable-next-line import/prefer-default-export
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ...generatedRegistry,
  [TextProposalTypeUrl, TextProposal],
];
