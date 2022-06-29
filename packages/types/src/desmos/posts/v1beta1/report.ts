/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

/** Report is the struct of a post's reports */
export interface Report {
  /** ID of the post for which the report has been created */
  postId: string;
  /** Identifies the type of the reports */
  type: string;
  /** User message */
  message: string;
  /** Identifies the reporting user */
  user: string;
}

/** Reports wraps a list of Report objects */
export interface Reports {
  reports: Report[];
}

function createBaseReport(): Report {
  return { postId: "", type: "", message: "", user: "" };
}

export const Report = {
  encode(
    message: Report,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.postId !== "") {
      writer.uint32(10).string(message.postId);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.user !== "") {
      writer.uint32(34).string(message.user);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Report {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.message = reader.string();
          break;
        case 4:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Report {
    return {
      postId: isSet(object.postId) ? String(object.postId) : "",
      type: isSet(object.type) ? String(object.type) : "",
      message: isSet(object.message) ? String(object.message) : "",
      user: isSet(object.user) ? String(object.user) : "",
    };
  },

  toJSON(message: Report): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = message.postId);
    message.type !== undefined && (obj.type = message.type);
    message.message !== undefined && (obj.message = message.message);
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Report>, I>>(object: I): Report {
    const message = createBaseReport();
    message.postId = object.postId ?? "";
    message.type = object.type ?? "";
    message.message = object.message ?? "";
    message.user = object.user ?? "";
    return message;
  },
};

function createBaseReports(): Reports {
  return { reports: [] };
}

export const Reports = {
  encode(
    message: Reports,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.reports) {
      Report.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Reports {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReports();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reports.push(Report.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Reports {
    return {
      reports: Array.isArray(object?.reports)
        ? object.reports.map((e: any) => Report.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Reports): unknown {
    const obj: any = {};
    if (message.reports) {
      obj.reports = message.reports.map((e) =>
        e ? Report.toJSON(e) : undefined
      );
    } else {
      obj.reports = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Reports>, I>>(object: I): Reports {
    const message = createBaseReports();
    message.reports = object.reports?.map((e) => Report.fromPartial(e)) || [];
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
