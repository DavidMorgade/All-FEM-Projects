import styled from 'styled-components';
import { ArrowIcon, ArrowIconHover } from '../../images/images';

export const StyledHeading = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.12rem;
  color: ${(props) => props.theme.heading};
  @media (min-width: 768px) {
    font-size: 2.4rem;
    line-height: 3.168rem;
  }
`;
export const StyledLabel = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.112rem;
  color: ${(props) => props.theme.text};
  @media (min-width: 768px) {
    line-height: 2.376rem;
    font-size: 1.8rem;
  }
`;
export const StyledLength = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.112rem;
  color: ${(props) => props.theme.text};
  @media (min-width: 768px) {
    line-height: 2.376rem;
    font-size: 1.8rem;
  }
`;
export const StyledLevel = styled.p`
  padding-left: 3rem;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.376rem;
  color: ${(props) => props.theme.text};
  @media (min-width: 768px) {
    font-size: 2.4rem;
    line-height: 3.168rem;
    padding-left: 10rem;
  }
`;
export const StyledStrength = styled.h3`
  color: ${(props) => props.theme.heading};
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.112rem;
  @media (min-width: 768px) {
    font-size: 1.8rem;
    line-height: 2.376rem;
  }
`;
export const StyledNumber = styled.p`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.2rem;
  color: ${(props) => props.theme.strong};
  @media (min-width: 768px) {
    font-size: 3.2rem;
    line-height: 4.224rem;
  }
`;
export const GenerateButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  width: 31.1rem;
  height: 5.6rem;
  margin-top: 1.6rem;
  color: ${(props) => props.theme.main};
  background-color: ${(props) => props.theme.strong};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.1rem;
  position: relative;
  transition: background-color 0.5s ease, color 0.5s ease, box-shadow 0.5s ease,
    transform 0.5s ease;
  &:active {
    transform: translateY(0.4rem) scale(0.9);
  }
  @media (min-width: 768px) {
    width: 100%;
    height: 6.5rem;
    margin-top: 3.2rem;
    font-size: 1.8rem;
    line-height: 2.376rem;
    &:hover {
      background: transparent;
      box-shadow: 0 0 0 2px ${(props) => props.theme.strong};
      color: ${(props) => props.theme.strong};
      &::after {
        background-image: url(${ArrowIconHover});
        filter: ${(props) => props.theme.buttonHover};
      }
    }
  }
  &::after {
    content: '';
    display: block;
    width: 1.111rem;
    height: 1.2rem;
    background-image: url(${ArrowIcon});
    filter: ${(props) => props.theme.button};
    position: absolute;
    top: 2.6rem;
    left: 21rem;
    @media (min-width: 768px) {
      left: 30rem;
    }
  }
`;
