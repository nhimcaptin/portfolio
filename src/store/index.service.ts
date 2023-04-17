import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const portfolioApi = createApi({
  reducerPath: "portfolioApi",
  tagTypes: ["Posts"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api" }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => "portfoliio",
      providesTags: (result) => {
        const data = result?.body?.data;
        if (data) {
          const final = [
            ...data.map(({ _id }) => ({ type: "Posts", _id })),
            { type: "Posts", id: "LIST" },
          ];
          return final;
        }
        return [{ type: "Posts", id: "LIST" }];
      },
    }),
    addContact: build.mutation({
      query(body) {
        return {
          url: "contact",
          method: "POST",
          body,
        };
      },
      invalidatesTags: (result, error, body) => [{ type: "Posts", id: "LIST" }],
    }),
  }),
});

export const { useGetPostsQuery, useAddContactMutation } = portfolioApi;
