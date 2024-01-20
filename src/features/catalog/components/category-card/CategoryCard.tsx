
import { Category } from "../../types";
import cl from "./CategoryCard.module.css";

interface CategoryCardProps {
  category: Category;
  onClick?: () => void;
}

export const CategoryCard = ({ category, onClick }: CategoryCardProps) => {

  return (
    <div className={cl.categoryCard} onClick={onClick}>
      {category.icon && <img src={import.meta.env.VITE_API_URL + `/${category.icon}`} width={"30px"} />}
      {category.name}
    </div>
  )
}
