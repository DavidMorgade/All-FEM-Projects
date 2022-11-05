import styled from 'styled-components';

const StyledImg = styled.img`
  position: relative;
  z-index: 0;
  width: ${(props) => props.width};
  margin: 1.6rem 1.6rem 2.4rem;
  border-radius: 1rem;
  transition: transform 1s ease;
  &:hover {
    transform: ${(props) => props.transform};
  }
`;
const ImgContainer = styled.div`
  margin: 1.6rem 1.6rem 2.4rem;
  width: 28.8rem;
  height: 28.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.body};
`;

export { StyledImg, ImgContainer };
