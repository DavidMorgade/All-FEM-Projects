import styled from 'styled-components';

const StyledButton = styled.button`
  all: unset;
  justify-self: center;
  cursor: pointer;
  text-align: center;
  width: 34%;
  height: 100%;
  border-radius: 3rem;
  position: relative;
  left: 5rem;
  transform: translateX(${(props) => props.position});
  transition: all 0.5s ease;
  background-color: ${(props) => props.theme.body};
`;

export default StyledButton;
