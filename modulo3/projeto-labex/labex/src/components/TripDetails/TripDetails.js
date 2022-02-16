import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../../constants/baseurl';
import { useEffect, useState } from 'react';
import { useProtectedPage } from '../../hooks/useprotectedpage';
import { token } from '../../constants/token';

const TripDetails = (props) => {

    const [tripDetails, setTripDetails] = useState("");

    useEffect(() => getTripDetails(), []);

    useProtectedPage();

    useEffect(() => {
        localStorage.getItem('token')
    }, []);

    useEffect(() => {
        getTripDetails()
    }, []);

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
        };
    };

    const decideCandidate = async(id) => {
        const url = `${BASE_URL}/trips/${props.idTrip}/candidate/${id}/decide`
        const body = {
            approve: true
        }
        const config = {
            headers: {
                auth: token
            }
        }

        try {
            const response = await axios.put(url, body, config)
            console.log(response.data)
            console.log('APROVOU')
        } catch (error) {
            console.log(error.response)
        }
    }

    console.log(tripDetails.approved)
    console.log(tripDetails.candidates)

    const renderCandidates = () => {
        if (tripDetails.candidates) {
            const renderCandidates = tripDetails.candidates.map((candidate) => {
                return (
                    <div key={candidate.id}>
                        <p>Nome: {candidate.name}</p>
                        <p>Idade: {candidate.age}</p>
                        <p>País: {candidate.country}</p>
                        <p>Profissão: {candidate.profession}</p>
                        <p>Texto de candidatura: {candidate.applicationText}</p>
                        <button onClick={() => {decideCandidate(candidate.id)}}>Aprovar</button>
                        <button>Recusar</button>
                    </div>
                )
            })
            return renderCandidates
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

                <h3>Candidatos aprovados</h3>


                <h3>Candidatos pendentes</h3>

                {renderCandidates()}


            </div>

        </div>
    )
}

export default TripDetails