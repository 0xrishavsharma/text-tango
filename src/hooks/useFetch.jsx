import { targetUrl } from "@/utils/utils";
// import { useQuery } from "react-query";
import axios from "axios";

const useFetch = async (path, method, headers, body) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : null,
  };

  // const { data, isLoading, refetch, error, isError } = useQuery({
  //   queryKey: path,
  //   queryFn: async () => {
  //     const { data } = axios[method](`${targetUrl}/api/${path}`, options);
  //     return data;
  //   },
  // });
  // console.log("🚀 ~ useFetch ~ data:", data)
  // return { data, isLoading, refetch, error, isError };

  const response = await fetch(`${targetUrl}/api/${path}`, options);

  if (!response.ok) {
    const error = new Error("Something went wrong");
    console.log("error", error);
    throw error;
  }

  const data = await response.json();
  return data;
};

export default useFetch;
