import { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { cn } from "@/utils/utils";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { motion as m } from "framer-motion";

const getFirstName = (name) => {
  const firstName = name?.split(" ")[0];
  return firstName?.length > 10 ? `${firstName?.slice(0, 10)}...` : firstName;
};

const motionNav = {
  open: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 30 },
  },
  closed: { x: "100%", opacity: 0, transition: { delay: 0.2 } },
};

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { data, status } = useSession();
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <>
      {status === "unauthenticated" ? (
        <>
          <Link href="/write" className="">
            Write
          </Link>
          <Link href="/login" className="hidden md:block">
            Login
          </Link>
        </>
      ) : (
        <>
          <Link href="/write" className="">
            Write
          </Link>
          <span
            className={cn(
              styles.link,
              "flex w-fit cursor-pointer select-none items-center justify-center gap-2 rounded-full rounded-lg border-black bg-black/5 dark:border-white/30 dark:bg-white/10 sm:relative sm:border-[0.1px] sm:px-3 sm:py-2",
            )}
            onClick={() => setSettingsOpen(!settingsOpen)}
          >
            <div className="rounded-full sm:border-[0.4px] sm:dark:border-white/40">
              <Image
                src={data?.user.image}
                className="hidden rounded-full sm:block"
                width={30}
                height={30}
                alt="user image"
              />
              <Image
                src={data?.user.image}
                className=" rounded-full sm:hidden"
                width={40}
                height={40}
                alt="user image"
              />
            </div>
            <p className="hidden text-lg sm:flex">
              {getFirstName(data?.user?.name)}
            </p>
            {settingsOpen && (
              <div className="absolute right-10 top-20 z-[9999] m-auto max-h-max max-w-max items-center justify-center rounded-lg border-[0.1px] border-white/70 bg-black/10 text-white backdrop-blur-sm sm:left-0 sm:right-0 sm:top-14 sm:w-full ">
                <div className="relative flex w-full flex-col items-center gap-8 rounded-lg bg-white/30 px-5 py-2 text-white backdrop:blur-xl sm:px-6 sm:py-3">
                  {/* <Link className="" href="/settings">
                    Settings
                  </Link> */}
                  <Link className="" href="" onClick={signOut}>
                    Logout
                  </Link>
                </div>
              </div>
            )}
          </span>
        </>
      )}

      {/* <RxHamburgerMenu
        className="cursor-pointer text-2xl md:hidden"
        onClick={() => setOpen(!open)}
      /> */}

      {open && (
        <>
          <m.div
            className="fixed right-0 top-[100px] z-[9999] h-[calc(100vh_-_100px)] w-screen items-center justify-center bg-[var(--bg)]"
            variants={motionNav}
          >
            <div className="relative flex h-full w-full select-none flex-col items-center gap-20 pt-36">
              <Link
                className="text-3xl"
                href="/"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              {status === "unauthenticated" ? (
                <Link
                  className="text-3xl"
                  href="/login"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>
              ) : (
                <>
                  <Link
                    className="text-3xl"
                    href="/write"
                    onClick={() => setOpen(false)}
                  >
                    Write
                  </Link>
                </>
              )}
            </div>
          </m.div>
        </>
      )}
    </>
  );
};

export default AuthLinks;
