import { AminoConverter, AminoConverters } from "@cosmjs/stargate";
import {
  MsgAddPostAttachment,
  MsgAnswerPoll,
  MsgCreatePost,
  MsgDeletePost,
  MsgEditPost,
  MsgRemovePostAttachment,
} from "@desmoslabs/desmjs-types/desmos/posts/v2/msgs";
import {
  Entities,
  Media,
  Poll,
} from "@desmoslabs/desmjs-types/desmos/posts/v2/models";
import { Any } from "@desmoslabs/desmjs-types/google/protobuf/any";
import { assertDefinedAndNotNull } from "@cosmjs/utils";
import Long from "long";
import {
  AminoMsgAddPostAttachment,
  AminoMsgAnswerPoll,
  AminoMsgCreatePost,
  AminoMsgDeletePost,
  AminoMsgEditPost,
  AminoMsgRemovePostAttachment,
} from "./messages";
import { isAminoConverter } from "../../types";
import { AminoAttachment, AminoEntities, AminoMedia, AminoPoll } from "./types";
import { MediaTypeUrl, PollTypeUrl } from "../../const";

/**
 * Converts the given `Poll` into an `Any` instance so that it can be used within `MsgCreatePost` and `MsgAddPostAttachment`.
 * @param poll: The poll to be converted.
 */
export function pollToAny(poll: Poll): Any {
  return Any.fromPartial({
    typeUrl: PollTypeUrl,
    value: Poll.encode(poll).finish(),
  });
}

/**
 * Converts the given `Media` into an `Any` instance so that it can be used within `MsgCreatePost` and `MsgAddPostAttachment`.
 * @param media: The media to be converted.
 */
export function mediaToAny(media: Media): Any {
  return Any.fromPartial({
    typeUrl: MediaTypeUrl,
    value: Media.encode(media).finish(),
  });
}

export const attachmentConverters: AminoConverters = {
  "/desmos.posts.v2.Poll": {
    aminoType: "desmos/Poll",
    toAmino: (msg: Any): AminoPoll["value"] => {
      const poll = Poll.decode(msg.value);
      return {
        question: poll.question,
        provided_answers: poll.providedAnswers,
        end_date: poll.endDate,
        allows_multiple_answers: poll.allowsMultipleAnswers,
        allows_answer_edits: poll.allowsAnswerEdits,
        final_tally_results: poll.finalTallyResults,
      };
    },
    fromAmino: (msg: AminoPoll["value"]): Any =>
      pollToAny(
        Poll.fromPartial({
          question: msg.question,
          providedAnswers: msg.provided_answers,
          endDate: msg.end_date,
          allowsMultipleAnswers: msg.allows_multiple_answers,
          allowsAnswerEdits: msg.allows_answer_edits,
          finalTallyResults: msg.final_tally_results,
        })
      ),
  },
  "/desmos.posts.v2.Media": {
    aminoType: "desmos/Media",
    toAmino: (msg: Any): AminoMedia["value"] => {
      const media = Media.decode(msg.value);
      return {
        uri: media.uri,
        mime_type: media.mimeType,
      };
    },
    fromAmino: (msg: AminoMedia["value"]): Any =>
      mediaToAny(
        Media.fromPartial({
          uri: msg.uri,
          mimeType: msg.mime_type,
        })
      ),
  },
};

function convertAttachmentToAmino(attachment: Any): AminoAttachment {
  const converter = attachmentConverters[attachment.typeUrl] as AminoConverter;
  return {
    type: converter.aminoType,
    value: converter.toAmino(attachment),
  };
}

function convertAttachmentFromAmino(attachment: AminoAttachment): Any {
  const matches = Object.entries(attachmentConverters)
    .filter(isAminoConverter)
    .filter(([, { aminoType }]) => aminoType === attachment.type);
  const [, converter] = matches[0];
  return converter.fromAmino(attachment);
}

function convertEntitiesToAmino(entities: Entities): AminoEntities {
  return {
    hashtags: entities.hashtags,
    mentions: entities.mentions,
    urls: entities.urls.map((url) => ({
      start: url.start.toString(),
      end: url.end.toString(),
      url: url.url,
      display_url: url.displayUrl,
    })),
  };
}

function convertEntitiesFromAmino(entities: AminoEntities): Entities {
  return {
    hashtags: entities.hashtags,
    mentions: entities.mentions,
    urls: entities.urls.map((url) => ({
      start: Long.fromString(url.start),
      end: Long.fromString(url.end),
      url: url.url,
      displayUrl: url.display_url,
    })),
  };
}

/**
 * Creates all the Amino converters for the posts messages.
 */
