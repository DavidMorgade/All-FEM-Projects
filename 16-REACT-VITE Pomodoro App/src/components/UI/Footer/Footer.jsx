import styled from 'styled-components';
import IconSettings from '../../../images/IconSettings';
import SettingsButton from '../../Buttons/SettingsButton';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;
const Footer = ({ settings }) => {
  return (
    <StyledFooter>
      <SettingsButton settings={settings}>
        <IconSettings />
      </SettingsButton>
    </StyledFooter>
  );
};

export default Footer;
