import Header from '../../components/Header/Header';
import ListTrips from "../../components/ListTrips/ListTrips";
import { useNavigate } from 'react-router-dom';
import { TripsContainer, ButtonContainer } from './style';

const ListTripsPage = (props) => {
    
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
        <button onClick={goToHome}> Voltar </button> 
        <button onClick={goToApplication}>Increva-se</button>
        </ButtonContainer>
        <TripsContainer>
        <h2>Lista de Viagens</h2>
        <ListTrips trips={props.trips}/>
        </TripsContainer>
    </div>
    )
}

export default ListTripsPage