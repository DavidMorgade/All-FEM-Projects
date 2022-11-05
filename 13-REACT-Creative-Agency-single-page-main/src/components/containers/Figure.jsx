import styled from 'styled-components';

const StyledFigure = styled.figure`
  white-space: pre-line;
  height: 40.4rem;
  position: relative;
  @media (min-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    justify-self: flex-end;
    z-index: -1;
    min-height: 100%;
    width: 65%;
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 20rem;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.0001) 0%,
        #000000 100%
      );
      opacity: 0.75;
      z-index: 40;
      bottom: 0;
      right: 0;
    }
    img {
      height: 100%;
      width: 100%;
    }
    @media (min-width: 1440px) {
      height: 72.8rem;
    }
  }
`;

export default StyledFigure;
