import styled from 'styled-components';
import spaceBackground from '../../assets/imgs/space-background.jpg';
import { mainColor, secondColor } from '../../constants/colors';

export const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    color: ${secondColor};
    background-image: url(${spaceBackground});
    background-position: bottom;
    background-size: 100%;
    box-shadow: 0 0 5px 1px ${secondColor};
    button{
        margin: 10px;
        background: none;
        border: none;
        color: ${secondColor};
        font-size: 1.5rem;

        cursor: pointer;
        :hover{
            border-bottom: 1px solid #c4c4c4;
        }
    }
    h1{
        justify-self: center;
        align-self: center;
        margin: 15px 20px;
    }
`

export const ButtonContainer = styled.div`
    margin-right: 30px;
    button{
        margin: 10px;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: ${secondColor};
        cursor: pointer;
        :hover{
            border-bottom: 1px solid #c4c4c4;
        }
    }
`