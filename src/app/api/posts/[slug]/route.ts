import { NextResponse } from "next/server";
import { GetServerSidePropsContext } from "next";
import prisma from "../../../../utils/connect";

export const GET = async (
  req: any,
  { params }: GetServerSidePropsContext<{ slug: string }>,
) => {
  const { slug } = params as { slug: string };
  try {
    const post = await prisma.post.update({
      where: { slug: slug },
      data: { views: { increment: 1 } },
      include: { author: true },
    });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err: any) {
    console.log("Error in GET /posts", err);
    return new NextResponse(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
};
