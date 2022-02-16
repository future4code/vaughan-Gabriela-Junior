import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';
import { MainStyle, Button } from './style';

const LoginPage = () => {

    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    const goToAdminHome = () => {
        navigate('/admin/trips/list')
    }

    return (
    <div>
        <Header />
        <MainStyle>
        <Button onClick={goToAdminHome}>Admin</Button>
        <Button onClick={goToHome}>Voltar</Button>
        <Login />
        </MainStyle>
    </div>
    )
}

export default LoginPage