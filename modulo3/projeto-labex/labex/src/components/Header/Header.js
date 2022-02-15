import { useNavigate } from 'react-router-dom';
import { HeaderStyle, ButtonContainer } from './style';

const Header = () => {

    const navigate = useNavigate();

    const goToListTrips = () => {
        navigate("/trips/list");
    }

    const goToLogin = () => {
        navigate("/login")
    }

    return (
        <HeaderStyle>
            <button>Menu</button>
            <h1>HermeneX</h1>
            <ButtonContainer>
                <button onClick={goToListTrips}> Viagens </button>
                <button onClick={goToLogin} > Login </button>
            </ButtonContainer>
        </HeaderStyle>
    )
}

export default Header