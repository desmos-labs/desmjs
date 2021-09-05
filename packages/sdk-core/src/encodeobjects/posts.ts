import {EncodeObject} from "@cosmjs/proto-signing";
import {
    MsgCreatePost,
    MsgEditPost,
    MsgAddPostReaction,
    MsgRemovePostReaction,
    MsgAnswerPoll,
    MsgRegisterReaction,
    MsgReportPost,
} from "@desmos-labs/proto/desmos/posts/v1beta1/msgs"

export interface MsgCreatePostEncodeObject extends EncodeObject {
    readonly typeUrl: "/desmos.posts.v1beta1.MsgCreatePost",
    readonly value: MsgCreatePost,
}

export interface MsgEditPostEncodeObject extends EncodeObject {
    readonly typeUrl: "/desmos.posts.v1beta1.MsgEditPost",
    readonly value: MsgEditPost,
}

export interface MsgAddPostReactionEncodeObject extends EncodeObject {
    readonly typeUrl: "/desmos.posts.v1beta1.MsgAddPostReaction",
    readonly value: MsgAddPostReaction,
}

export interface MsgRemovePostReactionEncodeObject extends EncodeObject {
    readonly typeUrl: "/desmos.posts.v1beta1.MsgRemovePostReaction",
    readonly value: MsgRemovePostReaction,
}

export interface MsgAnswerPollEncodeObject extends EncodeObject {
    readonly typeUrl: "/desmos.posts.v1beta1.MsgAnswerPoll",
    readonly value: MsgAnswerPoll,
}

export interface MsgRegisterReactionEncodeObject extends EncodeObject {
    readonly typeUrl: "/desmos.posts.v1beta1.MsgRegisterReaction",
    readonly value: MsgRegisterReaction,
}

export interface MsgReportPostEncodeObject extends EncodeObject {
    readonly typeUrl: "/desmos.posts.v1beta1.MsgReportPost",
    readonly value: MsgReportPost,
}
