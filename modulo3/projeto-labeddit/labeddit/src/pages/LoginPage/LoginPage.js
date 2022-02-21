import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../../components/Login/Login';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import { goToSignUp } from '../../routes/coordinator';

const LoginPage = ({setLoginButton}) => {
    const navigate = useNavigate();

    // useUnprotectedPage();

    return (
      <div>
        Login Page!

        <Login setLoginButton={setLoginButton}/>

        <button onClick={() => {goToSignUp(navigate)}}>Cadastre-se</button>
      </div>
    );
  }
  
  export default LoginPage;
  