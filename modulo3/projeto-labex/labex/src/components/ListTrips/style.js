import styled from 'styled-components';

export const TripContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

export const TripCard = styled.div`
    display: flex;
    width: 25vw;
    border: 1px solid black;
    flex-direction: column;
    margin: 10px;
    padding: 10px;
    height: 25vh;
    border-radius: .5em;
`