import styled from "styled-components";

const StyledButton = styled.button`
  all: unset;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => props.bgColor || "var(--black)"};
  color: var(--white);
  width: 17.6rem;
  height: 4.4rem;
  border-radius: 2.8rem;
  font-size: 1.4rem;
  line-height: 2.8rem;
  @media (min-width: 768px) {
    width: 22.8rem;
    height: 5.6rem;
    font-size: 1.6rem;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
  @media (min-width: 1440px) {
    &:hover {
      background-color: ${(props) => props.hoverColor};
      transition: background-color 0.5s linear;
    }
  }
`;

const Button = ({ bgColor, hoverColor }) => {
  return (
    <StyledButton hoverColor={hoverColor} bgColor={bgColor}>
      Free Consultation
    </StyledButton>
  );
};

export default Button;
