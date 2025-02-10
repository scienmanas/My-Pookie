import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const cookieStore = cookies();
  const sessionToken = (await cookieStore).get("session-token")?.value;

  // Delete the token if it exists
  if (sessionToken) {
    (await cookieStore).delete({
      name: "session-token",
      domain:
        process.env.NODE_ENV === "production"
          ? process.env.DOMAIN
          : "localhost",
      path: "/",
    });
    return NextResponse.json(
      { message: "Logged out successfully" },
      { status: 200 }
    );
  }
  return NextResponse.json(
    { message: "No session to log out" },
    { status: 200 }
  );
}
