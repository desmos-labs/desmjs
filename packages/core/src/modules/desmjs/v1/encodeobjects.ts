import { EncodeObject } from "@cosmjs/proto-signing";
import { MsgAuthenticate } from "@desmoslabs/desmjs-types/desmjs/msgs";
import { MsgAuthenticateTypeUrl } from "./consts";

export interface MsgAuthenticateEncodeObject extends EncodeObject {
  typeUrl: typeof MsgAuthenticateTypeUrl;
  readonly value: MsgAuthenticate;
}

export function isMsgAuthenticateEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgAuthenticateEncodeObject {
  return (
    (encodeObject as MsgAuthenticateEncodeObject).typeUrl ===
    MsgAuthenticateTypeUrl
  );
}
