import styled from 'styled-components';
import { mainColor, secondColor } from '../../constants/colors';

export const MainStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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