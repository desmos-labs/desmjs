/* eslint-disable */
import {
  MsgCreateDenom,
  MsgMint,
  MsgBurn,
  MsgSetDenomMetadata,
  MsgUpdateParams,
} from "./msgs";
export const AminoConverter = {
  "/desmos.tokenfactory.v1.MsgCreateDenom": {
    aminoType: "desmos/MsgCreateDenom",
    toAmino: MsgCreateDenom.toAmino,
    fromAmino: MsgCreateDenom.fromAmino,
  },
  "/desmos.tokenfactory.v1.MsgMint": {
    aminoType: "desmos/MsgMint",
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino,
  },
  "/desmos.tokenfactory.v1.MsgBurn": {
    aminoType: "desmos/MsgBurn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino,
  },
  "/desmos.tokenfactory.v1.MsgSetDenomMetadata": {
    aminoType: "desmos/MsgSetDenomMetadata",
    toAmino: MsgSetDenomMetadata.toAmino,
    fromAmino: MsgSetDenomMetadata.fromAmino,
  },
  "/desmos.tokenfactory.v1.MsgUpdateParams": {
    aminoType: "desmos/x/tokenfactoy/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
};
