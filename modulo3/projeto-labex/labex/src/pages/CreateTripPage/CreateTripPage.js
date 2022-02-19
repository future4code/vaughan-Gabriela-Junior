import { useNavigate } from "react-router-dom";
import CreateTrip from "../../components/CreateTrip/CreateTrip";
import Header from '../../components/Header/Header';
import { Button, MainStyle } from "../../style-app";


const CreateTripPage = () => {

    const navigate = useNavigate()

    const goToAdminHome = () => {
        navigate('/admin/trips/list')
    }

    return (
        <div>
            <Header />
            <MainStyle>
                <Button onClick={goToAdminHome}>Voltar</Button>
                <CreateTrip />
            </MainStyle>
        </div>
    );
};

export default CreateTripPage;