import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils";


const categories = [
  {

  }
]
const CategoryList = () => {
  return (
    <div className="flex flex-col">
      <h1 className="my-12 text-2xl lg:text-3xl font-bold">Popular Categories</h1>
      {/* <div className="flex w-full flex-wrap justify-between gap-3"> */}
      <div className={cn(styles.categories, "gap-3 text-[var(--textColor)]")}>
        <Link
          href="/blog?cat=style"
          //   className=" flex h-16 w-full items-center justify-center gap-3 rounded-lg bg-[#57c4ff31] capitalize sm:w-[25%] lg:w-[20%] xl:w-[15%]"
          className="flex h-16 w-full items-center justify-center gap-3 rounded-lg bg-blue-400/50 capitalize"
        >
          <Image
            className="h-6 w-6 rounded-full"
            src="/style.png"
            alt=""
            height={32}
            width={32}
          />
          <p>Style</p>
        </Link>
        <Link
          href="/blog?cat=style"
          //   className=" flex h-16 w-full items-center justify-center gap-3 rounded-lg bg-[#57c4ff31] capitalize sm:w-[25%] lg:w-[20%] xl:w-[15%]"
          className="flex h-16 w-full items-center justify-center gap-3 rounded-lg bg-pink-400/50 capitalize"
        >
          <Image
            className="h-6 w-6 rounded-full"
            src="/style.png"
            alt=""
            height={32}
            width={32}
          />
          <p>Fashion</p>
        </Link>
        <Link
          href="/blog?cat=style"
          //   className=" flex h-16 w-full items-center justify-center gap-3 rounded-lg bg-[#57c4ff31] capitalize sm:w-[25%] lg:w-[20%] xl:w-[15%]"
          className="flex h-16 w-full items-center justify-center gap-3 rounded-lg bg-green-400/50 capitalize"
        >
          <Image
            className="h-6 w-6 rounded-full"
            src="/style.png"
            alt=""
            height={32}
            width={32}
          />
          <p>Food</p>
        </Link>
        <Link
          href="/blog?cat=style"
          //   className=" flex h-16 w-full items-center justify-center gap-3 rounded-lg bg-[#57c4ff31] capitalize sm:w-[25%] lg:w-[20%] xl:w-[15%]"
          className="flex h-16 w-full items-center justify-center gap-3 rounded-lg bg-red-400/50 capitalize"
        >
          <Image
            className="h-6 w-6 rounded-full"
            src="/style.png"
            alt=""
            height={32}
            width={32}
          />
          <p>Travel</p>
        </Link>
        <Link
          href="/blog?cat=style"
          //   className=" flex h-16 w-full items-center justify-center gap-3 rounded-lg bg-[#57c4ff31] capitalize sm:w-[25%] lg:w-[20%] xl:w-[15%]"
          className="flex h-16 w-full items-center justify-center gap-3 rounded-lg bg-orange-400/50 capitalize"
        >
          <Image
            className="h-6 w-6 rounded-full"
            src="/style.png"
            alt=""
            height={32}
            width={32}
          />
          <p>Culture</p>
        </Link>
        <Link
          href="/blog?cat=style"
          //   className=" flex h-16 w-full items-center justify-center gap-3 rounded-lg bg-[#57c4ff31] capitalize sm:w-[25%] lg:w-[20%] xl:w-[15%]"
          className="flex h-16 w-full items-center justify-center gap-3 rounded-lg bg-purple-400/50 capitalize"
        >
          <Image
            className="h-6 w-6 rounded-full"
            src="/style.png"
            alt=""
            height={32}
            width={32}
          />
          <p>Coding</p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
