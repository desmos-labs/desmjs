import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgBlockUser,
  MsgCreateRelationship,
  MsgDeleteRelationship,
  MsgUnblockUser,
} from "@desmoslabs/desmjs-types/desmos/relationships/v1/msg_server";

export const relationshipsRegistryTypes: ReadonlyArray<
  [string, GeneratedType]
> = [
  ["/desmos.relationships.v1.MsgCreateRelationship", MsgCreateRelationship],
  ["/desmos.relationships.v1.MsgDeleteRelationship", MsgDeleteRelationship],
  ["/desmos.relationships.v1.MsgBlockUser", MsgBlockUser],
  ["/desmos.relationships.v1.MsgUnblockUser", MsgUnblockUser],
];

export default relationshipsRegistryTypes;
