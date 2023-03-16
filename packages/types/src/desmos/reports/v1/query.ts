/* eslint-disable */
import { Any } from "../../../google/protobuf/any";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Report, Reason, Params } from "./models";
import { Long, isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
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
/** QueryReportsResponse is the response type for Query/Reports RPC method */

export interface QueryReportsResponse {
  reports: Report[];
  pagination?: PageResponse;
}
/** QueryReportRequest is the request type for Query/Report RPC method */

export interface QueryReportRequest {
  /** Id of the subspace that holds the report to query for */
  subspaceId: Long;
  /** Id of the report to query for */

  reportId: Long;
}
/** QueryReportResponse is the response type for Query/Report RPC method */

export interface QueryReportResponse {
  report?: Report;
}
/** QueryReasonsRequest is the request type for Query/Reasons RPC method */

export interface QueryReasonsRequest {
  /** Id of the subspace to query the supported reporting reasons for */
  subspaceId: Long;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/** QueryReasonsResponse is the response type for Query/Reasons RPC method */

export interface QueryReasonsResponse {
  reasons: Reason[];
  pagination?: PageResponse;
}
/** QueryReasonRequest is the request type for Query/Reason RPC method */

export interface QueryReasonRequest {
  /** Id of the subspace that holds the reason to query for */
  subspaceId: Long;
  /** Id of the reason to query for */

  reasonId: number;
}
/** QueryReasonResponse is the response type for Query/Reason RPC method */

export interface QueryReasonResponse {
  reason?: Reason;
}
/** QueryParamsRequest is the request type for Query/Params RPC method */

export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for Query/Params RPC method */

export interface QueryParamsResponse {
  params?: Params;
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
};
/** Query defines the gRPC querier service. */

export interface Query {
  /** Reports allows to query the reports for a specific target */
  Reports(request: QueryReportsRequest): Promise<QueryReportsResponse>;
  /** Report allows to query the report having the given id */

  Report(request: QueryReportRequest): Promise<QueryReportResponse>;
  /** Reasons allows to query the supported reporting reasons for a subspace */

  Reasons(request: QueryReasonsRequest): Promise<QueryReasonsResponse>;
  /** Reason allows to query the reason having the given id */

  Reason(request: QueryReasonRequest): Promise<QueryReasonResponse>;
  /** Params allows to query the module parameters */

  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Reports = this.Reports.bind(this);
    this.Report = this.Report.bind(this);
    this.Reasons = this.Reasons.bind(this);
    this.Reason = this.Reason.bind(this);
    this.Params = this.Params.bind(this);
  }

  Reports(request: QueryReportsRequest): Promise<QueryReportsResponse> {
    const data = QueryReportsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.reports.v1.Query",
      "Reports",
      data
    );
    return promise.then((data) =>
      QueryReportsResponse.decode(new _m0.Reader(data))
    );
  }

  Report(request: QueryReportRequest): Promise<QueryReportResponse> {
    const data = QueryReportRequest.encode(request).finish();
    const promise = this.rpc.request("desmos.reports.v1.Query", "Report", data);
    return promise.then((data) =>
      QueryReportResponse.decode(new _m0.Reader(data))
    );
  }

  Reasons(request: QueryReasonsRequest): Promise<QueryReasonsResponse> {
    const data = QueryReasonsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "desmos.reports.v1.Query",
      "Reasons",
      data
    );
    return promise.then((data) =>
      QueryReasonsResponse.decode(new _m0.Reader(data))
    );
  }

  Reason(request: QueryReasonRequest): Promise<QueryReasonResponse> {
    const data = QueryReasonRequest.encode(request).finish();
    const promise = this.rpc.request("desmos.reports.v1.Query", "Reason", data);
    return promise.then((data) =>
      QueryReasonResponse.decode(new _m0.Reader(data))
    );
  }

  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("desmos.reports.v1.Query", "Params", data);
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }
}
