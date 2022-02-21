import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import {login} from '../../services/user';

const Login = ({setLoginButton}) => {
    const navigate = useNavigate();
    const [form, onChange, clear] = useForm({email: "", password: ""});
    

    const onSubmitLogin = (event) => {
        event.preventDefault();
        login(form, clear, navigate, setLoginButton);
        
    };

    return (
      <div>
        Login Form!

        <form
        onSubmit={onSubmitLogin}
        >
            <input
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={onChange}
            type="email"
            required
            />
            <input
            placeholder="Senha"
            name="password"
            value={form.password}
            onChange={onChange}
            type="password"
            required
            />
            <button
            type="submit"
            >Enviar</button>
        </form>
        </div>
    );
  }
  
  export default Login;
  