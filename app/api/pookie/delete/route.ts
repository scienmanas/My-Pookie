import prisma from "@/prisma/index";
import { NextRequest, NextResponse } from "next/server";
import { validateUser } from "@/app/lib/user-validator";

export async function DELETE(req: NextRequest) {
  const { success, data } = await validateUser();
  if (!success) return NextResponse.redirect(new URL("/", req.url));

  const body = await req.json();
  try {
    const { id } = body;
    if (!id) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if the pookie exists
    const pookie = await prisma.pookie.findUnique({
      where: { id: id },
    });

    if (!pookie)
      return NextResponse.json({ error: "Pookie not found" }, { status: 404 });

    if (pookie.userId !== data?.userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await prisma.pookie.delete({
      where: { id: id },
    });

    // Return the link to the user
    return NextResponse.json(
      { message: "Pookie deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
