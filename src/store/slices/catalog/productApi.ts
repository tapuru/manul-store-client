import { IProduct } from "../../../models";
import { apiSlice } from "../../api/apiSlice";
import { IFindAndCountResponse } from "../../types";

interface getProductsResponse {
  categoryName?: string;
  brandId?: number;
  page?: number;
  limit?: number;
}


const productApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<IFindAndCountResponse<IProduct>, getProductsResponse>({
      query: ({ categoryName, brandId, page, limit }) => ({
        url: "/product",
        params: {
          categoryName,
          brandId,
          page,
          limit
        }
      })
    }),
    getProductById: build.query<IProduct, number>({
      query: (id) => ({
        url: `/product/${id}`
      })
    })
  }),
  overrideExisting: false
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi