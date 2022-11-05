# Frontend Mentor - Single-page design portfolio solution

This is a solution to the [Single-page design portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

Desktop Version:

![desktop version](./DesktopVersion.png)

Tablet Version:

![tablet version](./TabletVersion.png)

Mobile Version:

![mobile version](./MobileVersion.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Live Site URL](https://single-page-design-portfolio-challenge.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Swiper.js library
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

In this challenge I learnt how to use dinamic components and render them on different grid positions depending on the size of the screen.

Also learnt how to use the Swiper.js library with React and how to add different kind of Swipers and play with the different options.

Slider Desktop (Normal auto preview images):

```jsx
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


```

Swiper Tablet (1 image with pagination effect): 

```jsx
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

```
Mobile Swipper: (Cube Effect with dots)

```jsx
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

}
```

And last but not less important, my reusable grid component for the grid layout:
```jsx
import styled from "styled-components";

const StyledImg = styled.img`
  align-self: flex-end;
  padding: ${(props) => props.paddingImg};
`;
const ImgCont = styled.div`
  grid-row: ${(props) => props.gridRow};
  grid-column: ${(props) => props.gridColumn};
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.8rem;
`;
const ImgText = styled.p`
  color: var(--white);
  padding-bottom: 2.4rem;
  padding-left: 2.4rem;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.02rem;
`;
const GridImage = ({ alt, img, gridRow, gridColumn, bgColor, paddingImg }) => {
  return (
    <ImgCont gridRow={gridRow} bgColor={bgColor} gridColumn={gridColumn}>
      <StyledImg paddingImg={paddingImg} src={img} alt={alt} />
      <ImgText>{alt}</ImgText>
    </ImgCont>
  );
};

export default GridImage;

```

### Continued development

Probably with this kind of projects, I will focus to improve a lot more in my layout skills, and less in the logic part wich is minimal


### Useful resources

- [Swiper.js main page](https://swiperjs.com/) - Swipper.js documentation and main page where so usefull during the creation of the slider!


## Author

- Website - [David Morgade](https://github.com/DavidMorgade/)
- Frontend Mentor - [@DavidMorgade](https://www.frontendmentor.io/profile/DavidMorgade)
- Twitter - [@mesabeagridulce](https://www.twitter.com/MeSabeAgridulce)


## Acknowledgments

As Always I want to thank my wife and my little baby for supporting me during this journey, keep going!
