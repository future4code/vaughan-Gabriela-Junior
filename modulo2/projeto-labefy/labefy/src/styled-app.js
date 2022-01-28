import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { corSecundaria } from './constants/colors'
import './assets/fonts/fonts.css';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }

    body {
    background-color: ${corSecundaria};
    color: white;
    font-family: 'Roboto', sans-serif;
    }

`