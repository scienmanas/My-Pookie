import prisma from "@/prisma/index";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { oAuthGoogleClient } from "@/app/config/oAuth";

export async function POST(req: NextRequest) {
  const cookieStore = cookies();
  const sessionToken = (await cookieStore).get("session-token")?.value;

  // If no auth Token
  if (!sessionToken) {
    return NextResponse.json(
      { error: "No session token found" },
      { status: 401 }
    );
  }

  try {
    // 1. Verify the token
    let ticket;
    try {
      ticket = await oAuthGoogleClient.verifyIdToken({
        idToken: sessionToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
    } catch (error) {
      // Clear the invalid session token cookie
      (await cookieStore).delete("session-token");
      return NextResponse.json(
        { error: "Invalid session token" },
        { status: 401 }
      );
    }

    // 2. Getting the payload and checking for null
    const payload = ticket.getPayload();
    if (!payload) {
      console.error("Payload is null or undefined.");
      return NextResponse.json(
        { error: "Invalid session token" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { messgae: "Authenticated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
