import { ProductSlider, useGetProductsQuery } from "../../features/product";
import { Button, Section } from "../../shared/components/ui";

export const HomeProducts = () => {

  const {
    data: response
  } = useGetProductsQuery({});

  return (
    <Section>
      {response && (
        <>
          <Section.Item
            title='Популярные'
            actions={<Button>Показать все</Button>}
          >
            <ProductSlider productList={response.data} />
          </Section.Item>
          <Section.Item
            title='Новинки'
            actions={<Button>Показать все</Button>}
          >
            <ProductSlider productList={response.data} />
          </Section.Item>
          <Section.Item
            title='Скидки'
            actions={<Button>Показать все</Button>}
          >
            <ProductSlider productList={response.data} />
          </Section.Item>
        </>
      )}
    </Section>
  )
}