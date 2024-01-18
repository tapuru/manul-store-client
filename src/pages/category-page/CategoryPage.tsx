import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCategoryByNameQuery } from '../../store/slices/catalog/categoryApi';
import { Layout } from '../../components/ui/layout/Layout';
import { CategoriesSidebar } from './sections/categories-sidebar/CategoriesSidebar';
import cl from "./CategoryPage.module.css";
import { AppText, Container, Loader, Section } from '../../components/ui';
import { CategoriesDisplay } from './sections/categories-display';
import { useAppDispatch } from '../../store/hooks';
import { setCatalogCategory } from '../../store/slices/catalog/catalogSlice';
import { ProductsDisplay } from './sections/products-display';

interface CategoryPAgeLayoutProps {
  children?: React.ReactNode;
  sidebar?: React.ReactNode;
  title?: string;
}

const CategoryPageLayout = ({ children, sidebar, title }: CategoryPAgeLayoutProps) => {
  return (
    <div className={cl.wrapper}>
      {title && 
        <div className={cl.title}>
          <AppText variant='h1'>{title}</AppText>
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
    <Layout>
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
              <AppText variant='h2' align="center">Категории</AppText>
              {isCategoryLoading ? (
                <Loader centered />
              ) : (
                <CategoriesDisplay categoryList={category.subCategories} />
              )
              }
            </Section>
            <ProductsDisplay />
          </CategoryPageLayout>
        }
      </Container>
    </Layout>
  )
}
