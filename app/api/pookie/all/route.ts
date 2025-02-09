import { NextRequest, NextResponse } from "next/server";
import { validateUser } from "@/app/lib/user-validator";
import prisma from "@/prisma/index";

export async function GET(req: NextRequest) {
  // Get the user id
  const { success, data } = await validateUser();
  if (!success) return NextResponse.redirect(new URL("/", req.url));

  // Get all the pookie pages created by the user
  try {
    const pookiePages = await prisma.pookie.findMany({
      where: { userId: data?.userId },
      select: {
        id: true,
        name: true,
        linkName: true,
        visitCount: true,
        accepted: true,
        lastVisited: true,
        createdAt: true,
      },
    });

    // Return only necessary stuff
    return NextResponse.json(pookiePages);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
