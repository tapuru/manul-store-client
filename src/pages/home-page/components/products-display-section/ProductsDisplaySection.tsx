import { Button, Section } from '../../../../components/ui'
import { ProductSlider } from '../../../../components';
import { useGetProductsQuery } from '../../../../store/slices/catalog/productApi';


export const ProductsDisplaySection = () => {

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
