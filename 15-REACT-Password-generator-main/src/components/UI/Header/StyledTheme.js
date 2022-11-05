import styled from 'styled-components';
// Icons
import { DarkIcon, LightIcon } from '../../../images/images';

const StyledInput = styled.input`
  width: 5rem;
  accent-color: ${(props) => props.theme.strong};
  cursor: pointer;
`;
const StyledInputContainer = styled.div`
  position: relative;
  &::before {
    content: '';
    display: block;
    width: 2rem;
    height: 2rem;
    position: absolute;
    background-image: url(${LightIcon});
    background-size: cover;
    bottom: 3rem;
  }
  &::after {
    content: '';
    display: block;
    width: 2rem;
    height: 2rem;
    position: absolute;
    background-image: url(${DarkIcon});
    background-size: cover;
    bottom: 3rem;
    right: 0;
  }
`;

export { StyledInput, StyledInputContainer };
