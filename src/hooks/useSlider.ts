import { useCallback } from "react";

export const useSlider = (sliderRef: React.MutableRefObject<null>) => {
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return {
    handlePrev,
    handleNext
  }
}