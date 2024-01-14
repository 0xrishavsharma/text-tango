// import { QueryClient } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";

// cache() is scoped per request, so we don't leak data between requests
const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;
