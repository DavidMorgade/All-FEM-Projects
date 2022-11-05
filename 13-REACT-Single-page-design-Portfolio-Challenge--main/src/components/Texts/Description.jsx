import styled from "styled-components";

const StyledDescription = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: var(--grayBrown);
  margin: ${(props) => props.margin};
  @media (min-width: 768px) {
    font-size: 1.8rem;
    line-height: 2.8rem;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;
const Description = ({ children, margin }) => {
  return <StyledDescription margin={margin}>{children}</StyledDescription>;
};

export default Description;
