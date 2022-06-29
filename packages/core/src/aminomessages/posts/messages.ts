import { AminoMsg } from "@cosmjs/amino";
import Long from "long";
import { ReplySetting } from "@desmoslabs/desmjs-types/desmos/posts/v1/models";
import { AminoAttachment, AminoEntities, AminoPostReference } from "./types";

export interface AminoMsgCreatePost extends AminoMsg {
  readonly type: "desmos/MsgCreatePost";
  readonly value: {
    subspace_id: Long;
    section_id: number;
    external_id: string;
    text: string;
    entities?: AminoEntities;
    attachments: AminoAttachment[];
    author: string;
    conversation_id: Long;
    reply_settings: ReplySetting;
    referenced_posts: AminoPostReference[];
  };
}

export interface AminoMsgEditPost extends AminoMsg {
  readonly type: "desmos/MsgEditPost";
  readonly value: {
    subspace_id: Long;
    post_id: Long;
    text: string;
    entities?: AminoEntities;
    editor: string;
  };
}

export interface AminoMsgDeletePost extends AminoMsg {
  readonly type: "desmos/MsgDeletePost";
  readonly value: {
    subspace_id: Long;
    post_id: Long;
    signer: string;
  };
}

export interface AminoMsgAddPostAttachment extends AminoMsg {
  readonly type: "desmos/MsgAddPostAttachment";
  readonly value: {
    subspace_id: Long;
    post_id: Long;
    content: AminoAttachment;
    editor: string;
  };
}

export interface AminoMsgRemovePostAttachment extends AminoMsg {
  readonly type: "desmos/MsgRemovePostAttachment";
  readonly value: {
    subspace_id: Long;
    post_id: Long;
    attachment_id: number;
    editor: string;
  };
}

export interface AminoMsgAnswerPoll extends AminoMsg {
  readonly type: "desmos/MsgAnswerPoll";
  readonly value: {
    subspace_id: Long;
    post_id: Long;
    poll_id: number;
    answers_indexes: number[];
    signer: string;
  };
}
