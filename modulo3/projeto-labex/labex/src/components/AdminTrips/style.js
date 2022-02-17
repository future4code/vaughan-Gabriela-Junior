import styled from "styled-components";
import { mainColor, secondColor } from "../../constants/colors";
import spaceBackground from '../../assets/imgs/space-background.jpg';

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

export const TripCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${secondColor};
    padding: 20px;
    border: 1px solid ${mainColor};
    margin: 10px;
    width: 30vw;
    border-radius: .5em;
    background-image: url(${spaceBackground});
    background-position: right;
    h3{
        margin: 10px;
    }
    button{
        margin: 10px;
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
`

export const ButtonContainer = styled.div`
    display:flex;
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