import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { token } from '../../constants/token';
import axios from 'axios';
import { BASE_URL } from '../../constants/baseurl';
import { Loading, MainStyle } from '../../style-app';
import { TripCard, TitleContainer, GridContainer } from './style';
import useRequestData from '../../hooks/useRequestData';

const AdminTrips = () => {
    const navigate = useNavigate()
    const [trips, isLoading, errorTrips, getTrips] = useRequestData(`${BASE_URL}/trips`);

    useEffect(() => {
        localStorage.getItem('token')
    }, []);

    const deleteTrip = async (id) => {
        const url = `${BASE_URL}/trips/${id}`
        const config = {
            headers: {
                auth: token
            }
        }

        try {
            await axios.delete(url, config)
            alert(`Viagem deletada.`)
            getTrips(`${BASE_URL}/trips`)

        } catch (error) {
            alert(`Ocorreu um erro. Tente novamente. ${error.response.data.message}`)
        }

    }

    const renderTrips = trips && trips.map((trip) => {
        return (
            <TripCard key={trip.id}>
                <h3>{trip.name}</h3>
                <div>
                    <button onClick={() => {
                        navigate(`/admin/trips/details/${trip.id}`)
                    }}>Detalhes</button>
                    <button onClick={() => {
                        if (window.confirm(`Tem certeza que quer deletar a viagem?`)) {
                            return deleteTrip(trip.id)
                        }
                    }}>Deletar</button>
                </div>
            </TripCard>
        )
    });

    return (
        <MainStyle>
            <TitleContainer>
                <h2>Administrar Viagens</h2>
            </TitleContainer>
            <GridContainer>
                {isLoading &&
                    <Loading>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </Loading>}
                {!isLoading && trips && renderTrips}
                {!isLoading && trips && trips.length === 0 && (<p>Não há viagens.</p>)}
            </GridContainer>
        </MainStyle>
    )
};

export default AdminTrips;