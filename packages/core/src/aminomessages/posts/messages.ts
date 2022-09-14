import { AminoMsg } from "@cosmjs/amino";
import { ReplySetting } from "@desmoslabs/desmjs-types/desmos/posts/v2/models";
import { AminoAttachment, AminoEntities, AminoPostReference } from "./types";

export interface AminoMsgCreatePost extends AminoMsg {
  readonly type: "desmos/MsgCreatePost";
  readonly value: {
    subspace_id: string;
    section_id: number;
    external_id: string;
    text: string;
    entities?: AminoEntities;
    tags: string[];
    attachments: AminoAttachment[];
    author: string;
    conversation_id: string;
    reply_settings: ReplySetting;
    referenced_posts: AminoPostReference[];
  };
}

export interface AminoMsgEditPost extends AminoMsg {
  readonly type: "desmos/MsgEditPost";
  readonly value: {
    subspace_id: string;
    post_id: string;
    text: string;
    entities?: AminoEntities;
    tags: string[];
    editor: string;
  };
}

export interface AminoMsgDeletePost extends AminoMsg {
  readonly type: "desmos/MsgDeletePost";
  readonly value: {
    subspace_id: string;
    post_id: string;
    signer: string;
  };
}

export interface AminoMsgAddPostAttachment extends AminoMsg {
  readonly type: "desmos/MsgAddPostAttachment";
  readonly value: {
    subspace_id: string;
    post_id: string;
    content: AminoAttachment;
    editor: string;
  };
}

export interface AminoMsgRemovePostAttachment extends AminoMsg {
  readonly type: "desmos/MsgRemovePostAttachment";
  readonly value: {
    subspace_id: string;
    post_id: string;
    attachment_id: number;
    editor: string;
  };
}

export interface AminoMsgAnswerPoll extends AminoMsg {
  readonly type: "desmos/MsgAnswerPoll";
  readonly value: {
    subspace_id: string;
    post_id: string;
    poll_id: number;
    answers_indexes: number[];
    signer: string;
  };
}
