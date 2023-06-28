/* eslint-disable */
import { Data, DataAmino } from "./models_app_links";
import { Height, HeightAmino } from "../../../ibc/core/client/v1/client";
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.profiles.v3";
/**
 * MsgLinkApplication defines a msg to connect a profile with a
 * centralized application account (eg. Twitter, GitHub, etc).
 */
export interface MsgLinkApplication {
  /** The sender of the connection request */
  sender: string;
  /** LinkData contains the data related to the application to which connect */
  linkData?: Data;
  /**
   * Hex encoded call data that will be sent to the data source in order to
   * verify the link
   */
  callData: string;
  /** The port on which the packet will be sent */
  sourcePort: string;
  /** The channel by which the packet will be sent */
  sourceChannel: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeoutHeight?: Height;
  /**
   * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
   * The timeout is disabled when set to 0.
   */
  timeoutTimestamp: Long;
}
export interface MsgLinkApplicationProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgLinkApplication";
  value: Uint8Array;
}
/**
 * MsgLinkApplication defines a msg to connect a profile with a
 * centralized application account (eg. Twitter, GitHub, etc).
 */
export interface MsgLinkApplicationAmino {
  /** The sender of the connection request */
  sender: string;
  /** LinkData contains the data related to the application to which connect */
  link_data?: DataAmino;
  /**
   * Hex encoded call data that will be sent to the data source in order to
   * verify the link
   */
  call_data: string;
  /** The port on which the packet will be sent */
  source_port: string;
  /** The channel by which the packet will be sent */
  source_channel: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeout_height?: HeightAmino;
  /**
   * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
   * The timeout is disabled when set to 0.
   */
  timeout_timestamp: string;
}
export interface MsgLinkApplicationAminoMsg {
  type: "/desmos.profiles.v3.MsgLinkApplication";
  value: MsgLinkApplicationAmino;
}
/**
 * MsgLinkApplicationResponse defines the Msg/LinkApplication
 * response type.
 */
export interface MsgLinkApplicationResponse {}
export interface MsgLinkApplicationResponseProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgLinkApplicationResponse";
  value: Uint8Array;
}
/**
 * MsgLinkApplicationResponse defines the Msg/LinkApplication
 * response type.
 */
export interface MsgLinkApplicationResponseAmino {}
export interface MsgLinkApplicationResponseAminoMsg {
  type: "/desmos.profiles.v3.MsgLinkApplicationResponse";
  value: MsgLinkApplicationResponseAmino;
}
/**
 * MsgUnlinkApplication defines a msg to delete an application link from a user
 * profile
 */
export interface MsgUnlinkApplication {
  /** Application represents the name of the application to unlink */
  application: string;
  /** Username represents the username inside the application to unlink */
  username: string;
  /**
   * Signer represents the Desmos account to which the application should be
   * unlinked
   */
  signer: string;
}
export interface MsgUnlinkApplicationProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgUnlinkApplication";
  value: Uint8Array;
}
/**
 * MsgUnlinkApplication defines a msg to delete an application link from a user
 * profile
 */
export interface MsgUnlinkApplicationAmino {
  /** Application represents the name of the application to unlink */
  application: string;
  /** Username represents the username inside the application to unlink */
  username: string;
  /**
   * Signer represents the Desmos account to which the application should be
   * unlinked
   */
  signer: string;
}
export interface MsgUnlinkApplicationAminoMsg {
  type: "/desmos.profiles.v3.MsgUnlinkApplication";
  value: MsgUnlinkApplicationAmino;
}
/**
 * MsgUnlinkApplicationResponse defines the Msg/UnlinkApplication response
 * type.
 */
export interface MsgUnlinkApplicationResponse {}
export interface MsgUnlinkApplicationResponseProtoMsg {
  typeUrl: "/desmos.profiles.v3.MsgUnlinkApplicationResponse";
  value: Uint8Array;
}
/**
 * MsgUnlinkApplicationResponse defines the Msg/UnlinkApplication response
 * type.
 */
