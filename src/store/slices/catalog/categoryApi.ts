import { ICategory } from "../../../models";
import { apiSlice } from "../../../shared/api/apiSlice";
import { IFindAndCountResponse } from "../../types";


export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<IFindAndCountResponse<ICategory>, number | void>({
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
    getCategoryByName: build.query<ICategory, string | void>({
      query: (name) => ({
        url: `/category/${name}`,
      }),
      // providesTags: ["Category"]
    })
  }),
  overrideExisting: false
});

export const { useGetCategoriesQuery, useGetCategoryByNameQuery } = categoryApi;