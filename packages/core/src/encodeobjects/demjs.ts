import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgAuthenticate } from "@desmoslabs/desmjs-types/desmjs/msgs";
import { MsgAuthenticateTypeUrl } from "../const";

export interface MsgAuthenticateEncodeObject extends EncodeObject {
  typeUrl: "/desmjs.v1.MsgAuthenticate";
  readonly value: MsgAuthenticate;
}

export function isMsgAuthenticateEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgAuthenticateEncodeObject {
  return (
    (encodeObject as MsgAuthenticateEncodeObject).typeUrl ===
    MsgAuthenticateTypeUrl
  );
}
