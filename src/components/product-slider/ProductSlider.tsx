import { IProduct } from "../../models";
import { ProductCard } from "../../components";
import cl from "./ProductSlider.module.css";
import { ArrowButton } from "../../components/ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../icons";
import { useSlider } from "../../hooks";



interface Props {
  productList?: IProduct[];
  slidesPerView?: number;
}

export const ProductSlider = ({ productList, slidesPerView = 4 }: Props) => {

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

  // return (
  //   <div className={cl.wrapper} >
  //     <div className={cl.header}>
  //       <div>
  //         <div className={cl.title}>{title}</div>
  //         <Button size="lg" >Показать все</Button>
  //       </div>
  //     </div>
  //     <div className={cl.slider}>
  //       <Slider {...settings}>
  //         {productList.map(product => (
  //           <ProductCard product={product} key={product.id} />
  //         ))}
  //       </Slider>
  //     </div>
  //   </div>
  // )
}
