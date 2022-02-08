import styled from "styled-components";

export const MainStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CardContainer = styled.div`
    display: grid;
    justify-items: center; 
    border: 2px solid white;
    margin: 10px;
    width: 30%;
    padding: 10px;
    overflow: hidden;
    button {
        grid-area: 1 / 2 / 2 / 2;
    }
    p {
        grid-area: 4 / 1 / 5 / 3 ;
    }
`

export const NameAge = styled.h3`
    grid-area: 3 / 1 / 4 / 3;
    margin-bottom: 10px;
`

export const ImageProfile = styled.img`
    grid-area: 1 / 1 / 3 / 3;
    display: block;
    width: 80%;
    margin: 30px;
    max-height: 500px;
    object-fit: cover;
    object-position: top;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        margin-right: 10px;
        padding: 10px;
    }
`