import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  //   const userId = req.locals.userId;
  const body = await req.json();
  const { name, type, day, landingPickupLine, cheezyPickupLine, songId } = body;

  // Validate the required fields
  if (
    !name ||
    !type ||
    !day ||
    !landingPickupLine ||
    !cheezyPickupLine ||
    !songId
  ) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const linkName = name.toLowerCase().replace(/\s/g, "-");

  const pookie = await prisma.pookie.create({
    data: {
      userId: "1",
      name: name,
      type: type,
      day: day,
      landingPickupLine: landingPickupLine,
      cheezyPickupLine: cheezyPickupLine,
      songId: songId,
      linkName: linkName,
    },
  });

  // Append the form data to the database
  try {
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
