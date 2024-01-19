import { apiSlice } from "../../../shared/api/apiSlice";
import { FindAndCountResponse } from "../../../shared/api/types";
import { Product } from "../types/Product";

interface getProductsResponse {
  categoryName?: string;
  brandId?: number;
  page?: number;
  limit?: number;
}


export const productApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<FindAndCountResponse<Product>, getProductsResponse>({
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
    getProductById: build.query<Product, number>({
      query: (id) => ({
        url: `/product/${id}`
      })
    })
  }),
  overrideExisting: false
});

export const {
  useGetProductByIdQuery,
  useLazyGetProductsQuery
} = productApi;