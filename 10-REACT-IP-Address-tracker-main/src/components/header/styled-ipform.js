import styled from "styled-components";
import { Arrow } from "../../images/images";

const InputSubmit = styled.input`
  all: unset;
  cursor: pointer;
  width: 7rem;
  height: 6rem;
  background-color: black;
  background-image: url(${Arrow});
  background-repeat: no-repeat;
  background-position: center;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;
const InputText = styled.input`
  width: 27rem;
  height: 6rem;
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
  text-align: center;
  font-size: 1.8rem;

  @media (min-width: 768px) {
    width: 100%;
  }

  &::placeholder {
    text-align: center;
    color: hsl(0, 0%, 59%);
  }
  &:focus {
    color: black;
    text-align: center;
    &::placeholder {
      color: transparent;
    }
  }
`;
const StyledForm = styled.form`
  display: flex;
  margin: 2.5rem;
  border-radius: 1rem;
  &.warning {
    background-color: ivory;
    border: none;
    outline: 2px solid red;
  }
  @media (min-width: 768px) {
    width: 40%;
  }
`;

export { InputSubmit, InputText, StyledForm };
