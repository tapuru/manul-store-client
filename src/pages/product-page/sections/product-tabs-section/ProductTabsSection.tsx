import React, { useState } from 'react'
import { Tabs } from '../../../../shared/components/ui'
import { useParams } from 'react-router-dom';
import { ProductDescription } from './product-description/ProductDescription';
import { ProductSpecifications } from './product-specifications/ProductSpecifications';
import { ProductReviews } from './product-reviwes/ProductReviews';

export const ProductTabsSection = () => {

  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (index: number) => {
    setActiveTab(index);
  }

  return (
    <div>
      <Tabs 
        tabs={[
          { label: "О товаре", index: 0 },
          { label: "Характеристики", index: 1 },
          { label: "Отзывы", index: 2 }
        ]}
        activeTab={activeTab}
        handleChange={handleChange} 
      >
        <Tabs.TabContent activeTab={activeTab} index={0}>
          <ProductDescription />
        </Tabs.TabContent >
        <Tabs.TabContent activeTab={activeTab} index={1}>
          <ProductSpecifications />
        </Tabs.TabContent >
        <Tabs.TabContent activeTab={activeTab} index={2}>
          <ProductReviews />
        </Tabs.TabContent >
      </Tabs>
    </div>
  )
}
