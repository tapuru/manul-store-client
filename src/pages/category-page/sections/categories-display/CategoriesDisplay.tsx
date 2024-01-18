import { useNavigate } from "react-router-dom";
import { CategoryCard } from "../../../../shared/components";
import { ICategory } from "../../../../models";
import cl from "./CategoriesDisplay.module.css";

interface CategoriesDisplayProps {
  categoryList: ICategory[] | undefined;
}

export const CategoriesDisplay = ({ categoryList }: CategoriesDisplayProps) => {

  const navigate = useNavigate();

  return (
    <div className={cl.wrapper}>
      {categoryList?.map(c => (
        <CategoryCard category={c} key={c.id} onClick={() => navigate(`/store/${c.name}`)}/>
      ))}
    </div>
  )
}