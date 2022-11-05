import styled from "styled-components";

const StyledImg = styled.img`
  align-self: flex-end;
  padding: ${(props) => props.paddingImg};
`;
const ImgCont = styled.div`
  grid-row: ${(props) => props.gridRow};
  grid-column: ${(props) => props.gridColumn};
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.8rem;
`;
const ImgText = styled.p`
  color: var(--white);
  padding-bottom: 2.4rem;
  padding-left: 2.4rem;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.02rem;
`;
const GridImage = ({ alt, img, gridRow, gridColumn, bgColor, paddingImg }) => {
  return (
    <ImgCont gridRow={gridRow} bgColor={bgColor} gridColumn={gridColumn}>
      <StyledImg paddingImg={paddingImg} src={img} alt={alt} />
      <ImgText>{alt}</ImgText>
    </ImgCont>
  );
};

export default GridImage;
