import { createSlice } from "@reduxjs/toolkit";
import { IBrand, ICategory } from "../../../models";
import { RootState } from "../../../app/store";

interface catalogState {
  category: ICategory | null;
  brand: IBrand | null;
}

const initialState: catalogState = {
  brand: null,
  category: null
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