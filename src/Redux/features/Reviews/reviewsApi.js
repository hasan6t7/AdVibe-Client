import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../../Utils/getBaseUrl";

const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}api/reviews`,
    credentials: "include",
  }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: (newReview) => ({
        url: "/create-review",
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: (result, error, { postId }) => [
        { type: "Reviews", id: postId },
      ],
    }),

    getTotalReviewCount: builder.query({
      query: () => ({
        url: "/total-reviews",
      }),
    }),
    getReviewByUserId: builder.query({
      query: (_id) => ({
        url: `/${_id}`,
      }),
      providesTags: (result) =>
        result ? [{ type: "Reviews", id: result[0]?.email }] : [],
    }),
  }),
});

export const {
  useAddReviewMutation,
  useGetTotalReviewCountQuery,
  useGetReviewByUserIdQuery,
} = reviewsApi;
export default reviewsApi;
