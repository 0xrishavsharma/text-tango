import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

/**
 * Gets a post by slug
 * @param {Object} req - The request object
 * @param {Object} params - The route parameters
 * @returns {Object} - The post data or error response
 */
export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    const post = await prisma.post.findUnique({
      where: { slug: slug },
      include: { author: true },
    });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.log("Error in GET /posts", err);
    return new NextResponse(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};

// CREATE A POST
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
      JSON.stringify({ message: "Post content is required!" }, { status: 400 }),
    );

  try {
    const post = await prisma.post.create({
      data: { ...body, authorEmail: session.user.email },
      include: { author: true },
    });

    return new NextResponse(JSON.stringify(post, { status: 201 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 }),
    );
  }
};
