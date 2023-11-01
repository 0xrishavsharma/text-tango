import React from "react";
import styles from "./pagination.module.css";

const Pagination = () => {
  return (
    <div className="my-12 flex justify-between">
      <button className="w-24 cursor-pointer rounded-sm border-none bg-black p-3 text-white">
        Previous
      </button>
      <button className="w-24 cursor-pointer rounded-sm border-none bg-black p-3 text-white">
        Next
      </button>
    </div>
  );
};

export default Pagination;
