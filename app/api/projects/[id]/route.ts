import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }, // 1. Define params as a Promise
) {
  const session = await getServerSession(authOptions);
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  // 2. Await the params before accessing .id
  const resolvedParams = await params;
  const projectId = parseInt(resolvedParams.id);

  try {
    const project = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
      include: {
        media: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!project) return new NextResponse("Not Found", { status: 404 });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (project.authorId !== (session.user as any).id) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    return NextResponse.json(project);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
