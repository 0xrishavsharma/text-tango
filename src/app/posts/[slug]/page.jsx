import Comment from "@/components/comment/Comment";
import CommentSection from "@/components/commentSection/CommentSection";
import Menu from "@/components/menu/Menu";
import UserCard from "@/components/userCard/UserCard";
import Image from "next/image";
import React from "react";
import DOMPurify from "isomorphic-dompurify";
import useFetch from "@/hooks/useFetch";

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const post = await useFetch(`posts/${slug}`);

  const sanitizedPostHtml = DOMPurify.sanitize(post?.description);
  return (
    <div className="py-10">
      <div className="flex items-center justify-between gap-12">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-12 text-4xl font-semibold xl:text-5xl 2xl:text-6xl">
            {post?.title ||
              "Lorem ipsum dolor sit ame. voluptatum place at atque autem perferendis?"}
          </h1>
          <UserCard post={post} />
        </div>
        {post?.image && (
          <div className="relative hidden h-96 flex-1 lg:block">
            <Image
              src={post?.image || "/p1.jpeg"}
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
