import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { mainColor, secondColor } from './constants/colors';

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color:#332C33;
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
        border: 1px solid ${secondColor};
        background-color: ${mainColor};
        color: ${secondColor};
        margin: 20px;
        padding: 10px;
        width: 150px;
        height: 50px;
        cursor: pointer;
        :hover{
            border: 1px solid ${mainColor};
            color: ${mainColor};
            background-color: ${secondColor};
        }

@media (max-width: 480px) {
    width: 100px;
    height: 50px;
    text-align: center;
}
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

export const Loading = styled.div`
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
        border-top-color:${secondColor};
        animation: ${rotate} 1.5s linear infinite;
    }
    div:nth-child(2){
        border: 8px solid transparent;
        border-bottom-color: ${secondColor};
        animation: ${rotateTwo} 1.5s linear infinite;
    }
`