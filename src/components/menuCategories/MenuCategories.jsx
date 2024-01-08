import { cn, smallCardData } from "@/utils/utils";
import Link from "next/link";
import React from "react";

const MenuCategories = ({ type }) => {
  return (
    <div>
      <div className="mb-8 mt-12">
        <h2 className="text-[var(--softTextColor)]">Discover by topic</h2>
        <h1 className="text-2xl font-bold">Categories</h1>
      </div>
      <div className="flex flex-wrap gap-2">
        {smallCardData.map((card, i) => {
          return (
            <Link
              key={i + 1}
              href={"/blog?cat="}
              className={cn(
                "w-max rounded px-3 py-[4px] text-sm text-white",
                card.tagColor,
              )}
            >
              {card.tag}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenuCategories;
