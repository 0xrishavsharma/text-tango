import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

// interface Comment {
//   id: number;
//   content: string;
//   postSlug: string;
//   author: Author;
// }

// interface Author {
//   id: number;
//   name: string;
//   email: string;
// }

/**
 * GET ALL COMMENTS OF A PARTICULAR POST
 */
export const POST = async (req) => {
  const session = await getAuthSession();
  if (!session)
    return new NextResponse(
      JSON.stringify({ message: "You need to be logged in to comment!" }),
      { status: 401 },
    );

  const body = await req.json();

  if (!body.content)
    return new NextResponse(
      JSON.stringify({ message: "Comment content is required!" }),
      { status: 400 },
    );

  try {
    const comment = await prisma.comment.create({
      data: { ...body, authorEmail: session?.user.email },
      include: { author: true },
    });

    return new NextResponse(JSON.stringify(comment), { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 },
    );
  }
};
