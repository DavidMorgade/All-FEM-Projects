import styled from 'styled-components';

const StyledHeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  height: 32.7rem;
  margin: 5.6rem 2.4rem 0;
  gap: 1.5rem;
  @media (min-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    justify-self: center;
    z-index: 10;
    height: 37.9rem;
    width: 39.8rem;
    margin: 0;
    margin-right: 30rem;
    margin-bottom: 8rem;
    justify-content: space-between;
  }
  @media (min-width: 1440px) {
    justify-self: flex-start;
    margin-left: 16.5rem;
    width: 55rem;
    height: 52.8rem;
    justify-content: space-evenly;
    gap: 4.5rem;
  }
`;

export { StyledHeroText };
