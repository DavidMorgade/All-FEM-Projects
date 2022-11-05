import styled from "styled-components";
import Button from "../../Buttons/Button";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 34.3rem;
  height: 35.2rem;
  background-color: var(--black);
  margin: 0 auto 4rem;
  border-radius: 0.8rem;
  @media (min-width: 768px) {
    width: 69rem;
    height: 35.2rem;
    margin: 0 auto 5.6rem;
  }
  @media (min-width: 1440px) {
    min-width: 111rem;
    height: 32rem;
    flex-direction: row;
    justify-content: space-around;
  }
`;
const StyledContainer = styled.div`
  text-align: center;
  @media (min-width: 1440px) {
    text-align: left;
    width: 54rem;
    height: 15.9rem;
  }
`;
const StyledHeading = styled.h3`
  padding: 4.9rem 5.2rem 2.4rem 5.1rem;
  font-weight: 700;
  font-size: 2.6rem;
  color: var(--white);
  @media (min-width: 768px) {
    font-size: 3.2rem;
    line-height: 4.03rem;
    padding: 5.6rem 7.5rem 2.6rem;
  }
  @media (min-width: 1440px) {
    font-size: 4rem;
    line-height: 5rem;
    padding: 0;
    padding-bottom: 2.5rem;
  }
`;
const StyledDescription = styled.p`
  padding: 2.4rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: var(--white);
  @media (min-width: 768px) {
    padding: 0 7.5rem 2.6rem;
  }
  @media (min-width: 1440px) {
    padding: 0;
  }
`;

const FinalSection = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledHeading>Book a call with me</StyledHeading>
        <StyledDescription>
          I’d love to have a chat to see how I can help you. The best first step
          is for us to discuss your project during a free consultation. Then we
          can move forward from there.
        </StyledDescription>
      </StyledContainer>
      <Button hoverColor="var(--yellow)" bgColor="var(--red)" />
    </StyledSection>
  );
};

export default FinalSection;
