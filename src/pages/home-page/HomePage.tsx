import { BannerSlider } from '../../components';
import { Container, Divider, Section } from '../../components/ui';
import { Layout } from '../../components/ui/layout/Layout'
import { CategorySliderSection } from './components/category-slider/CategorySliderSection';
import { ProductsDisplaySection } from './components/products-display-section/ProductsDisplaySection';


export const HomePage = () => {
  return (
    <Layout
    >
      <Container>
        <Section>
          <BannerSlider />
        </Section>
        <Divider />
        <Section>
          <CategorySliderSection />
        </Section>
        <Divider />
        <ProductsDisplaySection />
      </Container>
    </Layout>
  )
}
