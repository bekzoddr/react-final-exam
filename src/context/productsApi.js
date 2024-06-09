import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({
        url: "/products",
        params,
      }),
      providesTags: ["products"],
    }),

    createProduct: build.mutation({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags: ["products"],
    }),

    updateProduct: build.mutation({
      query: ({ _id, body }) => ({
        url: `/products/${_id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["products"],
    }),

    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),

    getProductById: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
  useGetProductByIdQuery,
} = productApi;
