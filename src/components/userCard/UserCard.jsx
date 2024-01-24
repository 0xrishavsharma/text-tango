import Image from "next/image";
import React from "react";
import { getDate } from "@/utils/utils";

const UserCard = ({ data }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-12 w-12 rounded-full">
        {
          data?.author?.image && (
            <Image
              src={data?.author?.image || "/p1.jpeg"}
              className="rounded-full object-cover"
              fill
              alt=""
            />
          )
          // : (
          //   <Image
          //     src="/p1.jpeg"
          //     className="rounded-full object-cover"
          //     fill
          //     alt=""
          //   />
          // )
        }
      </div>
      <div className="flex flex-col gap-[2px] text-softTextColor">
        <h3 className="text-lg font-semibold">{data?.author?.name}</h3>
        <p className="text-base">{getDate(data?.createdAt)}</p>
      </div>
    </div>
  );
};

export default UserCard;
