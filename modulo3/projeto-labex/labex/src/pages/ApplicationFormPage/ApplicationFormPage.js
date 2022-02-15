import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header'
import ApplicationForm from '../../components/ApplicationForm/ApplicationForm';

const ApplicationFormPage = (props) => {
    const navigate = useNavigate();

    const goToListTrips = () => {
        navigate("/trips/list");
    };

    return (
    <div>
        <Header />
        <h2>Aqui é a Application Form Page!</h2>
        <button onClick={goToListTrips} > Voltar </button>
        <ApplicationForm trips={props.trips}/>
    </div>
    )
}

export default ApplicationFormPage