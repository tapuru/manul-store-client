import { useMemo } from "react";
import { Category } from "..";

export const useFilterMainCategories = (categories: Category[] | undefined) => {
  return useMemo(() => {
    return categories?.filter(category => !category.parentCategory);
  }, [categories]);
}