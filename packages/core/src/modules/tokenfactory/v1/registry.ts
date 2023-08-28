import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgBurn,
  MsgCreateDenom,
  MsgMint,
  MsgSetDenomMetadata,
  MsgUpdateParams,
} from "@desmoslabs/desmjs-types/desmos/tokenfactory/v1/msgs";
import {
  MsgBurnTypeUrl,
  MsgCreateDenomTypeUrl,
  MsgMintTypeUrl,
  MsgSetDenomMetadataTypeUrl,
  MsgUpdateParamsTypeUrl,
} from "./consts";

// eslint-disable-next-line import/prefer-default-export
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  [MsgCreateDenomTypeUrl, MsgCreateDenom],
  [MsgMintTypeUrl, MsgMint],
  [MsgBurnTypeUrl, MsgBurn],
  [MsgSetDenomMetadataTypeUrl, MsgSetDenomMetadata],
  [MsgUpdateParamsTypeUrl, MsgUpdateParams],
];
