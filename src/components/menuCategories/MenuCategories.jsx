import { cn, smallCardData } from "@/utils/utils";
import Link from "next/link";
import React from "react";
import { getCategories, categoryColors } from "@/utils/utils";
import useFetch from "@/utils/lib/apiRequest";

const MenuCategories = async ({ type, category }) => {
  const categories = await useFetch("categories");
  return (
    <div>
      <div className="mb-8 mt-12">
        <h2 className="text-[var(--softTextColor)]">Discover by topic</h2>
        <h1 className="text-2xl font-bold">Categories</h1>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories?.map((category, i) => {
          const color = categoryColors[i % categoryColors.length];
          return (
            <Link
              key={i + 1}
              href={`/blog?category=${category.title}`}
              className={cn(
                "w-max rounded px-3 py-[4px] text-sm text-white",
                color,
              )}
            >
              {category.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenuCategories;
