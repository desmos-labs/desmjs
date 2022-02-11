import {AminoMsg} from "@cosmjs/amino";

export interface AminoMsgSaveProfile extends AminoMsg {
    readonly type: "desmos/MsgSaveProfile"
    readonly value: {
        creator: string,
        dtag: string,
        nickname?: string,
        bio?: string,
        profile_picture?: string,
        cover_picture?: string,
    }
}

export interface AminoMsgDeleteProfile extends AminoMsg {
    readonly type: "desmos/MsgDeleteProfile"
    readonly value: {
        creator: string,
    }
}

export interface AminoMsgRequestDTagTransfer extends AminoMsg {
    readonly type: "desmos/MsgRequestDTagTransfer"
    readonly value: {
        receiver: string,
        sender: string,
    }
}

export interface AminoMsgAcceptDTagTransferRequest extends AminoMsg {
    readonly type: "desmos/AminoMsgAcceptDTagTransferRequest",
    readonly value: {
        new_dtag: string,
        sender: string,
        receiver: string,
    }
}

export interface AminoMsgRefuseDTagTransferRequest extends AminoMsg {
    readonly type: "desmos/AminoMsgRefuseDTagTransferRequest",
    readonly value: {
        sender: string,
        receiver: string,
    }
}

export interface AminoMsgCancelDTagTransferRequest extends AminoMsg {
    readonly type: "desmos/AminoMsgCancelDTagTransferRequest",
    readonly value: {
        sender: string,
        receiver: string,
    }
}

export interface AminoMsgLinkApplication extends AminoMsg {
    readonly type: "desmos/MsgLinkApplication",
    readonly value: {
        sender: string,
        link_data: {
            application: string,
            username: string,
        },
        call_data: string,
        source_channel: string,
        source_port: string,
        timeout_height: {
            revision_height: string,
            revision_number: string,
        },
        timeout_timestamp: string
    }
}

export interface AminoMsgUnlinkApplication extends AminoMsg {
    readonly type: "desmos/MsgUnlinkApplication",
    readonly value: {
        signer: string,
        application: string,
        username: string,
    }
}

export interface AminoMsgLinkChainAccount extends AminoMsg {
    readonly type: "desmos/MsgLinkChainAccount",
    readonly value: {
        signer: string,
        chain_address: {
            type: "desmos/Bech32Address",
            value: {
                prefix: string,
                value: string,
            },
        },
        chain_config: {
            name: string,
        },
        proof: {
            pub_key: {
                type: string,
                value: string,
            },
            signature: string,
            plain_text: string,
        },
    }
}

export interface AminoMsgUnlinkChainAccount extends AminoMsg {
    readonly type: "desmos/MsgUnlinkChainAccount",
    readonly value: {
        chain_name: string,
        owner: string,
        target: string,
    }
}

export interface AminoMsgCreateRelationship extends AminoMsg {
    readonly type: "desmos/MsgCreateRelationship",
    readonly value: {
        sender: string,
        receiver: string,
        subspace: string,
    }
}

export interface AminoMsgDeleteRelationship extends AminoMsg {
    readonly type: "desmos/MsgDeleteRelationship",
    readonly value: {
        subspace: string,
        user: string,
        counterparty: string,
    }
}

export interface AminoMsgBlockUser extends AminoMsg {
    readonly type: "desmos/MsgBlockUser",
    readonly value: {
        blocked: string
        blocker: string
        subspace: string
        reason: string
    }
}

export interface AminoMsgUnblockUser extends AminoMsg {
    readonly type: "desmos/MsgUnblockUser",
    readonly value: {
        subspace: string,
        blocked: string,
        blocker: string,
    }
}

