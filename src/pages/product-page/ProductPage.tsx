import { Layout } from '../../components/ui/layout/Layout'
import { Container, Section } from '../../components/ui'
import { ProductMainSection } from './sections/product-main-section'
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../store/slices/catalog/productApi'
import { ErrorPage } from '..'
import { ProductTabsSection } from './sections/product-tabs-section'

export const ProductPage = () => {

  const { id } = useParams();
  const {
    data: product
  } = useGetProductByIdQuery(Number(id));

  if (!product) {
    console.log(product)

    return (
      <ErrorPage />
    )
  }


  return (
    <Layout>
      <Container>
        {JSON.stringify(product)}
        <Section>
          <ProductMainSection product={product} />
        </Section>
        <Section>
          <ProductTabsSection />
        </Section>
      </Container>
    </Layout>
  ) 
}
