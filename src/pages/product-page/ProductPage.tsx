import { Container, Section } from '../../shared/components/ui'
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../features/product/api'
import { ErrorPage } from '../error-page';
import { ProductTabsSection } from './sections/product-tabs-section'
import { useEffect } from 'react'
import { useAppDispatch } from '../../app/store'
import { setCurrentProduct } from '../../features/product'
import { SingleProductMain } from '../../widgets/single-product-main';

export const ProductPage = () => {

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const {
    data: product
  } = useGetProductByIdQuery(Number(id));

  useEffect(() => {
    dispatch(setCurrentProduct(product || null))
  }, [product])

  if (!product) {
    return (
      <ErrorPage />
    )
  }


  return (
    <Container>
      <Section>
        <SingleProductMain />
      </Section>
      <Section>
        <ProductTabsSection />
      </Section>
    </Container>
  ) 
}
