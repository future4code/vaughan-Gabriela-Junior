import styled from 'styled-components';
import {mainColor} from '../../constants/colors';

export const Div = styled.div`
    position: relative;
`

export const HomeContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 89.5vh;
    align-items: center;
    text-align: justify;
    p{
        width: 50vw;
        margin: 30px;
        color: ${mainColor};
    }

`

export const Image = styled.img`
    position: absolute;
    left: -5vw;
    width: 50vw;
    height: 89.5vh;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    object-position: right;
    object-fit: cover;
`