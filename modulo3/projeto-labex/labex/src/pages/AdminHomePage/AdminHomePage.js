import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'

const AdminHomePage = () => {

    const navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    const goToCreateTrip = () => {
        navigate('/admin/trips/create')
    }

    const goToDetails = () => {
        navigate('/admin/trips/:id')
    }

    return (
    <div>
        <Header />
        <h2>Aqui é a Admin Home Page!</h2>
        <button onClick={goToHome} > Voltar </button>
        <button onClick={goToCreateTrip} > Criar Viagem </button>
        <button onClick={goToDetails} >Detalhes</button>
    </div>
    )
}

export default AdminHomePage