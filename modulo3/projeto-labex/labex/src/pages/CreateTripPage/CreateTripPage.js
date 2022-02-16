import { useNavigate } from "react-router-dom";
import CreateTrip from "../../components/CreateTrip/CreateTrip";
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
        <button onClick={goToAdminHome}>Voltar</button>

        <CreateTrip />
    </div>
    )
}

export default CreateTripPage