
"use client"
import React, { useState } from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineClose } from "react-icons/ai"
const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="twitter logo" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram logo" width={24} height={24} />
        <Image src="/tiktok.png" alt="linkedin logo" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube logo" width={24} height={24} />
      </div>
      <div className={styles.logo}>Rishav Sharma</div>
      <div className={`${styles.links} justify-end`}>
        <ThemeToggle />
        <Link className={styles.link} href="/">Home</Link>
        <Link className={styles.link} href="/contact">Contact</Link>
        <Link className={styles.link} href="/about">About</Link>
        <AuthLinks />
        <RxHamburgerMenu onClick={() => setOpen(true)} className={`${open ? "hidden" : "block"} sm:hidden`} />
        <AiOutlineClose onClick={() => setOpen(false)} className={`${!open && "hidden"}`} />
      </div>
    </div>
  )
}

export default Navbar