import Comment from "@/components/commentComponents/comment/Comment";
import CommentSection from "@/components/commentComponents/commentSection/CommentSection";
import Menu from "@/components/menu/Menu";
import UserCard from "@/components/userCard/UserCard";
import Image from "next/image";
import React from "react";
import DOMPurify from "isomorphic-dompurify";
import useFetch from "@/utils/lib/apiRequest";
import { FaComment } from "react-icons/fa";

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const post = await useFetch(`posts/${slug}`);

  const sanitizedPostHtml = DOMPurify.sanitize(post?.content);
  return (
    <div className="py-10">
      <div className="flex items-center justify-between gap-12">
        <div className="flex flex-1 flex-col">
          <p>
            {post?.author?.name || "Rishav Sharma"} -{" "}
            {post?.author?.designation || "Full Stack Developer"}
          </p>
          <p>
            {post?.date || "12/12/2021"} - {post?.readTime || "5"} min read
          </p>
          <p>
            {post?.category || "Technology"} - {post?.tags || "Technology"}
          </p>
          <p>
            {post?.views || "0"} views -
            <FaComment className="ml-1 mr-2 inline-block" />
            {post?.comments?.length || "0"}{" "}
          </p>

          <h1 className="mb-12 text-4xl font-semibold xl:text-5xl 2xl:text-6xl">
            {post?.title ||
              "Lorem ipsum dolor sit ame. voluptatum place at atque autem perferendis?"}
          </h1>
          <UserCard post={post} />
        </div>
        {post?.img && (
          <div className="relative hidden h-96 flex-1 lg:block">
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
