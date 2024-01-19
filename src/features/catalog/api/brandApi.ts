
import { apiSlice } from "../../../shared/api/apiSlice";
import { FindAndCountResponse } from "../../../shared/api/types";

export const brandApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getBrands: builder.query<FindAndCountResponse<Brand>, string | void>({
      query: (categoryName) => ({
        url: "/brand",
        params: {
          categoryName
        }
      })
    })
  })
});

export const { useGetBrandsQuery } = brandApi;