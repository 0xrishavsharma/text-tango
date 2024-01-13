import Link from "next/link";
import React from "react";
import UserCard from "../userCard/UserCard";

const Comment = ({ content, data, key: keyId }) => {
  const status = "authenticated";
  return (
    <div className="my-12 flex flex-col gap-12" key={keyId}>
      <div className="flex flex-col gap-3">
        <UserCard data={data} />
        <p className="text-lg">{content}</p>
      </div>
    </div>
  );
};

export default Comment;