export interface MsgUnlinkApplicationResponseAmino {}
export interface MsgUnlinkApplicationResponseAminoMsg {
  type: "/desmos.profiles.v3.MsgUnlinkApplicationResponse";
  value: MsgUnlinkApplicationResponseAmino;
}
function createBaseMsgLinkApplication(): MsgLinkApplication {
  return {
    sender: "",
    linkData: undefined,
    callData: "",
    sourcePort: "",
    sourceChannel: "",
    timeoutHeight: undefined,
    timeoutTimestamp: Long.UZERO,
  };
}
export const MsgLinkApplication = {
  encode(
    message: MsgLinkApplication,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.linkData !== undefined) {
      Data.encode(message.linkData, writer.uint32(18).fork()).ldelim();
    }
    if (message.callData !== "") {
      writer.uint32(26).string(message.callData);
    }
    if (message.sourcePort !== "") {
      writer.uint32(34).string(message.sourcePort);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(42).string(message.sourceChannel);
    }
    if (message.timeoutHeight !== undefined) {
      Height.encode(message.timeoutHeight, writer.uint32(50).fork()).ldelim();
    }
    if (!message.timeoutTimestamp.isZero()) {
      writer.uint32(56).uint64(message.timeoutTimestamp);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLinkApplication {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLinkApplication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.linkData = Data.decode(reader, reader.uint32());
          break;
        case 3:
          message.callData = reader.string();
          break;
        case 4:
          message.sourcePort = reader.string();
          break;
        case 5:
          message.sourceChannel = reader.string();
          break;
        case 6:
          message.timeoutHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.timeoutTimestamp = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLinkApplication {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      linkData: isSet(object.linkData)
        ? Data.fromJSON(object.linkData)
        : undefined,
      callData: isSet(object.callData) ? String(object.callData) : "",
      sourcePort: isSet(object.sourcePort) ? String(object.sourcePort) : "",
      sourceChannel: isSet(object.sourceChannel)
        ? String(object.sourceChannel)
        : "",
      timeoutHeight: isSet(object.timeoutHeight)
        ? Height.fromJSON(object.timeoutHeight)
        : undefined,
      timeoutTimestamp: isSet(object.timeoutTimestamp)
        ? Long.fromValue(object.timeoutTimestamp)
        : Long.UZERO,
    };
  },
  toJSON(message: MsgLinkApplication): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.linkData !== undefined &&
      (obj.linkData = message.linkData
        ? Data.toJSON(message.linkData)
        : undefined);
    message.callData !== undefined && (obj.callData = message.callData);
    message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
    message.sourceChannel !== undefined &&
      (obj.sourceChannel = message.sourceChannel);
    message.timeoutHeight !== undefined &&
      (obj.timeoutHeight = message.timeoutHeight
        ? Height.toJSON(message.timeoutHeight)
        : undefined);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = (
        message.timeoutTimestamp || Long.UZERO
      ).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLinkApplication>, I>>(
    object: I
  ): MsgLinkApplication {
    const message = createBaseMsgLinkApplication();
    message.sender = object.sender ?? "";
    message.linkData =
      object.linkData !== undefined && object.linkData !== null
        ? Data.fromPartial(object.linkData)
        : undefined;
    message.callData = object.callData ?? "";
    message.sourcePort = object.sourcePort ?? "";
    message.sourceChannel = object.sourceChannel ?? "";
    message.timeoutHeight =
      object.timeoutHeight !== undefined && object.timeoutHeight !== null
        ? Height.fromPartial(object.timeoutHeight)
        : undefined;
    message.timeoutTimestamp =
      object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null
        ? Long.fromValue(object.timeoutTimestamp)
        : Long.UZERO;
    return message;
  },
  fromAmino(object: MsgLinkApplicationAmino): MsgLinkApplication {
    return {
      sender: object.sender,
      linkData: object?.link_data
        ? Data.fromAmino(object.link_data)
        : undefined,
      callData: object.call_data,
      sourcePort: object.source_port,
      sourceChannel: object.source_channel,
      timeoutHeight: object?.timeout_height
        ? Height.fromAmino(object.timeout_height)
        : undefined,
      timeoutTimestamp: Long.fromString(object.timeout_timestamp),
    };
  },
  toAmino(message: MsgLinkApplication): MsgLinkApplicationAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.link_data = message.linkData
      ? Data.toAmino(message.linkData)
      : undefined;
    obj.call_data = message.callData;
    obj.source_port = message.sourcePort;
    obj.source_channel = message.sourceChannel;
    obj.timeout_height = message.timeoutHeight
      ? Height.toAmino(message.timeoutHeight)
      : {};
    obj.timeout_timestamp = message.timeoutTimestamp
      ? message.timeoutTimestamp.toString()
      : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgLinkApplicationAminoMsg): MsgLinkApplication {
    return MsgLinkApplication.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLinkApplicationProtoMsg): MsgLinkApplication {
    return MsgLinkApplication.decode(message.value);
  },
  toProto(message: MsgLinkApplication): Uint8Array {
    return MsgLinkApplication.encode(message).finish();
  },
  toProtoMsg(message: MsgLinkApplication): MsgLinkApplicationProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgLinkApplication",
      value: MsgLinkApplication.encode(message).finish(),
    };
  },
};
function createBaseMsgLinkApplicationResponse(): MsgLinkApplicationResponse {
  return {};
}
export const MsgLinkApplicationResponse = {
  encode(
    _: MsgLinkApplicationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLinkApplicationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLinkApplicationResponse();
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
  fromJSON(_: any): MsgLinkApplicationResponse {
    return {};
  },
  toJSON(_: MsgLinkApplicationResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLinkApplicationResponse>, I>>(
    _: I
  ): MsgLinkApplicationResponse {
    const message = createBaseMsgLinkApplicationResponse();
    return message;
  },
  fromAmino(_: MsgLinkApplicationResponseAmino): MsgLinkApplicationResponse {
    return {};
  },
  toAmino(_: MsgLinkApplicationResponse): MsgLinkApplicationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgLinkApplicationResponseAminoMsg
  ): MsgLinkApplicationResponse {
    return MsgLinkApplicationResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgLinkApplicationResponseProtoMsg
  ): MsgLinkApplicationResponse {
    return MsgLinkApplicationResponse.decode(message.value);
  },
  toProto(message: MsgLinkApplicationResponse): Uint8Array {
    return MsgLinkApplicationResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgLinkApplicationResponse
  ): MsgLinkApplicationResponseProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgLinkApplicationResponse",
      value: MsgLinkApplicationResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgUnlinkApplication(): MsgUnlinkApplication {
  return {
    application: "",
    username: "",
    signer: "",
  };
}
export const MsgUnlinkApplication = {
  encode(
    message: MsgUnlinkApplication,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.application !== "") {
      writer.uint32(10).string(message.application);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUnlinkApplication {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlinkApplication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.application = reader.string();
          break;
        case 2:
          message.username = reader.string();
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnlinkApplication {
    return {
      application: isSet(object.application) ? String(object.application) : "",
      username: isSet(object.username) ? String(object.username) : "",
      signer: isSet(object.signer) ? String(object.signer) : "",
    };
  },
  toJSON(message: MsgUnlinkApplication): unknown {
    const obj: any = {};
    message.application !== undefined &&
      (obj.application = message.application);
    message.username !== undefined && (obj.username = message.username);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnlinkApplication>, I>>(
    object: I
  ): MsgUnlinkApplication {
    const message = createBaseMsgUnlinkApplication();
    message.application = object.application ?? "";
    message.username = object.username ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgUnlinkApplicationAmino): MsgUnlinkApplication {
    return {
      application: object.application,
      username: object.username,
      signer: object.signer,
    };
  },
  toAmino(message: MsgUnlinkApplication): MsgUnlinkApplicationAmino {
    const obj: any = {};
    obj.application = message.application;
    obj.username = message.username;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgUnlinkApplicationAminoMsg): MsgUnlinkApplication {
    return MsgUnlinkApplication.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnlinkApplicationProtoMsg): MsgUnlinkApplication {
    return MsgUnlinkApplication.decode(message.value);
  },
  toProto(message: MsgUnlinkApplication): Uint8Array {
    return MsgUnlinkApplication.encode(message).finish();
  },
  toProtoMsg(message: MsgUnlinkApplication): MsgUnlinkApplicationProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgUnlinkApplication",
      value: MsgUnlinkApplication.encode(message).finish(),
    };
  },
};
function createBaseMsgUnlinkApplicationResponse(): MsgUnlinkApplicationResponse {
  return {};
}
export const MsgUnlinkApplicationResponse = {
  encode(
    _: MsgUnlinkApplicationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUnlinkApplicationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlinkApplicationResponse();
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
  fromJSON(_: any): MsgUnlinkApplicationResponse {
    return {};
  },
  toJSON(_: MsgUnlinkApplicationResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnlinkApplicationResponse>, I>>(
    _: I
  ): MsgUnlinkApplicationResponse {
    const message = createBaseMsgUnlinkApplicationResponse();
    return message;
  },
  fromAmino(
    _: MsgUnlinkApplicationResponseAmino
  ): MsgUnlinkApplicationResponse {
    return {};
  },
  toAmino(_: MsgUnlinkApplicationResponse): MsgUnlinkApplicationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgUnlinkApplicationResponseAminoMsg
  ): MsgUnlinkApplicationResponse {
    return MsgUnlinkApplicationResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgUnlinkApplicationResponseProtoMsg
  ): MsgUnlinkApplicationResponse {
    return MsgUnlinkApplicationResponse.decode(message.value);
  },
  toProto(message: MsgUnlinkApplicationResponse): Uint8Array {
    return MsgUnlinkApplicationResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgUnlinkApplicationResponse
  ): MsgUnlinkApplicationResponseProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.MsgUnlinkApplicationResponse",
      value: MsgUnlinkApplicationResponse.encode(message).finish(),
    };
  },
};
