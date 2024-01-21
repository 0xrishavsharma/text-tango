import { getAuthSession } from "@/utils/auth";
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

// CREATE A POST
export const POST = async (req) => {
  const session = await getAuthSession();
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
