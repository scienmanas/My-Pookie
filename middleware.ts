import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  // Extract the request method and URL
  const { pathname } = req.nextUrl;

  // Apply middleware only to API routes inside /api/pookie
  if (pathname.startsWith("/api/pookie")) {
    return validateRequest(req);
  }

  return NextResponse.next();
}

async function validateRequest(req: NextRequest) {}
