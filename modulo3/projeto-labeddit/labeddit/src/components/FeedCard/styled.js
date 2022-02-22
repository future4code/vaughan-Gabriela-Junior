import styled from "styled-components";
import { lightColor, mainColor, secondColor } from "../../constants/colors";

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid ${mainColor};
    border-radius: .5em;
    width: 50vw;
    margin: 10px;
    padding: 10px;
    :hover{
        background: ${lightColor};
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`

export const CardButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    text-align: start;
`