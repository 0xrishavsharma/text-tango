import Link from "next/link";
import React from "react";
import UserCard from "../userCard/UserCard";

const Comment = ({ content }) => {
  const status = "authenticated";
  return (
    <div className="my-12 flex flex-col gap-12">
      <div className="flex flex-col gap-3">
        <UserCard />
        <p className="text-lg">{content}</p>
      </div>
    </div>
  );
};

export default Comment;
