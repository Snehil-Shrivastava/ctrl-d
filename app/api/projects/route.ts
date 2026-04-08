import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

// GET: Fetch all projects for the logged-in user
export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const projects = await prisma.project.findMany({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    where: { authorId: (session.user as any).id },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(projects);
}

// POST: Create a new project
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const { name } = await req.json();

    const project = await prisma.project.create({
      data: {
        name,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        authorId: (session.user as any).id,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
