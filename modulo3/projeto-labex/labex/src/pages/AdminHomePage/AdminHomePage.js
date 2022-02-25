import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { Button, MainStyle } from '../../style-app';
import { ButtonContainer } from './style';
import AdminTrips from '../../components/AdminTrips/AdminTrips';


const AdminHomePage = () => {

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

            <AdminTrips />
        </div>
    );
};

export default AdminHomePage;