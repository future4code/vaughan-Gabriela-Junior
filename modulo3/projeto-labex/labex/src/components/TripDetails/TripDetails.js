import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../../constants/baseurl';
import { useEffect, useState } from 'react';
import { useProtectedPage } from '../../hooks/useprotectedpage';

const TripDetails = (props) => {

    const [tripDetails, setTripDetails] = useState({});

    useProtectedPage()

    const token = localStorage.getItem('token')
    useEffect(() => {
        localStorage.getItem('token')
    }, []);

    useEffect(() => {
        getTripDetails()
    }, [])

    console.log(token)

    const getTripDetails = async () => {
        const url = `${BASE_URL}/trip/${props.idTrip}`
        const config = {
            headers: {
                auth: token
            }
        };

        try {
            const response = await axios.get(url, config)
            setTripDetails(response.data.trip)
            console.log(response.data.trip)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    return (
        <div>
            <h2>Detalhes da Viagem</h2>

            <div>
                <p>Nome: {tripDetails.name}</p>
                <p>Descrição: {tripDetails.description}</p>
                <p>Planeta: {tripDetails.planet}</p>
                <p>Duração: {tripDetails.durationInDays} dias</p>
                <p>Data: {tripDetails.date}</p>
            </div>

        </div>
    )
}

export default TripDetails