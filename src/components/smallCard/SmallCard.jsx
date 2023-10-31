import Image from "next/image";
import React from "react";

const SmallCard = () => {
  return (
    <div>
      <div className="flex items-center gap-5">
        <div className="relative aspect-square flex-[1] rounded-full">
          <Image
            className="h-16 w-16 rounded-full border-[3px] border-gray-200 object-cover"
            src="/coding.png"
            alt=""
            fill
          />
        </div>
        <div className="flex flex-[4] flex-col gap-2">
          <span className="w-max rounded-3xl bg-red-400 px-2 py-[3px] text-sm font-semibold">
            Travel
          </span>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <div className="flex text-xs">
            <span className="font-semibold">John Doe</span>
            <span className="mx-1 text-[var(--softTextColor)]">-</span>
            <span className="text-[var(--softTextColor)]"> 30.10.2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
