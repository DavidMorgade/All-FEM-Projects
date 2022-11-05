import styled from "styled-components";
import { Logo } from "../../../images/images";
import Button from "../../Buttons/Button";
import LogoImage from "../../Images/Logo";

const StyledFooter = styled.footer`
  min-width: 34.3rem;
  min-height: 4.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.7rem 0 1.5rem;
  margin-bottom: 3.2rem;
  @media (min-width: 768px) {
    padding: 0 4rem;
    margin-bottom: 5.6rem;
  }
  @media (min-width: 1440px) {
    width: 111rem;
    height: 6.4rem;
    padding: 0;
    justify-content: space-between;
    margin: 0 auto;
    margin-bottom: 6.4rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <LogoImage image={Logo} />
      <Button hoverColor="var(--blue)" />
    </StyledFooter>
  );
};

export default Footer;
