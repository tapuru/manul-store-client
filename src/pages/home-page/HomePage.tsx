import { BannerSlider } from '../../shared/components';
import { Container, Divider, Section } from '../../shared/components/ui';
import { HomeCategories } from '../../wigets/home-categories';
import { HomeProducts } from '../../wigets/home-products/HomeProducts';


export const HomePage = () => {
  return (
    <Container>
      <Section>
        <BannerSlider />
      </Section>
      <Divider />
      <Section>
        <HomeCategories />
      </Section>
      <Divider />
      <HomeProducts />
    </Container>
  )
}
