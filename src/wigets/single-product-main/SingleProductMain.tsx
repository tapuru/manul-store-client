import cl from "./ProductInfoSection.module.css";
import { ProductDetails } from './components/product-details/ProductDetails';
import { useAppSelector } from "../../app/store";
import { ProductGallery, selectCurrentProduct } from "../../features/product";


export const SingleProductMain = () => {

  const product = useAppSelector(selectCurrentProduct);

  if (!product) {
    return null
  }

  const gallery = [product.previewImage];
  product.gallery.forEach(image => gallery.push(image.url))

  return (
    <div className={cl.wrapper} >
      <ProductGallery gallery={gallery}/>
      <ProductDetails product={product}/>  
    </div>
  )
}
