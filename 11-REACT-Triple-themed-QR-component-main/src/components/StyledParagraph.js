import styled from 'styled-components';

const StyledParagraph = styled.p`
  width: 25.6rem;
  height: 5.7rem;
  font-weight: 400;
  font-size: 1.5rem;
  letter-spacing: 0.19px;
  line-height: 18.9px;
  color: ${(props) => props.theme.text};
  margin: 1.6rem 3.2rem 4rem;
  text-align: center;
`;

export default StyledParagraph;
