import styled from 'styled-components';

const StyledPomodoroButton = styled.button`
  all: unset;
  cursor: pointer;
  width: 10.52rem;
  height: 4.8rem;
  border-radius: 2.65rem;
  // isActive prop tells wich buttons needs to highlight
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.change : 'transparent'};
  color: ${({ theme, isActive }) => (isActive ? theme.body : theme.text)};
  font-size: 1.2rem;
  line-height: 1.48rem;
  text-align: center;
`;

const PomodoroButton = ({ text, onClick, isActive }) => {
  return (
    <StyledPomodoroButton isActive={isActive} onClick={onClick}>
      {text}
    </StyledPomodoroButton>
  );
};

export default PomodoroButton;
