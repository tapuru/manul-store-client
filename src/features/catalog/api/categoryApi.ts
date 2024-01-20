import { Category } from "../types";
import { apiSlice } from "../../../shared/api/apiSlice";
import { FindAndCountResponse } from "../../../shared/api/types";


export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<FindAndCountResponse<Category>, number | void>({
      query: (parentCategoryId) => {

        if (parentCategoryId) {
          return {
            url: "/category",
            params: {
              parentCategoryId
            }
          }
        }
        return {
          url: "/category",
        }
      }
    }),
    getCategoryByName: build.query<Category, string | void>({
      query: (name) => ({
        url: `/category/${name}`,
      }),
      // providesTags: ["Category"]
    })
  }),
  overrideExisting: false
});

export const { useGetCategoriesQuery, useGetCategoryByNameQuery } = categoryApi;