import styled from 'styled-components';

const StyledSwiperSection = styled.section`
  min-height: 67.6rem;
  position: relative;
  @media (min-width: 768px) {
    position: relative;
    min-height: 47.2rem;
    z-index: 200;
    margin-top: -11rem;
  }
  @media (min-width: 1440px) {
    min-height: 72.8rem;
    margin-top: -14.5rem;
  }
`;

export default StyledSwiperSection;
