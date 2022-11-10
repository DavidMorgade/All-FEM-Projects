import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 80%;
  height: 13.6rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NumberContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default NumberContainer;
