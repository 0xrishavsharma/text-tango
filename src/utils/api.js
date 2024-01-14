import { useQuery } from "@tanstack/react-query";

export const postComment = (comment, path) => {
  return fetch(`/api/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });
};
