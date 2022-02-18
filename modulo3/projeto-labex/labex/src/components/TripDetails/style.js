import styled from "styled-components";
import { mainColor, secondColor } from "../../constants/colors";
import spaceBackground from '../../assets/imgs/space-background.jpg';

export const TripCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    color: ${secondColor};
    padding: 20px;
    border: 1px solid ${secondColor};
    margin: 10px;
    width: 62vw;
    border-radius: .5em;
    background-image: url(${spaceBackground});
    background-size: 100%;
    background-position: bottom;
    word-break: break-all;
    p{
        margin: 10px;
    }
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

export const CandidatesCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    color: ${secondColor};
    padding: 20px;
    border: 1px solid ${secondColor};
    margin: 10px;
    width: 30vw;
    border-radius: .5em;
    background-image: url(${spaceBackground});
    background-position: left;
    word-break: break-all;
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
    p{
        margin: 10px;
        font-size: 1rem;
    }
`

export const ApprovedCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    color: ${secondColor};
    padding: 20px;
    border: 1px solid ${secondColor};
    margin: 10px;
    width: 30vw;
    border-radius: .5em;
    background-image: url(${spaceBackground});
    background-position: right;
    word-break: break-all;
    p{
        margin: 10px;
        font-size: 1rem;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    align-self: center;
    margin-top: 10px;
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
        width: 35vw;
    }
`