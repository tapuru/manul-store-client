import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "..";
import { RootState } from "../../../app/store";

interface ProductsState {
  currentProduct: Product | null;
}

const initialState: ProductsState = {
  currentProduct: null
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentProduct: (state, action: PayloadAction<Product | null>) => {
      state.currentProduct = action.payload
    }
  }
});

export const productsReducer = productsSlice.reducer;

export const {
  setCurrentProduct
} = productsSlice.actions;

export const selectCurrentProduct = (state: RootState) => state.product.currentProduct;