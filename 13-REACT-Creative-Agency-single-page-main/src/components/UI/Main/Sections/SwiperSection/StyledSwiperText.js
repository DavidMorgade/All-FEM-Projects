import styled from 'styled-components';
import { StrategicIconDesktop } from '../../../../../images/images';

const StyledSwiperText = styled.div`
  height: 27.2rem;
  background-color: ${(props) => props.theme.mainBlack};
  padding: 6.4rem 2.4rem;
  @media (min-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    width: 50%;
    height: 35.2rem;
    padding: 10rem 0 17.2rem 3.9rem;
    position: relative;

    &::after {
      content: '';
      height: 2.85rem;
      width: 6.25rem;
      mask-image: url(${StrategicIconDesktop});
      mask-repeat: no-repeat;
      background-color: #ffffff;
      mask-position: top left;
      mask-size: contain;
      position: absolute;
      right: -3rem;
      top: 14rem;
    }
  }
  @media (min-width: 1440px) {
    width: 73.5rem;
    height: 52.8rem;
    padding: 15.2rem 12.5rem 24.3rem 16.5rem;
    &::after {
      top: 18.5rem;
      left: 67rem;
      width: 13.4rem;
      height: 6rem;
    }
  }
`;

export default StyledSwiperText;
