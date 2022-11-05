import styled from 'styled-components';

const StyledHeader = styled.header`
  position: ${(props) => props.position};
  backdrop-filter: blur(${(props) => props.blur});
  opacity: ${(props) => props.Opacity};
  z-index: 1000;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => props.Height || '11rem'};
  width: 100%;
  margin: 0 auto;
  padding: 0 2.4rem;
  background-color: ${(props) => props.theme.body};
  transition: height 0.5s linear;
  @media (min-width: 768px) {
    padding-left: 3.9rem;
    padding-right: 0;
  }
  @media (min-width: 1440px) {
    padding-left: 16.5rem;
  }
`;

export default StyledHeader;
