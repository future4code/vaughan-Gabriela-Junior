import styled from 'styled-components';
import { mainColor, secondColor } from '../../constants/colors';

export const TripsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`