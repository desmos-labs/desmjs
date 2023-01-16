import { AminoMsg } from "@cosmjs/amino";
import { ReplySetting } from "@desmoslabs/desmjs-types/desmos/posts/v2/models";
import { AminoAttachment, AminoEntities, AminoPostReference } from "./types";
import {
  MsgAddPostAttachmentAminoType,
  MsgAnswerPollAminoType,
  MsgCreatePostAminoType,
  MsgDeletePostAminoType,
  MsgEditPostAminoType,
  MsgRemovePostAttachmentAminoType,
} from "../../const";

export interface AminoMsgCreatePost extends AminoMsg {
  readonly type: typeof MsgCreatePostAminoType;
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
  readonly type: typeof MsgEditPostAminoType;
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
  readonly type: typeof MsgDeletePostAminoType;
  readonly value: {
    subspace_id: string;
    post_id: string;
    signer: string;
  };
}

export interface AminoMsgAddPostAttachment extends AminoMsg {
  readonly type: typeof MsgAddPostAttachmentAminoType;
  readonly value: {
    subspace_id: string;
    post_id: string;
    content: AminoAttachment;
    editor: string;
  };
}

export interface AminoMsgRemovePostAttachment extends AminoMsg {
  readonly type: typeof MsgRemovePostAttachmentAminoType;
  readonly value: {
    subspace_id: string;
    post_id: string;
    attachment_id: number;
    editor: string;
  };
}

export interface AminoMsgAnswerPoll extends AminoMsg {
  readonly type: typeof MsgAnswerPollAminoType;
  readonly value: {
    subspace_id: string;
    post_id: string;
    poll_id: number;
    answers_indexes: number[];
    signer: string;
  };
}
