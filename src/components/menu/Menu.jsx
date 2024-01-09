// "use client";
import React from "react";
import styles from "./menu.module.css";
import { cn, smallCardData } from "@/utils/utils";
import Link from "next/link";
import Image from "next/image";
import SmallCard from "../smallCard/SmallCard";
import MenuCategories from "../menuCategories/MenuCategories.jsx";
import MenuPosts from "../menuPosts/MenuPosts.jsx";

const Menu = ({ className, category }) => {
  return (
    <div
      className={cn(styles.container, className, "hidden flex-[2] lg:block")}
    >
      <MenuPosts type="hot" />
      <MenuCategories category={category} />
      <MenuPosts type="editors" />
    </div>
  );
};

export default Menu;
