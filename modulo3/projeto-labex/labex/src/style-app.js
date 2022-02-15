import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
        h1{
        font-size: 3rem;
        }

        h2{
        font-size: 2rem;
        }

        p{
        font-size: 1rem;
        }
    }
`
