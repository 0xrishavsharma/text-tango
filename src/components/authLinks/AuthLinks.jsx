import { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { cn } from "@/utils";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className="hidden md:block">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="">
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      {/* <RxHamburgerMenu onClick={() => setOpen(!open)} className={`${open ? "hidden" : "block"} sm:hidden cursor-pointer`} /> */}
      <RxHamburgerMenu
        className="cursor-pointer md:hidden"
        onClick={() => setOpen(!open)}
      />

      {open && (
        <>
          {/* <AiOutlineCloseCircle style={{ width: "1.8rem" }} onClick={() => setOpen(false)} className={cn("z-10 h-5 absolute right-5 top-5 cursor-pointer", !open ? "hidden" : "block")} /> */}
          <div className="fixed right-0 top-[100px] z-[9999] h-[calc(100vh_-_100px)] w-screen items-center justify-center bg-[var(--bg)]">
            {/* <div className={cn('items-center w-screen h-screen pl-8 transition-all bg-red-100 shadow-sm backdrop:blur-3xl left-10', */}
            {/* open ? "absolute top-0 bottom-0 -right-[1000vw] transition-all" : "hidden")}> */}
            <div className="relative flex h-full w-full flex-col items-center gap-20 pt-36">
              <Link className="text-3xl" href="/">
                Home
              </Link>
              <Link className="text-3xl" href="/contact">
                Contact
              </Link>
              <Link className="text-3xl" href="/about">
                About
              </Link>
              {status === "notauthenticated" ? (
                <Link className="text-3xl" href="/login">
                  Login
                </Link>
              ) : (
                <>
                  <Link className="text-3xl" href="/write">
                    Write
                  </Link>
                  <span className={cn(styles.link, "text-4xl")}>Logout</span>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AuthLinks;
