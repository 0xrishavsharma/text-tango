import { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { cn } from "@/utils";

const AuthLinks = () => {
  const [open, setOpen] = useState(false)
  const status = "notauthenticated"
  return (
    <>
      {
        status === "notauthenticated" ?
          (<Link href="/login" className="hidden sm:block">Login</Link>) :
          (<>
            <Link href="/write" className="">Write</Link>
            <span className={styles.link}>Logout</span>
          </>)
      }
      <RxHamburgerMenu onClick={() => setOpen(true)} className={`${open ? "hidden" : "block"} sm:hidden cursor-pointer`} />

      {open &&
        <>                       
          <AiOutlineCloseCircle style={{width: "1.8rem"}} onClick={() => setOpen(false)} className={cn("z-10 h-5 absolute right-5 top-5 cursor-pointer")} />
          <div className='absolute bottom-0 right-0 items-center w-screen h-screen pl-8 bg-red-600 left-10'>
            <div className="relative flex flex-col w-full h-full gap-20 mt-28 ">
              <Link className="" href="/">Home</Link>
              <Link className="" href="/contact">Contact</Link>
              <Link className="" href="/about">About</Link>
              {
                status === "notauthenticated" ?
                  (<Link href="/login">Login</Link>) :
                  (<>
                    <Link href="/write">Write</Link>
                    <span className={styles.link}>Logout</span>
                  </>)
              }
            </div>
          </div>
        </>
      }
    </>
  )
}

export default AuthLinks