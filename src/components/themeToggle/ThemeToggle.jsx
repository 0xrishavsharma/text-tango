"use client";
import React from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`${styles.container} ${
        theme === "light" ? "bg-[#0f172a]" : "bg-white"
      }`}
      onClick={toggleTheme}
    >
      <Image
        src="/moon.png"
        className="ml-[1px]"
        alt=""
        width={12}
        height={12}
      />
      <div
        className={`${styles.ball} ${
          theme === "dark" ? "right-[1px] bg-[#0f172a]" : "left-[2px] bg-white"
        }`}
        width={14}
        height={14}
      ></div>
      <Image
        src="/sun.png"
        className="mr-[1px]"
        alt=""
        width={13}
        height={13}
      />
    </div>
  );
};

export default ThemeToggle;
