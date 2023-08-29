import { EncodeObject } from "@cosmjs/proto-signing";
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

export interface MsgCreateDenomEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgCreateDenomTypeUrl;
  readonly value: MsgCreateDenom;
}
export function isMsgCreateDenom(
  encodeObject: EncodeObject,
): encodeObject is MsgCreateDenomEncodeObject {
  return encodeObject.typeUrl === MsgCreateDenomTypeUrl;
}

export interface MsgMintEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgMintTypeUrl;
  readonly value: MsgMint;
}
export function isMsgMint(
  encodeObject: EncodeObject,
): encodeObject is MsgMintEncodeObject {
  return encodeObject.typeUrl === MsgMintTypeUrl;
}

export interface MsgBurnEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgBurnTypeUrl;
  readonly value: MsgBurn;
}
export function isMsgBurn(
  encodeObject: EncodeObject,
): encodeObject is MsgBurnEncodeObject {
  return encodeObject.typeUrl === MsgBurnTypeUrl;
}

export interface MsgSetDenomMetadataEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgSetDenomMetadataTypeUrl;
  readonly value: MsgSetDenomMetadata;
}
export function isMsgSetDenomMetadata(
  encodeObject: EncodeObject,
): encodeObject is MsgSetDenomMetadataEncodeObject {
  return encodeObject.typeUrl === MsgSetDenomMetadataTypeUrl;
}

export interface MsgUpdateParamsEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgUpdateParamsTypeUrl;
  readonly value: MsgUpdateParams;
}
export function isMsgUpdateParams(
  encodeObject: EncodeObject,
): encodeObject is MsgUpdateParamsEncodeObject {
  return encodeObject.typeUrl === MsgUpdateParamsTypeUrl;
}
