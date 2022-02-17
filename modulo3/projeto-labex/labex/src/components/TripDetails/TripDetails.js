import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../../constants/baseurl';
import { useEffect, useState } from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { token } from '../../constants/token';
import { TripCard, CandidatesCard, ApprovedCard, GridContainer, ButtonContainer, TitleContainer } from './style';
import { MainStyle } from '../../style-app';

const TripDetails = () => {
    const params = useParams()
    const idTrip = params.id;

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
        const url = `${BASE_URL}/trip/${idTrip}`
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
        const url = `${BASE_URL}/trips/${idTrip}/candidates/${id}/decide`
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
                    <CandidatesCard key={candidate.id}>
                        <p>Nome: {candidate.name}</p>
                        <p>Idade: {candidate.age}</p>
                        <p>País: {candidate.country}</p>
                        <p>Profissão: {candidate.profession}</p>
                        <p>Texto de candidatura: {candidate.applicationText}</p>
                        <ButtonContainer>
                        <button onClick={() => { decideCandidate(candidate.id, false) }}>Recusar</button>
                        <button onClick={() => { decideCandidate(candidate.id, true) }}>Aprovar</button>
                        </ButtonContainer>
                    </CandidatesCard>
                )
            })
            return renderCandidates
        };
    };

    const renderApproved = () => {
        if (tripDetails.approved) {
            const renderApproved = tripDetails.approved.map((candidate) => {
                return (
                    <ApprovedCard key={candidate.id}>
                        <p>Nome: {candidate.name}</p>
                        <p>Idade: {candidate.age}</p>
                        <p>País: {candidate.country}</p>
                        <p>Profissão: {candidate.profession}</p>
                        <p>Texto de candidatura: {candidate.applicationText}</p>
                    </ApprovedCard>
                )
            })
            return renderApproved
        };
    };


    return (
        <MainStyle>
            <TitleContainer>
            <h2>Detalhes da Viagem</h2>
            </TitleContainer>
            
            <TripCard >

                <p>Nome: {tripDetails.name}</p>
                <p>Descrição: {tripDetails.description}</p>
                <p>Planeta: {tripDetails.planet}</p>
                <p>Duração: {tripDetails.durationInDays} dias</p>
                <p>Data: {tripDetails.date}</p>

            </TripCard>

            <TitleContainer>
            <h2>Candidatos pendentes</h2>
            </TitleContainer>

            <GridContainer>
            {renderCandidates()}
            </GridContainer>

            <TitleContainer>
            <h2>Candidatos aprovados</h2>
            </TitleContainer>

            <GridContainer>
            {renderApproved()}
            </GridContainer>



        </MainStyle>
    )
}

export default TripDetails