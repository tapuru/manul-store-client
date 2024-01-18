import { ProductCard } from "..";
import { IProduct } from "../../../models";
import cl from "./ProductGrid.module.css";

interface ProductGridProps {
  productList: IProduct[];
  columns?: 4 | 3 | 2 | 1;
}

export const ProductGrid = ({ productList, columns = 4 }: ProductGridProps) => {

  const rootClassName = [cl.wrapper];
  if (columns) rootClassName.push([cl._1, cl._2, cl._3, cl._4][columns - 1]);

  console.log(rootClassName)

  return (
    <div className={rootClassName.join(" ")}>
      {productList.map(product => (
        <ProductCard product={product} />
      ))}
    </div>
  )
}