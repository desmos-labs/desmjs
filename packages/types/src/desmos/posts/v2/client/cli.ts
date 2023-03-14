/* eslint-disable */
import {
  Entities,
  ReplySetting,
  PostReference,
  replySettingFromJSON,
  replySettingToJSON,
} from "../models";
import { Any } from "../../../../google/protobuf/any";
import { Long, isSet, DeepPartial, Exact } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.posts.v2.client";
/**
 * CreatePostJSON contains the data that can be specified when creating a Post
 * using the CLi command
 */

export interface CreatePostJSON {
  /** (optional) External id for this post */
  externalId: string;
  /** (optional) Text of the post */

  text: string;
  /** (optional) Entities connected to this post */

  entities?: Entities;
  /** Tags related to this post */

  tags: string[];
  /** Attachments of the post */

  attachments: Any[];
  /** (optional) Id of the original post of the conversation */

  conversationId: Long;
  /** Reply settings of this post */

  replySettings: ReplySetting;
  /** A list this posts references (either as a reply, repost or quote) */

  referencedPosts: PostReference[];
}
/**
 * EditPostJSON contains the data that can be specified when editing a Post
 * using the CLI command
 */

export interface EditPostJSON {
  /** New text of the post */
  text: string;
  /** New entities connected to this post */

  entities?: Entities;
  /** New tags associated to this post */

  tags: string[];
}

function createBaseCreatePostJSON(): CreatePostJSON {
  return {
    externalId: "",
    text: "",
    entities: undefined,
    tags: [],
    attachments: [],
    conversationId: Long.UZERO,
    replySettings: 0,
    referencedPosts: [],
  };
}

export const CreatePostJSON = {
  encode(
    message: CreatePostJSON,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.externalId !== "") {
      writer.uint32(10).string(message.externalId);
    }

    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }

    if (message.entities !== undefined) {
      Entities.encode(message.entities, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.tags) {
      writer.uint32(34).string(v!);
    }

    for (const v of message.attachments) {
      Any.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (!message.conversationId.isZero()) {
      writer.uint32(48).uint64(message.conversationId);
    }

    if (message.replySettings !== 0) {
      writer.uint32(56).int32(message.replySettings);
    }

    for (const v of message.referencedPosts) {
      PostReference.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePostJSON {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePostJSON();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.externalId = reader.string();
          break;

        case 2:
          message.text = reader.string();
          break;

        case 3:
          message.entities = Entities.decode(reader, reader.uint32());
          break;

        case 4:
          message.tags.push(reader.string());
          break;

        case 5:
          message.attachments.push(Any.decode(reader, reader.uint32()));
          break;

        case 6:
          message.conversationId = reader.uint64() as Long;
          break;

        case 7:
          message.replySettings = reader.int32() as any;
          break;

        case 8:
          message.referencedPosts.push(
            PostReference.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CreatePostJSON {
    return {
      externalId: isSet(object.externalId) ? String(object.externalId) : "",
      text: isSet(object.text) ? String(object.text) : "",
      entities: isSet(object.entities)
        ? Entities.fromJSON(object.entities)
        : undefined,
      tags: Array.isArray(object?.tags)
        ? object.tags.map((e: any) => String(e))
        : [],
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => Any.fromJSON(e))
        : [],
      conversationId: isSet(object.conversationId)
        ? Long.fromValue(object.conversationId)
        : Long.UZERO,
      replySettings: isSet(object.replySettings)
        ? replySettingFromJSON(object.replySettings)
        : 0,
      referencedPosts: Array.isArray(object?.referencedPosts)
        ? object.referencedPosts.map((e: any) => PostReference.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CreatePostJSON): unknown {
    const obj: any = {};
    message.externalId !== undefined && (obj.externalId = message.externalId);
    message.text !== undefined && (obj.text = message.text);
    message.entities !== undefined &&
      (obj.entities = message.entities
        ? Entities.toJSON(message.entities)
        : undefined);

    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }

    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? Any.toJSON(e) : undefined
      );
    } else {
      obj.attachments = [];
    }

    message.conversationId !== undefined &&
      (obj.conversationId = (message.conversationId || Long.UZERO).toString());
    message.replySettings !== undefined &&
      (obj.replySettings = replySettingToJSON(message.replySettings));

    if (message.referencedPosts) {
      obj.referencedPosts = message.referencedPosts.map((e) =>
        e ? PostReference.toJSON(e) : undefined
      );
    } else {
      obj.referencedPosts = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePostJSON>, I>>(
    object: I
  ): CreatePostJSON {
    const message = createBaseCreatePostJSON();
    message.externalId = object.externalId ?? "";
    message.text = object.text ?? "";
    message.entities =
      object.entities !== undefined && object.entities !== null
        ? Entities.fromPartial(object.entities)
        : undefined;
    message.tags = object.tags?.map((e) => e) || [];
    message.attachments =
      object.attachments?.map((e) => Any.fromPartial(e)) || [];
    message.conversationId =
      object.conversationId !== undefined && object.conversationId !== null
        ? Long.fromValue(object.conversationId)
        : Long.UZERO;
    message.replySettings = object.replySettings ?? 0;
    message.referencedPosts =
      object.referencedPosts?.map((e) => PostReference.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEditPostJSON(): EditPostJSON {
  return {
    text: "",
    entities: undefined,
    tags: [],
  };
}

export const EditPostJSON = {
  encode(
    message: EditPostJSON,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }

    if (message.entities !== undefined) {
      Entities.encode(message.entities, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.tags) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditPostJSON {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditPostJSON();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.text = reader.string();
          break;

        case 2:
          message.entities = Entities.decode(reader, reader.uint32());
          break;

        case 3:
          message.tags.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EditPostJSON {
    return {
      text: isSet(object.text) ? String(object.text) : "",
      entities: isSet(object.entities)
        ? Entities.fromJSON(object.entities)
        : undefined,
      tags: Array.isArray(object?.tags)
        ? object.tags.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: EditPostJSON): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    message.entities !== undefined &&
      (obj.entities = message.entities
        ? Entities.toJSON(message.entities)
        : undefined);

    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EditPostJSON>, I>>(
    object: I
  ): EditPostJSON {
    const message = createBaseEditPostJSON();
    message.text = object.text ?? "";
    message.entities =
      object.entities !== undefined && object.entities !== null
        ? Entities.fromPartial(object.entities)
        : undefined;
    message.tags = object.tags?.map((e) => e) || [];
    return message;
  },
};
