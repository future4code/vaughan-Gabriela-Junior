import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import {BASE_URL} from '../../constants/baseurl';
import { LoginContainer, InputContainer } from './style';

const Login = () => {

    const navigate = useNavigate();

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const goToAdminHome = () => {
        navigate('/admin/trips/list');
    };
    
    const changeEmail = (event) => {
        setInputEmail(event.target.value);
        console.log(inputEmail)
    };

    const changePassword = (event) => {
        setInputPassword(event.target.value);
        console.log(inputPassword)
    };

    const login = async () => {
        const url = `${BASE_URL}/login`
        const body = {
            email: inputEmail,
            password: inputPassword
        };

        try {
            const response = await axios.post(url, body)
            console.log(response.data.token)
            setInputEmail("");
            setInputPassword("");
            localStorage.setItem('token', response.data.token)
            goToAdminHome()
            navigate('/admin/trips/list')

        } catch (error) {
            alert(`${error.response.data.message}!`)
            setInputEmail("");
            setInputPassword("");
        };
    };

    return (
    <LoginContainer>
        <h2>Faça o Login</h2>
        <InputContainer>
        <input
        placeholder="Email"
        value={inputEmail}
        onChange={changeEmail}
        >
        </input>
        <input
        placeholder="Senha"
        type="password"
        value={inputPassword}
        onChange={changePassword}
        >
        </input>
        <button onClick={login}>Entrar</button>
        </InputContainer>
    </LoginContainer>
    )
}

export default Login