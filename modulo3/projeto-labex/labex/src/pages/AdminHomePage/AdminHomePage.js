import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { token } from '../../constants/token';
import axios from 'axios';
import { BASE_URL } from '../../constants/baseurl';
import { Button, MainStyle } from '../../style-app';
import { ButtonContainer } from './style';
import AdminTrips from '../../components/AdminTrips/AdminTrips';


const AdminHomePage = (props) => {

    const navigate = useNavigate()

    useProtectedPage()

    const goToHome = () => {
        navigate('/')
    }

    const goToCreateTrip = () => {
        navigate('/admin/trips/create')
    }

    const goLogout = () => {
        localStorage.clear()
        navigate('/login')
    }

    return (
        <div>
            <Header />
            <MainStyle>

                <ButtonContainer>
                    <Button onClick={goToHome} > Voltar </Button>
                    <Button onClick={goToCreateTrip} > Criar Viagem </Button>
                    <Button onClick={goLogout} > Logout </Button>
                </ButtonContainer>
                </MainStyle>

                <AdminTrips trips={props.trips} getId={props.getId} getTrips={props.getTrips}/>
        </div>
    )
}

export default AdminHomePage