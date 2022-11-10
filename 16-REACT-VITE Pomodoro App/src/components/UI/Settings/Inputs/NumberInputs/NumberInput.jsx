import styled from 'styled-components';

const StyledNumberInput = styled.input`
  all: unset;
  width: 1.8rem;
  height: 1.4rem;
  -moz-appearance: textfield;
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const NumberInput = ({ value }) => {
  return <StyledNumberInput type="number" value={value} />;
};

export default NumberInput;
