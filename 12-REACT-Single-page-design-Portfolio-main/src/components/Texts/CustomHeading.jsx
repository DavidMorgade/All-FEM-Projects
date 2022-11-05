import styled from "styled-components";

const StyledHeading = styled.h2`
  font-weight: 700;
  font-size: ${(props) => props.fontSize};
  line-height: 3.27rem;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  @media (min-width: 768px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  @media (min-width: 1440px) {
    line-height: ${(props) => props.line};
  }
`;

const CustomHeading = ({ children, margin, padding, fontSize, line }) => {
  return (
    <StyledHeading
      margin={margin}
      padding={padding}
      line={line}
      fontSize={fontSize}
    >
      {children}
    </StyledHeading>
  );
};

export default CustomHeading;
