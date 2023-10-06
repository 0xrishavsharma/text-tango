"use client"
import React from 'react'
import styles from "./themeToggle.module.css"
import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className={`${styles.container} ${theme === "light" ? "bg-[#0f172a]" : "bg-white"}`} onClick={toggleTheme}>
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div className={`${styles.ball} ${theme === "dark" ? "left-1 bg-[#0f172a]" : "right-1 bg-white"}`} width={14} height={14}>

      </div>
      <Image src="/sun.png" alt="" width={16} height={16} />
    </div>
  )
}

export default ThemeToggle