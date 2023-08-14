/* eslint-disable */
import { Timestamp, TimestampAmino } from "../../../google/protobuf/timestamp";
import {
  Long,
  isSet,
  fromJsonTimestamp,
  fromTimestamp,
  DeepPartial,
  Exact,
} from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.profiles.v3";
/**
 * ApplicationLinkState defines if an application link is in the following
 * states: STARTED, ERRORED, SUCCESSFUL, TIMED_OUT
 */
export enum ApplicationLinkState {
  /** APPLICATION_LINK_STATE_INITIALIZED_UNSPECIFIED - A link has just been initialized */
  APPLICATION_LINK_STATE_INITIALIZED_UNSPECIFIED = 0,
  /** APPLICATION_LINK_STATE_VERIFICATION_STARTED - A link has just started being verified */
  APPLICATION_LINK_STATE_VERIFICATION_STARTED = 1,
  /** APPLICATION_LINK_STATE_VERIFICATION_ERROR - A link has errored during the verification process */
  APPLICATION_LINK_STATE_VERIFICATION_ERROR = 2,
  /** APPLICATION_LINK_STATE_VERIFICATION_SUCCESS - A link has being verified successfully */
  APPLICATION_LINK_STATE_VERIFICATION_SUCCESS = 3,
  /** APPLICATION_LINK_STATE_TIMED_OUT - A link has timed out while waiting for the verification */
  APPLICATION_LINK_STATE_TIMED_OUT = 4,
  UNRECOGNIZED = -1,
}
export const ApplicationLinkStateAmino = ApplicationLinkState;
export function applicationLinkStateFromJSON(
  object: any,
): ApplicationLinkState {
  switch (object) {
    case 0:
    case "APPLICATION_LINK_STATE_INITIALIZED_UNSPECIFIED":
      return ApplicationLinkState.APPLICATION_LINK_STATE_INITIALIZED_UNSPECIFIED;
    case 1:
    case "APPLICATION_LINK_STATE_VERIFICATION_STARTED":
      return ApplicationLinkState.APPLICATION_LINK_STATE_VERIFICATION_STARTED;
    case 2:
    case "APPLICATION_LINK_STATE_VERIFICATION_ERROR":
      return ApplicationLinkState.APPLICATION_LINK_STATE_VERIFICATION_ERROR;
    case 3:
    case "APPLICATION_LINK_STATE_VERIFICATION_SUCCESS":
      return ApplicationLinkState.APPLICATION_LINK_STATE_VERIFICATION_SUCCESS;
    case 4:
    case "APPLICATION_LINK_STATE_TIMED_OUT":
      return ApplicationLinkState.APPLICATION_LINK_STATE_TIMED_OUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ApplicationLinkState.UNRECOGNIZED;
  }
}
export function applicationLinkStateToJSON(
  object: ApplicationLinkState,
): string {
  switch (object) {
    case ApplicationLinkState.APPLICATION_LINK_STATE_INITIALIZED_UNSPECIFIED:
      return "APPLICATION_LINK_STATE_INITIALIZED_UNSPECIFIED";
    case ApplicationLinkState.APPLICATION_LINK_STATE_VERIFICATION_STARTED:
      return "APPLICATION_LINK_STATE_VERIFICATION_STARTED";
    case ApplicationLinkState.APPLICATION_LINK_STATE_VERIFICATION_ERROR:
      return "APPLICATION_LINK_STATE_VERIFICATION_ERROR";
    case ApplicationLinkState.APPLICATION_LINK_STATE_VERIFICATION_SUCCESS:
      return "APPLICATION_LINK_STATE_VERIFICATION_SUCCESS";
    case ApplicationLinkState.APPLICATION_LINK_STATE_TIMED_OUT:
      return "APPLICATION_LINK_STATE_TIMED_OUT";
    case ApplicationLinkState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ApplicationLink contains the data of a link to a centralized application */
export interface ApplicationLink {
  /** User to which the link is associated */
  user: string;
  /** Data contains the details of this specific link */
  data?: Data;
  /** State of the link */
  state: ApplicationLinkState;
  /** OracleRequest represents the request that has been made to the oracle */
  oracleRequest?: OracleRequest;
  /**
   * Data coming from the result of the verification.
   * Only available when the state is STATE_SUCCESS
   */
  result?: Result;
  /** CreationTime represents the time in which the link was created */
  creationTime?: Timestamp;
  /** ExpirationTime represents the time in which the link will expire */
  expirationTime?: Timestamp;
}
export interface ApplicationLinkProtoMsg {
  typeUrl: "/desmos.profiles.v3.ApplicationLink";
  value: Uint8Array;
}
/** ApplicationLink contains the data of a link to a centralized application */
export interface ApplicationLinkAmino {
  /** User to which the link is associated */
  user: string;
  /** Data contains the details of this specific link */
  data?: DataAmino;
  /** State of the link */
  state: ApplicationLinkState;
  /** OracleRequest represents the request that has been made to the oracle */
  oracle_request?: OracleRequestAmino;
  /**
   * Data coming from the result of the verification.
   * Only available when the state is STATE_SUCCESS
   */
  result?: ResultAmino;
  /** CreationTime represents the time in which the link was created */
  creation_time?: TimestampAmino;
  /** ExpirationTime represents the time in which the link will expire */
  expiration_time?: TimestampAmino;
}
export interface ApplicationLinkAminoMsg {
  type: "/desmos.profiles.v3.ApplicationLink";
  value: ApplicationLinkAmino;
}
/**
 * Data contains the data associated to a specific user of a
 * generic centralized application
 */
export interface Data {
  /** The application name (eg. Twitter, GitHub, etc) */
  application: string;
  /** Username on the application (eg. Twitter tag, GitHub profile, etc) */
  username: string;
}
export interface DataProtoMsg {
  typeUrl: "/desmos.profiles.v3.Data";
  value: Uint8Array;
}
/**
 * Data contains the data associated to a specific user of a
 * generic centralized application
 */
export interface DataAmino {
  /** The application name (eg. Twitter, GitHub, etc) */
  application: string;
  /** Username on the application (eg. Twitter tag, GitHub profile, etc) */
  username: string;
}
export interface DataAminoMsg {
  type: "/desmos.profiles.v3.Data";
  value: DataAmino;
}
/**
 * OracleRequest represents a generic oracle request used to
 * verify the ownership of a centralized application account
 */
export interface OracleRequest {
  /** ID is the ID of the request */
  id: Long;
  /** OracleScriptID is ID of an oracle script */
  oracleScriptId: Long;
  /** CallData contains the data used to perform the oracle request */
  callData?: OracleRequest_CallData;
  /** ClientID represents the ID of the client that has called the oracle script */
  clientId: string;
}
export interface OracleRequestProtoMsg {
  typeUrl: "/desmos.profiles.v3.OracleRequest";
  value: Uint8Array;
}
/**
 * OracleRequest represents a generic oracle request used to
 * verify the ownership of a centralized application account
 */
export interface OracleRequestAmino {
  /** ID is the ID of the request */
  id: string;
  /** OracleScriptID is ID of an oracle script */
  oracle_script_id: string;
  /** CallData contains the data used to perform the oracle request */
  call_data?: OracleRequest_CallDataAmino;
  /** ClientID represents the ID of the client that has called the oracle script */
  client_id: string;
}
export interface OracleRequestAminoMsg {
  type: "/desmos.profiles.v3.OracleRequest";
  value: OracleRequestAmino;
}
/**
 * CallData contains the data sent to a single oracle request in order to
 * verify the ownership of a centralized application by a Desmos profile
 */
export interface OracleRequest_CallData {
  /** The application for which the ownership should be verified */
  application: string;
  /**
   * The hex encoded call data that should be used to verify the application
   * account ownership
   */
  callData: string;
}
export interface OracleRequest_CallDataProtoMsg {
  typeUrl: "/desmos.profiles.v3.CallData";
  value: Uint8Array;
}
/**
 * CallData contains the data sent to a single oracle request in order to
 * verify the ownership of a centralized application by a Desmos profile
 */
export interface OracleRequest_CallDataAmino {
  /** The application for which the ownership should be verified */
  application: string;
  /**
   * The hex encoded call data that should be used to verify the application
   * account ownership
   */
  call_data: string;
}
export interface OracleRequest_CallDataAminoMsg {
  type: "/desmos.profiles.v3.CallData";
  value: OracleRequest_CallDataAmino;
}
/** Result represents a verification result */
export interface Result {
  /** Success represents a successful verification */
  success?: Result_Success;
  /** Failed represents a failed verification */
  failed?: Result_Failed;
}
export interface ResultProtoMsg {
  typeUrl: "/desmos.profiles.v3.Result";
  value: Uint8Array;
}
/** Result represents a verification result */
export interface ResultAmino {
  /** Success represents a successful verification */
  success?: Result_SuccessAmino;
  /** Failed represents a failed verification */
  failed?: Result_FailedAmino;
}
export interface ResultAminoMsg {
  type: "/desmos.profiles.v3.Result";
  value: ResultAmino;
}
/**
 * Success is the result of an application link that has been successfully
 * verified
 */
export interface Result_Success {
  /** Hex-encoded value that has be signed by the profile */
  value: string;
  /** Hex-encoded signature that has been produced by signing the value */
  signature: string;
}
export interface Result_SuccessProtoMsg {
  typeUrl: "/desmos.profiles.v3.Success";
  value: Uint8Array;
}
/**
 * Success is the result of an application link that has been successfully
 * verified
 */
export interface Result_SuccessAmino {
  /** Hex-encoded value that has be signed by the profile */
  value: string;
  /** Hex-encoded signature that has been produced by signing the value */
  signature: string;
}
export interface Result_SuccessAminoMsg {
  type: "/desmos.profiles.v3.Success";
  value: Result_SuccessAmino;
}
/**
 * Failed is the result of an application link that has not been verified
 * successfully
 */
export interface Result_Failed {
  /** Error that is associated with the failure */
  error: string;
}
export interface Result_FailedProtoMsg {
  typeUrl: "/desmos.profiles.v3.Failed";
  value: Uint8Array;
}
/**
 * Failed is the result of an application link that has not been verified
 * successfully
 */
export interface Result_FailedAmino {
  /** Error that is associated with the failure */
  error: string;
}
export interface Result_FailedAminoMsg {
  type: "/desmos.profiles.v3.Failed";
  value: Result_FailedAmino;
}
function createBaseApplicationLink(): ApplicationLink {
  return {
    user: "",
    data: undefined,
    state: 0,
    oracleRequest: undefined,
    result: undefined,
    creationTime: undefined,
    expirationTime: undefined,
  };
}
export const ApplicationLink = {
  encode(
    message: ApplicationLink,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.user !== "") {
      writer.uint32(10).string(message.user);
    }
    if (message.data !== undefined) {
      Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.oracleRequest !== undefined) {
      OracleRequest.encode(
        message.oracleRequest,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(42).fork()).ldelim();
    }
    if (message.creationTime !== undefined) {
      Timestamp.encode(message.creationTime, writer.uint32(50).fork()).ldelim();
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(
        message.expirationTime,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ApplicationLink {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApplicationLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string();
          break;
        case 2:
          message.data = Data.decode(reader, reader.uint32());
          break;
        case 3:
          message.state = reader.int32() as any;
          break;
        case 4:
          message.oracleRequest = OracleRequest.decode(reader, reader.uint32());
          break;
        case 5:
          message.result = Result.decode(reader, reader.uint32());
          break;
        case 6:
          message.creationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ApplicationLink {
    return {
      user: isSet(object.user) ? String(object.user) : "",
      data: isSet(object.data) ? Data.fromJSON(object.data) : undefined,
      state: isSet(object.state)
        ? applicationLinkStateFromJSON(object.state)
        : 0,
      oracleRequest: isSet(object.oracleRequest)
        ? OracleRequest.fromJSON(object.oracleRequest)
        : undefined,
      result: isSet(object.result) ? Result.fromJSON(object.result) : undefined,
      creationTime: isSet(object.creationTime)
        ? fromJsonTimestamp(object.creationTime)
        : undefined,
      expirationTime: isSet(object.expirationTime)
        ? fromJsonTimestamp(object.expirationTime)
        : undefined,
    };
  },
  toJSON(message: ApplicationLink): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user);
    message.data !== undefined &&
      (obj.data = message.data ? Data.toJSON(message.data) : undefined);
    message.state !== undefined &&
      (obj.state = applicationLinkStateToJSON(message.state));
    message.oracleRequest !== undefined &&
      (obj.oracleRequest = message.oracleRequest
        ? OracleRequest.toJSON(message.oracleRequest)
        : undefined);
    message.result !== undefined &&
      (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    message.creationTime !== undefined &&
      (obj.creationTime = fromTimestamp(message.creationTime).toISOString());
    message.expirationTime !== undefined &&
      (obj.expirationTime = fromTimestamp(
        message.expirationTime,
      ).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ApplicationLink>, I>>(
    object: I,
  ): ApplicationLink {
    const message = createBaseApplicationLink();
    message.user = object.user ?? "";
    message.data =
      object.data !== undefined && object.data !== null
        ? Data.fromPartial(object.data)
        : undefined;
    message.state = object.state ?? 0;
    message.oracleRequest =
      object.oracleRequest !== undefined && object.oracleRequest !== null
        ? OracleRequest.fromPartial(object.oracleRequest)
        : undefined;
    message.result =
      object.result !== undefined && object.result !== null
        ? Result.fromPartial(object.result)
        : undefined;
    message.creationTime =
      object.creationTime !== undefined && object.creationTime !== null
        ? Timestamp.fromPartial(object.creationTime)
        : undefined;
    message.expirationTime =
      object.expirationTime !== undefined && object.expirationTime !== null
        ? Timestamp.fromPartial(object.expirationTime)
        : undefined;
    return message;
  },
  fromAmino(object: ApplicationLinkAmino): ApplicationLink {
    return {
      user: object.user,
      data: object?.data ? Data.fromAmino(object.data) : undefined,
      state: isSet(object.state)
        ? applicationLinkStateFromJSON(object.state)
        : 0,
      oracleRequest: object?.oracle_request
        ? OracleRequest.fromAmino(object.oracle_request)
        : undefined,
      result: object?.result ? Result.fromAmino(object.result) : undefined,
      creationTime: object?.creation_time
        ? Timestamp.fromAmino(object.creation_time)
        : undefined,
      expirationTime: object?.expiration_time
        ? Timestamp.fromAmino(object.expiration_time)
        : undefined,
    };
  },
  toAmino(message: ApplicationLink): ApplicationLinkAmino {
    const obj: any = {};
    obj.user = message.user;
    obj.data = message.data ? Data.toAmino(message.data) : undefined;
    obj.state = message.state;
    obj.oracle_request = message.oracleRequest
      ? OracleRequest.toAmino(message.oracleRequest)
      : undefined;
    obj.result = message.result ? Result.toAmino(message.result) : undefined;
    obj.creation_time = message.creationTime
      ? Timestamp.toAmino(message.creationTime)
      : undefined;
    obj.expiration_time = message.expirationTime
      ? Timestamp.toAmino(message.expirationTime)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: ApplicationLinkAminoMsg): ApplicationLink {
    return ApplicationLink.fromAmino(object.value);
  },
  fromProtoMsg(message: ApplicationLinkProtoMsg): ApplicationLink {
    return ApplicationLink.decode(message.value);
  },
  toProto(message: ApplicationLink): Uint8Array {
    return ApplicationLink.encode(message).finish();
  },
  toProtoMsg(message: ApplicationLink): ApplicationLinkProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.ApplicationLink",
      value: ApplicationLink.encode(message).finish(),
    };
  },
};
function createBaseData(): Data {
  return {
    application: "",
    username: "",
  };
}
export const Data = {
  encode(message: Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.application !== "") {
      writer.uint32(10).string(message.application);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.application = reader.string();
          break;
        case 2:
          message.username = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Data {
    return {
      application: isSet(object.application) ? String(object.application) : "",
      username: isSet(object.username) ? String(object.username) : "",
    };
  },
  toJSON(message: Data): unknown {
    const obj: any = {};
    message.application !== undefined &&
      (obj.application = message.application);
    message.username !== undefined && (obj.username = message.username);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Data>, I>>(object: I): Data {
    const message = createBaseData();
    message.application = object.application ?? "";
    message.username = object.username ?? "";
    return message;
  },
  fromAmino(object: DataAmino): Data {
    return {
      application: object.application,
      username: object.username,
    };
  },
  toAmino(message: Data): DataAmino {
    const obj: any = {};
    obj.application = message.application;
    obj.username = message.username;
    return obj;
  },
  fromAminoMsg(object: DataAminoMsg): Data {
    return Data.fromAmino(object.value);
  },
  fromProtoMsg(message: DataProtoMsg): Data {
    return Data.decode(message.value);
  },
  toProto(message: Data): Uint8Array {
    return Data.encode(message).finish();
  },
  toProtoMsg(message: Data): DataProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.Data",
      value: Data.encode(message).finish(),
    };
  },
};
function createBaseOracleRequest(): OracleRequest {
  return {
    id: Long.UZERO,
    oracleScriptId: Long.UZERO,
    callData: undefined,
    clientId: "",
  };
}
export const OracleRequest = {
  encode(
    message: OracleRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.oracleScriptId.isZero()) {
      writer.uint32(16).uint64(message.oracleScriptId);
    }
    if (message.callData !== undefined) {
      OracleRequest_CallData.encode(
        message.callData,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.clientId !== "") {
      writer.uint32(34).string(message.clientId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OracleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.oracleScriptId = reader.uint64() as Long;
          break;
        case 3:
          message.callData = OracleRequest_CallData.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OracleRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      oracleScriptId: isSet(object.oracleScriptId)
        ? Long.fromValue(object.oracleScriptId)
        : Long.UZERO,
      callData: isSet(object.callData)
        ? OracleRequest_CallData.fromJSON(object.callData)
        : undefined,
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
    };
  },
  toJSON(message: OracleRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.oracleScriptId !== undefined &&
      (obj.oracleScriptId = (message.oracleScriptId || Long.UZERO).toString());
    message.callData !== undefined &&
      (obj.callData = message.callData
        ? OracleRequest_CallData.toJSON(message.callData)
        : undefined);
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<OracleRequest>, I>>(
    object: I,
  ): OracleRequest {
    const message = createBaseOracleRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.oracleScriptId =
      object.oracleScriptId !== undefined && object.oracleScriptId !== null
        ? Long.fromValue(object.oracleScriptId)
        : Long.UZERO;
    message.callData =
      object.callData !== undefined && object.callData !== null
        ? OracleRequest_CallData.fromPartial(object.callData)
        : undefined;
    message.clientId = object.clientId ?? "";
    return message;
  },
  fromAmino(object: OracleRequestAmino): OracleRequest {
    return {
      id: Long.fromString(object.id),
      oracleScriptId: Long.fromString(object.oracle_script_id),
      callData: object?.call_data
        ? OracleRequest_CallData.fromAmino(object.call_data)
        : undefined,
      clientId: object.client_id,
    };
  },
  toAmino(message: OracleRequest): OracleRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.oracle_script_id = message.oracleScriptId
      ? message.oracleScriptId.toString()
      : undefined;
    obj.call_data = message.callData
      ? OracleRequest_CallData.toAmino(message.callData)
      : undefined;
    obj.client_id = message.clientId;
    return obj;
  },
  fromAminoMsg(object: OracleRequestAminoMsg): OracleRequest {
    return OracleRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: OracleRequestProtoMsg): OracleRequest {
    return OracleRequest.decode(message.value);
  },
  toProto(message: OracleRequest): Uint8Array {
    return OracleRequest.encode(message).finish();
  },
  toProtoMsg(message: OracleRequest): OracleRequestProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.OracleRequest",
      value: OracleRequest.encode(message).finish(),
    };
  },
};
function createBaseOracleRequest_CallData(): OracleRequest_CallData {
  return {
    application: "",
    callData: "",
  };
}
export const OracleRequest_CallData = {
  encode(
    message: OracleRequest_CallData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.application !== "") {
      writer.uint32(10).string(message.application);
    }
    if (message.callData !== "") {
      writer.uint32(18).string(message.callData);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): OracleRequest_CallData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleRequest_CallData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.application = reader.string();
          break;
        case 2:
          message.callData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OracleRequest_CallData {
    return {
      application: isSet(object.application) ? String(object.application) : "",
      callData: isSet(object.callData) ? String(object.callData) : "",
    };
  },
  toJSON(message: OracleRequest_CallData): unknown {
    const obj: any = {};
    message.application !== undefined &&
      (obj.application = message.application);
    message.callData !== undefined && (obj.callData = message.callData);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<OracleRequest_CallData>, I>>(
    object: I,
  ): OracleRequest_CallData {
    const message = createBaseOracleRequest_CallData();
    message.application = object.application ?? "";
    message.callData = object.callData ?? "";
    return message;
  },
  fromAmino(object: OracleRequest_CallDataAmino): OracleRequest_CallData {
    return {
      application: object.application,
      callData: object.call_data,
    };
  },
  toAmino(message: OracleRequest_CallData): OracleRequest_CallDataAmino {
    const obj: any = {};
    obj.application = message.application;
    obj.call_data = message.callData;
    return obj;
  },
  fromAminoMsg(object: OracleRequest_CallDataAminoMsg): OracleRequest_CallData {
    return OracleRequest_CallData.fromAmino(object.value);
  },
  fromProtoMsg(
    message: OracleRequest_CallDataProtoMsg,
  ): OracleRequest_CallData {
    return OracleRequest_CallData.decode(message.value);
  },
  toProto(message: OracleRequest_CallData): Uint8Array {
    return OracleRequest_CallData.encode(message).finish();
  },
  toProtoMsg(message: OracleRequest_CallData): OracleRequest_CallDataProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.CallData",
      value: OracleRequest_CallData.encode(message).finish(),
    };
  },
};
function createBaseResult(): Result {
  return {
    success: undefined,
    failed: undefined,
  };
}
export const Result = {
  encode(
    message: Result,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.success !== undefined) {
      Result_Success.encode(message.success, writer.uint32(10).fork()).ldelim();
    }
    if (message.failed !== undefined) {
      Result_Failed.encode(message.failed, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Result {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = Result_Success.decode(reader, reader.uint32());
          break;
        case 2:
          message.failed = Result_Failed.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Result {
    return {
      success: isSet(object.success)
        ? Result_Success.fromJSON(object.success)
        : undefined,
      failed: isSet(object.failed)
        ? Result_Failed.fromJSON(object.failed)
        : undefined,
    };
  },
  toJSON(message: Result): unknown {
    const obj: any = {};
    message.success !== undefined &&
      (obj.success = message.success
        ? Result_Success.toJSON(message.success)
        : undefined);
    message.failed !== undefined &&
      (obj.failed = message.failed
        ? Result_Failed.toJSON(message.failed)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Result>, I>>(object: I): Result {
    const message = createBaseResult();
    message.success =
      object.success !== undefined && object.success !== null
        ? Result_Success.fromPartial(object.success)
        : undefined;
    message.failed =
      object.failed !== undefined && object.failed !== null
        ? Result_Failed.fromPartial(object.failed)
        : undefined;
    return message;
  },
  fromAmino(object: ResultAmino): Result {
    return {
      success: object?.success
        ? Result_Success.fromAmino(object.success)
        : undefined,
      failed: object?.failed
        ? Result_Failed.fromAmino(object.failed)
        : undefined,
    };
  },
  toAmino(message: Result): ResultAmino {
    const obj: any = {};
    obj.success = message.success
      ? Result_Success.toAmino(message.success)
      : undefined;
    obj.failed = message.failed
      ? Result_Failed.toAmino(message.failed)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: ResultAminoMsg): Result {
    return Result.fromAmino(object.value);
  },
  fromProtoMsg(message: ResultProtoMsg): Result {
    return Result.decode(message.value);
  },
  toProto(message: Result): Uint8Array {
    return Result.encode(message).finish();
  },
  toProtoMsg(message: Result): ResultProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.Result",
      value: Result.encode(message).finish(),
    };
  },
};
function createBaseResult_Success(): Result_Success {
  return {
    value: "",
    signature: "",
  };
}
export const Result_Success = {
  encode(
    message: Result_Success,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    if (message.signature !== "") {
      writer.uint32(18).string(message.signature);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Result_Success {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResult_Success();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        case 2:
          message.signature = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Result_Success {
    return {
      value: isSet(object.value) ? String(object.value) : "",
      signature: isSet(object.signature) ? String(object.signature) : "",
    };
  },
  toJSON(message: Result_Success): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Result_Success>, I>>(
    object: I,
  ): Result_Success {
    const message = createBaseResult_Success();
    message.value = object.value ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
  fromAmino(object: Result_SuccessAmino): Result_Success {
    return {
      value: object.value,
      signature: object.signature,
    };
  },
  toAmino(message: Result_Success): Result_SuccessAmino {
    const obj: any = {};
    obj.value = message.value;
    obj.signature = message.signature;
    return obj;
  },
  fromAminoMsg(object: Result_SuccessAminoMsg): Result_Success {
    return Result_Success.fromAmino(object.value);
  },
  fromProtoMsg(message: Result_SuccessProtoMsg): Result_Success {
    return Result_Success.decode(message.value);
  },
  toProto(message: Result_Success): Uint8Array {
    return Result_Success.encode(message).finish();
  },
  toProtoMsg(message: Result_Success): Result_SuccessProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.Success",
      value: Result_Success.encode(message).finish(),
    };
  },
};
function createBaseResult_Failed(): Result_Failed {
  return {
    error: "",
  };
}
export const Result_Failed = {
  encode(
    message: Result_Failed,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Result_Failed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResult_Failed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Result_Failed {
    return {
      error: isSet(object.error) ? String(object.error) : "",
    };
  },
  toJSON(message: Result_Failed): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Result_Failed>, I>>(
    object: I,
  ): Result_Failed {
    const message = createBaseResult_Failed();
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: Result_FailedAmino): Result_Failed {
    return {
      error: object.error,
    };
  },
  toAmino(message: Result_Failed): Result_FailedAmino {
    const obj: any = {};
    obj.error = message.error;
    return obj;
  },
  fromAminoMsg(object: Result_FailedAminoMsg): Result_Failed {
    return Result_Failed.fromAmino(object.value);
  },
  fromProtoMsg(message: Result_FailedProtoMsg): Result_Failed {
    return Result_Failed.decode(message.value);
  },
  toProto(message: Result_Failed): Uint8Array {
    return Result_Failed.encode(message).finish();
  },
  toProtoMsg(message: Result_Failed): Result_FailedProtoMsg {
    return {
      typeUrl: "/desmos.profiles.v3.Failed",
      value: Result_Failed.encode(message).finish(),
    };
  },
};
