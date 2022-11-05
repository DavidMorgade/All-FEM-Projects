import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SliderImgs from "../Images/SliderImgs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper";

import {
  SlideOne,
  SlideTwo,
  SlideThree,
  SlideFour,
  SlideFive,
} from "../../images/images";

export default function App() {
  return (
    <Swiper
      loop={true}
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      modules={[EffectCube, Pagination, Autoplay]}
      className="mySwiper"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
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
  );
}
