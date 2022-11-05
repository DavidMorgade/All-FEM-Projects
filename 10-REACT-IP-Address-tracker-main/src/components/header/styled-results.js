import styled from "styled-components";

const IpContainer = styled.div`
  background-color: white;
  position: relative;
  width: 90%;
  text-align: center;
  border-radius: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media (min-width: 768px) {
    height: 30rem;
    top: 5rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    text-align: left;
  }
  @media (min-width: 992px) {
    width: 80%;
  }
`;
const DesktopCont = styled.div`
  @media (min-width: 768px) {
    border-right: 1px solid lightgray;
    padding: 2rem;
    min-height: 13rem;
  }
  @media (min-width: 1440px) {
    padding: 2rem 7.5rem;
  }
  &:last-of-type {
    border: none;
    padding-right: 0;
  }
`;
const Title = styled.h5`
  font-family: "Rubik", sans-serif;
  color: hsl(0, 0%, 59%);
  letter-spacing: 1.5px;
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
const Result = styled.p`
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  font-size: 2.2rem;
  margin-top: 1rem;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export { IpContainer, DesktopCont, Title, Result };
