import React from "react";
import styles from "./menu.module.css";
import { cn } from "@/utils";
import Link from "next/link";
import Image from "next/image";
import SmallCard from "../smallCard/SmallCard";

const Menu = ({ className }) => {
  return (
    <div className={cn(styles.container, className)}>
      <div className="my-12">
        <h2 className="text-[var(--softTextColor)]">{"What's"} hot</h2>
        <h1 className="text-2xl font-bold">Most Popular</h1>
      </div>
      <Link href={"/"} className="flex flex-col gap-8">
        <SmallCard />
      </Link>
    </div>
  );
};

export default Menu;
