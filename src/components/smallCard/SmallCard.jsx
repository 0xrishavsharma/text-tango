import { cn } from "@/utils/utils";
import Image from "next/image";
import React from "react";
import DOMPurify from "isomorphic-dompurify";

const SmallCard = ({ type, tag, tagColor, para, author, img, date }) => {
  console.log("All props", type, tag, tagColor, para, author, img, date);

  const safeSmallCardContent = DOMPurify.sanitize(para);

  const postDate = new Date("2024-01-23T19:15:47.740Z");
  const formattedDate = `${String(postDate.getDate()).padStart(2, "0")}.${String(postDate.getMonth() + 1).padStart(2, "0")}.${postDate.getFullYear()}`;
  console.log("formattedDate", formattedDate);

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
            "w-max rounded-3xl px-2 py-[3px] text-xs text-white lg:text-sm xl:text-base",
            tagColor,
          )}
        >
          {tag}
        </span>
        <p
          className="text-sm lg:text-lg"
          dangerouslySetInnerHTML={{
            __html: `${safeSmallCardContent.substring(0, 50)}...`,
          }}
        />
        <div className="flex text-xs lg:text-sm">
          <span className="font-semibold">{author}</span>
          <span className="mx-1 text-[var(--softTextColor)]">-</span>
          <span className="text-[var(--softTextColor)]"> {formattedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
