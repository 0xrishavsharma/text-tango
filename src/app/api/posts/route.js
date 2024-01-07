import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  let pageNumber = Number(searchParams.get("page"));
  const POST_PER_PAGE = 5;

  if (!pageNumber || pageNumber < 1) {
    pageNumber = 1; // default to page 1 if invalid page number provided
  }

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (pageNumber - 1),
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count(),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (err) {
    console.log("Error in GET /posts", err);
    return new NextResponse(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};
