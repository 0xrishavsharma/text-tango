"use client";

import React, { useEffect, useState } from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/utils";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch("http://localhost:3000/api/categories");
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      setCategories(data);
    };
    getCategories();
  }, []);
  const categoriesColors = [
    "bg-blue-400/50",
    "bg-pink-400/50",
    "bg-green-400/50",
    "bg-red-400/50",
    "bg-orange-400/50",
    "bg-purple-400/50",
  ];

  // If we've used all colors, reset the colors array
  {
    /* // Create a copy of the categoriesColors array */
  }
  let colors = [...categoriesColors];
  if (colors?.length === 0) {
    colors = [...categoriesColors];
  }

  // Get a random index
  const randomIndex = Math.floor(Math.random() * colors?.length);

  // Get the color at the random index
  const color = colors[randomIndex];

  // Remove the color from the array
  colors.splice(randomIndex, 1);

  return (
    <div className="flex flex-col">
      <h1 className="my-12 text-2xl font-bold lg:text-3xl">
        Popular Categories
      </h1>
      {/* <div className="flex w-full flex-wrap justify-between gap-3"> */}
      <div className={cn(styles.categories, "gap-3 text-[var(--textColor)]")}>
        {categories?.map((category, index) => {
          // Use the color in your component
          return (
            <Link
              key={index}
              href={`/blog?cat=${category.title}`}
              className={cn(
                "flex h-16 w-full items-center justify-center gap-3 rounded-lg capitalize",
                color,
              )}
            >
              <Image
                className="h-6 w-6 rounded-full"
                src="/style.png"
                alt=""
                height={32}
                width={32}
              />
              <p>{category.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
