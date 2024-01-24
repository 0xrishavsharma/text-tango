import Image from "next/image";
import React from "react";

const UserCard = ({ post }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-12 w-12 rounded-full">
        {
          post?.author?.image && (
            <Image
              src={post?.author?.image || "/p1.jpeg"}
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
        <h3 className="text-lg font-semibold">{post?.author?.name}</h3>
        <p className="text-base">{post?.createdAt?.substring(0, 10)}</p>
      </div>
    </div>
  );
};

export default UserCard;
