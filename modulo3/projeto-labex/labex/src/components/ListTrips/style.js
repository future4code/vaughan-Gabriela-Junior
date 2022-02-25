import styled from 'styled-components';
import spaceBackground from '../../assets/imgs/space-background.jpg';
import { secondColor } from '../../constants/colors';

export const TripContainer = styled.div`
    display: grid;
    width: 80vw;
    grid-template-columns: repeat(3, 1fr);

@media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 480px) {
    grid-template-columns: 1fr;
}
`

export const TripCard = styled.div`
    display: flex;
    color: ${secondColor};
    width: 25vw;
    border: 1px solid ${secondColor};
    flex-direction: column;
    margin: 10px;
    padding: 20px;
    border-radius: .5em;
    background-image: url(${spaceBackground});
    background-position: top;
    word-break: break-word;
    p{
        margin: 10px;
    }

@media (max-width: 800px)  {
    width: 40vw;
} 

@media (max-width: 480px) {
    width: 85vw;
}
`