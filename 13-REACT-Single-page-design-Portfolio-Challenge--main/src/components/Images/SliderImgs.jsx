import styled from "styled-components";

const StyledImg = styled.img`
  width: 30rem;
  @media (min-width: 768px) {
    width: 54rem;
  }
  @media (min-width: 1440px) {
    width: 100%;
    border-radius: 1rem;
  }
`;

const SliderImgs = ({ src }) => {
  return <StyledImg alt="My Projects" src={src} />;
};

export default SliderImgs;
