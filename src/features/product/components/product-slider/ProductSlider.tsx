import cl from "./ProductSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Product } from "../../types/Product";
import { useSlider } from "../../../../shared/hooks";
import { ProductCard } from "../product-card/ProductCard";
import { ArrowButton } from "../../../../shared/components/ui";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../../shared/components/icons";


interface ProductSliderProps {
  productList?: Product[];
  slidesPerView?: number;
}

export const ProductSlider = ({ productList, slidesPerView = 4 }: ProductSliderProps) => {

  const sliderRef = useRef(null);
  const { handlePrev, handleNext } = useSlider(sliderRef);

  return (
    <div className={cl.slider}>
      <Swiper
        spaceBetween={8}
        slidesPerView={slidesPerView}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ padding: "16px 0px 16px 12px" }}
        ref={sliderRef}
      >
        {productList?.map(product => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} key={product.id} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ArrowButton className={cl.prevButton} onClick={handlePrev} >
        <ArrowLeftIcon w="24" h="24" />
      </ArrowButton>
      <ArrowButton className={cl.nextButton} onClick={handleNext} >
        <ArrowRightIcon w="24" h="24" />
      </ArrowButton>
    </div>
  )
}
