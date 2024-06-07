import { api } from "./api";

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: (params) => ({
        url: "/category",
        params,
      }),
      providesTags: ["category"],
    }),
    createCategory: build.mutation({
      query: (body) => ({
        url: "/category",
        method: "POST",
        body,
      }),
      invalidatesTags: ["category"],
    }),
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["category"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
