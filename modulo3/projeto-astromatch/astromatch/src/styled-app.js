import { createGlobalStyle } from 'styled-components';
import styled, {keyframes} from "styled-components";
import { mainColor, secondaryColor} from './constants/color';

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

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
    0% {
        transform: rotate(0deg); border-width: 8px;
    }
    50% {
        transform: rotate(180deg); border-width: 1px;
    }
    100% {
        transform: rotate(360deg); border-width: 8px;
    }
`

export const rotateTwo = keyframes`
    0% {
        transform: rotate(0deg); border-width: 1px;
    }
    50% {
        transform: rotate(180deg); border-width: 8px;
    }
    100% {
        transform: rotate(360deg); border-width: 1px;
    }
`

export const LoadingContainer = styled.div`
    width: 80px;
    height: 80px;
    position: relative;
    margin: 10px;
    div{
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 8px solid transparent;
        border-top-color:${mainColor};
        animation: ${rotate} 1.5s linear infinite;
    }
    div:nth-child(2){
        border: 8px solid transparent;
        border-bottom-color: ${mainColor};
        animation: ${rotateTwo} 1.5s linear infinite;
    }
`

export const bouncer = keyframes`
    from { transform: translateY(0) }
    to {transform: translateY(-50px)}
`

export const LoadingBouncer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 50px;
    height: 50px;
    margin: 30px;
    div{
        width: 10px;
        height: 10px;
        background-color: ${mainColor};
        border-radius: 50%;
        animation: ${bouncer} 0.5s cubic-bezier(.19, .57, .3, .98) infinite alternate;
    }
    div:nth-child(2) {
        animation-delay: 0.1s;
        opacity: 0.8;
    }
    div:nth-child(3) {
        animation-delay: 0.2s;
        opacity: 0.6;
    }
    div:nth-child(4) {
        animation-delay: 0.3s;
        opacity: 0.4;
    }
`

export const KeyboardKeys = styled.div`
    display: grid;
    width: 50vw;
    justify-content: center;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    border: 1px solid ${mainColor};
    padding: 10px;
    border-radius: .5em;
    align-items: center;
    margin-bottom: 10px;
    h3 {
        color: white;
        font-size: .9rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid white;
        border-radius: .5em;
        padding: 8px;
        height: 30px;
    }
    p {
        font-size: 14px;
        color: ${mainColor};
    }
    img {
        width: 30px;
        height: 30px;
        border: 1px solid white;
        margin: 10px;
        border-radius: .5em;
    }
`