import styled, { createGlobalStyle } from 'styled-components';
import { mainColor, secondColor } from './constants/colors';
import spaceBackground from './assets/imgs/planets.webp';

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        /* background-image: url(${spaceBackground});
        background-position: top;
        background-size: 100%; */
        font-family: 'Roboto', sans-serif;
        /* background-color: ${mainColor}; */
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

export const MainStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
        margin: 10px;
    }
`

export const Button = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: .5em;
        border: ${secondColor};
        background-color: ${mainColor};
        color: ${secondColor};
        border: none;
        margin: 10px;
        padding: 10px;
        width: 150px;
        height: 50px;
        cursor: pointer;
        :hover{
            border: 1px solid ${mainColor};
            color: ${mainColor};
            background-color: ${secondColor};
        }
`
