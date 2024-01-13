"use client";
import Link from "next/link";
import Comment from "../comment/Comment";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Skeleton } from "../../ui/skeleton";
import CommentSkeleton from "../commentSkeleton/CommentSkeleton";
import useFetch from "@/hooks/useFetch";
import { Button } from "@/components/ui/button";
import { useQuery } from "react-query";

const CommentSection = ({ postSlug }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchComments = async () => {
  //     setLoading(true);
  //     const res = await new Promise((resolve, reject) => {
  //       setTimeout(async () => {
  //         try {
  //           const response = await fetch(
  //             `http://localhost:3000/api/comments?postSlug=${postSlug}`,
  //             {
  //               cache: "no-cache",
  //             },
  //           );
  //           resolve(response);
  //         } catch (error) {
  //           reject(error);
  //         }
  //       }, 10);
  //     });
  //     if (!res.ok) {
  //       const error = new Error("Something went wrong");
  //       console.log("error", error);
  //       throw error;
  //     }
  //     const data = await res.json();
  //     return data.sort((a, b) => {
  //       return new Date(b.createdAt) - new Date(a.createdAt);
  //     });
  //   };
  //   fetchComments().then((data) => {
  //     setComments(data);
  //     setLoading(false);
  //   });
  // }, [postSlug, ]);

  // const { data, isLoading, refetch, error, isError } = useQuery(
  //   `http/localhost:3000/api/comments?postSlug=${postSlug}`,
  //   "GET",
  //   null,
  //   null,
  // );
  const { data, isLoading, refetch, error, isError } = useQuery(
    `http/localhost:3000/api/comments?postSlug=${postSlug}`,
    "GET",
    null,
    null,
  );

  useEffect(() => {
    if (data) {
      setComments(data);
    }
  }, [data]);

  const postComment = async (content) => {
    console.log("content", content);
    const data = await fetch(`http://localhost:3000/api/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        postSlug,
      }),
    });
    console.log("New comment", data.body);
    setComments((prev) => [...prev, data]);

    // Refetch the comments after a new one is posted
    refetch();
    console.log("data", data);
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
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              className="h-max cursor-pointer rounded-sm bg-themeRedColor px-8 py-3 font-semibold text-white"
              onClick={(e) => postComment(newComment)}
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
      {isLoading
        ? Array.from({ length: 5 }).map((id) => <CommentSkeleton key={id} />)
        : comments?.map((comment, _id) => {
            return (
              <Comment data={comment} content={comment.content} key={_id} />
            );
          })}
    </div>
  );
};

export default CommentSection;
