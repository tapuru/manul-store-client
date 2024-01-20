import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/store";
import { CategoriesDisplay, CategoriesSidebar, useGetCategoryByNameQuery } from "../../features/catalog";
import { setCatalogCategory } from "../../features/catalog/model/catalogSlice";
import cl from "./CategoryPage.module.css";
import { useEffect } from "react";
import { AppText, Container, Divider, Loader, Section } from "../../shared/components/ui";
import { CategoryProducts } from "../../widgets/category-products";


interface CategoryPageLayoutProps {
  children?: React.ReactNode;
  sidebar?: React.ReactNode;
  title?: string;
}

const CategoryPageLayout = ({ children, sidebar, title }: CategoryPageLayoutProps) => {
  return (
    <div className={cl.wrapper}>
      {title && 
        <div className={cl.title}>
          <AppText variant='h1' align="center">{title}</AppText>
          <Divider />
        </div>
      }
      {sidebar && 
        <aside className={cl.sidebar}>{sidebar}</aside>
      }
      <main className={cl.main}>
        {children}
      </main>
    </div>
  )
}


export const CategoryPage = () => {

  const { name } = useParams();
  const dispatch = useAppDispatch();
  const { data: category, isLoading: isCategoryLoading } = useGetCategoryByNameQuery(name);

  useEffect(() => {
    dispatch(setCatalogCategory(category));
  }, [category])

  return (
    <Container>
      {isCategoryLoading &&
        <Loader centered />
      }
      {category &&
        <CategoryPageLayout
          title={category.name}
          sidebar={<CategoriesSidebar categoriesList={category.subCategories} />}
        >
          <Section>
            <AppText variant='h2'>Категории</AppText>
            {isCategoryLoading ? (
              <Loader centered />
            ) : (
              <CategoriesDisplay categoryList={category.subCategories} />
            )
            }
          </Section>
          <CategoryProducts />
        </CategoryPageLayout>
      }
    </Container>
  )
}
