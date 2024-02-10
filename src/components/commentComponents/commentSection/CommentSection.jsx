"use client";
import Link from "next/link";
import Comment from "../comment/Comment";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import CommentSkeleton from "../commentSkeleton/CommentSkeleton";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Icons
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CommentSection = ({ postSlug }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(null);
  const { data, isLoading, refetch, error, isError } = useQuery({
    queryKey: ["postSlug"],
    queryFn: async () => {
      const response = await axios.get(`/api/comments?postSlug=${postSlug}`, {
        cache: "no-cache",
      });
      if (response.status !== 200) {
        throw new Error("Error fetching comments");
      }
      return response.data;
    },
  });

  const postComment = async (content, path) => {
    try {
      const data = await fetch(`/api/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          postSlug,
        }),
      });
      setComments((prev) => [...prev, data]);
      refetch();
      setNewComment("");
    } catch (error) {
      console.log("error", error);
    }
  };

  const { status } = useSession();
  return (
    <div className="my-12">
      <h1 className="mb-7 text-2xl font-bold text-softTextColor">Comments</h1>
      <div className="mb-12">
        {status === "authenticated" ? (
          <div className="flex flex-col items-start justify-between gap-5">
            <textarea
              className="placeholder:text-[family:'Inter'] w-full rounded-sm border-[1.5px] bg-softBg p-5 outline-none focus:border-themeRedColor"
              placeholder="Add a comment..."
              onChange={(e) => setNewComment(e.target.value)}
              value={newComment}
            />
            <button
              className="text-whiten h-max cursor-pointer rounded-sm bg-themeRedColor px-6 py-2 font-medium transition-all duration-300 ease-in-out hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-400"
              onClick={(e) => postComment(newComment)}
              disabled={
                isLoading || !newComment || newComment.length < 6 || null
              }
            >
              {isLoading ? (
                <span className="">
                  <AiOutlineLoading3Quarters className="animate-spin text-lg duration-500" />
                </span>
              ) : (
                "Comment"
              )}
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="animate-blink rounded-sm border-2 border-[var(--text-color)] bg-themeRedColor px-5 py-3 text-white"
          >
            Login to comment
          </Link>
        )}
      </div>
      {isLoading
        ? Array.from({ length: 5 }).map((_id) => <CommentSkeleton key={_id} />)
        : data
            ?.sort((a, b) => {
              return new Date(b.createdAt) - new Date(a.createdAt);
            })
            ?.map((comment, _id) => {
              return (
                <Comment data={comment} content={comment.content} key={_id} />
              );
            })}
    </div>
  );
};

export default CommentSection;
