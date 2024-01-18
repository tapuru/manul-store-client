import { Card } from "../../../../../shared/components/ui";
import { IProduct } from "../../../../../models";
import { ProductActions } from "./ProductActions";
import cl from "./ProductDetails.module.css";
import { ProductInfo } from "./ProductInfo";

interface ProductDetailsProps {
  product: IProduct;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {

  return (
    <div className={cl.wrapper} >
      <ProductInfo product={product} />
      <ProductActions />
      <Card
        title="Доставка"
      >
        <Card.Content>
          За 1 день. от 700р
        </Card.Content>
      </Card>
    </div>
  )
}
