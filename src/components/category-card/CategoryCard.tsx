
import { ICategory } from "../../models";
import cl from "./CategoryCard.module.css";

interface Props {
  category: ICategory;
  onClick?: () => void;
}

export const CategoryCard = ({ category, onClick }: Props) => {

  return (
    <div className={cl.categoryCard} onClick={onClick}>
      {category.icon && <img src={import.meta.env.VITE_API_URL + `/${category.icon}`} width={"30px"} />}
      {category.name}
    </div>
  )
}
