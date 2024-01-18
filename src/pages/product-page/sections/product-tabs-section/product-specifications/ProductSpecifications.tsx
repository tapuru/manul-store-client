import React from 'react'
import { Section, AppText } from '../../../../../shared/components/ui';
import cl from "./ProductSpecifications.module.css";

const testSpecifications = [
  {title: "ОЗУ", description: "8ГБ"},
  { title: "ОЗУ", description: "8ГБ" },
  { title: "ОЗУ", description: "8ГБ" },
  { title: "ОЗУ", description: "8ГБ" },
  { title: "ОЗУ", description: "8ГБ" },
  { title: "ОЗУ", description: "8ГБ" },
  { title: "ОЗУ", description: "8ГБ" },
  { title: "ОЗУ", description: "8ГБ" },
]

interface Specification {
  title: string;
  description: string;
}

interface SpecificationItemProps {
  specification: Specification;
  index: number;
}

const SpecificationItem = ({ specification, index }: SpecificationItemProps) => {
  const rootClassName = [cl.item];
  if (index % 2 === 0) {
    rootClassName.push(cl.itemOdd)
  }

  return (
    <div className={rootClassName.join(" ")}>
      <div>
        {specification.title} :
      </div>
      <div>
        {specification.description}
      </div>
    </div>
  )
}

export const ProductSpecifications = () => {
  return (
    <Section.Item
      title='Характеристики'  
    >
      <div className={cl.wrapper}>
        {testSpecifications.map((s, index) => (
          <SpecificationItem specification={s} index={index} />
        ))}
      </div>
    </Section.Item>
  )
}
