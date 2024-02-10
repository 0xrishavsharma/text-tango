import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { categoryList, cn } from "@/utils/utils";

const Footer = () => {
  return (
    <div className="mt-12 flex flex-col justify-between gap-10 py-5 text-[var(--textColor)] md:flex-row lg:items-center">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="w-max rounded-full border-[2px] border-gray-200">
            <Image
              className="rounded-full"
              src={"/texttango.jpeg"}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <h1 className="text-xl font-extrabold md:text-2xl">Text Tango</h1>
        </div>
        <span className="text-sm font-light leading-[1.1] text-[var(--softTextColor)] xl:text-base">
          Text Tango is a dynamic blogging platform designed to inspire
          creativity and foster a community of writers. With its focus on
          simplicity and user experience. Whether you&apos;re a seasoned writer
          or just starting your journey, Text Tango is the perfect partner to
          help you express your thoughts and ideas to the world.
        </span>
        <div className={cn(styles.social, "hidden flex-1 gap-3 lg:flex")}>
          <Link
            href="https://github.com/0xrishavsharma"
            target="_blank"
            className="h-9 w-9 rounded-full bg-textColor p-2"
          >
            <FaGithub className="text-xl text-bg" />
          </Link>
          <Link
            href="https://linkedin.com/in/0xrishavsharma"
            target="_blank"
            className="h-9 w-9 rounded-full bg-blue-600 p-2"
          >
            <FaLinkedinIn className="text-xl text-white" />
          </Link>
          <Link
            href="https://twitter.com/0xrishavsharma"
            target="_blank"
            className="h-9 w-9 rounded-full border-[1px] border-white bg-black p-2"
          >
            <FaXTwitter className="text-xl text-white" />
          </Link>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-8 py-5 text-[--var(--softTextColor)] sm:flex-row sm:gap-12 lg:justify-end lg:gap-24">
        <div className="flex flex-col gap-3">
          <span className="font-bold">Links</span>
          <Link className="text-sm lg:text-base" href={"/"}>
            Home
          </Link>
          {/* <Link className="text-sm lg:text-base" href={"/"}>
            About
          </Link>
          <Link className="text-sm lg:text-base" href={"/"}>
            Contact
          </Link> */}
          <Link className="text-sm lg:text-base" href={"/write"}>
            Write
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold">Tags</span>
          {categoryList.map((category, i) => {
            return (
              <Link
                href={`/blog?category=${category}`}
                className="text-sm capitalize lg:text-base"
                key={i + 1}
              >
                {category}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold">Social</span>
          <Link
            href="https://github.com/0xrishavsharma"
            className="text-sm lg:text-base"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/0xrishavsharma"
            className="text-sm lg:text-base"
          >
            LinkedIn
          </Link>
          <Link
            href="https://twitter.com/0xrishavsharma"
            className="text-sm lg:text-base"
          >
            Twitter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
