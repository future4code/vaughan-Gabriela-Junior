import styled from 'styled-components';
import spaceBackground from '../../assets/imgs/space-background.jpg';
import { secondColor } from '../../constants/colors';

export const TripContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

export const TripCard = styled.div`
    display: flex;
    color: ${secondColor};
    width: 25vw;
    border: 1px solid black;
    flex-direction: column;
    margin: 10px;
    padding: 10px;
    border-radius: .5em;
    background-image: url(${spaceBackground});
    background-position: top;
    p{
        margin: 5px;
    }
`