import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header';
import TripDetails from '../../components/TripDetails/TripDetails';
import { Button, MainStyle } from '../../style-app';

const TripDetailsPage = () => {
    const navigate = useNavigate()

    const goToAdminHome = () => {
        navigate('/admin/trips/list')
    }

    return (
        <div>
            <Header />
            <MainStyle>
                <Button onClick={goToAdminHome}>Voltar</Button>

                <TripDetails />
            </MainStyle>
        </div>
    )
}

export default TripDetailsPage