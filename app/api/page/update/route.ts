import { NextResponse, NextRequest } from "next/server";
import prisma from "@/prisma/index";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { id } = body;

  try {
    // Update the pookie page data
    await prisma.pookie.update({
      where: {
        id: id,
      },
      data: {
        accepted: true,
      },
    });

    return NextResponse.json(
      { message: "Page updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
