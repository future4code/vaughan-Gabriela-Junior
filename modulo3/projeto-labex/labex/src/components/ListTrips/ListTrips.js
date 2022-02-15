import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants/baseurl';
import { TripCard, TripContainer } from './style';

const ListTrips = (props) => {

    const renderTrips = props.trips.map((trip) => {
        return (
            <TripCard key={trip.id}>
                Nome: {trip.name} <br/>
                Planeta: {trip.planet} <br/>
                Descrição: {trip.description} <br/>
                Duração: {trip.durationInDays} dias <br/>
                Data: {trip.date}
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