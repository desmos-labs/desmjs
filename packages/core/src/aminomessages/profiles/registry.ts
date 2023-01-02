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
import {
  MsgAcceptDTagTransferRequestTypeUrl,
  MsgCancelDTagTransferRequestTypeUrl,
  MsgDeleteProfileTypeUrl,
  MsgLinkApplicationTypeUrl,
  MsgLinkChainAccountTypeUrl,
  MsgRefuseDTagTransferRequestTypeUrl,
  MsgRequestDTagTransferTypeUrl,
  MsgSaveProfileTypeUrl,
  MsgUnlinkApplicationTypeUrl,
  MsgUnlinkChainAccountTypeUrl,
} from "../../const";

export const profilesRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  [MsgLinkApplicationTypeUrl, MsgLinkApplication],
  [MsgUnlinkApplicationTypeUrl, MsgUnlinkApplication],
  [MsgLinkChainAccountTypeUrl, MsgLinkChainAccount],
  [MsgUnlinkChainAccountTypeUrl, MsgUnlinkChainAccount],
  [MsgRequestDTagTransferTypeUrl, MsgRequestDTagTransfer],
  [MsgCancelDTagTransferRequestTypeUrl, MsgCancelDTagTransferRequest],
  [MsgAcceptDTagTransferRequestTypeUrl, MsgAcceptDTagTransferRequest],
  [MsgRefuseDTagTransferRequestTypeUrl, MsgRefuseDTagTransferRequest],
  [MsgSaveProfileTypeUrl, MsgSaveProfile],
  [MsgDeleteProfileTypeUrl, MsgDeleteProfile],
];

export default profilesRegistryTypes;
