import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { token } from '../../constants/token';
import axios from 'axios';
import { BASE_URL } from '../../constants/baseurl';
import { MainStyle } from '../../style-app';
import { TripCard, TitleContainer, GridContainer } from './style';


const AdminTrips = (props) => {

    const navigate = useNavigate()

    useEffect(() => {
        localStorage.getItem('token')
    }, []);

    console.log(token)

    const goToDetails = (id) => {
        props.getId(id)
        navigate(`/admin/trips/${id}`)
    }

    const deleteTrip = async (id) => {
        const url = `${BASE_URL}/trips/${id}`
        const config = {
            headers: {
                auth: token
            }
        }

        try {
            const response = await axios.delete(url, config)
            console.log(response.data)
            alert(`Viagem deletada.`)
            props.getTrips()

        } catch (error) {
            console.log(error.response.data.message)
        }

    }

    const renderTrips = props.trips.map((trip) => {
        return (
            <TripCard key={trip.id}>
                <h3>{trip.name}</h3>
                <div>
                <button onClick={() => { 
                    navigate(`/admin/trips/${trip.id}`)
                    }}>Detalhes</button>
                <button onClick={() => {
                    if (window.confirm(`Tem certeza que quer deletar a viagem?`)) {
                        return deleteTrip(trip.id)
                    }
                }}>Deletar</button>
                </div>
            </TripCard>

        )
    })

    return (
        <MainStyle>
            <TitleContainer>
                <h2>Administrar Viagens</h2>
            </TitleContainer>
            <GridContainer>
                {renderTrips}
            </GridContainer>
        </MainStyle>
    )
}

export default AdminTrips;