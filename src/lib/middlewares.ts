import { NextMiddlewareWithAuth } from "next-auth/middleware";
import { NextMiddleware, NextResponse } from "next/server";
import { nextErrorResponse } from "@/lib/errors";

type MiddlewareFactory<M = NextMiddleware> = (middleware: M) => M;

// Middleware to handle API requests to /api/llm endpoints with API key authentication
export const handleApiLlm: MiddlewareFactory<NextMiddlewareWithAuth> = (
  next,
) => {
  return async (request, event) => {
    // compare the request header with the API key to authenticate the request
    if (request.headers.get("X-API-KEY") === apiKey) return NextResponse.next();

    // log unauthorized request attempt if the API key from the request header is invalid
    console.warn("API - Unauthorized request", request.nextUrl.pathname);

    // return unauthorized response
    return nextErrorResponse("Unauthorized", 401);
  };
};
