import { createGlobalStyle } from 'styled-components';
import { secondColor } from './constants/colors'
import './assets/fonts/fonts.css';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }

    body {
    background-color: ${secondColor};
    color: white;
    font-family: 'Roboto', sans-serif;
    }

`