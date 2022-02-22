import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import {login} from '../../services/user';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button, TextField } from '@material-ui/core';
import { LoginContainer } from './styled';

const Login = ({setLoginButton}) => {
    const navigate = useNavigate();
    const [form, onChange, clear] = useForm({email: "", password: ""});
    

    const onSubmitLogin = (event) => {
        event.preventDefault();
        login(form, clear, navigate, setLoginButton);
        
    };

    return (
      <LoginContainer>
        <AccountCircleIcon color="primary" style={{ fontSize: 80 }}/>

        <form
        onSubmit={onSubmitLogin}
        >

          <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={form.email}
          onChange={onChange}
          type="email"
          margin="normal"
          required
          />
          <TextField
          label="Senha"
          variant="outlined"
          name="password"
          value={form.password}
          onChange={onChange}
          type="password"
          inputProps={{ pattern: '^.{8,30}', title: "Senha deve possuir no mínimo 8 e no máximo 30 caracteres" }}
          margin="normal"
          required
          />
            <Button
            type="submit"
            margin="normal"
            >Enviar</Button>
        </form>
        </LoginContainer>
    );
  }
  
  export default Login;
  