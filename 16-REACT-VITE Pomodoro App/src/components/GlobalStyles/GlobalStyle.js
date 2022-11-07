import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    transition: all 0.5s linear;
    min-height: 100vh;
    font-family: 'Outfit', sans-serif;
  }
`;
