"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SmallCard from "../smallCard/SmallCard";
import { selectedCategoryColor, smallCardData } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const MenuPosts = ({ type }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [type],
    queryFn: async () => {
      const response = await axios.get(
        `/api/${type === "editors" ? "writerPicks" : "popularPosts"}`,
        {
          cache: "no-cache",
        },
      );
      if (response.status !== 200) {
        throw new Error("Error fetching comments");
      }
      return response.data;
    },
  });
  useEffect(() => {
    if (isError) {
      console.error(isError);
    }
  }, [isError]);

  return (
    <div>
      <div className="my-12">
        <h2 className="text-[var(--softTextColor)]">
          {type === "editors" ? "Chosen by popular authors" : "What's hot"}
        </h2>
        <h1 className="text-2xl font-bold">
          {type === "editors" ? "Writer's choice" : "Most Popular"}
        </h1>
      </div>
      <div className="flex flex-col gap-8">
        {!isLoading ? (
          <div className="flex flex-col gap-8">
            {data?.map((post, i) => {
              return (
                <Link href={"/"} className="" key={i + 1}>
                  <SmallCard
                    type={type}
                    tag={post.categorySlug}
                    tagColor={selectedCategoryColor}
                    para={post.content}
                    author={post.author.name}
                    img={post.author.image}
                    date={post.createdAt}
                  />
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-2xl font-bold text-[var(--softTextColor)]">
              Loading...
            </p>
          </div>
        )}
        {/* {firstFourData?.map((card, i) => {
          return (
            <Link href={"/"} className="" key={i + 1}>
              <SmallCard
                type={type}
                tag={card.tag}
                tagColor={selectedCategoryColor(i)}
                para={card.para}
                author={card.author}
                img={card.img}
                date={card.date}
              />
            </Link>
          );
        })} */}
      </div>
    </div>
  );
};

export default MenuPosts;
