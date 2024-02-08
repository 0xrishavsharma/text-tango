import clsx from "clsx";
import { twMerge } from "tw-merge";

export const targetUrl =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_TARGET_URL
    : "http://localhost:3000";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const categoryColors = [
  "bg-blue-400/50",
  "bg-pink-400/50",
  "bg-green-400/50",
  "bg-red-400/50",
  "bg-orange-400/50",
  "bg-purple-400/50",
];

export const selectedCategoryColor = (index) => {
  return categoryColors[index % categoryColors.length];
};

export const getDate = (date) => {
  const postDate = new Date(date);
  return `${String(postDate.getDate()).padStart(2, "0")}.${String(postDate.getMonth() + 1).padStart(2, "0")}.${postDate.getFullYear()}`;
};

export const sanitizedHtml = (html) => {
  return DOMPurify.sanitize(html);
};
