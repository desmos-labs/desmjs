/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
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
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ["/desmos.profiles.v3.MsgSaveProfile", MsgSaveProfile],
  ["/desmos.profiles.v3.MsgDeleteProfile", MsgDeleteProfile],
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
  ["/desmos.profiles.v3.MsgLinkChainAccount", MsgLinkChainAccount],
  ["/desmos.profiles.v3.MsgUnlinkChainAccount", MsgUnlinkChainAccount],
  [
    "/desmos.profiles.v3.MsgSetDefaultExternalAddress",
    MsgSetDefaultExternalAddress,
  ],
  ["/desmos.profiles.v3.MsgLinkApplication", MsgLinkApplication],
  ["/desmos.profiles.v3.MsgUnlinkApplication", MsgUnlinkApplication],
  ["/desmos.profiles.v3.MsgUpdateParams", MsgUpdateParams],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    saveProfile(value: MsgSaveProfile) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgSaveProfile",
        value: MsgSaveProfile.encode(value).finish(),
      };
    },
    deleteProfile(value: MsgDeleteProfile) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgDeleteProfile",
        value: MsgDeleteProfile.encode(value).finish(),
      };
    },
    requestDTagTransfer(value: MsgRequestDTagTransfer) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgRequestDTagTransfer",
        value: MsgRequestDTagTransfer.encode(value).finish(),
      };
    },
    cancelDTagTransferRequest(value: MsgCancelDTagTransferRequest) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgCancelDTagTransferRequest",
        value: MsgCancelDTagTransferRequest.encode(value).finish(),
      };
    },
    acceptDTagTransferRequest(value: MsgAcceptDTagTransferRequest) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgAcceptDTagTransferRequest",
        value: MsgAcceptDTagTransferRequest.encode(value).finish(),
      };
    },
    refuseDTagTransferRequest(value: MsgRefuseDTagTransferRequest) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgRefuseDTagTransferRequest",
        value: MsgRefuseDTagTransferRequest.encode(value).finish(),
      };
    },
    linkChainAccount(value: MsgLinkChainAccount) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgLinkChainAccount",
        value: MsgLinkChainAccount.encode(value).finish(),
      };
    },
    unlinkChainAccount(value: MsgUnlinkChainAccount) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgUnlinkChainAccount",
        value: MsgUnlinkChainAccount.encode(value).finish(),
      };
    },
    setDefaultExternalAddress(value: MsgSetDefaultExternalAddress) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgSetDefaultExternalAddress",
        value: MsgSetDefaultExternalAddress.encode(value).finish(),
      };
    },
    linkApplication(value: MsgLinkApplication) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgLinkApplication",
        value: MsgLinkApplication.encode(value).finish(),
      };
    },
    unlinkApplication(value: MsgUnlinkApplication) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgUnlinkApplication",
        value: MsgUnlinkApplication.encode(value).finish(),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    saveProfile(value: MsgSaveProfile) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgSaveProfile",
        value,
      };
    },
    deleteProfile(value: MsgDeleteProfile) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgDeleteProfile",
        value,
      };
    },
    requestDTagTransfer(value: MsgRequestDTagTransfer) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgRequestDTagTransfer",
        value,
      };
    },
    cancelDTagTransferRequest(value: MsgCancelDTagTransferRequest) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgCancelDTagTransferRequest",
        value,
      };
    },
    acceptDTagTransferRequest(value: MsgAcceptDTagTransferRequest) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgAcceptDTagTransferRequest",
        value,
      };
    },
    refuseDTagTransferRequest(value: MsgRefuseDTagTransferRequest) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgRefuseDTagTransferRequest",
        value,
      };
    },
    linkChainAccount(value: MsgLinkChainAccount) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgLinkChainAccount",
        value,
      };
    },
    unlinkChainAccount(value: MsgUnlinkChainAccount) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgUnlinkChainAccount",
        value,
      };
    },
    setDefaultExternalAddress(value: MsgSetDefaultExternalAddress) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgSetDefaultExternalAddress",
        value,
      };
    },
    linkApplication(value: MsgLinkApplication) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgLinkApplication",
        value,
      };
    },
    unlinkApplication(value: MsgUnlinkApplication) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgUnlinkApplication",
        value,
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgUpdateParams",
        value,
      };
    },
  },
  toJSON: {
    saveProfile(value: MsgSaveProfile) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgSaveProfile",
        value: MsgSaveProfile.toJSON(value),
      };
    },
    deleteProfile(value: MsgDeleteProfile) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgDeleteProfile",
        value: MsgDeleteProfile.toJSON(value),
      };
    },
    requestDTagTransfer(value: MsgRequestDTagTransfer) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgRequestDTagTransfer",
        value: MsgRequestDTagTransfer.toJSON(value),
      };
    },
    cancelDTagTransferRequest(value: MsgCancelDTagTransferRequest) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgCancelDTagTransferRequest",
        value: MsgCancelDTagTransferRequest.toJSON(value),
      };
    },
    acceptDTagTransferRequest(value: MsgAcceptDTagTransferRequest) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgAcceptDTagTransferRequest",
        value: MsgAcceptDTagTransferRequest.toJSON(value),
      };
    },
    refuseDTagTransferRequest(value: MsgRefuseDTagTransferRequest) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgRefuseDTagTransferRequest",
        value: MsgRefuseDTagTransferRequest.toJSON(value),
      };
    },
    linkChainAccount(value: MsgLinkChainAccount) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgLinkChainAccount",
        value: MsgLinkChainAccount.toJSON(value),
      };
    },
    unlinkChainAccount(value: MsgUnlinkChainAccount) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgUnlinkChainAccount",
        value: MsgUnlinkChainAccount.toJSON(value),
      };
    },
    setDefaultExternalAddress(value: MsgSetDefaultExternalAddress) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgSetDefaultExternalAddress",
        value: MsgSetDefaultExternalAddress.toJSON(value),
      };
    },
    linkApplication(value: MsgLinkApplication) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgLinkApplication",
        value: MsgLinkApplication.toJSON(value),
      };
    },
    unlinkApplication(value: MsgUnlinkApplication) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgUnlinkApplication",
        value: MsgUnlinkApplication.toJSON(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value),
      };
    },
  },
  fromJSON: {
    saveProfile(value: any) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgSaveProfile",
        value: MsgSaveProfile.fromJSON(value),
      };
    },
    deleteProfile(value: any) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgDeleteProfile",
        value: MsgDeleteProfile.fromJSON(value),
      };
    },
    requestDTagTransfer(value: any) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgRequestDTagTransfer",
        value: MsgRequestDTagTransfer.fromJSON(value),
      };
    },
    cancelDTagTransferRequest(value: any) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgCancelDTagTransferRequest",
        value: MsgCancelDTagTransferRequest.fromJSON(value),
      };
    },
    acceptDTagTransferRequest(value: any) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgAcceptDTagTransferRequest",
        value: MsgAcceptDTagTransferRequest.fromJSON(value),
      };
    },
    refuseDTagTransferRequest(value: any) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgRefuseDTagTransferRequest",
        value: MsgRefuseDTagTransferRequest.fromJSON(value),
      };
    },
    linkChainAccount(value: any) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgLinkChainAccount",
        value: MsgLinkChainAccount.fromJSON(value),
      };
    },
    unlinkChainAccount(value: any) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgUnlinkChainAccount",
        value: MsgUnlinkChainAccount.fromJSON(value),
      };
    },
    setDefaultExternalAddress(value: any) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgSetDefaultExternalAddress",
        value: MsgSetDefaultExternalAddress.fromJSON(value),
      };
    },
    linkApplication(value: any) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgLinkApplication",
        value: MsgLinkApplication.fromJSON(value),
      };
    },
    unlinkApplication(value: any) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgUnlinkApplication",
        value: MsgUnlinkApplication.fromJSON(value),
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value),
      };
    },
  },
  fromPartial: {
    saveProfile(value: MsgSaveProfile) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgSaveProfile",
        value: MsgSaveProfile.fromPartial(value),
      };
    },
    deleteProfile(value: MsgDeleteProfile) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgDeleteProfile",
        value: MsgDeleteProfile.fromPartial(value),
      };
    },
    requestDTagTransfer(value: MsgRequestDTagTransfer) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgRequestDTagTransfer",
        value: MsgRequestDTagTransfer.fromPartial(value),
      };
    },
    cancelDTagTransferRequest(value: MsgCancelDTagTransferRequest) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgCancelDTagTransferRequest",
        value: MsgCancelDTagTransferRequest.fromPartial(value),
      };
    },
    acceptDTagTransferRequest(value: MsgAcceptDTagTransferRequest) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgAcceptDTagTransferRequest",
        value: MsgAcceptDTagTransferRequest.fromPartial(value),
      };
    },
    refuseDTagTransferRequest(value: MsgRefuseDTagTransferRequest) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgRefuseDTagTransferRequest",
        value: MsgRefuseDTagTransferRequest.fromPartial(value),
      };
    },
    linkChainAccount(value: MsgLinkChainAccount) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgLinkChainAccount",
        value: MsgLinkChainAccount.fromPartial(value),
      };
    },
    unlinkChainAccount(value: MsgUnlinkChainAccount) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgUnlinkChainAccount",
        value: MsgUnlinkChainAccount.fromPartial(value),
      };
    },
    setDefaultExternalAddress(value: MsgSetDefaultExternalAddress) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgSetDefaultExternalAddress",
        value: MsgSetDefaultExternalAddress.fromPartial(value),
      };
    },
    linkApplication(value: MsgLinkApplication) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgLinkApplication",
        value: MsgLinkApplication.fromPartial(value),
      };
    },
    unlinkApplication(value: MsgUnlinkApplication) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgUnlinkApplication",
        value: MsgUnlinkApplication.fromPartial(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/desmos.profiles.v3.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value),
      };
    },
  },
};
