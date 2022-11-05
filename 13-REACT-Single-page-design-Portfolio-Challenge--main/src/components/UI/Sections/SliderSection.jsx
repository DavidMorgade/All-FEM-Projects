import styled from "styled-components";
import Swiper from "../../Swiper/Swiper";
import SwiperTablet from "../../Swiper/SwiperTablet";
import SwiperDesktop from "../../Swiper/SwiperDesktop";
import CustomHeading from "../../Texts/CustomHeading";

// Size Hook
import useWindowSize from "../../../hooks/use-window-size";

const StyledSection = styled.section`
  height: 33.8rem;
  text-align: center;
  margin-bottom: 10rem;
  @media (min-width: 768px) {
    /* width: 262rem; */
    height: 57.6rem;
    margin-bottom: 12rem;
  }
  @media (min-width: 1440px) {
    margin-bottom: 8.8rem;
  }
`;

const SliderSection = () => {
  const size = useWindowSize();
  return (
    <StyledSection>
      <CustomHeading
        fontSize={
          size.width < 768
            ? "2.4rem"
            : size.width >= 768 && size.width < 1440
            ? "3.2rem"
            : "3.2rem"
        }
      >
        My Work
      </CustomHeading>
      {size.width < 768 ? (
        <Swiper />
      ) : size.width >= 768 && size.width < 1440 ? (
        <SwiperTablet />
      ) : (
        <SwiperDesktop />
      )}
    </StyledSection>
  );
};

export default SliderSection;
