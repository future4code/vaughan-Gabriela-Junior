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

    const decideCandidate = async (id, status) => {
        const url = `${BASE_URL}/trips/${props.idTrip}/candidates/${id}/decide`
        const body = {
            approve: status
        }
        const config = {
            headers: {
                auth: token
            }
        }

        try {
            const response = await axios.put(url, body, config)
            console.log(response.data)
            getTripDetails()

        } catch (error) {
            console.log(error.response)
        }
    }

    console.log('aprovados', tripDetails.approved)
    console.log('pendentes', tripDetails.candidates)

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
                        <button onClick={() => {decideCandidate(candidate.id, true)}}>Aprovar</button>
                        <button onClick={() => {decideCandidate(candidate.id, false)}}>Recusar</button>
                    </div>
                )
            })
            return renderCandidates
        };
    };

    const renderApproved = () => {
        if (tripDetails.approved) {
            const renderApproved = tripDetails.approved.map((candidate) => {
                return (
                    <div key={candidate.id}>
                        <p>Nome: {candidate.name}</p>
                        <p>Idade: {candidate.age}</p>
                        <p>País: {candidate.country}</p>
                        <p>Profissão: {candidate.profession}</p>
                        <p>Texto de candidatura: {candidate.applicationText}</p>
                    </div>
                )
            })
            return renderApproved
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
                {renderApproved()}

                <h3>Candidatos pendentes</h3>

                {renderCandidates()}


            </div>

        </div>
    )
}

export default TripDetails