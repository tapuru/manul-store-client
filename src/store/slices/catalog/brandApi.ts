import { IBrand } from "../../../models";
import { apiSlice } from "../../api/apiSlice";
import { IFindAndCountResponse } from "../../types";

export const brandApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getBrands: builder.query<IFindAndCountResponse<IBrand>, string | void>({
      query: (categoryName) => ({
        url: "/brand",
        params: {
          categoryName
        }
      })
    })
  })
});

export const { useGetBrandsQuery, useLazyGetBrandsQuery } = brandApiSlice;