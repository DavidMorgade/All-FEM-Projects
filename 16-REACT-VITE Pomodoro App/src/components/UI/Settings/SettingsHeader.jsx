import styled from 'styled-components';

const StyledSettingsHeader = styled.div`
  position: relative;
  padding: 0 2.4rem;
  margin: 2.4rem 0 5.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &::after {
    position: absolute;
    content: '';
    top: 5.2rem;
    left: 0;
    width: 100%;
    height: 1px;
    background: #e3e1e1;
  }
`;

const SettingsHeader = ({ children }) => {
  return <StyledSettingsHeader>{children}</StyledSettingsHeader>;
};

export default SettingsHeader;
