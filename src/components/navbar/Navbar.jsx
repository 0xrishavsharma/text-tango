"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { cn } from "@/utils/utils";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 z-[999] flex items-center justify-center bg-bg shadow-sm">
      <div
        className={cn(
          // "navContainer relative flex h-24 w-full items-center justify-between gap-8 max-[1536px]:max-w-[1336px] max-[1280px]:max-w-[1024px] max-[1024px]:max-w-[768px] max-[768px]:max-w-[640px] max-[640px]:max-w-[484px]",
          "navContainer relative flex h-24 w-full max-w-[1336px] items-center justify-between gap-8",
        )}
      >
        <div className={cn(styles.social, "hidden flex-1 gap-3 lg:flex")}>
          <Image
            src="/facebook.png"
            alt="twitter logo"
            width={24}
            height={24}
          />
          <Image
            src="/instagram.png"
            alt="instagram logo"
            width={24}
            height={24}
          />
          <Image src="/tiktok.png" alt="linkedin logo" width={24} height={24} />
          <Image src="/youtube.png" alt="youtube logo" width={24} height={24} />
        </div>
        <Link
          href="/"
          className={cn(
            styles.logo,
            "text-left font-bold xxs:text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-center",
          )}
        >
          Rishav Sharma
        </Link>
        <div
          className={cn(
            styles.links,
            "flex flex-1 items-center justify-end gap-5 text-lg",
          )}
        >
          <ThemeToggle />
          <Link className={cn(styles.link, "hidden md:block")} href="/">
            Home
          </Link>
          <Link className={cn(styles.link, "hidden md:block")} href="/contact">
            Contact
          </Link>
          <Link className={cn(styles.link, "hidden md:block")} href="/about">
            About
          </Link>
          <AuthLinks />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
