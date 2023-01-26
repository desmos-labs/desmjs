import { AminoMsg } from "@cosmjs/amino";
import { ReplySetting } from "@desmoslabs/desmjs-types/desmos/posts/v2/models";
import { AminoContent, AminoEntities, AminoPostReference } from "./types";
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
    subspace_id: string | undefined; // Undefined if 0
    section_id: number | undefined; // Undefined if 0
    external_id: string | undefined; // Undefined if empty
    text: string | undefined; // Undefined if empty
    entities: AminoEntities | undefined; // Undefined if empty
    tags: string[] | undefined; // Undefined if empty
    attachments: AminoContent[] | undefined; // Undefined if empty
    conversation_id: string | undefined; // Undefined if 0
    reply_settings: ReplySetting | undefined; // Undefined if zero
    referenced_posts: AminoPostReference[] | null; // Null if empty
    author: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgEditPost extends AminoMsg {
  readonly type: typeof MsgEditPostAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if empty
    post_id: string | undefined; // Undefined if empty
    text: string | undefined; // Undefined if empty
    entities: AminoEntities | undefined; // Undefined if empty
    tags: string[] | undefined; // Undefined if empty
    editor: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgDeletePost extends AminoMsg {
  readonly type: typeof MsgDeletePostAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    post_id: string | undefined; // Undefined if zero
    signer: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgAddPostAttachment extends AminoMsg {
  readonly type: typeof MsgAddPostAttachmentAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    post_id: string | undefined; // Undefined if zero
    content: AminoContent;
    editor: string | undefined; // Undefined if empty
  };
}

export interface AminoMsgRemovePostAttachment extends AminoMsg {
  readonly type: typeof MsgRemovePostAttachmentAminoType;
  readonly value: {
    subspace_id: string | undefined; // Undefined if zero
    post_id: string | undefined; // Undefined if zero
    attachment_id: number | undefined; // Undefined if zero
    editor: string | undefined; // Undefined if zero
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
