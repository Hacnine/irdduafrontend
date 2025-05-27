import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Category, SubCategory, Duas } from "@/types"; // adjust the import path

const baseUrl = 'https://irdduabackend.onrender.com';

export const duaApi = createApi({
  reducerPath: "duaApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Categories", "SubCategories", "Duas"],
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "/categories",
      providesTags: ["Categories"],
    }),
    getSubCategories: builder.query<SubCategory[], void>({
      query: () => "/subcategories",
      providesTags: ["SubCategories"],
    }),
    getSubCategoriesByCategoryId: builder.query<SubCategory[], number>({
      query: (categoryid) => `/subcategories?categoryid=${categoryid}`,
      providesTags: ["SubCategories"],
    }),
    getDuas: builder.query<Duas[], void>({
      query: () => "/duas",
      providesTags: ["Duas"],
    }),
     getDuasByCategoryId: builder.query<Duas[], number>({
      query: (catId) => `/duas?cat_id=${catId}`,
      providesTags: ["Duas"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
  useGetSubCategoriesByCategoryIdQuery,
  useGetDuasQuery,
  useGetDuasByCategoryIdQuery
} = duaApi;

