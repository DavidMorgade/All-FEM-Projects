import styled from 'styled-components';

const StyledDesignSection = styled.section`
  position: relative;
  height: 57.7rem;
  margin-top: 9.6rem;
  @media (min-width: 768px) {
    margin-top: 0;
    display: grid;
    grid-template-columns: 49% 51%;
  }
  @media (min-width: 1440px) {
    min-height: 95.8rem;
    margin-bottom: 20rem;
  }
`;

export default StyledDesignSection;
