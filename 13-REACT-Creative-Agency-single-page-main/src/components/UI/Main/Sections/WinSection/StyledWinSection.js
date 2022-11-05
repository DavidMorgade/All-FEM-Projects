import styled from 'styled-components';

const StyledWinSection = styled.section`
  height: 91.8rem;
  padding: 0 2.4rem;
  background-color: ${(props) => props.theme.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media (min-width: 768px) {
    position: relative;
    margin-top: -3.7rem;
    z-index: 20;
    flex-direction: row;
    background-color: ${(props) => props.theme.body};
    padding-right: 0;
    padding-left: 3.9rem;
  }
  @media (min-width: 1440px) {
    height: 90rem;
    padding-left: 16.5rem;
    margin-bottom: -3rem;
  }
`;

export default StyledWinSection;
