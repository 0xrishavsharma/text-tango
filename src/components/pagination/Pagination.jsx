import React from "react";
import styles from "./pagination.module.css";

const Pagination = () => {
  return (
    <div className="my-12 flex justify-between text-sm text-white ">
      <button
        onClick=""
        className="w-24 cursor-pointer rounded-sm bg-red-500 p-2"
      >
        Previous
      </button>
      <button
        onClick=""
        className="w-24 cursor-pointer rounded-sm bg-red-500 p-2"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
