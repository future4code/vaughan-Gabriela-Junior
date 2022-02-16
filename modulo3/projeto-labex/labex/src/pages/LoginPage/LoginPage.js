import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';

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
        <h2>Aqui é a Login Page!</h2>
        <button onClick={goToHome}>Voltar</button>
        <button onClick={goToAdminHome}>Entrar</button>
        <Login />
    </div>
    )
}

export default LoginPage