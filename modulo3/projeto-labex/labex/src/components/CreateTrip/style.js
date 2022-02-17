import styled from 'styled-components';
import { mainColor, secondColor } from '../../constants/colors';
import spaceBackground from '../../assets/imgs/space-background.jpg';

export const InputContainer = styled.div`
    border: 1px solid black;
    border-radius: .5em;
    padding: 20px;
    background-image: url(${spaceBackground});
    background-position: right;
    margin: 10px;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
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
                border: 1px solid ${secondColor};
                font-size: 1rem;
                border-radius: .5em;
                background-color: ${mainColor};
                color: ${secondColor};
                margin-top: 10px;
                padding: 10px;
                width: 100px;
                height: 50px;
                cursor: pointer;
                :hover{
                color: ${mainColor};
                background-color: ${secondColor};
                }
            }
        }
`

export const TitleContainer = styled.div`
        h2{
        display: flex;
        justify-content: center;
        border-radius: .5em;
        margin: 10px;
        color: ${secondColor};
        background-color: ${mainColor};
        padding: 20px;
        width: 35vw;
    }
`