import Comment from "@/components/comment/Comment";
import CommentSection from "@/components/commentSection/CommentSection";
import Menu from "@/components/menu/Menu";
import UserCard from "@/components/userCard/UserCard";
import Image from "next/image";
import React from "react";
import DOMPurify from "isomorphic-dompurify";

const getPost = async (slug) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
      catch: "no-cache",
    });
    const post = res.json();
    return post;
  } catch (err) {
    console.log(err);
  }
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  const sanitizedHtml = DOMPurify.sanitize(post?.description);
  return (
    <div className="">
      <div className="flex items-center justify-between gap-12">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-12 text-4xl font-semibold xl:text-5xl 2xl:text-6xl">
            {post?.title ||
              "Lorem ipsum dolor sit ame. voluptatum place at atque autem perferendis?"}
          </h1>
          <UserCard />
        </div>
        {post?.image && (
          <div className="relative hidden h-96 flex-1 lg:block">
            <Image
              src={post?.image || "/images/placeholder.png"}
              className="rounded-sm object-cover"
              fill
              alt=""
            />
          </div>
        )}
      </div>
      <div className="flex max-w-max gap-12">
        <div className="mt-12 flex-[5]">
          <div
            className="flex flex-col"
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
          />
          <div>
            <CommentSection
              content=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            adipisci aperiam voluptates et."
            />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
