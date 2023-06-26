/* eslint-disable */
import { MsgSaveProfile, MsgDeleteProfile } from "./msgs_profile";
import {
  MsgRequestDTagTransfer,
  MsgCancelDTagTransferRequest,
  MsgAcceptDTagTransferRequest,
  MsgRefuseDTagTransferRequest,
} from "./msgs_dtag_requests";
import {
  MsgLinkChainAccount,
  MsgUnlinkChainAccount,
  MsgSetDefaultExternalAddress,
} from "./msgs_chain_links";
import { MsgLinkApplication, MsgUnlinkApplication } from "./msgs_app_links";
import { MsgUpdateParams } from "./msgs_params";
export const AminoConverter = {
  "/desmos.profiles.v3.MsgSaveProfile": {
    aminoType: "/desmos.profiles.v3.MsgSaveProfile",
    toAmino: MsgSaveProfile.toAmino,
    fromAmino: MsgSaveProfile.fromAmino,
  },
  "/desmos.profiles.v3.MsgDeleteProfile": {
    aminoType: "/desmos.profiles.v3.MsgDeleteProfile",
    toAmino: MsgDeleteProfile.toAmino,
    fromAmino: MsgDeleteProfile.fromAmino,
  },
  "/desmos.profiles.v3.MsgRequestDTagTransfer": {
    aminoType: "/desmos.profiles.v3.MsgRequestDTagTransfer",
    toAmino: MsgRequestDTagTransfer.toAmino,
    fromAmino: MsgRequestDTagTransfer.fromAmino,
  },
  "/desmos.profiles.v3.MsgCancelDTagTransferRequest": {
    aminoType: "/desmos.profiles.v3.MsgCancelDTagTransferRequest",
    toAmino: MsgCancelDTagTransferRequest.toAmino,
    fromAmino: MsgCancelDTagTransferRequest.fromAmino,
  },
  "/desmos.profiles.v3.MsgAcceptDTagTransferRequest": {
    aminoType: "/desmos.profiles.v3.MsgAcceptDTagTransferRequest",
    toAmino: MsgAcceptDTagTransferRequest.toAmino,
    fromAmino: MsgAcceptDTagTransferRequest.fromAmino,
  },
  "/desmos.profiles.v3.MsgRefuseDTagTransferRequest": {
    aminoType: "/desmos.profiles.v3.MsgRefuseDTagTransferRequest",
    toAmino: MsgRefuseDTagTransferRequest.toAmino,
    fromAmino: MsgRefuseDTagTransferRequest.fromAmino,
  },
  "/desmos.profiles.v3.MsgLinkChainAccount": {
    aminoType: "/desmos.profiles.v3.MsgLinkChainAccount",
    toAmino: MsgLinkChainAccount.toAmino,
    fromAmino: MsgLinkChainAccount.fromAmino,
  },
  "/desmos.profiles.v3.MsgUnlinkChainAccount": {
    aminoType: "/desmos.profiles.v3.MsgUnlinkChainAccount",
    toAmino: MsgUnlinkChainAccount.toAmino,
    fromAmino: MsgUnlinkChainAccount.fromAmino,
  },
  "/desmos.profiles.v3.MsgSetDefaultExternalAddress": {
    aminoType: "/desmos.profiles.v3.MsgSetDefaultExternalAddress",
    toAmino: MsgSetDefaultExternalAddress.toAmino,
    fromAmino: MsgSetDefaultExternalAddress.fromAmino,
  },
  "/desmos.profiles.v3.MsgLinkApplication": {
    aminoType: "/desmos.profiles.v3.MsgLinkApplication",
    toAmino: MsgLinkApplication.toAmino,
    fromAmino: MsgLinkApplication.fromAmino,
  },
  "/desmos.profiles.v3.MsgUnlinkApplication": {
    aminoType: "/desmos.profiles.v3.MsgUnlinkApplication",
    toAmino: MsgUnlinkApplication.toAmino,
    fromAmino: MsgUnlinkApplication.fromAmino,
  },
  "/desmos.profiles.v3.MsgUpdateParams": {
    aminoType: "/desmos.profiles.v3.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
};
