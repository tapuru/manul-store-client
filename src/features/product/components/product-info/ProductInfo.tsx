import { Product } from "../..";
import { StarIcon } from "../../../../shared/components/icons"
import { Divider, AppText } from "../../../../shared/components/ui";

import cl from "./ProductInfo.module.css";

interface ProductInfoProps {
  product: Product
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className={cl.productInfo}>
      <AppText variant="h2" >{product.name}</AppText>
      <div className={cl.productInfoRow}>
        <div className={cl.rating}>
          <div className={cl.stars}>
            <StarIcon variant="filled" />
            <StarIcon variant="filled" />
            <StarIcon variant="filled" />
            <StarIcon variant="filled" />
            <StarIcon variant="filled" />
          </div>
          <div>
            (190 отзывов)
          </div>
        </div>
        <Divider variant="vertical" />
        <div>
          {product.quantityInStock} в наличии
        </div>
      </div>
      <AppText variant="price" >
        {product.price} P.
      </AppText>
      <AppText>
        {product.description}
      </AppText>
      <Divider />
    </div>
  )
}