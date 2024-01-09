import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  let category = searchParams.get("category");
  let pageNumber = Number(searchParams.get("page"));

  const POSTS_PER_PAGE = parseInt(process.env.POSTS_PER_PAGE) || 5;

  if (!pageNumber || pageNumber < 1) {
    pageNumber = 1;
  }

  const query = {
    take: POSTS_PER_PAGE,
    skip: POSTS_PER_PAGE * (pageNumber - 1),
    where: {
      ...(category && { categorySlug: category }),
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (err) {
    console.log("Error in GET /posts", err);
    return new NextResponse(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};
