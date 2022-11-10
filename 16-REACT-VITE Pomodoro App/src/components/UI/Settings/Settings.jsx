import styled from 'styled-components';
import CloseButton from '../../Buttons/ButtonClose';
import { StyledH4, StyledSettingsH2 } from '../../Headings/Headings';
import NumberContainer from './Inputs/NumberInputs/NumberContainer';
import NumberRow from './Inputs/NumberInputs/NumberRow';
import SettingsHeader from './SettingsHeader';

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

const Settings = ({ closeSettings }) => {
  return (
    <StyledBackdrop>
      <StyledSettings>
        <SettingsHeader>
          <StyledSettingsH2>Settings</StyledSettingsH2>
          <CloseButton closeSettings={closeSettings} />
        </SettingsHeader>
        <StyledH4>time (minutes)</StyledH4>
        <NumberContainer>
          <NumberRow text="pomodoro" value="25" />
          <NumberRow text="short break" value="5" />
          <NumberRow text="long break" value="15" />
        </NumberContainer>
      </StyledSettings>
    </StyledBackdrop>
  );
};

export default Settings;