export function createPostsConverters(): AminoConverters {
  return {
    "/desmos.posts.v2.MsgCreatePost": {
      aminoType: "desmos/MsgCreatePost",
      toAmino: (msg: MsgCreatePost): AminoMsgCreatePost["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        section_id: msg.sectionId,
        external_id: msg.externalId,
        text: msg.text,
        entities: msg.entities
          ? convertEntitiesToAmino(msg.entities)
          : undefined,
        tags: msg.tags,
        attachments: msg.attachments.map(convertAttachmentToAmino),
        author: msg.author,
        conversation_id: msg.conversationId.toString(),
        reply_settings: msg.replySettings,
        referenced_posts: msg.referencedPosts?.map((reference) => ({
          type: reference.type,
          post_id: reference.postId.toString(),
          position: reference.position.toString(),
        })),
      }),
      fromAmino: (msg: AminoMsgCreatePost["value"]): MsgCreatePost => ({
        subspaceId: Long.fromString(msg.subspace_id),
        sectionId: msg.section_id,
        externalId: msg.external_id,
        text: msg.text,
        entities: msg.entities
          ? convertEntitiesFromAmino(msg.entities)
          : undefined,
        tags: msg.tags,
        attachments: msg.attachments.map(convertAttachmentFromAmino),
        author: msg.author,
        conversationId: Long.fromString(msg.conversation_id),
        replySettings: msg.reply_settings,
        referencedPosts: msg.referenced_posts.map((reference) => ({
          type: reference.type,
          postId: Long.fromString(reference.post_id),
          position: Long.fromString(reference.position),
        })),
      }),
    },
    "/desmos.posts.v2.MsgEditPost": {
      aminoType: "desmos/MsgEditPost",
      toAmino: (msg: MsgEditPost): AminoMsgEditPost["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        post_id: msg.postId.toString(),
        text: msg.text,
        entities: msg.entities
          ? convertEntitiesToAmino(msg.entities)
          : undefined,
        tags: msg.tags,
        editor: msg.editor,
      }),
      fromAmino: (msg: AminoMsgEditPost["value"]): MsgEditPost => ({
        subspaceId: Long.fromString(msg.subspace_id),
        postId: Long.fromString(msg.post_id),
        text: msg.text,
        entities: msg.entities
          ? convertEntitiesFromAmino(msg.entities)
          : undefined,
        tags: msg.tags,
        editor: msg.editor,
      }),
    },
    "/desmos.posts.v2.MsgDeletePost": {
      aminoType: "desmos/MsgDeletePost",
      toAmino: (msg: MsgDeletePost): AminoMsgDeletePost["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        post_id: msg.postId.toString(),
        signer: msg.signer,
      }),
      fromAmino: (msg: AminoMsgDeletePost["value"]): MsgDeletePost => ({
        subspaceId: Long.fromString(msg.subspace_id),
        postId: Long.fromString(msg.post_id),
        signer: msg.signer,
      }),
    },
    "/desmos.posts.v2.MsgAddPostAttachment": {
      aminoType: "desmos/MsgAddPostAttachment",
      toAmino: (
        msg: MsgAddPostAttachment
      ): AminoMsgAddPostAttachment["value"] => {
        assertDefinedAndNotNull(msg.content, "attachment content not defined");
        return {
          subspace_id: msg.subspaceId.toString(),
          post_id: msg.postId.toString(),
          content: convertAttachmentToAmino(msg.content),
          editor: msg.editor,
        };
      },
      fromAmino: (
        msg: AminoMsgAddPostAttachment["value"]
      ): MsgAddPostAttachment => ({
        subspaceId: Long.fromString(msg.subspace_id),
        postId: Long.fromString(msg.post_id),
        content: convertAttachmentFromAmino(msg.content),
        editor: msg.editor,
      }),
    },
    "/desmos.posts.v2.MsgRemovePostAttachment": {
      aminoType: "desmos/MsgRemovePostAttachment",
      toAmino: (
        msg: MsgRemovePostAttachment
      ): AminoMsgRemovePostAttachment["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        post_id: msg.postId.toString(),
        attachment_id: msg.attachmentId,
        editor: msg.editor,
      }),
      fromAmino: (
        msg: AminoMsgRemovePostAttachment["value"]
      ): MsgRemovePostAttachment => ({
        subspaceId: Long.fromString(msg.subspace_id),
        postId: Long.fromString(msg.post_id),
        attachmentId: msg.attachment_id,
        editor: msg.editor,
      }),
    },
    "/desmos.posts.v2.MsgAnswerPoll": {
      aminoType: "desmos/MsgAnswerPoll",
      toAmino: (msg: MsgAnswerPoll): AminoMsgAnswerPoll["value"] => ({
        subspace_id: msg.subspaceId.toString(),
        post_id: msg.postId.toString(),
        poll_id: msg.pollId,
        answers_indexes: msg.answersIndexes,
        signer: msg.signer,
      }),
      fromAmino: (msg: AminoMsgAnswerPoll["value"]): MsgAnswerPoll => ({
        subspaceId: Long.fromString(msg.subspace_id),
        postId: Long.fromString(msg.post_id),
        pollId: msg.poll_id,
        answersIndexes: msg.answers_indexes,
        signer: msg.signer,
      }),
    },
  };
}

export default createPostsConverters;
