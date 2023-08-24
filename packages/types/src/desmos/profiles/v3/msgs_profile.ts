/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "desmos.profiles.v3";
/** MsgSaveProfile represents a message to save a profile. */
export interface MsgSaveProfile {
  /**
   * DTag of the profile. If it shouldn't be changed, [do-no-modify] can be used
   * instead.
   */
  dtag: string;
  /**
   * Nickname of the profile. If it shouldn't be changed, [do-no-modify] can be
   * used instead.
   */
  nickname: string;
  /**
   * Bio of the profile. If it shouldn't be changed, [do-no-modify] can be used
   * instead.
   */
  bio: string;
  /**
   * URL to the profile picture. If it shouldn't be changed, [do-no-modify] can
   * be used instead.
   */
  profilePicture: string;
  /**
   * URL to the profile cover. If it shouldn't be changed, [do-no-modify] can be
   * used instead.
   */
  coverPicture: string;
  /** Address of the user associated to the profile */
  creator: string;
}
export interface MsgSaveProfileProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgSaveProfile";
  value: Uint8Array;
}
/** MsgSaveProfile represents a message to save a profile. */
export interface MsgSaveProfileAmino {
  /**
   * DTag of the profile. If it shouldn't be changed, [do-no-modify] can be used
   * instead.
   */
  dtag: string;
  /**
   * Nickname of the profile. If it shouldn't be changed, [do-no-modify] can be
   * used instead.
   */
  nickname: string;
  /**
   * Bio of the profile. If it shouldn't be changed, [do-no-modify] can be used
   * instead.
   */
  bio: string;
  /**
   * URL to the profile picture. If it shouldn't be changed, [do-no-modify] can
   * be used instead.
   */
  profile_picture: string;
  /**
   * URL to the profile cover. If it shouldn't be changed, [do-no-modify] can be
   * used instead.
   */
  cover_picture: string;
  /** Address of the user associated to the profile */
  creator: string;
}
export interface MsgSaveProfileAminoMsg {
  type: "desmos/MsgSaveProfile";
  value: MsgSaveProfileAmino;
}
/** MsgSaveProfileResponse defines the Msg/SaveProfile response type. */
export interface MsgSaveProfileResponse {}
export interface MsgSaveProfileResponseProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgSaveProfileResponse";
  value: Uint8Array;
}
/** MsgSaveProfileResponse defines the Msg/SaveProfile response type. */
export interface MsgSaveProfileResponseAmino {}
export interface MsgSaveProfileResponseAminoMsg {
  type: "/desmos.profiles.v3.MsgSaveProfileResponse";
  value: MsgSaveProfileResponseAmino;
}
/** MsgDeleteProfile represents the message used to delete an existing profile. */
export interface MsgDeleteProfile {
  /** Address associated to the profile to be deleted */
  creator: string;
}
export interface MsgDeleteProfileProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgDeleteProfile";
  value: Uint8Array;
}
/** MsgDeleteProfile represents the message used to delete an existing profile. */
export interface MsgDeleteProfileAmino {
  /** Address associated to the profile to be deleted */
  creator: string;
}
export interface MsgDeleteProfileAminoMsg {
  type: "desmos/MsgDeleteProfile";
  value: MsgDeleteProfileAmino;
}
/** MsgDeleteProfileResponse defines the Msg/DeleteProfile response type. */
export interface MsgDeleteProfileResponse {}
export interface MsgDeleteProfileResponseProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgDeleteProfileResponse";
  value: Uint8Array;
}
/** MsgDeleteProfileResponse defines the Msg/DeleteProfile response type. */
export interface MsgDeleteProfileResponseAmino {}
export interface MsgDeleteProfileResponseAminoMsg {
  type: "/desmos.profiles.v3.MsgDeleteProfileResponse";
  value: MsgDeleteProfileResponseAmino;
}
function createBaseMsgSaveProfile(): MsgSaveProfile {
  return {
    dtag: "",
    nickname: "",
    bio: "",
    profilePicture: "",
    coverPicture: "",
    creator: "",
  };
}
export const MsgSaveProfile = {
  encode(
    message: MsgSaveProfile,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.dtag !== "") {
      writer.uint32(10).string(message.dtag);
    }
    if (message.nickname !== "") {
      writer.uint32(18).string(message.nickname);
    }
    if (message.bio !== "") {
      writer.uint32(26).string(message.bio);
    }
    if (message.profilePicture !== "") {
      writer.uint32(34).string(message.profilePicture);
    }
    if (message.coverPicture !== "") {
      writer.uint32(42).string(message.coverPicture);
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSaveProfile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSaveProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dtag = reader.string();
          break;
        case 2:
          message.nickname = reader.string();
          break;
        case 3:
          message.bio = reader.string();
          break;
        case 4:
          message.profilePicture = reader.string();
          break;
        case 5:
          message.coverPicture = reader.string();
          break;
        case 6:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSaveProfile {
    return {
      dtag: isSet(object.dtag) ? String(object.dtag) : "",
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      bio: isSet(object.bio) ? String(object.bio) : "",
      profilePicture: isSet(object.profilePicture)
        ? String(object.profilePicture)
        : "",
      coverPicture: isSet(object.coverPicture)
        ? String(object.coverPicture)
        : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },
  toJSON(message: MsgSaveProfile): unknown {
    const obj: any = {};
    message.dtag !== undefined && (obj.dtag = message.dtag);
    message.nickname !== undefined && (obj.nickname = message.nickname);
    message.bio !== undefined && (obj.bio = message.bio);
    message.profilePicture !== undefined &&
      (obj.profilePicture = message.profilePicture);
    message.coverPicture !== undefined &&
      (obj.coverPicture = message.coverPicture);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSaveProfile>, I>>(
    object: I,
  ): MsgSaveProfile {
    const message = createBaseMsgSaveProfile();
    message.dtag = object.dtag ?? "";
    message.nickname = object.nickname ?? "";
    message.bio = object.bio ?? "";
    message.profilePicture = object.profilePicture ?? "";
    message.coverPicture = object.coverPicture ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgSaveProfileAmino): MsgSaveProfile {
    return {
      dtag: object.dtag,
      nickname: object.nickname,
      bio: object.bio,
      profilePicture: object.profile_picture,
      coverPicture: object.cover_picture,
      creator: object.creator,
    };
  },
  toAmino(message: MsgSaveProfile): MsgSaveProfileAmino {
    const obj: any = {};
    obj.dtag = message.dtag;
    obj.nickname = message.nickname;
    obj.bio = message.bio;
    obj.profile_picture = message.profilePicture;
    obj.cover_picture = message.coverPicture;
    obj.creator = message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgSaveProfileAminoMsg): MsgSaveProfile {
    return MsgSaveProfile.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSaveProfile): MsgSaveProfileAminoMsg {
    return {
      type: "desmos/MsgSaveProfile",
      value: MsgSaveProfile.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgSaveProfileProtoMsg): MsgSaveProfile {
    return MsgSaveProfile.decode(message.value);
  },
  toProto(message: MsgSaveProfile): Uint8Array {
    return MsgSaveProfile.encode(message).finish();
  },
  toProtoMsg(message: MsgSaveProfile): MsgSaveProfileProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgSaveProfile",
      value: MsgSaveProfile.encode(message).finish(),
    };
  },
};
function createBaseMsgSaveProfileResponse(): MsgSaveProfileResponse {
  return {};
}
export const MsgSaveProfileResponse = {
  encode(
    _: MsgSaveProfileResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSaveProfileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSaveProfileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSaveProfileResponse {
    return {};
  },
  toJSON(_: MsgSaveProfileResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSaveProfileResponse>, I>>(
    _: I,
  ): MsgSaveProfileResponse {
    const message = createBaseMsgSaveProfileResponse();
    return message;
  },
  fromAmino(_: MsgSaveProfileResponseAmino): MsgSaveProfileResponse {
    return {};
  },
  toAmino(_: MsgSaveProfileResponse): MsgSaveProfileResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSaveProfileResponseAminoMsg): MsgSaveProfileResponse {
    return MsgSaveProfileResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgSaveProfileResponseProtoMsg,
  ): MsgSaveProfileResponse {
    return MsgSaveProfileResponse.decode(message.value);
  },
  toProto(message: MsgSaveProfileResponse): Uint8Array {
    return MsgSaveProfileResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSaveProfileResponse): MsgSaveProfileResponseProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgSaveProfileResponse",
      value: MsgSaveProfileResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgDeleteProfile(): MsgDeleteProfile {
  return {
    creator: "",
  };
}
export const MsgDeleteProfile = {
  encode(
    message: MsgDeleteProfile,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProfile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteProfile {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },
  toJSON(message: MsgDeleteProfile): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteProfile>, I>>(
    object: I,
  ): MsgDeleteProfile {
    const message = createBaseMsgDeleteProfile();
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteProfileAmino): MsgDeleteProfile {
    return {
      creator: object.creator,
    };
  },
  toAmino(message: MsgDeleteProfile): MsgDeleteProfileAmino {
    const obj: any = {};
    obj.creator = message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteProfileAminoMsg): MsgDeleteProfile {
    return MsgDeleteProfile.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteProfile): MsgDeleteProfileAminoMsg {
    return {
      type: "desmos/MsgDeleteProfile",
      value: MsgDeleteProfile.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgDeleteProfileProtoMsg): MsgDeleteProfile {
    return MsgDeleteProfile.decode(message.value);
  },
  toProto(message: MsgDeleteProfile): Uint8Array {
    return MsgDeleteProfile.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteProfile): MsgDeleteProfileProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgDeleteProfile",
      value: MsgDeleteProfile.encode(message).finish(),
    };
  },
};
function createBaseMsgDeleteProfileResponse(): MsgDeleteProfileResponse {
  return {};
}
export const MsgDeleteProfileResponse = {
  encode(
    _: MsgDeleteProfileResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgDeleteProfileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProfileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDeleteProfileResponse {
    return {};
  },
  toJSON(_: MsgDeleteProfileResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteProfileResponse>, I>>(
    _: I,
  ): MsgDeleteProfileResponse {
    const message = createBaseMsgDeleteProfileResponse();
    return message;
  },
  fromAmino(_: MsgDeleteProfileResponseAmino): MsgDeleteProfileResponse {
    return {};
  },
  toAmino(_: MsgDeleteProfileResponse): MsgDeleteProfileResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgDeleteProfileResponseAminoMsg,
  ): MsgDeleteProfileResponse {
    return MsgDeleteProfileResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgDeleteProfileResponseProtoMsg,
  ): MsgDeleteProfileResponse {
    return MsgDeleteProfileResponse.decode(message.value);
  },
  toProto(message: MsgDeleteProfileResponse): Uint8Array {
    return MsgDeleteProfileResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgDeleteProfileResponse,
  ): MsgDeleteProfileResponseProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgDeleteProfileResponse",
      value: MsgDeleteProfileResponse.encode(message).finish(),
    };
  },
};
