import styled, { keyframes } from 'styled-components';
import { mainColor, secondColor } from '../../constants/colors';
import spaceBackground from '../../assets/imgs/space-background.jpg';

export const FormContainer = styled.div`
    border: 1px solid ${secondColor};
    border-radius: .5em;
    padding: 20px;
    background-image: url(${spaceBackground});
    background-position: bottom;
    margin: 10px;
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    select{
        margin: 10px;
        width: 30vw;
        border-radius: .5em;
        height: 40px;
        :focus{
            border: 2px solid lightblue;
        }
    }

    button{
        border: 1px solid ${secondColor};
        font-size: 1rem;
        border-radius: .5em;
        background-color: ${mainColor};
        color: ${secondColor};
        margin: 10px;
        padding: 10px;
        width: 100px;
        height: 50px;
        cursor: pointer;
        :hover{
            color: ${mainColor};
            background-color: ${secondColor};
        }
    }
    input{
        border: 1px solid gray;
        display: flex;
        border-radius: .5em;
        flex-direction: column;
        margin: 10px;
        padding: 10px;
        width: 30vw;
    }

@media (max-width: 800px)  {
    width: 60vw;
    select {
        width: 55vw;
    }
    input {
        width: 55vw;
    }
} 

@media (max-width: 480px) {
    width: 85vw;
    select {
        width: 75vw;
    }
    input {
        width: 75vw;
    }

}
`

export const SelectContainer = styled.div`
    width: 30vw;
    margin: 10px;

@media (max-width: 800px)  {
    width: 55vw;
} 

@media (max-width: 480px) {
    width: 75vw;
}
`

export const TitleContainer = styled.div`
        h2{
        display: flex;
        justify-content: center;
        border-radius: .5em;
        margin: 10px;
        border: 1px solid ${secondColor};
        color: ${secondColor};
        background-color: ${mainColor};
        padding: 20px;
        width: 35vw;
        text-align:center;
    }

@media (max-width: 480px) {
    h2{
        width: 85vw;
    }
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
    width: 40px;
    height: 40px;
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