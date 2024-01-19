import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { Brand, Category } from "../types";

interface catalogState {
  category: Category | null;
  brand: Brand | null;
}

const initialState: catalogState = {
  category: null,
  brand: null
}

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setCatalogCategory: (state, action) => {
      state.category = action.payload;
    }
  }
});

export const { setCatalogCategory } = catalogSlice.actions;

export default catalogSlice.reducer;

export const selectCurrentCatalogCategory = (state: RootState) => state.catalog.category;
export const selectCurrentCatalogBrand = (state: RootState) => state.catalog.brand;