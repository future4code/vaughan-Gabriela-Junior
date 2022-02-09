import { createGlobalStyle } from 'styled-components';
import styled, {keyframes} from "styled-components";
import { mainColor, secondaryColor} from './constants/color';

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

export const HermeneImg = styled.img`
    width: 40px;
    height: 40px;
    margin: 0 20px 0;
`

export const Header = styled.h1` 
    display: flex;
    justify-content: center;
    margin: 10px;
    color: ${mainColor};
`

export const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const Loading = styled.div`
    display: flex;
    margin: 20px;
    align-items: center;
    justify-content: center;
    width: 100%;
    width: 50px; 
    height: 50px;
    font-size: 2rem;
    border-radius: 50%;
    border-top: 5px solid ${mainColor};
    animation: ${rotate} 2s linear infinite;
`