import { Button, CircularProgress, makeStyles, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { lightBackground } from "../../constants/colors";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import { SignUpContainer } from "./styled";

const useStyles = makeStyles({
    root: {
      backgroundColor: lightBackground
    },
  });

const SignUp = ({setLoginButton}) => {
    const classes = useStyles();
    const [form, onChange, clear] = useForm({ username: "", email: "", password: "" });
    const navigate = useNavigate();
    const [isLoadingPost, setIsLoadingPost] = useState();
    
    const onSubmitSignUp = (event) => {
        event.preventDefault();
        signUp(form, clear, navigate, setLoginButton, setIsLoadingPost)
    }
    
    return (
        <SignUpContainer>
            <Typography variant="h4" color="primary">Cadastro</Typography>
            <form onSubmit={onSubmitSignUp}>

                <TextField
                className={classes.root} 
                variant="outlined"
                label="Username"
                name="username"
                value={form.username}
                onChange={onChange}
                margin="normal"
                required
                />

                <TextField 
                className={classes.root}
                variant="outlined"
                label="Email"
                name="email"
                value={form.email}
                onChange={onChange}
                type="email"
                margin="normal"
                required
                />
                <TextField 
                className={classes.root}
                variant="outlined"
                label="Senha"
                name="password"
                value={form.password}
                onChange={onChange}
                type="password"
                margin="normal"
                required
                />
                {isLoadingPost && <CircularProgress />}
                {!isLoadingPost && <Button variant="contained" color="primary"
                    type="submit"
                >Enviar</Button>}
            </form>

        </SignUpContainer>
    );
};

export default SignUp;