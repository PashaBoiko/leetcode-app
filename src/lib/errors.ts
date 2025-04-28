import { NextResponse } from "next/server";

export type ErrorProps = {
  error: Error & { digest?: string };
  reset(): void;
};

type ErrorResponseBody = { errors: unknown }
export function nextErrorResponse(errors: unknown, status = 500) {
  return NextResponse.json<ErrorResponseBody>({ errors }, { status });
}

