// Styled component
import styled from 'styled-components';
// image
import { StrategicIcon } from '../../../../../images/images';

const StyledTextPart = styled.div`
  padding: 0 2.4rem;
  width: 100%;
  height: 37.7rem;
  background-color: ${(props) => props.theme.mainBlack};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  text-align: left;
  &::before {
    content: '';
    height: 2.9rem;
    width: 6.3rem;
    mask-image: url(${StrategicIcon});
    mask-repeat: no-repeat;
    background-color: red;
    mask-position: top left;
    mask-size: contain;
    position: absolute;
    top: 18.5rem;
    left: 2.4rem;
  }
  @media (min-width: 768px) {
    width: 100%;
    height: 53.8rem;
    justify-content: center;
    padding-left: 6.9rem;
    padding-right: 4rem;
    gap: 3.2rem;
    position: relative;
    &::before {
      left: -3.5rem;
      top: 16.5rem;
    }
  }
  @media (min-width: 1440px) {
    height: 100%;
    padding: 20rem 15rem 20rem 15.4rem;
    justify-content: flex-start;
    gap: 4.8rem;
    &::before {
      width: 13.4rem;
      height: 6rem;
      top: 24rem;
      left: -7rem;
    }
  }
`;

export default StyledTextPart;
