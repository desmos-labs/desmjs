import Long from "long";
import {
  fromRfc3339WithNanoseconds,
  toRfc3339WithNanoseconds,
} from "@cosmjs/tendermint-rpc";
import { fromBase64, toBase64 } from "@cosmjs/encoding";

export function omitEmptyString(value: string): string | undefined {
  return value !== "" ? value : undefined;
}

export function fromOmitEmptyString(value: string | undefined): string {
  return value ?? "";
}

export function omitEmptyNumber(value: number): number | undefined {
  return value > 0 ? value : undefined;
}

export function fromOmitEmptyNumber(value: number | undefined) {
  return value ?? 0;
}

export function omitEmptyArray<T>(value: T[]): T[] | undefined {
  return value.length > 0 ? value : undefined;
}

export function fromOmitEmptyArray<T>(value: T[] | undefined): T[] {
  return value ?? [];
}

export function nullIfEmptyArray<T>(value: T[]): T[] | null {
  return value.length > 0 ? value : null;
}

export function fromNullIfEmptyArray<T>(value: T[] | null): T[] {
  return value || [];
}

export function undefinedToNull<T>(value: T | undefined): T | null {
  return value !== undefined ? value : null;
}

export function omitZeroLong(value: Long): string | undefined {
  return value.gt(0) ? value.toString() : undefined;
}

export function fromOmitZeroLong(value: string | undefined): Long {
  return Long.fromString(value ?? "0").toUnsigned();
}

export function serializeDate(date: Date | undefined): string | undefined {
  return date
    ? toRfc3339WithNanoseconds(date).replace(".000000000", "")
    : undefined;
}

export function deserializeDate(date: string | undefined): Date | undefined {
  return date ? fromRfc3339WithNanoseconds(date) : undefined;
}

export function omitFalse(value: boolean): boolean | undefined {
  return value || undefined;
}

export function fromOmitFalse(value: boolean | undefined): boolean {
  return value === undefined ? false : value;
}

export function toBase64UndefinedIfEmpty(
  value: Uint8Array
): string | undefined {
  return value.length === 0 ? undefined : toBase64(value);
}

export function fromBase64UndefinedIfEmpty(
  value: string | undefined
): Uint8Array {
  return !value ? Uint8Array.of() : fromBase64(value);
}

export function toBase64NullIfEmpty(value: Uint8Array): string | null {
  return value.length === 0 ? null : toBase64(value);
}

export function fromBase64NullIfEmpty(value: string | null): Uint8Array {
  return !value ? Uint8Array.of() : fromBase64(value);
}

/**
 * Replace default type values with `undefined`
 * @returns `undefined` if it is the default type value, the original value otherwise
 */
export function omitDefault<T extends string | number | Long>(
  input: T
): T | undefined {
  if (typeof input === "string") {
    return input === "" ? undefined : input;
  }

  if (typeof input === "number") {
    return input === 0 ? undefined : input;
  }

  if (Long.isLong(input)) {
    return input.isZero() ? undefined : input;
  }

  throw new Error(`Got unsupported type '${typeof input}'`);
}
