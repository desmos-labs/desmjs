import { EncodeObject } from "@cosmjs/proto-signing";
import {
  MsgBlockUser,
  MsgCreateRelationship,
  MsgDeleteRelationship,
  MsgUnblockUser,
} from "@desmoslabs/desmjs-types/desmos/relationships/v1/msgs";

export interface MsgCreateRelationshipEncodeObject extends EncodeObject {
  typeUrl: "/desmos.relationships.v1.MsgCreateRelationship";
  readonly value: MsgCreateRelationship;
}

export function isMsgCreateRelationshipEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgCreateRelationshipEncodeObject {
  return (
    (encodeObject as MsgCreateRelationshipEncodeObject).typeUrl ===
    "/desmos.relationships.v1.MsgCreateRelationship"
  );
}

export interface MsgDeleteRelationshipEncodeObject extends EncodeObject {
  typeUrl: "/desmos.relationships.v1.MsgDeleteRelationship";
  readonly value: MsgDeleteRelationship;
}

export function isMsgDeleteRelationshipEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgDeleteRelationshipEncodeObject {
  return (
    (encodeObject as MsgDeleteRelationshipEncodeObject).typeUrl ===
    "/desmos.relationships.v1.MsgDeleteRelationship"
  );
}

export interface MsgBlockUserEncodeObject extends EncodeObject {
  typeUrl: "/desmos.relationships.v1.MsgBlockUser";
  readonly value: MsgBlockUser;
}

export function isMsgBlockUserEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgBlockUserEncodeObject {
  return (
    (encodeObject as MsgBlockUserEncodeObject).typeUrl ===
    "/desmos.relationships.v1.MsgBlockUser"
  );
}

export interface MsgUnblockUserEncodeObject extends EncodeObject {
  typeUrl: "/desmos.relationships.v1.MsgUnblockUser";
  readonly value: MsgUnblockUser;
}

export function isMsgUnblockUserEncodeObject(
  encodeObject: EncodeObject
): encodeObject is MsgUnblockUserEncodeObject {
  return (
    (encodeObject as MsgUnblockUserEncodeObject).typeUrl ===
    "/desmos.relationships.v1.MsgUnblockUser"
  );
}
