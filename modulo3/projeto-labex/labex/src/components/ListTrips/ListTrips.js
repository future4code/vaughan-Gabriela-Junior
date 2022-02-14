import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants/baseurl';
import { TripCard } from './style';

const ListTrips = () => {

    const [trips, setTrips] = useState([]);

    useEffect(() => 
        {getTrips()}
    , [])


    const getTrips = async () => {
        const url = `${BASE_URL}/trips`

        try {
            const response = await axios.get(url)
            console.log(response.data.trips)
            setTrips(response.data.trips)

        } catch (error){ 
            console.log(error)
        }
    }

    const renderTrips = trips.map((trip) => {
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
    <div>
        {renderTrips}
    </div>
    )
}

export default ListTrips