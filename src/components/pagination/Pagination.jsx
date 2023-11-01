import React from "react";
import styles from "./pagination.module.css";

const Pagination = () => {
  return (
    <div className="my-12 text-sm flex justify-between">
      <button className="w-24 cursor-pointer rounded-sm border-none bg-[var(--textColor)] p-2 text-[var(--bg)]">
        Previous
      </button>
      <button className="w-24 cursor-pointer rounded-sm border-none bg-[var(--textColor)] p-1 text-[var(--bg)]">
        Next
      </button>
    </div>
  );
};

export default Pagination;
