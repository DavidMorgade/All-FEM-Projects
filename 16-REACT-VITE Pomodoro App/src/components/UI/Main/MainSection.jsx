import styled from 'styled-components';
import StyledWrapper from '../../Wrappers/StyledWrapper';
import ProgressBar from './ProgressBar';

const StyledSection = styled.section`
  width: 26.78rem;
  height: 26.78rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.menuText};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 41rem;
    height: 41rem;
  }
`;
const BorderDiv = styled.div`
  border-radius: 50%;
  padding: 1.61rem;
  position: relative;
  box-shadow: -50px -50px 100px #272c5a, 50px 50px 100px #121530;
  background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1440px) {
    margin: 4.5rem 0 6.3rem;
  }
`;

const MainSection = () => {
  return (
    <StyledWrapper>
      <BorderDiv>
        <StyledSection>
          <ProgressBar />
        </StyledSection>
      </BorderDiv>
    </StyledWrapper>
  );
};
export default MainSection;
