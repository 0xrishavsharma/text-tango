"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "../button/Button";

const Pagination = ({ page, hasPrevItems, hasNextItems }) => {
  const router = useRouter();
  return (
    <div className="my-12 flex justify-between text-sm text-white ">
      <Button
        onClick={() => router.push(`/?page=${page - 1}`)}
        disabled={!hasPrevItems}
      >
        Previous
      </Button>
      <Button
        onClick={() => router.push(`/?page=${page + 1}`)}
        disabled={!hasNextItems}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
