import Image from "next/image";
import React from "react";

const UserCard = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-12 w-12 rounded-full">
        <Image
          src="/p1.jpeg"
          className="rounded-full object-cover"
          fill
          alt=""
        />
      </div>
      <div className="flex flex-col gap-[2px] text-softTextColor">
        <h3 className="text-lg font-semibold">Verika Pakhija</h3>
        <p className="text-base">25th April 2023</p>
      </div>
    </div>
  );
};

export default UserCard;
