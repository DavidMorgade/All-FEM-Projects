import styled from 'styled-components';

export default function ({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15.2rem;
`;
