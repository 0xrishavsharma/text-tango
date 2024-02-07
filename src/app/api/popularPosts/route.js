import { NextResponse } from "next/server";
import prisma from "@/utils/connect";

export const GET = async (req) => {
  const NO_OF_POPULAR_POSTS = 4;
  try {
    const posts = await prisma.post.findMany({
      take: NO_OF_POPULAR_POSTS,
      orderBy: {
        views: "desc",
      },
      include: { author: true },
    });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 },
    );
  }
};
