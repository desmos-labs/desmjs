import {AminoConverter} from "@cosmjs/stargate";
import {
    AminoMsgAcceptDTagTransferRequest,
    AminoMsgBlockUser,
    AminoMsgCancelDTagTransferRequest,
    AminoMsgCreateRelationship,
    AminoMsgDeleteProfile,
    AminoMsgDeleteRelationship,
    AminoMsgLinkApplication,
    AminoMsgLinkChainAccount,
    AminoMsgRefuseDTagTransferRequest,
    AminoMsgRequestDTagTransfer,
    AminoMsgSaveProfile,
    AminoMsgUnblockUser,
    AminoMsgUnlinkApplication,
    AminoMsgUnlinkChainAccount,
} from "./aminomessages";
import {MsgDeleteProfile, MsgSaveProfile} from "@desmos-labs/proto/desmos/profiles/v1beta1/msgs_profile";
import {
    MsgAcceptDTagTransferRequest,
    MsgCancelDTagTransferRequest,
    MsgRefuseDTagTransferRequest,
    MsgRequestDTagTransfer
} from "@desmos-labs/proto/desmos/profiles/v1beta1/msgs_dtag_requests";
import {MsgLinkApplication, MsgUnlinkApplication} from "@desmos-labs/proto/desmos/profiles/v1beta1/msgs_app_links";
import {MsgLinkChainAccount, MsgUnlinkChainAccount} from "@desmos-labs/proto/desmos/profiles/v1beta1/msgs_chain_links";
import {
    MsgBlockUser,
    MsgCreateRelationship,
    MsgDeleteRelationship,
    MsgUnblockUser
} from "@desmos-labs/proto/desmos/profiles/v1beta1/msgs_relationships";
import {Bech32Address, ChainConfig, Proof} from "@desmos-labs/proto/desmos/profiles/v1beta1/models_chain_links";
import {Any} from "cosmjs-types/google/protobuf/any";
import {fromBase64, toBase64} from "@cosmjs/encoding";
import {PubKey} from "cosmjs-types/cosmos/crypto/secp256k1/keys";
import Long from "long";

