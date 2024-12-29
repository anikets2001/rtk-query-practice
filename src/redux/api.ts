import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<any, void>({
      query: () => "posts",
      providesTags: ["Posts"],
    }),
    newPost: builder.mutation<any, any>({
      query: (post) => ({
        url: "posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),

    // getComments: builder.query<any, void>({
    //   query: () => "comments",
    // }),
  }),
});

export const { useGetPostsQuery, useNewPostMutation } = myApi;
