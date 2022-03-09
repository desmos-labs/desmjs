import {
  MsgLinkApplication,
  MsgUnlinkApplication,
} from "@desmoslabs/desmjs-types/desmos/profiles/v1beta1/msgs_app_links";
import {
  MsgLinkChainAccount,
  MsgUnlinkChainAccount,
} from "@desmoslabs/desmjs-types/desmos/profiles/v1beta1/msgs_chain_links";
import {
  MsgAcceptDTagTransferRequest,
  MsgCancelDTagTransferRequest,
  MsgRefuseDTagTransferRequest,
  MsgRequestDTagTransfer,
} from "@desmoslabs/desmjs-types/desmos/profiles/v1beta1/msgs_dtag_requests";
import {
  MsgDeleteProfile,
  MsgSaveProfile,
} from "@desmoslabs/desmjs-types/desmos/profiles/v1beta1/msgs_profile";
import {
  MsgBlockUser,
  MsgCreateRelationship,
  MsgDeleteRelationship,
  MsgUnblockUser,
} from "@desmoslabs/desmjs-types/desmos/profiles/v1beta1/msgs_relationships";
import { GeneratedType } from "@cosmjs/proto-signing";

export const profilesRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/desmos.profiles.v1beta1.MsgLinkApplication", MsgLinkApplication],
  ["/desmos.profiles.v1beta1.MsgUnlinkApplication", MsgUnlinkApplication],
  ["/desmos.profiles.v1beta1.MsgLinkChainAccount", MsgLinkChainAccount],
  ["/desmos.profiles.v1beta1.MsgUnlinkChainAccount", MsgUnlinkChainAccount],
  ["/desmos.profiles.v1beta1.MsgRequestDTagTransfer", MsgRequestDTagTransfer],
  [
    "/desmos.profiles.v1beta1.MsgCancelDTagTransferRequest",
    MsgCancelDTagTransferRequest,
  ],
  [
    "/desmos.profiles.v1beta1.MsgAcceptDTagTransferRequest",
    MsgAcceptDTagTransferRequest,
  ],
  [
    "/desmos.profiles.v1beta1.MsgRefuseDTagTransferRequest",
    MsgRefuseDTagTransferRequest,
  ],
  ["/desmos.profiles.v1beta1.MsgSaveProfile", MsgSaveProfile],
  ["/desmos.profiles.v1beta1.MsgDeleteProfile", MsgDeleteProfile],
  ["/desmos.profiles.v1beta1.MsgCreateRelationship", MsgCreateRelationship],
  ["/desmos.profiles.v1beta1.MsgDeleteRelationship", MsgDeleteRelationship],
  ["/desmos.profiles.v1beta1.MsgBlockUser", MsgBlockUser],
  ["/desmos.profiles.v1beta1.MsgUnblockUser", MsgUnblockUser],
];

export default profilesRegistryTypes;
