import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToLogin, goToFeed } from '../../routes/coordinator';

const Header = ({loginButton, setLoginButton}) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
    };
    
    const loginButtonAction = () => {
        if (token){
            logout()
            setLoginButton("Login");
            goToLogin(navigate)
        } else {
            goToLogin(navigate);
        };
    };

    return (
        <div>
            <h1>Header</h1>
            <button onClick={() => goToFeed(navigate)}> Feed </button>
            <button onClick={loginButtonAction}>{loginButton}</button>
        </div>
    );
};

export default Header;