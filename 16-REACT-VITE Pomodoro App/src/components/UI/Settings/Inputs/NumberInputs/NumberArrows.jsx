import styled from 'styled-components';
import { IconArrowUp, IconArrowDown } from '../../../../../images/IconArrows';

const ArrowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArrowButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const NumberArrows = ({ plus, minus }) => {
  return (
    <ArrowsContainer>
      <ArrowButton onClick={plus}>
        <IconArrowUp />
      </ArrowButton>
      <ArrowButton onClick={minus}>
        <IconArrowDown />
      </ArrowButton>
    </ArrowsContainer>
  );
};

export default NumberArrows;
