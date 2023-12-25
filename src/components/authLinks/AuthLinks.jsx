import { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { cn } from "@/utils/utils";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { data, status } = useSession();
  const [settingsOpen, setSettingsOpen] = useState(false);

  console.log("Data", data);
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className="hidden md:block">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="">
            Write
          </Link>
          <span
            className={cn(
              styles.link,
              "relative flex w-fit cursor-pointer select-none items-center gap-2 rounded-lg  border-[0.1px] border-black/40 bg-black/10 px-3 py-2 dark:border-white/30 dark:bg-white/10",
            )}
            onClick={() => setSettingsOpen(!settingsOpen)}
          >
            <div className="rounded-full border-[0.4px] dark:border-white/40">
              <Image
                src={data?.user?.image}
                className="rounded-full"
                width={30}
                height={30}
                alt="user image"
              />
            </div>
            <p className="text-lg">{data?.user?.name}</p>
          </span>
          {settingsOpen && (
            <div className="absolute right-0 top-20 z-[9999] max-h-max w-max items-center justify-center bg-red-700">
              <div className="relative flex w-full flex-col items-center gap-8">
                <Link className="" href="/settings">
                  Settings
                </Link>
                <Link className="" href="" onClick={signOut}>
                  Logout
                </Link>
              </div>
            </div>
          )}
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
                  <span className={cn(styles.link, "text-4xl")}>
                    <Image src={data?.user?.user?.image} alt="user image" />
                    {data?.user?.user?.name}
                  </span>
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
