import styled from 'styled-components';
import { mainColor, secondColor } from '../../constants/colors';

export const TripsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
        border: 1px solid ${secondColor};
        display: flex;
        justify-content: center;
        border-radius: .5em;
        margin: 10px;
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

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`