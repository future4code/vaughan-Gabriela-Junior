import styled from "styled-components";
import { mainColor } from "../../constants/colors";

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid ${mainColor};
    border-radius: .5em;
    width: 50vw;
    margin: 10px;
    padding: 10px;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`