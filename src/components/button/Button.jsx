import { cn } from "@/utils/utils";
import React from "react";

const Button = ({ content, className, children, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        "w-28 cursor-pointer rounded-sm bg-themeRedColor px-6 py-3 disabled:cursor-not-allowed disabled:bg-gray-300 ",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
