import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsQuery } from '../../store/slices/catalog/productApi';
import cl from "./StorePage.module.css";
import { Layout } from '../../components/ui/layout/Layout';
import { useDispatch } from 'react-redux';
import { setCatalogCategory } from '../../store/slices/catalog/catalogSlice';
import { ProductGrid } from '../../components';
import { Container } from '../../components/ui';

interface StorePageLayoutProps {
  children?: React.ReactNode;
}

const StorePageLayout = ({ children }: StorePageLayoutProps) => {
  return (
    <div className={cl.wrapper}>
      <aside className={cl.sidebar}></aside>
      <main className={cl.main} >
        {children}
      </main>
    </div>
  )
}


export const StorePage = () => {

  const dispatch = useDispatch();
  const { categoryName } = useParams();

  

  const {  data: response, isLoading } = useGetProductsQuery({ categoryName });

  return (
    <Layout>
      <Container>
        <StorePageLayout>
          {response &&
            <ProductGrid productList={response.data} columns={4} />
          }
        </StorePageLayout>
      </Container>
    </Layout>
  )
}
