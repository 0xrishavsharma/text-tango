import {
  cn,
  getDate,
  sanitizedHtml,
  selectedCategoryColor,
} from "@/utils/utils";
import Image from "next/image";
import React from "react";
import DOMPurify from "isomorphic-dompurify";

const SmallCard = ({ type, tag, para, author, img, date }) => {
  return (
    <div className="flex items-center gap-3">
      {type === "editors" && (
        <div className="relative aspect-square rounded-full">
          <Image
            className="rounded-full border-[3px] border-gray-200 object-cover"
            src={img}
            alt=""
            width={52}
            height={52}
          />
        </div>
      )}
      <div className="flex flex-[4] flex-col gap-2">
        <span
          className={cn(
            "w-max rounded-3xl px-2 py-[3px] text-xs text-white lg:text-sm xl:text-base",
            selectedCategoryColor(tag),
          )}
        >
          {tag}
        </span>
        <div
          className="text-sm lg:text-lg"
          dangerouslySetInnerHTML={{
            __html: `${sanitizedHtml(para).substring(0, 50)}...`,
          }}
        />
        <div className="flex text-xs lg:text-sm">
          <span className="font-semibold">{author}</span>
          <span className="mx-1 text-[var(--softTextColor)]">-</span>
          <span className="text-[var(--softTextColor)]"> {getDate(date)}</span>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
