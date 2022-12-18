import styled from 'styled-components';

const StyledLabel = styled.label`
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.488rem;
  color: ${({ theme }) => theme.body};
  opacity: 0.4;
  @media (min-width: 768px) {
    line-height: 1.5rem;
  }
`;

const StyledH4 = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.menuText};
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 1.8rem;
  font-size: 1.3rem;
  @media (min-width: 768px) {
    align-self: ${(props) => props.alignSelf};
    margin: ${(props) => props.margin};
    margin-bottom: 0;
  }
`;
const StyledH3 = styled.h3`
  margin: 0;
  position: relative;
  text-transform: uppercase;
`;
const StyledH2 = styled.h2`
  text-align: center;
  margin: 3.2rem 0 4.5rem;
  @media (min-width: 1440px) {
    margin: 3.2rem 0 5.5rem;
  }
`;
const StyledH1 = styled.h1`
  margin: 0;
  position: relative;
`;
const StyledSettingsH2 = styled.h2`
  font-size: 2rem;
  line-height: 2.48rem;
  margin: 0;
  color: ${({ theme }) => theme.menuText};
  @media (min-width: 768px) {
    font-size: 2.8rem;
    line-height: 3.473rem;
  }
`;

export {
  StyledLabel,
  StyledH4,
  StyledH3,
  StyledH2,
  StyledH1,
  StyledSettingsH2,
};
