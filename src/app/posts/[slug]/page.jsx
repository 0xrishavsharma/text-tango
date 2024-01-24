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

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const post = await useFetch(`posts/${slug}`);

  const sanitizedPostHtml = DOMPurify.sanitize(post?.content);
  return (
    <div className="py-10">
      <div className="flex flex-col items-start justify-between gap-12">
        <div className="flex flex-1 flex-col">
          <div className="mb-3 flex flex-col gap-3 text-softTextColor">
            <p>
              {post?.date || "12/12/2021"} - {post?.readTime || "5"} min read
            </p>
            <div className="flex gap-3">
              <p
                className={cn(
                  post?.categorySlug === "fashion" && "bg-pink-500",
                  post?.categorySlug === "food" && "bg-blue-500",
                  post?.categorySlug === "coding" && "bg-green-500",
                  post?.categorySlug === "culture" && "bg-red-500",
                  post?.categorySlug === "style" && "bg-yellow-500",
                  post?.categorySlug === "travel" && "bg-purple-500",
                )}
              >
                {post?.categorySlug}
              </p>
              <p>
                {post?.views || "0"} views -
                <FaComment className="ml-1 mr-2 inline-block" />
                {post?.comments?.length || "0"}{" "}
              </p>
            </div>
          </div>

          <h1 className="mb-12 text-2xl font-semibold xl:text-4xl 2xl:text-5xl">
            {post?.title ||
              "Lorem ipsum dolor sit ame. voluptatum place at atque autem perferendis?"}
          </h1>
          <UserCard post={post} />
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
      {/* <div className="flex max-w-max gap-12"> */}
      <div className="flex gap-12">
        <div className="mt-12 flex-[5]">
          <div
            className="flex flex-col"
            dangerouslySetInnerHTML={{ __html: sanitizedPostHtml }}
          />
          <div>
            <CommentSection
              content=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            adipisci aperiam voluptates et."
              postSlug={slug}
            />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
