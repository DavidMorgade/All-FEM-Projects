import styled from "styled-components";
import {
  Apps,
  GD,
  Illustration,
  Motion,
  Photography,
  UIUX,
} from "../../../images/images";
import GridImage from "../../Images/GirdImage";
// Size Hook
import useWindowSize from "../../../hooks/use-window-size";

const StyledSecondSection = styled.section`
  margin: 0 1.6rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 18.4rem);
  row-gap: 2.4rem;
  column-gap: 2.5rem;
  @media (min-width: 768px) {
    margin: 0 auto;
    min-width: 69rem;
    min-height: 57rem;
    grid-template-columns: 33.3rem 15.5rem 15.5rem;
    grid-template-rows: 18.2rem 15.8rem 18.2rem;
    column-gap: 2.4rem;
  }
  @media (min-width: 1440px) {
    min-width: 111rem;
    min-height: 36.4rem;
    grid-template-columns: 35.4rem 16.4rem 16.4rem 35.4rem;
    grid-template-rows: 18.2rem 15.8rem;
  }
`;

const SecondSection = () => {
  const size = useWindowSize();
  return (
    <StyledSecondSection>
      <GridImage
        img={GD}
        alt="Graphic Design"
        gridRow="1 / 3"
        gridColumn={
          size.width < 768
            ? "1 / 3"
            : size.width >= 768 && size.width < 1440
            ? "1 / 2"
            : ""
        }
        bgColor="var(--blue)"
        paddingImg="2.4rem 2.4rem 0 0"
      />
      <GridImage
        img={UIUX}
        alt="UI/UX"
        bgColor="var(--yellow)"
        gridRow={
          size.width < 768
            ? "3 / 4"
            : size.width >= 768 && size.width < 1440
            ? "1 / 2"
            : ""
        }
        gridColumn={
          size.width < 768
            ? "1 / 2"
            : size.width >= 768 && size.width < 1440
            ? "2 / 3"
            : ""
        }
        paddingImg="2.4rem 2.4rem 0 0"
      />
      <GridImage
        img={Apps}
        alt="Apps"
        bgColor="var(--pink)"
        gridRow={
          size.width < 768
            ? "3 / 4"
            : size.width >= 768 && size.width < 1440
            ? "1 / 2"
            : ""
        }
        gridColumn={
          size.width < 768
            ? "2 / 3"
            : size.width >= 768 && size.width < 1440
            ? "3 / 4"
            : ""
        }
        paddingImg="2.4rem 2.4rem 0 0"
      />
      <GridImage
        img={Illustration}
        alt="Illustrations"
        bgColor="var(--red)"
        gridRow={
          size.width < 768
            ? "4 / 5"
            : size.width >= 768 && size.width < 1440
            ? "2 / 3"
            : "2 / 3"
        }
        gridColumn={
          size.width < 768
            ? "1 / 3"
            : size.width >= 768 && size.width < 1440
            ? "2 / 4"
            : "2 / 4"
        }
        paddingImg="2.4rem 2.3rem 0 0"
      />
      <GridImage
        img={Photography}
        alt="Photography"
        bgColor="var(--cyan)"
        gridRow={
          size.width < 768
            ? "5 / 6"
            : size.width >= 768 && size.width < 1440
            ? "3 / 4"
            : ""
        }
        gridColumn={
          size.width < 768
            ? "1 / 3"
            : size.width >= 768 && size.width < 1440
            ? "1 / 2"
            : ""
        }
        paddingImg="2.4rem 2.4rem 0 0"
      />
      <GridImage
        img={Motion}
        alt="Motion Graphics"
        bgColor="var(--fucsya)"
        gridRow={
          size.width < 768
            ? "6 / 7"
            : size.width >= 768 && size.width < 1440
            ? "3 / 4"
            : ""
        }
        gridColumn={
          size.width < 768
            ? "1 / 3"
            : size.width >= 768 && size.width < 1440
            ? "2 / 4"
            : ""
        }
        paddingImg="2.4rem 2.4rem 0 0"
      />
    </StyledSecondSection>
  );
};

export default SecondSection;
