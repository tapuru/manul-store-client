import { useFilterMainCategories, useGetCategoriesQuery } from "../..";
import { Backdrop } from "../../../../shared/components/ui";
import cl from "./CatalogSidebar.module.css";
import { CategoryListItem } from "./CategoryListItem";

interface CatalogSidebarProps {
  isOpen: boolean;
  onBackdropClick: () => void;
}

export const CatalogSidebar = ({ isOpen, onBackdropClick }: CatalogSidebarProps) => {

  const {data: response, isLoading} = useGetCategoriesQuery();
  const categoryList = useFilterMainCategories(response?.data);

  const rootClassName = [cl.wrapper];
  if (isOpen) rootClassName.push(cl._active);

  return (
    <Backdrop
      isOpen={isOpen}
      onClick={onBackdropClick}
    >
      <div className={rootClassName.join(" ")}>
        {categoryList &&
          <ul className={cl.categoryList}>
            {categoryList.map(category =>
              <CategoryListItem category={category} />
            )}
          </ul>
        }
      </div>
    </Backdrop>
  )
}
