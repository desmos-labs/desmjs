/* eslint-disable */
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { Timestamp, TimestampAmino } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import {
  isSet,
  fromJsonTimestamp,
  fromTimestamp,
  DeepPartial,
  Exact,
} from "../../../helpers";
export const protobufPackage = "desmos.profiles.v3";
/**
 * Profile represents a generic first on Desmos, containing the information of a
 * single user
 */
export interface Profile {
  /** Account represents the base Cosmos account associated with this profile */
  account?: Any;
  /** DTag represents the unique tag of this profile */
  dtag: string;
  /** Nickname contains the custom human readable name of the profile */
  nickname: string;
  /** Bio contains the biography of the profile */
  bio: string;
  /** Pictures contains the data about the pictures associated with he profile */
  pictures?: Pictures;
  /** CreationTime represents the time in which the profile has been created */
  creationDate?: Timestamp;
}
export interface ProfileProtoMsg {
  typeUrl: "/desmos.profiles.v3.Profile";
  value: Uint8Array;
}
/**
 * Profile represents a generic first on Desmos, containing the information of a
 * single user
 */
export interface ProfileAmino {
  /** Account represents the base Cosmos account associated with this profile */
  account?: AnyAmino;
  /** DTag represents the unique tag of this profile */
  dtag: string;
  /** Nickname contains the custom human readable name of the profile */
  nickname: string;
  /** Bio contains the biography of the profile */
  bio: string;
  /** Pictures contains the data about the pictures associated with he profile */
  pictures?: PicturesAmino;
  /** CreationTime represents the time in which the profile has been created */
  creation_date?: TimestampAmino;
}
export interface ProfileAminoMsg {
  type: "/desmos.profiles.v3.Profile";
  value: ProfileAmino;
}
/** Pictures contains the data of a user profile's related pictures */
export interface Pictures {
  /** Profile contains the URL to the profile picture */
  profile: string;
  /** Cover contains the URL to the cover picture */
  cover: string;
}
export interface PicturesProtoMsg {
  typeUrl: "/desmos.profiles.v3.Pictures";
  value: Uint8Array;
}
/** Pictures contains the data of a user profile's related pictures */
export interface PicturesAmino {
  /** Profile contains the URL to the profile picture */
  profile: string;
  /** Cover contains the URL to the cover picture */
  cover: string;
}
export interface PicturesAminoMsg {
  type: "/desmos.profiles.v3.Pictures";
  value: PicturesAmino;
}
function createBaseProfile(): Profile {
  return {
    account: undefined,
    dtag: "",
    nickname: "",
    bio: "",
    pictures: undefined,
    creationDate: undefined,
  };
}
export const Profile = {
  encode(
    message: Profile,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.account !== undefined) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    if (message.dtag !== "") {
      writer.uint32(18).string(message.dtag);
    }
    if (message.nickname !== "") {
      writer.uint32(26).string(message.nickname);
    }
    if (message.bio !== "") {
      writer.uint32(34).string(message.bio);
    }
    if (message.pictures !== undefined) {
      Pictures.encode(message.pictures, writer.uint32(42).fork()).ldelim();
    }
    if (message.creationDate !== undefined) {
      Timestamp.encode(message.creationDate, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Profile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.dtag = reader.string();
          break;
        case 3:
          message.nickname = reader.string();
          break;
        case 4:
          message.bio = reader.string();
          break;
        case 5:
          message.pictures = Pictures.decode(reader, reader.uint32());
          break;
        case 6:
          message.creationDate = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Profile {
    return {
      account: isSet(object.account) ? Any.fromJSON(object.account) : undefined,
      dtag: isSet(object.dtag) ? String(object.dtag) : "",
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      bio: isSet(object.bio) ? String(object.bio) : "",
      pictures: isSet(object.pictures)
        ? Pictures.fromJSON(object.pictures)
        : undefined,
      creationDate: isSet(object.creationDate)
        ? fromJsonTimestamp(object.creationDate)
        : undefined,
    };
  },
  toJSON(message: Profile): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = message.account ? Any.toJSON(message.account) : undefined);
    message.dtag !== undefined && (obj.dtag = message.dtag);
    message.nickname !== undefined && (obj.nickname = message.nickname);
    message.bio !== undefined && (obj.bio = message.bio);
    message.pictures !== undefined &&
      (obj.pictures = message.pictures
        ? Pictures.toJSON(message.pictures)
        : undefined);
    message.creationDate !== undefined &&
      (obj.creationDate = fromTimestamp(message.creationDate).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Profile>, I>>(object: I): Profile {
    const message = createBaseProfile();
    message.account =
      object.account !== undefined && object.account !== null
        ? Any.fromPartial(object.account)
        : undefined;
    message.dtag = object.dtag ?? "";
    message.nickname = object.nickname ?? "";
    message.bio = object.bio ?? "";
    message.pictures =
      object.pictures !== undefined && object.pictures !== null
        ? Pictures.fromPartial(object.pictures)
        : undefined;
    message.creationDate =
      object.creationDate !== undefined && object.creationDate !== null
        ? Timestamp.fromPartial(object.creationDate)
        : undefined;
    return message;
  },
  fromAmino(object: ProfileAmino): Profile {
    return {
      account: object?.account ? Any.fromAmino(object.account) : undefined,
      dtag: object.dtag,
      nickname: object.nickname,
      bio: object.bio,
      pictures: object?.pictures
        ? Pictures.fromAmino(object.pictures)
        : undefined,
      creationDate: object?.creation_date
        ? Timestamp.fromAmino(object.creation_date)
        : undefined,
    };
  },
  toAmino(message: Profile): ProfileAmino {
    const obj: any = {};
    obj.account = message.account ? Any.toAmino(message.account) : undefined;
    obj.dtag = message.dtag;
    obj.nickname = message.nickname;
    obj.bio = message.bio;
    obj.pictures = message.pictures
      ? Pictures.toAmino(message.pictures)
      : undefined;
    obj.creation_date = message.creationDate
      ? Timestamp.toAmino(message.creationDate)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: ProfileAminoMsg): Profile {
    return Profile.fromAmino(object.value);
  },
  fromProtoMsg(message: ProfileProtoMsg): Profile {
    return Profile.decode(message.value);
  },
  toProto(message: Profile): Uint8Array {
    return Profile.encode(message).finish();
  },
  toProtoMsg(message: Profile): ProfileProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.Profile",
      value: Profile.encode(message).finish(),
    };
  },
};
function createBasePictures(): Pictures {
  return {
    profile: "",
    cover: "",
  };
}
export const Pictures = {
  encode(
    message: Pictures,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.profile !== "") {
      writer.uint32(10).string(message.profile);
    }
    if (message.cover !== "") {
      writer.uint32(18).string(message.cover);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Pictures {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePictures();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profile = reader.string();
          break;
        case 2:
          message.cover = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pictures {
    return {
      profile: isSet(object.profile) ? String(object.profile) : "",
      cover: isSet(object.cover) ? String(object.cover) : "",
    };
  },
  toJSON(message: Pictures): unknown {
    const obj: any = {};
    message.profile !== undefined && (obj.profile = message.profile);
    message.cover !== undefined && (obj.cover = message.cover);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Pictures>, I>>(object: I): Pictures {
    const message = createBasePictures();
    message.profile = object.profile ?? "";
    message.cover = object.cover ?? "";
    return message;
  },
  fromAmino(object: PicturesAmino): Pictures {
    return {
      profile: object.profile,
      cover: object.cover,
    };
  },
  toAmino(message: Pictures): PicturesAmino {
    const obj: any = {};
    obj.profile = message.profile;
    obj.cover = message.cover;
    return obj;
  },
  fromAminoMsg(object: PicturesAminoMsg): Pictures {
    return Pictures.fromAmino(object.value);
  },
  fromProtoMsg(message: PicturesProtoMsg): Pictures {
    return Pictures.decode(message.value);
  },
  toProto(message: Pictures): Uint8Array {
    return Pictures.encode(message).finish();
  },
  toProtoMsg(message: Pictures): PicturesProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.Pictures",
      value: Pictures.encode(message).finish(),
    };
  },
};
