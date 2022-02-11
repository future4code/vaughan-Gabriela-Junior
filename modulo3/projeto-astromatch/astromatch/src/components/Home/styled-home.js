import styled, { keyframes } from "styled-components";
import { mainColor, secondaryColor } from '../../constants/color';

export const CardContainer = styled.div`
    display: grid;
    justify-items: center; 
    border: 2px solid ${mainColor};
    border-radius: .5em;
    background: rgba(173, 101, 172, .1);
    margin: 10px;
    width: 30vw;
    padding: 10px;
    overflow: hidden;
@media (max-width: 480px) {
    width: 95vw;
    max-height: 80vh;
}
@media (max-height: 800px) {
    height: 68vh;
}
`

export const ButtonMatch = styled.button`
    grid-area: 1 / 1 / 1 / 1;
    width: 90px;
    height: 55px;
    border: 2px solid ${mainColor};
    background: none;
    border-radius: .5em;
    cursor: pointer;
    :hover {
        background-color: ${secondaryColor};
     }

@media (max-width: 480px) {
    width: 70px;
    height: 40px;
}

@media (max-height: 800px) {
    height: 40px;
    width: 80px;
}
`

export const ImageDiv = styled.div`
    position: relative;
`

export const ImageProfile = styled.img`
    grid-area: 1 / 1 / 3 / 3;
    display: block;
    border: 2px solid ${mainColor};
    border-radius: .5em; 
    margin: 10px;
    width: 27vw;
    max-height: 60vh;
    aspect-ratio: 9/16;
    object-fit: cover;
    object-position: top;
    animation: ${props => {
        if (props.animationRight) {
            return "right 0.8s 0s"
        } else if (props.animationLeft) {
            return "left 0.8s 0s"
        }
    }};
    
    @keyframes right {
        from{filter: invert(0)}
        to {filter: invert(200%);}
    }
    @keyframes left {
        from {filter: grayscale(0);}
        to {filter: grayscale(200%);}
    }

    @media (max-width: 480px) {
        width: 80vw;
        display: flex;
        max-height: 60vh;
        object-position: center;
    }

@media (max-height: 800px) {
    aspect-ratio: 9/16;
    height: 48vh;
}
`

export const NameAge = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;
    margin: 12px;
    border-radius: .5em;
    background: rgba(86, 131, 209, .8);
    padding: 15px;
    width: 26.8vw;
    height: 7vw;
    h3{
        grid-area: 3 / 1 / 4 / 3;
        margin-bottom: 10px;
        height: 3vw
    }

    @media (max-width: 480px) {
        display: flex;
        justify-content: center;

        width: 79vw;
        height: 20vh;
    }

`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        margin-right: 10px;
        width: 90px;
        height: 55px;
        border: 2px solid ${mainColor};
        background: none;
        border-radius: .5em;
        color: white;
        font-weight: 600;
        cursor: pointer;
        :hover {
            background-color: ${secondaryColor};
        }
    }

@media (max-width: 480px) {
    button{
        width: 24vw;
        height: 35px;
        h3 {
            font-size: .55rem;
            word-wrap: wrap;
        }
    }
}

@media (max-height: 800px) {
    button{
    height: 40px;
    width: 80px;
    }
    h3{
        font-size: .68rem;
    }
}
`

export const HeartIcon = styled.img`
    width: 40px;
    height: 40px;

@media (max-width: 480px) {
    width: 30px;
    height: 30px;
}

@media (max-height: 800px) {
    height: 30px;
    width: 30px;
}
`

export const XIcon = styled.img`
    width: 30px;
    height: 30px;

@media (max-width: 480px) {
    width: 20px;
    height: 20px;
}

@media (max-height: 800px) {
    height: 20px;
    width: 20px;
}
`

export const MatchImg = styled.img`
    width: 45px;
    height: 45px;

@media (max-width: 480px) {
    width: 30px;
    height: 30px;
}

@media (max-height: 800px) {
    height: 35px;
    width: 35px;
}
`