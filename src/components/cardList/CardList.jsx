import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Card from "../card/Card";

const CardList = ({ className }) => {
  return (
    <div className={cn(styles.container, className, "flex-[5]")}>
      <div className={cn("")}>
        <h1 className="my-12 text-2xl font-bold xl:text-3xl">Recent Posts</h1>
        <div className="flex flex-col gap-12">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
