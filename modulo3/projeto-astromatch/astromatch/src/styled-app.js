import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
    background-color: #242424;
    color: white;
    font-family: 'Roboto', sans-serif;
    }
`