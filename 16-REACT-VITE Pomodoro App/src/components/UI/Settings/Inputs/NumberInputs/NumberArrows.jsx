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

const NumberArrows = () => {
  return (
    <ArrowsContainer>
      <ArrowButton>
        <IconArrowUp />
      </ArrowButton>
      <ArrowButton>
        <IconArrowDown />
      </ArrowButton>
    </ArrowsContainer>
  );
};

export default NumberArrows;
