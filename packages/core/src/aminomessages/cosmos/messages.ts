import { Coin } from "@cosmjs/amino";

export interface AminoGenericAuthorization {}

export interface AminoSendAuthorization {
  readonly spend_limit: Coin[];
}

export function isAminoSendAuthorization(
  value: AminoAuthorization
): value is AminoSendAuthorization {
  return (<AminoSendAuthorization>value).spend_limit !== undefined;
}

export type AminoAuthorization =
  | AminoGenericAuthorization
  | AminoSendAuthorization;

export interface AminoGrant {
  readonly expiration?: string;
  readonly authorization?: AminoAuthorization;
}

export interface AminoMsgGrant {
  readonly grant?: AminoGrant;
  readonly grantee: string;
  readonly granter: string;
}
