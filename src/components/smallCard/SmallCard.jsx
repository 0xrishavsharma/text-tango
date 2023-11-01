import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

const SmallCard = ({ type, tag, tagColor, para, author, img, date }) => {
  return (
    <div className="flex items-center gap-5">
      {type === "editors" && (
        <div className="relative aspect-square flex-[1] rounded-full">
          <Image
            className="h-16 w-16 rounded-full border-[3px] border-gray-200 object-cover"
            src={img}
            alt=""
            fill
          />
        </div>
      )}
      <div className="flex flex-[4] flex-col gap-2">
        <span
          className={cn(
            "w-max rounded-3xl px-2 py-[3px] text-xs text-white",
            tagColor,
          )}
        >
          {tag}
        </span>
        <p>{para}</p>
        <div className="flex text-xs">
          <span className="font-semibold">{author}</span>
          <span className="mx-1 text-[var(--softTextColor)]">-</span>
          <span className="text-[var(--softTextColor)]"> {date}</span>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
