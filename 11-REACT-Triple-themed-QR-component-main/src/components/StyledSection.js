import styled from 'styled-components';

const StyledSection = styled.section`
  max-width: 32rem;
  max-height: 49.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2rem;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.0476518);
  background-color: ${(props) => props.theme.main};
`;

export default StyledSection;
