import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header';
import TripDetails from '../../components/TripDetails/TripDetails';

const TripDetailsPage = (props) => {
    const navigate = useNavigate()

    const goToAdminHome = () => {
        navigate('/admin/trips/list')
    }

    return (
    <div>
        <Header />
        <h2>Aqui é a Trip Details Page!</h2>
        <button onClick={goToAdminHome} >Voltar</button>

        <TripDetails idTrip={props.idTrip}
        />
    </div>
    )
}

export default TripDetailsPage