import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 1.6rem;
  margin-top: 1.6rem;
  background-color: ${(props) => props.theme.main};
  width: 34.3rem;
  height: 42.3rem;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  @media (min-width: 768px) {
    width: 54rem;
    height: 52.8rem;
    padding: 3.4rem 3.2rem 3.2rem;
  }
`;

export default StyledSection;
