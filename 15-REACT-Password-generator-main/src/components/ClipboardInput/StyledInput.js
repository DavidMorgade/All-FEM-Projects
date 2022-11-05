import styled from 'styled-components';

const StyledInput = styled.input`
  all: unset;
  height: 6.4rem;
  font-size: 3.2rem;
  font-weight: 700;
  width: 28rem;
  color: ${(props) => props.theme.text};
  @media (min-width: 768px) {
    width: 100%;
  }
  &::placeholder {
    font-size: 3.2rem;
    font-weight: 700;
    color: ${(props) => props.theme.heading};
  }
`;

export default StyledInput;
