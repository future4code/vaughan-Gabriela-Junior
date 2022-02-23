import axios from 'axios';
import { baseURL } from '../constants/url';
import { goToFeed } from '../routes/coordinator';

export const login = async (body, clear, navigate, setLoginButton, setIsLoading) => {
    setIsLoading(true)
    const url = `${baseURL}/users/login`;

    try {
        const response = await axios.post(url, body)
        console.log(response.data.token)
        setIsLoading(false)
        localStorage.setItem("token", response.data.token);
        console.log(body)
        clear();
        goToFeed(navigate);
        setLoginButton("Logout");

    } catch (error) {
        alert(`${error.response.data.message}`)
        console.log(error.response)
        setIsLoading(false)
    };
};

export const signUp = async(body, clear, navigate, setLoginButton, setIsLoading) => {
    setIsLoading(true)
    const url = `${baseURL}/users/signup`;
    
    try {
        const response = await axios.post(url, body)
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        console.log(body);
        setIsLoading(false)
        clear();
        goToFeed(navigate);
        setLoginButton("Logout");

    } catch (error) {
        alert(`${error.response}`)
        console.log(error.response.data.message)
        setIsLoading(false)
    };
};

