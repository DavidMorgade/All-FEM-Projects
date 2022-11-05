import styled from "styled-components";
import { Logo } from "../../../images/images";
import Button from "../../Buttons/Button";
import LogoImage from "../../Images/Logo";

const StyledHeader = styled.header`
  margin: 1.6rem 1.6rem 3.2rem;
  height: 4.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    min-width: 68.9rem;
    min-height: 6.4rem;
    margin: 3.4rem 4rem 6.4rem 3.9rem;
  }
  @media (min-width: 1440px) {
    width: 111.1rem;
    height: 6.4rem;
    margin: 3.4rem auto 6.6rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <LogoImage image={Logo} />
      <Button hoverColor={"var(--blue)"} />
    </StyledHeader>
  );
};

export default Header;
