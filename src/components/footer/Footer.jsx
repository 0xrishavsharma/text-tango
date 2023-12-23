import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-12 flex flex-col justify-between gap-10 py-5 text-[var(--softTextColor)] md:flex-row lg:items-center">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="w-max rounded-full border-[2px] border-gray-200">
            <Image
              className="rounded-full"
              src={"/rishavsharma.png"}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <h1 className="text-xl font-bold md:text-2xl">Rishav Sharma</h1>
        </div>
        <span className="text-sm font-light leading-[1.1] text-[var(--softTextColor)] xl:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          at quidem recusandae consequuntur iure. In soluta reprehenderit facere
          illo rem suscipit cum numquam, tempore doloremque similique eius ut
          exercitationem unde.
        </span>
        <div className="flex gap-3">
          <Image
            src="/facebook.png"
            alt="twitter logo"
            width={18}
            height={18}
          />
          <Image
            src="/instagram.png"
            alt="instagram logo"
            width={18}
            height={18}
          />
          <Image src="/tiktok.png" alt="linkedin logo" width={18} height={18} />
          <Image src="/youtube.png" alt="youtube logo" width={18} height={18} />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-8 py-5 text-[--var(--softTextColor)] sm:flex-row sm:gap-12 lg:justify-end lg:gap-24">
        <div className="flex flex-col gap-3">
          <span className="font-bold">Links</span>
          <Link className="text-sm lg:text-base" href={"/"}>
            Home
          </Link>
          <Link className="text-sm lg:text-base" href={"/"}>
            Blog
          </Link>
          <Link className="text-sm lg:text-base" href={"/"}>
            About
          </Link>
          <Link className="text-sm lg:text-base" href={"/"}>
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold">Tags</span>
          <Link className="text-sm lg:text-base" href={"/"}>
            Style
          </Link>
          <Link className="text-sm lg:text-base" href={"/"}>
            Coding
          </Link>
          <Link className="text-sm lg:text-base" href={"/"}>
            Fashion
          </Link>
          <Link className="text-sm lg:text-base" href={"/"}>
            Travel
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold">Social</span>
          <Link className="text-sm lg:text-base" href={"/"}>
            LinkedIn
          </Link>
          <Link className="text-sm lg:text-base" href={"/"}>
            Twitter
          </Link>
          <Link className="text-sm lg:text-base" href={"/"}>
            Instagram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
