import styled from 'styled-components';

const BigHeading = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  line-height: 4rem;
  color: ${(props) => props.theme.heading};
  @media (min-width: 768px) {
    font-size: 5.6rem;
    line-height: 5.6rem;
  }
  @media (min-width: 1440px) {
    font-size: 8rem;
    line-height: 8.8rem;
  }
`;
const MediumHeading = styled.h2`
  font-size: 3.2rem;
  line-height: 4rem;
  font-weight: 800;
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  color: ${(props) => props.Color || props.theme.text};

  @media (min-width: 768px) {
    align-self: ${(props) => (props.Align ? 'center' : 'flex-start')};
  }
  @media (min-width: 1440px) {
    font-size: 5.6rem;
    line-height: 6.4rem;
    width: ${(props) => (props.lessWidth ? '63.5rem' : '100%')};
    position: ${(props) => (props.Relative ? 'relative' : '')};
    right: -6.5rem;
    top: 10rem;
  }
`;
const CustomSpan = styled.span`
  font-weight: 800;
  font-size: 3.2rem;
  line-height: 4rem;
  color: ${(props) => props.theme.main};
  @media (min-width: 1440px) {
    font-size: 5.6rem;
    line-height: 6.4rem;
  }
`;
const LittleHeading = styled.h3`
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: ${(props) => props.theme.text};
  @media (min-width: 1440px) {
    font-size: 2rem;
    line-height: 3.2rem;
  }
`;
const CustomParagraph = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-weight: ${(props) => (props.fontBold ? '800' : '400')};
  margin: ${(props) => props.Margin};
  color: ${(props) => (props.Heading ? props.theme.heading : props.theme.text)};
  @media (min-width: 1440px) {
    font-size: ${(props) => props.FontSize || '1.8rem'};
    line-height: 3.2rem;
  }
  ${(props) => !props.hasQuotes} {
    &::before {
      content: open-quote;
      height: 1.8rem;
    }
    &::after {
      content: close-quote;
      height: 1.8rem;
    }
  }
`;
const StyledQuote = styled.blockquote`
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${(props) => props.theme.text};
  @media (min-width: 1440px) {
    font-size: 2rem;
    line-height: 3.2rem;
  }
`;
const StyledDate = styled.span`
  color: ${(props) => props.theme.text};
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;

  @media (min-width: 1440px) {
    font-size: 1.8rem;
    line-height: 3.2rem;
    line-height: 3.2rem;
  }
`;
const StyledFigcaption = styled.figcaption`
  color: ${(props) => props.theme.text};
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 2rem;
  position: absolute;
  text-align: right;
  bottom: 4rem;
  right: 4rem;
  @media (min-width: 1440px) {
    font-size: 1.8rem;
    line-height: 3.2rem;
    bottom: 8rem;
    right: 15rem;
  }
`;

export {
  BigHeading,
  MediumHeading,
  CustomSpan,
  LittleHeading,
  CustomParagraph,
  StyledQuote,
  StyledDate,
  StyledFigcaption,
};
