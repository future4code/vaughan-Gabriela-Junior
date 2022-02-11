import styled from "styled-components";
import { mainColor, secondaryColor} from '../../constants/color';

export const MatchesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    border: 2px solid ${mainColor};
    background: rgba(173, 101, 172, .1);
    width: 30vw;
    border-radius: .5em;
    button {
        margin: 10px;
        width: 90px;
        height: 55px;
        border: 2px solid ${mainColor};
        background: none;
        border-radius: .5em;
        cursor: pointer;
        :hover {
            background-color: ${secondaryColor};
        }
        img{
            width: 40px;
            height: 40px;
        }
    }

@media (max-width: 480px) {
    width: 95vw;
    min-height: 70vh;
    justify-content: flex-start;
        button{
        width: 90px;
        height: 40px;
            img {
                width: 20px;
                height: 20px;
            }
        }
}
`

export const NameContainer = styled.div`
    margin: 10px;
    padding: 20px;
    width: 20vw;
    border: 2px solid ${mainColor};
    border-radius: .5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    :hover{
        background-color: ${mainColor};
    }
    img{
        border-radius: 50%;
        width: 4vw;
        height: 8.7vh;
        aspect-ratio: 9/16;
        object-fit: cover;
        object-position: top;
    }

@media (max-width: 480px) {
    width: 80vw;
    height: 60px;
    img{
        width: 50px;
        height: 50px;
    }
}
`