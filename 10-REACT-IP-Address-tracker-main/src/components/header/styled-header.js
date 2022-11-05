import styled from "styled-components";
import { BgImage } from "../../images/images";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 30rem;
  background-image: url(${BgImage});
  background-position: center;
  background-size: cover;
  @media (min-width: 768px) {
    height: 30rem;
  }
`;
const Heading = styled.h1`
  font-weight: 500;
  font-size: 2.6rem;
  text-align: center;
  margin-top: 2rem;
  color: white;
  font-family: "Rubik", sans-serif;
  @media (min-width: 768px) {
    font-size: 3.8rem;
  }
`;

export { Container, Heading };
