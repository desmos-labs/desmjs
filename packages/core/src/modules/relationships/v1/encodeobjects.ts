import { EncodeObject } from "@cosmjs/proto-signing";
import {
  MsgBlockUser,
  MsgCreateRelationship,
  MsgDeleteRelationship,
  MsgUnblockUser,
} from "@desmoslabs/desmjs-types/desmos/relationships/v1/msgs";
import {
  MsgBlockUserTypeUrl,
  MsgCreateRelationshipTypeUrl,
  MsgDeleteRelationshipTypeUrl,
  MsgUnblockUserTypeUrl,
} from "./consts";

export interface MsgCreateRelationshipEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgCreateRelationshipTypeUrl;
  readonly value: MsgCreateRelationship;
}

export function isMsgCreateRelationshipEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgCreateRelationshipEncodeObject {
  return (
    (encodeObject as MsgCreateRelationshipEncodeObject).typeUrl ===
    MsgCreateRelationshipTypeUrl
  );
}

export interface MsgDeleteRelationshipEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgDeleteRelationshipTypeUrl;
  readonly value: MsgDeleteRelationship;
}

export function isMsgDeleteRelationshipEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgDeleteRelationshipEncodeObject {
  return (
    (encodeObject as MsgDeleteRelationshipEncodeObject).typeUrl ===
    MsgDeleteRelationshipTypeUrl
  );
}

export interface MsgBlockUserEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgBlockUserTypeUrl;
  readonly value: MsgBlockUser;
}

export function isMsgBlockUserEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgBlockUserEncodeObject {
  return (
    (encodeObject as MsgBlockUserEncodeObject).typeUrl === MsgBlockUserTypeUrl
  );
}

export interface MsgUnblockUserEncodeObject extends EncodeObject {
  readonly typeUrl: typeof MsgUnblockUserTypeUrl;
  readonly value: MsgUnblockUser;
}

export function isMsgUnblockUserEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgUnblockUserEncodeObject {
  return (
    (encodeObject as MsgUnblockUserEncodeObject).typeUrl ===
    MsgUnblockUserTypeUrl
  );
}
