import styled from 'styled-components';

const StyledSettingsButton = styled.button`
  all: unset;
`;

const SettingsButton = ({ children, settings }) => {
  return (
    <StyledSettingsButton onClick={settings}>{children}</StyledSettingsButton>
  );
};

export default SettingsButton;
