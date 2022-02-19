import Header from '../../components/Header/Header';
import ListTrips from "../../components/ListTrips/ListTrips";
import { useNavigate } from 'react-router-dom';
import { TripsContainer, ButtonContainer } from './style';
import { Button } from '../../style-app';

const ListTripsPage = () => {

    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    const goToApplication = () => {
        navigate('/trips/application')
    }

    return (
        <div>
            <Header />
            <ButtonContainer>
                <Button onClick={goToHome}> Voltar </Button>
                <Button onClick={goToApplication}>Increva-se</Button>
            </ButtonContainer>
            <TripsContainer>
                <h2>Lista de Viagens</h2>
                <ListTrips />
            </TripsContainer>
        </div>
    )
};

export default ListTripsPage;