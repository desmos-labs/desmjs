import { Timestamp } from "@desmoslabs/desmjs-types/google/protobuf/timestamp";
import Long from "long";

export function timestampFromDate(date: Date): Timestamp {
  return {
    seconds: Long.fromNumber(date.getTime() / 1000),
    nanos: (date.getTime() % 1000) * 1000000,
  };
}

export function timestampToDate(timestamp: Timestamp): Date {
  return new Date(
    timestamp.seconds.toNumber() * 1000 + timestamp.nanos / 1000000,
  );
}
