import Comment from "@/components/commentComponents/comment/Comment";
import CommentSection from "@/components/commentComponents/commentSection/CommentSection";
import Menu from "@/components/menu/Menu";
import UserCard from "@/components/userCard/UserCard";
import Image from "next/image";
import React from "react";
import DOMPurify from "isomorphic-dompurify";
import useFetch from "@/utils/lib/apiRequest";
import { FaComment } from "react-icons/fa";
import { cn } from "@/utils/utils";
import { categoryColors } from "@/utils/utils";
import { getDate } from "@/utils/utils";

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const post = await useFetch(`posts/${slug}`);

  const sanitizedPostHtml = DOMPurify.sanitize(post?.content);
  return (
    <div className="py-10">
      <div className="flex flex-col items-start justify-between gap-12">
        <div className="flex flex-1 flex-col">
          <div className="mb-3 flex flex-col gap-3 text-softTextColor">
            <div className="flex items-center gap-3">
              <p
                className={cn(
                  post?.categorySlug === "fashion" && `${categoryColors[0]}`,
                  post?.categorySlug === "food" && `${categoryColors[1]}`,
                  post?.categorySlug === "coding" && `${categoryColors[2]}`,
                  post?.categorySlug === "culture" && `${categoryColors[3]}`,
                  post?.categorySlug === "style" && `${categoryColors[4]}`,
                  post?.categorySlug === "travel" && `${categoryColors[5]}`,
                  "rounded-full px-2 py-1 capitalize text-textColor",
                )}
              >
                {post?.categorySlug}
              </p>
              <p>{post?.readTime || "5"} min read </p>
              <p> | </p>
              <p className="flex items-center">{post?.views || "0"} views</p>
            </div>
          </div>

          <h1 className="mb-12 text-2xl font-semibold xl:text-4xl 2xl:text-5xl">
            {post?.title ||
              "Lorem ipsum dolor sit ame. voluptatum place at atque autem perferendis?"}
          </h1>
          <UserCard data={post} />
        </div>
        {post?.img && (
          <div className="relative hidden h-96 w-full max-w-[500px]  lg:block">
            <Image
              src={post?.img || "/p1.jpeg"}
              className="rounded-sm object-cover"
              fill
              alt=""
            />
          </div>
        )}
      </div>
      <div className="flex gap-16">
        <div className="mt-12 flex-[5]">
          <div
            className="text-normal flex flex-col lg:text-lg xl:text-xl"
            dangerouslySetInnerHTML={{ __html: sanitizedPostHtml }}
          />
          <div className="flex gap-16">
            <div className="flex-[3]">
              <CommentSection postSlug={slug} />
            </div>
            <div className="flex-1">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
