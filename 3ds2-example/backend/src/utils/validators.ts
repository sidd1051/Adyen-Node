export function assertDefined<T>(value: T | null | undefined, message: string): T {
  if (value === null || value === undefined) {
    throw new Error(message);
  }
  return value;
}

export function isNullOrUndefined(value: unknown): boolean {
  return value === null || value === undefined;
}
