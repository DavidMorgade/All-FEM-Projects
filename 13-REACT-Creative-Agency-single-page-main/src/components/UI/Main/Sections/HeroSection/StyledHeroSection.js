import styled from 'styled-components';

const StyledHeroSection = styled.section`
  background-color: ${(props) => props.theme.body};
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 40% 60%;
    height: 60.6rem;
    align-items: center;
  }
  @media (min-width: 1440px) {
    height: 80rem;
  }
`;

export default StyledHeroSection;
