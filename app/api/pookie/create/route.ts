import prisma from "@/prisma/index";
import { NextRequest, NextResponse } from "next/server";
import { validateUser } from "@/app/lib/user-validator";

export async function POST(req: NextRequest) {
  const { success, data } = await validateUser();
  if (!success) return NextResponse.redirect(new URL("/", req.url));

  const body = await req.json();
  const {
    name,
    type,
    day,
    landingPickupLine,
    confessionLine,
    songId,
    number,
  } = body;

  // Validate the required fields
  if (
    !name ||
    !type ||
    !day ||
    !landingPickupLine ||
    !confessionLine ||
    !songId
  ) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    let baseLinkName = name.replace(/\s/g, "-").toLowerCase();
    let linkName = `${baseLinkName}-${data?.userId.slice(0, 5)}`; // Add first 5 chars of userId

    // Ensure the linkName is unique
    let counter = 1;
    while (await prisma.pookie.findUnique({ where: { linkName: linkName } })) {
      linkName = `${baseLinkName}-${data?.userId.slice(0, 5)}-${counter}`;
      counter++;
    }

    // Append the form data to the database
    const pookie = await prisma.pookie.create({
      data: {
        userId: data?.userId as string,
        userName: data?.userName as string,
        name: name,
        type: type,
        day: day,
        landingPickupLine: landingPickupLine,
        confessionLine: confessionLine,
        linkName: linkName,
        songId: parseInt(songId),
        number: number ? parseInt(number) : 0,
      },
    });

    // Return the link to the user
    return NextResponse.json(
      {
        id: pookie.id,
        name: pookie.name,
        linkName: pookie.linkName,
        visitCount: pookie.visitCount,
        accepted: pookie.accepted,
        lastVisited: pookie.lastVisited,
        createdAt: pookie.createdAt,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
