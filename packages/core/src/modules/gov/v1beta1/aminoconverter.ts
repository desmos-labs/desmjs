import { AminoConverter as AminoConverterGenerated } from "@desmoslabs/desmjs-types/cosmos/gov/v1beta1/tx.amino";
import { TextProposal } from "@desmoslabs/desmjs-types/cosmos/gov/v1beta1/gov";
import { TextProposalAminoType, TextProposalTypeUrl } from "./consts";

// eslint-disable-next-line import/prefer-default-export
export const AminoConverter = {
  ...AminoConverterGenerated,
  [TextProposalTypeUrl]: {
    aminoType: TextProposalAminoType,
    toAmino: TextProposal.toAmino,
    fromAmino: TextProposal.fromAmino,
  },
};
