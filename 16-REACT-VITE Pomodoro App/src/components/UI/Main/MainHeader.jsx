import styled from 'styled-components';
import PomodoroButton from '../../Buttons/PomodoroButton';
import StyledWrapper from '../../Wrappers/StyledWrapper';
import { useState } from 'react';

const StyledMainHeader = styled.header`
  width: 32.7rem;
  height: 6.3rem;
  background-color: ${({ theme }) => theme.menuText};
  border-radius: 3.15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    width: 37.3rem;
  }
`;

const states = ['pomodoro', 'short break', 'long break'];

const MainHeader = () => {
  // This state set the current option selected
  const [currentOption, setcurrentOption] = useState('');
  const currentOptionHandler = (state) => {
    setcurrentOption(state);
  };
  return (
    <StyledWrapper>
      <StyledMainHeader>
        {states.map((state, index) => {
          return (
            <PomodoroButton
              /* if the currentOption it's equal to the state of the pomodoro arr, triggers true */
              isActive={currentOption === state}
              onClick={() => currentOptionHandler(state)}
              currentOption={state}
              key={index}
              text={state}
            ></PomodoroButton>
          );
        })}
      </StyledMainHeader>
    </StyledWrapper>
  );
};

export default MainHeader;
