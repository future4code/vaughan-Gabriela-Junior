import { useNavigate } from "react-router-dom";
import Header from '../../components/Header/Header';


const CreateTripPage = () => {

    const navigate = useNavigate()

    const goToAdminHome = () => {
        navigate('/admin/trips/list')
    }

    return (
    <div>
        <Header />
        <h2>Aqui é a Create Trip Page!</h2>
        <button onClick={goToAdminHome} >Voltar</button>
    </div>
    )
}

export default CreateTripPage