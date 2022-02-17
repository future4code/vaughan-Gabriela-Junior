import Header from '../../components/Header/Header';
import SpaceImage from '../../assets/imgs/space_trip.jpg';
import spaceBackground from '../../assets/imgs/space-background.jpg';
import { Div, Image, HomeContainer, TextAndButton } from './style';
import { Button } from '../../style-app';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    const goToListTrips = () => {
        navigate("/trips/list");
    }

    return (
        <Div>
            <Header />
            <HomeContainer>
                <Image src={spaceBackground} alt="Imagem de Foguete" />
                <TextAndButton>

                    <button onClick={goToListTrips}>Viaje agora!</button>
                    </TextAndButton>
            </HomeContainer>
        </Div>
    )
}

export default HomePage