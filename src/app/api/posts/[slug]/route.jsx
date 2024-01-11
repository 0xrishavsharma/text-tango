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
