import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const media = await prisma.media.create({
      data: {
        name: body.name,
        url: body.url,
        size: body.size,
        format: body.format,
        type: "video", // Or determine from extension
        projectId: parseInt(body.projectId),
      },
    });
    return NextResponse.json(media);
  } catch (error) {
    return new NextResponse("DB Error", { status: 500 });
  }
}
