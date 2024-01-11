import { targetUrl } from "@/utils/utils";

const useFetch = async (path) => {
  const res = await fetch(`${targetUrl}/api/${path}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    const error = new Error("Something went wrong");
    console.log("error", error);
    throw error;
  }
  const data = await res.json();
  return data;
};

export default useFetch;
