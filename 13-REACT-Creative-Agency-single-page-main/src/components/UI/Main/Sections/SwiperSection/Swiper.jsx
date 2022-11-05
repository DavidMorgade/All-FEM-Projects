import React from 'react';
import {
  SliderImgMobile,
  SliderImgMobileTwo,
  SliderImgMobileThree,
  SliderImgTablet,
  SliderImgTabletTwo,
  SliderImgTabletThree,
  SliderImgDesktop,
  SliderImgDesktopTwo,
  SliderImgDesktopThree,
} from '../../../../../images/images';
import useWindowSize from '../../../../../hooks/useWindowSize';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFlip, Pagination, Navigation, Autoplay } from 'swiper';
import SwiperContainer from './SwiperContainer';

export default function App() {
  const size = useWindowSize();
  return (
    <>
      <Swiper
        loop={true}
        effect={'flip'}
        grabCursor={true}
        pagination={size.width < 1440}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFlip, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SwiperContainer
            src={
              size.width < 768
                ? SliderImgMobile
                : size.width >= 768 && size.width < 1440
                ? SliderImgTablet
                : SliderImgDesktop
            }
            figcaption="Lean Product Roadmap"
            date="2019 Project"
            text="Brand naming & guidelines"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContainer
            src={
              size.width < 768
                ? SliderImgMobileTwo
                : size.width >= 768 && size.width < 1440
                ? SliderImgTabletTwo
                : SliderImgDesktopTwo
            }
            figcaption="New Majestic Hotel"
            date="2018 Project"
            text="Brand identity & merchandise"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContainer
            src={
              size.width < 768
                ? SliderImgMobileThree
                : size.width >= 768 && size.width < 1440
                ? SliderImgTabletThree
                : SliderImgDesktopThree
            }
            figcaption="Crypto Dashboard"
            date="2016 Project"
            text="Brand identity & web design"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
