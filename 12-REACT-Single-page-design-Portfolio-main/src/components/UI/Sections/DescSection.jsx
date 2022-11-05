import styled from "styled-components";
import Button from "../../Buttons/Button";
import Avatar from "../../Images/Avatar";
import CustomHeading from "../../Texts/CustomHeading";
import Description from "../../Texts/Description";

import useWindowSize from "../../../hooks/use-window-size";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 10rem;
  @media (min-width: 768px) {
    text-align: left;
    min-height: 36.4rem;
    min-width: 72.7rem;
    display: grid;
    grid-template-rows: 12rem 14rem 5.6rem;
    grid-template-columns: 36.4rem 33.9rem;
    align-content: center;
    justify-items: left;
    column-gap: 2.9rem;
    row-gap: 2.4rem;
  }
  @media (min-width: 1440px) {
    min-width: 111rem;
    min-height: 44.5rem;
    grid-template-columns: 44.5rem 54rem;
    grid-template-rows: 10rem 8.4rem 5.6rem;
    justify-content: center;
    column-gap: 12.5rem;
    row-gap: 3.4rem;
    margin-bottom: 9rem;
  }
`;

const DescSection = () => {
  const size = useWindowSize();
  return (
    <StyledSection>
      <Avatar />
      <CustomHeading
        fontSize={
          size.width < 768
            ? "2.6rem"
            : size.width >= 768 && size.width < 1440
            ? "3.2rem"
            : "4rem"
        }
        line={size.width >= 1440 && "5rem"}
        margin={
          size.width < 768
            ? "4rem 1.6rem 2.4rem"
            : size.width >= 768 && size.width < 1440
            ? "0"
            : ""
        }
      >
        I’m Amy, and I’d love to work on your next project
      </CustomHeading>
      <Description
        margin={
          size.width < 768
            ? "0 1.6rem 2.4rem"
            : size.width >= 768 && size.width < 1440
            ? "0"
            : ""
        }
      >
        I love working with others to create beautiful design solutions. I’ve
        designed everything from brand illustrations to complete mobile apps.
        I’m also handy with a camera!
      </Description>
      <Button hoverColor={"var(--yellow)"} bgColor="var(--red)" />
    </StyledSection>
  );
};

export default DescSection;
