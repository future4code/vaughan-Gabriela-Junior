import { useNavigate } from 'react-router-dom';
import { HeaderStyle, ButtonContainer } from './style';
import { token } from '../../constants/token';
import { useEffect } from 'react';

const Header = () => {

    const navigate = useNavigate();


    const goToListTrips = () => {
        navigate("/trips/list");
    }

    const goToLogin = () => {
        if (token) {
            navigate("/admin/trips/list")
        } else {
            navigate("/login")
        }
    }

    return (
        <HeaderStyle>
            <button>Menu</button>
            <h1>HermeneX</h1>
            <ButtonContainer>
                <button onClick={goToListTrips}> Viagens </button>
                <button onClick={goToLogin}> Admin </button>
            </ButtonContainer>
        </HeaderStyle>
    )
}

export default Header