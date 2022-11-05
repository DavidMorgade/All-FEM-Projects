import styled from 'styled-components';

const StyledLink = styled.a`
  all: unset;
  cursor: pointer;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 3.2rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1440px) {
    font-size: 1.6rem;
  }
`;
const StyledSpecialLink = styled.a`
  all: unset;
  cursor: pointer;
  height: 2.9rem;
  box-shadow: 0 2px 0 0 ${(props) => props.theme.main}; /* Border bottom */
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.835rem;
  color: ${(props) => props.theme.main};
  transition: color 0.5s ease, box-shadow 0.5s ease;

  @media (min-width: 1440px) {
    font-size: 1.8rem;
    line-height: 2.201rem;
  }
  &:hover {
    color: ${(props) => props.theme.body};
    box-shadow: 0 2px 0 0 ${(props) => props.theme.body}; /* Border bottom */
  }
`;

export { StyledLink, StyledSpecialLink };
