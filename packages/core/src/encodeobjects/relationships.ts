import { EncodeObject } from "@cosmjs/proto-signing";
import {
  MsgBlockUser,
  MsgCreateRelationship,
  MsgDeleteRelationship,
  MsgUnblockUser,
} from "@desmoslabs/desmjs-types/desmos/relationships/v1/msg_server";

export interface MsgCreateRelationshipEncodeObject extends EncodeObject {
  typeUrl: "/desmos.relationships.v1.MsgCreateRelationship";
  readonly value: Partial<MsgCreateRelationship>;
}

export interface MsgDeleteRelationshipEncodeObject extends EncodeObject {
  typeUrl: "/desmos.relationships.v1.MsgDeleteRelationship";
  readonly value: Partial<MsgDeleteRelationship>;
}

export interface MsgBlockUserEncodeObject extends EncodeObject {
  typeUrl: "/desmos.relationships.v1.MsgBlockUser";
  readonly value: Partial<MsgBlockUser>;
}

export interface MsgUnblockUserEncodeObject extends EncodeObject {
  typeUrl: "/desmos.relationships.v1.MsgUnblockUser";
  readonly value: Partial<MsgUnblockUser>;
}
