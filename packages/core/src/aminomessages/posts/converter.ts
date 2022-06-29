import { AminoConverter, AminoConverters } from "@cosmjs/stargate";
import {
  MsgAddPostAttachment,
  MsgAnswerPoll,
  MsgCreatePost,
  MsgDeletePost,
  MsgEditPost,
  MsgRemovePostAttachment,
} from "@desmoslabs/desmjs-types/desmos/posts/v1/msgs";
import { Media, Poll } from "@desmoslabs/desmjs-types/desmos/posts/v1/models";
import { Any } from "@desmoslabs/desmjs-types/google/protobuf/any";
import { assertDefinedAndNotNull } from "@cosmjs/utils";
import {
  AminoAttachment,
  AminoMedia,
  AminoMsgAddPostAttachment,
  AminoMsgAnswerPoll,
  AminoMsgCreatePost,
  AminoMsgDeletePost,
  AminoMsgEditPost,
  AminoMsgRemovePostAttachment,
  AminoPoll,
} from "./messages";

function isAminoConverter(
  converter: [string, AminoConverter | "not_supported_by_chain"]
): converter is [string, AminoConverter] {
  return typeof converter[1] !== "string";
}

export const attachmentConverters: AminoConverters = {
  "/desmos.posts.v1.Poll": {
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
    fromAmino: (msg: AminoPoll["value"]): Any => {
      return Any.fromPartial({
        typeUrl: "/desmos.posts.v1.Poll",
        value: Poll.encode(
          Poll.fromPartial({
            question: msg.question,
            providedAnswers: msg.provided_answers,
            endDate: msg.end_date,
            allowsMultipleAnswers: msg.allows_multiple_answers,
            allowsAnswerEdits: msg.allows_answer_edits,
            finalTallyResults: msg.final_tally_results,
          })
        ).finish(),
      });
    },
  },
  "/desmos.posts.v1.Media": {
    aminoType: "desmos/Media",
    toAmino: (msg: Any): AminoMedia["value"] => {
      const media = Media.decode(msg.value);
      return {
        uri: media.uri,
        mime_type: media.mimeType,
      };
    },
    fromAmino: (msg: AminoMedia["value"]): Any => {
      return Any.fromPartial({
        typeUrl: "/desmos.posts.v1.Media",
        value: Media.encode(
          Media.fromPartial({
            uri: msg.uri,
            mimeType: msg.mime_type,
          })
        ).finish(),
      });
    },
  },
};

export function convertAttachmentToAmino(attachment: Any): AminoAttachment {
  const converter = attachmentConverters[attachment.typeUrl] as AminoConverter;
  return {
    type: converter.aminoType,
    value: converter.toAmino(attachment),
  };
}

export function convertAttachmentFromAmino(attachment: AminoAttachment): Any {
  const matches = Object.entries(attachmentConverters)
    .filter(isAminoConverter)
    .filter(([, { aminoType }]) => aminoType === attachment.type);
  const [, converter] = matches[0];
  return converter.fromAmino(attachment);
}

