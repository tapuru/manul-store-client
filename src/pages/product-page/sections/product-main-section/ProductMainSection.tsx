import React from 'react'
import cl from "./ProductInfoSection.module.css";
import { ProductGallery } from './product-gallery/ProductGallery';
import { ProductDetails } from './product-details/ProductDetails';
import { useGetProductByIdQuery } from '../../../../store/slices/catalog/productApi';
import { IProduct } from '../../../../models';

interface Props {
  product: IProduct;
}

export const ProductMainSection = ({ product }: Props) => {

  const gallery = [product.previewImage];
  product.gallery.forEach(image => gallery.push(image.url))

  return (
    <div className={cl.wrapper} >
      <ProductGallery gallery={gallery}/>
      <ProductDetails product={product}/>  
    </div>
  )
}
