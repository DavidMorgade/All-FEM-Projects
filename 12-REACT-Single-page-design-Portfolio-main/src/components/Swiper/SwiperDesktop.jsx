import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

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
        slidesPerView="auto"
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        draggable={true}
        navigation={true}
        modules={[Pagination, Navigation]}
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
