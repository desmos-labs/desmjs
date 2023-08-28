import { AminoConverters } from "@cosmjs/stargate";
import {
  MsgBurn,
  MsgCreateDenom,
  MsgMint,
  MsgSetDenomMetadata,
  MsgUpdateParams,
} from "@desmoslabs/desmjs-types/desmos/tokenfactory/v1/msgs";
import {
  MsgBurnAminoType,
  MsgBurnTypeUrl,
  MsgCreateDenomAminoType,
  MsgCreateDenomTypeUrl,
  MsgMintAminoType,
  MsgMintTypeUrl,
  MsgSetDenomMetadataAminoType,
  MsgSetDenomMetadataTypeUrl,
  MsgUpdateParamsAminoType,
  MsgUpdateParamsTypeUrl,
} from "./consts";

// eslint-disable-next-line import/prefer-default-export
export const AminoConverter: AminoConverters = {
  [MsgCreateDenomTypeUrl]: {
    aminoType: MsgCreateDenomAminoType,
    toAmino: MsgCreateDenom.toAmino,
    fromAmino: MsgCreateDenom.fromAmino,
  },
  [MsgMintTypeUrl]: {
    aminoType: MsgMintAminoType,
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino,
  },
  [MsgBurnTypeUrl]: {
    aminoType: MsgBurnAminoType,
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino,
  },
  [MsgSetDenomMetadataTypeUrl]: {
    aminoType: MsgSetDenomMetadataAminoType,
    toAmino: MsgSetDenomMetadata.toAmino,
    fromAmino: MsgSetDenomMetadata.fromAmino,
  },
  [MsgUpdateParamsTypeUrl]: {
    aminoType: MsgUpdateParamsAminoType,
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
};
