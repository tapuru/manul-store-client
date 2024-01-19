import React from 'react'
import { useAppSelector } from '../../../../store/hooks'
import { selectCurrentCatalogCategory } from '../../../../features/catalog/model/catalogSlice'
import cl from "./ProductDisplay.module.css";
import { ProductSlider } from '../../../../shared/components';
import { useGetProductsQuery } from '../../../../features/products/api';
import { AppText, Button, Loader, Section } from '../../../../shared/components/ui';

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