export function createPostsConverters(): AminoConverters {
  return {
    "/desmos.posts.v1.MsgCreatePost": {
      aminoType: "desmos/MsgCreatePost",
      toAmino: (msg: MsgCreatePost): AminoMsgCreatePost["value"] => {
        return {
          subspace_id: msg.subspaceId,
          section_id: msg.sectionId,
          external_id: msg.externalId,
          text: msg.text,
          entities: msg.entities,
          attachments: msg.attachments.map(convertAttachmentToAmino),
          author: msg.author,
          conversation_id: msg.conversationId,
          reply_settings: msg.replySettings,
          referenced_posts: msg.referencedPosts,
        };
      },
      fromAmino: (msg: AminoMsgCreatePost["value"]): MsgCreatePost => {
        return {
          subspaceId: msg.subspace_id,
          sectionId: msg.section_id,
          externalId: msg.external_id,
          text: msg.text,
          entities: msg.entities,
          attachments: msg.attachments.map(convertAttachmentFromAmino),
          author: msg.author,
          conversationId: msg.conversation_id,
          replySettings: msg.reply_settings,
          referencedPosts: msg.referenced_posts,
        };
      },
    },
    "/desmos.posts.v1.MsgEditPost": {
      aminoType: "desmos/MsgEditPost",
      toAmino: (msg: MsgEditPost): AminoMsgEditPost["value"] => {
        return {
          subspace_id: msg.subspaceId,
          post_id: msg.postId,
          text: msg.text,
          entities: msg.entities,
          editor: msg.editor,
        };
      },
      fromAmino: (msg: AminoMsgEditPost["value"]): MsgEditPost => {
        return {
          subspaceId: msg.subspace_id,
          postId: msg.post_id,
          text: msg.text,
          entities: msg.entities,
          editor: msg.editor,
        };
      },
    },
    "/desmos.posts.v1.MsgDeletePost": {
      aminoType: "desmos/MsgDeletePost",
      toAmino: (msg: MsgDeletePost): AminoMsgDeletePost["value"] => {
        return {
          subspace_id: msg.subspaceId,
          post_id: msg.postId,
          signer: msg.signer,
        };
      },
      fromAmino: (msg: AminoMsgDeletePost["value"]): MsgDeletePost => {
        return {
          subspaceId: msg.subspace_id,
          postId: msg.post_id,
          signer: msg.signer,
        };
      },
    },
    "/desmos.posts.v1.MsgAddPostAttachment": {
      aminoType: "desmos/MsgAddPostAttachment",
      toAmino: (
        msg: MsgAddPostAttachment
      ): AminoMsgAddPostAttachment["value"] => {
        assertDefinedAndNotNull(msg.content, "missing attachment content");
        return {
          subspace_id: msg.subspaceId,
          post_id: msg.postId,
          content: convertAttachmentToAmino(msg.content),
          editor: msg.editor,
        };
      },
      fromAmino: (
        msg: AminoMsgAddPostAttachment["value"]
      ): MsgAddPostAttachment => {
        return {
          subspaceId: msg.subspace_id,
          postId: msg.post_id,
          content: convertAttachmentFromAmino(msg.content),
          editor: msg.editor,
        };
      },
    },
    "/desmos.posts.v1.MsgRemovePostAttachment": {
      aminoType: "desmos/MsgRemovePostAttachment",
      toAmino: (
        msg: MsgRemovePostAttachment
      ): AminoMsgRemovePostAttachment["value"] => {
        return {
          subspace_id: msg.subspaceId,
          post_id: msg.postId,
          attachment_id: msg.attachmentId,
          editor: msg.editor,
        };
      },
      fromAmino: (
        msg: AminoMsgRemovePostAttachment["value"]
      ): MsgRemovePostAttachment => {
        return {
          subspaceId: msg.subspace_id,
          postId: msg.post_id,
          attachmentId: msg.attachment_id,
          editor: msg.editor,
        };
      },
    },
    "/desmos.posts.v1.MsgAnswerPoll": {
      aminoType: "desmos/MsgAnswerPoll",
      toAmino: (msg: MsgAnswerPoll): AminoMsgAnswerPoll["value"] => {
        return {
          subspace_id: msg.subspaceId,
          post_id: msg.postId,
          poll_id: msg.pollId,
          answers_indexes: msg.answersIndexes,
          signer: msg.signer,
        };
      },
      fromAmino: (msg: AminoMsgAnswerPoll["value"]): MsgAnswerPoll => {
        return {
          subspaceId: msg.subspace_id,
          postId: msg.post_id,
          pollId: msg.poll_id,
          answersIndexes: msg.answers_indexes,
          signer: msg.signer,
        };
      },
    },
  };
}

export default createPostsConverters;
