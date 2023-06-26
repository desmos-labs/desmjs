/* eslint-disable */
import { Any, AnyAmino } from "../../../google/protobuf/any";
import {
  PageRequest,
  PageRequestAmino,
  PageResponse,
  PageResponseAmino,
} from "../../../cosmos/base/query/v1beta1/pagination";
import {
  Report,
  ReportAmino,
  Reason,
  ReasonAmino,
  Params,
  ParamsAmino,
} from "./models";
import { Long, isSet, DeepPartial, Exact } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "desmos.reports.v1";
/** QueryReportsResponse is the request type for Query/Reports RPC method */
export interface QueryReportsRequest {
  /** Id of the subspace to query the reports for */
  subspaceId: Long;
  /** (optional) Target to query the reports for */
  target?: Any;
  /**
   * (optional) User that reported the target.
   * This is going to be used only if the target is also specified
   */
  reporter: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryReportsRequestProtoMsg {
  typeUrl: "/desmos.reports.v1.QueryReportsRequest";
  value: Uint8Array;
}
/** QueryReportsResponse is the request type for Query/Reports RPC method */
export interface QueryReportsRequestAmino {
  /** Id of the subspace to query the reports for */
  subspace_id: string;
  /** (optional) Target to query the reports for */
  target?: AnyAmino;
  /**
   * (optional) User that reported the target.
   * This is going to be used only if the target is also specified
   */
  reporter: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryReportsRequestAminoMsg {
  type: "/desmos.reports.v1.QueryReportsRequest";
  value: QueryReportsRequestAmino;
}
/** QueryReportsResponse is the response type for Query/Reports RPC method */
export interface QueryReportsResponse {
  reports: Report[];
  pagination?: PageResponse;
}
export interface QueryReportsResponseProtoMsg {
  typeUrl: "/desmos.reports.v1.QueryReportsResponse";
  value: Uint8Array;
}
/** QueryReportsResponse is the response type for Query/Reports RPC method */
export interface QueryReportsResponseAmino {
  reports: ReportAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryReportsResponseAminoMsg {
  type: "/desmos.reports.v1.QueryReportsResponse";
  value: QueryReportsResponseAmino;
}
/** QueryReportRequest is the request type for Query/Report RPC method */
export interface QueryReportRequest {
  /** Id of the subspace that holds the report to query for */
  subspaceId: Long;
  /** Id of the report to query for */
  reportId: Long;
}
export interface QueryReportRequestProtoMsg {
  typeUrl: "/desmos.reports.v1.QueryReportRequest";
  value: Uint8Array;
}
/** QueryReportRequest is the request type for Query/Report RPC method */
export interface QueryReportRequestAmino {
  /** Id of the subspace that holds the report to query for */
  subspace_id: string;
  /** Id of the report to query for */
  report_id: string;
}
export interface QueryReportRequestAminoMsg {
  type: "/desmos.reports.v1.QueryReportRequest";
  value: QueryReportRequestAmino;
}
/** QueryReportResponse is the response type for Query/Report RPC method */
export interface QueryReportResponse {
  report?: Report;
}
export interface QueryReportResponseProtoMsg {
  typeUrl: "/desmos.reports.v1.QueryReportResponse";
  value: Uint8Array;
}
/** QueryReportResponse is the response type for Query/Report RPC method */
export interface QueryReportResponseAmino {
  report?: ReportAmino;
}
export interface QueryReportResponseAminoMsg {
  type: "/desmos.reports.v1.QueryReportResponse";
  value: QueryReportResponseAmino;
}
/** QueryReasonsRequest is the request type for Query/Reasons RPC method */
export interface QueryReasonsRequest {
  /** Id of the subspace to query the supported reporting reasons for */
  subspaceId: Long;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryReasonsRequestProtoMsg {
  typeUrl: "/desmos.reports.v1.QueryReasonsRequest";
  value: Uint8Array;
}
/** QueryReasonsRequest is the request type for Query/Reasons RPC method */
export interface QueryReasonsRequestAmino {
  /** Id of the subspace to query the supported reporting reasons for */
  subspace_id: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryReasonsRequestAminoMsg {
  type: "/desmos.reports.v1.QueryReasonsRequest";
  value: QueryReasonsRequestAmino;
}
/** QueryReasonsResponse is the response type for Query/Reasons RPC method */
export interface QueryReasonsResponse {
  reasons: Reason[];
  pagination?: PageResponse;
}
export interface QueryReasonsResponseProtoMsg {
  typeUrl: "/desmos.reports.v1.QueryReasonsResponse";
  value: Uint8Array;
}
/** QueryReasonsResponse is the response type for Query/Reasons RPC method */
export interface QueryReasonsResponseAmino {
  reasons: ReasonAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryReasonsResponseAminoMsg {
  type: "/desmos.reports.v1.QueryReasonsResponse";
  value: QueryReasonsResponseAmino;
}
/** QueryReasonRequest is the request type for Query/Reason RPC method */
export interface QueryReasonRequest {
  /** Id of the subspace that holds the reason to query for */
  subspaceId: Long;
  /** Id of the reason to query for */
  reasonId: number;
}
export interface QueryReasonRequestProtoMsg {
  typeUrl: "/desmos.reports.v1.QueryReasonRequest";
  value: Uint8Array;
}
/** QueryReasonRequest is the request type for Query/Reason RPC method */
export interface QueryReasonRequestAmino {
  /** Id of the subspace that holds the reason to query for */
  subspace_id: string;
  /** Id of the reason to query for */
  reason_id: number;
}
export interface QueryReasonRequestAminoMsg {
  type: "/desmos.reports.v1.QueryReasonRequest";
  value: QueryReasonRequestAmino;
}
/** QueryReasonResponse is the response type for Query/Reason RPC method */
export interface QueryReasonResponse {
  reason?: Reason;
}
export interface QueryReasonResponseProtoMsg {
  typeUrl: "/desmos.reports.v1.QueryReasonResponse";
  value: Uint8Array;
}
/** QueryReasonResponse is the response type for Query/Reason RPC method */
export interface QueryReasonResponseAmino {
  reason?: ReasonAmino;
}
export interface QueryReasonResponseAminoMsg {
  type: "/desmos.reports.v1.QueryReasonResponse";
  value: QueryReasonResponseAmino;
}
/** QueryParamsRequest is the request type for Query/Params RPC method */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/desmos.reports.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for Query/Params RPC method */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/desmos.reports.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is the response type for Query/Params RPC method */
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/desmos.reports.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for Query/Params RPC method */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/desmos.reports.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
function createBaseQueryReportsRequest(): QueryReportsRequest {
  return {
    subspaceId: Long.UZERO,
    target: undefined,
    reporter: "",
    pagination: undefined,
  };
}
export const QueryReportsRequest = {
  encode(
    message: QueryReportsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.target !== undefined) {
      Any.encode(message.target, writer.uint32(18).fork()).ldelim();
    }
    if (message.reporter !== "") {
      writer.uint32(26).string(message.reporter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReportsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReportsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.target = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.reporter = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryReportsRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      target: isSet(object.target) ? Any.fromJSON(object.target) : undefined,
      reporter: isSet(object.reporter) ? String(object.reporter) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryReportsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.target !== undefined &&
      (obj.target = message.target ? Any.toJSON(message.target) : undefined);
    message.reporter !== undefined && (obj.reporter = message.reporter);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryReportsRequest>, I>>(
    object: I
  ): QueryReportsRequest {
    const message = createBaseQueryReportsRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.target =
      object.target !== undefined && object.target !== null
        ? Any.fromPartial(object.target)
        : undefined;
    message.reporter = object.reporter ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryReportsRequestAmino): QueryReportsRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      target: object?.target ? Any.fromAmino(object.target) : undefined,
      reporter: object.reporter,
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryReportsRequest): QueryReportsRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.target = message.target ? Any.toAmino(message.target) : undefined;
    obj.reporter = message.reporter;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReportsRequestAminoMsg): QueryReportsRequest {
    return QueryReportsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReportsRequestProtoMsg): QueryReportsRequest {
    return QueryReportsRequest.decode(message.value);
  },
  toProto(message: QueryReportsRequest): Uint8Array {
    return QueryReportsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReportsRequest): QueryReportsRequestProtoMsg {
    return {
      typeUrl: "/desmos.reports.v1.QueryReportsRequest",
      value: QueryReportsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryReportsResponse(): QueryReportsResponse {
  return {
    reports: [],
    pagination: undefined,
  };
}
export const QueryReportsResponse = {
  encode(
    message: QueryReportsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.reports) {
      Report.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryReportsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReportsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reports.push(Report.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryReportsResponse {
    return {
      reports: Array.isArray(object?.reports)
        ? object.reports.map((e: any) => Report.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryReportsResponse): unknown {
    const obj: any = {};
    if (message.reports) {
      obj.reports = message.reports.map((e) =>
        e ? Report.toJSON(e) : undefined
      );
    } else {
      obj.reports = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryReportsResponse>, I>>(
    object: I
  ): QueryReportsResponse {
    const message = createBaseQueryReportsResponse();
    message.reports = object.reports?.map((e) => Report.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryReportsResponseAmino): QueryReportsResponse {
    return {
      reports: Array.isArray(object?.reports)
        ? object.reports.map((e: any) => Report.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryReportsResponse): QueryReportsResponseAmino {
    const obj: any = {};
    if (message.reports) {
      obj.reports = message.reports.map((e) =>
        e ? Report.toAmino(e) : undefined
      );
    } else {
      obj.reports = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReportsResponseAminoMsg): QueryReportsResponse {
    return QueryReportsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReportsResponseProtoMsg): QueryReportsResponse {
    return QueryReportsResponse.decode(message.value);
  },
  toProto(message: QueryReportsResponse): Uint8Array {
    return QueryReportsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReportsResponse): QueryReportsResponseProtoMsg {
    return {
      typeUrl: "/desmos.reports.v1.QueryReportsResponse",
      value: QueryReportsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryReportRequest(): QueryReportRequest {
  return {
    subspaceId: Long.UZERO,
    reportId: Long.UZERO,
  };
}
export const QueryReportRequest = {
  encode(
    message: QueryReportRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (!message.reportId.isZero()) {
      writer.uint32(16).uint64(message.reportId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.reportId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryReportRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      reportId: isSet(object.reportId)
        ? Long.fromValue(object.reportId)
        : Long.UZERO,
    };
  },
  toJSON(message: QueryReportRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.reportId !== undefined &&
      (obj.reportId = (message.reportId || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryReportRequest>, I>>(
    object: I
  ): QueryReportRequest {
    const message = createBaseQueryReportRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.reportId =
      object.reportId !== undefined && object.reportId !== null
        ? Long.fromValue(object.reportId)
        : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryReportRequestAmino): QueryReportRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      reportId: Long.fromString(object.report_id),
    };
  },
  toAmino(message: QueryReportRequest): QueryReportRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.report_id = message.reportId ? message.reportId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReportRequestAminoMsg): QueryReportRequest {
    return QueryReportRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReportRequestProtoMsg): QueryReportRequest {
    return QueryReportRequest.decode(message.value);
  },
  toProto(message: QueryReportRequest): Uint8Array {
    return QueryReportRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReportRequest): QueryReportRequestProtoMsg {
    return {
      typeUrl: "/desmos.reports.v1.QueryReportRequest",
      value: QueryReportRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryReportResponse(): QueryReportResponse {
  return {
    report: undefined,
  };
}
export const QueryReportResponse = {
  encode(
    message: QueryReportResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.report !== undefined) {
      Report.encode(message.report, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.report = Report.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryReportResponse {
    return {
      report: isSet(object.report) ? Report.fromJSON(object.report) : undefined,
    };
  },
  toJSON(message: QueryReportResponse): unknown {
    const obj: any = {};
    message.report !== undefined &&
      (obj.report = message.report ? Report.toJSON(message.report) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryReportResponse>, I>>(
    object: I
  ): QueryReportResponse {
    const message = createBaseQueryReportResponse();
    message.report =
      object.report !== undefined && object.report !== null
        ? Report.fromPartial(object.report)
        : undefined;
    return message;
  },
  fromAmino(object: QueryReportResponseAmino): QueryReportResponse {
    return {
      report: object?.report ? Report.fromAmino(object.report) : undefined,
    };
  },
  toAmino(message: QueryReportResponse): QueryReportResponseAmino {
    const obj: any = {};
    obj.report = message.report ? Report.toAmino(message.report) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReportResponseAminoMsg): QueryReportResponse {
    return QueryReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReportResponseProtoMsg): QueryReportResponse {
    return QueryReportResponse.decode(message.value);
  },
  toProto(message: QueryReportResponse): Uint8Array {
    return QueryReportResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReportResponse): QueryReportResponseProtoMsg {
    return {
      typeUrl: "/desmos.reports.v1.QueryReportResponse",
      value: QueryReportResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryReasonsRequest(): QueryReasonsRequest {
  return {
    subspaceId: Long.UZERO,
    pagination: undefined,
  };
}
export const QueryReasonsRequest = {
  encode(
    message: QueryReasonsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReasonsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReasonsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryReasonsRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryReasonsRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryReasonsRequest>, I>>(
    object: I
  ): QueryReasonsRequest {
    const message = createBaseQueryReasonsRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryReasonsRequestAmino): QueryReasonsRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      pagination: object?.pagination
        ? PageRequest.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryReasonsRequest): QueryReasonsRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.pagination = message.pagination
      ? PageRequest.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReasonsRequestAminoMsg): QueryReasonsRequest {
    return QueryReasonsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReasonsRequestProtoMsg): QueryReasonsRequest {
    return QueryReasonsRequest.decode(message.value);
  },
  toProto(message: QueryReasonsRequest): Uint8Array {
    return QueryReasonsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReasonsRequest): QueryReasonsRequestProtoMsg {
    return {
      typeUrl: "/desmos.reports.v1.QueryReasonsRequest",
      value: QueryReasonsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryReasonsResponse(): QueryReasonsResponse {
  return {
    reasons: [],
    pagination: undefined,
  };
}
export const QueryReasonsResponse = {
  encode(
    message: QueryReasonsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.reasons) {
      Reason.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryReasonsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReasonsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reasons.push(Reason.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryReasonsResponse {
    return {
      reasons: Array.isArray(object?.reasons)
        ? object.reasons.map((e: any) => Reason.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },
  toJSON(message: QueryReasonsResponse): unknown {
    const obj: any = {};
    if (message.reasons) {
      obj.reasons = message.reasons.map((e) =>
        e ? Reason.toJSON(e) : undefined
      );
    } else {
      obj.reasons = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryReasonsResponse>, I>>(
    object: I
  ): QueryReasonsResponse {
    const message = createBaseQueryReasonsResponse();
    message.reasons = object.reasons?.map((e) => Reason.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
  fromAmino(object: QueryReasonsResponseAmino): QueryReasonsResponse {
    return {
      reasons: Array.isArray(object?.reasons)
        ? object.reasons.map((e: any) => Reason.fromAmino(e))
        : [],
      pagination: object?.pagination
        ? PageResponse.fromAmino(object.pagination)
        : undefined,
    };
  },
  toAmino(message: QueryReasonsResponse): QueryReasonsResponseAmino {
    const obj: any = {};
    if (message.reasons) {
      obj.reasons = message.reasons.map((e) =>
        e ? Reason.toAmino(e) : undefined
      );
    } else {
      obj.reasons = [];
    }
    obj.pagination = message.pagination
      ? PageResponse.toAmino(message.pagination)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReasonsResponseAminoMsg): QueryReasonsResponse {
    return QueryReasonsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReasonsResponseProtoMsg): QueryReasonsResponse {
    return QueryReasonsResponse.decode(message.value);
  },
  toProto(message: QueryReasonsResponse): Uint8Array {
    return QueryReasonsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReasonsResponse): QueryReasonsResponseProtoMsg {
    return {
      typeUrl: "/desmos.reports.v1.QueryReasonsResponse",
      value: QueryReasonsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryReasonRequest(): QueryReasonRequest {
  return {
    subspaceId: Long.UZERO,
    reasonId: 0,
  };
}
export const QueryReasonRequest = {
  encode(
    message: QueryReasonRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.subspaceId.isZero()) {
      writer.uint32(8).uint64(message.subspaceId);
    }
    if (message.reasonId !== 0) {
      writer.uint32(16).uint32(message.reasonId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReasonRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReasonRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaceId = reader.uint64() as Long;
          break;
        case 2:
          message.reasonId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryReasonRequest {
    return {
      subspaceId: isSet(object.subspaceId)
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO,
      reasonId: isSet(object.reasonId) ? Number(object.reasonId) : 0,
    };
  },
  toJSON(message: QueryReasonRequest): unknown {
    const obj: any = {};
    message.subspaceId !== undefined &&
      (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    message.reasonId !== undefined &&
      (obj.reasonId = Math.round(message.reasonId));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryReasonRequest>, I>>(
    object: I
  ): QueryReasonRequest {
    const message = createBaseQueryReasonRequest();
    message.subspaceId =
      object.subspaceId !== undefined && object.subspaceId !== null
        ? Long.fromValue(object.subspaceId)
        : Long.UZERO;
    message.reasonId = object.reasonId ?? 0;
    return message;
  },
  fromAmino(object: QueryReasonRequestAmino): QueryReasonRequest {
    return {
      subspaceId: Long.fromString(object.subspace_id),
      reasonId: object.reason_id,
    };
  },
  toAmino(message: QueryReasonRequest): QueryReasonRequestAmino {
    const obj: any = {};
    obj.subspace_id = message.subspaceId
      ? message.subspaceId.toString()
      : undefined;
    obj.reason_id = message.reasonId;
    return obj;
  },
  fromAminoMsg(object: QueryReasonRequestAminoMsg): QueryReasonRequest {
    return QueryReasonRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReasonRequestProtoMsg): QueryReasonRequest {
    return QueryReasonRequest.decode(message.value);
  },
  toProto(message: QueryReasonRequest): Uint8Array {
    return QueryReasonRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReasonRequest): QueryReasonRequestProtoMsg {
    return {
      typeUrl: "/desmos.reports.v1.QueryReasonRequest",
      value: QueryReasonRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryReasonResponse(): QueryReasonResponse {
  return {
    reason: undefined,
  };
}
export const QueryReasonResponse = {
  encode(
    message: QueryReasonResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.reason !== undefined) {
      Reason.encode(message.reason, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReasonResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReasonResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reason = Reason.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryReasonResponse {
    return {
      reason: isSet(object.reason) ? Reason.fromJSON(object.reason) : undefined,
    };
  },
  toJSON(message: QueryReasonResponse): unknown {
    const obj: any = {};
    message.reason !== undefined &&
      (obj.reason = message.reason ? Reason.toJSON(message.reason) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryReasonResponse>, I>>(
    object: I
  ): QueryReasonResponse {
    const message = createBaseQueryReasonResponse();
    message.reason =
      object.reason !== undefined && object.reason !== null
        ? Reason.fromPartial(object.reason)
        : undefined;
    return message;
  },
  fromAmino(object: QueryReasonResponseAmino): QueryReasonResponse {
    return {
      reason: object?.reason ? Reason.fromAmino(object.reason) : undefined,
    };
  },
  toAmino(message: QueryReasonResponse): QueryReasonResponseAmino {
    const obj: any = {};
    obj.reason = message.reason ? Reason.toAmino(message.reason) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReasonResponseAminoMsg): QueryReasonResponse {
    return QueryReasonResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReasonResponseProtoMsg): QueryReasonResponse {
    return QueryReasonResponse.decode(message.value);
  },
  toProto(message: QueryReasonResponse): Uint8Array {
    return QueryReasonResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReasonResponse): QueryReasonResponseProtoMsg {
    return {
      typeUrl: "/desmos.reports.v1.QueryReasonResponse",
      value: QueryReasonResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/desmos.reports.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined,
  };
}
export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/desmos.reports.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish(),
    };
  },
};
