import styled from 'styled-components';

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  background-color: ${(props) => props.theme.main};
  width: ${(props) => props.Width};
  height: ${(props) => props.Height};
  color: ${(props) => props.theme.text};
  text-align: center;
  font-weight: 800;
  line-height: 2.201rem;
  transition: color 0.5s ease, background-color 0.5s ease;
  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.main};
    box-shadow: 0 0 0 2px ${(props) => props.theme.main};
  }
  @media (min-width: 768px) {
    width: ${(props) => props.Width || '14.7rem'};
    height: ${(props) => props.Height || '6.4rem'};
    font-size: 1.6rem;
    line-height: 1.95rem;
    background-color: ${(props) => props.bgColor || props.theme.main};
  }
`;
const StyledHamburguerButton = styled.button`
  all: unset;
  cursor: pointer;
`;

export { StyledButton, StyledHamburguerButton };
