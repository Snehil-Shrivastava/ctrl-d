import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        const session = await getServerSession(authOptions);
        if (!session) throw new Error("Unauthenticated");

        return {
          allowedContentTypes: [
            "image/jpeg",
            "image/png",
            "video/mp4",
            "video/quicktime",
            "video/x-matroska",
          ],
          tokenPayload: JSON.stringify({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            userId: (session.user as any).id,
          }),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        // This runs on the server AFTER the file is safely in Vercel Blob
        const { userId } = JSON.parse(tokenPayload as string);

        try {
          // You need to pass the ProjectID from the client to the metadata
          // but for simplicity, let's assume you pass it in the query or payload
          // We'll update this to handle the database save
          console.log("Upload completed for:", blob.url);
        } catch (error) {
          throw new Error("Could not update database");
        }
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 },
    );
  }
}
