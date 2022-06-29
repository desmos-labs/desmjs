import { AminoMsg } from "@cosmjs/amino";
import Long from "long";
import {
  Entities,
  PostReference,
  ReplySetting,
} from "@desmoslabs/desmjs-types/desmos/posts/v1/models";
import { AminoAttachment } from "./types";

export interface AminoMsgCreatePost extends AminoMsg {
  readonly type: "desmos/MsgCreatePost";
  readonly value: {
    subspace_id: Long;
    section_id: number;
    external_id: string;
    text: string;
    entities?: Entities;
    attachments: AminoAttachment[];
    author: string;
    conversation_id: Long;
    reply_settings: ReplySetting;
    referenced_posts: PostReference[];
  };
}

export interface AminoMsgEditPost extends AminoMsg {
  readonly type: "desmos/MsgEditPost";
  readonly value: {
    subspace_id: Long;
    post_id: Long;
    text: string;
    entities?: Entities;
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
    content: AminoMsg;
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
