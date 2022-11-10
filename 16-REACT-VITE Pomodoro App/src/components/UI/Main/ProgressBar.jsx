import { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { useSettingsContext } from '../../../context/useSettingsContext';
import { StyledH1, StyledH3 } from '../../Headings/Headings';

const StyledBar = styled.div`
  position: relative;
  height: 24.805rem;
  width: 24.805rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;
  align-items: center;
  border-radius: 50%;
  &::before {
    content: '';
    position: absolute;
    height: 23rem;
    width: 23rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.menuText};
  }
  @media (min-width: 768px) {
    width: 33.9rem;
    height: 33.9rem;
    &::before {
      width: 31.4rem;
      height: 31.4rem;
    }
  }
`;

const ProgressBar = () => {
  //State for the time in minutes and seconds
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [percent, setPercent] = useState(100);
  // Getting Theme for the radial-gradient inline style
  const theme = useTheme();
  // Gets time from settings context
  const [settings, _] = useSettingsContext();
  const minutesHard = settings[0];
  // Calculates the time on miliseconds when the time is set
  const time = minutesHard * 60 * 1000 + Date.now();
  const getTime = (time) => {
    const timeLeft = time - Date.now();

    const totalSeconds = minutesHard * 60;
    const remainingSeconds = timeLeft / 1000;
    if (timeLeft <= 0) return;
    setMinutes(Math.floor((timeLeft / 1000 / 60) % 60));
    setSeconds(Math.floor((timeLeft / 1000) % 60));
    setPercent(100 * (remainingSeconds / totalSeconds));
  };
  useEffect(() => {
    const interval = setInterval(() => getTime(time), 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledBar
      style={{
        // Adding the conic-gradient in-line so styled components doesn't change class every interval
        background: `conic-gradient(${theme.change} ${percent.toFixed(2)}%, ${
          theme.menuText
        } 0%)`,
      }}
    >
      <StyledH1>
        {/* Format seconds into two digits */}
        {minutes.toLocaleString('en-US', { minimumIntegerDigits: 2 })}:
        {seconds.toLocaleString('en-US', { minimumIntegerDigits: 2 })}
      </StyledH1>
      <StyledH3>Pause</StyledH3>
    </StyledBar>
  );
};

export default ProgressBar;

/* background: conic-gradient(
    ${({ theme }) => theme.change},
    ${(props) => props.percentDone},
    ${({ theme }) => theme.menuText} 0%
  ); */
