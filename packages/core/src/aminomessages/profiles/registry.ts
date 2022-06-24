import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgLinkApplication,
  MsgUnlinkApplication,
} from "@desmoslabs/desmjs-types/desmos/profiles/v2/msgs_app_links";
import {
  MsgLinkChainAccount,
  MsgUnlinkChainAccount,
} from "@desmoslabs/desmjs-types/desmos/profiles/v2/msgs_chain_links";
import {
  MsgAcceptDTagTransferRequest,
  MsgCancelDTagTransferRequest,
  MsgRefuseDTagTransferRequest,
  MsgRequestDTagTransfer,
} from "@desmoslabs/desmjs-types/desmos/profiles/v2/msgs_dtag_requests";
import {
  MsgDeleteProfile,
  MsgSaveProfile,
} from "@desmoslabs/desmjs-types/desmos/profiles/v2/msgs_profile";

export const profilesRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/desmos.profiles.v2.MsgLinkApplication", MsgLinkApplication],
  ["/desmos.profiles.v2.MsgUnlinkApplication", MsgUnlinkApplication],
  ["/desmos.profiles.v2.MsgLinkChainAccount", MsgLinkChainAccount],
  ["/desmos.profiles.v2.MsgUnlinkChainAccount", MsgUnlinkChainAccount],
  ["/desmos.profiles.v2.MsgRequestDTagTransfer", MsgRequestDTagTransfer],
  [
    "/desmos.profiles.v2.MsgCancelDTagTransferRequest",
    MsgCancelDTagTransferRequest,
  ],
  [
    "/desmos.profiles.v2.MsgAcceptDTagTransferRequest",
    MsgAcceptDTagTransferRequest,
  ],
  [
    "/desmos.profiles.v2.MsgRefuseDTagTransferRequest",
    MsgRefuseDTagTransferRequest,
  ],
  ["/desmos.profiles.v2.MsgSaveProfile", MsgSaveProfile],
  ["/desmos.profiles.v2.MsgDeleteProfile", MsgDeleteProfile],
];

export default profilesRegistryTypes;
