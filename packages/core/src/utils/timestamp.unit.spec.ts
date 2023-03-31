import { Timestamp } from "@desmoslabs/desmjs-types/google/protobuf/timestamp";
import Long from "long";
import { timestampFromDate, timestampToDate } from "./timestamp";

describe("Utils test", () => {
  describe("Conversions", () => {
    it("Convert date to timestamp and back", () => {
      const date = new Date();
      const timestamp = timestampFromDate(date);
      const converted = timestampToDate(timestamp);
      expect(converted.getTime()).toBe(date.getTime());
    });

    it("Convert timestamp to date and back", () => {
      const timestamp: Timestamp = {
        seconds: Long.fromNumber(1577876400),
        nanos: 0,
      };
      const date = timestampToDate(timestamp);
      const converted = timestampFromDate(date);
      expect(converted.seconds.toString()).toBe(timestamp.seconds.toString());
      expect(converted.nanos).toBe(timestamp.nanos);
    });
  });
});
