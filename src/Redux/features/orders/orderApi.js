import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../../Utils/getBaseUrl";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}api/orders`,
    credentials: "include",
  }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    getOrderByEmail: builder.query({
      query: (email) => ({
        url: `/${email}`,
      }),
      providesTags: ["Orders"],
    }),

    getOrderById: builder.query({
      query: (id) => ({
        url: `/order/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: "Orders", id }],
    }),

    getAllOrders: builder.query({
      query: () => ({
        url: "/",
      }),
      providesTags: ["Orders"],
    }),
    updateOrderStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/update-order-status/${id}`,
        method: "PATCH",
        body: {status},
      }),
      invalidatesTags: ["Orders"],
    }),
    deleteOrderById: builder.mutation({
      query: (id) => ({
        url: `/delete-order/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Orders", id }],
    }),
  }),
});

export const {
  useGetOrderByEmailQuery,
  useGetOrderByIdQuery,
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
  useDeleteOrderByIdMutation,
} = orderApi;
