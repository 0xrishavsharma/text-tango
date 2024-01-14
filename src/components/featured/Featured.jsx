import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";
import useFetch from "@/utils/lib/apiRequest";

const Featured = ({ params }) => {
  // const post = useFetch(`posts/${params.slug}`);
  return (
    <div className="mt-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
        <span className="font-bold">Hey, Rishav Sharma here! </span>
        <span className="font-thin">
          Dive into my world and pickup useful nuggets.
        </span>
      </h1>
      <div className="space-between mt-12 flex flex-col gap-8 ms:flex-row">
        {/* <div className='flex gap-8 mt-12 space-between'> */}
        <div className="relative h-64 w-64 flex-1 md:h-96 md:w-96">
          <Image
            src="/p1.jpeg"
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover"
            fill
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-4">
          <h1 className=" text-3xl font-bold lg:text-4xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit
          </h1>
          <p className="text-base font-light text-[var(--softTextColor)] xl:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            minus veritatis qui tempore perspiciatis, cumque saepe sint officiis
            aliquid pariatur. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Odit, aspernatur!
          </p>
          <Link
            // href={`/posts/${post.slug}`}
            href="/"
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
