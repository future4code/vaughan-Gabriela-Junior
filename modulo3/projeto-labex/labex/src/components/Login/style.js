import styled from 'styled-components';
import { mainColor, secondColor } from '../../constants/colors';
import spaceBackground from '../../assets/imgs/space-background.jpg';

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    padding: 20px;
    border: 1px solid black;
    border-radius: .5em;
    background-image: url(${spaceBackground});
    background-position: center;
    input{
        margin: 10px;
        padding: 10px;
        width: 25vw;
        border-radius: .5em;
        border: none;
    }
    button {
        border-radius: .5em;
        background-color: ${mainColor};
        color: ${secondColor};
        border: none;
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
`