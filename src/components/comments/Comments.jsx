import Link from "next/link";
import React from "react";
import UserCard from "../userCard/UserCard";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className="my-12">
      <h1 className="mb-7 text-2xl font-bold text-softTextColor">Comments</h1>
      {status === "authenticated" ? (
        <div className="flex items-center justify-between gap-5">
          <textarea
            className="placeholder:text-[family:'Inter'] w-full rounded-sm bg-softBg p-5"
            placeholder="write a comment..."
          />
          <button className="h-max cursor-pointer rounded-sm bg-red-500 px-5 py-2 font-bold text-white ">
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to comment</Link>
      )}
      <div className="my-12 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <UserCard />
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            adipisci aperiam voluptates et.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <UserCard />
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            adipisci aperiam voluptates et.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <UserCard />
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            adipisci aperiam voluptates et.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <UserCard />
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            adipisci aperiam voluptates et.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
