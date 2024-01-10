import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// Get single post
export const GET = async (req, { params }) => {
  const { slug } = params;
  console.log("GET /posts/[slug]", slug);
  try {
    const post = await prisma.post.findUnique({
      where: { slug: slug },
    });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.log("Error in GET /posts", err);
    return new NextResponse(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};
