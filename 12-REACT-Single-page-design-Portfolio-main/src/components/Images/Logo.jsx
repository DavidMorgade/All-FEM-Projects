import styled from "styled-components";

const StyledLogo = styled.img`
  width: 4.8rem;
  @media (min-width: 768px) {
    width: 6.4rem;
  }
`;

const LogoImage = ({ image }) => {
  return <StyledLogo alt="Amy Logo" src={image} />;
};

export default LogoImage;
