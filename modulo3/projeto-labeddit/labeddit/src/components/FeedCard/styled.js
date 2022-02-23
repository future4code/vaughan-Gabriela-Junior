import styled from "styled-components";
import { lightColor, mainColor, secondColor } from "../../constants/colors";

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid ${mainColor};
    border-radius: .3em;
    width: 50vw;
    margin: 10px;
    padding: 10px;
    word-break: break-word;
    background-color: white;
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

export const SearchContainer = styled.button`
    width: 30vw;
    display: flex;
    align-items: center;
    border: 1px solid ${mainColor}
`