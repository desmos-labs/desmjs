import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgLinkApplication,
  MsgUnlinkApplication,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_app_links";
import {
  MsgLinkChainAccount,
  MsgUnlinkChainAccount,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_chain_links";
import {
  MsgAcceptDTagTransferRequest,
  MsgCancelDTagTransferRequest,
  MsgRefuseDTagTransferRequest,
  MsgRequestDTagTransfer,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_dtag_requests";
import {
  MsgDeleteProfile,
  MsgSaveProfile,
} from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_profile";

export const profilesRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/desmos.profiles.v3.MsgLinkApplication", MsgLinkApplication],
  ["/desmos.profiles.v3.MsgUnlinkApplication", MsgUnlinkApplication],
  ["/desmos.profiles.v3.MsgLinkChainAccount", MsgLinkChainAccount],
  ["/desmos.profiles.v3.MsgUnlinkChainAccount", MsgUnlinkChainAccount],
  ["/desmos.profiles.v3.MsgRequestDTagTransfer", MsgRequestDTagTransfer],
  [
    "/desmos.profiles.v3.MsgCancelDTagTransferRequest",
    MsgCancelDTagTransferRequest,
  ],
  [
    "/desmos.profiles.v3.MsgAcceptDTagTransferRequest",
    MsgAcceptDTagTransferRequest,
  ],
  [
    "/desmos.profiles.v3.MsgRefuseDTagTransferRequest",
    MsgRefuseDTagTransferRequest,
  ],
  ["/desmos.profiles.v3.MsgSaveProfile", MsgSaveProfile],
  ["/desmos.profiles.v3.MsgDeleteProfile", MsgDeleteProfile],
];

export default profilesRegistryTypes;
