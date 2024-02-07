"use client";
import Link from "next/link";
import React, { useState } from "react";
import SmallCard from "../smallCard/SmallCard";
import { smallCardData } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const MenuPosts = ({ type }) => {
  const firstFourData = smallCardData.slice(0, 4);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      console.log("fetching popular posts");
      const response = await axios.get("/api/popularPosts", {
        cache: "no-cache",
      });
      console.log("response", response);
      if (response.status !== 200) {
        throw new Error("Error fetching comments");
      }
      console.log("data", response.data);
      return response.data;
    },
  });
  return (
    <div>
      <div className="my-12">
        <h2 className="text-[var(--softTextColor)]">{"What's"} hot</h2>
        <h1 className="text-2xl font-bold">Most Popular</h1>
      </div>
      <div className="flex flex-col gap-8">
        {/* {
          // If there is an error fetching the popular posts
          isError && (
            <div className="flex items-center justify-center">
              <p className="text-2xl font-bold text-[var(--softTextColor)]">
                {"Couldn't"} fetch popular posts
              </p>
            </div>
          )
        } */}
        {console.log("data1", data)}

        {!isLoading ? (
          <div className="flex flex-col gap-8">
            {console.log("data2", data)}
            {data?.map((post, i) => {
              console.log("post", post);
              return (
                <Link href={"/"} className="" key={i + 1}>
                  <SmallCard
                    tag={post.categorySlug}
                    tagColor={post.tagColor}
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
        {firstFourData.map((card, i) => {
          return (
            <Link href={"/"} className="" key={i + 1}>
              <SmallCard
                type={type}
                tag={card.tag}
                tagColor={card.tagColor}
                para={card.para}
                author={card.author}
                img={card.img}
                date={card.date}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenuPosts;
