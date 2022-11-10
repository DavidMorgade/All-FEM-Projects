import styled from 'styled-components';
import { StyledLabel } from '../../../../Headings/Headings';
import NumberArrows from './NumberArrows';
import NumberInput from './NumberInput';

const StyledRow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NumberRow = ({ text, value, onChange, plus, minus }) => {
  return (
    <StyledRow>
      <StyledLabel>{text}</StyledLabel>
      <NumberInput onChange={onChange} value={value} />
      <NumberArrows plus={plus} minus={minus} />
    </StyledRow>
  );
};

export default NumberRow;
