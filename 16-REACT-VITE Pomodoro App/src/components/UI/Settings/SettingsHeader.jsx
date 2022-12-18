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
  @media (min-width: 768px) {
    margin: 3.4rem 0 5.6rem;
    justify-content: space-around;
    gap: 30rem;
    &::after {
      top: 6.2rem;
    }
  }
`;

const SettingsHeader = ({ children }) => {
  return <StyledSettingsHeader>{children}</StyledSettingsHeader>;
};

export default SettingsHeader;
