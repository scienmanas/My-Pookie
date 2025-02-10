import { oAuthGoogleClient } from "@/app/config/oAuth";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  // Get url and then code from it
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code)
    return NextResponse.json(
      { error: "Authorization code not found" },
      { status: 400 }
    );

  try {
    // Exchange the code for tokens
    const { tokens } = await oAuthGoogleClient.getToken(code);
    const idToken = tokens.id_token;

    if (!idToken)
      return NextResponse.json({ error: "ID Token missing" }, { status: 400 });

    // Store cookies
    (await cookies()).set("session-token", idToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
      domain:
        process.env.NODE_ENV === "production"
          ? process.env.DOMAIN
          : "localhost",
      path: "/",
      maxAge: 60 * 60 * 1, // 1 hour
      sameSite: "lax",
    });

    return NextResponse.redirect(
      new URL("/dashboard", process.env.NEXT_PUBLIC_BASE_URL)
    );
  } catch (error) {
    console.error("OAuth Error:", error);
    return NextResponse.redirect(
      new URL("/auth", process.env.NEXT_PUBLIC_BASE_URL)
    );
  }
}
