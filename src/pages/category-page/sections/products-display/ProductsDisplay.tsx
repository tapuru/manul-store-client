import React from 'react'
import { useAppSelector } from '../../../../store/hooks'
import { selectCurrentCatalogCategory } from '../../../../store/slices/catalog/catalogSlice'
import cl from "./ProductDisplay.module.css";
import { ProductSlider } from '../../../../components';
import { useGetProductsQuery } from '../../../../store/slices/catalog/productApi';
import { AppText, Button, Loader, Section } from '../../../../components/ui';

interface ProductDisplayItemProps {
  categoryName?: string;
  brandId?: number;
  page?: number;
  limit?: number;
}

const ProductDisplayItem = ({ brandId, categoryName, limit, page }: ProductDisplayItemProps) => {

  const {data:response, isLoading} = useGetProductsQuery({
    categoryName,
    brandId,
    limit,
    page
  });

  if (isLoading) {
    return <Loader centered />
  }

  if(!response?.data.length) {
    return null
  }

  return (
    <>
      <div className={cl.itemHeader}>
        <AppText variant='h2'>{categoryName}</AppText>
        <Button>Показать все</Button>
      </div>
      <ProductSlider productList={response?.data} slidesPerView={4} />
    </>
  )
}


export const ProductsDisplay = () => {

  const category = useAppSelector(selectCurrentCatalogCategory);

  return (
    <div className={cl.wrapper}>
      {category?.subCategories?.map(c => (
        <Section.Item
        >
          <ProductDisplayItem categoryName={c.name} />
        </Section.Item>
      ))}
    </div>
  )
}
