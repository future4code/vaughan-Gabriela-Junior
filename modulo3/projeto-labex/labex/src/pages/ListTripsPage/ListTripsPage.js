import Header from '../../components/Header/Header';
import ListTrips from "../../components/ListTrips/ListTrips";
import { useNavigate } from 'react-router-dom';
import { TripsContainer, ButtonContainer } from './style';
import { useEffect } from 'react';
import { Button } from '../../style-app';

const ListTripsPage = (props) => {
    
    useEffect(() => props.getTrips(), [])
    
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
        <ListTrips trips={props.trips}/>
        </TripsContainer>
    </div>
    )
}

export default ListTripsPage