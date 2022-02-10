import styled, { keyframes } from "styled-components";
import { mainColor, secondaryColor } from '../../constants/color';

export const MainStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        color: ${mainColor};
        margin: 20px 0 10px;
    }
`

export const CardContainer = styled.div`
    display: grid;
    justify-items: center; 
    border: 2px solid ${mainColor};
    border-radius: .5em;
    background: rgba(173, 101, 172, .1);
    margin: 10px;
    width: 30vw;
    padding: 10px;
    overflow: hidden;
    button {
        grid-area: 1 / 1 / 1 / 1;
    }
`

export const ButtonMatch = styled.button`
    width: 90px;
    height: 55px;
    border: 2px solid ${mainColor};
    background: none;
    border-radius: .5em;
    cursor: pointer;
    :hover {
        background-color: ${secondaryColor};
     }
`

export const ImageDiv = styled.div`
    position: relative;
`

export const ImageProfile = styled.img`
    grid-area: 1 / 1 / 3 / 3;
    display: block;
    border: 2px solid ${mainColor};
    border-radius: .5em; 
    margin: 10px;
    width: 27vw;
    max-height: 60vh;
    aspect-ratio: 9/16;
    object-fit: cover;
    object-position: top;
`

export const NameAge = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;
    margin: 12px;
    border-radius: .5em;
    background: rgba(86, 131, 209, .8);
    padding: 15px;
    width: 26.8vw;
    height: 7vw;
    h3{
        grid-area: 3 / 1 / 4 / 3;
        margin-bottom: 10px;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        margin-right: 10px;
        width: 90px;
        height: 55px;
        border: 2px solid ${mainColor};
        background: none;
        border-radius: .5em;
        cursor: pointer;
        :hover {
            background-color: ${secondaryColor};
        }
    }
`

export const HeartIcon = styled.img`
    width: 40px;
    height: 40px;
`

export const XIcon = styled.img`
    width: 30px;
    height: 30px;
`

export const MatchImg = styled.img`
    width: 45px;
    height: 45px;
`