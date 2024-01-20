import { useAppSelector } from "../../app/store";
import { selectCurrentCatalogCategory } from "../../features/catalog/model/catalogSlice";
import { ProductSlider, useGetProductsQuery } from "../../features/product";
import { AppText, Button, Loader, Section } from "../../shared/components/ui";
import cl from "./CategoryProducts.module.css";


interface ProductsRowProps {
  categoryName?: string;
  brandId?: number;
  page?: number;
  limit?: number;
}

const ProductsRow = ({ brandId, categoryName, limit, page }: ProductsRowProps) => {

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


export const CategoryProducts = () => {

  const category = useAppSelector(selectCurrentCatalogCategory);

  return (
    <div className={cl.wrapper}>
      {category?.subCategories?.map(c => (
        <Section.Item
        >
          <ProductsRow categoryName={c.name} />
        </Section.Item>
      ))}
    </div>
  )
}
