import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const {searchParams} = new URL(req.url);
  const pageNumber = searchParams.get("page") || 1;
  const POST_PER_PAGE = 2;
  try {
    const posts = await prisma.category.findMany({
      skip: (pageNumber - 1) * POST_PER_PAGE,
      take: POST_PER_PAGE,
    });
    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (err) {
    console.log("Error in GET /categories", err);
    return new NextResponse(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
};
