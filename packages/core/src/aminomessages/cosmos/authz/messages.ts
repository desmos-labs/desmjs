import { AminoMsg } from "@cosmjs/amino";

export interface AminoGenericAuthorization extends AminoMsg {
  readonly type: "cosmos/GenericAuthorization";
  readonly value: {};
}

export interface AminoGrant {
  readonly expiration?: string;
  readonly authorization?: AminoMsg;
}

export interface AminoMsgGrant extends AminoMsg {
  readonly type: "cosmos/MsgGrant";
  readonly value: {
    readonly grant?: AminoGrant;
    readonly grantee: string;
    readonly granter: string;
  };
}

export interface AminoMsgRevoke extends AminoMsg {
  readonly type: "cosmos/MsgRevoke";
  readonly value: {
    readonly grantee: string;
    readonly granter: string;
  };
}
