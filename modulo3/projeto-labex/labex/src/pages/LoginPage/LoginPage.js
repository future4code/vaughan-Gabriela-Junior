import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';
import { MainStyle, Button } from '../../style-app';

const LoginPage = () => {

    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    return (
        <div>
            <Header />
            <MainStyle>
                <Button onClick={goToHome}>Voltar</Button>
                <Login />
            </MainStyle>
        </div>
    )
}

export default LoginPage