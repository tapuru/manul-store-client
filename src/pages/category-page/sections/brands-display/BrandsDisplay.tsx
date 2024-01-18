import { useNavigate } from "react-router-dom";
import { ICategory } from "../../../../models";
import cl from "./BrandsDisplay.module.css";
import { useGetBrandsQuery } from "../../../../store/slices/catalog/brandApi";
import { Loader } from "../../../../components/ui";

interface BrandsDisplayProps {
  category: ICategory | undefined;
}

export const BrandsDisplay = ({ category }: BrandsDisplayProps) => {
  const navigate = useNavigate();
  const { data: brands, isLoading } = useGetBrandsQuery(category?.name);

  return (
    <div className={cl.wrapper}>
      {isLoading &&
        <Loader centered />
      }
      {brands &&
         brands.data.map(brand => (
          <div className={cl.brandItem} onClick={() => navigate(`/store/${brand.name}`)}>
            <img src={`${import.meta.env.VITE_API_URL}/${brand.icon}`} alt={brand.name} width={"120px"}/>
          </div>
        ))
      }
    </div>
  )
}
