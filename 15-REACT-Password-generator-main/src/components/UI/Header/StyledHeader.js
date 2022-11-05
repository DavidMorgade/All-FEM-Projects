import styled from 'styled-components';

const StyledHeader = styled.header`
  margin-bottom: 1.6rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    margin-bottom: 3.1rem;
  }
`;

export default StyledHeader;
