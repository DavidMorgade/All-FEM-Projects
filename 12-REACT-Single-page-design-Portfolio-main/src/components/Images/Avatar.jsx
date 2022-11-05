import styled from "styled-components";

import { AvatarPic } from "../../images/images";

const StyledAvatar = styled.img`
  width: 30rem;
  @media (min-width: 768px) {
    width: 36.4rem;
    margin-left: -4.5rem;
    grid-row: 1 / 4;
    grid-column: 1 / 2;
  }
  @media (min-width: 1440px) {
    margin-left: 0;
    width: 44.5rem;
  }
`;

const Avatar = () => {
  return <StyledAvatar alt="Amy avatar" src={AvatarPic} />;
};

export default Avatar;
