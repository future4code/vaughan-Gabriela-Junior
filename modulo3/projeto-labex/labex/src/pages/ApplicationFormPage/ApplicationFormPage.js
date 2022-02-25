import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header'
import ApplicationForm from '../../components/ApplicationForm/ApplicationForm';
import { MainStyle, Button } from '../../style-app';

const ApplicationFormPage = (props) => {
    const navigate = useNavigate();

    const goToListTrips = () => {
        navigate("/trips/list");
    };

    return (
        <div>
            <Header />
            <MainStyle>
                <Button onClick={goToListTrips} > Voltar </Button>
                <ApplicationForm />
            </MainStyle>
        </div>
    );
};

export default ApplicationFormPage;