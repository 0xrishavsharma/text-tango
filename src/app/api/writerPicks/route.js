import { NextResponse } from "next/server";
import prisma from "@/utils/connect";

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany({
      take: 4,
      orderBy: {
        views: "asc",
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
