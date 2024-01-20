import { Link, useNavigate } from "react-router-dom";
import { Category } from "../..";
import cl from "./CatalogSidebar.module.css";
import { AppText } from "../../../../shared/components/ui";

interface CategoryListItemProps {
  category: Category;
}

export const CategoryListItem = ({ category }: CategoryListItemProps) => {

  const navigate = useNavigate();

  return (
    <li className={cl.listItem} onClick={() => navigate(`/catalog/${category.name}`)}>
      <AppText variant="p" styles={{fontWeight: "bold"}}>{category.name}</AppText>
    </li>
  )
}