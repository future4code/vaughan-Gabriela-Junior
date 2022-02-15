import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header'
import ApplicationForm from '../../components/ApplicationForm/ApplicationForm';
import {MainStyle} from './style';

const ApplicationFormPage = (props) => {
    const navigate = useNavigate();

    const goToListTrips = () => {
        navigate("/trips/list");
    };

    return (
    <div>
        <Header />
        <MainStyle>
        <button onClick={goToListTrips} > Voltar </button>
        <ApplicationForm trips={props.trips}/>
        </MainStyle>
    </div>
    )
}

export default ApplicationFormPage