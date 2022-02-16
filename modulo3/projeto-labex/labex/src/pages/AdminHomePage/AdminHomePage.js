import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getByTestId } from '@testing-library/react';
import { useProtectedPage } from '../../hooks/useprotectedpage';

const AdminHomePage = (props) => {

    const navigate = useNavigate()
    
    useProtectedPage()

    const goToHome = () => {
        navigate('/')
    }

    const goToCreateTrip = () => {
        navigate('/admin/trips/create')
    }

    const goToDetails = (id) => {
        props.getId(id)
        navigate(`/admin/trips/:id`)
    }

    const renderTrips = props.trips.map((trip) => {
        return (
            <div key={trip.id}>
                {trip.name}
                <button onClick={()=>{goToDetails(trip.id)}}>Detalhes</button>
            </div>

        )
    })

    return (
        <div>
            <Header />
            <h2>Aqui é a Admin Home Page!</h2>
            <button onClick={goToHome} > Voltar </button>
            <button onClick={goToCreateTrip} > Criar Viagem </button>

            {renderTrips}
        </div>
    )
}

export default AdminHomePage