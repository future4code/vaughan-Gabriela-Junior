import styled from 'styled-components';
import {mainColor, secondColor} from '../../constants/colors';
import spaceBackground from '../../assets/imgs/space-background.jpg';

export const Div = styled.div`
    position: relative;
`

export const HomeContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 89.5vh;
    align-items: center;
    text-align: justify;
    /* background-image: url(${spaceBackground});
    background-position: center;
    background-size: 100%; */
`

export const Image = styled.img`
    position: absolute;
    left: 0;
    width: 45vw;
    height: 89.5vh;
    border-top-right-radius: 40%;
    border-bottom-right-radius: 40%;
    /* border-radius: .5em; */
    object-position: right;
    object-fit: cover;
`

export const TextAndButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
    padding: 20px;
    width: 50vw;
    border-radius: .5em;
    button{
        display: flex;
        font-size: 3rem;
        justify-content: center;
        align-items: center;
        border-radius: .5em;
        border: ${secondColor};
        background-color: ${mainColor};
        color: ${secondColor};
        border: none;
        margin: 10px;
        padding: 10px;
        width: 30vw;
        height: 40vh;
        cursor: pointer;
        :hover{
            border: 1px solid ${mainColor};
            color: ${mainColor};
            background-color: ${secondColor};
        }
    }
`