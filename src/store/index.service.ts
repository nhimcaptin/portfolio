import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const portfolioApi = createApi({
  reducerPath: "portfolioApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => "posts",
    }),
  }),
});

export const { useGetPostsQuery } = portfolioApi;
