"use client";
import Link from "next/link";
import Comment from "../comment/Comment";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Skeleton } from "../../ui/skeleton";
import CommentSkeleton from "../commentSkeleton/CommentSkeleton";

const CommentSection = ({ content, postSlug }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      const res = await new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            const response = await fetch(
              `http://localhost:3000/api/comments?postSlug=${postSlug}`,
              {
                cache: "no-cache",
              },
            );
            resolve(response);
          } catch (error) {
            reject(error);
          }
        }, 10);
      });
      if (!res.ok) {
        const error = new Error("Something went wrong");
        console.log("error", error);
        throw error;
      }
      const data = await res.json();
      return data;
    };
    fetchComments().then((data) => {
      setComments(data);
      setLoading(false);
    });
  }, [postSlug]);
  const { status } = useSession();
  return (
    <div className="my-12">
      <h1 className="mb-7 text-2xl font-bold text-softTextColor">Comments</h1>
      <div className="mb-12">
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
          <Link
            href="/login"
            className="animate-blink rounded-sm border-2 border-[var(--text-color)] bg-red-500 px-5 py-3 text-white"
          >
            Login to comment
          </Link>
        )}
      </div>
      {loading
        ? Array.from({ length: 5 }).map((id) => <CommentSkeleton key={id} />)
        : comments?.map((comment) => {
            return (
              <Comment
                data={comment}
                content={comment.content}
                key={comment.id}
              />
            );
          })}
    </div>
  );
};

export default CommentSection;
