import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    transition: all 0.5s linear;
    font-family: 'Kumbh Sans';
    font-weight: 700;
  }
  h1 , h2, h3 , h5 , p  {
    color: ${({ theme }) => theme.text};
  }
  h1 {
    font-size: 8rem;
    letter-spacing: -4px;
    line-height: 9.922rem;
    @media (min-width: 768px) {
      font-size: 10rem;
      letter-spacing: -5px;
      line-height: 12.402rem;
    }
  }
  h2 {
    font-size: 2.4rem;
    line-height: 2.977rem;
    @media (min-width: 768px) {
      font-size: 3.2rem;
      line-height: 3.969rem;      
    }
  }
  h3 {
    font-size: 1.4rem;
    line-height: 1.736rem;
    letter-spacing: 1.131rem;
    @media (min-width: 768px) {
      font-size: 1.6rem;
      line-height: 1.984rem;
      letter-spacing: 1.5rem;
    }
  }
  h4 {
    font-size: 1.1rem;
    line-height: 1.364rem;
    letter-spacing: 0.423rem;
    @media (min-width: 768px) {
      font-size: 1.3rem;
      line-height: 1.612rem;
      letter-spacing: 0.5rem;
    }
  }
  input[type='number'] {
    font-size: 1.4rem;
    line-height: 1.736rem;
  }
  p .title {
    font-size: 1.2rem;
    line-height: 1.5rem;
    opacity: 0.4;
  }
`;
