import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { Brand, Category } from "../types";

interface catalogState {
  currentCategory: Category | null;
  currentBrand: Brand | null;
  mainCategories: Category[] | null;
}

const initialState: catalogState = {
  currentCategory: null,
  currentBrand: null,
  mainCategories: null
}

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setCatalogCategory: (state, action) => {
      state.currentCategory = action.payload;
    }
  }
});

export const { setCatalogCategory } = catalogSlice.actions;

export default catalogSlice.reducer;

export const selectCurrentCatalogCategory = (state: RootState) => state.catalog.currentCategory;
export const selectCurrentCatalogBrand = (state: RootState) => state.catalog.currentBrand;