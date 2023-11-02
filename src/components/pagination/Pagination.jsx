import React from "react";
import styles from "./pagination.module.css";

const Pagination = () => {
  return (
    <div className="my-12 flex justify-between text-sm text-white ">
      <button className="w-24 cursor-pointer rounded-sm p-2 bg-red-500">
        Previous
      </button>
      <button className="w-24 cursor-pointer rounded-sm p-2 bg-red-500">
        Next
      </button>
    </div>
  );
};

export default Pagination;
