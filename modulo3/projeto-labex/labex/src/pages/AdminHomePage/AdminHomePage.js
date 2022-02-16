import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useProtectedPage } from '../../hooks/useprotectedpage';
import { token } from '../../constants/token';
import axios from 'axios';
import { BASE_URL } from '../../constants/baseurl';


const AdminHomePage = (props) => {

    const navigate = useNavigate()

    useProtectedPage()

    useEffect(() => {
        localStorage.getItem('token')
    }, []);

    const goToHome = () => {
        navigate('/')
    }

    console.log(token)

    const goToCreateTrip = () => {
        navigate('/admin/trips/create')
    }

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
            <div key={trip.id}>
                {trip.name}
                <button onClick={() => { goToDetails(trip.id) }}>Detalhes</button>
                <button onClick={() => {
                    if (window.confirm(`Tem certeza que quer deletar a viagem?`)) {
                        return deleteTrip(trip.id)
                    }
                }}>DELETAR VIAGEM</button>
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