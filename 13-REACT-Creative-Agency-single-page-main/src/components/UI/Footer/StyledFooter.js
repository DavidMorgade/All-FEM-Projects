import styled from 'styled-components';
import { StrategicIcon } from '../../../images/images';

const StyledFooter = styled.footer`
  height: 39.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 2.4rem;
  gap: 4.7rem;
  background-color: ${(props) => props.theme.body};
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 0 4rem;
    height: 25.1rem;
  }
  @media (min-width: 1440px) {
    height: 36.8rem;
    justify-content: space-around;
    position: relative;
    &::before {
      content: '';
      height: 6rem;
      width: 13.4rem;
      mask-image: url(${StrategicIcon});
      mask-repeat: no-repeat;
      background-color: red;
      mask-position: top left;
      mask-size: contain;
      position: absolute;
      left: -7rem;
    }
  }
`;

export { StyledFooter };
