"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ page, hasPrevItems, hasNextItems }) => {
  const router = useRouter();
  return (
    <div className="my-12 flex justify-between text-sm text-white ">
      <button
        onClick={() => router.push(`/?page=${page - 1}`)}
        disabled={!hasPrevItems}
        className="w-24 cursor-pointer rounded-sm bg-red-500 p-2
        disabled:cursor-not-allowed disabled:bg-red-100 disabled:font-semibold disabled:opacity-50
        "
      >
        Previous
      </button>
      <button
        onClick={() => router.push(`/?page=${page + 1}`)}
        disabled={!hasNextItems}
        className="w-24 cursor-pointer rounded-sm bg-red-500 p-2 disabled:cursor-not-allowed disabled:bg-red-100 disabled:font-semibold disabled:opacity-50 "
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
