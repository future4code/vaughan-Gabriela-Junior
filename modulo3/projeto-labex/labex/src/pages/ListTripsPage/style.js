import styled from 'styled-components';
import { mainColor, secondColor } from '../../constants/colors';

export const TripsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
        margin: 10px;
        color: ${mainColor};
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    button{
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