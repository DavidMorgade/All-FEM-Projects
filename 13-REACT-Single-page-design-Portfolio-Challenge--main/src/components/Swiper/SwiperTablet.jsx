import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper";

import {
  SlideOne,
  SlideTwo,
  SlideThree,
  SlideFour,
  SlideFive,
} from "../../images/images";

import SliderImgs from "../Images/SliderImgs";

export default function App() {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1.1}
        centeredSlides={true}
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderImgs src={SlideOne} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImgs src={SlideTwo} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImgs src={SlideThree} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImgs src={SlideFour} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImgs src={SlideFive} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
