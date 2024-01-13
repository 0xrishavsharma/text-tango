"use client";
import Link from "next/link";
import Comment from "../comment/Comment";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Skeleton } from "../../ui/skeleton";
import CommentSkeleton from "../commentSkeleton/CommentSkeleton";
import useFetch from "@/hooks/useFetch";

const CommentSection = ({ content, postSlug }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState(null);
  const { data: response, error } = useFetch(
    newComment ? "comments" : null,
    newComment ? "POST" : null,
    newComment ? { content: newComment, postSlug } : null,
  );

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

  useEffect(() => {
    if (response) {
      setComments((oldComments) => [...oldComments, response]);
      setNewComment(null);
    }
    if (error) {
      console.log("error", error);
    }
  }, [response, error]);

  const postComment = async (comment) => {
    setNewComment(comment);
  };
  const { status } = useSession();
  return (
    <div className="my-12">
      <h1 className="mb-7 text-2xl font-bold text-softTextColor">Comments</h1>
      <div className="mb-12">
        {status === "authenticated" ? (
          <div className="flex items-center justify-between gap-5">
            <textarea
              className="placeholder:text-[family:'Inter'] w-full rounded-sm border-[1.5px] bg-softBg p-5 outline-none focus:border-themeRedColor"
              placeholder="write a comment..."
            />
            <button
              className="h-max cursor-pointer rounded-sm bg-themeRedColor px-8 py-3 font-semibold text-white"
              onClick={(e) => postComment(e.target.value)}
            >
              Send
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
