import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants/baseurl';
import { TripCard, TripContainer } from './style';

const ListTrips = (props) => {

    const renderTrips = props.trips.map((trip) => {
        return (
            <TripCard key={trip.id}>
                <p>Nome: {trip.name}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Descrição: {trip.description}</p>
                <p>Duração: {trip.durationInDays} dias</p>
                <p>Data: {trip.date}</p>
            </TripCard>
        )
    })

    return (
    <TripContainer>
        {renderTrips}
    </TripContainer>
    )
}

export default ListTrips