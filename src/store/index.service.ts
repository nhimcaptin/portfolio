import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const portfolioApi = createApi({
  reducerPath: "portfolioApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api" }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => "portfoliio",
    }),
  }),
});

export const { useGetPostsQuery } = portfolioApi;
