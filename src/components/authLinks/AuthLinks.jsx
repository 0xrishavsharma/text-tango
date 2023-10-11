import { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

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
        <div className='items-center w-screen h-screen bg-red-600 lex '>
          <div className="absolute flex flex-col w-full h-full gap-20 left-2">
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
      }
    </>
  )
}

export default AuthLinks