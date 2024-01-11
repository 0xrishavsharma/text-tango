import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

/**
 * GET ALL COMMENTS OF A PARTICULAR POST
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Promise} - Returns a Promise that resolves to a NextResponse object
 */

export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");
  try {
    const comments = prisma.comment.findMany({
      where: { ...(postSlug && { postSlug }) },
      include: { author: true },
    });
    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 }),
    );
  }
};
