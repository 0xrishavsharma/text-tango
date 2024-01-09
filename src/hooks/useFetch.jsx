import { targetUrl } from "@/utils/utils";

const useFetch = async (path) => {
  const res = await fetch(`${targetUrl}/api/${path}`, {
    cache: "no-cache",
  });
  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();
  return data;
};

export default useFetch;
