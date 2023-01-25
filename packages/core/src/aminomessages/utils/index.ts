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
