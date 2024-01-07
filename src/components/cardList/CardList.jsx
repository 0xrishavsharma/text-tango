import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import { cn } from "@/utils/utils";
import Card from "../card/Card";

const getPosts = async (page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-cache",
  });
  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();
  return data;
};

const CardList = async ({ className, page }) => {
  const posts = await getPosts(page);

  const POST_PER_PAGE = 3;
  const hasPrevItems = POST_PER_PAGE * (page-1) > 0;
  const hasNextItems = posts.length > 0;
  return (
    <div className={cn(styles.container, className, "flex-[5]")}>
      <div className={cn("")}>
        <h1 className="my-12 text-2xl font-bold xl:text-3xl">Recent Posts</h1>
        <div className="flex flex-col gap-12">
          {posts?.map((post) => {
            return <Card key={post._id} post={post} />;
          })}
        </div>
      </div>
      <Pagination
        page={page}
        hasPrevItems={hasPrevItems}
        hasNextItems={hasNextItems}
      />
    </div>
  );
};

export default CardList;
