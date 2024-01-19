import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsQuery } from '../../features/product/api';
import cl from "./StorePage.module.css";
import { Layout } from '../../app/layout/Layout';
import { useDispatch } from 'react-redux';
import { setCatalogCategory } from '../../features/catalog/model/catalogSlice';
import { ProductGrid } from '../../shared/components';
import { Container } from '../../shared/components/ui';

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
