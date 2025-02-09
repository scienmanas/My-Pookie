import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/index";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { linkName } = body;

  // Check if the linkName exists
  try {
    const page = await prisma.pookie.findUnique({
      where: {
        linkName: linkName,
      },
      select: {
        id: true,
        userName: true,
        name: true,
        type: true,
        day: true,
        landingPickupLine: true,
        confessionLine: true,
        songId: true,
        number: true,
        userId: true,
      },
    });

    if (!page) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    // Update the visit count
    try {
      await prisma.pookie.update({
        where: {
          linkName: linkName,
        },
        data: {
          visitCount: {
            increment: 1,
          },
          lastVisited: new Date(Date.now()),
        },
      });
    } catch (error) {
      console.log(error);
    }

    // return the page data
    return NextResponse.json({ page }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
