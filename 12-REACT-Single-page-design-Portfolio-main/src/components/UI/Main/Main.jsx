import styled from 'styled-components';
import Description from '../../Texts/Description';
import SecondSection from './SecondSection';
//Hooks
import useWindowSize from '../../../hooks/use-window-size';
const StyledFirstSection = styled.section`
  min-width: 34.3rem;
  min-height: 21rem;
  margin: 0 1.6rem 3.2rem;
  align-self: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    min-width: 69rem;
    min-height: 13.8rem;
    margin: 0 auto 6.4rem;
  }
  @media (min-width: 1440px) {
    min-width: 75.2rem;
    min-height: 15rem;
    justify-content: center;
    gap: 2.3rem;
    margin-bottom: 8.2rem;
  }
`;
const StyledHeading = styled.h1`
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 4.53rem;
  color: var(--black);
  @media (min-width: 768px) {
    font-size: 4.4rem;
    line-height: 5.54rem;
  }
  @media (min-width: 1440px) {
    font-size: 5.6rem;
    line-height: 7.05rem;
  }
`;
const StyledMain = styled.main`
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin-bottom: 12rem;
  }
  @media (min-width: 1440px) {
    margin-bottom: 13.6rem;
  }
`;

const Main = () => {
  const size = useWindowSize();
  const margin =
    size.width < 768
      ? '0 2.9rem'
      : size.width >= 768 && size.width < 1440
      ? '0 5.85rem'
      : '0 34.4rem';
  return (
    <StyledMain>
      <StyledFirstSection>
        <StyledHeading>Design solutions made easy</StyledHeading>
        <Description margin={margin}>
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </Description>
      </StyledFirstSection>
      <SecondSection />
    </StyledMain>
  );
};

export default Main;
