import styled from 'styled-components';
import { mainColor, secondColor } from '../../constants/colors';
import spaceBackground from '../../assets/imgs/space-background.jpg';

export const InputContainer = styled.div`
    margin: 10px;
    padding: 20px;
    border: 1px solid ${secondColor};
    border-radius: .5em;
    background-image: url(${spaceBackground});
    background-position: center;
    width: 30vw;
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        input{
            margin: 10px;
            padding: 10px;
            width: 25vw;
            border-radius: .5em;
            border: none;
        }
        button {
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
    }

@media (max-width: 800px)  {
    width: 60vw;
    form {
        input {
            width: 55vw;
        }
    }
} 

@media (max-width: 480px) {
    width: 85vw;
    form {
        input {
        width: 70vw;
        }
    }
}
`

export const TitleContainer = styled.div`
        h2{
        border: 1px solid ${secondColor};
        display: flex;
        justify-content: center;
        border-radius: .5em;
        margin: 10px;
        color: ${secondColor};
        background-color: ${mainColor};
        padding: 20px;
        width: 30vw;
        text-align:center;
    }

@media (max-width: 480px) {
    h2 {
        width: 85vw;
    }
}
`