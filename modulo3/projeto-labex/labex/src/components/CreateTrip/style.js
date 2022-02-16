import styled from 'styled-components';
import { mainColor, secondColor } from '../../constants/colors';
import spaceBackground from '../../assets/imgs/space-background.jpg';

export const CreateTripContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    border-radius: .5em;
    padding: 20px;
    background-image: url(${spaceBackground});
    background-position: right;
    margin: 10px;
    input {
        margin: 10px;
        padding: 10px;
        width: 40vw;
        border-radius: .5em;
        border: none;
    }
    textarea{
        margin: 10px;
        padding: 10px;
        width: 40vw;
        border-radius: .5em;
        border: none;
    }
    button {
        border-radius: .5em;
        background-color: ${mainColor};
        color: ${secondColor};
        margin-top: 10px;
        border: none;
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