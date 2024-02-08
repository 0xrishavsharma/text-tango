import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sanitizedHtml, targetUrl } from "@/utils/utils";
import DOMPurify from "isomorphic-dompurify";

const Featured = async ({ params }) => {
  const getFeaturedPost = async () => {
    const res = await fetch(`${targetUrl}/api/post/featured`, {
      cache: "no-cache",
    });
    const post = await res.json();
    return post;
  };
  const post = await getFeaturedPost();

  return (
    <div className="mt-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
        <span className="font-bold">Welcome to Text Tango! </span>
        <span className="font-thin">Your dance with words begins here </span>
      </h1>
      <div className="space-between mt-12 flex flex-col gap-8 ms:flex-row">
        {/* <div className='flex gap-8 mt-12 space-between'> */}
        <div className="relative h-64 w-64 flex-1 md:h-96 md:w-96">
          <Image
            src={post?.img}
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover"
            fill
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-4">
          <h1 className=" text-3xl font-bold lg:text-4xl">{post?.title}</h1>
          <p className="text-base font-light text-[var(--softTextColor)] xl:text-lg">
            <div
              dangerouslySetInnerHTML={{
                __html: `${sanitizedHtml(post?.content).substring(0, 200)}...
 `,
              }}
            />
          </p>
          <Link
            href={`/posts/${post?.slug}`}
            className="w-max rounded bg-[var(--textColor)] px-3 py-2 text-sm text-[var(--bg)] lg:text-base xl:text-lg"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
