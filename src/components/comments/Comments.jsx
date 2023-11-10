import Link from "next/link";
import React from "react";

const Comments = () => {
  const status = "authenticated";
  return (
    <div>
      <h1 className="text-2xl font-bold">Comments</h1>
      {status === "authenticated"?<textarea></textarea>: <Link href="/login">Login to comment</Link>}
    </div>
  );
};

export default Comments;
