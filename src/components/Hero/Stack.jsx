// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Stack.css";
import LazyImage from "../LazyImage/LazyImage";

// import required modules
import { EffectCards } from "swiper/modules";

export default function Stack() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <LazyImage 
            src="/assets/images/slide1.png" 
            alt="Book slide 1"
            className="w-[240px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyImage 
            src="/assets/images/slide2.png" 
            alt="Book slide 2"
            className="w-[240px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyImage 
            src="/assets/images/slide3.png" 
            alt="Book slide 3"
            className="w-[240px] h-[320px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyImage 
            src="/assets/images/slide4.png" 
            alt="Book slide 4"
            className="w-[240px] h-[320px]"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}