export const desmosTypes: Record<string, AminoConverter> = {
    // Profiles module
    "/desmos.profiles.v1beta1.MsgSaveProfile": {
        aminoType: "desmos/MsgSaveProfile",
        toAmino: (value: MsgSaveProfile): AminoMsgSaveProfile["value"] => {
            return{
                creator: value.creator,
                dtag: value.dtag,
                nickname: value.nickname,
                bio: value.bio,
                profile_picture: value.profilePicture,
                cover_picture: value.coverPicture,
            }
        },
        fromAmino: (msg: AminoMsgSaveProfile["value"]): MsgSaveProfile => {
            return {
                dtag: msg.dtag,
                creator: msg.creator,
                nickname: msg.nickname ?? "",
                bio: msg.bio ?? "",
                profilePicture: msg.profile_picture ?? "",
                coverPicture: msg.cover_picture ?? ""
            };
        }
    },
    "/desmos.profiles.v1beta1.MsgDeleteProfile": {
        aminoType: "desmos/MsgDeleteProfile",
        toAmino: (value: MsgDeleteProfile): AminoMsgDeleteProfile["value"] => {
            return {
                creator: value.creator,
            }
        },
        fromAmino: (msg: AminoMsgDeleteProfile["value"]): MsgDeleteProfile => {
            return {
                creator: msg.creator
            };
        }
    },
    "/desmos.profiles.v1beta1.MsgRequestDTagTransfer": {
        aminoType: "desmos/MsgRequestDTagTransfer",
        toAmino: ({receiver, sender}: MsgRequestDTagTransfer): AminoMsgRequestDTagTransfer["value"] => {
            return {
                receiver,
                sender,
            }
        },
        fromAmino: ({receiver, sender}: AminoMsgRequestDTagTransfer["value"]): MsgRequestDTagTransfer => {
            return {
                receiver,
                sender
            };
        }
    },
    "/desmos.profiles.v1beta1.MsgAcceptDTagTransferRequest": {
        aminoType: "desmos/MsgAcceptDTagTransferRequest",
        toAmino: ({newDtag, sender, receiver}: MsgAcceptDTagTransferRequest): AminoMsgAcceptDTagTransferRequest["value"] => {
            return {
                new_dtag: newDtag,
                sender,
                receiver
            }
        },
        fromAmino: ({new_dtag, sender, receiver}: AminoMsgAcceptDTagTransferRequest["value"]): MsgAcceptDTagTransferRequest => {
            return {
                newDtag: new_dtag,
                sender,
                receiver,
            }
        }
    },
    "/desmos.profiles.v1beta1.MsgRefuseDTagTransferRequest": {
        aminoType: "desmos/MsgRefuseDTagTransferRequest",
        toAmino: ({sender, receiver}: MsgRefuseDTagTransferRequest): AminoMsgRefuseDTagTransferRequest["value"] => {
            return {
                sender,
                receiver,
            }
        },
        fromAmino: ({sender, receiver}: AminoMsgRefuseDTagTransferRequest["value"]): MsgRefuseDTagTransferRequest => {
            return {
                sender,
                receiver,
            }
        }
    },
    "/desmos.profiles.v1beta1.MsgCancelDTagTransferRequest": {
        aminoType: "desmos/MsgCancelDTagTransferRequest",
        toAmino: ({sender, receiver}: MsgCancelDTagTransferRequest): AminoMsgCancelDTagTransferRequest["value"] => {
            return {
                sender,
                receiver,
            }
        },
        fromAmino: ({sender, receiver}: AminoMsgCancelDTagTransferRequest["value"]): MsgCancelDTagTransferRequest => {
            return {
                sender,
                receiver,
            }
        }
    },
    "/desmos.profiles.v1beta1.MsgLinkApplication": {
        aminoType: "desmos/MsgLinkApplication",
        toAmino: (msg: MsgLinkApplication): AminoMsgLinkApplication["value"] => {
            return {
                sender: msg.sender,
                link_data: {
                    application: msg.linkData!.application,
                    username: msg.linkData!.username,
                },
                call_data: msg.callData,
                source_channel: msg.sourceChannel,
                source_port: msg.sourcePort,
                timeout_height: {
                    revision_height: msg.timeoutHeight!.revisionHeight.toString(),
                    revision_number: msg.timeoutHeight!.revisionNumber.toString(),
                },
                timeout_timestamp: msg.timeoutTimestamp.toString(),
            };
        },
        fromAmino: (msg: AminoMsgLinkApplication["value"]): MsgLinkApplication => {
            return {
                sender: msg.sender,
                linkData: {
                    application: msg.link_data.application,
                    username: msg.link_data.username,
                },
                callData: msg.call_data,
                sourceChannel: msg.source_channel,
                sourcePort: msg.source_port,
                timeoutHeight: {
                    revisionHeight: Long.fromString(msg.timeout_height.revision_height),
                    revisionNumber: Long.fromString(msg.timeout_height.revision_number),
                },
                timeoutTimestamp: Long.fromString(msg.timeout_timestamp),
            };
        },
    },
    "/desmos.profiles.v1beta1.MsgUnlinkApplication": {
        aminoType: "desmos/MsgUnlinkApplication",
        toAmino: (msg: MsgUnlinkApplication): AminoMsgUnlinkApplication["value"] => {
            return {
                signer: msg.signer,
                application: msg.application,
                username: msg.username,
            }
        },
        fromAmino: (msg: AminoMsgUnlinkApplication["value"]): MsgUnlinkApplication => {
            return {
                signer: msg.signer,
                application: msg.application,
                username: msg.username,
            }
        },
    },
    "/desmos.profiles.v1beta1.MsgLinkChainAccount": {
        aminoType: "desmos/MsgLinkChainAccount",
        toAmino: (msg: MsgLinkChainAccount): AminoMsgLinkChainAccount["value"] => {
            const chainAddress = Bech32Address.decode(msg.chainAddress!.value);
            const pubKey = PubKey.decode(msg.proof!.pubKey!.value);

            return {
                signer: msg.signer,
                chain_address: {
                    prefix: chainAddress.prefix,
                    value: chainAddress.value,
                },
                chain_config: {
                    name: msg.chainConfig!.name,
                },
                proof: {
                    pub_key: {
                        value: toBase64(pubKey.key)
                    },
                    signature: msg.proof!.signature,
                    plain_text: msg.proof!.plainText,
                }
            }
        },
        fromAmino: (msg: AminoMsgLinkChainAccount["value"]): MsgLinkChainAccount => {
            const chainAddressBin = Bech32Address.encode({
                value: msg.chain_address.value,
                prefix: msg.chain_address.prefix
            }).finish();

            const chainAddress = Any.fromPartial({
                typeUrl: "/desmos.profiles.v1beta1.Bech32Address",
                value: chainAddressBin,
            })
            const chainConfig = ChainConfig.fromPartial({
                name: msg.chain_config.name
            });
            const proof = Proof.fromPartial({
                signature: msg.proof.signature,
                plainText: msg.proof.plain_text,
                pubKey: {
                    typeUrl: "/cosmos.crypto.secp256k1.PubKey",
                    value: PubKey.encode({
                        key: fromBase64(msg.proof.pub_key.value),
                    }).finish(),
                }
            })
            return {
                signer: msg.signer,
                chainAddress,
                chainConfig,
                proof
            }
        },
    },
    "/desmos.profiles.v1beta1.MsgUnlinkChainAccount": {
        aminoType: "desmos/MsgUnlinkChainAccount",
        toAmino: (msg: MsgUnlinkChainAccount): AminoMsgUnlinkChainAccount["value"] => {
            return {
                chain_name: msg.chainName,
                owner: msg.owner,
                target: msg.target
            }
        },
        fromAmino: (msg: AminoMsgUnlinkChainAccount["value"]): MsgUnlinkChainAccount => {
            return {
                chainName: msg.chain_name,
                owner: msg.owner,
                target: msg.target
            }
        },
    },
    "/desmos.profiles.v1beta1.MsgCreateRelationship": {
        aminoType: "desmos/MsgCreateRelationship",
        toAmino: (msg: MsgCreateRelationship): AminoMsgCreateRelationship["value"] => {
            return {
                sender: msg.sender,
                receiver: msg.receiver,
                subspace: msg.subspace
            }
        },
        fromAmino: (msg: AminoMsgCreateRelationship["value"]): MsgCreateRelationship => {
            return {
                sender: msg.sender,
                receiver: msg.receiver,
                subspace: msg.subspace
            }
        },
    },
    "/desmos.profiles.v1beta1.MsgDeleteRelationship": {
        aminoType: "desmos/MsgDeleteRelationship",
        toAmino: (msg: MsgDeleteRelationship): AminoMsgDeleteRelationship["value"] => {
            return {
                subspace: msg.subspace,
                user: msg.user,
                counterparty: msg.counterparty
            }
        },
        fromAmino: (msg: AminoMsgDeleteRelationship["value"]): MsgDeleteRelationship => {
            return {
                subspace: msg.subspace,
                user: msg.user,
                counterparty: msg.counterparty
            }
        },
    },
    "/desmos.profiles.v1beta1.MsgBlockUser": {
        aminoType: "desmos/MsgBlockUser",
        toAmino: (msg: MsgBlockUser): AminoMsgBlockUser["value"] => {
            return {
                blocked: msg.blocked,
                blocker: msg.blocker,
                subspace: msg.subspace,
                reason: msg.reason,
            }
        },
        fromAmino: (msg: AminoMsgBlockUser["value"]): MsgBlockUser => {
            return {
                blocked: msg.blocked,
                blocker: msg.blocker,
                subspace: msg.subspace,
                reason: msg.reason,
            }
        },
    },
    "/desmos.profiles.v1beta1.MsgUnblockUser": {
        aminoType: "desmos/MsgUnblockUser",
        toAmino: (msg: MsgUnblockUser): AminoMsgUnblockUser["value"] => {
            return {
                subspace: msg.subspace,
                blocked: msg.blocked,
                blocker: msg.blocker,
            }
        },
        fromAmino: (msg: AminoMsgUnblockUser["value"]): MsgUnblockUser => {
            return {
                subspace: msg.subspace,
                blocked: msg.blocked,
                blocker: msg.blocker
            }
        },
    },
}