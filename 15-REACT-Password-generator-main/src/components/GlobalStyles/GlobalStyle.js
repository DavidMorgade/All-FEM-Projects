import { createGlobalStyle } from 'styled-components';
import JetBrains from '../../fonts/JetBrainsMono-VariableFont_wght.ttf';

export const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: 'JetBrains';
    src: url(${JetBrains}) format('truetype');
    }
    body {
        background: ${(props) => props.theme.body};
        transition: background 0.5s linear;
        font-family: 'JetBrains', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
    /* * {
    box-shadow: 0 0 0 1px red; 
    } */
`;
