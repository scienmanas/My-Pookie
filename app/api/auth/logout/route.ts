import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const cookieStore = cookies();
  const sessionToken = (await cookieStore).get("session-token")?.value;

  // Delete the token if it exists
  if (sessionToken) {
    (await cookieStore).delete("session-token");
    return NextResponse.json(
      { message: "Logged out successfully" },
      { status: 200 }
    );
  }
}
