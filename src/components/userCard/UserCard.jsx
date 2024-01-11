import Image from "next/image";
import React from "react";

const UserCard = ({ post }) => {
  const author = post?.author;
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-12 w-12 rounded-full">
        {author?.image && (
          <Image
            // src={author?.image}
            src={author?.image || "/p1.jpeg"}
            className="rounded-full object-cover"
            fill
            alt=""
          />
        )}
      </div>
      <div className="flex flex-col gap-[2px] text-softTextColor">
        <h3 className="text-lg font-semibold">
          {author?.name || "Verika Pakhija"}
        </h3>
        <p className="text-base">{post?.createdAt?.substring(0, 10)}</p>
      </div>
    </div>
  );
};

export default UserCard;
