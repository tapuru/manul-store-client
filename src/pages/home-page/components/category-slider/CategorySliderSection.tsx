import { useMemo, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSlider } from '../../../../shared/hooks';
import { ArrowButton, Loader } from '../../../../shared/components/ui';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../../shared/components/icons';
import cl from "./CategorySlider.module.css";
import { useGetCategoriesQuery } from '../../../../store/slices/catalog/categoryApi';
import { CategoryCard } from '../../../../shared/components';
import { useNavigate } from 'react-router-dom';


export const CategorySliderSection = () => {

  const navigate = useNavigate();

  const { data, isLoading } = useGetCategoriesQuery();

  const sliderRef = useRef(null);
  const {handlePrev, handleNext} = useSlider(sliderRef);

  const categoryList = useMemo(() => {
    console.log(data);
    return data?.data.filter(category => !category.parentCategory);
  }, [data]);

  console.log(categoryList)

 return (
    <div className={cl.wrapper}>
      <div className={cl.header}>
        <div className={cl.title}>
          Категории
        </div>
        <div className={cl.buttons}>
          <ArrowButton onClick={handlePrev}>
            <ArrowLeftIcon w='24' h='24' />
          </ArrowButton>
          <ArrowButton onClick={handleNext}>
            <ArrowRightIcon w='24' h='24' />
          </ArrowButton>
        </div>
      </div>
      {isLoading && 
        <Loader centered />
      }
      {categoryList && 
        <div className={cl.slider}>
          <Swiper
            spaceBetween={8}
            slidesPerView={8}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            style={{ padding: "16px 0px 16px 12px" }}
            ref={sliderRef}
          >
            {categoryList.map(category => (
              <SwiperSlide key={category.id} >
                <CategoryCard category={category} onClick={() => navigate(`/catalog/${category.name}`)}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      }
    </div>
  )
}
