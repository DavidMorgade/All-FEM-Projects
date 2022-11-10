import styled from 'styled-components';
import { useSettingsContext } from '../../../context/useSettingsContext';
import CloseButton from '../../Buttons/ButtonClose';
import { StyledH4, StyledSettingsH2 } from '../../Headings/Headings';
import NumberContainer from './Inputs/NumberInputs/NumberContainer';
import NumberRow from './Inputs/NumberInputs/NumberRow';
import SettingsHeader from './SettingsHeader';
// Hooks

const StyledSettings = styled.form`
  position: absolute;
  top: 4.6rem;
  width: 87%;
  height: 54.9rem;
  background-color: ${({ theme }) => theme.white};
  border-radius: 1.5rem;
  @media (min-width: 768px) {
    width: 70%;
    heigth: 46.4rem;
    top: 26.7rem;
  }
  @media (min-width: 1440px) {
    top: 13.5rem;
    width: 40%;
  }
`;
const StyledBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 12, 28, 0.5);
`;
const appStates = ['pomodoro', 'shortBreak', 'longBreak'];

const Settings = ({ closeSettings }) => {
  // Array settings hour config - context
  const [settings, setSettings] = useSettingsContext();
  const decreaseValueHandler = (e, index) => {
    e.preventDefault();
    const nextSettings = settings.map((s, i) => {
      if (i === index) {
        // If the setting time reach 1 stop
        if (s <= 1) return s;
        return s - 1;
      } else {
        return s;
      }
    });
    setSettings(nextSettings);
  };
  const increaseValueHandler = (e, index) => {
    e.preventDefault();
    const nextSettings = settings.map((s, i) => {
      if (i === index) {
        // if the setting time reach 60 (1 hour) stop incrementing
        if (s >= 60) return s;
        return s + 1;
      } else {
        return s;
      }
    });
    setSettings(nextSettings);
  };
  // Array settings hour config - context
  return (
    <StyledBackdrop>
      <StyledSettings>
        <SettingsHeader>
          <StyledSettingsH2>Settings</StyledSettingsH2>
          <CloseButton closeSettings={closeSettings} />
        </SettingsHeader>
        <StyledH4>time (minutes)</StyledH4>
        <NumberContainer>
          {appStates.map((row, index) => {
            return (
              <NumberRow
                onChange={(e) => e.preventDefault()}
                value={settings[index]}
                key={index}
                text={row}
                minus={(e) => decreaseValueHandler(e, index)}
                plus={(e) => increaseValueHandler(e, index)}
              />
            );
          })}
        </NumberContainer>
      </StyledSettings>
    </StyledBackdrop>
  );
};

export default Settings;
