import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
  height: 15rem;
  background-color: ${(props) => props.theme.main};
  border-radius: 2rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.0476518);
`;
const StyledInputSubmit = styled.input`
  all: unset;
  font-family: 'Outfit', sans-serif;
  color: ${(props) => props.theme.heading};
  background-color: ${(props) => props.theme.body};
  cursor: pointer;
  text-align: center;
  border-radius: 2rem;
  width: 15rem;
  height: 5rem;
  transition: all 1s ease;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);

  &:active {
    box-shadow: none;
    transform: scale(50%);
  }
  &:hover {
    background-color: ${(props) => props.theme.heading};
    color: ${(props) => props.theme.body};
  }
`;
const StyledInput = styled.input`
  all: unset;
  font-family: 'Outfit', sans-serif;
  border: 2px solid ${(props) => props.theme.heading};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.heading};
  &:focus::placeholder {
    color: transparent;
  }
  &::placeholder {
    text-align: center;
    color: ${(props) => props.theme.heading};
  }
`;

export { StyledForm, StyledInput, StyledInputSubmit };
