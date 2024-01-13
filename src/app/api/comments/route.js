import { getAuthSessions } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

/**
 * GET ALL COMMENTS OF A PARTICULAR POST
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Promise} - Returns a Promise that resolves to a NextResponse object
 */
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: { ...(postSlug && { postSlug }) },
      include: { author: true },
    });

    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 }),
    );
  }
};

export const POST = async (req) => {
  const session = await getAuthSessions();
  if (!session)
    return new NextResponse(
      JSON.stringify(
        { message: "You need to be logged in to comment!" },
        { status: 401 },
      ),
    );

  const body = await req.json();

  if (!body.content)
    return new NextResponse(
      JSON.stringify(
        { message: "Comment content is required!" },
        { status: 400 },
      ),
    );

  try {
    const comment = await prisma.comment.create({
      data: { ...body, authorEmail: session.user.email },
      include: { author: true },
    });

    return new NextResponse(JSON.stringify(comment, { status: 201 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 }),
    );
  }
};
