import { Product } from "../../types/Product";
import { ProductCard } from "../product-card/ProductCard";
import cl from "./ProductGrid.module.css";

interface ProductGridProps {
  productList: Product[];
  columns?: 4 | 3 | 2 | 1;
  mode: "grid" | "list";
}

export const ProductGrid = ({ productList, columns = 4, mode }: ProductGridProps) => {

  const rootClassName = [cl.wrapper];
  if (columns) rootClassName.push([cl._1, cl._2, cl._3, cl._4][columns - 1]);
  if (mode === "list") rootClassName.push(cl._listMode);

  return (
    <div className={rootClassName.join(" ")}>
      {productList.map(product => (
        <ProductCard product={product} />
      ))}
    </div>
  )
}