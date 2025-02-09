"use server";
import { oAuthGoogleClient } from "@/app/config/oAuth";
import { cookies } from "next/headers";
import prisma from "@/prisma/index";

export async function validateUser() {
  // Get the cookies
  const cookieStore = cookies();
  const sessionToken = (await cookieStore).get("session-token")?.value;

  // If no session token, redirect to "/"
  if (!sessionToken) {
    return {
      success: false,
      data: null,
    };
  }

  // Verify the token
  try {
    const ticket = await oAuthGoogleClient.verifyIdToken({
      idToken: sessionToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    // Get the payload and check for null
    const payload = ticket.getPayload();
    if (!payload || !payload.email) {
      (await cookieStore).delete("session-token");
      return {
        success: false,
        data: null,
      };
    }

    // Get the email
    const email = payload.email as string;

    // Check if the user exists in the database
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    // If user doesn't exist, create a new user
    if (!user) {
      (await cookieStore).delete("session-token");
      return {
        success: false,
        data: null,
      };
    }

    // If user exists in the database, proceed to the actual api route
    return {
      success: true,
      data: {
        userId: user.id,
        userName: user.name,
      },
    };
  } catch (error) {
    console.error("Error in middleware:", error);
    (await cookieStore).delete("session-token");
    return {
      success: false,
      data: null,
    };
  }
}
