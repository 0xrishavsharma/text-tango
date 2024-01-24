import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET FEATURED POST - POST WITH MOST NUMBERS OF VIEWS
export const GET = async (req) => {
  try {
    const post = await prisma.post.findFirst({
      orderBy: { views: "desc" },
      include: { author: true },
    });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.log("Error in GET /posts/featured", err);
    return new NextResponse(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};
