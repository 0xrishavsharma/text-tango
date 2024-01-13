import { targetUrl } from "@/utils/utils";

const useFetch = async (path, method, headers, body) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : null,
  };

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
