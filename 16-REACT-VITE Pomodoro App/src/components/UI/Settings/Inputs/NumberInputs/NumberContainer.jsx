import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  height: 13.6rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.9rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 80%;
    background-color: ${({ theme }) => theme.line};
    bottom: -2.5rem;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;

    margin-bottom: 2.6rem;
    &::after {
      width: 90%;
      bottom: 0;
    }
  }
`;

const NumberContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default NumberContainer;
