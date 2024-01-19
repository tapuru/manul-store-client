import React from 'react'
import { Section } from '../../../../../shared/components/ui'
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../../../../features/products/api';

export const ProductDescription = () => {

  const { id } = useParams();
  const {
    data: product
  } = useGetProductByIdQuery(Number(id))

  return (
    <Section.Item
      title={"О товаре"}
    >
      {product?.description}
    </Section.Item>
  )
}
