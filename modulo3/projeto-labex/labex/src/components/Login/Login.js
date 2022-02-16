import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import {BASE_URL} from '../../constants/baseurl';

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

        } catch (error) {
            alert(`${error.response.data.message}!`)
            setInputEmail("");
            setInputPassword("");
        };
    };

    return (
    <div>
        <h2>Login!</h2>
        <input
        placeholder="Email"
        value={inputEmail}
        onChange={changeEmail}
        >
        </input>
        <input
        placeholder="Senha"
        value={inputPassword}
        onChange={changePassword}
        >
        </input>
        <button onClick={login}>Entrar</button>
    </div>
    )
}

export default Login