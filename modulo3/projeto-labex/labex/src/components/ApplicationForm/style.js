import styled from 'styled-components';
import { mainColor, secondColor } from '../../constants/colors';
import spaceBackground from '../../assets/imgs/space-background.jpg';

export const ApplicationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    border-radius: .5em;
    padding: 20px;
    background-image: url(${spaceBackground});
    background-position: bottom;
    margin: 10px;
    select{
        width: 31.3vw;
        border-radius: .5em;
        height: 40px;
        :focus{
            border: 2px solid lightblue;
        }
    }
    textarea{
        border: none;
        border-radius: .5em;
        margin-left: 10px;
        width: 31.4vw;
    }
`

export const SelectContainer = styled.div`
    width: 31.3vw;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    input{
        border: 1px solid gray;
        display: flex;
        border-radius: .5em;
        flex-direction: column;
        margin: 10px;
        padding: 10px;
        width: 30vw;
    }
`