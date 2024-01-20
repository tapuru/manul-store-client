import { Product, ProductActions } from "../../../../features/product";
import { Card } from "../../../../shared/components/ui";
import cl from "./ProductDetails.module.css";
import { ProductInfo } from "../../../../features/product/components/product-info/ProductInfo";

interface ProductDetailsProps {
  product: Product;
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
