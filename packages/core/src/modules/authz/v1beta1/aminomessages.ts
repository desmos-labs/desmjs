import { AminoMsg } from "@cosmjs/amino";
import {
  GenericAuthorizationAminoType,
  MsgGrantAminoTpe,
  MsgRevokeAminoType,
} from "./consts";

export interface AminoGenericAuthorization extends AminoMsg {
  readonly type: typeof GenericAuthorizationAminoType;
  readonly value: {
    readonly msg: string;
  };
}

export interface AminoGrant {
  readonly expiration?: string;
  readonly authorization?: AminoMsg;
}

export interface AminoMsgGrant extends AminoMsg {
  readonly type: typeof MsgGrantAminoTpe;
  readonly value: {
    readonly grant?: AminoGrant;
    readonly grantee: string;
    readonly granter: string;
  };
}

export interface AminoMsgRevoke extends AminoMsg {
  readonly type: typeof MsgRevokeAminoType;
  readonly value: {
    readonly grantee: string;
    readonly granter: string;
  };
}
